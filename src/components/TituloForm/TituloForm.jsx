import './titulo-form.styles.css'

export default function TituloForm({className ='', children, ...props}){
    return (
        <h2 className={`titulo-form ${className}`}> {children} </h2>
    )
}