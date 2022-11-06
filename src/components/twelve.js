import React from 'react'
import Button from  './Button'

const Twelvth =() => {
    const [count, setCount] = useState(0)
    return(
        <div>
            <h1>{count} </h1>
            <Button btnName = 'Increment' onClick={()=>{
                setCount( count+)
            }}
        </div>
    )
    
}