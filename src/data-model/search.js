import React,{Component, useCallback} from 'react';
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
this.cancel='';



          }    




fetchSearchResults = (updatedPageNo,query) =>
{
  const PageNumber = updatedPageNo ? ' &page=4${updatedPageNo}' : '';
  const searchUrl ="https://pixabay.com/api/?key=17841586-73b8fef4ec2134af5a3e4e14a&q=${query}";
 
  if(this.cancel){ this.cancel.cancel();}
  this.cancel=Axois.CancelToken.source();

  Axois.get(searchUrl,{cancelToken:this.cancel.token})
  .then( res => {
   const resultNotFoundMsg = 
   console.warn(res);
  })
  .catch(error=>{ 
if (Axois.isCancel(error) || error ) {
this.setState({
loading:false,

messege:"failed to fetch the data . please check network"
           })
      }
  })
};

handleOnInputChange = ( event ) => {
const query = event.target.value;
this.setState({query:query,loading:true,messege:''}, () =>{
  this.fetchSearchResults(1, query); 
} );
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