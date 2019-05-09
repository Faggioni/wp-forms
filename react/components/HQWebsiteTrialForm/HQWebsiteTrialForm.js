import React, {Component} from 'react';
import Recaptcha from "react-recaptcha";
import tippy from 'tippy.js'
/*
 * Fields
 */
import EmailField from './EmailField';
import TextField from './TextField';
import TextFieldRequired from './TextFieldRequired';
import PhoneField from './PhoneField';
import CheckboxField from './CheckboxField';
import SelectField from './SelectField';
import SubmitButton from './SubmitButton';

/**
 * Helpers
 */
import ApiConnector from './ApiConnector';
import Validator from './Validator';


class HQWebsiteTrialForm extends Component {
    constructor(props) {
        super(props);
        this.connector = new ApiConnector();
        this.validator = new Validator();
        this.hqKey = '6LfB7RwUAAAAACBpYqkwYZ4GkfP3DTiqa2gsZW2k';
        this.devKey = '6LdUE54UAAAAAEQMg07RZ-3Bl6sjFYUwwi8OCeoW';
        this.companyTippy = '';
        this.emailTippy = '';
        this.state = {
            formAction: 'https://caag.caagcrm.com/public/caag/trial-accounts/setup',
            form: {
                business_sector_id: '1',
                email_address: '',
                company: '',
                phone_number: '',
                website: '',
                g_recaptcha_response: ''
            },
            checkedPrivacy: false,
            checkedTerms: false,
            captchaLoad: false
        }
    }

    componentDidMount() {
        let emailField = document.getElementById('form-field-hq_home_email');
        let businessSector = document.getElementById('form-field-hq_business_sector');
        if (emailField) {
            if(emailField.value !== ''){
                if(businessSector){
                    this.setState({form: {...this.state.form, email_address: emailField.value, business_sector_id: businessSector.value }});
                }else{
                    this.setState({form: {...this.state.form, email_address: emailField.value}});
                }
            }
        }
        let emailFieldBottom = document.getElementById('form-field-hq_home_email_bottom');
        let businessSectorBottom = document.getElementById('form-field-hq_business_sector_bottom');
        if(emailFieldBottom){
            if(emailFieldBottom.value !== ''){
                if(businessSectorBottom){
                    console.log('5', emailFieldBottom.value, businessSector);
                    this.setState({form: {...this.state.form, email_address: emailFieldBottom.value, business_sector_id: businessSectorBottom.value }});
                }else{
                    console.log('6', emailFieldBottom.value);
                    this.setState({form: {...this.state.form, email_address: emailFieldBottom.value}});
                }
            }
        }
    }
    onChangeEmail(newEmailValue) {
        this.setState({form: {...this.state.form, email_address: newEmailValue.target.value}});
    }

    onChangeCompany(newCompanyValue) {
        this.setState({form: {...this.state.form, company: newCompanyValue.target.value}});
    }

    onChangeBusinessSector(newValue) {
        this.setState({form: {...this.state.form, business_sector_id: newValue.target.value}});
    }

    onChangePhone(newPhoneValue) {
        this.setState({form: {...this.state.form, phone_number: newPhoneValue.target.value}});
    }

    onChangeWebsite(newWebsiteValue) {
        this.setState({form: {...this.state.form, website: newWebsiteValue.target.value}});
    }

    onVerifyCaptcha(newValue) {
        this.setState({form: {...this.state.form, g_recaptcha_response: newValue}});
    }

    onChangeTerms() {
        this.setState({checkedTerms: !this.state.checkedTerms});
    }

    onChangePrivacy() {
        this.setState({checkedPrivacy: !this.state.checkedPrivacy});
    }

    onSubmitForm(event) {
        event.preventDefault();
        this.validator.formSubmit(
            this.state.form,
            this.state.checkedTerms,
            this.state.checkedPrivacy,
            ( ) => {
                this.connector.submitForm(
                    this.state.formAction,
                    this.state.form,
                    (response) => {
                        window.location.href = response.data.link;
                    },
                    (error) => {
                        if (error.response) {
                            // The request was made and the server responded with a status code
                            // that falls out of the range of 2xx
                            //console.log('no 200', error.response);
                            alert(error.response.data.errors.all_errors[0]);
                        } else if (error.request) {
                            // The request was made but no response was received
                            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                            // http.ClientRequest in node.js
                            alert("There was an issues with your request. Please try again.");
                        } else {
                            // Something happened in setting up the request that triggered an Error
                            alert("There was an issues internally with your request. Please try again.");
                        }
                    });
            },
            (errors) => {
                //Forms Errors
                alert(errors.message);
            }
        );
    }

    render() {
        return (
            <div
                className="elementor-element elementor-element-30425b9 mainform elementor-button-align-end elementor-widget elementor-widget-form">
                <div className="elementor-widget-container">
                    <form id="hq-trial-form" className="elementor-form" method="post"
                          action={this.state.formAction}>
                        <div className="elementor-form-fields-wrapper elementor-labels-">
                            <EmailField
                                label="Email *"
                                for="email"
                                placeholder="Your Email *"
                                value={this.state.form.email_address}
                                onChange={this.onChangeEmail.bind(this)}
                                fieldName="email_address"
                                required
                            />
                            <TextFieldRequired
                                label="Company *"
                                placeholder="Your Company *"
                                for="company"
                                value={this.state.form.company}
                                onChange={this.onChangeCompany.bind(this)}
                                fieldName="company"
                                required
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
                            <SelectField
                                value={this.state.form.business_sector_id}
                                onChange={this.onChangeBusinessSector.bind(this)}
                            />
                            <CheckboxField
                                label="Terms of Service"
                                linkText="Terms of Service"
                                link="/terms-of-service"
                                onChange={this.onChangeTerms.bind(this)}
                                checked={this.state.checkedTerms}
                                preAnchorText="I accept the "
                                anchorText="Terms of Service"
                                postAnchorText="."
                                anchorHref="/terms-of-service"
                                for="terms"
                                id="term"
                            />
                            <CheckboxField
                                label="Privacy Policy"
                                linkText="Privacy Policy"
                                link="/privacy-policy"
                                onChange={this.onChangePrivacy.bind(this)}
                                checked={this.state.checkedPrivacy}
                                preAnchorText="I accept the "
                                anchorText="Privacy Policy"
                                postAnchorText=" including the Cookies Policy."
                                anchorHref="/privacy-policy"
                                for="policy"
                                id="policy"
                            />
                            <div className="hq-captcha-wrapper">
                                <Recaptcha
                                    ref={ref => {
                                        this.captcha = ref;
                                    }}
                                    render="explicit"
                                    sitekey={this.hqKey}
                                    verifyCallback={this.onVerifyCaptcha.bind(this)}
                                />
                            </div>
                            <SubmitButton
                                onSubmit={this.onSubmitForm.bind(this)}
                                buttonText="Submit"
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default HQWebsiteTrialForm;