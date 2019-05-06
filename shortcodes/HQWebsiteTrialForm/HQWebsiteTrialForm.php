<?php

class HQWebsiteTrialForm
{
    public function __construct()
    {
        add_shortcode("hq-website-trial-form", array($this, 'hqWebsiteTrialForm'));
    }
    public function hqWebsiteTrialForm()
    {
        //We ca not use the enqueue way because the way that the modal shows the form -> append to he end of the body tag
        ?>
        <div id="hq-app">
        </div>
        <script type='text/javascript' src='/wp-content/plugins/wp-forms/shortcodes/HQWebsiteTrialForm/HQWebsiteTrialForm.js?ver=0.2.5'></script>
        <style>
            .elementor-field-type-select{
                margin-bottom: 15px;
            }
            .form-field-field_5{
                font-family: "Avenir Next LT Pro", Sans-serif;
                font-size: 14px;
            }
            .elementor-field-type-select select{
                background-color: #ffffff;
                border-width: 0px 0px 0px 0px;
                border-radius: 5px 5px 5px 5px;
                color: inherit;
                font-size: inherit;
                font-family: inherit;
                font-weight: inherit;
                font-style: inherit;
                text-transform: inherit;
                letter-spacing: inherit;
                line-height: inherit;
                -webkit-flex-basis: 100%;
                -ms-flex-preferred-size: 100%;
                flex-basis: 100%;
                padding-right: 20px;
                min-height: 33px;
                padding: 4px 12px;
            }
        </style>
        <?php
    }
}