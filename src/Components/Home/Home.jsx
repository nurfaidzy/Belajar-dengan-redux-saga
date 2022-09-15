import { useDispatch, useSelector } from "react-redux";
import { prosesdata } from "./../../Redux/Action/HomeAction";
import { useEffect } from "react";
import { tampilandata } from "./tampilandata";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Tampildata);

  useEffect(() => {
    dispatch(prosesdata());
  }, [dispatch]);

  return (
    <div className="px-[10%] py-[3%]">
      <div className="text-center font-bold text-4xl pb-10">Hasil</div>
      <div className="flex justify-center ">
        {data.loading === true ? (
          <div className="flex justify-center font-bold">Loading . . .</div>
        ) : (
          tampilandata(data)
        )}
      </div>
    </div>
  );
}

export default App;
