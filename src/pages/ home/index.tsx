import Header from "../../components/header";

const HomePage = () => {
  return (
    <div className="w-screen h-screen flex flex-col relative bg-neutral-950 font-sans select-none">
      <Header />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-7">
        <h1 className=" text-white text-6xl font-normal inline-block">
          Hi there, I'm{" "}
          <div className="inline-block text-7xl font-semibold name">
            {"<"}Binh{" />"}
          </div>
        </h1>
        <div className="text-white text-xl tracking-wide">
          I'm full-stack developer. I help people build the things.
        </div>
        <button className="text-white mt-10 btn--gradient p-[1rem_2rem] text-xl rounded-[32px] tracking-wide">
          See more
        </button>
      </div>
    </div>
  );
};

export default HomePage;
