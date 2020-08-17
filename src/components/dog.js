import React,{Component} from 'react';
import {dogslist} from "../data-model/dogslist.js"
import axios from 'axios';



class Dogs extends Component {
    state = {
        dogs: [],
        inputDog:''
      }
    
      componentDidMount() {
        axios.get(`https://dog.ceo/api/breeds/list/all`)
          .then(res => {
            //console.log(res.data.message)
            const dogs = Object.keys(res.data.message);
            console.log(dogs)
            this.setState({ dogs });
         
            })
          }
    
    
      render() {
        console.log("render", this.state.dogs);
        const filtered = this.state.dogs.filter(dog => dog.includes(this.state.inputDog))
        const displayDog = filtered.map(dogs => <li>{dogs}</li>)


        // dogs.filter(dogs => dogs.includes('aki')).map(filteredName => (
        //     <li>
        //       {filteredName}
        //     </li>
        // ));

        return (
            <div>
                <input value={this.state.inputDog} onChange={(e) => this.setState({inputDog: e.target.value})}></input>
                <ul>
            
                     {displayDog}
                       
                 </ul>
           </div>
        )
      }
    }
     export default Dogs