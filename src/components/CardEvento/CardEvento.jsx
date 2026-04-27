import './card-evento.styles.css';

export default function CardEvento( {evento, className=''} ) {
    
    return (
        <div className={`card ${className}`}>
            <img src={evento.capa} alt={evento.titulo} />
            <div className='corpo'>
                <p className='tag'>
                    {evento.tema.tema}
                </p>

                <p>
                    {evento.data.toLocaleDateString('pt-br')}
                </p>
                <h2>{evento.titulo}</h2>
            </div>
        </div>
    )
}