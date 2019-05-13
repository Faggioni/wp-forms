import React, { Component } from 'react';

class CheckboxField extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="elementor-field-type-acceptance elementor-field-group elementor-column elementor-field-group-field_1 elementor-col-100 elementor-field-required hq-checkboxes-wrapper">
                <label htmlFor={this.props.id} className="elementor-field-label elementor-screen-only">{this.props.label}</label>
                <div className="elementor-field-subgroup">
                    <span className="elementor-field-option">
                        <input id={this.props.id} type="checkbox" checked={this.props.checked} onChange={this.props.onChange} name={this.props.fieldName} className="elementor-field elementor-size-xs elementor-acceptance-field" required="required" aria-required="true" value={this.props.value} />
                        <label htmlFor={this.props.id}>
                            <span className="terms-text-form">{this.props.preAnchorText}<a href={this.props.anchorHref} target="_blank">{this.props.anchorText}</a>{this.props.postAnchorText}</span>
                        </label>
                    </span>
                </div>
            </div>
        );
    }
}
export default CheckboxField;