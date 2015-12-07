import React from 'react';
import Bookmark from './Bookmark.js';

export default class BookmarkList extends React.Component {
    render() {
        let bookmarks = this.props.bookmarkList.map((bookmark, i) =>
            <Bookmark bookmark={bookmark} key={i}/>
        );

        return (
            <div>
                {bookmarks}
            </div>
        )
    }
}