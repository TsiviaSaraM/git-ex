import { Component } from 'react'
import './ContactFilter.css'

export class ContactFilter extends Component {

  state = {
    term: null
    // minBatteryStatus: '',
  }

  handleChange = ({ target }) => {
    // var field = target.id
    // var value = target.type === 'number' ? +target.value : target.value //this is for number inputs only
    var term = target.value
    this.setState({ term }, () => {
      this.props.onChangeFilter({term})
    })
  }

  render() {
    return (
      <form className="simple-form contact-filter">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={this.handleChange} />

        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" onChange={this.handleChange} />

        {/* <label htmlFor="minBatteryStatus">Min Battery</label>
        <input type="number" id="minBatteryStatus" onChange={this.handleChange} /> */}
      </form>
    )
  }
}
