import './formulario-evento.css';

import TituloForm from '../TituloForm';
import CampoFormulario from '../CampoFormulario';
import CampoLabel from '../CampoLabel';
import CampoInput from '../CampoInput'

import CampoSelect from '../CampoSelect';
import CampoOption from '../CampoOption';

import BotaoForm from '../BotaoForm';

export default function FormularioEvento( {temas, aoSubmeter} ) {

  function handleSubmit (formData) {
    const index = Number( formData.get('event-type') ) -1 ;

    const evento = {
      capa: formData.get('endImage'),
      tema: temas[index],
      data: new Date( formData.get('data') ),
      titulo: formData.get('nomeEvento')
    }

    aoSubmeter(evento);

  }

    return (
      <form className="form-evento" action={handleSubmit}>
        <TituloForm className="titulo-form">
          Preencha para criar um Evento:
        </TituloForm>

        <div className="campos">
          <CampoFormulario className="campo-formulario">
            <CampoLabel htmlFor="nomeEvento">Qual o nome do evento?</CampoLabel>
            <CampoInput
              id="nomeEvento"
              name="nomeEvento"
              type="text"
              placeholder="Summer dev hits"
              required
            />
          </CampoFormulario>

          <CampoFormulario>
            <CampoLabel htmlFor="endImage">Qual o endereço da imagem da capa?</CampoLabel>
            <CampoInput 
            id="endImage"
            name="endImage"
            type="text" 
            placeholder="https://..."
            required />
            
          </CampoFormulario>

          <CampoFormulario>
            <CampoLabel htmlFor="data" className="label">
              Data do evento
            </CampoLabel>
            <CampoInput id="data" name="data" type="date" required />
          </CampoFormulario>

          <CampoFormulario>
            <CampoLabel htmlFor="event-type">Tema do evento</CampoLabel>

            <CampoSelect name="event-type" id="event-type">
              <CampoOption selected>Selecione uma opcao</CampoOption>
              {temas.map((item) => {
                return (
                  <CampoOption value={item.id}>
                    {item.tema}
                  </CampoOption>
                )
              })}
            </CampoSelect>
          </CampoFormulario>
        </div>
        <BotaoForm value="criar-evento">Criar Evento</BotaoForm>
      </form>
    );
}