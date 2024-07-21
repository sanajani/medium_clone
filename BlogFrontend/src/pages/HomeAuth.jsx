import bgImage from "../assets/meduim_bg.webp";
const HomeAuth = () => {
  return (
    <div className="bg-gray-50 m-0 p-0">
      <div className="flex border-b-2 border-black min-h-[80vh] md:min-h-screen">
        <div className="lg:items-center px-10 lg:px-0 m-0 p-0 text-wrap lg:max-w-[70%] flex flex-col flex-1 bg-gray-50">
          <div className="py-12 md:justify-center md:min-w-[80%] m-0 p-0 text-7xl lg:text-9xl md:text-8xl text-wrap md:max-w-[70vw] flex flex-col ">
            <span className="block">Heman</span>
            <h1 className="text-wrap flex flex-col md:flex-row">
              <span className="md:block">stories</span>
              <span>&ideas</span>
            </h1>
          </div>
          <p className="md:w-[80%] text-xl md:text-2xl">A place to read, write, and deepen your understanding</p>
          <div className="my-8 md:w-[80%]">
          <button className="bg-black text-white px-8 py-2 rounded-full text-xl md:text-2xl">Start reading</button>
          </div>
        </div>
        <div className="hidden lg:block max-w-[30%]">
          <img
            className="max-w-full overflow-hidden w-full"
            src={bgImage}
            alt="Girl with flower"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeAuth;
