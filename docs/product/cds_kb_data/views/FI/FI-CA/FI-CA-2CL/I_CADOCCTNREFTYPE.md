---
name: I_CADOCCTNREFTYPE
description: "Cadocctnreftype"
semantic_vi: "View Cadocctnreftype hiển thị các loại và danh mục tham chiếu cho các tài liệu trong thành phần FI-CA-2CL, được sử dụng để xác định và phân loại các hộp tài liệu."
keywords:
  - "cadocctnreftype"
  - "document container"
  - "container reference type"
  - "container reference category"
  - "fi-ca-2cl"
  - "finance"
  - "sap"
  - "container"
  - "document"
  - "reference"
  - "type"
  - "category"
semantic_en: "The Cadocctnreftype view exposes container reference types and categories for documents in the FI-CA-2CL component, used to identify and categorize document containers."
app_component: FI-CA-2CL
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
  - interface-view
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CADOCCTNREFTYPE

**Cadocctnreftype**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
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
| `CADocumentContainerRefType` | ✓ | |  | `refty` | `CHAR(3)` | Document Container - Reference Type |
| `CADocumentContainerRefCategory` |  | |  | `refcat` | `CHAR(2)` | Reference Category |
| `_DocCtnRefTypeText` | | ✓ | | | | |
| `_DocCtnRefCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DocCtnRefTypeText` | `I_CADocCtnRefTypeText` | [1..*] |
| `_DocCtnRefCat` | `I_CADocCtnRefCat` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed : true

@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Document Container Reference Type'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CADocumentContainerRefType',
                sapObjectNodeType.name: 'ContrAcctgDocContainerRefType',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CADocCtnRefType
  as select from tfkdcr

  association [1..*] to I_CADocCtnRefTypeText as _DocCtnRefTypeText on $projection.CADocumentContainerRefType = _DocCtnRefTypeText.CADocumentContainerRefType
  association [0..1] to I_CADocCtnRefCat      as _DocCtnRefCat      on $projection.CADocumentContainerRefCategory = _DocCtnRefCat.CADocumentContainerRefCategory

{
      @ObjectModel.text.association: '_DocCtnRefTypeText'
  key refty  as CADocumentContainerRefType,

      @ObjectModel.foreignKey.association: '_DocCtnRefCat'
      refcat as CADocumentContainerRefCategory,

      _DocCtnRefTypeText,
      _DocCtnRefCat
}
```
