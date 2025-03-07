import { Merienda } from "next/font/google";

const merienda = Merienda({ subsets: ["latin"], weight: ["400"] });



const Navbar = () =>{
    return(
        <>
            <header className="bg-sky-800 w-screen py-7 fixed shadow-2xl z-50">
                <nav >
                    <ul className={`text-white text-2xl flex   gap-x-9 ml-36 ${merienda.className}`}>
                        <li>Inicio</li>
                        <li>Sobre UPet</li>
                        <li>Servicios</li>
                        <li>Trabajos</li>
                        <li>Contacto</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar