import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NewestRelease extends Component {
    
    newRelase = this.props.globalStore;
    
    render() {
        return (
            <div>
                <h2>Title: {this.newRelase.title}</h2>
                <p><b>Description</b> {this.newRelase.description}</p>
                <Link className='publication-link'>{this.newRelase.link}</Link>
            </div>
        )
    }
}
