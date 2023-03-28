import { getImage } from "components/services/getImage";
import React, { Component } from "react";
import Loader from "components/Loader/Loader";
import AddImageBtn from "../Button/Button";

class ImageGallery extends Component{
    state = {
        images: [],
        loading: false,
        page: 1,
    
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.value !== this.props.value || prevState.page !== this.state.page ) {
            this.setState({loading:true})
            getImage(this.props.value.trim(), this.state.page)
                .then((response) => response.json())
                .then((images) => {
                    this.setState({
                        images:[...this.state.images, ...images.hits]
                })
            }).catch((error) => {
                console.log('error >>', error)
            }).finally(() => {
                this.setState({loading:false})
            })
        }
    }
    handleLoadMore = () => {
        this.setState((prevState) => ({
            page: prevState.page + 1,
        }))
}

    render() {
        return (
        <>
            {this.state.error && <h1>{this.state.error}</h1>}       
            {this.state.loading && <Loader></Loader>}
            {this.state.images && this.state.images.map(el => {
            return (
                    <ul className="gallery">
                    <li  key={el.id} className="gallery-item">
                    <img src={el.webformatURL} alt={el.tags} />
                    </li>
                    </ul>
            )
            })}
            {this.state.images.length > 0 ? <AddImageBtn onClick={this.handleLoadMore}></AddImageBtn> : null}
        </>
            
      
        )
    }
}

export default ImageGallery;

        ////
    //    <li key={el.id}>{el.id}</li>     
    // { images:{hits:[...this.state.images.hits, images.hits ]} }