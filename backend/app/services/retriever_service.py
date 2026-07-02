from app.services.vector_store_service import VectorStoreService


class RetrieverService:

    @staticmethod
    def similarity_search(question: str, k: int = 3):

        vector_store = VectorStoreService.get_vector_store()

        results = vector_store.similarity_search_with_score(
            question,
            k=k
        )

        return results