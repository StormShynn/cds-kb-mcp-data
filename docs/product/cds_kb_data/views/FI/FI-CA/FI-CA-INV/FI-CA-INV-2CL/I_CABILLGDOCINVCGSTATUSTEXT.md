---
name: I_CABILLGDOCINVCGSTATUSTEXT
description: "Cabillgdocinvcgstatustext"
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
  - text-view
  - text
  - status
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABILLGDOCINVCGSTATUSTEXT

**Cabillgdocinvcgstatustext**

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
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `CABillgDocumentInvcgStatus` | ✓ | |  | `cast( dd07t.domvalue_l as invstatus_kk )` | `CHAR(1)` | Invoicing Status of Billing Document |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `CABillgDocumentInvcgStatusText` |  | |  | `cast( dd07t.ddtext as invstatus_txt_gfn_kk preserving type )` | `CHAR(60)` | Text for Invoicing Status of Billing Document |
| `_Language` | | ✓ | | | | |
| `_CABillgDocInvcgStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Fakturierungsstatus für Abr.bel. (Text)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CABillgDocumentInvcgStatus',
  sapObjectNodeType.name: 'ContrAcctgBillgDocInvcgStsText',
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #LANGUAGE_DEPENDENT_TEXT,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@Search.searchable: true
@VDM.viewType: #BASIC

define view entity I_CABillgDocInvcgStatusText
  as select from dd07t
  association        to parent I_CABillgDocInvcgStatus as _CABillgDocInvcgStatus on $projection.CABillgDocumentInvcgStatus = _CABillgDocInvcgStatus.CABillgDocumentInvcgStatus
  association [0..1] to I_Language                     as _Language              on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )            as Language,

      @ObjectModel.foreignKey.association: '_CABillgDocInvcgStatus'
      @ObjectModel.text.element: ['CABillgDocumentInvcgStatusText']
  key cast( dd07t.domvalue_l as invstatus_kk )                     as CABillgDocumentInvcgStatus,

      @Consumption.hidden: true
      dd07t.domvalue_l                                             as DomainValue,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast( dd07t.ddtext as invstatus_txt_gfn_kk preserving type ) as CABillgDocumentInvcgStatusText,

      _CABillgDocInvcgStatus,
      _Language
}
where
      dd07t.domname  = 'INVSTATUS_KK'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
