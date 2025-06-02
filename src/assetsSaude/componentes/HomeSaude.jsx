import Styles from '../css/HomeSaude.module.css'
import iconPacientes from '../images/iconpacientes.png'
import iconEspecialistas from '../images/iconespecialistas.png'
import iconAnos from '../images/iconanos.png'

function HomeSaude() {
  return (
    <div className={Styles.saudeContainer}>
      <div className={Styles.saudeConteudo}>
        <header className={Styles.saudeCabecalho}>
          <h1>BOAS-VINDAS A SAÚDE ACENIS !</h1>
          <h2>Cuidado especializado para pessoas<br />com síndrome de Down</h2>
          <p>Profissionais preparados para apoiar cada fase da jornada.</p>
          <button className={Styles.saudeBotao}> 
            <a href="#servicosSaude"> Saiba mais </a>
          </button>
        </header>
      </div>

      {/* Estatística agora fora do verdeSaudeConteudo */}
      <div className={Styles.EstatisticaContainer}>
        <div className={Styles.saudeCardUnico}>
          <div className={Styles.saudeItemEstatistica}>
            <div className={Styles.saudeItemContent}>
              <img src={iconPacientes} alt="Ícone de pacientes" className={Styles.saudeIconeEstatistica} />
              <p>+3.500<br />Pacientes atendidos</p>
            </div>
          </div>
            
          <div className={Styles.saudeDivisoria}></div>
          
          <div className={Styles.saudeItemEstatistica}>
            <div className={Styles.saudeItemContent}>
              <img src={iconEspecialistas} alt="Ícone de especialistas" className={Styles.saudeIconeEstatistica} />
              <p>+15<br />Especialistas disponíveis</p>
            </div>
          </div>

          <div className={Styles.saudeDivisoria}></div>
          
          <div className={Styles.saudeItemEstatistica}>
            <div className={Styles.saudeItemContent}>
              <img src={iconAnos} alt="Ícone de anos" className={Styles.saudeIconeEstatistica} />
              <p>+10<br />Anos no mercado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSaude