import React,{Component} from 'react';
import {vip_arr} from "../data-model/viplist.js"


class Vip extends Component {
state ={vip_ar:vip_arr}
    
      render() {
        return (
               <div className="container bg-dark d-flex " >
               <div className="row d-flex justify-content-center">
                   {this.state.vip_ar.map(item =>{return (
                   <div class="rounded col-sm-5 border m-4">
                     <img src={item.image} class="w-50% img-fluid img-thumbnail rounded-circle float-left m-4 mt-4 ml-3"/>
                    <h2 className="bg-primary rounded mt-2">{item.name}</h2>
                    <h4 className="bg-light rounded">Company : {item.source}</h4>
                    <h5 className="bg-light rounded">Country:{item.country}</h5>
                    <h5 className="bg-light rounded">Birth Year:{item.birth_year}</h5>
                    <h4 className="bg-warning rounded">Value : {item.worth}</h4>
                   </div>) })}
                   
            
                 </div>
               </div>     
        );
      }
     
}

export default Vip