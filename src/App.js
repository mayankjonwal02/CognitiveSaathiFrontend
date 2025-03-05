import logo from './logo.svg';
import './App.css';
import SignUpPage from './pages/signup';
import {BrowserRouter as Router,Route, Switch, BrowserRouter, Routes} from 'react-router-dom';
import SignInPage from './pages/signin';
import QuestionnairePage from './pages/questionaire';
import LearningPlatform from './pages/playground';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage/>} />
          <Route path="/" element={<SignInPage/>} />
          <Route path="/questionaire" element={<QuestionnairePage/>}/>
          <Route path="/playground" element={<LearningPlatform/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
