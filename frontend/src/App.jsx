import "./App.css";
import Home from "./components/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
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
import { useEffect, useState } from "react";
import { tokenContext } from "./context.jsx";
import ResultDemo from "./components/Results/ResultDemo.jsx";
import RegistrationForm from "./components/Admission.jsx";
import ProtectedRoute from "./components/auth/ProtectedRoute.jsx";
import ShowResult from "./components/auth/ShowResult.jsx";
function App() {
  const [token, setToken] = useState("");
  const [result, setResult] = useState("");
  return (
    <>
      <tokenContext.Provider value={{ token, setToken, result, setResult }}>
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
          <Route
            path="/result/addresult"
            element={<ProtectedRoute Component={AddResult} />}
          />
          <Route
            path="/result/addresult/add-unit-test-result"
            element={<ProtectedRoute Component={UnitTest} />}
          />
          <Route
            path="/result/addresult/add-all-result"
            element={<ProtectedRoute Component={AllResult} />}
          />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/showresult" element={<ShowResult Component={ResultDemo} />} />
          <Route path="/student/registration" element={<RegistrationForm />} />
        </Routes>
      </tokenContext.Provider>
    </>
  );
}

export default App;