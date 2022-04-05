import Artigos from "./artigos";

export default function Metas(){
    return(
        <>
            <section id="metas" className="grid-one main-bg section">
                <div className="main-content grid-one-content">
                    <h2 className="grid-main-heading"> Metas </h2> <br /> <br />
                    <div className="grid">
                        <Artigos texto="10.1.1 - Taxa de crescimento das despesas domiciliares ou rendimento per capita entre os 40% com os menores rendimentos da população e a população total"></Artigos>
                        <Artigos texto="10.2.1 - Proporção da pessoas vivendo abaixo de 50% da mediana da renda, por sexo, idade e pessoas com deficiênciaO"></Artigos>
                        <Artigos texto="10.4.1 - Proporção das remunerações no PIB, incluindo salários e as transferências de proteção social"></Artigos>
                        <Artigos texto="10.5.1 - Indicadores de Solidez Financeira"></Artigos>
                        <Artigos texto="10.5.1a - Índice de Patrimônio de Referência Nível I sobre Ativos Totais Ajustados (B1B2)"></Artigos>
                        <Artigos texto="10.5.1g - Posição aberta líquida em moeda estrangeira sobre capital"></Artigos>
                    </div>
                </div>
            </section>
        </>
    );
}