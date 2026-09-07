---
name: I_JVAVALUATIONAREA
description: "Jvavaluationarea"
app_component: CA-JVA
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
  - CA
  - CA-JVA
  - interface-view
  - component:CA-JVA
  - lob:Cross-Application Components
---
# I_JVAVALUATIONAREA

**Jvavaluationarea**

| Property | Value |
|---|---|
| App Component | `CA-JVA` |
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
| `ValuationArea` | ✓ | |  |  | `CHAR(4)` | Valuation Area |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVVALUATIONAREA'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'JVA Valuation Area'
@ObjectModel: {
  representativeKey: 'ValuationArea',
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #M
  },
  supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #UI_PROVIDER_PROJECTION_SOURCE]
}
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true

define view I_JVAValuationArea
  as select from I_ValuationArea
  association [1..1] to I_CompanyCode as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode
{
  key ValuationArea as ValuationArea,
      @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JointVentureCompanyCodeVH',
                           element: 'CompanyCode' }
              }]
      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode   as CompanyCode,

      _CompanyCode
}
```
