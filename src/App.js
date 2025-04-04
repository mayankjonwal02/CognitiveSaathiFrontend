
import './App.css';
import * as React from 'react';
import SignUpPage from './pages/signup';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import SignInPage from './pages/signin';
import QuestionnairePage from './pages/questionaire';
import LearningPlatform from './pages/playground';
import { Menu as HamburgerMenu } from "lucide-react"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import logo from './assets/CongitiveSaathiLogo.png'
function App() {
  return (
    <div className="App">
      <div className="flex flex-col min-h-screen">
        <header className="border-b border-gray-100 p-4 bg-white sticky top-0 z-50">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center gap-8 ">
              <div className="w-[100px] h-[60px]  rounded-lg hidden md:flex">
                <img src={logo} alt="logo" />
              </div>
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
              <nav className='md:hidden  relative left-[-30px]'>
                <div className=''>

                  <PopupState popupId="demo-popup-menu" >
                    {(popupState) => (
                      <React.Fragment>
                        <Button  {...bindTrigger(popupState)}>
                          <HamburgerMenu size={24} color="#5a81fa" />
                        </Button>
                        <Menu {...bindMenu(popupState)}>
                          <MenuItem onClick={popupState.close}>Account settings</MenuItem>
                          <MenuItem onClick={popupState.close}>Support</MenuItem>
                          <MenuItem onClick={popupState.close}>License</MenuItem>
                          <MenuItem onClick={popupState.close}>Logout</MenuItem>
                        </Menu>
                      </React.Fragment>
                    )}
                  </PopupState>
                </div>

              </nav>
            </div>
            <div className='flex-grow '>
              <div className=' w-full h-1/2  flex flex-col justify-center items-center'>

                <div className="w-[80px] h-[40px]  rounded-lg flex md:hidden">
                  <img src={logo} alt="logo" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 ">
              <button className="bg-[#5a81fa] text-white px-6 py-2 rounded-lg 
              font-medium sm:static absolute right-0 sm:right-auto" style={{ transform: 'translateX(10px)' }}>
                {window.location.pathname === '/signup' ? (
                  <a href="/signin" className="font-medium">
                    Sign In
                  </a>
                ) : (
                  <a href="/signup" className="font-medium">
                    Sign Up
                  </a>
                )}
              </button>
             
            </div>
          </div>
        </header>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/" element={<SignInPage />} />
            <Route path="/questionaire" element={<QuestionnairePage />} />
            <Route path="/playground" element={<LearningPlatform />} />
          </Routes>
        </BrowserRouter>
      </div>


    </div>
  );
}

export default App;
