import PropTypes from "prop-types";
import { Person1 } from "./Person1";

export const People1 = ({ people1, setPeople1 }) => {
    return (
        <div>
            <h2 className="text-center my-4">IT Team</h2>
            <div className="container">
                <div className="row d-flex flex-wrap row-cols-1 row-cols-md-2 row-cols-lg-3">
                {
   people1.map((person1) => {
      return (
         <div key={person1.id}>
            <Person1
               id={person1.id} // Aquí estamos usando la propiedad 'id' del objeto 'person1'
               name={person1.name}
               img={person1.img}
               role={person1.role}
            />
         </div>
      );
   })
}

                </div>
            </div>
        </div>
    );
}

People1.propTypes = { // Corregido: 'PropTypes' a 'propTypes'
    people1: PropTypes.array.isRequired, // Mejora: agregado 'isRequired'
    setPeople1: PropTypes.func.isRequired, // Mejora: agregado 'isRequired'
};
