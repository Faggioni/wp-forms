import axios from 'axios';


class ApiConnector {
    getCaptcha(successCallback, failedCallback){
        axios(this.getCaptchaConfig()).then( (response) => {
            successCallback(response);
        } ).catch( (error) => {
            failedCallback(error);
        } );
    }
    submitForm(data, successCallback, failedCallback){
        let dataToCall = data;
        dataToCall['g-recaptcha-response'] = data.g_recaptcha_response;
        axios(this.getConfig(dataToCall)).then( (response) => {
            successCallback(response);
        } ).catch( (error) => {
            failedCallback(error);
        } );
    }
    getConfig(formData){
        return {
            method: 'post',
            url: "https://caag.caagcrm.com/public/caag/trial-accounts/setup",
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