import {
  Navigate,
  Route,
  Routes,
} from "react-router";

import Home from "./pages/Home";
import Topics from "./pages/Topics";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Default */}
      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      {/* Public Routes */}
      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/topics"
        element={
          <ProtectedRoute>
            <Topics />
          </ProtectedRoute>
        }
      />

      <Route
        path="/quiz"
        element={
          <ProtectedRoute>
            <Quiz />
          </ProtectedRoute>
        }
      />

      <Route
        path="/result"
        element={
          <ProtectedRoute>
            <Result />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      {/* 404 */}
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}

export default App;