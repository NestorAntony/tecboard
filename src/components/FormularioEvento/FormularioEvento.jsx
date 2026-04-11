import './formulario-evento.css';

import TituloForm from '../TituloForm';
import CampoFormulario from '../CampoFormulario';
import CampoLabel from '../CampoLabel';
import CampoInput from '../CampoInput'

import CampoSelect from '../CampoSelect';
import CampoOption from '../CampoOption';

import BotaoForm from '../BotaoForm';

export default function FormularioEvento() {
    return (
      <form className="form-evento">
        <TituloForm className="titulo-form">
          Preencha para criar um Evento:
        </TituloForm>

        <div className="campos">
          <CampoFormulario className="campo-formulario">
            <CampoLabel htmlFor="nomeEvento">Qual o nome do evento?</CampoLabel>
            <CampoInput
              id="nomeEvento"
              type="text"
              placeholder="Summer dev hits"
              required
            />
          </CampoFormulario>

          <CampoFormulario>
            <CampoLabel htmlFor="data" className="label">
              Data do evento
            </CampoLabel>
            <CampoInput id="data" type="date" required />
          </CampoFormulario>

          <CampoFormulario>
            <CampoLabel htmlFor="event-type">Tema do evento</CampoLabel>

            <CampoSelect name="event-type" id="event-type">
              <CampoOption value="casamento">Casamento</CampoOption>
              <CampoOption value="campeonato" selected>
                Campeonatoooo
              </CampoOption>
            </CampoSelect>
          </CampoFormulario>
        </div>
        <BotaoForm value="criar-evento">Criar Evento</BotaoForm>
      </form>
    );
}