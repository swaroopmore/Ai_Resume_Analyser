import { Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import "./AnswerCard.css";

export default function AnswerCard({ answer }) {

    const [copied, setCopied] = useState(false);

    const copyAnswer = async () => {
        await navigator.clipboard.writeText(answer);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (

        <div className="answer-card">

            <div className="answer-header">

                <h2>AI Response</h2>

                <button
                    className="copy-btn"
                    onClick={copyAnswer}
                >
                    {
                        copied
                            ? <CheckCircle2 size={18}/>
                            : <Copy size={18}/>
                    }

                    {copied ? "Copied" : "Copy"}

                </button>

            </div>

            <p className="answer-text">

                {answer}

            </p>

        </div>

    );

}