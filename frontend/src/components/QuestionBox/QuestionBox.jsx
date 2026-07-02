import { useState } from "react";
import { Sparkles } from "lucide-react";

import API from "../../services/api";

import AnswerCard from "../AnswerCard/AnswerCard";
import Loader from "../Loader/Loader";
import SuggestedQuestions from "../SuggestedQuestions/SuggestedQuestions";
import RetrievalInspector from "../RetrievalInspector/RetrievalInspector";

import "./QuestionBox.css";

export default function QuestionBox() {

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [sources, setSources] = useState([]);
    const [loading, setLoading] = useState(false);

    const askAI = async () => {

        if (!question.trim()) return;

        setLoading(true);
        setAnswer("");
        setSources([]);

        try {

            const response = await API.post(
                "/resume/ask",
                {
                    question
                }
            );

            setAnswer(response.data.answer);
            setSources(response.data.sources);

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
                    onChange={(e) => setQuestion(e.target.value)}
                />

                <button onClick={askAI}>

                    <Sparkles size={18}/>

                    Ask AI

                </button>

            </div>

            <SuggestedQuestions
                setQuestion={setQuestion}
            />

            {loading && <Loader />}

            {!loading && answer && (

                <>
                    <AnswerCard answer={answer} />

                    <RetrievalInspector
                        sources={sources}
                    />
                </>

            )}

        </section>

    );

}