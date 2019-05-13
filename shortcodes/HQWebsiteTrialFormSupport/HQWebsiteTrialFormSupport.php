<?php


class HQWebsiteTrialFormSupport{

    public function __construct()
    {
        add_shortcode("hq-website-trial-form-support", array($this, 'hqWebsiteTrialFormSupport'));
    }
    public function hqWebsiteTrialFormSupport()
    {

        //We ca not use the enqueue way because the way that the modal shows the form -> append to he end of the body tag
        //Africa -> AF
        //Europe -> EU

        //Asia -> AS
        //Oceania ->OC

        //Antarctica -> AN
        //South America -> SA
        //North America -> NA
        $user = geoip_detect2_get_info_from_current_ip();
        $continent = $user->continent->code;
        $action = 'https://caag.caagcrm.com/public/caag/trial-accounts/setup';
        if($continent == 'AF' or $continent == 'EU'){
            $action = 'https://caag-europe.hqrentals.eu/public/caag/trial-accounts/setup';
        }elseif($continent == 'AS' or $continent == 'OC' ){
            $action = 'https://caag-asia.hqrentals.asia/public/caag/trial-accounts/setup';
        }
        ?>
        <script>
            var formAction = "<?php echo $action; ?>"
        </script>
        wp_enqueue_script('hq-trial-form-support-shortcode-js');
        ?>
        <div id="hq-trial-form-support-app"></div>
        <?php
    }

}