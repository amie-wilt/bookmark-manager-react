import React from 'react';
import ReactDOM from 'react-dom';
import BookmarkList from './BookmarkList.js';

export default class App extends React.Component {
    render() {
        return (
            <BookmarkList />
        )
    }
}

ReactDOM.render(
    <App />, document.getElementById('app')
);