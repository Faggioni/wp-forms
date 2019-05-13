<?php
require_once('HQWebsiteTrialForm/HQWebsiteTrialForm.php');
require_once('HQWebsitePricingCalculator/HQWebsitePricingCalculatorShortcode.php');
function hq_website_assets()
{
    wp_register_script('hq-trial-form-js', plugin_dir_url(__FILE__) . 'HQWebsiteTrialForm/HQWebsiteTrialForm.js', array(), '0.4.8', true);
    wp_register_script('hq-calculator-shortcode-js', plugin_dir_url(__FILE__) . 'HQWebsitePricingCalculator/HQWebsitePricingCalculator.js', array(), '0.0.1', true);
    wp_register_script( 'hq-trial-form-support-shortcode-js', plugin_dir_url(__FILE__) . 'HQWebsiteTrialFormSupport/HQWebsiteTrialFormSupport.js', array(), '0.0.1', true);
}
add_action('wp_enqueue_scripts', 'hq_website_assets');


$trialForm = new HQWebsiteTrialForm();
$calculator = new HQWebsitePricingCalculatorShortcode();

