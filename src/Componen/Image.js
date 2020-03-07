import React, { Component } from 'react'
import axios from 'axios'
import './singleImage.css';
import Spinner from './Loading';



export class MoviesList extends Component {
    constructor(props){
        super(props)
        this.state={
        IMAGE_URL:[],
        apiUrl: 'https://pixabay.com/api',
        apiKey: '15480709-df4fe32f11f123d9ebf38d469',
        Id:window.localStorage.getItem('ID'),
        Loading:false
      }
      //this.divRef = React.createRef();
     }

   
  async componentDidMount(){
     this.setState({Loading:true})
     setTimeout( async()=>{
          
       let response = await axios.get( `${this.state.apiUrl}/?key=${this.state.apiKey}&id=${this.state.Id}&api &image_type=photo&per_page=&safesearch=true`)
       console.log(response); 
       let CurrentData = response.data.hits[0].largeImageURL

        this.setState({
          IMAGE_URL:CurrentData,Loading:false
        })
      },1000)
      
     
    }
    
    render() {
      const {Loading}=this.state
        return (
            <div className="singleImage">
           <div class="container image">
        {Loading ? <Spinner/>:<img src={this.state.IMAGE_URL} />}
        <button  class="btn btn-primary btn-lg btn-block edit"> <a href={this.state.IMAGE_URL}  style={{color:'white'}}download="image.jpg">Download</a>
        
        </button>

       
      
         </div>
                </div>

        );
    }
}

export default MoviesList;
