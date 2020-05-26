import React, { Component } from 'react';
import nullCheck from './../utility/nullCheck';


export default class Link extends Component {
  constructor(props){
    super(props);
    this.state={};
  }
  render() {
    var {Class,Style,HrefInfo,...others}=this.props;
    return (
      <a className={{Class}} href={nullCheck(HrefInfo.href)} style={{Style}} {...others}>
        {nullCheck(HrefInfo.text)}
      </a>
    );
  }
};
