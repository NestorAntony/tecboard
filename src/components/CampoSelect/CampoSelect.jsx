import './campo-select.styles.css'

export default function CampoSelect( {name, className='', id, children} ){
    return (
        <select name={name}  id={id} className={`campo-select ${className}`}>
            {children}
        </select>
    )
}