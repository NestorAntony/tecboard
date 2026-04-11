import './campo-formulario.styles.css'

export default function CampoFormulario({className = '', children}){
    return (
        <fieldset className={`campo-formulario ${className}`}>
            {children}
        </fieldset>
    )
}