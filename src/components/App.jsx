import React, {Component} from "react";
import Searchbar from "./Searchbar/Searschbar";
import ImageGallery from "./ImageGallery/ImageGallery";


export class App extends Component {
  state = {
    textSearch: '',
  }
 
  handleSubmit = (textSearch) => {
    this.setState({textSearch})
  }

  render() {
    console.log('state', this.state );
    return(<div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Searchbar onSearch={this.handleSubmit}></Searchbar>
      <ImageGallery value={this.state.textSearch} page={this.state.page}></ImageGallery>
    </div>)
   
 }
}
 

