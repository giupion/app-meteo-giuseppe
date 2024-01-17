import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PrevisioniOggi from "./PrevisioniOggi";
import ProssimiGiorni from "./ProssimiGiorni";
import { Spinner } from "react-bootstrap";
//----------------------------------
//import { Link, useParams } from "react-router-dom";

//Qui ho a disposizione i dati che ha deciso l'utente e faccio due fetch al caricamento della pagina
//una per le previsioni attuali e una per le previsioni dei prossimi 5 giorni prendendo solo gli array dei prossimi 5 giorni a mezzo giorno.

const FetchMeteo = () => {
  //gestione della stringa salvata nello store per le coordinate
  const coordinate = useSelector(state => state.datiFormCitta.coord); //contiene la parte che mi serve dello statp, le cordinate appunto
  console.log(coordinate)
  const str = coordinate.split(" ");
  const lat = str[0]; //splitto coordinate che contine latitudine longitudine e nome e li metto nelle variabili
  const lon = str[1];
  const nome = str[2];

  // const params = useParams();
  // const lat = params.lat;
  // const lon = params.lon;
//temp variabile setTempfunzione evocata a valore
  const [temp, setTemp] = useState(null); //metto l ostato della temperatura a null all'inizio per accedere a prorpietà
  const [prossimiGiorni, setProssimiGiorni] = useState(null);//faccio lo stesso sui prossimi giorni

  const fetchDettagli = async () => {
    try {
      const response = await fetch(
        `https:api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}10&appid=4b537cadf7d901e3303bd90e6f06e29a`
      );
      if (response.ok) {
        const previsione = await response.json();
console.log(previsione)//metti in una variabile per fare il console.log con await cosi aspetta il browser e ho a disposiszione tutti i dati
        //creo oggetto da impostare nello stato locale del componente per rendere disponibili i dati al componente stesso.
        const objToday = {
          //tutti i contenuti di previsione nell'array
          img: `https://openweathermap.org/img/wn/${previsione.weather[0].icon}@2x.png`,
          percepita: (previsione.main.feels_like - 273.15).toFixed(1),
          temp: (previsione.main.temp - 273.15).toFixed(1),
          umidita: previsione.main.humidity,
          minima: (previsione.main.temp_min - 273.15).toFixed(1),
          massima: (previsione.main.temp_max - 273.15).toFixed(1),
          descrizione: previsione.weather[0].description
        };
        setTemp({ objToday }); //alla setTemp aggiorno lo stato con l'oggetto objToday sempre se la fetch va bene
      } else {
        alert("Error fetching results"); //alert errore del fetch
      }
    } catch (error) {
      console.log(error);
    }
  };

  //rifaccio il fetch però delle previsioni
  const fetchDettagliProssimi = async () => {
    try {
      const response = await fetch(
        `https:api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}10&appid=4b537cadf7d901e3303bd90e6f06e29a`
      );
      if (response.ok) {

       
        const prossimi = await response.json();
        console.log(prossimi)
        const primo = prossimi.list[7];//prendo la gioranta di domani 17 01 2024 dalle 15:00, fa le previsioni ogni 3 ore per la giornata prendo oggetto array ,giusto
        //previsini per 5 giorni
        const secondo = prossimi.list[15];
        const terzo = prossimi.list[23];
        const quarto = prossimi.list[31];
        const quinto = prossimi.list[39];
        //Qui si crea l'oggetto dei prossimi 5 giorni
        const objGiorni = {
          primo: primo,
          secondo: secondo,
          terzo: terzo,
          quarto: quarto,
          quinto: quinto
        };
        setProssimiGiorni(objGiorni); //questo è l'use state delle previsioni e lo imposto a fetch andato a buon fine allo stato nuovo ovvero all'oggetto
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
  //QUI FETCH AL PRIMO RENDER, SEMPRE!!!primo argomento funzione di callback, secondo array dipendenze, per interagire con mondo esterno senza subire effetti collaterali,
  //confronto tra funzione di fetch e array vuoto se sono diversi richiama funzione 
  useEffect(() => {
    fetchDettagli();
    fetchDettagliProssimi();
  }, []);
//aggiornato il valore nell'array dipendenze esegui useeffetc ovevro i fetch, non c'ene quindi al primo render fai fetch da subito
//use effect lanciato solo prima volta che viene caricato, altrimenti sincronizza a un altra dipendenza un contatore sarebbe sincronizzato a qualche altro componete per esempio [count]
  return (//name nome citta destrutturata variabile sopra rimessa 
    <div className="FetchMeteo">
      <div className="d-flex justify-content-center gap-5"> 
        <h2>{nome}</h2> 
      </div>
      {temp ? ( //se temp esiste metti alla variabile temp l'oggetto accodato con i valori
        <PrevisioniOggi
          percepita={temp.objToday.percepita}
          minima={temp.objToday.minima}
          massima={temp.objToday.massima}
          umidita={temp.objToday.umidita}
          descrizione={temp.objToday.descrizione}
          img={temp.objToday.img}></PrevisioniOggi>
      ) : ( //altrimenti se non c'e lo stato di temp e quindi i lfetch metti trattini
        <PrevisioniOggi
          percepita="-- --"
          minima="-- --"
          massima="-- --"
          umidita="-- --"
          descrizione="-- --"
          img="-- --"></PrevisioniOggi>
      )}
      {prossimiGiorni ? ( //stesso concetto se esiste carico le previsioni dei prissimi goirni se no ci metto il caricamento dello spinner
        <ProssimiGiorni prossimi={prossimiGiorni}></ProssimiGiorni>
      ) : (
        <div className="d-flex justify-content-center align-items-center p-5">
          <Spinner
            animation="border"
            variant="light"
          />
        </div>
      )}
    </div>
  );
};
export default FetchMeteo;
