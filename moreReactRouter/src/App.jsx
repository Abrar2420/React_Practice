import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import ProtectedLayout from "./layouts/ProtectedLayout";
import Login from "./pages/auth/Login";
import AuthLayout from "./layouts/AuthLayout";
import { useRef } from "react";
import RootLayout from "./layouts/RootLayout";

function App() {
  const userRef = useRef({});
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route element={<ProtectedLayout userRef={userRef} />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<AuthLayout userRef={userRef} />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
