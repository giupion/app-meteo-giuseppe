import { useState } from "react";
import { Button, Form } from "react-bootstrap";


import CittaDaSelezionare from "./CittaDaSelezionare";
const Ricerca = () => {
  //Utilizzo stato di questo componente per chiedere all'utente di quale citta ha bisogno di sapere le previsioni.
  const [elencoCitta, setElencoCitta] = useState(null); //un altro set state, all'inizio si mette a null, sull'elenco delle città appunto
  //fetchCoord trova tutte le citta che corrispondo al nome inserito dall'utente e salva l'array nello stato di questo componente
  const fetchCoord = async citta => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${citta}&limit=10&appid=9c0ece9ecabc211f28776c581ffc21e8`
      );
      if (response.ok) {
        const arrayCitta = await response.json();
        console.log(arrayCitta)
        console.log(elencoCitta)
        setElencoCitta(arrayCitta);//metto il nuovo stato utilizzando la funzione di usestate relativa a città
      } else {
        alert("Per favore inserisci una città valida");
      }
    } catch (error) {
      console.log(error);
    }
  };
  //Serve a gestire la richiesta dell'utente sulla citta e manda i dato a fetch, evoca il fetch sull'input del form al click
  const heandlerForm = event => {
    event.preventDefault();//evito il comportamento predefinito del submit cioè il submit invio al server ma esegue fethccoord 
   fetchCoord(event.target[0].value) 
 console.log(event.target[0].value)
  };

  return (//al submit usa handleform evoca la funzione handleform destrutturata
    <div className="d-flex flex-column flex-grow-1 ">
      <h2 className="title">Cerca una Città per sapere che tempo fa!</h2> 
      <Form onSubmit={heandlerForm}> 
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Scrivi la tua città..."
          />
        </Form.Group>
        <Button
          type="submit"
          className="btn-gen title">
         Cerca
        </Button>
      </Form> 
      {/* Quando la fetch mi risponde trovo diverse citta con lo stesso nome e con questo componente faccio decidere all'utente a quale si riferisse
     collego a cittadaselezionare come componente, se elencocitta è diverso da null allora mostra elenco elencocitta è settato da usestate e diventa arraycitta sopra...guardabene
     quindi mostra il contenuto se fa il fetch , mette in arraycitta e poi con il setelencocitta acquisico lo stato
      */}
      {elencoCitta && <CittaDaSelezionare elenco={elencoCitta}></CittaDaSelezionare>}
      
    </div>
  );
};
export default Ricerca;
