import React from 'react';

function App() {
  return (
    <div>
      <ul className="web-tooling">
        <li>Vitor</li>
        <li>Hussain</li>
        <li>Mariya</li>
        <li>Iman</li>
        <li>Brenda</li>
      </ul>
    </div>
  );
}

export default App;

// const Innercomp = ({ value }) => <pre>{value}</pre>;
// const CounterBut = ({ onClick, children }) => (
//   <button onClick={onClick}>{children}</button>
// );
// const App = () => {
//   const [number, setNumber] = useState(0);
//   return (
//     <div className="App">
//       <CounterBut onClick={() => setNumber(number - 1)}>-</CounterBut>
//       <Innercomp value={number} />
//       <CounterBut onClick={() => setNumber(number + 1)}>+</CounterBut>
//     </div>
//   );
// };
