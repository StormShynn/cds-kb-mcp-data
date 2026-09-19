---
name: I_APARTOLERANCEGROUPTEXT
description: "Apartolerancegrouptext"
semantic_vi: "Chứa dữ liệu văn bản nhóm dung sai cho tài khoản thu tiền, được sử dụng để hiển thị tên nhóm dung sai trong thành phần FI-AR-IS-2CL."
keywords:
  - "apartolerance"
  - "group"
  - "text"
  - "fi-ar-is-2cl"
  - "finance"
  - "accounts payable"
  - "dung sai"
  - "thu tiền"
  - "tài khoản"
semantic_en: "Exposes tolerance group text data for accounts payable, used to display tolerance group names in the FI-AR-IS-2CL component."
app_component: FI-AR-IS-2CL
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
  - FI-AR-IS
  - interface-view
  - text-view
  - text
  - component:FI-AR-IS-2CL
  - lob:Finance
---
# I_APARTOLERANCEGROUPTEXT

**Apartolerancegrouptext**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
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
| `CompanyCode` | ✓ | |  | `cast( bukrs as fis_bukrs )` | `CHAR(4)` | Company Code |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `APARToleranceGroup` | ✓ | |  | `cast( togru as farp_togru )` | `CHAR(4)` | Tolerance Group for the Business Partner/G/L Account |
| `APARToleranceGroupName` |  | |  | `txt30` | `CHAR(30)` | Name of Tolerance Group |
| `_CompanyCode` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog:    { sqlViewName:                 'IFIAPARTOLGRPT',
                   preserveKey:                 true,
                   compiler.compareFilter:      true,
                   buffering.status: #ACTIVE,
                   buffering.type: #FULL }

@Metadata:       { ignorePropagatedAnnotations: true,
                   allowExtensions:             false }
@VDM:            { viewType:                    #BASIC }
@ClientHandling: { algorithm:                   #SESSION_VARIABLE }
@AccessControl:  { authorizationCheck:          #NOT_REQUIRED }
@ObjectModel:    { modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                   usageType.serviceQuality:    #A,
                   usageType.sizeCategory:      #M,
                   usageType.dataClass:         #CUSTOMIZING,
                   representativeKey: 'APARToleranceGroup',
                   dataCategory: #TEXT,
                   supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT ]
                   }
@EndUserText.label: 'Tolerance groups of customer or supplier accounts - Text'
define view I_APARToleranceGroupText
  as select from t043gt
  association [0..1] to I_CompanyCode as _CompanyCode on _CompanyCode.CompanyCode = $projection.CompanyCode
  association [0..1] to I_Language    as _Language    on _Language.Language = $projection.Language
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key cast( bukrs as fis_bukrs )  as CompanyCode,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras                       as Language,
  key cast( togru as farp_togru ) as APARToleranceGroup,

      @Semantics.text: true
      txt30                       as APARToleranceGroupName,

      _CompanyCode,
      _Language
}
```
