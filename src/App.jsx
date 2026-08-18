import Aluno from "./components/Aluno"
import Curso from "./components/Curso"
import Dados from "./components/Dados"
import Treinamento from "./components/Treinamento"

const App = () => {
  return (
    //fragments
    <>
      <Aluno nome="Fiap" idade="30"/>
      <Dados usuario="teste" email="teste@email.com"/>
      <Treinamento id="10" nome="andre" email="andre@email.com" telefone="1111111111"/>
      <Curso id="11" nome="dre" descricao="lindo" local="sao paulo" data="hoje"/>
    </>
  )
}

export default App
