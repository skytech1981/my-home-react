import React,{Component} from 'react';
import '../search.css';
import Axois from 'axios';
 
class Search extends React.Component {
    constructor(props){
    super(props);

this.State={
             query:"",
             result:{},
             loading:false,
             messege:''   

            }
          } ;     



fetchSearchResults = (updatedPageNo,query) =>
{
  const searchUrl = "https://pixabay.com/api/?key=PASTE_YOUR_API_KEY_HERE&q=${query}${pageNumber}";
}



handleOnInputChange = ( event ) => {
const query = event.target.value;
this.setState({query:query,loading:true,messege:''});
}; 

     
  
 
      render() {
        const {query}=this.setState
     
     
        return (
               <div className="container ">
                 <h2 className="heading "> Live Actors Search  </h2>
                 <label className="search-label" htmlFor="search-input">
                    <input  
                    type="text" 
                    name="query"
                    value={query}
                    id="search-input" 
                    placeholder=" Search..."
                    onChange={this.handleOnInputChange}
                   />
                <i class="fa fa-search search-icon" aria-hidden="true"/>

                 </label>
               </div> 
         );
      }
     

  newMethod() {
    return this.state;
  }
}

export default Search 