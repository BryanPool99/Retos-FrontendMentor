import "./App.css";
import { ContainerMap } from "./assets/styles/MapStyles";
import Header from "./components/Header/Header";

function App() {
  
  return (
    <>
      <Header  />
      <ContainerMap id="map"></ContainerMap>
    </>
  );
}

export default App;
