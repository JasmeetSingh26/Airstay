import axios from "axios";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import { UserContextProvider } from "./UserContext";

import {
  BookingsPage,
  LoginPage,
  PlacePage,
  PlacesFormPage,
  PlacesPage,
  ProfilePage,
  RegisterPage,
} from "./pages/index";
import Header from "./Header";

axios.defaults.baseURL = "https://airstay-zeta.vercel.app/";
axios.defaults.withCredentials = true;
axios.defaults.timeout = 50000;

function App() {
  return (
    <UserContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/account" element={<ProfilePage />} />
        <Route path="/account/places" element={<PlacesPage />} />
        <Route path="/account/places/new" element={<PlacesFormPage />} />
        <Route path="/account/places/:id" element={<PlacesFormPage />} />
        <Route path="/place/:id" element={<PlacePage />} />
        <Route path="/account/bookings" element={<BookingsPage />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
