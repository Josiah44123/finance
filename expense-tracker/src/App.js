import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Expense Tracker</h1>
      </header>
      <main>
        <form>
          <div>
            <label htmlFor="description">Description</label>
            <input type="text" id="description" />
          </div>
          <div>
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" />
          </div>
          <button type="submit">Add Expense</button>
        </form>
        <div className="expenses">
          <h2>Expenses</h2>
          <ul>
            {/* Expenses will be listed here */}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
