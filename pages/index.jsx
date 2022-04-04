import Head from "next/head";
import Topo from "../components/topo";
import Home from "../components/home";
import Intro from "../components/intro";
import Metas from "../components/metas";

export default function Tudo(){
    return(
        <>
            <Head>
                <title>Utilizando Components</title>
            </Head>

            <Topo></Topo>
            <Home titulo="teste de título" texto="texto inserido eba"></Home>
            <Home titulo="segundo home" texto="LUFFY VENCEU PORRAAAA"></Home>

            <Intro titulo="Objetivo" texto="objetivo do meu pai"></Intro>

            <Metas></Metas>
        </>
    );
}