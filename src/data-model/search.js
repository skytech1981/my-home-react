import React from 'react';
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

handleonInputChange = (event) => {
const query = event.target.value;
// this.setState(state: {query:query});


};  

      render() {
        return (
               <div className="container ">
                 <h2 className="heading "> Live Actors Search  </h2>
                 <label className="search-label" htmlFor="search-input">
                    <input type="text" name="" value="" id="search-input"            placeholder=" Search..."
                    onChange={this.handleonInputChange}
                   />
                <i class="fa fa-search search-icon" aria-hidden="true"/>

                 </label>
               </div> 
         );
      }
     
}

export default Search 