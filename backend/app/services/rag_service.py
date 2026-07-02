from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate

from app.services.chat_model_service import ChatModelService
from app.services.retriever_service import RetrieverService


class RAGService:

    @staticmethod
    def ask_question(question: str):

        llm = ChatModelService.get_chat_model()

        # Retrieve similar chunks with scores
        results = RetrieverService.similarity_search(
            question,
            k=3
        )

        if not results:

            return {
                "answer": "I couldn't find that information in the uploaded resume.",
                "sources": []
            }

        # Build context for the LLM
        context = "\n\n--------------------\n\n".join(
            document.page_content
            for document, score in results
        )

        prompt = ChatPromptTemplate.from_template(
            """
You are an AI Resume Analyzer.

Your task is to answer questions ONLY using the provided resume context.

Rules:

1. Never invent information.
2. Never assume missing details.
3. If the answer cannot be found in the context, respond exactly:
"I couldn't find that information in the uploaded resume."

4. Keep answers concise, accurate, and professional.

Resume Context:
{context}

Question:
{question}
"""
        )

        chain = (
            prompt
            | llm
            | StrOutputParser()
        )

        answer = chain.invoke(
            {
                "context": context,
                "question": question
            }
        )

        # Prepare retrieval information
        sources = []

        for index, (document, score) in enumerate(results):

            sources.append(
                {
                    "chunk": index + 1,
                    "page": document.metadata.get("page", 0) + 1,
                    "score": round(float(score), 4),
                    "characters": len(document.page_content),
                    "content": document.page_content[:250]
                }
            )

        return {
            "answer": answer,
            "sources": sources
        }