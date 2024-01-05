import { Header } from "./Header";
import { Route, Routes } from "react-router-dom";
import ApodRoute from "./routes/ApodRoute";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/apod" element={<ApodRoute />} />
      </Routes>
    </div>
  );
}

export default App;
