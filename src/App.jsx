import Aluno from "./components/Aluno"
import Dados from "./components/Dados"
const App = () => {
  return (
    //fragments
    <>
      <Aluno nome="Fiap" idade="30"/>
      <Dados usuario="teste" email="teste@email.com"/>
    </>
  )
}

export default App
