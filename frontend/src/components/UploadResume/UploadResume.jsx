import { useState } from "react";
import { UploadCloud, FileText, ShieldCheck, CheckCircle2 } from "lucide-react";
import API from "../../services/api";
import "./UploadResume.css";

export default function UploadResume({ onUploadSuccess })  {

    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [uploaded, setUploaded] = useState(false);

 const uploadResume = async () => {

    if (!file) {
        console.log("No file selected");
        return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {

        console.log("Uploading...");

        setLoading(true);

        const response = await API.post(
    "/resume/upload",
    formData
);

setUploaded(true);

if (onUploadSuccess) {

    onUploadSuccess(response.data);

}
    } catch (error) {

        console.log("ERROR:", error);

    } finally {

        setLoading(false);

    }

};

    return (

        <div className="upload-card">

            <div className="upload-icon">
                <UploadCloud size={36}/>
            </div>

            <h2>Upload Resume</h2>

            <p>

                Upload your resume in PDF format and let AI analyze your
                skills, projects, experience and ATS score.

            </p>

            {uploaded && (

                <div className="success-banner">

                    <CheckCircle2 size={20}/>

                    Resume uploaded successfully

                </div>

            )}

            <label className="drop-zone">

                <UploadCloud size={55}/>

                <h3>Drag & Drop Resume</h3>

                <span>or click anywhere to browse</span>

                <input
                    type="file"
                    accept=".pdf"
                    onChange={(e)=>setFile(e.target.files[0])}
                />

            </label>

            <div className="file-info">

                <div className="file-name">

                    <FileText size={18}/>

                    {file ? file.name : "No file selected"}

                </div>

            </div>

            <button
                className="upload-btn"
                onClick={uploadResume}
                disabled={loading}
            >

                {loading
                    ? "Uploading..."
                    : uploaded
                    ? "Uploaded ✓"
                    : "Upload Resume"}

            </button>

            <div className="secure">

                <ShieldCheck size={18}/>

                Your data is secure and private.

            </div>

        </div>

    );

}