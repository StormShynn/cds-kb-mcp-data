---
name: I_JVACTBCKORDMAPPGINTER
description: "Jvactbckordmappginter"
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
# I_JVACTBCKORDMAPPGINTER

**Jvactbckordmappginter**

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
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `JntVntrIntcoCode` | ✓ | |  |  | `CHAR(4)` | Intercompany code |
| `JVAFromOrder` | ✓ | |  |  | `CHAR(12)` | Order From |
| `JVARangeToOrder` |  | |  |  | `CHAR(12)` | Order To |
| `JVACutbackCostCenter` |  | |  |  | `CHAR(10)` | Cutback Cost Centre |
| `JVACutbackOrder` |  | |  |  | `CHAR(12)` | Cutback Order |
| `JVACutbackWBS` |  | |  |  | `NUMC(8)` | WBS Element |
| `JVACutbackWBSExt` |  | | `_CutbackWBSElement` | `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `JVAInterCompanyControllingArea` |  | | `_InterCompanyCompanyCode` | `ControllingArea` | `CHAR(4)` | Controlling Area |
| `_CompanyCode` | | ✓ | | | | |
| `_InterCompanyCompanyCode` | | ✓ | | | | |
| `_JVAFromOrder` | | ✓ | | | | |
| `_JVARangeToOrder` | | ✓ | | | | |
| `_CutbackCostCenter` | | ✓ | | | | |
| `_JVACutbackOrder` | | ✓ | | | | |
| `_CutbackWBSElement` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_InterCompanyCompanyCode` | `I_CompanyCode` | [0..1] |
| `_JVAFromOrder` | `I_Order` | [0..1] |
| `_JVARangeToOrder` | `I_Order` | [0..1] |
| `_CutbackCostCenter` | `I_CostCenter` | [0..*] |
| `_JVACutbackOrder` | `I_Order` | [0..1] |
| `_CutbackWBSElement` | `I_WBSElementByInternalKey` | [0..1] |

## Source Code

```abap
@VDM.viewType: #COMPOSITE
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Cutback Order Mapping Intercompany'
@Metadata.ignorePropagatedAnnotations: true
@Analytics: { dataCategory: #DIMENSION }
@ObjectModel.representativeKey: 'JVAFromOrder'
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@Analytics.internalName: #LOCAL
@Metadata.allowExtensions: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MIXED
}

define view entity I_JVACtbckOrdMappgInter

  as select from I_JVACtbckOrdMappgInterBsc as JVACtbckOrdMappgInterBsc

  association [0..1] to I_CompanyCode             as _CompanyCode             on  _CompanyCode.CompanyCode = $projection.CompanyCode

  association [0..1] to I_CompanyCode             as _InterCompanyCompanyCode on  _InterCompanyCompanyCode.CompanyCode = $projection.JntVntrIntcoCode

  association [0..1] to I_Order                   as _JVAFromOrder            on  _JVAFromOrder.OrderID = $projection.JVAFromOrder

  association [0..1] to I_Order                   as _JVARangeToOrder         on  _JVARangeToOrder.OrderID = $projection.JVARangeToOrder

  association [0..*] to I_CostCenter              as _CutbackCostCenter       on  _CutbackCostCenter.ControllingArea = $projection.JVAInterCompanyControllingArea
                                                                              and _CutbackCostCenter.CostCenter      = $projection.JVACutbackCostCenter

  association [0..1] to I_Order                   as _JVACutbackOrder         on  _JVACutbackOrder.OrderID = $projection.JVACutbackOrder

  association [0..1] to I_WBSElementByInternalKey as _CutbackWBSElement       on  _CutbackWBSElement.WBSElementInternalID = $projection.JVACutbackWBS

{

  @ObjectModel.foreignKey.association: '_CompanyCode'
  key JVACtbckOrdMappgInterBsc.CompanyCode,
  @ObjectModel.foreignKey.association: '_InterCompanyCompanyCode'
  key JVACtbckOrdMappgInterBsc.JntVntrIntcoCode,
  key JVACtbckOrdMappgInterBsc.JVAFromOrder,
      JVACtbckOrdMappgInterBsc.JVARangeToOrder,
      JVACtbckOrdMappgInterBsc.JVACutbackCostCenter,
      JVACtbckOrdMappgInterBsc.JVACutbackOrder,
      JVACtbckOrdMappgInterBsc.JVACutbackWBS,
      _CutbackWBSElement.WBSElementExternalID as JVACutbackWBSExt,
      _InterCompanyCompanyCode.ControllingArea as JVAInterCompanyControllingArea,

      _CompanyCode,
      _InterCompanyCompanyCode,
      _JVAFromOrder,
      _JVARangeToOrder,
      _CutbackCostCenter,
      _JVACutbackOrder,
      _CutbackWBSElement

}
```
