import React from 'react'; 



const Person = ({people}) =>{
    return(
        <React.Fragment>
            {people.map((people => {
                const{id, name, age, image} = people;
                return(
                        <div className="person" key={id}>
                          <img src={image}/>
                            <div>
                                <h1>{name}</h1>
                                <h4>{age}</h4>
                            </div>
                        </div>
                );
            }))}
        </React.Fragment>
    );
}
export default Person;