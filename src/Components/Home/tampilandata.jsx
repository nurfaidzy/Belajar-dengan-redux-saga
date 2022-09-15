export const tampilandata = (data) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
      {data.data.map((item, index) => (
        <div
          key={index}
          className="bg-blue-200 p-2 rounded-lg hover:shadow-lg hover:bg-white "
        >
          <div className="text-center font-bold">{item.title}</div>
          <div className="pt-2 text-sm">{item.body}</div>
        </div>
      ))}
    </div>
  );
};
