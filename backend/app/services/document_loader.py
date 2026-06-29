from langchain_community.document_loaders import PyPDFLoader


class DocumentLoaderService:

    @staticmethod#loading a PDF doesn't depend on any object state.
    def load_pdf(file_path: str):
        loader = PyPDFLoader(file_path)

        documents = loader.load()

        return documents