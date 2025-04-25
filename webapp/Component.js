sap.ui.define([
    "sap/ui/core/UIComponent",
    "com/northwind/products/productlist/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("com.northwind.products.productlist.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // Call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // Set the device model
            this.setModel(models.createDeviceModel(), "device");

            // Create and set the OData model
            const oODataModel = models.createODataModel();
            this.setModel(oODataModel);  // Default model

            // Enable routing
            this.getRouter().initialize();
        }
    });
});
