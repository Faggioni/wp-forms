import React, { Component } from 'react';

class CheckboxField extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="elementor-field-type-acceptance elementor-field-group elementor-column elementor-field-group-field_1 elementor-col-100 elementor-field-required">
                <label htmlFor="form-field-field_1" className="elementor-field-label elementor-screen-only">{this.props.label}</label>
                <div className="elementor-field-subgroup">
                    <span className="elementor-field-option">
                        <input type="checkbox" checked={this.props.checked} onChange={this.props.onChange} name={this.props.fieldName} className="elementor-field elementor-size-xs elementor-acceptance-field" required="required" aria-required="true" value={this.props.value} />
                        <label htmlFor="form-field-field_1">
                            <span className="terms-text-form">I accept the <a href={this.props.link} target="_blank">{this.props.linkText}</a>.</span>
                        </label>
                    </span>
                </div>
            </div>
        );
    }
}
export default CheckboxField;