import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import { Navbar } from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import ProfileForm from "./components/Profile/ProfileForm";
import Signup from "./components/SignUp/Signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/feed" element={<Layout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<ProfileForm />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
