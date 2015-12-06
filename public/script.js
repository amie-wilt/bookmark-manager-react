import React from 'react';
import ReactDOM from 'react-dom';
import BookmarkList from './BookmarkList.js';
import Form from './Form.js';
import data from './data.js';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <BookmarkList bookmarkList={data} />
                <Form />
            </div>
        )
    }
}

ReactDOM.render(
    <App />, document.getElementById('app')
);