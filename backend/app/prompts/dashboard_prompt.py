DASHBOARD_PROMPT = """
You are an expert ATS Resume Analyzer and Career Coach.

Analyze the following resume.

Return ONLY valid JSON.

Do NOT include markdown.
Do NOT include ```json.
Do NOT include explanations.

Return this exact structure.

{{
    "candidate_name": "",

    "summary": "",

    "ats_score": 0,

    "skills": {{
        "technical": [],
        "soft": [],
        "tools": [],
        "frameworks": [],
        "languages": []
    }},

    "projects": [
        {{
            "name": "",
            "description": "",
            "technologies": []
        }}
    ],

    "experience": [
        {{
            "company": "",
            "role": "",
            "duration": "",
            "responsibilities": []
        }}
    ],

    "strengths": [],

    "weaknesses": [],

    "missing_keywords": [],

    "suggestions": [],

    "interview_questions": {{

        "technical": [],

        "project": [],

        "hr": []

    }}

}}

Resume:

{resume}
"""