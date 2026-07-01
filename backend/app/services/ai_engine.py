import json

from app.prompts.dashboard_prompt import DASHBOARD_PROMPT
from app.services.ai_service import ask_resume
from app.services import analysis_storage


class AIEngine:

    @staticmethod
    def generate_dashboard(resume_text: str):

        prompt = DASHBOARD_PROMPT.format(
            resume=resume_text
        )

        response = ask_resume(
            "",
            prompt
        )

        try:

            dashboard = json.loads(response)

        except Exception:

            cleaned_response = (
                response
                .replace("```json", "")
                .replace("```", "")
                .strip()
            )

            dashboard = json.loads(cleaned_response)

        analysis_storage.analysis_data = dashboard

        return dashboard