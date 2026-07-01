from fastapi import APIRouter

from app.services import analysis_storage

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/")
def dashboard():

    return analysis_storage.analysis_data


@router.get("/summary")
def summary():

    return {
        "summary": analysis_storage.analysis_data.get("summary")
    }


@router.get("/skills")
def skills():

    return {
        "skills": analysis_storage.analysis_data.get("skills")
    }


@router.get("/ats")
def ats():

    return {
        "ats_score": analysis_storage.analysis_data.get("ats_score")
    }


@router.get("/projects")
def projects():

    return {
        "projects": analysis_storage.analysis_data.get("projects")
    }


@router.get("/experience")
def experience():

    return {
        "experience": analysis_storage.analysis_data.get("experience")
    }


@router.get("/strengths")
def strengths():

    return {
        "strengths": analysis_storage.analysis_data.get("strengths")
    }


@router.get("/weaknesses")
def weaknesses():

    return {
        "weaknesses": analysis_storage.analysis_data.get("weaknesses")
    }


@router.get("/suggestions")
def suggestions():

    return {
        "suggestions": analysis_storage.analysis_data.get("suggestions")
    }


@router.get("/interview")
def interview():

    return {
        "interview_questions": analysis_storage.analysis_data.get("interview_questions")
    }