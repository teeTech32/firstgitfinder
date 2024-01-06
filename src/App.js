import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/Layouts/Navbar";
import Footer from "./components/Layouts/Footer";
import Notfound from "./pages/Notfound";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import {GithubProvider} from "./context/github/GithubContext";
import {AlertProvider} from "./context/alert/AlertContext";
import Alert from "./components/Layouts/Alert";

function App() {
  return (
  <GithubProvider>
    <AlertProvider>
      <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar/>
        <main className="container mx-auto pb-12 px-3">
          <Alert/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/user/:login" element={<User/>}/>
            <Route path="/Notfound" element={<Notfound/>}/>
            <Route path="/*" element={<Notfound/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
      </Router>
    </AlertProvider>
  </GithubProvider>
    
  
  );
} 

export default App;
