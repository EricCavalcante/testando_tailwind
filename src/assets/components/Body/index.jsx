import Apresentacao from "../Apresentacao";
import Footer from "../Footer";
import Header from "../Header";
import Trabalhos from "../Trabalhos";

export default function Body(){
    return(
        <div className="bg-gradient-to-t from-corFundo to-azulFundo font-Courier text-verdeFonte">
            <Header/>
            <Apresentacao/>
            <Trabalhos/>
            <Footer/>
        </div>
    )
}