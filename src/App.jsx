import { useState } from 'react'
import './App.css'
import HomeSaude from './assetsSaude/componentes/HomeSaude'
import DivCelularSaude from './assetsSaude/componentes/DivCelularSaude'
import SlideProfissionaisSaude from './assetsSaude/componentes/SlideProfissionaisSaude'
import Depoimentos from './assetsSaude/componentes/Depoimentos'
import NossosProfissionais from './assetsSaude/componentes/ListaProfissionalSaude'

function App() {

  return (
    <>
      <HomeSaude />
      <DivCelularSaude />
      <SlideProfissionaisSaude />
      <Depoimentos />
      <NossosProfissionais />
    </>
  )
}

export default App
