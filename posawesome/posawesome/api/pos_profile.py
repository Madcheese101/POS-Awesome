import frappe
from frappe import _

@frappe.whitelist()
def get_payment_series_options():
    doc = frappe.get_meta('Payment Entry').get_field("naming_series").options
    return doc

@frappe.whitelist()
def get_sales_series_options():
    doc = frappe.get_meta('Sales Invoice').get_field("naming_series").options
    return doc