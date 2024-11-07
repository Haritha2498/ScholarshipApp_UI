import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import UserDashboard from "./pages/UserDashboard";
import UniversityDashboard from "./pages/UniversityDashboard";
import ScholarshipProvider from "./pages/ScholarshipProvider";
import ScholarshipApplications from "./pages/ScholarshipApplications";
import ApplicationDetails from "./pages/ApplicationDetails";
import GovernmentAgentPage from "./pages/GovernmentAgencyPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/universitydashboard" element={<UniversityDashboard />}/>
          <Route path="/SPdashboard" element={<ScholarshipProvider />} />
          <Route path="/approveapplication/:id" element={<ApplicationDetails/>}/>
          <Route path="/approveapplication/:id" element={<ApplicationDetails/>}/>
          <Route path="/govagency" element={<GovernmentAgentPage/>}/>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
