---
name: I_SRVCQTANACCEPTANCESTATUS
description: "Srvcqtanacceptancestatus"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - status
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SRVCQTANACCEPTANCESTATUS

**Srvcqtanacceptancestatus**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SrvcDocIsAccepted` | ✓ | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_SrvcQtanAcceptanceStatusText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcQtanAcceptanceStatusText` | `I_SrvcQtanAcceptanceStatusText` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Status of Service Quotation'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISERVQNSTAT',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
   representativeKey: 'SrvcDocIsAccepted',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #X,
     sizeCategory:   #S
   },
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
}
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
define view I_SrvcQtanAcceptanceStatus
  as select from dd07l
  association [1..*] to I_SrvcQtanAcceptanceStatusText as _SrvcQtanAcceptanceStatusText on $projection.SrvcDocIsAccepted = _SrvcQtanAcceptanceStatusText.SrvcDocIsAccepted

{
      @ObjectModel.text.association: '_SrvcQtanAcceptanceStatusText'
  key domvalue_l as SrvcDocIsAccepted,

      _SrvcQtanAcceptanceStatusText
}
where
      domname  = 'CRMS4_STAT_ACCEPTED'
  and as4local = 'A'
```
