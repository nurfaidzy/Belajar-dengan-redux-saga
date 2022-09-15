import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ambilpost } from "../../Redux/Action/PostAction";

import validasiubah from "./validasiubah";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ubahdata, hapuscuy } from "../../Redux/Action/PostAction";

const PostData = () => {
  const [noedit, setNoedit] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validasiubah) });

  const onSubmit = (data) => {
    dispatch(ubahdata(data));
    reset();
    setNoedit(null);
  };

  const dispatch = useDispatch();
  const item = useSelector((state) => state.TampilPost);

  useEffect(() => {
    dispatch(ambilpost());
  }, [dispatch]);

  return (
    <div className="px-[10%] py-[3%]">
      <div className=" text-center font-bold pb-10 ">
        <h1 className="text-4xl ">Welcome to home page</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10  ">
        {item.sipost.map((x, i) => (
          <div
            className="bg-green-200 hover:bg-orange-400 hover:shadow-xl p-4 rounded-lg h-fit w-full"
            key={i}
          >
            {noedit === x.id ? (
              <>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="w-full">
                    <p className="font-bold">Title :</p>
                    <input type="hidden" value={x.id} {...register("id")} />
                    <input
                      type="text"
                      className=" p-2 w-full"
                      placeholder={x.title}
                      {...register("title")}
                    />
                    {errors.title && <p>{errors.title.message}</p>}
                    <div className="py-[5%]"></div>
                    <p className="font-bold">Body :</p>
                    <input
                      type="text"
                      className="p-2 w-full"
                      placeholder={x.body}
                      {...register("body")}
                    />
                    {errors.body && <p>{errors.body.message}</p>}
                    <div className="py-[5%]"></div>
                    <div className="flex justify-end gap-3">
                      <input
                        className="p-2 bg-blue-400 rounded-md font-bold"
                        type="submit"
                        value="submit"
                      />
                      <input
                        className="p-2 bg-red-400 rounded-md font-bold"
                        type="reset"
                        value="reset"
                      />
                      <input
                        className="p-2 bg-green-400 rounded-md font-bold"
                        type="button"
                        value="Kembali"
                        onClick={() => setNoedit(null)}
                      />
                      {/* <button className="p-2 bg-blue-400 rounded-md font-bold">
                        Change
                      </button> */}
                    </div>
                  </div>
                </form>
              </>
            ) : (
              <>
                <div className="font-bold text-center pb-4">{x.id}</div>
                <div className="font-bold text-center pb-4">{x.title}</div>
                <div className=" text-sm">{x.body}</div>
                <div className="py-[4%] flex justify-end gap-4 font-bold text-slate-700">
                  <button
                    className="p-2 bg-blue-400 rounded-lg"
                    onClick={() => setNoedit(x.id)}
                  >
                    Change
                  </button>
                  <button
                    className="p-2 bg-red-400 rounded-lg "
                    onClick={() => dispatch(hapuscuy(x.id))}
                  >
                    Delate
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostData;
