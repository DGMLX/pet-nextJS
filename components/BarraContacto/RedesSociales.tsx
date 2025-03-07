import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

const BarraContacto = () =>{
    return(
        <>
            <div className="mt-32 w-16 h-52 bg-sky-800 rounded-tr-2xl rounded-br-2xl shadow-2xl shadow-blue-950 text-white flex flex-col justify-evenly items-center text-4xl fixed border-r-4 
            border-b-4 border-sky-600">
                <IoLogoWhatsapp  className="shadow-xl shadow-sky-700 hover:text-orange-300 hover:transition-all"/>
                <AiFillInstagram  className="shadow-xl shadow-sky-700 hover:text-orange-300 hover:transition-all"/>
                <FaTiktok className="shadow-xl shadow-sky-700 hover:text-orange-300 hover:transition-all"/>
            </div>
        </>
    )
}

export default BarraContacto