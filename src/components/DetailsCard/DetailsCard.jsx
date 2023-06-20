import "./DetailsCard.css";

import BtnType from "../BtnType/BtnType";

const DetailsCard = (props) => {
  return (
    <>
      {props.item ? (
        <main className="details-card">
          <img
            src={props.item.sprites.other.home.front_default}
            alt={props.item.name}
          />
          <div className="details-card-name">
            <h2>
              {props.item.id < 10 ? "#00" : props.item.id < 100 ? "#0" : "#"}
              {props.item.id}{" "}
            </h2>
            <h2>{props.item.name}</h2>
          </div>
          <div className="details-card-characteristics">
            <h3>Höhe: {props.item.height / 10}m</h3>
            <h3>Gewicht: {props.item.weight / 10}kg</h3>
          </div>
          <div className="details-card-types">
            {props.item.types.map((elm, index) => {
              return (
                <BtnType
                  type={elm.type.name}
                  key={index}
                  className={`type-${elm.type.name}`}
                />
              );
            })}
          </div>
        </main>
      ) : (
        "Seite muss geladen werden"
      )}
    </>
  );
};

export default DetailsCard;
