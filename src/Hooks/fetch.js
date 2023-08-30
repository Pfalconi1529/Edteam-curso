import { useState, useEffect } from "react";
const criptoFetch = (API_URL) => {

    const [criptomoneda, setCriptomoneda] = useState();
    
    useEffect(() => {
      fetch(`${API_URL}assets`)
        .then((response) => response.json())
        .then(({data}) => {
          setCriptomoneda(data);
        })
        .catch(() => {
          console.error("Ocurrió un error : ");
        });
    }, []);

    return {
        criptomoneda
    }
}


export { criptoFetch }
