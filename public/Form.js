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

    handleSubmit(e) {
        e.preventDefault();

        this.props.action({
            title: this.state.title,
            url: this.state.url
        });

        this.setState({
            title: "",
            url: ""
        });
    }

    render() {
        return (
            <div>
                <h2>Add a Bookmark!</h2>
                <form action="" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text"
                           onChange={this.handleTitleChange.bind(this)}
                           value={this.state.title}/>
                    <input type="text"
                           onChange={this.handleUrlChange.bind(this)}
                           value={this.state.url}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}