import React, { Component } from 'react';
import nullCheck  from './../utility/nullCheck';


export default class ButtonLink extends Component {
  constructor(props){
    super(props);
    this.state={};
  }
  render() {
    var {Class,Style,buttonInfo,...others}=this.props;
    debugger;
    return (
      <div className={{Class}} style={{Style}} {...others}>
        <button href={nullCheck(buttonInfo.href)}>{nullCheck(buttonInfo.text)}</button>
      </div>
    );
  }
};
