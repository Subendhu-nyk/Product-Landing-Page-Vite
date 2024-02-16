import { HeadLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex md:justify-evenly items-center max-container justify-between">
        <a href="/">
          <img src={HeadLogo} alt="logo" width={90} height={30}  />
        </a>
        
        <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden me-7 ">
    {navLinks.map((item)=>(
        <li key={item.label}>
            <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray lg:hover:text-coral-red">
                {item.label}
            </a>
        </li>
    ))}
     <a href="/" className="font-montserrat leading-normal text-lg text-slate-gray lg:hover:text-coral-red">
          <div className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            Login/Explore
          </div>
        </a>
        </ul>
       
        <div className="hidden max-lg:block">
            <img src={hamburger} alt={hamburger} width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
