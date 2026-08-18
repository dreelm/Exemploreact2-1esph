

const Treinamento = (props) => {
  return (
    <div>
    <h5>EXERCICIO PROPS</h5>
      <p>o id do aluno é: {props.id}</p>
      <p>o nome do aluno é: {props.nome}</p>
      <p>o email do aluno é: {props.email}</p>
      <p>o telefone do aluno é: {props.telefone}</p>
    </div>
  )
}

export default Treinamento
