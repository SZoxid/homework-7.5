import React from "react";
import "../src/App.css";
import { FiSearch } from "react-icons/fi";
import Iconimg from "./components/imgs/icon.svg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import HomePage from "./components/home/HomePage";
import ServicePage from "./components/services/ServicePage";
import ProjectPage from "./components/projects/ProjectPage";
import NotFound from "./components/notfound/NotFound";

const App = () => {
  return (
    <div className="w-[1440px]m-auto">
      <Router>
        <header className="w-[95%] mt-[50px] m-auto">
          <nav
            className="flex justify-between font-semibold
          "
          >
            <div className="flex items-center gap-2 font-serif">
              <img src={Iconimg} alt="img" className="" />
              <h1 className="text-[40px] font-normal uppercase text-[#292F36]">
                selhono
              </h1>
            </div>
            <ul className=" flex justify-between items-center gap-[50px] text-[20px] font-normal text-[#292F36] font-sans  ">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/ServicePage">Service</NavLink>
              </li>
              <li>
                <NavLink to="/ProjectPage">Project</NavLink>
              </li>
              <li>
                <NavLink to="/pages">Pages</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/contacts">Contacts</NavLink>
              </li>
              <button>
                <FiSearch className="w-[25px] h-[25px]" />
              </button>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ServicePage" element={<ServicePage />} />
          <Route path="/ProjectPage" element={<ProjectPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
