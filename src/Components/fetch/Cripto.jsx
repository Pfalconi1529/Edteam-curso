import { criptoFetch } from "../../Hooks/fetch";
import { TablaCripto } from "../CriptoTable/TablaCripto";
import ContenidoTabla from "../CriptoTable/contenidoTabla";
export const Cripto = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const { criptomoneda } = criptoFetch(API_URL);
  if (!criptomoneda) return <span>Cargando........</span>;

  return (
    <div className="container">
      <TablaCripto
        id={"Id"}
        name={"Nombre"}
        supply={"Supply"}
        priceUsd={"Pruce Usd"}
        title="Tabla contenido de bitcoins"
      >
        {criptomoneda.map(({ id, name, supply, priceUsd }) => (
          <ContenidoTabla
            key={id}
            id={id}
            name={name}
            supply={supply}
            priceUsd={priceUsd}
          ></ContenidoTabla>
        ))}
      </TablaCripto>
    </div>
  );
};
