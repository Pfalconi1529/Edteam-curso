import axios from "axios";
import { useEffect, useState } from "react";


const queryAxios = (API_URL) => {
    const [cripto, setCripto] = useState()
    useEffect(() => {
        axios.get(`${API_URL}assets`)
        .then(({data}) => {
            setCripto(data.data)
        })
        .catch(() => {
            console.error("Error en la consulta")
        })
    },[]);

    return {
        cripto
    }
}

export{ queryAxios}
