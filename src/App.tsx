
import CytoscapeComponent from 'react-cytoscapejs';
import './App.css'

function App() {
  const elements = [
    { data: { id: 'one', label: 'Node 1' }, position: { x: 100, y: 100 } },
    { data: { id: 'two', label: 'Node 2' }, position: { x: 200, y: 200 } },
    { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }
  ];

  return (
    <div className="App">

      <h1> LinkedList | React + Cytoscape</h1>

      <CytoscapeComponent elements={elements} style={ { width: '1000px', height: '1000px' } } />

    </div>
  )
}

export default App
