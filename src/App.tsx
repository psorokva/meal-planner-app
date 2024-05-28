import React, { useState } from 'react';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragDropContainer from './components/DragDropContainer';

const App: React.FC = () => {
  const [containerOneItems, setContainerOneItems] = useState<string[]>(['icon1', 'icon2', 'icon3']);
  const [containerTwoItems, setContainerTwoItems] = useState<string[]>([]);

  const moveIcon = (id: string, fromContainer: string, toContainer: string) => {
    if (fromContainer === 'one' && toContainer === 'two') {
      setContainerOneItems(containerOneItems.filter(item => item !== id));
      setContainerTwoItems([...containerTwoItems, id]);
    } else if (fromContainer === 'two' && toContainer === 'one') {
      setContainerTwoItems(containerTwoItems.filter(item => item !== id));
      setContainerOneItems([...containerOneItems, id]);
    }
  };

  return (
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    <DndProvider backend={HTML5Backend}>
    <div className="App">
      <h1>Drag and Drop Prototype</h1>
      <div className="container-wrapper">
        <DragDropContainer
          items={containerOneItems}
          setItems={setContainerOneItems}
          moveIcon={moveIcon}
          containerName="one"
        />
        <DragDropContainer
          items={containerTwoItems}
          setItems={setContainerTwoItems}
          moveIcon={moveIcon}
          containerName="two"
        />
      </div>
    </div>
  </DndProvider>
);
}

export default App;
