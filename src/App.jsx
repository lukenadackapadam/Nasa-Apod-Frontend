// import { useState } from "react";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import ApodRoute from "./routes/ApodRoute";
import LoginRoute from "./routes/LoginRoute";
import SignupRoute from "./routes/SignupRoute";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LoginRoute />} />
        <Route path="/signup" element={<SignupRoute />} />
        <Route path="/apod" element={<ApodRoute />} />
        {/* <Route path="/apod" element={<PostNewRoute />} /> */}
      </Routes>
    </div>
  );
}

export default App;
