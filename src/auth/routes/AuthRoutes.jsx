import {Navigate, Route, Routes} from "react-router-dom";
import {AuthLoginPage, AuthMainPage, AuthRegisterPage, LocationConfigPage, ProfileConfigPage, TagsSelectPage} from "../pages";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <AuthMainPage /> } />
      <Route path="login" element={ <AuthLoginPage /> } />
      <Route path="register" element={ <AuthRegisterPage /> } />
      <Route path="profile-config" element={ <ProfileConfigPage /> } />
      <Route path="tags-select" element={ <TagsSelectPage /> } />
      <Route path="location-select" element={ <LocationConfigPage /> } />

      <Route path="/*" element={ <Navigate to={'/auth/'} /> } />
    </Routes>
  );
}
