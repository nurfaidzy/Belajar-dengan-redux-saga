import { Routes, Route } from "react-router-dom";
import PostData from "../Components/post/PostData";
const Rute = () => {
  return (
    <Routes>
      <Route path="/Belajar-dengan-redux-saga" element={<PostData />} />
    </Routes>
  );
};

export default Rute;
