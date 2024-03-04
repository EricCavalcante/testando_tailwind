import { FaExternalLinkAlt } from "react-icons/fa";

export default function Trabalhos(){
    return(
        <section className="flex flex-col justify-center items-center gap-4 x-4">
            <h1 className="text-4xl font-Bebas">Meus trabalhos</h1>
            <div className="flex flex-col gap-2 text-center justify-center items-center ">
                <h3 className="text-xl">Site para especialista em consórcio</h3>
                <a className="hover:scale-110 duration-200 shadow-xl bg-azulFundo p-4 rounded-xl" href="https://especialistabbcon.com.br/" target="_blank"> <FaExternalLinkAlt className="mb-4"/> <img className="w-80" src="./images/image.png"></img></a>
            </div>
        </section>
    )
}