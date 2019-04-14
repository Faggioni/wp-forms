import React, { Component } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
/*
 * Fields
 */
import EmailField from './EmailField';
import TextField from './TextField';
import PhoneField from './PhoneField';
import CheckboxField from './CheckboxField';
import SubmitButton from './SubmitButton';
import Captcha from './Captcha';

/**
 * Helpers
 */
import ApiConnector from './ApiConnector';
import Validator from './Validator';

class HQWebsiteTrialForm extends Component{
    constructor(props){
        super(props);
        this.connector = new ApiConnector();
        this.validator = new Validator();
        this.state = {
            form:{
                email_address: '',
                company: '',
                phone_number: '',
                website: '',
            },
            checkedPrivacy: false,
            checkedTerms: false,
            captcha: ''
        }
    }
    componentWillMount(){
        this.connector.getCaptcha( (response) => {
            this.setState({ captcha: response.data });
        }, (error) => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
    }
    onChangeEmail(newEmailValue){
        this.setState({ form: { ...this.state.form, email_address: newEmailValue.target.value } });
    }
    onChangeCompany(newCompanyValue){
        this.setState({ form: { ...this.state.form, company: newCompanyValue.target.value } });
    }
    onChangePhone(newPhoneValue){
        this.setState({ form: { ...this.state.form, phone_number: newPhoneValue.target.value } });
    }
    onChangeWebsite(newWebsiteValue){
        this.setState({ form: { ...this.state.form, website: newWebsiteValue.target.value } });
    }
    onChangeTerms(){
        this.setState({checkedTerms: ! this.state.checkedTerms});
    }
    onChangePrivacy(){
        this.setState({checkedPrivacy: ! this.state.checkedPrivacy});
    }
    onChangeCaptcha(newValue){
        console.log(newValue);
    }
    onSubmitForm(event) {
        event.preventDefault();
        this.validator.formSubmit(
            (this.state.form),
            (success) => {
                this.connector.submitForm(this.state.form,
                    (response) => {
                        console.log(response);
                    },
                    (error) => {
                        if (error.response) {
                            // The request was made and the server responded with a status code
                            // that falls out of the range of 2xx
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                        } else if (error.request) {
                            // The request was made but no response was received
                            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                            // http.ClientRequest in node.js
                            console.log(error.request);
                        } else {
                            // Something happened in setting up the request that triggered an Error
                            console.log('Error', error.message);
                        }
                        console.log(error.config);
                    });
            },
            (errors) => {
                //Forms Errors
                console.log('errors',errors);
            }
        );
    }
    render(){
        return(
            <div>
                <div className="elementor-element elementor-element-30425b9 mainform elementor-button-align-end elementor-widget elementor-widget-form">
                    <div className="elementor-widget-container">
                        <form className="elementor-form" method="post" action="https://caag.caagcrm.com/public/caag/trial-accounts/setup">
                            <div className="elementor-form-fields-wrapper elementor-labels-">
                                <EmailField
                                    label="Email"
                                    for="email"
                                    placeholder="Your Email"
                                    value={this.state.form.email_address}
                                    onChange={this.onChangeEmail.bind(this)}
                                    fieldName="email_address"
                                />
                                <TextField
                                    label="Company"
                                    placeholder="Your Company"
                                    for="company"
                                    value={this.state.form.company}
                                    onChange={this.onChangeCompany.bind(this)}
                                    fieldName="company"
                                />
                                <PhoneField
                                    title="Only numbers and phone characters (#, -, *, etc) are accepted."
                                    label="Phone Number"
                                    for="phone"
                                    value={this.state.form.phone_number}
                                    onChange={this.onChangePhone.bind(this)}
                                    placeholder="Your Phone Number"
                                />
                                <TextField
                                    label="Website"
                                    placeholder="Your Website"
                                    for="website"
                                    value={this.state.form.website}
                                    onChange={this.onChangeWebsite.bind(this)}
                                />
                                <CheckboxField
                                    label="Terms of Service"
                                    linkText="Terms of Service"
                                    link="/terms-of-service"
                                    onChange={this.onChangeTerms.bind(this)}
                                    checked={this.state.checkedTerms}
                                    for="terms"
                                />
                                <CheckboxField
                                    label="Privacy Policy"
                                    linkText="Privacy Policy"
                                    link="/privacy-policy"
                                    onChange={this.onChangePrivacy.bind(this)}
                                    checked={this.state.checkedPrivacy}
                                    for="policy"
                                />
                                <div className="hq-captcha-wrapper">
                                    <ReCAPTCHA
                                        sitekey="6LfB7RwUAAAAACBpYqkwYZ4GkfP3DTiqa2gsZW2k"
                                        onChange={this.onChangeCaptcha.bind(this)}
                                    />
                                </div>
                                <input type="hidden" name="business_sector_id" value="1" />
                                <SubmitButton
                                    onSubmit={this.onSubmitForm.bind(this)}
                                    buttonText="Submit"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default HQWebsiteTrialForm;