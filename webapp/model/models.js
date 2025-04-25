sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device",
    "sap/ui/model/odata/v2/ODataModel" // Include ODataModel
], function (JSONModel, Device, ODataModel) {
    "use strict";

    return {
        /**
         * Provides runtime information for the device the UI5 app is running on as a JSONModel.
         * @returns {sap.ui.model.json.JSONModel} The device model.
         */
        createDeviceModel: function () {
            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        },
        
        /**
         * Creates and returns an ODataModel instance for accessing the Northwind service.
         * @returns {sap.ui.model.odata.v2.ODataModel} The ODataModel.
         */
        createODataModel: function () {
            var sServiceUrl = "/V2/Northwind/Northwind.svc/";  // URL for OData service
            var oModel = new ODataModel(sServiceUrl, {
                json: true,
                loadMetadataAsync: true
            });
            return oModel;
        }
    };
});
