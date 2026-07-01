from langchain_chroma import Chroma

from app.services.embedding_service import EmbeddingService


class VectorStoreService:

    COLLECTION_NAME = "resume_collection"
    PERSIST_DIRECTORY = "chroma_db"

    @staticmethod
    def get_vector_store():

        embedding_model = EmbeddingService.get_embedding_model()

        vector_store = Chroma(
            collection_name=VectorStoreService.COLLECTION_NAME,
            embedding_function=embedding_model,
            persist_directory=VectorStoreService.PERSIST_DIRECTORY,
        )

        return vector_store

    @staticmethod
    def replace_documents(chunks):

        vector_store = VectorStoreService.get_vector_store()

        try:

            vector_store.delete_collection()

        except Exception:

            pass

        vector_store = Chroma(
            collection_name=VectorStoreService.COLLECTION_NAME,
            embedding_function=EmbeddingService.get_embedding_model(),
            persist_directory=VectorStoreService.PERSIST_DIRECTORY,
        )

        vector_store.add_documents(chunks)

        return vector_store