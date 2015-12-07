import React from 'react';
import ReactDOM from 'react-dom';
import BookmarkList from './BookmarkList.js';
import Form from './Form.js';
import data from './data.js';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookmarkList: []
        }
    }

    addBookmark(bookmark) {
        let newList = this.state.bookmarkList;
        newList.push(bookmark);
        this.setState({
            bookmarkList: newList
        })
    }

    componentDidMount() {
        this.setState({
            bookmarkList: this.props.bookmarkList
        })
    }

    render() {
        return (
            <div>
                <h1>Bookmark Manager</h1>
                <BookmarkList bookmarkList={this.state.bookmarkList} />
                <Form action={this.addBookmark.bind(this)} />
            </div>
        )
    }
}

ReactDOM.render(
    <App bookmarkList={data} />, document.getElementById('app')
);