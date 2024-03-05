import Apresentacao from "../Apresentacao";
import Footer from "../Footer";
import Header from "../Header";
import Tecnologias from "../Tecnologias";
import Trabalhos from "../Trabalhos";

export default function Body() {
    return (
        <body className="bg-gradient-to-t from-corFundo to-azulFundo font-Courier text-verdeFonte ">
            <Header />
            <div className="flex flex-col justify-center items-center gap-8">
                <Apresentacao />
                <Tecnologias />
                <Trabalhos />
            </div>
            <Footer />
        </body>
    )
}