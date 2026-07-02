import {
    Search,
    FileText,
    Hash,
    Ruler
} from "lucide-react";

import "./RetrievalInspector.css";

export default function RetrievalInspector({ sources }) {

    if (!sources || sources.length === 0) return null;

    return (

        <section className="retrieval">

            <div className="retrieval-header">

                <Search size={22}/>

                <h2>Retrieval Inspector</h2>

            </div>

            <p className="retrieval-subtitle">

                These are the chunks retrieved from the vector database
                and used by the LLM to generate the answer.

            </p>

            <div className="retrieval-grid">

                {

                    sources.map((source,index)=>(

                        <div
                            className="retrieval-card"
                            key={index}
                        >

                            <div className="retrieval-top">

                                <span>

                                    📄 Chunk #{source.chunk}

                                </span>

                                <span>

                                    Page {source.page}

                                </span>

                            </div>

                            <div className="retrieval-meta">

                                <div>

                                    <Hash size={16}/>

                                    Distance:
                                    {source.score}

                                </div>

                                <div>

                                    <Ruler size={16}/>

                                    {source.characters} chars

                                </div>

                            </div>

                            <div className="chunk-preview">

                                <FileText size={18}/>

                                <p>

                                    {source.content}

                                    ...

                                </p>

                            </div>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}