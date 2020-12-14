import logo from './logo.svg';
import './App.css';
import Checkbox from './com/check/Checkbox'

const tasks =[
  'hi',
  'my',
  'name',
  'name',
  'is',
  'VaLaK'
]


function App(){
  return(
  <div>
    <h1>
      To DO
    </h1>
    <ul>

     {tasks.map((task) => <Checkbox text={task} />)}
    </ul>
  
      
      
  </div>
  )};



export default App;



// array.forEach(element => {
  
// });

// map 