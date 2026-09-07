---
name: I_JNTVNTREQUITYTYPEMASTER
description: "Jntvntrequitytypemaster"
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
# I_JNTVNTREQUITYTYPEMASTER

**Jntvntrequitytypemaster**

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
| `CompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `JointVentureEquityType` | ✓ | |  | `etype` | `CHAR(3)` | Equity Type |
| `_CompanyCode` | | ✓ | | | | |
| `_JntVntrEquityTypeDesc` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_JntVntrEquityTypeDesc` | `I_JntVntrEquityTypeDesc` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVET'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Joint Venture Equity Type'
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'JointVentureEquityType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true

@Analytics: {
    dataCategory: #DIMENSION,
        dataExtraction: {
        enabled: true
    }
}
@Analytics.internalName:#LOCAL
@Analytics.settings.valueHelp.supressInitialValue: true

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION,
                                     #EXTRACTION_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #UI_PROVIDER_PROJECTION_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'JointVentureEquityType'

define view I_JntVntrEquityTypeMaster
  as select from t8je
  association [1..1] to I_CompanyCode           as _CompanyCode           on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..*] to I_JntVntrEquityTypeDesc as _JntVntrEquityTypeDesc on  $projection.CompanyCode            = _JntVntrEquityTypeDesc.CompanyCode
                                                                          and $projection.JointVentureEquityType = _JntVntrEquityTypeDesc.JointVentureEquityType
{       
      @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JointVentureCompanyCodeVH',
                           element: 'CompanyCode' }
              }]
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs as CompanyCode,
      @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JntVntrEquityTypeVH',
                           element: 'JointVentureEquityType' }
              }]
      @ObjectModel.text.association: '_JntVntrEquityTypeDesc'
  key etype as JointVentureEquityType,

      _CompanyCode,
      _JntVntrEquityTypeDesc
}
```
