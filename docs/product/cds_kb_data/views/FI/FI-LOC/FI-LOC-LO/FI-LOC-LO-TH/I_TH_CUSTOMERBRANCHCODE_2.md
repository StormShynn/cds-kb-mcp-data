---
name: I_TH_CUSTOMERBRANCHCODE_2
description: "Customer Branch Code for Thailand"
app_component: FI-LOC-LO-TH
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TH_CUSTOMERBRANCHCODE_2')/$value
semantic_en: "Customer Branch Code for Thailand"
semantic_vi: "Customer Branch Code for Thailand — CDS view cơ bản (master data) dựa trên fitha_pbupl_d."
keywords:
  - "customer"
  - "branch"
  - "code"
  - "for"
  - "thailand"
  - "default"
  - "value"
  - "address"
  - "number"
  - "business"
  - "purpose"
  - "completed"
tags:
  - FI
  - bo:businesspartner
  - component:FI-LOC-LO-TH
  - customer
  - FI-LOC
  - FI-LOC-LO
  - FI-LOC-LO-TH
  - interface-view
  - lob:finance
  - lob:logistics general
---
# I_TH_CUSTOMERBRANCHCODE_2

**Customer Branch Code for Thailand**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-TH` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TH_CUSTOMERBRANCHCODE_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Customer` | ✓ | |  | `kunnr` | `CHAR(10)` | Customer Number |
| `BranchCode` | ✓ | |  | `j_1tpbupl` | `CHAR(5)` | Branch Code |
| `IsDefaultValue` |  | |  | `default_branch` | `CHAR(1)` | Default Branch Code |
| `AddressNumber` |  | |  | `addrnumber` | `CHAR(10)` | Address Number |
| `IsBusinessPurposeCompleted` |  | | `_Customer` | `IsBusinessPurposeCompleted` | `CHAR(1)` | Business Purpose Completed Flag |
| `AuthorizationGroup` |  | | `_Customer` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `CustomerAccountGroup` |  | | `_Customer` | `CustomerAccountGroup` | `CHAR(4)` | Customer Account Group |
| `DataControllerSet` |  | | `_Customer` | `DataControllerSet` | `CHAR(1)` | BP: Data Controller Set Flag |
| `_Customer` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Customer` | `I_Customer` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TH_CUSTOMERBRANCHCODE_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TH_CUSTOMERBRANCHCODE_2')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blockingIndicator: [ 'IsBusinessPurposeCompleted' ]
@EndUserText.label: 'Customer Branch Code for Thailand'
@ObjectModel: { representativeKey:     'BranchCode',
                 // modelingPattern:       #TRANSACTIONAL_QUERY,
                supportedCapabilities: [#CDS_MODELING_DATA_SOURCE],
                usageType: { serviceQuality: #A,
                             dataClass:      #MASTER,
                             sizeCategory:   #XL } }
@Metadata.ignorePropagatedAnnotations:true
@VDM:{ lifecycle.contract.type: #PUBLIC_LOCAL_API ,
        viewType: #BASIC }

define view entity I_TH_CustomerBranchCode_2
  as select from fitha_pbupl_d as BranchCode
  composition [0..*] of I_TH_CustomerBranchCodeText_2 as _Text

  association [1..1] to I_Customer                    as _Customer on BranchCode.kunnr = _Customer.Customer
{
      @ObjectModel.foreignKey.association: '_Customer'
  key BranchCode.kunnr          as Customer,
      @ObjectModel.text.association: '_Text'
  key BranchCode.j_1tpbupl      as BranchCode,
      @Semantics.booleanIndicator
      BranchCode.default_branch as IsDefaultValue,
      BranchCode.addrnumber     as AddressNumber,


      _Text,
      /*BP Authorization */
      @Semantics.booleanIndicator:true
      _Customer.IsBusinessPurposeCompleted,
      _Customer.AuthorizationGroup,
      _Customer.CustomerAccountGroup,
      _Customer.DataControllerSet,
      _Customer
}
```
