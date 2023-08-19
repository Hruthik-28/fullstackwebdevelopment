export function Person({name, age}) {
    return (
        <p style={{fontSize: "25px"}}>
            Name: {name} <br></br>
            age: {age}
        </p>
    );
}

export function Button({text, onClick}){
    return (
            <button onClick = {onClick}>
                {text} 
            </button>
        
    );
}

export function Header({title}){
    return (
        <header style={{fontSize: "20px"}}>
            <br></br>
            title: {title}
        </header>
    );
}

export function List({items}){
    return (
        <ul>
            {
                items.map((item, index) => {
                    return <li key={index}>{item}</li>
                })
            }
        </ul>
    );
}
