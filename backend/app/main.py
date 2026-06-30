from fastapi import FastAPI
from app.routers.resume import router as resume_router
from app.core.config import settings
from fastapi.middleware.cors import CORSMiddleware
from app.routers import dashboard

app = FastAPI(title=settings.APP_NAME)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(resume_router)
app.include_router(dashboard.router)