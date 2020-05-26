import React, { Component } from 'react';
import nullCheck from './../utility/nullCheck';
import Link from './Link';
import Select from 'react-select';


export default class DropdownComponent extends Component {
  constructor(props){
    super(props);
    this.state={};
  }
  render() {
    debugger;
    const options = [
      { value: 'chocolate', label: 'English' },
      { value: 'strawberry', label: 'Hindi' },
      { value: 'vanilla', label: 'French' },
    ];
    var {Class,Style,...others}=this.props;
    return (
      <div className={{Class}} style={{Style}} {...others}>
        {
          <Select options={options}  arrowClosed={<span className="arrow-closed" />}
          arrowOpen={<span className="arrow-open" />} onChange={this._onSelect} value={"one"} placeholder="Select an option"></Select>
        }
      </div>
    );
  }
};
