import React from 'react';

export default class Bookmark extends React.Component {
    render() {
        let bookmarks = this.props.data.map((bookmark) => {
            return (
                <div>
                    <a href={bookmark.url}>
                        <h2>{bookmark.title}</h2>
                    </a>
                </div>
            )
        });

        return (
            <div>
                {bookmarks}
            </div>
        )
    }
}