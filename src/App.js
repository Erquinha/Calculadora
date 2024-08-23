import { useState } from 'react';
import reactLogo from 'https://www.google.com/imgres?q=imagem%20calculadora%20minimalista&imgurl=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FS8ffe62732a99406d834a09ba93fd0fadJ%2FF-cil-de-usar-aritm-tica-minimalista-colorido-8-d-gitos-handheld-estudante-calculadora-mini-calculadora.jpg&imgrefurl=https%3A%2F%2Fpt.aliexpress.com%2Fi%2F1005004963255957.html&docid=7eBe6kjF91sNlM&tbnid=tF2UCYejpEICtM&vet=12ahUKEwiokYmC0YmIAxX3lJUCHb64CdUQM3oECHQQAA..i&w=1001&h=1001&hcb=2&itg=1&ved=2ahUKEwiokYmC0YmIAxX3lJUCHb64CdUQM3oECHQQAA'; // Logo do React
import viteLogo from 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsM8m1NUFv_6_t3uoPGZDel6wDDnFlke5HkA&s'; 
import './App.css'; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.js</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
