import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.module.css";
import HomePage from "./Pages/HomePage";
import ProfilesPage from "./Pages/ProfilesPage";
import NotFound from "./Pages/NotFound";

const scrollTo = (sectionId) => {
  const targetSection = document.getElementById(sectionId);
  targetSection.scrollIntoView({ behavior: "smooth" });
};

const router = createBrowserRouter([
  { path: "/", element: <HomePage scrollTo={scrollTo} Profiles={false} /> },
  { path: "/profiles/", element: <HomePage scrollTo={scrollTo} profiles={true} /> },
  { path: "/profiles/:id", element: <ProfilesPage scrollTo={scrollTo} /> },
  { path: "*", element: <NotFound scrollTo={scrollTo} /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
