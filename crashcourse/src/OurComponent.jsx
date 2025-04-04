import {useState} from 'react'
function OurComponent(props) {
    const[strawberryCount, setStrawberryCount] = useState(0)
    function handleClick() {
        setStrawberryCount(prev => prev + 1 )
    }
    
    return (
        <div>
            <h3>Our Cool Component</h3>
            <p>There are {strawberryCount} strawberries and we are feeling {props.mood} </p>
            <button onClick= {handleClick}>increase strawberry count</button>

        </div>
    );
}

export default OurComponent;