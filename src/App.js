// import logo from './logo.svg';
import './App.css';
import React from "react"

class App extends React.Component{
  constructor() {
    super();
  
    this.state = {
      monsters: [],
      searchField: ""
    }


  };
  async componentDidMount(){
    const data =  await fetch('http://jsonplaceholder.typicode.com/users')
    const user = await data.json()
    // console.log(user)
    this.setState(
      () => {
        return {monsters:user}
      },
      ()=>{
        console.log(this.state)
      }
    )
  }
  onSearchChange =(event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(()=>{
      return { searchField }
    })
  }


  render() {
    const {monsters, searchField} = this.state
    const {onSearchChange} = this
    const filteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
  
    return(
      <div className="App">
        <input 
          className='search-box' 
          type="search" 
          placeholder='search monster' 
          onChange={onSearchChange}
        //   onChange={(event)=>{
        //     const searchField= event.target.value.toLocaleLowerCase()
        //     // console.log(event.target.value)
        //     // const searchString = event.target.value.toLocaleLowerCase() //convert all letter to lowercase
        //     // const filteredMonsters = this.state.monsters.filter((monster)=>{
        //     //   return monster.name.toLocaleLowerCase().includes(searchString)
        //     // })
        //     this.setState(()=>{
        //       // return {monsters:filteredMonsters}
        //       return { searchField }
        //     })
        //   }
        // } 
        />


        {
          filteredMonsters.map((monster) => {
            return(
              <div  key={monster.id}>
                <h1>  {monster.name}</h1>
                <p>  {monster.email}</p>

              </div>
            )
          })
        }
       
      </div>
    )
  }
  
}


// class App extends React.Component{
//   constructor() {
//     super();
  
//     this.state = {
//       monsters: [
//         {name:"Prince",id:"12340er"},
//         {name:"Chijioke",id:"12340er34"},
//         {name:"Blessing",id:"12340erdf"},
//         {name:"Prince",id:"1112340er"},

//       ]
//     }
//   };
//   render() {
//     return(
//       <div className="App">
//         {
//           this.state.monsters.map((monster) => {
//             return(
//               <div  key={monster.id}>
//                 <h1>  {monster.name}</h1>
//               </div>
//             )
//           })
//         }
       
//       </div>
//     )
//   }
  
// }

// class App extends React.Component{
// constructor() {
//   super();

//   this.state = {
//     name: {firstName:'Kings', lastName:"ogbonnaya"},
//     company: 'Kings Company'
//   }
// }

//   render() {
//     return(
//       <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//          HI {this.state.name.firstName} {this.state.name.lastName} and I work with {this.state.company}
//         </p>
//         <button onClick={()=> {
//           this.setState(
//             ()=>{
//               return {
//                 name:{firstName:"Kings", lastName:"Ikemba"},
//                 company:"Decagon"
//               }
//             },
//             ()=>{console.log(this.state)}
//           )
//         } }>Change Name</button>
//       </header>
//       </div>
//     )
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
