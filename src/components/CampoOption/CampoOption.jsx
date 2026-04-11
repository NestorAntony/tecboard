// import './campo-option.styles.css'

export default function CampoOption ({value, children}) {
    return (
        <option value={value}> {children} </option>
    )
}