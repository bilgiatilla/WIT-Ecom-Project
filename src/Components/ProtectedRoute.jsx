import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ children }) {
  const location = useLocation();
  const user = useSelector((state) => state.client.user);

  const isLoggedIn = Boolean(user?.email || localStorage.getItem("token"));

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
}

export default ProtectedRoute;