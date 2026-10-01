---
name: I_CABILLGDOCUMENTITEMTYPETEXT
description: "Cabillgdocumentitemtypetext"
app_component: FI-CA-INV-2CL
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
  - FI-CA
  - FI-CA-INV
  - interface-view
  - text-view
  - document
  - text
  - item-level
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABILLGDOCUMENTITEMTYPETEXT

**Cabillgdocumentitemtypetext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
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
| `CABillgDocumentItemType` | ✓ | | `_CABillgDocumentItemTypeText` | `CAInvcgDocumentItemType` | `CHAR(8)` | Type of Billing Item |
| `Language` | ✓ | | `_CABillgDocumentItemTypeText` | `Language` | `LANG(1)` | Language Key |
| `CABillgDocumentItemTypeText` |  | | `_CABillgDocumentItemTypeText` | `CAInvcgDocItemTypeText` | `CHAR(50)` | Description of the Billing Item Type |
| `_CABillgDocumentItemType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgDocumentItemType` | `I_CABillgDocumentItemType` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'ICABillgDocumentItemTypeText'
@EndUserText.label: 'Abrechnungspositionsarten - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CABillgDocumentItemType',
  sapObjectNodeType.name: 'ContrAcctgBillgDocItemTypeText',
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #LANGUAGE_DEPENDENT_TEXT,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC

define view entity I_CABillgDocumentItemTypeText
  as select from I_CAInvcgDocItemTypeCustText as _CABillgDocumentItemTypeText
  
  association [1..1] to I_CABillgDocumentItemType as _CABillgDocumentItemType on $projection.CABillgDocumentItemType = _CABillgDocumentItemType.CABillgDocumentItemType
{
      @ObjectModel.foreignKey.association: '_CABillgDocumentItemType'
  key _CABillgDocumentItemTypeText.CAInvcgDocumentItemType as CABillgDocumentItemType,
      @Semantics.language:true
      @ObjectModel.foreignKey.association: '_Language'
  key _CABillgDocumentItemTypeText.Language,
      @Semantics.text: true
      _CABillgDocumentItemTypeText.CAInvcgDocItemTypeText  as CABillgDocumentItemTypeText,
      
      _CABillgDocumentItemType,
      _Language
}
```
