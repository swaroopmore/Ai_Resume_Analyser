import {
    Award,
    FileText,
    Code,
    Briefcase,
    TrendingUp,
    TriangleAlert,
    Lightbulb,
    MessageSquare
} from "lucide-react";

import "./DashboardGrid.css";

export default function DashboardGrid({ dashboardData }) {

    if (!dashboardData) return null;

    const cards = [

        {
            title: "ATS Score",
            icon: <Award size={28}/>,
            value: dashboardData.ats_score
        },

        {
            title: "Resume Summary",
            icon: <FileText size={28}/>,
            value: dashboardData.summary
        },

        {
            title: "Skills",
            icon: <Code size={28}/>,
            value: dashboardData.skills?.technical?.join(", ")
        },

        {
            title: "Experience",
            icon: <Briefcase size={28}/>,
            value: dashboardData.experience?.length + " Experience(s)"
        },

        {
            title: "Strengths",
            icon: <TrendingUp size={28}/>,
            value: dashboardData.strengths?.join(", ")
        },

        {
            title: "Weaknesses",
            icon: <TriangleAlert size={28}/>,
            value: dashboardData.weaknesses?.join(", ")
        },

        {
            title: "Suggestions",
            icon: <Lightbulb size={28}/>,
            value: dashboardData.suggestions?.join(", ")
        },

        {
            title: "Interview Questions",
            icon: <MessageSquare size={28}/>,
            value:
                dashboardData.interview_questions?.technical?.length +
                " Technical Questions"
        }

    ];

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

                        <h3>

                            {card.title}

                        </h3>

                        <p>

                            {card.value || "No Data"}

                        </p>

                    </div>

                ))

            }

        </section>

    );

}