const weatherState = {
  datiFormCitta: {
    coord: ""
  }
};


//il reducer serve a far variare lo stato attravero l'azione, nel caso dell'action citta richiesta in particolare datiform:citta metti li
//il caso cittarichiesta e si ha l'action salva nello statate i dati del form 

/*
All'handle on click  aggiungo le coordinate in datiformcitta
const handleOnClick = (lat, lon, nome) => {
  const coord = String(lat) + " " + String(lon) + " " + String(nome);
  //al CLICK FACCIO DISPATCH CAMBIO STATO E NAVIGO IN SEGUITO SU DETTAGLI METEOo
      //questo è il dispatch dell'action , modifica allo stato, ad ogni dipatch si attiva il reducer 
      //che fa aggiornamento info dello stato, stato condiviso dall ostore. al click iserisco i dati cordinata 
      dispatch({
        type: "CITTA_RICHIESTA",
  
        payload: coord //informazione della cordinata per il fetch , alla funzione ricerca imposto questi stati di dispatch azione delle cordinate e della navigation
      });
      navigate(`/dettagli-meteo`); //per navigare alla pagina dettagli meteo  Lo richiamiamo all’interno di un componente funzione per aggiungervi uno stato interno!
      ///${lat}/${lon} da usare con use params, al click iserisco i dati
    };*/

//reducer è fatto dallo stato e dall'action  wheatherstate sono le coordinate con l'action gli diciamo di fare la copia dei dati nell'array
//e l'action payload, un reducer quindi è una funzione in javascript prende lo stato corrente, whetaerstate, e con l'action restituisce lo stato successivo
//

//action un oggetto javascript che quando è chiamata sostituisce lo stato col precedente, ha una proprietà payload!, si fa poi proprietà oggetto che varia con lo stato in questo caso coord
//

//dispatcher, invia action allo store!
const reducerWeather = (state = weatherState, action) => {
  switch (action.type) {
    case "CITTA_RICHIESTA":
      return {
        ...state,
        datiFormCitta: {
          ...state.datiFormCitta,
          coord: action.payload
        }
      };

    default:
      return state;
  }
};
export default reducerWeather;
