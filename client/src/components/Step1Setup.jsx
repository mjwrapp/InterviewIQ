import React from "react";
import { motion } from "framer-motion";
import {
  FaUserTie,
  FaBriefcase,
  FaFileUpload,
  FaMicrophoneAlt,
  FaChartLine
} from "react-icons/fa";
import axios from "axios";
import { ServerURL } from "../App";

function Step1Setup({ onStart }) {
  const [role, setRole] = React.useState("");
  const [experience, setExperience] = React.useState("");
  const [mode, setMode] = React.useState("Technical");

  const [resumeFile, setResumeFile] = React.useState(null);
  const [projects, setProjects] = React.useState([]);
  const [skills, setSkills] = React.useState([]);
  const [resumeText, setResumeText] = React.useState("");

  const [analysisDone, setAnalysisDone] = React.useState(false);
  const [analyzing, setAnalyzing] = React.useState(false);

  const fileInputRef = React.useRef(null);

  // ✅ Upload Resume
  const handleUploadResume = async () => {
    if (!resumeFile || analyzing) return;

    setAnalyzing(true);

    const formData = new FormData();
    formData.append("resume", resumeFile);

    try {
      const result = await axios.post(
        ServerURL + "/api/interview/resume",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      setRole(result.data.role || "");
      setExperience(result.data.experience || "");
      setProjects(result.data.projects || []);
      setSkills(result.data.skills || []);
      setResumeText(result.data.resumeText || "");
      setAnalysisDone(true);

    } catch (error) {
      console.error("Upload error:", error.response?.data || error.message);
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4"
    >
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl grid md:grid-cols-2 overflow-hidden">

        {/* LEFT */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-green-50 to-green-100 p-12 flex flex-col justify-center"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Start Your AI Interview
          </h2>

          <p className="text-gray-600 mb-10">
            Practice real interview scenarios powered by AI.
          </p>

          <div className="space-y-5">
            {[
              { icon: <FaUserTie className="text-green-600 text-xl" />, text: "Choose Role & Experience" },
              { icon: <FaMicrophoneAlt className="text-green-600 text-xl" />, text: "Smart Voice Interview" },
              { icon: <FaChartLine className="text-green-600 text-xl" />, text: "Performance Analytics" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.15 }}
                className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm"
              >
                {item.icon}
                <span className="text-gray-700 font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="p-12 bg-white"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Interview Setup
          </h2>

          <div className="space-y-6">

            {/* ROLE */}
            <div className="relative">
              <FaUserTie className="absolute top-4 left-4 text-gray-400" />
              <input
                type="text"
                placeholder="Enter your role"
                className="w-full pl-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>

            {/* EXPERIENCE */}
            <div className="relative">
              <FaBriefcase className="absolute top-4 left-4 text-gray-400" />
              <input
                type="text"
                placeholder="Enter your experience"
                className="w-full pl-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>

            {/* MODE */}
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              className="w-full py-3 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500"
            >
              <option value="Technical">Technical</option>
              <option value="HR">HR Interview</option>
              <option value="Managerial">Managerial</option>
            </select>

            {/* FILE UPLOAD */}
            {!analysisDone && (
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => fileInputRef.current.click()}
                className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-green-500"
              >
                <FaFileUpload className="mx-auto mb-3 text-green-600 text-4xl" />

                <input
                  type="file"
                  accept="application/pdf"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={(e) => setResumeFile(e.target.files[0])}
                />

                <p className="text-gray-600 font-medium">
                  {resumeFile ? resumeFile.name : "Click to Upload Resume"}
                </p>

                {resumeFile && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleUploadResume();
                    }}
                    className="mt-4 bg-gray-900 text-white py-2 px-5 rounded-lg"
                  >
                    {analyzing ? "Analyzing..." : "Analyze Resume"}
                  </motion.button>
                )}
              </motion.div>
            )}
            {analysisDone && (
              <motion.div 
              initial={{ opacity: 0 ,y:20}}
              animate={{ opacity: 1 ,y:0}}
              className="bg-gray-200 rounded-xl p-5 space-y-4">
                <h3 className="text-lg font-semibold text-gray-800"> Resume Analysis Result</h3>
                {projects.length > 0 && (
                  <div>
                    <p className=" font-medium text-gray-700 mb-1">Projects</p>
                    <ul className=" list-disc list-inside text-gray-600 space-y-1">
                      {projects.map((p,i)=>(<li key={i}>{p}</li>))}
                    </ul>
                  </div>
                  )}
                  {skills.length > 0 && (
                  <div>
                    <p className=" font-medium text-gray-700 mb-1">Skills</p>
                    <div className=" flex flex-wrap gap-2">
                      {skills.map((s,i)=>(<span key={i} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm" >{s}</span>))}
                    </div>
                  </div>
                  )}

              </motion.div>
            )}

            {/* START BUTTON */}
            <motion.button
              disabled={!role || !experience}
              onClick={() =>
                onStart({ role, experience, mode, projects, skills, resumeText })
              }
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="w-full disabled:bg-gray-400 bg-green-600 hover:bg-green-700 text-white py-3 rounded-full text-lg font-semibold"
            >
              Start Interview
            </motion.button>

          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}

export default Step1Setup;