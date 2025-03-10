"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/"
  },
  {
    name: "services",
    path: "/services"
  },
  {
    name: "resume",
    path: "/resume"
  },
  {
    name: "work",
    path: "/work"
  },
  {
    name: "contact",
    path: "/contact"
  }
]

export const DesktopNav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) =>(
        <Link key={index} href={link.path} className={`${
          link.path === pathname && "text-accent border-b-2 border-accent"
        } capitalize font-medium hover:text-accent transition-all duration-300`}>
            {link.name}</Link>
      ))}
    </nav>
  )
}

interface MenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (state: boolean) => void;
}

export const MobileNav = ({isMenuOpen, setIsMenuOpen} : MenuProps) => {
    const pathname = usePathname();
    const onMenuClosed = () =>{
      setIsMenuOpen(false);
      document.body.classList.remove("navBarActive");
    }
    return (
      <nav className={`h-screen w-screen justify-end flex fixed top-0 right-0 transition-all duration-300 ease-in-out z-50 ${isMenuOpen? "bg-black/85 opacity-100 visible" : "bg-transparent opacity-0 pointer-events-none invisible"} gap-2`} style={{ transitionProperty: 'background-color' }}>
        <div className={`flex relative items-center justify-between w-[300px] bg-primary shadow-2xl flex-col gap-14 py-8 px-8 ${!isMenuOpen? "translate-x-full transition-transform duration-300" : "translate-x-0 transition-transform duration-300"}`}>
          <div className="w-full h-full max-h-[480px] pb-6 flex flex-col items-center justify-between">
            <div className="w-full text-2xl flex justify-between items-center">
              <h1 className='text-3xl font-semibold text-center'>
                Yisrael<span className='text-accent'>.</span>
              </h1>
              <div><CloseIcon onClick={()=>onMenuClosed()}/></div>
            </div>
            <ul className="w-full flex flex-col gap-8 items-center">
              {links.map((link, index) =>(
                <li key={index} className="list-none text-center" >
                  <Link href={link.path} className={`${
                    link.path === pathname && "text-accent border-b-2 border-accent"
                  } capitalize text-lg font-medium hover:text-accent transition-all duration-300`}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>  
        </div>
      </nav>
    )
}


const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line x1="5" y1="5" x2="35" y2="35" stroke="crimson" strokeWidth="4" />
      <line x1="35" y1="5" x2="5" y2="35" stroke="crimson" strokeWidth="4" />
    </svg>
  );
};


export const MenuIcon = ({setIsMenuOpen} : {setIsMenuOpen: (input: boolean)=>void}) => {
  const onMenuOpen = () =>{
    setIsMenuOpen(true);
    document.body.classList.add("navBarActive");
  }
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onMenuOpen}
    >
      <line x1="5" y1="10" x2="35" y2="10" stroke="#DC143C" strokeWidth="3" />
      <line x1="10" y1="20" x2="30" y2="20" stroke="#DC143C" strokeWidth="3" />
      <line x1="5" y1="30" x2="35" y2="30" stroke="#DC143C" strokeWidth="3" />
    </svg>
  );
};