import { Routes, Route } from "react-router-dom";
import Home from "./../Components/Home/Home";
import PostData from "../Components/post/PostData";
const Rute = () => {
  return (
    <Routes>
      <Route path="/" element={<PostData />} />
      <Route path="/all" element={<Home />} />
    </Routes>
  );
};

export default Rute;
