import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

model = genai.GenerativeModel("gemini-2.5-flash")


def ask_resume(context, prompt):

    final_prompt = f"""

You are an expert Resume Analyzer.

Resume:

{context}


Task:

{prompt}

Return a professional answer.

"""

    response = model.generate_content(final_prompt)

    return response.text