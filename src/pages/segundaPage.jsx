export default function segundaPage(){
    return(
        <div>
            {generateList(10)}
        </div>
    )
}

function generateList(vetor){
    let list = []
    for(let i = 0; i < vetor; i++){
        list.push(<p><span>{i}</span></p>)
    }
    return list
}