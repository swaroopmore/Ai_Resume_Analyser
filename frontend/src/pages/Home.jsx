import { useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar/Navbar";
import UploadResume from "../components/UploadResume/UploadResume";
import QuestionBox from "../components/QuestionBox/QuestionBox";
import Dashboard from "../components/Dashboard/Dashboard";
import DashboardGrid from "../components/DashboardGrid/DashboardGrid";

export default function Home() {

    const [dashboardData, setDashboardData] = useState(null);

    const loadDashboard = async () => {

        try {

            const response = await axios.get(
                "http://127.0.0.1:8000/dashboard"
            );

            setDashboardData(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-violet-100 overflow-hidden relative">

            <div className="absolute w-[450px] h-[450px] bg-blue-400/20 blur-[170px] rounded-full -left-20 top-10"></div>

            <div className="absolute w-[350px] h-[350px] bg-violet-400/20 blur-[160px] rounded-full right-10 top-32"></div>

            <div className="absolute w-[500px] h-[500px] bg-cyan-300/20 blur-[170px] rounded-full left-1/3 bottom-0"></div>

            <Navbar />

            <section className="relative z-10 mt-16 text-center">

                <h1 className="text-7xl font-black text-slate-800">

                    Resume

                    <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">

                        Pilot

                    </span>

                </h1>

                <p className="mt-5 text-2xl text-slate-600 font-medium">

                    Your AI Career Co-Pilot

                </p>

                <p className="mt-8 max-w-4xl mx-auto text-slate-500 text-lg leading-9">

                    Analyze resumes using LangChain,
                    Gemini AI and RAG.
                    Instantly generate ATS Score,
                    Resume Summary,
                    Skills Analysis,
                    Interview Questions
                    and Improvement Suggestions.

                </p>

            </section>

            <UploadResume
                onUploadSuccess={loadDashboard}
            />

            {

                dashboardData && (

                    <>

                        <Dashboard
                            dashboardData={dashboardData}
                        />

                        <QuestionBox />

                        <DashboardGrid
                            dashboardData={dashboardData}
                        />

                    </>

                )

            }

        </div>

    );

}