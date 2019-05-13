import React, { Component } from 'react';

class SubmitButton extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100">
                <button type="submit" className="elementor-button elementor-size-md" onClick={this.props.onSubmit}>
                    <span>
                        <span className="elementor-button-text">{this.props.buttonText}</span>
                    </span>
                </button>
            </div>
        );
    }
}
export default SubmitButton;