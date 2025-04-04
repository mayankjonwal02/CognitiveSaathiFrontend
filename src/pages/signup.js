

import { useState } from "react"
import { Eye, EyeOff, Facebook, Linkedin, MapPin, Phone, Twitter , PinIcon as Pinterest,Mail} from "lucide-react"

import myimage from "../assets/signupimage.png"
import { useNavigate } from "react-router-dom"
import landingimage1 from '../assets/Landing1.png';
import landingimage2 from '../assets/Landing2.png';
import landingimage3 from '../assets/Landing3.png';
export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}


      <div>
        <div className="fixed  h-[50vh] w-full">
          <img
            src={landingimage1}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <img
            src={landingimage2}
            alt="Foreground"
            className="absolute inset-0 w-full h-full object-cover opacity-100"
          />
          <img
            src={landingimage3}
            alt="Foreground"
            className="absolute inset-0 w-full h-full object-cover opacity-100"
          />
        </div>
        {/* Main Content */}
        <main className="flex-grow bg-[#f3f7fc]">

          <div className="container mx-auto px-4 py-8 z-10 relative">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2">
                {/* Image Section */}
                <div className="hidden md:block">
                  <img
                    src={myimage}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Form Section */}
                <div className="p-8 md:p-12">
                  <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="fullName" className="block mb-1 font-medium">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5a81fa]"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block mb-1 font-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5a81fa]"
                      />
                    </div>

                    <div>
                      <label htmlFor="password" className="block mb-1 font-medium">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          placeholder="Enter Password"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5a81fa]"
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="confirmPassword" className="block mb-1 font-medium">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          id="confirmPassword"
                          placeholder="Re enter Password"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5a81fa]"
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="number" className="block mb-1 font-medium">
                        Number
                      </label>
                      <input
                        type="tel"
                        id="number"
                        placeholder="Email Address"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5a81fa]"
                      />
                    </div>

                    <button type="submit" className="w-full bg-[#5a81fa] text-white py-3 rounded-lg font-medium mt-6">
                      Sign Up
                    </button>
                  </form>

                  <p className="text-center mt-6">
                    Already have an account?
                    <a href="#" className="text-[#5a81fa] ml-1 font-medium">
                      Log in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-[#5a81fa] text-white py-12 relative ">
          <div className="mx-[70px]  px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col justify-start items-center">
                <p className="text-xl font-medium max-w-lg mb-4">
                  Fluency is nothing more than mastering the 100 most important real-life conversations
                </p>
                <div className="flex gap-4 mt-6">
                  <a href="#" className="hover:opacity-80">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="hover:opacity-80">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="hover:opacity-80">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="hover:opacity-80">
                    <Pinterest size={20} />
                  </a>
                </div>
              </div>
              <div className="flex flex-col justify-start items-center">
                <div className="flex flex-col items-start">
                  <h3 className="font-bold mb-4">Products</h3>
                  <ul className="space-y-2  justify-center items-start flex flex-col">
                    <li>
                      <a href="#" className="hover:underline">
                        Landing page
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Playground
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        My Activity
                      </a>
                    </li>
                  </ul>
                </div>

              </div>
              <div className="flex flex-col justify-center items-center  ">
                <div className="flex flex-col items-start">
                  <h3 className="font-bold mb-4">Contact information</h3>
                  <ul className="space-y-3  justify-center items-start flex flex-col">
                    <li className="flex items-center gap-2">
                      <Phone size={18} />
                      <span>+34933478488</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <li className="flex items-center gap-2">
                        <Mail size={18} />
                        <span><a href="mailto:info@speakup.we" className="hover:underline">
                          info@speakup.we
                        </a></span>
                      </li>

                    </li>
                    <li className="flex items-start gap-2">
                      <MapPin size={18} className="mt-1 flex-shrink-0" />
                      <span>barcelona, C/ de sardenya</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
            <div className="border-t border-white/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
              <p>2023 Cognitive saathi. All Rights Reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </footer>

      </div>

    </div>
  )
}

