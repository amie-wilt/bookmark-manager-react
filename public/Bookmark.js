import React from 'react';

export default class Bookmark extends React.Component {
    render() {
        return (
            <div>
                <h2>
                    <a href={this.props.bookmark.url}>{this.props.bookmark.title}</a>
                </h2>
            </div>
        )
    }
}