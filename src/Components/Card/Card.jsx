import React from "react";
import "./Card.css";

// const Card = (props) => {
const Card = ({monster}) => {

    // const {name, email, id } = props.monster
    const {name, email, id } = monster

  return (
    <div className="card-container" key={id}>
      <img src={`https://robohash.org/${id}?set=set2`} alt={`monter ${name}`} />
      <h2> {name} </h2>
      <p>{email}</p>
    </div>
  );
};

// class Card extends React.Component {
//     render(){
//         //  const {monsters } =
//          const {name,email,id} = this.props.monster

//         return(
//             <div className="card-container"  key={id}>
//                   <img src={`https://robohash.org/${id}?set=set2`} alt={`monter ${name}`} />
//                 <h2> {name} </h2>
//                 <p>{email}</p>
//             </div>

//         )
//     }
// }
export default Card;
