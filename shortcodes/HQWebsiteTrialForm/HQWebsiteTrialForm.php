<?php

class HQWebsiteTrialForm
{
    public function __construct()
    {
        add_shortcode("hq-website-trial-form", array($this, 'hqWebsiteTrialForm'));
    }
    public function hqWebsiteTrialForm()
    {
        //wp_enqueue_script('hq-trial-form-js');
        //We ca not use the enqueue way because the way that the modal shows the form -> append to he end of the body tag
        ?>
        <div id="hq-app">
        </div>
        <script type='text/javascript' src='/wp-content/plugins/wp-forms/shortcodes/HQWebsiteTrialForm/HQWebsiteTrialForm.js?ver=0.2.2'></script>
        <?php
    }
}