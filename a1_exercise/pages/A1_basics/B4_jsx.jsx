export default function jsx4(){

    const subtitle = "I'm in JS"
    
    return(
        <div>
            <h1>Integration JS and JSX</h1>
            <h2>{subtitle}</h2>
            <h3>{3 * 3}</h3>
            <h2>{Math.max(13,39)}</h2>
            <h5>{betweenValue(9.6, 1, 10)}</h5>
   </div>
    )
}

function betweenValue(value, min, max){
    return value > min && value < max ? 'Yes' : 'Not'
}