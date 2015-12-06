import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            url: ""
        }
    }

    handleTitleChange(e) {
        this.setState({
            title: e.target.value
        })
    }

    handleUrlChange(e) {
        this.setState({
            url: e.target.value
        })
    }

    render() {
        return (
            <form action="">
                <input type="text"
                       onChange={this.handleTitleChange.bind(this)}
                       value={this.state.title} />
                <input type="text"
                       onChange={this.handleUrlChange.bind(this)}
                       value={this.state.title} />
                <button type="submit" value="Submit"></button>
            </form>
        )
    }
}