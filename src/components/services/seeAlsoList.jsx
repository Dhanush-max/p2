const SeeAlsoList = ({ title, items }) => {
  return (
    <div className="ml-19 w-[100%] md:ml-24 md:w-[calc(100%-6rem)] mx-auto px-5">
      <h1 className="text-2xl uppercase font-bold py-10">{title}</h1>
      <ul className="uppercase px-20 pb-10 ">
        {items.map((item, index) => (
          <a key={index} href={item.link || "#"}>
            <li className="border-b text-black border-black p-3 flex justify-between w-[90%] mx-auto md:mx-1 md:w-[80%]">
              {item.name}
              <span className="font-bold text-2xl">{">"}</span>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default SeeAlsoList;
