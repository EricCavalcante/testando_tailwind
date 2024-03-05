import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";




export default function Tecnologias() {
    return (
        <section>
            <div className=" bg-white rounded-xl text-center flex flex-col justify-center items-center w-fit p-4 shadow-xl mx-4">
                <h2 className="font-Bebas text-4xl text-azulFundo">Tecnologias que utilizo</h2>
                <ul className="flex justify-center items-center flex-wrap gap-4">
                    <li className="text-4xl mx-2 text-corFundo bg-verdeFonte p-2 rounded-xl shadow-lg hover:bg-roxoFonte duration-200"><FaHtml5/></li>
                    <li className="text-4xl mx-2 text-corFundo bg-verdeFonte p-2 rounded-xl shadow-lg hover:bg-roxoFonte duration-200"><FaCss3Alt/></li>
                    <li className="text-4xl mx-2 text-corFundo bg-verdeFonte p-2 rounded-xl shadow-lg hover:bg-roxoFonte duration-200"><IoLogoJavascript/></li>
                    <li className="text-4xl mx-2 text-corFundo bg-verdeFonte p-2 rounded-xl shadow-lg hover:bg-roxoFonte duration-200"><FaReact/></li>
                    <li className="text-4xl mx-2 text-corFundo bg-verdeFonte p-2 rounded-xl shadow-lg hover:bg-roxoFonte duration-200"><SiTailwindcss/></li>
                    <li className="text-4xl mx-2 text-corFundo bg-verdeFonte p-2 rounded-xl shadow-lg hover:bg-roxoFonte duration-200"><FaBootstrap/></li>
                </ul>
            </div>
        </section>
    )
}