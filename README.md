# 📦 Product List Viewer

A **basic SAPUI5 freestyle app** generated using **SAP Business Application Studio** and **SAP Fiori Tools**.  
This app displays a list of products retrieved from the **Northwind OData Service**.

---

## 📄 Application Details

| Key | Value |
| :--- | :--- |
| **Generation Date and Time** | Fri Apr 25 2025 06:31:50 GMT+0000 (Coordinated Universal Time) |
| **App Generator** | [@sap/generator-fiori-freestyle](https://www.npmjs.com/package/@sap/generator-fiori-freestyle) |
| **App Generator Version** | 1.17.3 |
| **Generation Platform** | SAP Business Application Studio |
| **Template Used** | Basic |
| **Service Type** | OData URL |
| **Service URL** | [https://services.odata.org/V2/Northwind/Northwind.svc/](https://services.odata.org/V2/Northwind/Northwind.svc/) |
| **Module Name** | productlist |
| **Application Title** | Product List Viewer |
| **Namespace** | com.northwind.products |
| **UI5 Theme** | sap_horizon |
| **UI5 Version** | 1.135.0 |
| **Enable Code Assist Libraries** | False |
| **Enable TypeScript** | False |
| **Add Eslint configuration** | False |

---

## 🚀 How to Start the Application

### Start normally (Live OData)

From the project root directory, run:

## ✅ Pre-requisites

SAP Business Application Studio  (SAP Fiori Tools )

## 🏗️ Project Structure

productlist/
├── webapp/
│   ├── controller/    # Application Controllers (JS)
│   ├── view/          # Application Views (XML)
│   ├── model/         # OData Models and Mock Data
│   ├── i18n/          # Internationalization (i18n) Texts
│   ├── manifest.json  # Application Descriptor (Main Config File)
│   └── Component.js   # App Component (bootstrap logic)
├── package.json       # Project metadata and npm scripts
├── ui5.yaml           # UI5 Tooling configuration
└── .ui5/              # UI5 build-related files

## 🌐 Live OData Service
This app consumes data from the public Northwind OData V2 Service:
🔗 https://services.odata.org/V2/Northwind/Northwind.svc/

## 💡 Key Features
SAPUI5 Freestyle development

UI5 Horizon theme

Northwind Products list display

Supports both Live Data and Mock Data

Deployed-ready project for SAP BTP Cloud Foundry

📢 Notes
This app was generated using SAP Fiori Tools — it follows SAP's best practices.

Suitable for deployment on SAP Business Technology Platform (BTP) via Cloud Foundry runtime.
