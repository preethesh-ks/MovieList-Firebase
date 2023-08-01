// import logo from './logo.svg';
import './App.css';
import AddMovie from './componenets/AddMovie';
import EditMovie from './componenets/EditMovie';
import ListMovies from './componenets/ListMovies';
import RealtimeMovies from './componenets/RealtimeMovies';

function App() {
  return (
    <div className="App">
      <header className="back">
        <h3>firestore</h3>
      </header>
      <main>
        <ListMovies/>
        <AddMovie/>
        <EditMovie/>
        <RealtimeMovies/>
      </main>
    </div>
  );
}

export default App;
