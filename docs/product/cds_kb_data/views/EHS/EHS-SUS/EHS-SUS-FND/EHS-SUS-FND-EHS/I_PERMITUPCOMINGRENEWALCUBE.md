---
name: I_PERMITUPCOMINGRENEWALCUBE
description: "Permit Expiration Renewal Date - Cube"
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERMITUPCOMINGRENEWALCUBE')/$value
semantic_en: "Permit Expiration Renewal Date - Cube"
semantic_vi: "Permit Expiration Renewal Date - Cube — CDS view giao diện dựa trên P_CmplOblAsgtPrmitRnwlDate."
keywords:
  - "permit"
  - "expiration"
  - "renewal"
  - "date"
  - "cube"
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
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
---
# I_PERMITUPCOMINGRENEWALCUBE

**Permit Expiration Renewal Date - Cube**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERMITUPCOMINGRENEWALCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CmplncObligationAssignmentUUID` | ✓ | |  |  | `RAW(16)` | Compliance Obligation Assignment UUID |
| `ComplianceObligationTitle` |  | |  |  | `CHAR(255)` | Compliance Obligation Title |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSLocationName` |  | |  |  | `CHAR(60)` | Location Revision Text |
| `CmplRqVersUUID` |  | |  |  | `RAW(16)` | Compliance Requirement UUID |
| `ComplianceObligationTypeCode` |  | |  |  | `CHAR(2)` | Compliance Obligation Type |
| `CmplncOblgnTypeDescription` |  | |  |  | `CHAR(60)` | Compliance Obligation Type Description |
| `ComplianceObligationDomainCode` |  | |  |  | `CHAR(21)` | Compliance Obligation Domain |
| `EHSCmplRqPmtSetForRnwlOnDate` |  | | `_EHSCmplRqPermit` | `EHSCmplRqPmtSetForRnwlOnDate` | `DATS(8)` | Set for renewal on date |
| `NumberOfRecords` |  | |  | `cast( 0 as ehfnd_number_of_obligations )` | `INT4(10)` | Number of Obligations |
| `MonthsUntilRenewalDateValue` |  | |  | `floor( (cast (dats_days_between( $session.system_date, _EHSCmplRqPermit.EHSCmplRqPmtSetForRnwlOnDate ) as abap.decfloat16) / cast(30.436875 as abap.decfloat16) ) )` | `DECF(34)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERMITUPCOMINGRENEWALCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERMITUPCOMINGRENEWALCUBE')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Permit Expiration Renewal Date - Cube'
@Analytics: { dataCategory:#CUBE, internalName: #LOCAL }
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType:{ serviceQuality: #D,
                         sizeCategory:  #L,
                         dataClass: #MIXED }
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true

define view entity I_PermitUpcomingRenewalCube 
as select from P_CmplOblAsgtPrmitRnwlDate
{
  key CmplncObligationAssignmentUUID,
  ComplianceObligationTitle,
  EHSLocationUUID,
  EHSLocationName,
  CmplRqVersUUID,
  ComplianceObligationTypeCode,
  CmplncOblgnTypeDescription,
  ComplianceObligationDomainCode, 
  _EHSCmplRqPermit.EHSCmplRqPmtSetForRnwlOnDate,
  
  @Aggregation.default: #COUNT_DISTINCT
  @Aggregation.referenceElement: ['CmplncObligationAssignmentUUID']
  cast( 0 as ehfnd_number_of_obligations )    as NumberOfRecords,
      
  @Aggregation.default:#SUM
  floor( 
        (cast 
          
            (dats_days_between( $session.system_date, _EHSCmplRqPermit.EHSCmplRqPmtSetForRnwlOnDate )
          as abap.decfloat16) 
         / 
         cast(30.436875 as abap.decfloat16) ) // the average number of days per month taking into account leap years and varying month lengths
        ) as MonthsUntilRenewalDateValue // months between todays date and permit renewal date, calculated as number of days between the two dates divided by 30.436875
}
```
