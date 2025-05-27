import Styles from '../css/DivCelularSaude.module.css'
import iconPacientes2 from '../images/iconpacientes.png'
import iconEspecialistas2 from '../images/iconespecialistas.png'
import iconAnos2 from '../images/iconanos.png'

function DivCelularSaude(){
    return(
        <main className={Styles.caixacelular}>
          <div className={Styles.divcelular}>
              <img src={iconPacientes2} alt="Ícone de pacientes" className={Styles.celularIconeEstatistica} />
              <p>+3.500<br />Pacientes atendidos</p>
          </div>

          <div className={Styles.divcelular}>
              <img src={iconEspecialistas2} alt="Ícone de especialistas" className={Styles.celularIconeEstatistica} />
              <p>+15<br />Especialistas disponíveis</p>
          </div>

          <div className={Styles.divcelular}>
              <img src={iconAnos2} alt="Ícone de anos" className={Styles.celularIconeEstatistica} />
              <p>+10<br />Anos no mercado</p>
          </div>
        </main>                   
    )
}

export default DivCelularSaude