---
name: C_PMTUPCOMINGRENEWALFLTRQ
description: "Pmt Upcoming Renewal Fltr - Query"
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PMTUPCOMINGRENEWALFLTRQ')/$value
semantic_en: "Pmt Upcoming Renewal Fltr - Query"
semantic_vi: "Pmt Upcoming Renewal Fltr - Query — CDS view tiêu dùng dựa trên Pmt Upcoming Renewal Fltr - Query."
keywords:
  - "pmt"
  - "upcoming"
  - "renewal"
  - "fltr"
  - "query"
  - "cmplnc"
  - "obligation"
  - "assignment"
  - "compliance"
  - "title"
  - "location"
  - "name"
  - "cmpl"
  - "vers"
tags:
  - EHS
  - component:EHS-SUS-FND-EHS
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
---
# C_PMTUPCOMINGRENEWALFLTRQ

**Pmt Upcoming Renewal Fltr - Query**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PMTUPCOMINGRENEWALFLTRQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CmplncObligationAssignmentUUID` |  | |  |  | `RAW(16)` | Compliance Obligation Assignment UUID |
| `ComplianceObligationTitle` |  | |  |  | `CHAR(255)` | Compliance Obligation Title |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSLocationName` |  | |  |  | `CHAR(60)` | Location Revision Text |
| `CmplRqVersUUID` |  | |  |  | `RAW(16)` | Compliance Requirement UUID |
| `ComplianceObligationTypeCode` |  | |  |  | `CHAR(2)` | Compliance Obligation Type |
| `EHSCmplRqPmtSetForRnwlOnDate` |  | |  |  | `DATS(8)` | Set for renewal on date |
| `ComplianceObligationDomainCode` |  | |  |  | `CHAR(21)` | Compliance Obligation Domain |
| `NumberOfRecords` |  | |  |  | `INT4(10)` | Number of Obligations |
| `MonthsUntilRenewalDateValue` |  | |  |  | `DECF(34)` |  |
| `MnthsUntilRnwlDteIsLessThanSix` |  | |  | `case when MonthsUntilRenewalDateValue <= abap.int1'6' then 1 else 0 end` | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PMTUPCOMINGRENEWALFLTRQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PMTUPCOMINGRENEWALFLTRQ')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@VDM.viewType: #CONSUMPTION
@EndUserText.label: 'Pmt Upcoming Renewal Fltr - Query'
@AccessControl.authorizationCheck: #NOT_ALLOWED
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [#ANALYTICAL_QUERY]
@OData.publish: true

@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true

@ObjectModel.usageType:{
  serviceQuality: #D,
  sizeCategory: #L,
  dataClass: #MIXED
}

define transient view entity C_PmtUpcomingRenewalFltrQ 
provider contract analytical_query
as projection on I_PermitUpcomingRenewalCube
{
  
  CmplncObligationAssignmentUUID,
  
  ComplianceObligationTitle,
  
  EHSLocationUUID,
  
  EHSLocationName,
  
  CmplRqVersUUID,
  
  ComplianceObligationTypeCode,
  
  EHSCmplRqPmtSetForRnwlOnDate,
  
  ComplianceObligationDomainCode,
  
  NumberOfRecords,
  
  MonthsUntilRenewalDateValue,
  
  @Aggregation.default: #FORMULA
  case
    when MonthsUntilRenewalDateValue <= abap.int1'6'
      then 1
    else 0
  end as MnthsUntilRnwlDteIsLessThanSix
} where EHSCmplRqPmtSetForRnwlOnDate >= $session.system_date
```
