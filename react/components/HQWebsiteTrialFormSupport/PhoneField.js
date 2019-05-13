import React, { Component } from 'react';

class PhoneField extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-field_2 elementor-col-100 elementor-field-required">
                <label htmlFor={this.props.for} className="elementor-field-label elementor-screen-only">Phone</label>
                <input id={this.props.for} value={this.props.value} onChange={this.props.onChange} size="1" type="tel" name={this.props.nameField} className="hq-inputs" placeholder={this.props.placeholder} aria-required="true" title={this.props.title} />
            </div>
        );
    }
}
export default PhoneField;