import React from 'react';

export default class Bookmark extends React.Component {
    render() {
        return (
            <div>
                <p>
                    <a href={this.props.bookmark.url} target="_blank">{this.props.bookmark.title}</a>
                </p>
            </div>
        )
    }
}