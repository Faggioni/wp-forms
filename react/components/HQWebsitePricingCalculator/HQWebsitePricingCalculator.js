import React, { Component } from 'react';

class HQWebsitePricingCalculator extends Component{
    constructor(props){
        super(props);
        this.state = {
            numberOfCars: '',
            monthlyRate: 0,
            yearlyRate: 0
        }
    }
    onChangeVehicleInput(newCarValue){
        let monthlyPrice = 0;
        // Validation for Calculations
        if(newCarValue.target.value === ''){
            this.setState({ numberOfCars: 0, monthlyRate: 0, yearlyRate: 0 } );
        }else{
            let newInput = parseInt(newCarValue.target.value);
            if(newInput > 10000){
                newInput = 10000;
            }
            if(newInput< 0){
                newInput = 0;
            }
            if( 200 <= newInput && newInput <= 499 ){
                monthlyPrice = ( newInput - 200 ) * 1.00 + (200 * 1.50) ;
            }
            if( 500 <= newInput && newInput <= 999 ){
                monthlyPrice =  + ((newInput - 500) * 0.75 ) + (200 * 1.50) + (300 * 1.00);
            }
            if( 1000 <= newInput && newInput <= 2499 ){
                monthlyPrice = ((newInput - 1000) * 0.50) + (500 * 0.75) + (300 * 1.00) +(200 * 1.50);
            }
            if( 2500 <= newInput && newInput <= 10000 ){
                monthlyPrice = ((newInput - 2500) * 0.25) + (1500 * 0.75) + (300 * 1.00) +(200 * 1.50);
            }
            let yearlyPrice = monthlyPrice * 10;
            this.setState({ numberOfCars: newInput, monthlyRate: monthlyPrice, yearlyRate: yearlyPrice } );
        }

    }
    render(){
        return(
            <div className="elementor-column-wrap  elementor-element-populated hq-calculator-wrapper">
                <div className="elementor-widget-wrap hq-calculator-inner-wrappper">
                    <div className="elementor-element elementor-widget elementor-widget-text-editor hq-text-wrapper">
                        <div className="elementor-widget-container hq-text-inner-container">
                            <div className="elementor-text-editor elementor-clearfix"><p>type the # of vehicles</p>
                            </div>
                        </div>
                    </div>
                    <div className="elementor-element elementor-widget elementor-widget-text-editor hq-header2-text hq-header-wrapper">
                        <div className="elementor-widget-container hq-header2-inner-wrapper">
                            <div className="elementor-text-editor elementor-clearfix"><p>I have a fleet with <span
                                className="number-choose-main"><input type="text" placeholder="#" onChange={this.onChangeVehicleInput.bind(this)} value={this.state.numberOfCars} className="hq-rental-pricing-input anim-typewriter" /></span> vehicles</p></div>
                        </div>
                    </div>
                    <div className="elementor-element elementor-element-9629da3 elementor-widget elementor-widget-text-editor">
                        <div className="elementor-widget-container hq-text-wrapper">
                            <div className="elementor-text-editor elementor-clearfix"><p>license cost</p></div>
                        </div>
                    </div>
                    <div className="elementor-element elementor-widget__width-initial elementor-widget elementor-widget-text-editor hq-header2-text hq-header-wrapper">
                        <div className="elementor-widget-container hq-header2-inner-wrapper">
                            <div className="elementor-text-editor elementor-clearfix hq-bottom-text-wrapper">
                                <div><span className="number-choose">${ this.state.monthlyRate }</span> / month</div>
                                <div className="elementor-text-editor elementor-clearfix"><p>or</p></div>
                                <div><span className="number-choose">${ this.state.yearlyRate }</span> / year</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default HQWebsitePricingCalculator;