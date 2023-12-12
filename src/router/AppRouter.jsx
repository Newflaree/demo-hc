import {Navigate, Route, Routes} from "react-router-dom";
import {AuthRoutes} from "../auth/routes";
import {HcRoutes} from "../hc/routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="auth/*" element={ <AuthRoutes /> } />
      <Route path="/*" element={ <HcRoutes /> } />
    </Routes>
  );
}
