import './App.css';
import Props from './learn/props';
import State from './learn/state_in_fc';
function App() {
  return (
    <div className="App">

      <State/>

     <Props  name='ramesh'  >
      <p>hello this is childern props</p>
      </Props>
     <Props name='suresh' />
     <Props  name='satish'/>
     <Props name='umesh'/>
    </div>
  );
}

export default App;


