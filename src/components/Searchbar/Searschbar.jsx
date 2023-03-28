import React, {Component} from "react";


class Searchbar extends Component{
    state = {
        value: '',
    }

    handleChange = ({target:{value}}) => {
        this.setState({value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (!this.state.value) {
           return alert('Ваш запит пустий')
        }
        this.props.onSearch(this.state.value)
        this.setState({ value: ''})
    }


    render() {
        return (
<header className="searchbar">
  <form className="form" onSubmit={this.handleSubmit}>
    <button type="submit" className="button">
      <span className="button-label">Search</span>
    </button>

    <input
      className="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
      value={this.state.value}
      onChange={this.handleChange}
    />
  </form>
</header>
        )
    }
}

export default Searchbar;