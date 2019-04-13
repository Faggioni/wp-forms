import React, { Component } from 'react';

class PhoneField extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-field_2 elementor-col-100 elementor-field-required">
                <label htmlFor="form-field-field_2" className="elementor-field-label elementor-screen-only">Phone</label>
                <input size="1" type="tel" name={this.props.nameField} className="elementor-field elementor-size-xs elementor-field-textual" placeholder={this.props.placeholder} required="required" aria-required="true" pattern="[0-9()#&amp;+*-=.]+" title={this.props.title} />
            </div>
        );
    }
}
export default PhoneField;