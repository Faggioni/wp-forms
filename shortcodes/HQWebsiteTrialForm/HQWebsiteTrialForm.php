<?php

class HQWebsiteTrialForm
{
    public function __construct()
    {
        add_shortcode("hq-website-trial-form", array($this, 'hqWebsiteTrialForm'));
    }
    public function hqWebsiteTrialForm()
    {
        wp_enqueue_script('hq-trial-form-js');
        ?>
        <div id="hq-app"></div>
        <?php
    }
}