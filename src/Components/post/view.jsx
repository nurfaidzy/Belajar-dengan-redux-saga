const view = (x, i) => {
  return (
    <div key={i}>
      <div className="font-bold text-center pb-4">{x.title}</div>
      <div className=" text-sm">{x.body}</div>
      <div className="py-[4%] flex justify-end gap-4 font-bold text-slate-700">
        <button className="p-2 bg-blue-400 rounded-lg">Change</button>
        <button className="p-2 bg-red-400 rounded-lg">Change</button>
      </div>
    </div>
  );
};

export default view;
