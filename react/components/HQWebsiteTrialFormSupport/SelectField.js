import React, { Component } from 'react';

class SelectField extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-field_5 elementor-col-100 elementor-field-required">
                <label htmlFor="form-field-field_5" className="elementor-field-label elementor-screen-only">{ this.props.label }</label>
                <div className="elementor-field elementor-select-wrapper ">
                    <select name="business_sector_id" placeholder="Your Business Sector" onChange={this.props.onChange} value={this.props.value} className="elementor-field-textual elementor-size-xs" required="required" aria-required="true">
                        <option value="1">America</option>
                        <option value="1">Europe</option>
                        <option value="1">Asia</option>
                    </select>
                </div>
            </div>
        );
    }
}
export default SelectField;