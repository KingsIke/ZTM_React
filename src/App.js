import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import CardList from "./Components/Card-List/Card-list_component.jsx";
import SearchBox from "./Components/Search-Box/search-box_component.jsx";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  // const [stringField, setStringField] = useState('')
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)
  console.log('render')

  useEffect(() => {
    async function fetchData() {
      const data = await fetch('http://jsonplaceholder.typicode.com/users');
      const user = await data.json();
      setMonsters(user);
    }
    fetchData();
  }, []);

  useEffect(() => {

    const newFilteredMonsters = monsters.filter(monster =>
      monster.name.toLocaleLowerCase().includes(searchField)
    );
    setFilteredMonsters(newFilteredMonsters)


  }, [monsters, searchField])

  const onSearchChange = event => {
    const searchField = event.target.value.toLocaleLowerCase();
    setSearchField(searchField);
  }

  // const onStringChange = (event) => {
  //   setStringField(event.target.value)
  // }
  // console.log(filteredMonsters)

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      {/* < SearchBox onChangeHandler={onStringChange} placeholder='set String' /> */}

      < SearchBox onChangeHandler={onSearchChange} placeholder='search monster' className='search-box' />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

// class App extends React.Component{

//  constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ""
//     }

//   };
//   async componentDidMount(){
//     const data =  await fetch('http://jsonplaceholder.typicode.com/users')
//     const user = await data.json()

//     this.setState(
//       () => {
//         return {monsters:user}
//       }
//     )
//   }
//   onSearchChange =(event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(()=>{
//       return { searchField }
//     })
//   }

//   render() {
//     const {monsters, searchField} = this.state
//     const {onSearchChange} = this
//     const filteredMonsters = monsters.filter((monster)=>{
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     })

//     return(
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         < SearchBox onChangeHandler={onSearchChange}  placeholder='search monster' className='search-box'/>
//         <CardList  monsters={filteredMonsters} />

//       </div>
//     )
//   }

// }


export default App;
