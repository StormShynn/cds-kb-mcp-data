---
name: I_WRNTYVERIFICATIONRESULT
description: "Warranty Verification Header Basic"
app_component: LO-WTY-FIO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WRNTYVERIFICATIONRESULT')/$value
semantic_en: "Warranty Verification Header Basic"
semantic_vi: "Warranty Verification Header Basic — CDS view cơ bản (transactional data) dựa trên wty_verify_h."
keywords:
  - "warranty"
  - "verification"
  - "header"
  - "basic"
  - "wrnty"
  - "result"
  - "number"
  - "reference"
  - "order"
  - "category"
  - "rslt"
  - "status"
tags:
  - LO
  - bo:companycode
  - component:LO-WTY-FIO-2CL
  - interface-view
  - LO-WTY
  - LO-WTY-FIO
  - LO-WTY-FIO-2CL
  - lob:finance
  - lob:logistics general
---
# I_WRNTYVERIFICATIONRESULT

**Warranty Verification Header Basic**

| Property | Value |
|---|---|
| App Component | `LO-WTY-FIO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WRNTYVERIFICATIONRESULT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WrntyVerificationResultUUID` | ✓ | |  | `verification_uuid` | `RAW(16)` | Warranty Verification ID |
| `WrntyVerificationResultNumber` |  | |  | `verification_number` | `CHAR(10)` | Warranty Verification Number |
| `WarrantyReferenceOrderCategory` |  | |  | `order_category` | `CHAR(10)` | Warranty Order Category |
| `WarrantyReferenceOrderNumber` |  | |  | `order_number` | `CHAR(10)` | Warranty Order Number |
| `WrntyVerificationRsltStatus` |  | |  | `lifecycle_status` | `CHAR(4)` | Warranty Lifecycle Status |
| `WrntyCoverageDecisionStatus` |  | |  | `coverage_decision_status` | `CHAR(4)` | Warranty Coverage Decision |
| `WrntyProposedCoverageStatus` |  | |  | `proposed_coverage_status` | `CHAR(4)` | Warranty Coverage Proposal |
| `WrntyInputSummaryText` |  | |  | `input_summary` |  |  |
| `WrntyResultSummaryText` |  | |  | `result_summary` |  |  |
| `WarrantyCoverageNote` |  | |  | `warranty_notes` |  |  |
| `WarrantyStartDate` |  | |  | `warranty_start_date` | `DATS(8)` | Warranty Date |
| `WarrantyEndDate` |  | |  | `warranty_end_date` | `DATS(8)` | Warranty Date |
| `WarrantyVerificationConfidence` |  | |  | `warranty_confidence_score` | `CHAR(4)` | Warranty Confidence Score |
| `WarrantyCoverageType` |  | |  | `warranty_type` | `CHAR(10)` | Warranty Type |
| `ConfirmedDateTime` |  | |  | `decision_confirmation_date` | `DEC(15)` | Warranty Date and Time |
| `CreatedByUser` |  | |  | `created_by` | `CHAR(12)` | Created By User |
| `CreationDateTime` |  | |  | `created_at` | `DEC(21)` | Creation Date Time |
| `LocalInstanceLastChangedByUser` |  | |  | `local_last_changed_by` | `CHAR(12)` | Local Instance Last Changed By User |
| `LoclInstanceLastChangeDateTime` |  | |  | `local_last_changed_at` | `DEC(21)` | Local Instance Last Change Date Time |
| `LastChangedByUser` |  | |  | `last_changed_by` | `CHAR(12)` | Last Changed By User |
| `LastChangeDateTime` |  | |  | `last_changed_at` | `DEC(21)` | Last Change Date Time |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WRNTYVERIFICATIONRESULT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WRNTYVERIFICATIONRESULT')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warranty Verification Header Basic'
@VDM:{
  viewType: #BASIC
}
@ObjectModel: {
  usageType: {
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #A,
    sizeCategory:   #XL
  } ,
supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE
  ]
}
 
@Metadata.ignorePropagatedAnnotations: true
define root view entity I_WrntyVerificationResult
  as select from wty_verify_h
{
  key verification_uuid          as WrntyVerificationResultUUID,
      verification_number        as WrntyVerificationResultNumber,
      order_category             as WarrantyReferenceOrderCategory,
      order_number               as WarrantyReferenceOrderNumber,
      lifecycle_status           as WrntyVerificationRsltStatus,
      coverage_decision_status   as WrntyCoverageDecisionStatus,
      proposed_coverage_status   as WrntyProposedCoverageStatus,
      input_summary              as WrntyInputSummaryText,
      result_summary             as WrntyResultSummaryText,
      warranty_notes             as WarrantyCoverageNote,
      warranty_start_date        as WarrantyStartDate,
      warranty_end_date          as WarrantyEndDate,
      warranty_confidence_score  as WarrantyVerificationConfidence,
      warranty_type              as WarrantyCoverageType,
      @Semantics.dateTime
      decision_confirmation_date as ConfirmedDateTime,
      @Semantics.user.createdBy: true
      created_by                 as CreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      created_at                 as CreationDateTime,
      @Semantics.user.localInstanceLastChangedBy: true
      local_last_changed_by      as LocalInstanceLastChangedByUser,
      @Semantics.systemDateTime.localInstanceLastChangedAt: true
      local_last_changed_at      as LoclInstanceLastChangeDateTime,
      @Semantics.user.lastChangedBy
      last_changed_by            as LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      last_changed_at            as LastChangeDateTime
}
```
