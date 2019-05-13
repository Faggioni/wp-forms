import React, {Component} from 'react';

class TextField extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-company elementor-col-100 elementor-field-required">
                <label htmlFor={this.props.for} className="elementor-field-label elementor-screen-only">{ this.props.label }</label>
                <input id={this.props.for} value={this.props.value} onChange={this.props.onChange} size="1" type="text" name={ this.props.fieldName } className="hq-inputs" placeholder={this.props.placeholder} aria-required="true" />
            </div>
        );
    }
}
export default TextField;