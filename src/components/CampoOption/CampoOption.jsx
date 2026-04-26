import './campo-option.styles.css'

export default function CampoOption ({value, children}) {
    return (
        <option className="campo-option" value={value}> {children} </option>
    )
}