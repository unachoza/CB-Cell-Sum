import logo from './logo.png';
import './App.css';
import Cell from './Components/Cell';

function App() {
  return (
    <div className="app">
      <img src={logo} alt="CB Insights logo" />
      <p className="app-intro">
        The first 3 cells in the grid contain input fields that accept numbers. The fourth cell in the grid will display
        the sum of the numbers in the first three cells.
      </p>

      <div className="cell-container">
        {Array.from(Array(4).keys()).map((cell, i) => {
          return <Cell key={i} />;
        })}
      </div>
    </div>
  );
}

export default App;
