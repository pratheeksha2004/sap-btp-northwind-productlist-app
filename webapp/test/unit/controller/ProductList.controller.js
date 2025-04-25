/*global QUnit*/

sap.ui.define([
	"com/northwind/products/productlist/controller/ProductList.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ProductList Controller");

	QUnit.test("I should test the ProductList controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
