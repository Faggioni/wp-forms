

class Validator {
    constructor(){
        this.errors = {
            message: '',
            failed: false
        }
    }
    formSubmit(formData, terms, privacy, successCallback, failedCallback){
        if(this.emailFieldValidationFailed(formData.email_address)){
            failedCallback(this.emailFieldValidationFailed(formData.email_address));
        }else if(this.textFieldValidationFailed(formData.company)){
            failedCallback(this.textFieldValidationFailed(formData.company, "Company field is required"));
        }else if(!terms){
            //alert('Please agree to our terms and conditions');
        }else if(!privacy){
            //alert('Please agree to our privacy policy');
        }else{
            successCallback(true);
        }
    }
    emailFieldValidationFailed(fieldValue){
        if(this.isEmpty(fieldValue)){
            return {
                message: 'Email field is required',
                failed: true,
                errorType: 0
            }
        }else if(this.isNotEmail(fieldValue)){
            return {
                message: 'Please enter a valid email address',
                failed: true,
                errorType: 1
            }
        }else{
            return null;
        }
    }
    textFieldValidationFailed(fieldValue, message = null){
        if(this.isEmpty(fieldValue)){
            return {
                message: message,
                failed: true
            }
        }else{
            return null;
        }
    }
    phoneValidationFailed(fieldValue){
        if(this.isEmpty(fieldValue)){
            return {
                message: 'Phone Number field is required',
                failed: true
            }
        }else{
            return null;
        }
    }
    isEmpty(field){
        return field === '';
    }
    isNotEmail(field){
        let re = RegExp(`^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$`);
        return ! re.test(field);
    }
    isNotPhoneNumber(field){
        let re = RegExp(`/(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\\s*[)]?[-\\s\\.]?[(]?[0-9]{1,3}[)]?([-\\s\\.]?[0-9]{3})([-\\s\\.]?[0-9]{3,4})/g`);
        return ! re.test(field);
    }
}
export default Validator;