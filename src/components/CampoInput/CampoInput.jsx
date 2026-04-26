import './campo-input.styles.css'

export default function CampoInput ( {className='', ...rest } ) {
    return (
        <input className={`input-form ${className}`} {...rest}></input>
    )
}