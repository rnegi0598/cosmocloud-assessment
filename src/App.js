import "./styles/App.scss";
import { InterfaceProvider } from "./context/InterfaceProvider";
import Interface from "./components/interfaceComponent/Interface";

function App() {
  return (
    <div className="App">
      <InterfaceProvider>
        <Interface />
      </InterfaceProvider>
    </div>
  );
}

export default App;
