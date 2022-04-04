import Artigos from "./artigos";

export default function Metas(){
    return(
        <>
            <section id="metas" className="grid-one main-bg section">
                <div className="main-content grid-one-content">
                    <h2 className="grid-main-heading"> Metas </h2>
                    <div className="grid">
                        <Artigos texto="VENCEMOO"></Artigos>
                        <Artigos texto="PERDEMOO"></Artigos>
                        <Artigos texto="ÈEEEEEE"></Artigos>
                        <Artigos texto="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem aliquid eos libero quis asperiores aut nemo labore! Sed, libero ea?"></Artigos>
                    </div>
                </div>
            </section>
        </>
    );
}