import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NewestRelease extends Component {
    
    newRelaseAsJson = this.props.globalStore;
    //newRelaseAsJson = JSON.parse(this.newRelase)
    
    render() {
        return (
            <div>
                <h2>Title: {this.newRelaseAsJson['title']}</h2>
                <p><b>Description</b> {this.newRelaseAsJson.description}</p>
                <Link className='publication-link'>{this.newRelaseAsJson.link}</Link>
            </div>
        )
    }
}
