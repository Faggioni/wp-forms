<?php


class HQWebsitePricingCalculatorShortcode{

    public function __construct()
    {
        add_shortcode("hq-website-rate-calculator", array($this, 'hqWebsitePricingCalculator'));
    }
    public function hqWebsitePricingCalculator()
    {
        wp_enqueue_script('hq-calculator-shortcode-js');
        ?>
        <div id="hq-calculator-app"></div>
        <style>
            .hq-calculator-wrapper{
                border-style: solid;
                border-width: 1px 1px 1px 1px;
                border-color: rgba(122,126,151,0.27);
                box-shadow: 0px 5px 20px 0px rgba(33,53,89,0.14);
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
                margin: 10px 10px 10px 50px;
                padding: 30px 80px 30px 80px;
                border-radius: 10px 10px 10px 10px;
                background-color: #fff;
            }
            .hq-calculator-inner-wrappper{
                display: flex;
                position: relative;
                width: 100%;
            }
            .hq-text-wrapper{
                margin-bottom: 20px;
                color: rgba(122,126,151,0.59);
                font-family: "Avenir Next LT Pro", Sans-serif;
                font-size: 14px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 2px;
                text-align: center;
            }
            .hq-text-inner-container{
                margin: 30px 0px -25px 0px;
            }
            .hq-text-inner-container p{
                text-align: center;
                color: rgba(122,126,151,0.59);
                font-family: "Avenir Next LT Pro", Sans-serif;
                font-size: 14px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 2px;
            }
            .hq-header2-text{
                font-family: "Avenir Next LT Pro", Sans-serif;
                font-size: 24px;
                font-weight: 600;
            }
            .hq-header-wrapper{
                margin-bottom: 20px;
            }
            .hq-header2-inner-wrapper:not(:last-child){
                margin-bottom: 1.6em;
            }
            .hq-bottom-text-wrapper{
                display: flex;
                flex: 1;
                flex-direction: row;
                justify-content: space-around;
            }
            .number-choose{
                color: #ffc613 !important;
            }
            .number-choose-main{
                color: #ffc613 !important;
                text-decoration: underline;
            }
            .hq-rental-pricing-input{
                width: 100px;
                padding: 0px !important;
                font-family: "Avenir Next LT Pro", Sans-serif;
                font-size: 24px;
                font-weight: 600;
                background-color: #fff;
                border: none !important;
                background: #fff !important;
                color:#ffc613 !important;
                text-align: center;
            }
            .hq-rental-pricing-input:focus{
                border: none !important;
                border-color: #fff !important;
            }
        </style>
        <?php
    }

}