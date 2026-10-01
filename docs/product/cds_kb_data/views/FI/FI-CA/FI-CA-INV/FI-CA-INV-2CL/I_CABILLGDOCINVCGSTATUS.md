---
name: I_CABILLGDOCINVCGSTATUS
description: "Cabillgdocinvcgstatus"
app_component: FI-CA-INV-2CL
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
  - FI
  - FI-CA
  - FI-CA-INV
  - interface-view
  - status
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABILLGDOCINVCGSTATUS

**Cabillgdocinvcgstatus**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
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
| `CABillgDocumentInvcgStatus` | ✓ | |  | `cast( dd07l.domvalue_l as invstatus_kk )` | `CHAR(1)` | Invoicing Status of Billing Document |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_CABillgDocInvcgStatusText` | | ✓ | | | | |

## Source Code

```abap
@Search.searchable: true
@Consumption.ranked: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Fakturierungsstatus eines Abr.bel.'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CABillgDocumentInvcgStatus',
  sapObjectNodeType.name: 'ContrAcctgBillgDocInvcgStatus',
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #S
  },
  resultSet.sizeCategory: #XS,
  dataCategory: #VALUE_HELP
}
@VDM.viewType: #BASIC
define root view entity I_CABillgDocInvcgStatus
  as select from dd07l
  composition [0..*] of I_CABillgDocInvcgStatusText as _CABillgDocInvcgStatusText
{
      @ObjectModel.text.association: '_CABillgDocInvcgStatusText'
  key cast( dd07l.domvalue_l as invstatus_kk ) as CABillgDocumentInvcgStatus,
  
      @Consumption.hidden: true
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
      dd07l.domvalue_l                         as DomainValue,
      
      _CABillgDocInvcgStatusText
}
where
      dd07l.domname  = 'INVSTATUS_KK'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
