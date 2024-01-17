import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";//il navigate da usare per il routing, import
import { useDispatch } from "react-redux";//use dispatch import

//Qui l'utente decide la citta di cui vuole sapere le previsioni e dopo aver cliccato su quella che gli interessa mando il dato della lat lon e nome allo store per averlo disponibile in tutti componenti

const CittaDaSelezionare = ({ elenco }) => {
  const navigate = useNavigate();// hook per creare una funzione che ci consente di navigare
  const dispatch = useDispatch();//referenza allo store redux
  const handleOnClick = (lat, lon, nome) => {
    const coord = String(lat) + " " + String(lon) + " " + String(nome);
//al CLICK FACCIO DISPATCH CAMBIO STATO E NAVIGO IN SEGUITO SU DETTAGLI METEOo
    //questo è il dispatch dell'action , modifica allo stato, ad ogni dipatch si attiva il reducer 
    //che fa aggiornamento info dello stato, stato condiviso dall ostore. al click iserisco i dati cordinata 
    dispatch({
      type: "CITTA_RICHIESTA",
//dispatcher, invia action allo store!
      payload: coord //informazione della cordinata per il fetch , alla funzione ricerca imposto questi stati di dispatch azione delle cordinate e della navigation
    });
    navigate(`/dettagli-meteo`); //per navigare alla pagina dettagli meteo  Lo richiamiamo all’interno di un componente funzione per aggiungervi uno stato interno!
    ///${lat}/${lon} da usare con use params, al click iserisco i dati
  };
  return (
    <>
      <div style={{ width: "50%", marginInline: "auto" }}>
        <h2>Seleziona la tua città</h2>
        <ListGroup> 
          {elenco.map((elem, i) => {//per la funzione faccio il map di elenco citta , con parametro indice i, univoco per ogni elemento
            return (
              <ListGroupItem
                key={i}
                className="menu-citta"
                onClick={() => {
                  handleOnClick(elem.lat, elem.lon, elem.name); //al click inserisci latitudine longitudine e nome della città richiamo di nuovo la funzione e reinserisco palermo corretto
                }}>
                <div className="d-flex justify-content-between align-between">
                  <p className="title">{elem.name}</p>
                  <div className="mapouter">
              <div id="mappa" className="gmap_canvas">
                <iframe className="canvasgoogle"
                  id="gmap_canvas"
                  src={'https://maps.google.com/maps?q=' + elem.lat + ',' + elem.lon + '&t=&z=15&ie=UTF8&iwloc=&output=embed' }
                  
                  scrolling="no"
                 
                >
                 
                </iframe>
                </div>
                </div>
                  <p className="title">
                    {elem.country}, {elem.state}
                  </p>
                  </div>
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>
    </>
  );
};
export default CittaDaSelezionare;
