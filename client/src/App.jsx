import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home"; // optional

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
}

export default App;
