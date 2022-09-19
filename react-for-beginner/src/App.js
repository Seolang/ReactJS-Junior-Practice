import { useEffect, useState } from "react";

const App = () => {

    const [todo, setTodo] = useState("");
    const [toDos, setToDos] = useState([]);

    const onChange = (event) => {
        setTodo(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (todo === "") {
            return;
        }
        // "..." separate an array to each elements
        setToDos(prevArray => [todo, ...prevArray]);
        setTodo("");
    };

    useEffect(() => {
        console.log(toDos);
    // watching whether array is changed
    }, [toDos]);

    const deleteBtn = (index) => {
        setToDos((curToDos) => curToDos.filter((_, curIndex) => curIndex !== index));
    };
    
    

    return (
        <div>
            <h1>My Todos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input 
                    onChange={onChange} 
                    value={todo}
                    type="text" 
                    placeholder="Write your to do."
                />
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index) => (
                    // <li> must have key props
                    <li key={index}>
                        {/* 
                        {item}<button onClick={deleteBtn(index)}>delete</button>

                            writing code like this will delete <li> element immediately
                            because if you write only deleteBtn(index) in onClick's {} position,
                            it will run as immediately-invoked function.
                            In other words, just deleteBtn(index) means return value, not function!

                        
                        */}
                        {item}
                        <button 
                            onClick={()=>deleteBtn(index)} 
                            style={{
                                    marginLeft:10, 
                                    backgroundColor:"white", 
                                    border:0
                                }}
                        >❌
                        </button>
                    </li>))}
            </ul>
        </div>
    );
}

export default App;