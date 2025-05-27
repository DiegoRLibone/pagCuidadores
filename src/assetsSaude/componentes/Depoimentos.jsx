import React from 'react';
import Styles from '../css/Depoimentos.module.css';
import fotouserEmili from '../images/fotouser-emili.png';
import fotouserHelena from '../images/fotouser-helena.png';
import fotouserRoberta from '../images/fotouser-roberta.png';

function Depoimentos() {
  return (
    <section className={Styles.depoimentosSection}>
      <div className={Styles.container}>
        <div className={Styles.header}>
          <div className={Styles.tituloContainer}>
            <h2 className={Styles.titulo}>DEPOIMENTOS</h2>
            <h3 className={Styles.subtitulo}>O que os clientes dizem sobre os profissionais Acenis?</h3>
          </div>
          
          <div className={Styles.cardGrande}>
            <p className={Styles.depoimentoTexto}>
              "Depois que começamos o acompanhamento com a psicopedagoga da plataforma, meu filho avançou muito na escola."
            </p>
            <div className={Styles.autorContainer}>
              <div className={Styles.userIcon}>
                <img src={fotouserHelena} alt="Helena Silva" className={Styles.userImage} />
              </div>
              <p className={Styles.depoimentoAutor}>Helena Silva</p>
            </div>
          </div>
        </div>

        <div className={Styles.cardsPequenos}>
          <div className={Styles.cardPequeno}>
            <p className={Styles.depoimentoTexto}>
              "Me senti acolhida desde o primeiro atendimento. Eles nos ajudam a enxergar possibilidades onde só víamos dificuldades."
            </p>
            <div className={Styles.autorContainer}>
              <div className={Styles.userIcon}>
                <img src={fotouserEmili} alt="Emili Souza" className={Styles.userImage} />
              </div>
              <p className={Styles.depoimentoAutor}>Emili Souza</p>
            </div>
          </div>

          <div className={Styles.cardPequeno}>
            <p className={Styles.depoimentoTexto}>
              "Cada consulta é um passo a mais no desenvolvimento do meu filho. Finalmente encontrei profissionais que olham além do diagnóstico."
            </p>
            <div className={Styles.autorContainer}>
              <div className={Styles.userIcon}>
                <img src={fotouserRoberta} alt="Roberta Souza" className={Styles.userImage} />
              </div>
              <p className={Styles.depoimentoAutor}>Roberta Souza</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Depoimentos