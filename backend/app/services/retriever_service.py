from app.services.vector_store_service import VectorStoreService


class RetrieverService:

    @staticmethod
    def get_retriever():

        vector_store = VectorStoreService.get_vector_store()#this opens exixting Chroma Collection


        retriever = vector_store.as_retriever(
            search_type="similarity",#Use Cosine Similarity to find the Closest Vector
            search_kwargs={
                "k": 3#Return only the 3 most relevant chunks
            }
        )

        return retriever