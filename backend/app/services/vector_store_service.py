from langchain_chroma import Chroma

from app.services.embedding_service import EmbeddingService


class VectorStoreService:

    COLLECTION_NAME = "resume_collection"
    PERSIST_DIRECTORY = "chroma_db"

    @staticmethod
    def get_vector_store():
        """
        Returns an existing Chroma vector store.
        If it doesn't exist, Chroma automatically creates it.
        """

        embedding_model = EmbeddingService.get_embedding_model()

        vector_store = Chroma(
            collection_name=VectorStoreService.COLLECTION_NAME,
            embedding_function=embedding_model,
            persist_directory=VectorStoreService.PERSIST_DIRECTORY,
        )

        return vector_store

    @staticmethod
    def add_documents(chunks):
        """
        Adds new chunks to the existing vector store.
        """

        vector_store = VectorStoreService.get_vector_store()

        vector_store.add_documents(chunks)

        return vector_store