---
name: I_BUSINESSTRANSACTIONTYPE
description: "Businesstransactiontype"
semantic_vi: "View Business Transaction Type hiển thị các loại và danh mục giao dịch tài chính, cho phép các nhà phát triển truy cập và quản lý dữ liệu giao dịch trong SAP FI-GL-IS-2CL. Nó được sử dụng để truy xuất và phân tích các loại giao dịch cho mục đích báo cáo tài chính và kế toán."
keywords:
  - "business transaction type"
  - "financial transaction"
  - "fi-gl-is-2cl"
  - "sap fi"
  - "financial reporting"
  - "accounting"
  - "transaction data"
  - "giao dịch tài chính"
  - "loại giao dịch"
  - "danh mục giao dịch"
  - "fi-gl"
  - "fi-gl-is"
semantic_en: "The Business Transaction Type view exposes financial transaction types and categories, enabling developers to access and manage transaction data in SAP FI-GL-IS-2CL. It is used to retrieve and analyze transaction types for financial reporting and accounting purposes."
app_component: FI-GL-IS-2CL
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
  - FI-GL
  - FI-GL-IS
  - interface-view
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_BUSINESSTRANSACTIONTYPE

**Businesstransactiontype**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
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
| `BusinessTransactionType` | ✓ | |  | `cast(cbttype as fis_custbttype preserving type )` |  |  |
| `BusinessTransactionCategory` |  | |  | `cast(bttype as fis_bttype preserving type )` |  |  |
| `BusTransIsSubjToPerdControl` |  | |  | `xperiodcontrol` |  |  |
| `PeriodControlIsLedgerSpecific` |  | |  | `xperiodbyledger` |  |  |
| `BusinessTransTypeIsInactive` |  | |  | `inactive` |  |  |
| `_Text` | | ✓ | | | | |
| `_BusTransacTypeHierNode` | | ✓ | | | | |
| `_BusinessTransactionCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusTransactionTypeText` | [0..*] |
| `_BusTransacTypeHierNode` | `I_BusTransacTypeHierNode` | [0..*] |
| `_BusinessTransactionCategory` | `I_BusinessTransactionCategory` | [0..1] |

## Source Code

```abap
@ObjectModel.representativeKey: 'BusinessTransactionType' //Inserted by VDM CDS Suite Plugin
@EndUserText.label: 'Business Transaction Type'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBUSTRANTYPE'
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK //NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION 
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name: 'BusinessTransactionType' 
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

define view I_BusinessTransactionType
  // Corresponds to calculation view 'sap.hba.ecc.BusinessTransactionType'
  as select from finsc_custbttype

  association [0..*] to I_BusTransactionTypeText as _Text on $projection.BusinessTransactionType = _Text.BusinessTransactionType

  association [0..*] to I_BusTransacTypeHierNode as _BusTransacTypeHierNode on $projection.BusinessTransactionType = _BusTransacTypeHierNode.BusinessTransactionType
  
  association [0..1] to I_BusinessTransactionCategory  as _BusinessTransactionCategory   on  $projection.BusinessTransactionCategory = _BusinessTransactionCategory.BusinessTransactionCategory 
  
{
      @ObjectModel.hierarchy.association: '_BusTransacTypeHierNode'
      @ObjectModel.text.association: '_Text'
  key cast(cbttype as fis_custbttype preserving type ) as BusinessTransactionType,
      @ObjectModel.foreignKey.association: '_BusinessTransactionCategory'
      cast(bttype as fis_bttype preserving type ) as BusinessTransactionCategory,
      @Semantics.booleanIndicator:true 
      xperiodcontrol as BusTransIsSubjToPerdControl,
      @Semantics.booleanIndicator:true 
      xperiodbyledger as PeriodControlIsLedgerSpecific,
      @Semantics.booleanIndicator:true 
      inactive as BusinessTransTypeIsInactive,
      _Text,
      _BusTransacTypeHierNode,
      _BusinessTransactionCategory 
      
};
```
