import Component1 from './components/Componenet1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import Component4 from './components/Component4';
import Component5 from './components/Component5';
import Component6 from './components/Component6';
import './App.css';

const App=()=> {
  return (
    <div className="App">
      <header className="App-header">
       <Component1 />
       <Component2 />
       <Component3 />
       <Component4 />
       <Component5 />
       <Component6 />
      </header>
    </div>
  );
}

export default App;
