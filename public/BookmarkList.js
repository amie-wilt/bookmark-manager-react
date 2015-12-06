import React from 'react';
import Bookmark from './Bookmark.js';
import data from './data.js';

export default class BookmarkList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookmarkList: this.props.bookmarkList
        }
    }

    render() {
        let bookmarks = this.state.bookmarkList.map((bookmark, i) =>
            <Bookmark bookmark={bookmark} key={i}/>
        );

        return (
            <div>
                {bookmarks}
            </div>
        )
    }
}