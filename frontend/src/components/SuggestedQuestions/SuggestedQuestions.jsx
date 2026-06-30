import "./SuggestedQuestions.css";

export default function SuggestedQuestions({ setQuestion }) {

    const questions = [

        "Summarize my resume",

        "What are my technical skills?",

        "What projects have I completed?",

        "What are my strengths?",

        "Generate interview questions",

        "How can I improve my resume?"

    ];

    return (

        <div className="suggested">

            <h3>Try asking</h3>

            <div className="chips">

                {

                    questions.map((q,index)=>(

                        <button
                            key={index}
                            onClick={()=>setQuestion(q)}
                        >

                            {q}

                        </button>

                    ))

                }

            </div>

        </div>

    );

}