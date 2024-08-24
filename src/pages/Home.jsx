import heroimg from "../assets/hero-image.png";

export const Home = () => {
  return (
    <div className="min-h-[70vh] flex flex-col  lg:flex-row">
      <div className="pl-4 lg:basis-1/2 lg:pt-[6rem]">
        <h1 className="text-5xl text-center lg:text-8xl">
          Where Talent Meets Opportunity
        </h1>
      </div>
      <div className="lg:basis-1/2">
        <img className="lg:max-w-2xl" src={heroimg} alt="hero" />
      </div>
    </div>
  );
};
