import React,{Component} from 'react';
import '../search.css'

 
class Search extends React.Component {
    constructor(props){
    super(props);

this.State={
             query:'',
             result:{},
             loading:false,
             messege:''   

            }
        }       



      render() {
        return (
               <div className="container">
                 <h2 className="heading">Live Search </h2>
                 <label className="search-label" htmlFor="search-input">
                    <input type="text"
                    value=""
                    id="search-input" 
                    placeholder="search..."
                   />
                <i class="fa fa-search" aria-hidden="true"/>

                 </label>
               </div> 
         );
      }
     
}

export default Search 