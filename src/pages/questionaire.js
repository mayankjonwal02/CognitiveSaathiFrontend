import { useState } from "react"

export default function QuestionnairePage() {
  // State for form responses
  const [readingDifficulty, setReadingDifficulty] = useState(null)
  const [attentionDifficulty, setAttentionDifficulty] = useState(null)
  const [learningGoals, setLearningGoals] = useState([])

  // Handle learning goals selection (multiple choice)
  const handleGoalSelection = (goal) => {
    if (learningGoals.includes(goal)) {
      setLearningGoals(learningGoals.filter((g) => g !== goal))
    } else {
      setLearningGoals([...learningGoals, goal])
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b border-gray-100 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="w-12 h-12 bg-[#5a81fa] rounded-lg"></div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="font-medium">
                Home
              </a>
              <a href="#" className="font-medium">
                Playground
              </a>
              <a href="#" className="font-medium">
                My Activity
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="font-medium">
              Sign Up
            </a>
            <button className="bg-[#5a81fa] text-white px-6 py-2 rounded-lg">Login</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-[#f3f7fc]">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-4xl font-bold mb-4">Tell Us About Yourself</h1>
            <p className="text-xl text-gray-700">Help us create the best learning experience for you.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
            <p className="text-center mb-4">
              We tailor your learning journey based on your unique needs. Answer a few quick questions to personalize
              your experience.
            </p>
          </div>

          <div className="bg-white rounded-lg  shadow-sm space-y-8">
            {/* Question 1 */}
            <div className="space-y-3 border-b-2 border-solid p-6">
              <h3 className="font-semibold text-lg text-start">Do you find it hard to read and understand text?</h3>
              <div className="space-y-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <div
                    className={`w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center border ${readingDifficulty === "yes" ? "bg-[#5a81fa] border-[#5a81fa]" : "border-gray-300"}`}
                  >
                    {readingDifficulty === "yes" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <input
                    type="radio"
                    name="readingDifficulty"
                    value="yes"
                    className="sr-only"
                    checked={readingDifficulty === "yes"}
                    onChange={() => setReadingDifficulty("yes")}
                  />
                  <span>Yes, reading is challenging for me.</span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <div
                    className={`w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center border ${readingDifficulty === "no" ? "bg-[#5a81fa] border-[#5a81fa]" : "border-gray-300"}`}
                  >
                    {readingDifficulty === "no" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <input
                    type="radio"
                    name="readingDifficulty"
                    value="no"
                    className="sr-only"
                    checked={readingDifficulty === "no"}
                    onChange={() => setReadingDifficulty("no")}
                  />
                  <span>No, I can read.</span>
                </label>
              </div>
            </div>

            {/* Question 2 */}
            <div className="space-y-3  border-b-2 border-solid p-6"> 
              <h3 className="font-semibold text-lg  text-start">Do you face difficulties with attention or focusing?</h3>
              <div className="space-y-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <div
                    className={`w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center border ${attentionDifficulty === "yes" ? "bg-[#5a81fa] border-[#5a81fa]" : "border-gray-300"}`}
                  >
                    {attentionDifficulty === "yes" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <input
                    type="radio"
                    name="attentionDifficulty"
                    value="yes"
                    className="sr-only"
                    checked={attentionDifficulty === "yes"}
                    onChange={() => setAttentionDifficulty("yes")}
                  />
                  <span>Yes, I struggle to maintain focus.</span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <div
                    className={`w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center border ${attentionDifficulty === "no" ? "bg-[#5a81fa] border-[#5a81fa]" : "border-gray-300"}`}
                  >
                    {attentionDifficulty === "no" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <input
                    type="radio"
                    name="attentionDifficulty"
                    value="no"
                    className="sr-only"
                    checked={attentionDifficulty === "no"}
                    onChange={() => setAttentionDifficulty("no")}
                  />
                  <span>No, I don't have focus issues.</span>
                </label>
              </div>
            </div>

            {/* Question 3 - Duplicate of Question 2 as shown in the design */}
            <div className="space-y-3  border-b-2 border-solid p-6">
              <h3 className="font-semibold text-lg  text-start">Do you face difficulties with attention or focusing?</h3>
              <div className="space-y-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <div
                    className={`w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center border ${attentionDifficulty === "yes" ? "bg-[#5a81fa] border-[#5a81fa]" : "border-gray-300"}`}
                  >
                    {attentionDifficulty === "yes" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <input
                    type="radio"
                    name="attentionDifficulty"
                    value="yes"
                    className="sr-only"
                    checked={attentionDifficulty === "yes"}
                    onChange={() => setAttentionDifficulty("yes")}
                  />
                  <span>Yes, I struggle to maintain focus.</span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <div
                    className={`w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center border ${attentionDifficulty === "no" ? "bg-[#5a81fa] border-[#5a81fa]" : "border-gray-300"}`}
                  >
                    {attentionDifficulty === "no" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <input
                    type="radio"
                    name="attentionDifficulty"
                    value="no"
                    className="sr-only"
                    checked={attentionDifficulty === "no"}
                    onChange={() => setAttentionDifficulty("no")}
                  />
                  <span>No, I don't have focus issues.</span>
                </label>
              </div>
            </div>

            {/* Question 4 - Learning Goals (Multiple Choice) */}
            <div className="space-y-3  border-b-2 border-solid p-6">
              <h3 className="font-semibold text-lg  text-start">What are your primary learning goals?</h3>
              <div className="space-y-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <div
                    className={`w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center border ${learningGoals.includes("focus") ? "bg-[#5a81fa] border-[#5a81fa]" : "border-gray-300"}`}
                  >
                    {learningGoals.includes("focus") && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={learningGoals.includes("focus")}
                    onChange={() => handleGoalSelection("focus")}
                  />
                  <span>Improve focus and concentration</span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <div
                    className={`w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center border ${learningGoals.includes("reading") ? "bg-[#5a81fa] border-[#5a81fa]" : "border-gray-300"}`}
                  >
                    {learningGoals.includes("reading") && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={learningGoals.includes("reading")}
                    onChange={() => handleGoalSelection("reading")}
                  />
                  <span>Enhance reading and comprehension</span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <div
                    className={`w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center border ${learningGoals.includes("memory") ? "bg-[#5a81fa] border-[#5a81fa]" : "border-gray-300"}`}
                  >
                    {learningGoals.includes("memory") && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={learningGoals.includes("memory")}
                    onChange={() => handleGoalSelection("memory")}
                  />
                  <span>Develop better memory and retention</span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <div
                    className={`w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center border ${learningGoals.includes("customize") ? "bg-[#5a81fa] border-[#5a81fa]" : "border-gray-300"}`}
                  >
                    {learningGoals.includes("customize") && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={learningGoals.includes("customize")}
                    onChange={() => handleGoalSelection("customize")}
                  />
                  <span>Customize my learning experience</span>
                </label>
              </div>
            </div>

            {/* Question 5 - Duplicate of Question 4 as shown in the design */}
            <div className="space-y-3  border-b-2 border-solid p-6">
              <h3 className="font-semibold text-lg  text-start">What are your primary learning goals?</h3>
              <div className="space-y-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <div
                    className={`w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center border ${learningGoals.includes("focus") ? "bg-[#5a81fa] border-[#5a81fa]" : "border-gray-300"}`}
                  >
                    {learningGoals.includes("focus") && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={learningGoals.includes("focus")}
                    onChange={() => handleGoalSelection("focus")}
                  />
                  <span>Improve focus and concentration</span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <div
                    className={`w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center border ${learningGoals.includes("reading") ? "bg-[#5a81fa] border-[#5a81fa]" : "border-gray-300"}`}
                  >
                    {learningGoals.includes("reading") && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={learningGoals.includes("reading")}
                    onChange={() => handleGoalSelection("reading")}
                  />
                  <span>Enhance reading and comprehension</span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <div
                    className={`w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center border ${learningGoals.includes("memory") ? "bg-[#5a81fa] border-[#5a81fa]" : "border-gray-300"}`}
                  >
                    {learningGoals.includes("memory") && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={learningGoals.includes("memory")}
                    onChange={() => handleGoalSelection("memory")}
                  />
                  <span>Develop better memory and retention</span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <div
                    className={`w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center border ${learningGoals.includes("customize") ? "bg-[#5a81fa] border-[#5a81fa]" : "border-gray-300"}`}
                  >
                    {learningGoals.includes("customize") && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={learningGoals.includes("customize")}
                    onChange={() => handleGoalSelection("customize")}
                  />
                  <span>Customize my learning experience</span>
                </label>
              </div>
            </div>

            {/* Question 6 - Duplicate of Question 4 as shown in the design */}
            <div className="space-y-3  border-b-2 border-solid p-6">
              <h3 className="font-semibold text-lg  text-start">What are your primary learning goals?</h3>
              <div className="space-y-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <div
                    className={`w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center border ${learningGoals.includes("focus") ? "bg-[#5a81fa] border-[#5a81fa]" : "border-gray-300"}`}
                  >
                    {learningGoals.includes("focus") && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={learningGoals.includes("focus")}
                    onChange={() => handleGoalSelection("focus")}
                  />
                  <span>Improve focus and concentration</span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <div
                    className={`w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center border ${learningGoals.includes("reading") ? "bg-[#5a81fa] border-[#5a81fa]" : "border-gray-300"}`}
                  >
                    {learningGoals.includes("reading") && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={learningGoals.includes("reading")}
                    onChange={() => handleGoalSelection("reading")}
                  />
                  <span>Enhance reading and comprehension</span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <div
                    className={`w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center border ${learningGoals.includes("memory") ? "bg-[#5a81fa] border-[#5a81fa]" : "border-gray-300"}`}
                  >
                    {learningGoals.includes("memory") && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={learningGoals.includes("memory")}
                    onChange={() => handleGoalSelection("memory")}
                  />
                  <span>Develop better memory and retention</span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <div
                    className={`w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center border ${learningGoals.includes("customize") ? "bg-[#5a81fa] border-[#5a81fa]" : "border-gray-300"}`}
                  >
                    {learningGoals.includes("customize") && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={learningGoals.includes("customize")}
                    onChange={() => handleGoalSelection("customize")}
                  />
                  <span>Customize my learning experience</span>
                </label>
              </div>
            </div>


          </div>
          <div className="flex justify-end mt-8 p-6">
              <button type="button" className="bg-[#294386] text-white px-8 py-3 rounded-lg font-medium">
                Next
              </button>
            </div>
        </div>
      </main>
    </div>
  )
}

