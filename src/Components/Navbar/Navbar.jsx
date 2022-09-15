const Navbar = () => {
  return (
    <div className=" flex justify-between px-[10%] py-[2%]">
      <div className="font-bold text-2xl">Nurf</div>
      <div>
        <ol className="flex pt-2">
          <li className="px-2">
            <a href="/">Test 1</a>
          </li>
          <li className="px-2">
            <a href="/all">Test 2</a>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Navbar;
