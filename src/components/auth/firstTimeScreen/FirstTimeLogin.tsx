import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../../assets/Exams-bro.png";
import img2 from "../../../assets/Online test-bro.png";

const FirstTimeLogin = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    houseAddress: "",
    phone: "",
    educationBackground: "",
    examType: "",
    goal: "",
    studyHours: "",
  });

  useEffect(() => {
    const storedData = localStorage.getItem("cbtUserData");
    if (storedData) {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      localStorage.setItem("cbtUserData", JSON.stringify(formData));
      navigate("/");
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-green-600 p-4">
      <div className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg flex flex-col lg:flex-row items-center min-h-[80vh]">
        {step !== 4 && (
          <div className="hidden lg:flex w-[45%] min-h-[400px] bg-cover bg-center rounded-lg mr-6">
            <img
              src={step % 2 === 0 ? img2 : img1}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        )}

        <div className="w-full lg:w-[50%] p-4 flex flex-col justify-center h-full">
          <h1 className="text-2xl font-bold text-green-800 mb-3 text-center">
            First Time Setup
          </h1>
          <p className="text-gray-600 mb-4 text-center">Step {step} of 4</p>
          {step === 1 && (
            <div>
              <label className="block mb-2 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-3 rounded mb-4 focus:ring-green-400 focus:ring-2"
                required
              />
              <label className="block mb-2 font-medium">House Address</label>
              <input
                type="text"
                name="houseAddress"
                value={formData.houseAddress}
                onChange={handleChange}
                className="w-full border p-3 rounded mb-4 focus:ring-green-400 focus:ring-2"
                required
              />
              <label className="block mb-2 font-medium">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border p-3 rounded"
                required
              />
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div>
              <label className="block mb-2 font-medium">
                Education Background
              </label>
              <select
                name="educationBackground"
                value={formData.educationBackground}
                onChange={handleChange}
                className="w-full border p-3 rounded mb-4 focus:ring-green-400 focus:ring-2"
                required
              >
                <option value="">Select</option>
                <option value="High School">High School</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Graduate">Graduate</option>
              </select>
              <label className="block mb-2 font-medium">Exam Type</label>
              <select
                name="examType"
                value={formData.examType}
                onChange={handleChange}
                className="w-full border p-3 rounded mb-4 focus:ring-green-400 focus:ring-2"
                required
              >
                <option value="">Select</option>
                <option value="JAMB">JAMB</option>
                <option value="WAEC">WAEC</option>
                <option value="NECO">NECO</option>
                <option value="Others">Others</option>
              </select>
            </div>
          )}
          {step === 3 && (
            <div>
              <label className="block mb-2 font-medium">Study Goal</label>
              <input
                type="text"
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                className="w-full border p-3 rounded mb-4 focus:ring-green-400 focus:ring-2"
              />
              <label className="block mb-2 font-medium">
                Preferred Study Hours
              </label>
              <select
                name="studyHours"
                value={formData.studyHours}
                onChange={handleChange}
                className="w-full border p-3 rounded focus:ring-green-400 focus:ring-2"
              >
                <option value="">Select</option>
                <option value="1 hour">1 hour</option>
                <option value="3 hours">3 hours</option>
                <option value="5 hours">5 hours</option>
                <option value="5-10 hours">5-10 hours</option>
              </select>
            </div>
          )}
          {step === 4 && (
            <div className="text-center p-6 bg-gray-100 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6 text-green-800">
                Review Your Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {Object.entries(formData).map(([key, value]) => (
                  <div
                    key={key}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-300"
                  >
                    <p className="text-sm text-gray-500 font-medium uppercase">
                      {key.replace(/([A-Z])/g, " $1")}
                    </p>
                    <p className="text-lg font-semibold text-gray-700">
                      {value || "N/A"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 flex justify-between">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-green-800 text-white rounded"
            >
              {step === 4 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstTimeLogin;
