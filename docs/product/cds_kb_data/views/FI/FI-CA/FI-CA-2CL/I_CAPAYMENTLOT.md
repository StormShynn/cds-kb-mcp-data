---
name: I_CAPAYMENTLOT
description: "This CDS view represents the header data of a payment lot in Contract Accounting. This CDS view provides the data to answer the following business questions: Which house bank and house bank account is assigned to the payment lot? What is the posting date and value date of the payment lot? Which company code does the payment lot belong to? What is the currency of the payment lot? Which bank clearing account is assigned to the payment lot? How many items are contained in the payment lot? Which bank statement is the payment lot associated with? Is the payment lot a cheque lot? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CAPAYMENTLOT')/$value
semantic_en: "This CDS view represents the header data of a payment lot in Contract Accounting. This CDS view provides the data to answer the following business questions: Which house bank and house bank account is assigned to the payment lot? What is the posting date and value date of the payment lot? Which company code does the payment lot belong to? What is the currency of the payment lot? Which bank clearing account is assigned to the payment lot? How many items are contained in the payment lot? Which bank statement is the payment lot associated with? Is the payment lot a cheque lot? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FI
  - account
  - bo:bank
  - component:FI-CA-2CL
  - contract
  - FI-CA
  - FI-CA-2CL
  - interface-view
  - lob:cross_application components
  - lob:finance
  - payment
  - metadata-only
---
# I_CAPAYMENTLOT

**This CDS view represents the header data of a payment lot in Contract Accounting. This CDS view provides the data to answer the following business questions: Which house bank and house bank account is assigned to the payment lot? What is the posting date and value date of the payment lot? Which company code does the payment lot belong to? What is the currency of the payment lot? Which bank clearing account is assigned to the payment lot? How many items are contained in the payment lot? Which bank statement is the payment lot associated with? Is the payment lot a cheque lot? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CAPAYMENTLOT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAPaymentLot` |  | |  |  | `CHAR(12)` | Payment Lot |
| `CAPaymentLotSearchTerm` |  | |  |  | `CHAR(40)` | Search Term for Payment Lot |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time at which the object was created |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Time at Which the Object Was Last Changed |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `BusinessPlace` |  | |  |  | `CHAR(4)` | Business Place |
| `CAApplicationArea` |  | |  |  | `CHAR(1)` | Application Area |
| `DocumentDate` |  | |  |  | `DATS(8)` | Document Date in Document |
| `CAPostingDate` |  | |  |  | `DATS(8)` | Posting Date in the Document |
| `ValueDate` |  | |  |  | `DATS(8)` | Value Date |
| `CAClearingReason` |  | |  |  | `CHAR(2)` | Clearing Reason |
| `CADocumentType` |  | |  |  | `CHAR(2)` | Document Type |
| `CADocumentOriginCode` |  | |  |  | `CHAR(2)` | Document Origin Key |
| `CAReconciliationKey` |  | |  |  | `CHAR(12)` | Reconciliation Key for General Ledger |
| `CABankClearingAccount` |  | |  |  | `CHAR(10)` | Bank clearing account |
| `CAIsChequeLot` |  | |  |  | `CHAR(1)` | Check Lot |
| `CAIsSeparateLineItemInGL` |  | |  |  | `CHAR(1)` | Create Line Item in General Ledger |
| `CAPaymentLotStatus` |  | |  |  | `CHAR(1)` | Status of the payment lot |
| `CAPaymentCategory` |  | |  |  | `CHAR(2)` | Category of Payment/Payment Lot |
| `HouseBank` |  | |  |  | `CHAR(5)` | Short Key for a House Bank |
| `HouseBankAccount` |  | |  |  | `CHAR(5)` | ID for Account Details |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `CAExchangeRate` |  | |  |  | `DEC(9)` | Absolute Exchange Rate |
| `ExchRateIsIndirectQuotation` |  | |  |  | `CHAR(1)` | Exchange Rate Is Indirect Quotation |
| `CANumberOfPaymentLotItems` |  | |  |  | `NUMC(6)` | Number of items |
| `TotalDebitAmount` |  | |  |  | `CURR(15)` | Total debit postings |
| `TotalCreditAmount` |  | |  |  | `CURR(15)` | Total credit postings |
| `TotalAmountCurrency` |  | |  |  | `CUKY(5)` | Currency Key for the Totals |
| `CAOriginOfAutomlyCrtedRetsLot` |  | |  |  | `CHAR(1)` | Origin of Automatically Generated Returns Lots |
| `BankStatementShortID` |  | |  |  | `NUMC(8)` | Short Key of Account Statement |
