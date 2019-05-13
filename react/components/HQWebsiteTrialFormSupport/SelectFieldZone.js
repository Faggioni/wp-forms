import React, { Component } from 'react';

class SelectFieldZone extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-field_5 elementor-col-100 elementor-field-required">
                <label htmlFor="form-field-field_5" className="elementor-field-label elementor-screen-only">Continent</label>
                <div className="elementor-field elementor-select-wrapper ">
                    <select name="business_sector_id" placeholder="Your Business Sector" onChange={this.props.onChange} value={this.props.value} className="elementor-field-textual elementor-size-xs" required="required" aria-required="true">
                        <option value="https://caag.caagcrm.com/public/caag/trial-accounts/setup">America</option>
                        <option value="https://caag-europe.hqrentals.eu/public/caag/trial-accounts/setup">Europe</option>
                        <option value="https://caag-asia.hqrentals.asia/public/caag/trial-accounts/setup">Asia</option>
                    </select>
                </div>
            </div>
        );
    }
}
export default SelectFieldZone;