import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactUsPage />} />
      </Routes>
    </>
  );
}

export default App;
