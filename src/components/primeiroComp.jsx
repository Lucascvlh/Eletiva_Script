export default function PrimeiroComponente(props){
    return(
        <>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <p><span>{number(50)}</span></p>

        </>
    )
}

function number(number){
    let list = []
    for(let i = 0; i <= number; i++){
        if(i % 2 == 1){
            list.push(i+"_")
        }
    }
    return list
}