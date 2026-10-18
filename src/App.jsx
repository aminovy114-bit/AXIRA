import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./components/AppLayout.jsx";
import Home from "./pages/Home.jsx";
import ExploreLibrary from "./pages/ExploreLibrary.jsx";
import MyLearning from "./pages/MyLearning.jsx";
import TeamFounder from "./pages/TeamFounder.jsx";
import LessonDetails from "./pages/LessonDetails.jsx";
import ResearchLab from "./pages/ResearchLab.jsx";
import WritingStudio from "./pages/WritingStudio.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<ExploreLibrary />} />
        <Route path="/learning" element={<MyLearning />} />
        <Route path="/lesson/:lessonId" element={<LessonDetails />} />
        <Route path="/research" element={<ResearchLab />} />
        <Route path="/writing" element={<WritingStudio />} />
        <Route path="/team" element={<TeamFounder />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/home" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
