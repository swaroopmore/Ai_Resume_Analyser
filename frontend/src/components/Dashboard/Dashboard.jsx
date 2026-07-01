import "./Dashborad.css";

export default function Dashboard({ dashboardData }) {

    if (!dashboardData) return null;

    return (

        <section className="dashboard">

            <div className="dashboard-card">

                <span className="status">

                    🟢 Resume Uploaded Successfully

                </span>

                <h1>

                    Welcome {dashboardData.candidate_name || "Candidate"} 👋

                </h1>

                <p>

                    Your resume has been successfully analyzed by ResumePilot.

                    Explore your AI-powered insights, ATS score, extracted skills,
                    projects, experience, strengths, weaknesses and personalized
                    recommendations below.

                </p>

                <div className="dashboard-stats">

                    <div className="stat-card">

                        <h3>ATS Score</h3>

                        <h2>

                            {dashboardData.ats_score ?? "--"}

                        </h2>

                    </div>

                    <div className="stat-card">

                        <h3>Projects</h3>

                        <h2>

                            {dashboardData.projects?.length ?? 0}

                        </h2>

                    </div>

                    <div className="stat-card">

                        <h3>Experience</h3>

                        <h2>

                            {dashboardData.experience?.length ?? 0}

                        </h2>

                    </div>

                </div>

            </div>

        </section>

    );

}