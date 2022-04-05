import Head from "next/head";
import Topo from "../components/topo";
import Home from "../components/home";
import Intro from "../components/intro";
import Metas from "../components/metas";

export default function Tudo(){
    return(
        <>
            <Head>
                <title>ODS 10</title>
            </Head>

            <Topo></Topo>
            <Home titulo="Redução das Desigualdades" texto="Objetivo de Desenvolvimento Sustentavél 10"></Home>

            <Intro titulo="Objetivo" texto="Reduzir a desigualdade dentro dos países e entre eles"></Intro>

            <Metas></Metas>
        </>
    );
}