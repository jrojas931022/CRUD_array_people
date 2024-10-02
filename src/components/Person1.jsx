import PropTypes from "prop-types";
export const Person1 = ({ id, name, role, img }) => {
    console.log({ id, name, role, img }); // Verificar los valores
    return (
        <div className="col">
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h3 className="card-text">{role}</h3>
                </div>
                <div className="container mb-4">
                    <button className="btn btn-primary">Editar</button>
                    <button className="btn btn-danger">Eliminar</button>
                </div>
            </div>
        </div>
    );
};


Person1.propTypes = {
    id: PropTypes.number,  // Si 'id' es opcional
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
};