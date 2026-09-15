---
name: I_SRVCMGMTPAYMENTTERMSVH
description: "Srvcmgmtpaymenttermsvh"
app_component: CRM-S4-SRV-MC-2CL
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
  - CRM
  - interface-view
  - value-help
  - payment
  - component:CRM-S4-SRV-MC-2CL
  - lob:Other
---
# I_SRVCMGMTPAYMENTTERMSVH

**Srvcmgmtpaymenttermsvh**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-MC-2CL` |
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
| `PaymentTerms` | ✓ | |  |  | `CHAR(4)` | Terms of Payment Key |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PaymentTermsText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Terms of Payment'
@ObjectModel.representativeKey:'PaymentTerms'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@VDM.viewType: #COMPOSITE
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@Metadata.ignorePropagatedAnnotations:true

define view entity I_SrvcMgmtPaymentTermsVH
  as select from I_PaymentTerms as PaymentTerms

  association [0..*] to I_PaymentTermsText as _Text on $projection.PaymentTerms = _Text.PaymentTerms

{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key PaymentTerms.PaymentTerms,
      
                  
      _Text

}
```
