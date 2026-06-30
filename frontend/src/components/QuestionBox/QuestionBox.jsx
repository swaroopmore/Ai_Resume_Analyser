import { useState } from "react";
import { Sparkles } from "lucide-react";
import API from "../../services/api";
import AnswerCard from "../AnswerCard/AnswerCard";
import Loader from "../Loader/Loader";
import "./QuestionBox.css";
import SuggestedQuestions from "../SuggestedQuestions/SuggestedQuestions.jsx";

export default function QuestionBox() {

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);

    const askAI = async () => {

        if (!question.trim()) return;

        setLoading(true);
        setAnswer("");

        try {

            const response = await API.post("/resume/ask", {
                question: question,
            });

            setAnswer(response.data.answer);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    return (

        <section className="question-section">

            <h2>

                Ask AI About Your Resume

            </h2>

            <div className="question-box">

                <input
                    type="text"
                    placeholder="Example: Summarize my experience..."
                    value={question}
                    onChange={(e)=>setQuestion(e.target.value)}
                />

                <button onClick={askAI}>

                    <Sparkles size={18}/>

                    Ask AI

                </button>

            </div>
            <SuggestedQuestions
    setQuestion={setQuestion}
/>

            {loading && <Loader/>}

            {!loading && answer &&

                <AnswerCard answer={answer}/>

            }

        </section>

    );

}