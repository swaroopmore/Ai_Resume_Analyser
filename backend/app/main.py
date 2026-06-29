from fastapi import FastAPI
from app.routers.resume import router as resume_router
from app.core.config import settings

app = FastAPI(title=settings.APP_NAME)

app.include_router(resume_router)