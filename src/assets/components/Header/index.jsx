import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Header() {
    return (
        <header className="flex justify-between items-center bg-corFundo text-white p-6">
            <h1 className="text-xl text-verdeFonte sm:text-3xl">Eric Cavalcante</h1>
            <ul className="flex gap-4">
                <li className="hover:scale-125 duration-200 ">
                    <a href="https://github.com/EricCavalcante" target="_blank">
                        <FaGithub className="text-roxoFonte hover:text-white text-xl sm:text-3xl" />
                    </a>
                </li>
                <li className="hover:scale-125 duration-200 ">
                    <a href="https://www.linkedin.com/in/eric-cavalcante-9563b8205/" target="_blank">
                        <FaLinkedin className="text-roxoFonte hover:text-corLinkedIn text-xl sm:text-3xl" />
                    </a>
                </li>
                <li className="hover:scale-125 duration-200 ">
                    <a>
                        <FaWhatsapp className="text-roxoFonte hover:text-corWhatsapp text-xl sm:text-3xl" />
                    </a>
                </li>
            </ul>
        </header>
    )
}