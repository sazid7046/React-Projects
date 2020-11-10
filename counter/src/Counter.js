import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';

export default function Counter(){
    const[value, setValue] = useState(0);
    const reset = () =>{
        setValue(0)
    }
    return(
        <main>
            <section className="container">
                <h1>Counter</h1>
                <h2>{value}</h2>
                <div className="btn">
                    <AddIcon className="addition" onClick={() => setValue(value+1)}/>
                    <DeleteIcon className="reset" onClick={reset}/>
                    <RemoveIcon className="subtraction" onClick={() => setValue(value-1)}/>
                </div>
            </section>
        </main>
    );
}