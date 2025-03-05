
import { useState } from "react"
import { MessageCircle, Plus, Sun, User, LogOut, Mic, Send } from "lucide-react"
import { useNavigate } from "react-router-dom";

export default function LearningPlatform() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("Playground")

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-[#4361EE] text-white flex flex-col">
        <div className="flex-1 overflow-auto">
          <div className="p-4">
            <button className="flex items-center w-full text-white gap-2 py-2">
              <Plus className="h-5 w-5" />
              <span>New Learning</span>
            </button>
          </div>

          <div className="px-4 space-y-3">
            <button className="flex items-center w-full text-white gap-2 py-2">
              <MessageCircle className="h-5 w-5" />
              <span>AI Chat Tool Ethics</span>
            </button>

            <button className="flex items-center w-full text-white gap-2 py-2">
              <MessageCircle className="h-5 w-5" />
              <span>AI Chat Tool Impact</span>
            </button>

            <button className="flex items-center w-full text-white gap-2 py-2">
              <MessageCircle className="h-5 w-5" />
              <span>New chat</span>
            </button>
          </div>
        </div>

        <div className="p-4 space-y-4 border-t border-blue-400">
          <button className="flex items-center w-full text-white gap-2 py-2">
            <Sun className="h-5 w-5" />
            <span>Light mode</span>
          </button>

          <button className="flex items-center w-full text-white gap-2 py-2">
            <User className="h-5 w-5" />
            <span>My account</span>
          </button>

          <button className="flex items-center w-full text-white gap-2 py-2">
            <LogOut className="h-5 w-5" />
            <span>Log out</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <header className="border-b flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-8">
            <div className="w-8 h-8 bg-[#4361EE] rounded"></div>

            <nav className="flex items-center gap-6">
              <button
                className={`px-4 py-2 rounded-md ${selectedTab === "Home" ? "bg-blue-100 text-[#4361EE]" : ""}`}
                onClick={() => setSelectedTab("Home")}
              >
                Home
              </button>

              <button
                className={`px-4 py-2 rounded-md ${selectedTab === "Playground" ? "border border-[#f1f1f3] text-[#4361EE]" : ""}`}
                onClick={() => setSelectedTab("Playground")}
              >
                Playground
              </button>

              <button
                className={`px-4 py-2 rounded-md ${selectedTab === "My Activity" ? "bg-blue-100 text-[#4361EE]" : ""}`}
                onClick={() => setSelectedTab("My Activity")}
              >
                My Activity
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button className="px-4 py-2 text-[#4361EE]" onClick={() => navigate("/signup")}>Sign Up</button>

            <button className="px-6 py-2 bg-[#4361EE] text-white rounded-md" onClick={() => navigate("/signin")}>Login</button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col">
          <div className="flex-1 flex items-center justify-center">
            <div className="text-[#4361EE]">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M40 12C42.7 12 45.3 12.6 47.7 13.8C50.1 15 52.1 16.7 53.6 18.9C55.1 21 56 23.5 56 26C56 28.5 55.1 31 53.6 33.1C52.1 35.3 50.1 37 47.7 38.2C45.3 39.4 42.7 40 40 40C37.3 40 34.7 39.4 32.3 38.2C29.9 37 27.9 35.3 26.4 33.1C24.9 31 24 28.5 24 26C24 23.5 24.9 21 26.4 18.9C27.9 16.7 29.9 15 32.3 13.8C34.7 12.6 37.3 12 40 12ZM40 68C42.7 68 45.3 67.4 47.7 66.2C50.1 65 52.1 63.3 53.6 61.1C55.1 59 56 56.5 56 54C56 51.5 55.1 49 53.6 46.9C52.1 44.7 50.1 43 47.7 41.8C45.3 40.6 42.7 40 40 40C37.3 40 34.7 40.6 32.3 41.8C29.9 43 27.9 44.7 26.4 46.9C24.9 49 24 51.5 24 54C24 56.5 24.9 59 26.4 61.1C27.9 63.3 29.9 65 32.3 66.2C34.7 67.4 37.3 68 40 68ZM12 40C12 42.7 12.6 45.3 13.8 47.7C15 50.1 16.7 52.1 18.9 53.6C21 55.1 23.5 56 26 56C28.5 56 31 55.1 33.1 53.6C35.3 52.1 37 50.1 38.2 47.7C39.4 45.3 40 42.7 40 40C40 37.3 39.4 34.7 38.2 32.3C37 29.9 35.3 27.9 33.1 26.4C31 24.9 28.5 24 26 24C23.5 24 21 24.9 18.9 26.4C16.7 27.9 15 29.9 13.8 32.3C12.6 34.7 12 37.3 12 40ZM68 40C68 42.7 67.4 45.3 66.2 47.7C65 50.1 63.3 52.1 61.1 53.6C59 55.1 56.5 56 54 56C51.5 56 49 55.1 46.9 53.6C44.7 52.1 43 50.1 41.8 47.7C40.6 45.3 40 42.7 40 40C40 37.3 40.6 34.7 41.8 32.3C43 29.9 44.7 27.9 46.9 26.4C49 24.9 51.5 24 54 24C56.5 24 59 24.9 61.1 26.4C63.3 27.9 65 29.9 66.2 32.3C67.4 34.7 68 37.3 68 40Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>

          {/* Chat Input */}
          <div className="bg-[#4361EE] p-4 flex items-center gap-4">
            <button className="text-white">
              <Mic className="h-5 w-5" />
            </button>

            <div className="flex-1 bg-blue-400 bg-opacity-20 rounded-full px-4 py-2 text-white">
              <input
                type="text"
                placeholder="Type message"
                className="bg-transparent w-full outline-none text-white placeholder-blue-200"
              />
            </div>

            <button className="text-white">
              <Send className="h-5 w-5" />
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}

