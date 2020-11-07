import React, { useState } from 'react';
import Person from './Person';
import data from './data';


function App() {
    const[people, setPeople] = useState(data);
    return(
        <main>
            <section className="container">
                <h3>{people.length} birthday today</h3>
                <Person people = {people}/>
            <button className="btn" onClick={() => setPeople([])}>Clear All</button>
            </section>
        </main>
    );
};

export default App;
