
import {Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import RegistrationForm from "./pages/RegistrationPage/RegistrationForm";
import LoginForm from "./pages/LoginPage/LoginForm";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { useEffect } from "react";
import { selectIsRefreshing } from "./redux/auth/selectors";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="/register" element={<RegistrationForm />} />
      <Route
        path="/login"
        element={
          <RestrictedRoute component={<LoginForm />} redirectTo="/contacts" />
        }
      />
    </Routes>
  );
}

export default App;
