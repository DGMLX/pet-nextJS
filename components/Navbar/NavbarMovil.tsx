import { FaBars } from "react-icons/fa6";

const NavbarMovil = () =>{
    return(
        <>
            <header className="bg-sky-800 w-screen py-4 px-5 fixed shadow-2xl z-50 flex items-center lg:hidden">
                
                <FaBars className="text-white text-3xl cursor-pointer"/>
            </header>
        
        </>
    )
}

export default NavbarMovil