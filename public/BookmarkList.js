import React from 'react';
import Bookmark from './Bookmark.js';
import data from './data.js';

export default class BookmarkList extends React.Component {
    render() {
        return (
            <Bookmark data={data} />
        )
    }
}