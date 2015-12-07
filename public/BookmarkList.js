import React from 'react';
import Bookmark from './Bookmark.js';

export default class BookmarkList extends React.Component {
    render() {
        let bookmarks = this.props.bookmarkList.map((bookmark, i) =>
            <li><Bookmark bookmark={bookmark} key={i}/></li>
        );

        return (
            <div>
                <h2>Your Bookmarks</h2>
                <ul>
                    {bookmarks}
                </ul>
            </div>
        )
    }
}