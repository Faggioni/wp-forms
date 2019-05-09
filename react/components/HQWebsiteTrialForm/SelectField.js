import React, { Component } from 'react';

class SelectField extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-field_5 elementor-col-100 elementor-field-required">
                <label htmlFor="form-field-field_5" className="elementor-field-label elementor-screen-only">Business Sector</label>
                <div className="elementor-field elementor-select-wrapper ">
                    <select name="business_sector_id" placeholder="Your Business Sector" onChange={this.props.onChange} value={this.props.value} className="elementor-field-textual elementor-size-xs" required="required" aria-required="true">
                        <option value="1">Car Rental</option>
                        <option value="9">Motorbike Rental</option>
                        <option value="11">Boats</option>
                        <option value="12">Equipment Rental</option>
                    </select>
                </div>
            </div>
        );
    }
}
export default SelectField;