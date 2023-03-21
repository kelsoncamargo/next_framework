/*
    <div>
        <span>1,</span>
        <span>2,</span>
        <span>3,</span>
        <span>4,</span>
        <span>5,</span>
        <span>6,</span>
        <span>7,</span>
        <span>8,</span>
        <span>9,</span>
        <span>10,</span>
    </div>
*/

export default function list1(){

    //FUNCTIONS
        function autoCreateSpan( quantSpans ){
            let spanList = []

            for(let i = 0; i <= quantSpans; i++){
                spanList.push(<span>{i},</span>)
            }
            return spanList
        }
    //FUNCTIONS
    
    return(
        <div>
         {
            autoCreateSpan(10)
         }
        </div>
    )

}