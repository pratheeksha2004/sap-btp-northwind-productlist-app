sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
    "use strict";

   
    return Controller.extend("com.northwind.products.productlist.controller.ProductList", {

        _bFilterApplied: false, 

        onInit: function () {
           
        },

        onFilterPress: function () {
            var oList = this.byId("list");
            var oBinding = oList.getBinding("items");
            var oFilterButton = this.byId("filterButton");

            if (this._bFilterApplied) {
                // Clear the filter
                oBinding.filter([]); 
                this._bFilterApplied = false;
                oFilterButton.setText("Filter for 'Beverages'");
            } else {
                
                var oFilter = new Filter("CategoryID", FilterOperator.EQ, 1);
                oBinding.filter(oFilter); // Apply the filter
                this._bFilterApplied = true;
                oFilterButton.setText("Clear Filter");
            }
        }
    });
});