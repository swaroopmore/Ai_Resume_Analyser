import {
    FileText,
    Award,
    Code,
    Briefcase,
    TrendingUp,
    TriangleAlert,
    Lightbulb,
    MessageSquare
} from "lucide-react";

import "./DashboardGrid.css";

const cards = [

    {
        title: "ATS Score",
        icon: <Award size={28}/>,
        text: "View ATS compatibility score."
    },

    {
        title: "Resume Summary",
        icon: <FileText size={28}/>,
        text: "AI generated resume summary."
    },

    {
        title: "Skills Analysis",
        icon: <Code size={28}/>,
        text: "Technical & soft skills detected."
    },

    {
        title: "Experience",
        icon: <Briefcase size={28}/>,
        text: "Professional experience overview."
    },

    {
        title: "Strengths",
        icon: <TrendingUp size={28}/>,
        text: "Strong points identified by AI."
    },

    {
        title: "Weaknesses",
        icon: <TriangleAlert size={28}/>,
        text: "Areas needing improvement."
    },

    {
        title: "Suggestions",
        icon: <Lightbulb size={28}/>,
        text: "AI recommendations."
    },

    {
        title: "Interview Questions",
        icon: <MessageSquare size={28}/>,
        text: "Questions based on your resume."
    }

];

export default function DashboardGrid() {

    return (

        <section className="dashboard-grid">

            {

                cards.map((card,index)=>(

                    <div
                        className="grid-card"
                        key={index}
                    >

                        <div className="grid-icon">

                            {card.icon}

                        </div>

                        <h3>{card.title}</h3>

                        <p>{card.text}</p>

                        <button>

                            View Details

                        </button>

                    </div>

                ))

            }

        </section>

    );

}