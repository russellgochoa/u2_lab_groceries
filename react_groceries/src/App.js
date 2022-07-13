import logo from './logo.svg'
import './App.css'
import Items from './components/Items'
import List from './components/List'

function App() {
  return (
    <div className="App">
      {Items.map((choose, i) => (
        <List
          key={i}
          item={choose.item}
          brand={choose.brand}
          units={choose.units}
          quantity={choose.quantity}
          buy={choose.isPurchased}
        />
      ))}
    </div>
  )
}
export default App
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>
