---
name: I_RECEIVABLEFINANCINGSTATUS
description: "Receivablefinancingstatus"
app_component: FI-AR-AR-RF-2CL
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
  - FI-AR
  - FI-AR-AR
  - interface-view
  - status
  - component:FI-AR-AR-RF-2CL
  - lob:Finance
---
# I_RECEIVABLEFINANCINGSTATUS

**Receivablefinancingstatus**

| Property | Value |
|---|---|
| App Component | `FI-AR-AR-RF-2CL` |
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
| `ReceivableFinancingStatus` | ✓ | |  | `cast( left(dd07l.domvalue_l, 1) as frp_rcvbl_financing_status preserving type)` | `CHAR(1)` | Current Status of Receivable |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_RblFinancingStatusText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Receivable Financing Status'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'ReceivableFinancingStatus'
@ObjectModel: { usageType: { dataClass: #META,
                             serviceQuality: #A,
                             sizeCategory: #S },
                supportedCapabilities:  [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,#SQL_DATA_SOURCE, #ANALYTICAL_DIMENSION ],
                modelingPattern:  #ANALYTICAL_DIMENSION }                                                                    
@ObjectModel.resultSet.sizeCategory: #XS
@VDM.viewType: #BASIC
define view entity I_ReceivableFinancingStatus 

  as select from dd07l

  association [0..*] to I_RblFinancingStatusText as _Text on $projection.ReceivableFinancingStatus = _Text.ReceivableFinancingStatus
{
      @ObjectModel.text.association: '_Text'
  key cast( left(dd07l.domvalue_l, 1) as frp_rcvbl_financing_status preserving type) as ReceivableFinancingStatus,

      _Text

}

where
      dd07l.domname  = 'FARP_RBL_FINCG_STATUS'
  and dd07l.as4local = 'A'
```
