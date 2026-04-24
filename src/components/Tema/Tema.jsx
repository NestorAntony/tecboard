import './tema.styles.css'

export default function Tema ({tema},className=''){
    return (
        <h3 className={`tema ${className}`}>{tema.tema}</h3>
    )
}