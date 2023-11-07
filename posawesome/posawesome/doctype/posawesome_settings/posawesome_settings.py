# Copyright (c) 2023, Youssef Restom and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document
import frappe
from frappe import _

class POSAwesomeSettings(Document):
	@frappe.whitelist()
	def get_options(self):
		doc = frappe.get_meta('Payment Entry').get_field("naming_series").options
		return doc


