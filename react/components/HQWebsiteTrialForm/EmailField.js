import React,{ Component } from 'react';

class EmailField extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-100 elementor-field-required">
                <label htmlFor="form-field-email" className="elementor-field-label elementor-screen-only">{ this.props.label }</label>
                <input value={this.props.value} onChange={this.props.onChange} size="1" type="email" name={this.props.fieldName} className="elementor-field elementor-size-xs  elementor-field-textual" placeholder={this.props.placeholder} required="required" aria-required="true" />
            </div>
        );
    }

}
export default EmailField;