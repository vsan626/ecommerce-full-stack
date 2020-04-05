import React from 'react'
import Axios from 'axios'
import Listings from './Listings.jsx'

class MainBody extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    Axios.get('/main/data')
      .then((data) => {
        this.setState({
          data: data.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }



  render(){
    console.log(this.state)
    return(
      <div>
        {this.state.data.map((item, index) => (
          <Listings key={index} listingData={item}/>
        ))}
        
      </div>
    )
  }
}

export default MainBody