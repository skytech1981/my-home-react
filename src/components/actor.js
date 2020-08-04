import React,{Component} from 'react';
import {actorslist} from "../data-model/actorsmodel.js"

class Actor extends Component {
  state ={actors:actorslist}
    
  render() {
    return (
           <div className="container bg-dark d-flex justify-content-center " >
           <div className="row d-flex justify-content-center ">
               {this.state.actors.map(item =>{return (
               <div class="rounded col-sm-4 border m-4">
               <h2 className="bg-primary rounded mt-2">{item.name}</h2>
               <h4 className="bg-light rounded">Age : {item.age}</h4>
               <h5 className="bg-light rounded h-15 m-4">Gender:{item.gender}</h5>
            
               </div>) })}
                   
             </div>
           </div>     
    );
  }
 
}
     export default Actor