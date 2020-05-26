import React, { Component } from 'react';


export default class UlList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var { Class, Style,data, ...others } = this.props;
    let values=[];
    data.forEach((value, index, array) => {
      values.push(<li>{value}</li>);
    });

    return (
      <div className={{ Class }} style={{ Style }} {...others}>
        {
          values
        }
      </div>
    );
  }
};
