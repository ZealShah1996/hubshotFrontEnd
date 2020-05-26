import React, { Component } from 'react';


export default class UlList extends Component {
  constructor(props){
    super(props);
    this.state={};
  }
  render() {
    var {Class,Style,...others}=this.props;
    return (
      <div className={{Class}} style={{Style}} {...others}>
      </div>
    );
  }
};
