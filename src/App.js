// import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Show from './component/ShowActors&Cart/Show';

function App() {
  return (
    <div className="App">
      <div className="body">
        <Header></Header>
        <Show></Show>
      </div>
    </div>
  );
}

export default App;
