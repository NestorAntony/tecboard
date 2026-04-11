import './campo-input.styles.css'

export default function CampoInput ( {className='', ...props } ) {
    return (
        <input className={`input-form ${className}`} {...props}></input>
    )
}