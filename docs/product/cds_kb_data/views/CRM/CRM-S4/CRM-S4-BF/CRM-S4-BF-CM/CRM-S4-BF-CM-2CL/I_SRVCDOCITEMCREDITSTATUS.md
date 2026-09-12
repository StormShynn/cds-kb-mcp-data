---
name: I_SRVCDOCITEMCREDITSTATUS
description: "Srvcdocitemcreditstatus"
app_component: CRM-S4-BF-CM-2CL
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
  - credit
  - item-level
  - component:CRM-S4-BF-CM-2CL
  - lob:Other
---
# I_SRVCDOCITEMCREDITSTATUS

**Srvcdocitemcreditstatus**

| Property | Value |
|---|---|
| App Component | `CRM-S4-BF-CM-2CL` |
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
| `SrvcDocItemCreditStatus` | ✓ | |  | `cast ( domvalue_l as crms4_stat_credit_i )` | `CHAR(1)` | Credit Status of Item |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_SrvcDocItemCreditStatusText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcDocItemCreditStatusText` | `I_SrvcDocItemCreditStatusText` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Credit Status of Service Trans Item'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Analytics: {
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@AccessControl: {
    authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
    dataCategory: #VALUE_HELP,
    representativeKey: 'SrvcDocItemCreditStatus',
    sapObjectNodeType.name: 'SrvcDocItemCreditStatus',
    usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING},
    resultSet.sizeCategory: #XS,  //render drop down
    supportedCapabilities: [#ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER]
}
@Search.searchable: true
@Metadata: {
    ignorePropagatedAnnotations: true
}
@ClientHandling: {
    algorithm: #SESSION_VARIABLE
}
@AbapCatalog: {
    sqlViewName: 'ISERVITMCRDTSTS',
    compiler.compareFilter: true,
    preserveKey: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK"] }*/
define view I_SrvcDocItemCreditStatus
  as select from dd07l

  /*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ] }*/
  association [1..*] to I_SrvcDocItemCreditStatusText as _SrvcDocItemCreditStatusText on $projection.SrvcDocItemCreditStatus = _SrvcDocItemCreditStatusText.SrvcDocItemCreditStatus
{
      @ObjectModel.text.association: '_SrvcDocItemCreditStatusText'
  key cast ( domvalue_l as crms4_stat_credit_i ) as SrvcDocItemCreditStatus,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      domvalue_l                                 as DomainValue,
      _SrvcDocItemCreditStatusText
}
where
      domname  = 'CRMS4_STAT_CREDIT_I'
  and as4local = 'A'
```
