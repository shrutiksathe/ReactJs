
import './App.css';
import { MultipleFunc1, MultipleFunc2 } from './MultipleFunc';
import Myfunc from './Myfunc';


// function Myfunc() {
//   return (
//        <h2> This is My Func</h2>
//   );
  
// }

function App() {
  return (
    <div>
    <h1>Hello React</h1><Myfunc />
        
         <div> 
          <MultipleFunc1 />
          <MultipleFunc2 />
          </div>

    </div>
  );
}

export default App;
