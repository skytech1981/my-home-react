import React from 'react';





class Actor extends React.Component {
    constructor(props){
    super(props);
    
    }
    
      render() {
        return (
          <div className="card">
            <div className="circle">
<img src="https://m.media-amazon.com/images/M/MV5BMTQ3OTY0ODk0M15BMl5BanBnXkFtZTYwNzE4Njc4._V1_UY317_CR7,0,214,317_AL_.jpg"></img>

            </div>
              <h2 className="tagname">David</h2>
              <h3 className="age">32</h3>
            </div>
        );
      }
     }
    

     export default Actor