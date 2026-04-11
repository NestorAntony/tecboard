import './botao-form.styles.css'

export default function BotaoForm ({className='', value, children}){
    return(
        <button className={`botaoForm ${className}`} value={value}>
            {children}
        </button>
    )
}