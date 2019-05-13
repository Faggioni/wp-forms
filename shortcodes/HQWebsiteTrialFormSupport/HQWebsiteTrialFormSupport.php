<?php


class HQWebsiteTrialFormSupport{

    public function __construct()
    {
        add_shortcode("hq-website-trial-form-support", array($this, 'hqWebsiteTrialFormSupport'));
    }
    public function hqWebsiteTrialFormSupport()
    {
        $user = geoip_detect2_get_info_from_current_ip();
        $continent = $user->continent->code;
        $action = 'https://caag.caagcrm.com/public/caag/trial-accounts/setup';
        if($continent == 'AF' or $continent == 'EU'){
            $action = 'https://caag-europe.hqrentals.eu/public/caag/trial-accounts/setup';
        }elseif($continent == 'AS' or $continent == 'OC' ){
            $action = 'https://caag-asia.hqrentals.asia/public/caag/trial-accounts/setup';
        }
        wp_enqueue_script('hq-trial-form-support-shortcode-js');
        ?>
        <script>
            var formAction = "<?php echo $action; ?>"
        </script>
        <div id="hq-trial-form-support-app"></div>
        <style>
            .terms-text-form{
                color:#808285 !important;
            }
        </style>
        <?php
    }

}