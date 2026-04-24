import './App.css';

import FormularioEvento from './components/FormularioEvento';
import Tema from './components/Tema';


function App(){

  const temas = [
    {
      id: 1,
      tema: "front-end"
    },
    {
      id: 2,
      tema: "back-end"
    },
    {
      id: 3,
      tema: "devops"
    },
    {
      id: 4,
      tema: "inteligencia artificial"
    },
    {
      id: 5,
      tema: "data science"
    },
    {
      id: 6,
      tema: "cloud"
    }
  ]

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <div className='banner'>
        <img src="/banner.png" alt="" />
      </div>
      <FormularioEvento />
      {temas.map( (item) => {
        return(
          <section key={item.id}>
            <Tema tema={item}/>
          </section>
        )
      })}
      <section>
        
      </section>
    </main>
  )

}

export default App;