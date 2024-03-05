export default function Apresentacao(){
    return(
        <section className="flex flex-col justify-center items-center my-20 text-center gap-4 mx-4 lg:flex-row">
            <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-Bebas lg:text-6xl">Olá! Me chamo Eric Cavalcante</h1>
            <img className="rounded-full border-8 w-80 shadow-xl lg:w-96" src="./images/Foto profissional certa.jpg"/>
            </div>
            <p className="text-white w-auto my-4 lg:text-xl lg:w-1/2">Oi! Sou um desenvolvedor front-end de 20 anos, freelancer. Adoro criar sites incríveis usando HTML, CSS e JavaScript. Também sou especialista em React, e tenho conhecimentos em Python e Django para desenvolvimento web. Sempre buscando novos desafios e oportunidades para criar experiências incríveis para os usuários.</p>
        </section>
    )
}