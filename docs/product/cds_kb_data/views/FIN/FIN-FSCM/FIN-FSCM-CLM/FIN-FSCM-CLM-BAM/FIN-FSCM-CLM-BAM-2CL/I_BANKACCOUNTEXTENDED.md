---
name: I_BANKACCOUNTEXTENDED
description: "This CDS view retrieves bank account master data extended with custom fields. It provides core bank account attributes such as account number, bank, IBAN, currency, and company code, and supports customer-specific extension fields added through the extensibility framework. This CDS view provides the data to answer the following business questions: Which bank accounts are currently active? Which bank accounts are assigned to a specific company code? What is the IBAN or SWIFT code for a given bank account? How many bank accounts use a specific currency? Which bank accounts have a custom field value? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTEXTENDED')/$value
semantic_en: "This CDS view retrieves bank account master data extended with custom fields. It provides core bank account attributes such as account number, bank, IBAN, currency, and company code, and supports customer-specific extension fields added through the extensibility framework. This CDS view provides the data to answer the following business questions: Which bank accounts are currently active? Which bank accounts are assigned to a specific company code? What is the IBAN or SWIFT code for a given bank account? How many bank accounts use a specific currency? Which bank accounts have a custom field value? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
keywords:
  - "Bank Account Extended With Custom Fields"
tags:
  - FIN
  - account
  - bo:bank
  - component:FIN-FSCM-CLM-BAM-2CL
  - customer
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - interface-view
  - lob:finance
  - master-data
  - metadata-only
---
# I_BANKACCOUNTEXTENDED

**This CDS view retrieves bank account master data extended with custom fields. It provides core bank account attributes such as account number, bank, IBAN, currency, and company code, and supports customer-specific extension fields added through the extensibility framework. This CDS view provides the data to answer the following business questions: Which bank accounts are currently active? Which bank accounts are assigned to a specific company code? What is the IBAN or SWIFT code for a given bank account? How many bank accounts use a specific currency? Which bank accounts have a custom field value? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTEXTENDED')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankAccountInternalID` |  | |  |  | `NUMC(10)` | Bank Account Technical ID |
| `BankInternalID` |  | |  |  | `CHAR(15)` | Bank Key |
| `BankCountry` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `BankAccountNumber` |  | |  |  | `CHAR(40)` | Bank Account Number |
| `BankAccountCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `BankControlKey` |  | |  |  | `CHAR(2)` | Bank Control Key |
| `BankAccountContractType` |  | |  |  | `CHAR(2)` | Bank Account Contract Type |
| `BankNumber` |  | |  |  | `CHAR(15)` | Bank Number |
| `SWIFTCode` |  | |  |  | `CHAR(11)` | SWIFT/BIC for International Payments |
| `BankGroup` |  | |  |  | `CHAR(10)` | Bank Group ID |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BankAccountInternalType` |  | |  |  | `CHAR(10)` | Bank Account Type ID |
| `BankAccountCharacteristic` |  | |  |  | `CHAR(5)` | Bank Account Characteristic |
| `BankAccountStatus` |  | |  |  | `CHAR(2)` | Bank Account Status |
| `IBAN` |  | |  |  | `CHAR(34)` | IBAN (International Bank Account Number) |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Bank Account Opening Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Bank Account Closing Date |
