import React,{Component} from 'react';
import {actorslist} from "../data-model/actorsmodel.js"

class Actor extends Component {
  state ={actors:actorslist}
    
  render() {
    return (
           <div className="contain " >
           <div className="row d-flex justify-content-center ">
               {this.state.actors.map(item =>{return (
               <div className="container rounded col-lg-3 bg-light rounded m-4 ">
                 <img src={item.img} className="img img-fluid rounded-20   mt-4 "/>  
               <h2 className="name rounded mt-2 ">{item.name}</h2>
               <h4 className="actordetails rounded mt-2">Born : {item.born}</h4>
               <h5 className="actordetails rounded mt-2  ">Gender: {item.gender}</h5>
               <a className="actorlink rounded mb-4 " href={item.webpage}  target="_blank">Actor info</a>
               </div>) })}
               </div>
           </div>     
    );
  }
 
}
     export default Actor