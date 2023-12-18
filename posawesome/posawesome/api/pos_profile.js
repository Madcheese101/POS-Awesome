// Copyright (c) 20201 Youssef Restom and contributors
// For license information, please see license.txt

frappe.ui.form.on('POS Profile', {
    setup: function (frm) {
        frm.set_query("posa_cash_mode_of_payment", function (doc) {
            return {
                filters: { 'type': 'Cash' }
            };
        });
    },
    onload: function(frm){
        frappe.call({
            method: 'posawesome.posawesome.api.pos_profile.get_payment_series_options',
        }).then(r=>{
            frm.set_df_property("posa_receive_payment_entry_series", "options", r.message);
            frm.set_df_property("posa_pay_payment_entry_series", "options", r.message);
        });
        frappe.call({
            method: 'posawesome.posawesome.api.pos_profile.get_sales_series_options',
        }).then(r=>{
            frm.set_df_property("posa_return_naming_series", "options", r.message);
        });
	}
});