import React,{Component} from 'react';
import {vip_arr} from "../data-model/viplist.js"

class Vip extends Component {
state ={vip_ar:vip_arr}
    
      render() {
        return (
           <div className="container">
               <div className="row">
                   <div class="rounded col-lg-6 border m-2">
                     <img src="https://specials-images.forbesimg.com/imageserve/59d502f931358e542c034e76/200x200.jpg?background=000000&cropX1=245&cropX2=2420&cropY1=636&cropY2=2813" class="rounded float-left m-2"/>
                    <h2>Name:</h2>
                    <div>Company:</div>
                   </div>
               </div>
           </div>
        );
      }
     
}

export default Vip