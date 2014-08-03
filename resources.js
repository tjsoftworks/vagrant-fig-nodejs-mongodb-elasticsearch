var _s = require('underscore.string');
var _ = require('lodash');
var uuid = require('node-uuid');

module.exports = function (fortune_app, mongoose) {

    fortune_app.resource('region', {
        code: String,
        description: String
    });

    fortune_app.resource('country', {
        code: String,
        description: String,
        region: {ref: 'region', inverse: 'region'}
    });

    fortune_app.resource('product_type', {
        code: String,
        description: String
    });

    fortune_app.resource('contract_type', {
        code: String,
        description: String
    });

    fortune_app.resource('state_province', {
        code: String,
        description: String,
        country: {ref: 'country', inverse: 'country'}
    });

    fortune_app.resource('contract', {
        code: String,
        description: String,
        brand: {ref: 'brand', inverse: 'brand'},
        product_type: {ref: 'product_type', inverse: 'product_type'},
        contract_type: {ref: 'contract_type', inverse: 'contract_type'}
    });

    fortune_app.resource('phone_numbers', {
        parts_area: String,
        parts_number: String,
        warranty_area: String,
        warranty_number: String
    });

/*    fortune_app.resource('business_hours', {
        mon_open: String,
        mon_close: String,
        tue_open: String,
        tue_close: String,
        wed_open: String,
        wed_close: String,
        thu_open: String,
        thu_close: String,
        fri_open: String,
        fri_close: String,
        sat_open: String,
        sat_close: String,
        sun_open: String,
        sun_close: String
    });*/

    fortune_app.resource('dealer', {
        code: String,
        name: String,
        address1: String,
        address2: String,
        address_country : {ref: 'country', inverse: 'address_country'},
        address_state_province : {ref: 'state_province', inverse: 'address_state_province'},
        city: String,
        zip: String,
        phone_area: String,
        phone_number: String,
        parent: {ref: 'dealer', inverse: 'parent'},
        bill_to: {ref: 'dealer', inverse: 'bill_to'},
        ship_to: {ref: 'dealer', inverse: 'ship_to'},
        current_contracts: [{ref: 'contract', inverse: 'current_contracts'}],
        phone_numbers: [{ref: 'phone_number', inverse: 'phone_numbers'}]/*,
        business_hours: {ref: 'business_hours', inverse: 'business_hours'},
        dealer_misc:{ref: 'dealer_misc', inverse: 'dealer_misc'},
        current_lines_of_business: [{ref: 'line_of_business', inverse: 'current_lines_of_business'}],
        service_level: {ref: 'service_level', inverse: 'service_level'},
        current_offerings: [{ref: 'offering', inverse: 'current_offerings'}]*/
    });

};


