import  React from "react"
import "./Card.css"

class Card extends React.Component {
    render(){
        //  const {monsters } = 
         const {name,email,id} = this.props.monster
        
        return(
            <div className="card-container"  key={id}>
                  <img src={`https://robohash.org/${id}?set=set2`} alt={`monter ${name}`} />
                <h2> {name} </h2>
                <p>{email}</p>
            </div>
       
     
        )
    }
}
export default Card