import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, About, Projects, Contact } from "./pages";
import projectData from "./utils/projectData";
import SingleProject from "./pages/SingleProject";
import ReviewForm from "./pages/ReviewForm";
import { db } from "./firebase";
import AllReviews from "./pages/AllReviews";

const App = () => {
  return (
    <main className=" bg-slate-200 font-bold">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/projects/:projectId"
            element={<SingleProject projectData={projectData} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/review" element={<ReviewForm db={db} />} />
          <Route path="/all-reviews" element={<AllReviews />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
