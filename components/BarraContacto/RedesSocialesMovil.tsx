import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

const BarraContactoMovil = () =>{
    return(
        <>
            <div className="right-0 md:hidden mt-96 w-16 h-52 bg-sky-800 rounded-tl-2xl rounded-bl-2xl shadow-2xl shadow-blue-950 text-white flex flex-col justify-evenly items-center text-4xl fixed border-l-4 
            border-b-4 border-sky-600">
                <IoLogoWhatsapp  className="shadow-xl shadow-sky-700 hover:text-orange-300 hover:transition-all"/>
                <AiFillInstagram  className="shadow-xl shadow-sky-700 hover:text-orange-300 hover:transition-all"/>
                <FaTiktok className="shadow-xl shadow-sky-700 hover:text-orange-300 hover:transition-all"/>
            </div>
        </>
    )
}

export default BarraContactoMovil