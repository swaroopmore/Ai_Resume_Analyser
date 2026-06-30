from fastapi import APIRouter

from app.services import resume_context
from app.services.resume_analyzer import ResumeAnalyzer

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/summary")
def summary():

    return {
        "summary":
        ResumeAnalyzer.generate_summary(
            resume_context.resume_context
        )
    }


@router.get("/skills")
def skills():

    return {
        "skills":
        ResumeAnalyzer.generate_skills(
            resume_context.resume_context
        )
    }


@router.get("/ats")
def ats():

    return {
        "ats":
        ResumeAnalyzer.generate_ats(
            resume_context.resume_context
        )
    }


@router.get("/projects")
def projects():

    return {
        "projects":
        ResumeAnalyzer.generate_projects(
            resume_context.resume_context
        )
    }


@router.get("/experience")
def experience():

    return {
        "experience":
        ResumeAnalyzer.generate_experience(
            resume_context.resume_context
        )
    }


@router.get("/strengths")
def strengths():

    return {
        "strengths":
        ResumeAnalyzer.generate_strengths(
            resume_context.resume_context
        )
    }


@router.get("/weaknesses")
def weaknesses():

    return {
        "weaknesses":
        ResumeAnalyzer.generate_weaknesses(
            resume_context.resume_context
        )
    }


@router.get("/suggestions")
def suggestions():

    return {
        "suggestions":
        ResumeAnalyzer.generate_suggestions(
            resume_context.resume_context
        )
    }


@router.get("/interview")
def interview():

    return {
        "interview":
        ResumeAnalyzer.generate_interview_questions(
            resume_context.resume_context
        )
    }