import './campo-label.styles.css'

export default function CampoLabel ( {children , htmlFor, className=''} ){
    return (
        <label htmlFor={htmlFor} className={`label ${className}`}>
            {children}
        </label>
    )
}