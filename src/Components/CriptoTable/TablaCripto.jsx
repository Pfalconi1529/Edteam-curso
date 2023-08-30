export const TablaCripto = ({children, id, name, supply, priceUsd, title }) => {
  return (
    <div className="container-fluid">
        <h1 className="text-center mx-4">{title}</h1>
      <table className="table table-bordered ">
        <thead>
          <tr>
            <th scope="col">{id}</th>
            <th scope="col">{name}</th>
            <th scope="col">{supply}</th>
            <th scope="col">{priceUsd}</th>
          </tr>
        </thead>
        {
          children
        }
        
      </table>
    </div>
  );
};
