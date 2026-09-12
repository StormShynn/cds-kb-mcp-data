---
name: I_BANKRATINGANALYSISCUBE
description: "This CDS view retrieves the number of banks that have ratings on the Ratings tab of the Manage Banks - Cash Management app (F1574A). This CDS view provides the data to answer the following business questions: How many banks in the system have ratings? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKRATINGANALYSISCUBE')/$value
semantic_en: "This CDS view retrieves the number of banks that have ratings on the Ratings tab of the Manage Banks - Cash Management app (F1574A). This CDS view provides the data to answer the following business questions: How many banks in the system have ratings? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CLM-BAM-2CL
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_BANKRATINGANALYSISCUBE

**This CDS view retrieves the number of banks that have ratings on the Ratings tab of the Manage Banks - Cash Management app (F1574A). This CDS view provides the data to answer the following business questions: How many banks in the system have ratings? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKRATINGANALYSISCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankAccountInternalID` |  | |  |  | `NUMC(10)` | Bank Account Technical ID |
| `Bank` |  | |  |  | `CHAR(15)` | Bank Key |
| `BankCountry` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BankGroup` |  | |  |  | `CHAR(10)` | Bank Group ID |
| `BusinessPartnerRatingProcedure` |  | |  |  | `CHAR(10)` | Rating Procedure |
| `BusinessPartnerRatingGrade` |  | |  |  | `CHAR(10)` | Rating |
| `BusinessPartnerRatingRanking` |  | |  |  | `CHAR(3)` | Rank of Rating |
| `BusinessPartnerRatingIsExpired` |  | |  |  | `CHAR(1)` | Rating Validity is Expired according to Permitted Period |
| `BPRatingValidityStartDate` |  | |  |  | `DATS(8)` | Valid-from Date for Rating |
| `BPRatingValidityEndDate` |  | |  |  | `DATS(8)` | Valid-to Date for Rating |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
