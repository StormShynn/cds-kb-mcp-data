---
name: C_BANKRATINGANALYSISQUERY
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
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKRATINGANALYSISQUERY')/$value
semantic_en: "This CDS view retrieves the number of banks that have ratings on the Ratings tab of the Manage Banks - Cash Management app (F1574A). This CDS view provides the data to answer the following business questions: How many banks in the system have ratings? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Bank Rating Analysis - Query — CDS view tiêu dùng dựa trên I_BankRatingAnalysisCube."
keywords:
  - "bank"
  - "rating"
  - "analysis"
  - "query"
  - "business"
  - "partner"
  - "procedure"
  - "grade"
  - "company"
  - "code"
  - "ranking"
  - "country"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CLM-BAM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - lob:finance
---
# C_BANKRATINGANALYSISQUERY

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKRATINGANALYSISQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartnerRatingProcedure` |  | |  |  | `CHAR(10)` | Rating Procedure |
| `BusinessPartnerRatingGrade` |  | |  |  | `CHAR(10)` | Rating |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessPartnerRatingRanking` |  | |  |  | `CHAR(3)` | Rank of Rating |
| `BankCountry` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `Bank` |  | |  |  | `CHAR(15)` | Bank Key |
| `NrOfBanksRated` |  | |  | `cast(1 as fclm_bam_bank_count)` | `INT4(10)` | Number of Banks |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKRATINGANALYSISQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKRATINGANALYSISQUERY')/$value)*

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'CBKRATANLYSQ'

@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.personalData.blocking: #NOT_REQUIRED

@Analytics.internalName: #LOCAL
@Analytics.query: true

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Bank Rating Analysis - Query'

@Metadata.ignorePropagatedAnnotations: true

@OData.publish: true

@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
@ObjectModel.usageType: { dataClass: #MIXED, serviceQuality: #D, sizeCategory: #M }

@VDM.viewType: #CONSUMPTION

define view C_BankRatingAnalysisQuery
  with parameters
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate : vdm_v_key_date

  as select from I_BankRatingAnalysisCube

{
  @AnalyticsDetails.query: { axis: #ROWS, totals: #SHOW, display: #TEXT_KEY }
  BusinessPartnerRatingProcedure,

  @AnalyticsDetails.query: { axis: #ROWS, totals: #SHOW, display: #KEY }
  BusinessPartnerRatingGrade,

  @AnalyticsDetails.query: { axis: #FREE, totals: #SHOW, display: #TEXT_KEY }
  CompanyCode,

  @AnalyticsDetails.query: { axis: #FREE, totals: #SHOW, display: #TEXT_KEY }
  BusinessPartnerRatingRanking,

  @AnalyticsDetails.query: { axis: #FREE, totals: #SHOW, display: #TEXT_KEY }
  BankCountry,

  @AnalyticsDetails.query: { axis: #FREE, totals: #SHOW, display: #TEXT_KEY }
  Bank,

  @Aggregation.default: #FORMULA
  @AnalyticsDetails.exceptionAggregationSteps: [ { exceptionAggregationBehavior: #SUM,
                                                   exceptionAggregationElements: [ 'BankCountry', 'Bank' ] } ]
  cast(1 as  fclm_bam_bank_count) as NrOfBanksRated
}

where BPRatingValidityStartDate <= $parameters.P_KeyDate
  and BPRatingValidityEndDate   >= $parameters.P_KeyDate
```
