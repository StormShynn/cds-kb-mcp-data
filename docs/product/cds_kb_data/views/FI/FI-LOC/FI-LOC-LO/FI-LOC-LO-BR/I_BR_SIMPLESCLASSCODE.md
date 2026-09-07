---
name: I_BR_SIMPLESCLASSCODE
description: "BR Simplesclasscode"
semantic_vi: "View BR Simplesclasscode hiển thị mã phân loại thuế Brazil được sử dụng trong các giao dịch tài chính. Nó được sử dụng để lấy hoặc cập nhật các mã này cho mục đích kế toán."
keywords:
  - "br simplesclasscode"
  - "tax classification"
  - "mã phân loại thuế"
  - "financial transactions"
  - "giao dịch tài chính"
  - "accounting"
  - "kế toán"
  - "fi"
  - "fi-loc"
  - "fi-loc-lo-br"
semantic_en: "The BR Simplesclasscode view exposes Brazilian tax classification codes used in financial transactions. It is used to retrieve or update these codes for accounting purposes."
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
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_SIMPLESCLASSCODE

**BR Simplesclasscode**

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
| `BR_SIMPLESClassCode` | ✓ | |  | `cast ( domvalue_l as logbr_simples_class )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_SIMPLESClassCodeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRSIMPLESCLS'
@EndUserText.label: 'Brazil Simples Nacional Class Code'
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'BR_SIMPLESClassCode'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.compositionRoot: true
@Search.searchable: true
@Analytics.internalName: #LOCAL
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]

define view I_BR_SIMPLESClassCode
  as select from dd07l
  association [0..*] to I_BR_SIMPLESClassCodeText as _Text on $projection.BR_SIMPLESClassCode = _Text.BR_SIMPLESClassCode
{

      @ObjectModel.text.association: '_Text'
  key cast ( domvalue_l as logbr_simples_class ) as BR_SIMPLESClassCode,

      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                         as DomainValue,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
}

where domname  = 'LOGBR_SIMPLES_CLASS'
  and as4local = 'A'
```
