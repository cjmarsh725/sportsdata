import React, { Component } from 'react';
import '../css/TopLevelNav.css'

export default class TopLevelNav extends Component {
  state = {
    currentSport: 'NBA'
  }
  render() {
    return (
      <div>
        <div className="top-level-header">
          <div className="header-logo">SportsData</div>
          <div className="header-nav">
          
          </div>
          <div className="header-sport">
            <p>{this.state.currentSport}</p>
          </div>
        </div>
      </div>
    )
  }
}