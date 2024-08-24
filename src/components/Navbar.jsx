import logo from "../assets/logo.png";

export const Navbar = () => {
  return (
    <div className="w-full lg:flex pt-4 lg:justify-between lg:pr-10 items-center ">
      <div>
        <img className="w-15 h-10 lg:w-25 lg:h-20" src={logo} alt="logo" />
      </div>
      <div>
        <ul className="hidden lg:flex   lg:block lg:gap-10 cursor-pointer">
          <li>Jobs</li>
          <li>Feeds</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className="lg:flex lg:block lg:gap-10 hidden cursor-pointer">
        <button className="bg-blue-300 rounded-full px-10 py-2 hover:bg-white hover:text-blue-400 hover:border-2 hoer:border-blue-400">
          Login
        </button>
        <button>Register</button>
      </div>
    </div>
  );
};
