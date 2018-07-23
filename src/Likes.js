import React, { Component } from 'react'

class Likes extends Component {
	constructor(props) {
		super(props)
		this.state = {
			likes: 0,
			word: 'likes'
		}
	}

	trueSpeech = () => {
    this.state.likes === 0 ? this.setState({
        word: "like"
      }) : this.setState({
        word: "likes"
      })

    this.setState({
      likes: this.state.likes + 1
    })
  }

	render() {
		return (
			<div id="button" onClick={this.trueSpeech}>
				{this.state.likes} {this.state.word}
			</div>
		)
	}
}

export default Likes
