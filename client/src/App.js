import React from 'react';
import axios from "axios";
import Card from "./components/Card";
import "./App.css";
import NavBar from "./components/Navbar";

class App extends React.Component{
  constructor(){
    super();
    this.state= ({
      players:[]
    })
  }
  componentDidMount() {
    axios
    .get('http://localhost:5000/api/players')
    .then( res => {
      console.log("List of players", res.data)
      this.setState({
        players: res.data
      })
    }, [])
    .catch( error => console.log("Re-check your axios", error))
  }

  render(){
    return(
      <div>
      <NavBar />
      <div className="container">
      
        {this.state.players.map(player => (
          <Card key={player.id} name={player.name} country={player.country} searches={player.searches} />
        ))}
      </div>
      </div>
    )
  }
}
export default App;



