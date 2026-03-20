import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Experiences from "./components/Experiences.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  const currentTheme = localStorage.getItem("current_state");
  const [theme, setTheme] = useState(currentTheme || "light");

  useEffect(() => {
    localStorage.setItem("current_state", theme);
    document.documentElement.dataset.theme = theme;
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <Routes>
      <Route element={<Layout theme={theme} setTheme={setTheme} />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="experience" element={<Experiences />} />
        <Route path="projects" element={<Projects theme={theme} />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
