import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ambilpost } from "../../Redux/Action/PostAction";
import view from "./view";

const PostData = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.TampilPost);

  useEffect(() => {
    dispatch(ambilpost());
  }, [dispatch]);

  return (
    <div className="px-[10%] py-[3%]">
      <div className=" text-center font-bold pb-10 ">
        <h1 className="text-4xl ">Welcome to home page</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10  ">
        {data.sipost.map((x, i) => (
          <div
            className="bg-green-200 hover:bg-orange-400 hover:shadow-xl p-4 rounded-lg h-fit w-fit"
            key={i}
          >
            {view(x, i)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostData;
