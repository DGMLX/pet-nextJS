import Image from "next/image"
// import { Merienda } from "next/font/google";

//  import SliderComentarios from "@/components/Comentarios/SliderComentarios";


// const merienda = Merienda({ subsets: ["latin"], weight: ["400"] });

const HomePage = () =>{
  return(
    <>
       <>
        <main className={`py-28 md:py-44 px-5 md:px-20 `}>
          <section className="md:flex justify-center items-center text-white">
            <div className="w-full md:w-1/2">
                <h1 className="text-5xl md:text-6xl text-white text-center mb-10">Obtén un <span className="text-blue-950 font-bold">retrato personalizado</span> de tu mascota.</h1>
                <div className="w-full md:w-2/5 md:hidden">
                  <Image width={900} height={1000} src="/foto_principal.PNG" alt="Foto de mascotas" />
                </div>
                <h2 className="text-center text-2xl mt-8 md:mt-0 md:text-2xl">Porque sabemos que tu mascota es parte de tu familia y sabemos lo importante que es para tí. Obtén un dibujo único y personalizado de tu peludo a un accesible precio.</h2>
                <div className="flex justify-center mt-14">
                    <button className="text-2xl bg-blue-800 border-2 shadow-xl shadow-blue-800 cursor-pointer border-blue-300 px-7 py-2 rounded-full text-white   hover:transition-all hover:bg-blue-950">Más información</button>
                </div>
            </div>
            <div className="w-2/5 hidden md:block">
                <Image width={500} height={600} src="/foto_principal.PNG" alt="Foto de mascotas" />
            </div>
          </section>




{/* 
          <section className="mt-14">
            <h2 className={`text-5xl text-white mb-10 ${merienda.className}`}>Sobre UPet</h2>
            <p className="text-white text-2xl">En UPet, convertimos el amor por las mascotas en arte. Nos especializamos en la creación de retratos personalizados que capturan la esencia y personalidad de tu compañero peludo. Desde retratos clásicos hasta diseños con accesorios únicos, adaptamos cada obra a tus preferencias para que tengas un recuerdo especial y único.</p>
            <p className="text-white text-2xl">Además, si buscas un retrato fuera del mundo animal, también podemos hacerlo realidad. Solo cuéntanos tu idea y la convertiremos en una pieza de arte a tu medida.</p>
            <p className="text-white text-2xl">¡Haz de tu mascota o de cualquier inspiración un retrato inolvidable con UPet!</p>
          
          </section>






          <section className="mt-14">
            <h2 className={`text-5xl text-white mb-10 ${merienda.className}`}>Servicios</h2>
            <p className="text-white text-2xl">En UPet, nos dedicamos a crear retratos personalizados con un toque especial. Cada obra es única y se adapta a tus preferencias para que refleje fielmente la esencia de tu mascota o cualquier otra inspiración que desees plasmar en arte.

              Explora nuestras opciones y descubre cómo podemos hacer realidad tu idea:

              📌 Retratos personalizados de mascotas – Capturamos la esencia de tu compañero con ilustraciones detalladas y únicas.
              🎨 Diferentes estilos y técnicas – Desde retratos realistas hasta versiones artísticas con toques creativos.
              👑 Accesorios y temáticas especiales – Puedes elegir entre coronas, bufandas, gafas y otros elementos para darle personalidad a la obra.
              📏 Diversos formatos y tamaños – Adaptamos el retrato al tamaño que necesites, ideal para enmarcar o regalar.
              🖼️ Retratos de otros temas – No solo trabajamos con mascotas; si tienes otra idea, la hacemos realidad según tus especificaciones.

              Déjanos convertir tu idea en una obra de arte. ¡Tu retrato ideal te espera en UPet!</p>
          </section>








          <section className="mt-14">
            <h2 className={`text-5xl text-white mb-10 ${merienda.className}`}>Trabajos realizados</h2>
            <p className="text-white text-2xl">Cada retrato que creamos en UPet es único y está hecho con dedicación para capturar la esencia de cada mascota y personaje. En esta sección, podrás ver algunas de nuestras obras terminadas, cada una diseñada según los gustos y solicitudes de nuestros clientes.</p>
            <p className="text-white text-2xl">Desde ilustraciones detalladas hasta retratos con accesorios y temáticas especiales, aquí encontrarás una muestra de lo que podemos hacer. ¡Inspírate y visualiza cómo podría lucir tu propio retrato personalizado!</p>
          
          </section>
                   

          <section className="mt-14">
            <h2 className={`text-5xl mb-14 text-white ${merienda.className}`}>Nuestros clientes</h2>

            <SliderComentarios/>
          </section>
                   




          <section className="mt-96">
            <h2 className={`text-5xl text-white ${merienda.className}`}>Cotiza tu diseño</h2>
          </section> */}
        </main>
        </>
    </>
  )
}

export default HomePage