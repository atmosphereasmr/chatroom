import React, {Component} from 'react'
import './chatbox.css'
import axios from 'axios'
import {connect} from 'react-redux'
import {chatTyping} from '../../reducers/reducer'

class Chatbox extends Component {

  constructor() {
    super()
    this.state = {
      messages: [],
    }
  }

  componentDidMount () {
    axios.get('http://localhost:3001/api/messages')
    .then(response => {
      this.setState({ messages: response.data })
    })
  }

  eventWriting(event) {
    this.setState({
      message: event
    }, () => {
      this.props.chatTyping(this.state.message)
    })
  }

  deleteHandler(id) {
    console.log('click')
    axios.delete(`http://localhost:3001/api/messages/${id}`)
    .then((response) => {
      this.setState({ messages: response.data.messages}, () => {

        axios.get('http://localhost:3001/api/messages')
        .then(response => {
          this.setState({ messages: response.data.messages })
        })

      })
    })
  }


    eventOnClick = () => {
      const {message} = this.state;

      axios.post('http://localhost:3001/api/messages', {
        message
      }).then((response) => {
        this.setState({ message: response.data}, () => {

          axios.get('http://localhost:3001/api/messages')
          .then(response => {
            this.setState({ messages: response.data })
          })

        })
      })
    }

  render() {
      return (
      <div>
        <div className="outerBox">
          <div className="messageWindow">
          {this.state.messages.map((message) => {
            return (
              <div key={message.id} className="textBox">
                MESSAGE: {message.message}
                <div className="delete" onClick={() => this.deleteHandler(message.id)}>
                  X
                </div>
              </div>
            )
          })}
            <div className="chatInput">
            <input placeholder="Type in text here." onChange={(event) => this.eventWriting(event.target.value)} />

            <button onClick={this.eventOnClick}>Send</button>

            </div>
          </div>
        </div>
      </div>
    )
  }

  }

  function MapStateToProps(state) {
    return{
      state
    }
  }

export default connect(MapStateToProps, {chatTyping})(Chatbox)
