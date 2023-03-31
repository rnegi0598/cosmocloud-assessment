import './styles/App.scss';
import { InterfaceContextComponent } from './context/InterfaceContextComponent';
import Interface from './components/interfaceComponent/Interface';

function App() {
  
 
  return (
    <div className="App">
      <InterfaceContextComponent>
        <Interface/>
      </InterfaceContextComponent>
    </div>
  );
}

export default App;
