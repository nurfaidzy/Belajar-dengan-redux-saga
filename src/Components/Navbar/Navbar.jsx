import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { tambahcuy } from "../../Redux/Action/PostAction";

import validasiinput from "./validasiinput";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validasiinput) });

  const onSubmit = (data) => {
    dispatch(tambahcuy(data));
    reset();
  };
  return (
    <>
      <div className="fixed w-full">
        <div className=" bg-white shadow-lg flex justify-between px-[10%] py-[1%]">
          <div className="font-bold text-2xl">Nurf</div>
          <div>
            <ol className="flex pt-2">
              <li className="">
                <button
                  className="bg-indigo-400 px-2 py-1 font-bold text-white rounded-lg"
                  onClick={() => setOpen(!open)}
                >
                  Tambah data
                </button>
              </li>
            </ol>
          </div>
        </div>
        {open ? (
          <div className="">
            <div className="flex justify-end pr-[10%] pt-4 ">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="py-4 font-bold text-2xl ">Form data baru</div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="grid grid-cols-1 gap-5"
                >
                  <input
                    type="hidden"
                    placeholder="Masukkan Title"
                    value="1"
                    className="p-2 border-2 border-slate-400 rounded-lg"
                    {...register("userId")}
                  />
                  <input
                    type="text"
                    placeholder="Masukkan Title"
                    className="p-2 border-2 border-slate-400 rounded-lg"
                    {...register("title")}
                  />
                  {errors.title && <p>{errors.title.message}</p>}
                  <input
                    type="text"
                    placeholder="Masukkan Body"
                    className="p-2 border-2 border-slate-400 rounded-lg"
                    {...register("body")}
                  />
                  {errors.body && <p>{errors.body.message}</p>}
                  <div className="flex justify-center gap-4">
                    <input
                      className="bg-blue-400 p-2 rounded-lg font-bold text-slate-600"
                      type="submit"
                      value="Submit"
                    />
                    <input
                      type="reset"
                      className="bg-red-400 p-2 rounded-lg font-bold text-slate-600"
                      value="Reset"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Navbar;
