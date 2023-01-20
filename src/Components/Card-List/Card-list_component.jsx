import React from "react"
import './Card-List.style.css'
import Card from "../Card/Card"

const CardList = (props) => {
    const monsters = props.monsters
    return ( 
        <div className="card-list" >
                     {monsters.map((monster) => {
                        return(
                         <Card monster={monster}  key={monster.id}/>
                    )})}
                </div> 
     );
}
 
export default CardList;


// class CardList extends React.Component {
    
//     render() {
//         console.log(this.props.monsters)
//         console.log('render from cardlist')
//         const {monsters } = this.props
        
//         return (
//         <div className="card-list" >
//             {monsters.map((monster) => {
//                 return(
//                  <Card monster={monster}/>
//             )})}
//         </div>     
//         )   
//     }
// }
//  export default CardList 