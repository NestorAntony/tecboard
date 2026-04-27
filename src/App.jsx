import './App.css';

import FormularioEvento from './components/FormularioEvento';

import Tema from './components/Tema';
import CardEvento from './components/CardEvento/CardEvento';

import { useState } from 'react'

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

  const [eventos, setEventos] = useState([
    {
      capa: 'https://imgs.search.brave.com/QNcwjX3BbC8iAIPKtIp1ZyyD9h8_0ulUjjvlHmjp4iA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ2/OTcwNjQ1NS9wdC9m/b3RvL2J1c2luZXNz/LXdvbWFuLWNvbXB1/dGVyLXNlby13b3Jr/LWFuZC1jb2Rpbmct/b2YteW91bmctZW1w/bG95ZWUtd2l0aC1j/cnlwdG8tYW5kLWds/YXNzZXMtZGlnaXRh/bC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9SlZJdk1wRkg1/SnR0ZEtWbExsdHM4/ODExem9ibDJwQTdP/cndmOG5LanZUOD0',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no Front'
    },
  ])

  function adicionarEvento(evento) {
    // eventos.push(evento);
    // console.log('eventos =>',eventos);

    setEventos([...eventos, evento]); //tem que ser um Array novo
  }

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <div className='banner'>
        <img src="/banner.png" alt="" />
      </div>
      <FormularioEvento temas={temas} aoSubmeter={adicionarEvento} />
      
      {temas.map( (item) => {
        if (!eventos.some((evento) => {
          return evento.tema.id == item.id;
        })){
          return null
        }
        return(
          <section key={item.id}>
            <Tema tema={item}/>
            <div className='grid'>
            {eventos
            .filter( (card) => {
              return card.tema.id == item.id
            }).map((card, index) => {
              return(
                <CardEvento key={index} evento={card}></CardEvento>
              )
            })
            }
            </div>
          </section>
        )
      })}

    </main>
  )

}

export default App;