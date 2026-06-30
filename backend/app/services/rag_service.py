from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate

from app.services.chat_model_service import ChatModelService
from app.services.retriever_service import RetrieverService


class RAGService:

    @staticmethod
    def ask_question(question: str):

        retriever = RetrieverService.get_retriever()

        llm = ChatModelService.get_chat_model()

        context_documents = retriever.invoke(question)

        if not context_documents:
            return "No relevant information was found in the uploaded resume."

        context = "\n\n--------------------\n\n".join(
            document.page_content
            for document in context_documents
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

        return answer