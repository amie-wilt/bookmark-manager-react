import React from 'react';

export default class Bookmark extends React.Component {
    render() {
        return (
            <div>
                <a href={this.props.bookmark.url}>
                    <h2>{this.props.bookmark.title}</h2>
                </a>
            </div>
        )
    }
}