import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGif";

export const useFetchGifs = ( categorie ) => {

  const [state, setState] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {// Lo usamos para que no llamemos codigo innecesario cuanso se haga un re-render de todo el componente
    getGifs( categorie ).then(imgs => {
      setState({
          data: imgs,
          loading: false
        });
      });
    }, [ categorie ]); //Es un array de dependencias que dispararan la funcion dentro del useEffect
  
    return state;
 
}