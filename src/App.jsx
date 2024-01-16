// import { useState } from "react";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import ApodRoute from "./routes/ApodRoute";
import LoginRoute from "./routes/LoginRoute";
import SignupRoute from "./routes/SignupRoute";
import PostNewRoute from "./routes/PostNewRoute";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LoginRoute />} />
        <Route path="/signup" element={<SignupRoute />} />
        <Route
          path="/apod"
          element={
            <>
              <ApodRoute />
              <PostNewRoute />
            </>
          }
        />
        {/* <Route path="/apod" element={<PostNewRoute />} /> */}
      </Routes>
    </div>
  );
}

export default App;
