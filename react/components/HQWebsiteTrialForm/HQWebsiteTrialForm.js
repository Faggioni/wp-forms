import React, { Component } from 'react';

/*
 * Fields
 */
import EmailField from './EmailField';
import TextField from './TextField';
import PhoneField from './PhoneField';
import CheckboxField from './CheckboxField';
import SubmitButton from './SubmitButton';
class HQWebsiteTrialForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            form:{
                email_address: '',
                company: '',
                phone_number: '',
                website: '',
            },
            checkedPrivacy: false,
            checkedTerms: false
        }
    }
    onChangeEmail(newEmailValue){
        this.setState({ form: { ...this.state.form, email_adress: newEmailValue } });
    }
    onChangeCompany(newCompanyValue){
        this.setState({ form: { ...this.state.form, company: newCompanyValue } });
    }
    onChangePhone(newPhoneValue){
        this.setState({ form: { ...this.state.form, phone_number: newPhoneValue } });
    }
    onChangeWebsite(newWebsiteValue){
        this.setState({ form: { ...this.state.form, company: newWebsiteValue } });
    }
    onChangeTerms(){
        this.setState({checkedTerms: ! this.state.checkedTerms});
    }
    onChangePrivacy(){
        this.setState({checkedPrivacy: ! this.state.checkedPrivacy});
    }
    onSubmitForm(){
        console.log('submit');
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
                                    placeholder="Your Email"
                                    value={this.state.form.email_address}
                                    onChange={this.onChangeEmail.bind(this)}
                                    fieldName="email_address"
                                />
                                <TextField
                                    label="Company"
                                    placeholder="Your Company"
                                    value={this.state.form.company}
                                    onChange={this.onChangeCompany.bind(this)}
                                    fieldName="company"
                                />
                                <PhoneField
                                    title="Only numbers and phone characters (#, -, *, etc) are accepted."
                                    label="Phone Number"
                                    value={this.state.form.phone_number}
                                    onChange={this.onChangePhone.bind(this)}
                                    placeholder="Your Phone Number"
                                />
                                <TextField
                                    label="Website"
                                    placeholder="Your Website"
                                    value={this.state.form.website}
                                    onChange={this.onChangeWebsite.bind(this)}
                                />
                                <CheckboxField
                                    label="Terms of Service"
                                    linkText="Terms of Service"
                                    link="/terms-of-service"
                                    onChange={this.onChangeTerms.bind(this)}
                                    checked={this.state.checkedTerms}
                                />
                                <CheckboxField
                                    label="Privacy Policy"
                                    linkText="Privacy Policy"
                                    link="/privacy-policy"
                                    onChange={this.onChangePrivacy.bind(this)}
                                    checked={this.state.checkedPrivacy}
                                />
                                <div className="hq-captcha-wrapper">
                                    {/*<?php echo $captcha; ?>*/}
                                </div>
                                <SubmitButton
                                    onSubmit={this.onSubmitForm.bind(this)}
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