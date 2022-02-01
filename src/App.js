import logo from './logo.svg';
import './App.css';
import RouterComponent from './Components/RouterComponent';
import ContextComp from './Components/Context/ContextComp.Component';


function App() {
  return (
    <div className="App">
      <ContextComp>
     <RouterComponent/> 
      </ContextComp>
    </div>
  );
}

export default App;
