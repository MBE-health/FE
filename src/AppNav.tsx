import { CircularProgress } from "@mui/material";

import { Routes, Route } from "react-router-dom";
import {
  Home,
  Mypage,
  OnBoarding,
  Plan,
  Analyze,
  Login,
  SignUp,
} from "./pages";

const AppNav = () => {
  return (
    <Routes>
      <Route path="/onboarding" element={<OnBoarding />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/analyze" element={<Analyze />} />
      <Route path="/plan" element={<Plan />} />
      <Route path="/my page" element={<Mypage />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );

  /* <Route element={<PrivateRoute authentication={true} />}>
        <Route path="/" element={<Record />} />
        <Route path="/profile" element={<EditProfile />} />
        <Route path="/onboarding" element={<OnboardingProfile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/record" element={<Record />} />
        <Route path="/report" element={<Report />} />
        <Route path="/complete" element={<Complete />} />
      </Route>

      <Route path="/invoices" element={<Invoices />} />
      <Route path="/form" element={<Form />} />

      <Route path="/faq" element={<FAQ />} />
      <Route path="/calendar" element={<Calendar />} />*/
};

export default AppNav;
