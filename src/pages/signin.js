import { useState } from "react";
import { Facebook, Linkedin, MapPin, Phone, PinIcon as Pinterest, Twitter, Mail } from "lucide-react";
import myimage from "../assets/signupimage.png";
import { useNavigate } from "react-router-dom";
import landingimage1 from '../assets/Landing1.png';
import landingimage2 from '../assets/Landing2.png';
import landingimage3 from '../assets/Landing3.png';
export default function SignInPage() {
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen" >
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
        <main className="flex-grow  relative">
          {/* Background Images */}


          {/* Login Form */}
          <div className="container mx-auto px-4 py-8 relative z-10">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2">
                {/* Image Section */}
                <div className="hidden md:block">
                  <img
                    src={myimage}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Form Section */}
                <div className="p-8 md:p-12 bg-[#E9EFFD]" style={{ paddingBottom: "var(--vertical-spacing)" }}>
                  <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
                  <p className="mb-6">
                    New to Speak Up?{" "}
                    <a href="#" className="text-[#5a81fa] font-medium">
                      Sign Up
                    </a>
                  </p>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="emailOrNumber" className="block mb-1 font-medium">
                        Email or Number
                      </label>
                      <input
                        type="text"
                        id="emailOrNumber"
                        placeholder="Enter your Email or Number"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5a81fa]"
                      />
                    </div>
                    <div>
                      <label htmlFor="otp" className="block mb-1 font-medium">
                        OTP
                      </label>
                      <input
                        type="text"
                        id="otp"
                        placeholder="Enter your OTP"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5a81fa]"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="rememberMe"
                          checked={rememberMe}
                          onChange={() => setRememberMe(!rememberMe)}
                          className="w-4 h-4 text-[#5a81fa] border-gray-300 rounded focus:ring-[#5a81fa]"
                        />
                        <label htmlFor="rememberMe" className="ml-2 text-sm">
                          Remember Me
                        </label>
                      </div>
                      <a href="#" className="text-sm text-gray-600 hover:underline">
                        Forgot password?
                      </a>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#5a81fa] text-white py-3 rounded-lg font-medium mt-6"
                      onClick={() => navigate("/playground")}
                    >
                      Log In
                    </button>
                  </form>
                  <div className="mt-8">
                    <div className="flex items-center">
                      <div className="flex-grow h-px bg-gray-200"></div>
                      <span className="px-4 text-sm text-gray-500">Or continue with</span>
                      <div className="flex-grow h-px bg-gray-200"></div>
                    </div>
                    <div className="flex justify-center mt-4">
                      <button className="flex items-center justify-center">
                        <div className="flex">
                          {/* Google G logo - left */}
                          <div className="w-8 h-8 flex items-center justify-center">
                            <svg viewBox="0 0 24 24" width="24" height="24">
                              <path
                                fill="#4285F4"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                              />
                              <path
                                fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                              />
                              <path
                                fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                              />
                              <path
                                fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                              />
                            </svg>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <p className="text-center mt-6">
                    Don't have an Account?
                    <a href="#" className="text-[#5a81fa] ml-1 font-medium">
                      Sign Up
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