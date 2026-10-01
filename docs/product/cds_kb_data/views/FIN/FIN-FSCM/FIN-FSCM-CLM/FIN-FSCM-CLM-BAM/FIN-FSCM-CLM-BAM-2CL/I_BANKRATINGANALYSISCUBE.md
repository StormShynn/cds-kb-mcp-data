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
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKRATINGANALYSISCUBE')/$value
semantic_en: "This CDS view retrieves the number of banks that have ratings on the Ratings tab of the Manage Banks - Cash Management app (F1574A). This CDS view provides the data to answer the following business questions: How many banks in the system have ratings? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Bank Rating Analysis - Cube — CDS view giao diện dựa trên R_NonTechnicalBankAccount."
keywords:
  - "bank"
  - "rating"
  - "analysis"
  - "cube"
  - "account"
  - "internal"
  - "country"
  - "company"
  - "code"
  - "group"
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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKRATINGANALYSISCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankAccountInternalID` | ✓ | |  |  | `NUMC(10)` | Bank Account Technical ID |
| `Bank` |  | |  | `BankInternalID` | `CHAR(15)` | Bank Key |
| `BankCountry` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BankGroup` |  | |  |  | `CHAR(10)` | Bank Group ID |
| `BusinessPartnerRatingProcedure` |  | | `_BankRating` | `BusinessPartnerRatingProcedure` | `CHAR(10)` | Rating Procedure |
| `BusinessPartnerRatingGrade` |  | | `_BankRating` | `BusinessPartnerRatingGrade` | `CHAR(10)` | Rating |
| `BusinessPartnerRatingRanking` |  | | `_BankRating._BPRatingProcedureGrade` | `BusinessPartnerRatingRanking` | `CHAR(3)` | Rank of Rating |
| `BusinessPartnerRatingIsExpired` |  | | `_BankRating` | `BusinessPartnerRatingIsExpired` | `CHAR(1)` | Rating Validity is Expired according to Permitted Period |
| `BPRatingValidityStartDate` |  | | `_BankRating` | `BPRatingValidityStartDate` | `DATS(8)` | Valid-from Date for Rating |
| `BPRatingValidityEndDate` |  | | `_BankRating` | `BPRatingValidityEndDate` | `DATS(8)` | Valid-to Date for Rating |
| `BusinessPartner` |  | | `_BankRating` | `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BankRating` | `R_BkRiskBusinessPartnerRating` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKRATINGANALYSISCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKRATINGANALYSISCUBE')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED

@Analytics.dataCategory: #CUBE
@Analytics.internalName: #LOCAL

@EndUserText.label: 'Bank Rating Analysis - Cube'

@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.usageType: { dataClass: #MIXED, serviceQuality: #D, sizeCategory: #M }

@VDM.viewType: #COMPOSITE

define view entity I_BankRatingAnalysisCube
  as select from R_NonTechnicalBankAccount            as Account
  association [0..1] to R_BkRiskBusinessPartnerRating as _BankRating  on $projection.BankGroup = _BankRating.BusinessPartner
  association [0..1] to I_CompanyCode                 as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode
{
  key BankAccountInternalID,
      BankInternalID                                                   as Bank,
      BankCountry,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,
      BankGroup,
      @ObjectModel.foreignKey.association: '_BPRatingProcedure'
      _BankRating.BusinessPartnerRatingProcedure,
      @ObjectModel.foreignKey.association: '_BPRatingProcedureGrade'
      _BankRating.BusinessPartnerRatingGrade,
      _BankRating._BPRatingProcedureGrade.BusinessPartnerRatingRanking as BusinessPartnerRatingRanking,
      _BankRating.BusinessPartnerRatingIsExpired,
      _BankRating.BPRatingValidityStartDate,
      _BankRating.BPRatingValidityEndDate,
      _BankRating.BusinessPartner,
      
      _BankRating._BPRatingProcedure,
      _BankRating._BPRatingProcedureGrade,
      _BankRating._BusinessPartner,
      _BankRating._BPFinancialServicesExtn,
      _CompanyCode
}

where BankAccountStatus = '02'
   or BankAccountStatus = '10'
   or BankAccountStatus = '09';
```
