import React, { Component } from 'react';
import  ButtonLink  from './button-link';

export default class HeroComponent extends Component {
  constructor(props){
    super(props);
    this.state={};
  }
  render() {
    var {Class,Style,...others}=this.props;
    return (
      <div className={{Class}} style={{Style}} {...others}>
        <section class="homepage-hero">
          <div class="homepage-hero__content">
            <div class="homepage-hero__container hsg-page-width-normal">
              <div class="homepage-hero__text">
                <h1>There’s a better way to grow.</h1>
                <p>Marketing, sales, and service software that helps your business grow without compromise. Because “good for the business” should also mean “good for the customer.”</p>
                <div class="hsg-page-header__ctas">
                  <ButtonLink class="homepage-hero-convert cta--primary cta--large homepage-hero-cta" buttonInfo={{href:"https://www.hubspot.com/products/get-started", text:"Get HubSpot free"}}/>
                  <p class="hsg-microcopy">Get started with FREE tools, and upgrade as you grow.</p>
                </div>
              </div>
              <img class="homepage-hero__svg" alt="Garage Startup Enterprise Illustration" src="https://www.hubspot.com/hubfs/raw_assets/public/_Web%20Team%20Assets/Website/assets/svg/hero.svg" />
            </div>
          </div>
        </section>
      </div>
    );
  }
};
