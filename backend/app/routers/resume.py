from fastapi import APIRouter, UploadFile, File
from pathlib import Path
import shutil

from app.services.document_loader import DocumentLoaderService
from app.services.text_splitter import TextSplitterService

router = APIRouter(
    prefix="/resume",
    tags=["Resume"]
)

UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)


@router.post("/upload")
async def upload_resume(file: UploadFile = File(...)):
    # Create the path where the uploaded file will be stored
    file_path = UPLOAD_DIR / file.filename

    # Save the uploaded PDF
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Load the PDF using LangChain
    documents = DocumentLoaderService.load_pdf(str(file_path))

    # Split the documents into chunks
    chunks = TextSplitterService.split_documents(documents)

    # Print information in the terminal
    print("=" * 60)
    print(f"Resume Uploaded : {file.filename}")
    print(f"Number of Pages : {len(documents)}")
    print(f"Number of Chunks: {len(chunks)}")
    print("=" * 60)

    return {
        "message": "Resume uploaded successfully",
        "filename": file.filename,
        "pages": len(documents),
        "chunks": len(chunks)
    }