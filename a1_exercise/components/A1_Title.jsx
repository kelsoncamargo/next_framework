export default function Title(props){

    if(props.pequeno){
        return(
            <>
                <p>{props.main}</p>
                <p>{props.secundary}</p>
            </>
        )
    }else{
        return(
            <>
                <h1>{props.main}</h1>
                <h2>{props.secundary}</h2>
            </>
        )
    }

}