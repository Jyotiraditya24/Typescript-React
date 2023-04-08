type PersonProps = {
   name: {
     first: String
     last: String
   }
}

export const Person = (props: PersonProps)=>{
    return(
        <div>
            <h1>{props.name.first} {props.name.last}</h1>
        </div>
    )
}