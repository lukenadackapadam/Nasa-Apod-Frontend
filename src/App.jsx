import { Header } from "./Header";
import { Route, Routes } from "react-router-dom";
import ApodRoute from "./routes/ApodRoute";
import LoginRoute from "./routes/LoginRoute";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LoginRoute />} />
        <Route path="/apod" element={<ApodRoute />} />
      </Routes>
    </div>
  );
}

export default App;
