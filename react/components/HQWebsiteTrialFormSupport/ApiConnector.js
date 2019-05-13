import axios from 'axios';


class ApiConnector {
    getCaptcha(successCallback, failedCallback){
        axios(this.getCaptchaConfig()).then( (response) => {
            successCallback(response);
        } ).catch( (error) => {
            failedCallback(error);
        } );
    }
    submitForm(formAction, data, successCallback, failedCallback){
        let dataToCall = data;
        dataToCall['g-recaptcha-response'] = data.g_recaptcha_response;
        delete dataToCall.g_recaptcha_response;
        axios(this.getConfig(formAction, dataToCall)).then( (response) => {
            successCallback(response);
        } ).catch( (error) => {
            failedCallback(error);
        } );
    }
    getConfig(formAction, formData){
        //Header is to avoid option request
        return {
            method: "post",
            url: formAction,
            data: formData
        }
    }
    getCaptchaConfig(){
        return {
            method: 'get',
            url: 'https://caag.caagcrm.com/public/caag/trial-accounts/setup/captcha'
        }
    }
}
export default ApiConnector;