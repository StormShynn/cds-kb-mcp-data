---
name: I_PRFTCTRCOMPANYCODEASSIGNMENT
description: "PRFTCTRCompany CodeASSIGNMENT"
app_component: EC-PCA-MD-2CL
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
  - EC
  - EC-PCA
  - EC-PCA-MD
  - interface-view
  - company-code
  - component:EC-PCA-MD-2CL
  - lob:Other
  - bo:CompanyCode
---
# I_PRFTCTRCOMPANYCODEASSIGNMENT

**PRFTCTRCompany CodeASSIGNMENT**

| Property | Value |
|---|---|
| App Component | `EC-PCA-MD-2CL` |
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
| `ControllingArea` | ✓ | |  |  | `CHAR(4)` | Controlling Area |
| `ProfitCenter` | ✓ | |  |  | `CHAR(10)` | Profit Center |
| `CompanyCode` | ✓ | |  | `coalesce( _PrftCtrSpcfcCoCodeAssgmt.CompanyCode, _CompanyCode.CompanyCode )` | `CHAR(4)` |  |
| `JointVentureObjectType` |  | | `_PrftCtrSpcfcCoCodeAssgmt` | `JointVentureObjectType` | `CHAR(4)` | Joint Venture Object Type |
| `JointVentureClass` |  | | `_PrftCtrSpcfcCoCodeAssgmt` | `JointVentureClass` | `CHAR(3)` | JIB/JIBE Class |
| `JointVentureSubClass` |  | | `_PrftCtrSpcfcCoCodeAssgmt` | `JointVentureSubClass` | `CHAR(5)` | JIB/JIBE Subclass A |
| `JointVenture` |  | | `_PrftCtrSpcfcCoCodeAssgmt` | `JointVenture` | `CHAR(6)` | Joint Venture |
| `JointVentureRecoveryCode` |  | | `_PrftCtrSpcfcCoCodeAssgmt` | `JointVentureRecoveryCode` | `CHAR(2)` | Recovery Indicator |
| `JointVentureEquityType` |  | | `_PrftCtrSpcfcCoCodeAssgmt` | `JointVentureEquityType` | `CHAR(3)` | Equity Type |
| `_CompanyCode` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PrftCtrSpcfcCoCodeAssgmt` | `I_PrftCtrSpcfcCoCodeAssgmt` | [0..*] |
| `_CompanyCode` | `I_CompanyCode` | [0..*] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'IFIPRFTCTRCCASGN',
  compiler.compareFilter: true,
  preserveKey: true
}

@AccessControl.authorizationCheck: #CHECK

@VDM.viewType: #COMPOSITE

@Metadata: {
  ignorePropagatedAnnotations: true
}

@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #M
  },
  supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ],
  modelingPattern: #NONE,
  sapObjectNodeType.name: 'PrftCtrCompanyCodeAssignment'
}

@Analytics:{
  dataCategory: #FACT,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      automatic: false
    }
  }
}

@EndUserText.label: 'Company code assignment to profit center'
define view I_PrftCtrCompanyCodeAssignment
  as select distinct from I_ProfitCenter

  association [0..*] to I_PrftCtrSpcfcCoCodeAssgmt as _PrftCtrSpcfcCoCodeAssgmt on  $projection.ProfitCenter    = _PrftCtrSpcfcCoCodeAssgmt.ProfitCenter
                                                                                and $projection.ControllingArea = _PrftCtrSpcfcCoCodeAssgmt.ControllingArea
  association [0..*] to I_CompanyCode              as _CompanyCode              on  $projection.ControllingArea = _CompanyCode.ControllingArea

{
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ControllingArea',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.foreignKey.association: '_ControllingArea'
  key ControllingArea,
  key ProfitCenter,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'ControllingArea' }
        }]
  key coalesce( _PrftCtrSpcfcCoCodeAssgmt.CompanyCode, _CompanyCode.CompanyCode ) as CompanyCode,
      _PrftCtrSpcfcCoCodeAssgmt.JointVentureObjectType,
      _PrftCtrSpcfcCoCodeAssgmt.JointVentureClass,
      _PrftCtrSpcfcCoCodeAssgmt.JointVentureSubClass,
      _PrftCtrSpcfcCoCodeAssgmt.JointVenture,
      _PrftCtrSpcfcCoCodeAssgmt.JointVentureRecoveryCode,
      _PrftCtrSpcfcCoCodeAssgmt.JointVentureEquityType,

      _ControllingArea,
      _CompanyCode
}
```
