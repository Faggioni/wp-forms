<?php
require_once('HQWebsiteTrialForm/HQWebsiteTrialForm.php');
function hq_website_assets()
{
    wp_register_script('hq-trial-form-js', plugin_dir_url(__FILE__) . 'HQWebsiteTrialForm/HQWebsiteTrialForm.js', array(), '0.0.6', true);
}
add_action('wp_enqueue_scripts', 'hq_website_assets');


$trialForm = new HQWebsiteTrialForm();

