
const ContenidoTabla = ({id,name,supply,priceUsd}) => {
  return (
    <>
        <tbody>
          <tr>
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td>{supply}</td>
            <td>{priceUsd}</td>
          </tr>
        </tbody>
    </>
  )
}


export default ContenidoTabla