import './App.css';

import FormularioEvento from './components/FormularioEvento';

function App(){

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <div className='banner'>
        <img src="/banner.png" alt="" />
      </div>
      <FormularioEvento />
    </main>
  )

}

export default App;