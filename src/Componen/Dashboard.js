import React, { Component,useState } from 'react';
//import Nav from './Nav';
import Spinner from './Loading';
import axios from 'axios'
import  './Dashboard.css'



 
export class Dashboard extends Component {
  constructor(props){
    super(props)

    this.state={
      searchText:'',
      amount: 16,
      apiUrl: 'https://pixabay.com/api',
      apiKey: '2141397-162a6e6ca9ba4b3fe3cff850d',
      images: [],
      Loading:false
     
    }
   

  }
  onChange=(e)=>{
 const name=e.target.name;
 const value =e.target.value;
 this.setState({
   [name]:value

 })  
  }
 
  handleChange = e => {
    e.preventDefault();
    const val = e.target.value;
    this.setState({ [e.target.name]: val,Loading:true }, () => {
      if (val === '') {
        this.setState({ images: [] });
      } else {
        setTimeout(()=>{
          axios
          .get(
            `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
              this.state.searchText
            }&image_type=photo&per_page=${this.state.amount}&safesearch=true&largeImageURL=1280px`
          )
          .then(res => this.setState({ images: res.data.hits,Loading:false}))
          .catch(err => console.log(err));
        },2000)
        
         
      }});
      console.log(this.state)
    
  };
   
   ClickMore=(data)=>{
    console.log(data);
    window.localStorage.setItem('ID',data);
     this.props.history.push('/MoviesList');
    //console.log(idmkey);
   } 
   
  render() {
 const { images,Loading}= this.state;
   
    return (
 <div  className="body">
 
                
             <div className="col 12 ">
               
               <h3 className="text-center text-black">Search For Any Images</h3>
              <form  onSubmit={this.handleChange}>
              <input type="text" 
                   className="form-control custom"
                    name="searchText" 
                    value={this.state.searchText}
                    onChange={this.onChange}
                     placeholder="Search Images..."/>
        
              </form>
             </div>  
      {Loading  ? <Spinner/>:<div className="containermt-5 sm ">
            <div className="row" >
            
            { images.map((IMAGES,INDEXS)=>{
                return(
                  <div key={INDEXS}className="card " style={{width: '15rem',marginLeft:60,marginBottom:20,marginTop:10}}>
                    <img src={IMAGES.largeImageURL}  style={{height: '15rem'}} className="card-img-top"  alt="..."/>
                  <div className="card-body">
                <h5   style={{color: 'black'}}className="card-title">{IMAGES.tags}</h5>
                <p className="card-text">{IMAGES.Year}</p>
                    <a href="" onClick={()=>this.ClickMore(IMAGES.id)} className="btn btn-primary">ADD CAPTION</a>
                  </div>
               </div>
        )
        })}
     
    </div>
  </div>}

        )
      
    </div>
    );
  }
}

export default Dashboard ;
