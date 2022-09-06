import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import FormPage from "./pages/Form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="form" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
