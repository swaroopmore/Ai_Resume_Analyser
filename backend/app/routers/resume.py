from fastapi import APIRouter, UploadFile, File
from pathlib import Path
import shutil

from app.schemas.question import QuestionRequest
from app.services.document_loader import DocumentLoaderService
from app.services.rag_service import RAGService
from app.services.text_splitter import TextSplitterService
from app.services.vector_store_service import VectorStoreService
from app.services import resume_context

router = APIRouter(
    prefix="/resume",
    tags=["Resume"]
)

UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)


@router.post("/upload")
async def upload_resume(file: UploadFile = File(...)):
    file_path = UPLOAD_DIR / file.filename

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Load PDF
    documents = DocumentLoaderService.load_pdf(str(file_path))

    # Create one complete resume text
    resume_text = "\n\n".join(
        document.page_content for document in documents
    )

    # Save it in memory
    resume_context.resume_context = resume_text

    # Split into chunks
    chunks = TextSplitterService.split_documents(documents)

    # Store in ChromaDB
    VectorStoreService.add_documents(chunks)

    print("=" * 60)
    print(f"Resume Uploaded : {file.filename}")
    print(f"Pages           : {len(documents)}")
    print(f"Chunks          : {len(chunks)}")
    print("=" * 60)

    return {
        "message": "Resume uploaded successfully",
        "filename": file.filename,
        "pages": len(documents),
        "chunks": len(chunks)
    }


@router.post("/ask")
async def ask_question(request: QuestionRequest):

    answer = RAGService.ask_question(request.question)

    return {
        "question": request.question,
        "answer": answer
    }