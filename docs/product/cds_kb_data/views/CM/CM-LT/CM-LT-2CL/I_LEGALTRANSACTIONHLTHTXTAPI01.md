---
name: I_LEGALTRANSACTIONHLTHTXTAPI01
description: "Legaltransactionhlthtxtapi 01"
app_component: CM-LT-2CL
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
  - CM
  - CM-LT
  - interface-view
  - component:CM-LT-2CL
  - lob:Other
---
# I_LEGALTRANSACTIONHLTHTXTAPI01

**Legaltransactionhlthtxtapi 01**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
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
| `LegalTransactionHealth` | ✓ | |  |  | `CHAR(4)` | Legal Transaction Status |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `LegalTransactionHealthName` |  | |  |  | `CHAR(40)` | Long Text |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ILTHLTHTXTAPI01'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #NOT_REQUIRED


@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'LegalTransactionHealth'

@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory:  #S

@Metadata.ignorePropagatedAnnotations:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
                                     

@EndUserText.label: 'Legal Transaction Status - Text'
define view I_LegalTransactionHlthTxtAPI01
  as select from I_LegalTransactionHealthText
{

  key LegalTransactionHealth,

      @Semantics.language: true
  key Language,

      @Semantics.text: true -- identifies the text field
      LegalTransactionHealthName
}
```
