import React, { Component } from 'react';
import DropdownComponent from './dropdown-component'
import UlList from "./ulList";
import  ButtonLink  from './button-link';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var { Class, Style, dropdown, ...others } = this.props;
    let languagues = [];
    var dropdown = [];
    languagues.forEach(value => {
      dropdown.push({ name: value, href: "" });
    });
    let objects1 = [];
    objects1.push(<DropdownComponent dropdown={dropdown}></DropdownComponent>);
    objects1.push(<span>{"contacts"}</span>);

    let objects2 = [];
    objects2.push(<span>{"search"}</span>);
    objects2.push(<ButtonLink class="homepage-hero-convert cta--primary cta--large homepage-hero-cta" buttonInfo={{href:"https://www.hubspot.com/products/get-started", text:"Log In"}}/>
    );
    objects2.push(<ButtonLink class="homepage-hero-convert cta--primary cta--large homepage-hero-cta" buttonInfo={{href:"https://www.hubspot.com/products/get-started", text:"Get HubSpot free"}}/>
    );
   

    return (
      <div className={{ Class }} style={{ Style }} {...others}>
        
          <UlList data={objects1} />
          <UlList data={objects2} />
        
      </div>
    );
  }
};
