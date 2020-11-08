import React from 'react';
import Product from './Products'

function App(){
    return(
        <main>
            <section className="container">
                <h1>Github Users</h1>
                 <div className="person">
                    <Product />
                 </div>
            </section>
        </main>
    );
}
export default App;