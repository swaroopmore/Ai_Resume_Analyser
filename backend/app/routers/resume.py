from fastapi import APIRouter, UploadFile, File
from pathlib import Path
import shutil

from app.services.document_loader import DocumentLoaderService
from app.services.text_splitter import TextSplitterService
from app.services.vector_store_service import VectorStoreService

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

    documents = DocumentLoaderService.load_pdf(str(file_path))

    chunks = TextSplitterService.split_documents(documents)

    vector_store = VectorStoreService.add_documents(chunks)

    print("=" * 60)
    print(f"Resume Uploaded : {file.filename}")
    print(f"Pages           : {len(documents)}")
    print(f"Chunks          : {len(chunks)}")
    print("Vector Store    : Created Successfully")
    print("=" * 60)

    return {
        "message": "Resume uploaded successfully",
        "filename": file.filename,
        "pages": len(documents),
        "chunks": len(chunks),
        "status": "Vector Store Created"
    }