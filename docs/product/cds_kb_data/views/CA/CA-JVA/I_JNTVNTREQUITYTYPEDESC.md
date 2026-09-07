---
name: I_JNTVNTREQUITYTYPEDESC
description: "Jntvntrequitytypedesc"
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
# I_JNTVNTREQUITYTYPEDESC

**Jntvntrequitytypedesc**

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
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `JointVentureEquityType` | ✓ | |  | `etype` | `CHAR(3)` | Equity Type |
| `JointVentureEquityTypeName` |  | |  | `etext` | `CHAR(35)` | Investment Type Description |
| `_Language` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_JntVntrEquityType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_JntVntrEquityType` | `I_JntVntrEquityTypeMaster` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVEQTYPTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@ObjectModel:{
  usageType.dataClass: #CUSTOMIZING,
  usageType.sizeCategory: #S,
  usageType.serviceQuality: #A,
  dataCategory: #TEXT }
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Joint Venture Equity Type - Text'
@ObjectModel.representativeKey: 'JointVentureEquityType'

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT,
                                      #CDS_MODELING_DATA_SOURCE, #UI_PROVIDER_PROJECTION_SOURCE ]

define view I_JntVntrEquityTypeDesc
  as select from t8jet
  association [0..1] to I_Language                as _Language          on  $projection.Language = _Language.Language
  association [1..1] to I_CompanyCode             as _CompanyCode       on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_JntVntrEquityTypeMaster as _JntVntrEquityType on  $projection.CompanyCode            = _JntVntrEquityType.CompanyCode
                                                                        and $projection.JointVentureEquityType = _JntVntrEquityType.JointVentureEquityType
{
      @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JointVentureCompanyCodeVH',
                           element: 'CompanyCode' }
              }]
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs as CompanyCode,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
      @UI.hidden: true
  key spras as Language,
       @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JntVntrEquityTypeVH',
                           element: 'JointVentureEquityType' }
              }]
      @ObjectModel.foreignKey.association: '_JntVntrEquityType'
      @ObjectModel.text.element: [ 'JointVentureEquityTypeName' ]
  key etype as JointVentureEquityType,

      @Semantics.text: true
      etext as JointVentureEquityTypeName,

      _CompanyCode,
      _Language,
      _JntVntrEquityType
}
```
