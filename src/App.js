import './App.css';
import Testimonio from "./componentes/Testimonio";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Primera practica de React</h1>
        <Testimonio 
        nombre="Albert Einstein"
        pais="Alemania"
        imagen="albertE"
        cargo="Doctorado en Física y Doctor en Filosofía"
        empresa="Física cuántica"
        testimonio="Fue un físico alemán de origen judío, nacionalizado después suizo, austriaco y estadounidense. Se le considera el científico más importante, conocido y popular del siglo XX.​​"
        />
        <Testimonio 
        nombre="Cristiano Ronaldo"
        pais="Portugal"
        imagen="elbicho"
        cargo="Futbolista"
        empresa="Meter goles"
        testimonio="Es un futbolista portugués que juega como delantero o extremo. Jugador histórico, estuvo ligado a diversos equipos importantes antes de integrar desde 2021 el plantel del Manchester United Football Club de la Premier League de Inglaterra. Es también internacional con la selección de Portugal, equipo del que es capitán y máximo goleador histórico"
        />
        <Testimonio 
        nombre="Dwayne Johnson"
        pais="Estados unidos"
        imagen="LaRoca"
        cargo="Actor y luchador profesional"
        empresa="Pelis de acción"
        testimonio="Se desempeñó como luchador profesional para la WWE hasta su retirada oficial en 2019, con el objetivo de centrarse en su carrera artística. Ha participado en una gran diversidad de películas siendo premiado en bastantes de ellas, siendo su papel como Luke Hobbs en la franquicia The Fast and the Furious uno de los más reconocidos, así como Black Adam para su cinta independiente Black Adam (2022)"
        />
        <Testimonio 
        nombre="Freddie Mercury"
        pais="Inglaterra"
        imagen="mercury"
        cargo="Cantante"
        empresa="Vocalista de Rock"
        testimonio="Conocido por haber sido el vocalista principal de la banda de rock Queen. Como intérprete, ha sido reconocido por su poderosa voz y extravagantes puestas en escena"
        />
      </div>
    </div>
  );
}

export default App;
