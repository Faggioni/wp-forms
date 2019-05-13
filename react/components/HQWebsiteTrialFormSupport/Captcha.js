import React, {Component} from 'react';

class Captcha extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="caag-captcha" data-callback="capcha_filled" data-expired-callback="capcha_expired">
                <script src="https://www.google.com/recaptcha/api.js?render=onload"></script>
                <div className="g-recaptcha" data-sitekey="6LfB7RwUAAAAACBpYqkwYZ4GkfP3DTiqa2gsZW2k">
                    <div style="width: 304px; height: 78px;">
                        <div>
                            <iframe src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LfB7RwUAAAAACBpYqkwYZ4GkfP3DTiqa2gsZW2k&amp;co=aHR0cHM6Ly9ocXJlbnRhbHNvZnR3YXJlLmNvbTo0NDM.&amp;hl=en&amp;v=v1554100419869&amp;size=normal&amp;cb=57ixun6zuf7t" width="304" height="78" role="presentation" name="a-pzbyxxk16iwb" frameBorder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
                        </div>
                        <textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea>
                    </div>
                </div>
                <noscript>
                    <div style="width: 302px; height: 352px;">
                        <div style="width: 302px; height: 352px; position: relative;">
                            <div style="width: 302px; height: 352px; position: absolute;">
                                <iframe src="https://www.google.com/recaptcha/api/fallback?k=6LfB7RwUAAAAACBpYqkwYZ4GkfP3DTiqa2gsZW2k"
                                    frameBorder="0" scrolling="no"
                                    style="width: 302px; height:352px; border-style: none;">
                                </iframe>
                            </div>
                            <div style="width: 250px; height: 80px; position: absolute; border-style: none; bottom: 21px; left: 25px; margin: 0; padding: 0; right: 25px;">
                                <textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style="width: 250px; height: 80px; border: 1px solid #c1c1c1; margin: 0; padding: 0; resize: none;"></textarea>
                            </div>
                        </div>
                    </div>
                </noscript>
            </div>
        );
    }
}
export default Captcha;