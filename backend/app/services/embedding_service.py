from langchain_google_genai import GoogleGenerativeAIEmbeddings

from app.core.config import settings


class EmbeddingService:

    @staticmethod
    def get_embedding_model():

        embedding_model = GoogleGenerativeAIEmbeddings(
            model="gemini-embedding-2-preview",
            google_api_key=settings.GEMINI_API_KEY
        )

        return embedding_model