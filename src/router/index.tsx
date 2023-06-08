import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Login";

const RouterPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};
export default RouterPage;
