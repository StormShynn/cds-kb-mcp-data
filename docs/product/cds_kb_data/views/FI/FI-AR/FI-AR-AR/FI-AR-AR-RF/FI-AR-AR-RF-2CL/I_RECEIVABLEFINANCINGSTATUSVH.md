---
name: I_RECEIVABLEFINANCINGSTATUSVH
description: "Receivablefinancingstatusvh"
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
  - value-help
  - status
  - component:FI-AR-AR-RF-2CL
  - lob:Finance
---
# I_RECEIVABLEFINANCINGSTATUSVH

**Receivablefinancingstatusvh**

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
| `ReceivableFinancingStatus` | ✓ | |  |  | `CHAR(1)` | Current Status of Receivable |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.technicalName:'IRBLFNCNGSTATUSVH'
@EndUserText.label: 'Receivable Financing Status'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel: { usageType: { dataClass: #META,
                             serviceQuality: #A,
                             sizeCategory: #S } }
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'ReceivableFinancingStatus'
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY]
@ObjectModel.modelingPattern:#VALUE_HELP_PROVIDER
@VDM.viewType: #COMPOSITE
@Search.searchable: true
define view entity I_ReceivableFinancingStatusVH as select from I_ReceivableFinancingStatus
{
      @ObjectModel.text.association: '_Text'
      @UI.textArrangement: #TEXT_LAST
      @Search: { defaultSearchElement: true }
      @Search.ranking:#HIGH
  key ReceivableFinancingStatus,
  
        _Text
      
}
```
