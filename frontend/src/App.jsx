import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import Results from "./components/Results/Results.jsx";
import QuaterlyResult from "./components/Results/QuaterlyResult.jsx";
import Halfyearly from "./components/Results/Halfyearly.jsx";
import Annually from "./components/Results/Annually.jsx";
import FinalResult from "./components/Results/FinalResult.jsx";
import AddResult from "./components/Results/add result/AddResult.jsx";
import UnitTest from "./components/Results/add result/UnitTest.jsx";
import AllResult from "./components/Results/add result/AllResult.jsx";
import Login from "./components/Login.jsx";
import { useState } from "react";
import tokenContext from "./context.jsx";

function App() {
  const [token, setToken] = useState("");
  return (
    <>
      <tokenContext.Provider value={{ token, setToken }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/result/results" element={<Results />} />
          <Route
            path="/result/results/quaterlyresult"
            element={<QuaterlyResult />}
          />
          <Route
            path="/result/results/halfyearlyresult"
            element={<Halfyearly />}
          />
          <Route path="/result/results/annuallyresult" element={<Annually />} />
          <Route path="/result/results/finalresult" element={<FinalResult />} />
          <Route path="/result/addresult" element={<AddResult />} />
          <Route
            path="/result/addresult/add-unit-test-result"
            element={<UnitTest />}
          />
          <Route
            path="/result/addresult/add-all-result"
            element={<AllResult />}
          />
          <Route path="/admin/login" element={<Login />} />
        </Routes>
      </tokenContext.Provider>
    </>
  );
}

export default App;
