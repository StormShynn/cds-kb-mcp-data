---
name: I_BR_SIMPLESCLASSCODETEXT
description: "BR Simplesclasscodetext"
semantic_vi: "View BR Simplesclasscodetext cung cấp mã lớp đơn giản và mô tả của Brazil, được sử dụng trong các giao dịch tài chính và kế toán."
keywords:
  - "simple class code"
  - "mã lớp đơn giản"
  - "brazil"
  - "financial transactions"
  - "giao dịch tài chính"
  - "accounting"
  - "kế toán"
  - "fi"
  - "fi-loc-lo-br"
semantic_en: "The BR Simplesclasscodetext view provides simple class codes and their descriptions for Brazil, used in financial transactions and accounting."
app_component: FI-LOC-LO-BR
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
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - text-view
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_SIMPLESCLASSCODETEXT

**BR Simplesclasscodetext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
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
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type)` |  |  |
| `BR_SIMPLESClassCode` | ✓ | |  | `cast ( domvalue_l as logbr_simples_class )` |  |  |
| `BR_SIMPLESClassCodeDesc` |  | |  | `cast ( ddtext as logbr_simples_class_desc preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_BR_SIMPLESClassCode` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_SIMPLESClassCode` | `I_BR_SIMPLESClassCode` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil Simples Nac Class Code - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics: {dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.sqlViewName: 'IBRSIMPLESCLSTXT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.representativeKey: 'BR_SIMPLESClassCode'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true 
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#EXTRACTION_DATA_SOURCE]

define view I_BR_SIMPLESClassCodeText as select from dd07t
  association [1..1] to I_BR_SIMPLESClassCode as _BR_SIMPLESClassCode on $projection.BR_SIMPLESClassCode = _BR_SIMPLESClassCode.BR_SIMPLESClassCode
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  @Semantics.language: true
  key cast( ddlanguage as spras preserving type) as Language,
  
  @ObjectModel.foreignKey.association: '_BR_SIMPLESClassCode'
  key cast ( domvalue_l as logbr_simples_class ) as BR_SIMPLESClassCode,
  
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  @Semantics.text: true
  cast ( ddtext as logbr_simples_class_desc preserving type) as BR_SIMPLESClassCodeDesc,
  
  @Consumption.hidden: true
  dd07t.domvalue_l as DomainValue,
  
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT] 
  _BR_SIMPLESClassCode,
  _Language
}
where domname = 'LOGBR_SIMPLES_CLASS' and as4local = 'A'
```
