---
name: I_SLSDOCITEMITEMCATEGORYDETN
description: "Item Cat Determination for Sls Doc Item"
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SLSDOCITEMITEMCATEGORYDETN')/$value
semantic_en: "Item Cat Determination for Sls Doc Item"
semantic_vi: "Item Cat Determination for Sls Doc Item — CDS view giao diện dựa trên t184."
keywords:
  - "item"
  - "cat"
  - "determination"
  - "for"
  - "sls"
  - "doc"
  - "sales"
  - "document"
  - "type"
  - "category"
  - "group"
  - "usage"
  - "higher"
  - "level"
tags:
  - SD
  - bo:salesorganization
  - component:SD-SLS-GF-2CL
  - interface-view
  - lob:sales & distribution
  - SD-SLS
  - SD-SLS-GF
  - SD-SLS-GF-2CL
---
# I_SLSDOCITEMITEMCATEGORYDETN

**Item Cat Determination for Sls Doc Item**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SLSDOCITEMITEMCATEGORYDETN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDocumentType` | ✓ | |  | `auart` | `CHAR(4)` | Sales Document Type |
| `ItemCategoryGroup` | ✓ | |  | `mtpos` | `CHAR(4)` | Item Category Group from Material Master |
| `SDDocumentItemUsage` | ✓ | |  | `vwpos` | `CHAR(4)` | Item Usage |
| `HigherLevelItemCategory` | ✓ | |  | `uepst` | `CHAR(4)` | Item Category of the Higher-Level Item |
| `SalesDocumentItemCategory` |  | |  | `cast(t184.pstyv as pstyv preserving type )` | `CHAR(4)` | Sales Document Item Category |
| `AdditionalSlsDocItemCategory1` |  | |  | `cast(t184.psty1 as vdm_sd_altv_sls_doc_item_cat preserving type )` | `CHAR(4)` | Alternative Item Category |
| `AdditionalSlsDocItemCategory2` |  | |  | `cast(t184.psty2 as vdm_sd_altv_sls_doc_item_cat preserving type )` | `CHAR(4)` | Alternative Item Category |
| `AdditionalSlsDocItemCategory3` |  | |  | `cast(t184.psty3 as vdm_sd_altv_sls_doc_item_cat preserving type )` | `CHAR(4)` | Alternative Item Category |
| `AdditionalSlsDocItemCategory4` |  | |  | `cast(t184.psty4 as vdm_sd_altv_sls_doc_item_cat preserving type )` | `CHAR(4)` | Alternative Item Category |
| `AdditionalSlsDocItemCategory5` |  | |  | `cast(t184.psty5 as vdm_sd_altv_sls_doc_item_cat preserving type )` | `CHAR(4)` | Alternative Item Category |
| `AdditionalSlsDocItemCategory6` |  | |  | `cast(t184.psty6 as vdm_sd_altv_sls_doc_item_cat preserving type )` | `CHAR(4)` | Alternative Item Category |
| `AdditionalSlsDocItemCategory7` |  | |  | `cast(t184.psty7 as vdm_sd_altv_sls_doc_item_cat preserving type )` | `CHAR(4)` | Alternative Item Category |
| `AdditionalSlsDocItemCategory8` |  | |  | `cast(t184.psty8 as vdm_sd_altv_sls_doc_item_cat preserving type )` | `CHAR(4)` | Alternative Item Category |
| `AdditionalSlsDocItemCategory9` |  | |  | `cast(t184.psty9 as vdm_sd_altv_sls_doc_item_cat preserving type )` | `CHAR(4)` | Alternative Item Category |
| `AdditionalSlsDocItemCategory10` |  | |  | `cast(t184.psty10 as vdm_sd_altv_sls_doc_item_cat preserving type )` | `CHAR(4)` | Alternative Item Category |
| `AdditionalSlsDocItemCategory11` |  | |  | `cast(t184.psty11 as vdm_sd_altv_sls_doc_item_cat preserving type )` | `CHAR(4)` | Alternative Item Category |
| `CreatedByUser` |  | |  | `ernam` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `_SalesDocumentType` | | ✓ | | | | |
| `_ItemCategoryGroup` | | ✓ | | | | |
| `_SDDocumentItemUsage` | | ✓ | | | | |
| `_HigherLevelItemCategory` | | ✓ | | | | |
| `_SalesDocumentItemCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesDocumentType` | `I_SalesDocumentType` | [0..1] |
| `_ItemCategoryGroup` | `I_ItemCategoryGroup` | [0..1] |
| `_SDDocumentItemUsage` | `I_SDDocumentItemUsage` | [0..1] |
| `_HigherLevelItemCategory` | `I_SalesDocumentItemCategory` | [0..1] |
| `_SalesDocumentItemCategory` | `I_SalesDocumentItemCategory` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SLSDOCITEMITEMCATEGORYDETN')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SLSDOCITEMITEMCATEGORYDETN')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog:{
  sqlViewName: 'ISDSLSITMCATDETN',
  compiler.compareFilter: true,
  buffering: {
    type: #FULL,
    status: #ACTIVE
  }
}
@VDM.viewType: #BASIC
@AccessControl:{
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  },
  supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                           #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE ]
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Item Cat Determination for Sls Doc Item'

define view I_SlsDocItemItemCategoryDetn
  as select from t184

  association [0..1] to I_SalesDocumentType         as _SalesDocumentType         on $projection.SalesDocumentType = _SalesDocumentType.SalesDocumentType
  association [0..1] to I_ItemCategoryGroup         as _ItemCategoryGroup         on $projection.ItemCategoryGroup = _ItemCategoryGroup.ItemCategoryGroup
  association [0..1] to I_SDDocumentItemUsage       as _SDDocumentItemUsage       on $projection.SDDocumentItemUsage = _SDDocumentItemUsage.SDDocumentItemUsage
  association [0..1] to I_SalesDocumentItemCategory as _HigherLevelItemCategory   on $projection.HigherLevelItemCategory = _HigherLevelItemCategory.SalesDocumentItemCategory
  association [0..1] to I_SalesDocumentItemCategory as _SalesDocumentItemCategory on $projection.SalesDocumentItemCategory = _SalesDocumentItemCategory.SalesDocumentItemCategory
{

      @ObjectModel.foreignKey.association: '_SalesDocumentType'
  key t184.auart                                                         as SalesDocumentType,

      @ObjectModel.foreignKey.association: '_ItemCategoryGroup'
  key t184.mtpos                                                         as ItemCategoryGroup,

      @ObjectModel.foreignKey.association: '_SDDocumentItemUsage'
  key t184.vwpos                                                         as SDDocumentItemUsage,

      @ObjectModel.foreignKey.association: '_HigherLevelItemCategory'
  key t184.uepst                                                         as HigherLevelItemCategory,

      @ObjectModel.foreignKey.association: '_SalesDocumentItemCategory'
      cast(t184.pstyv  as pstyv preserving type )                        as SalesDocumentItemCategory,

      cast(t184.psty1  as vdm_sd_altv_sls_doc_item_cat preserving type ) as AdditionalSlsDocItemCategory1,

      cast(t184.psty2  as vdm_sd_altv_sls_doc_item_cat preserving type ) as AdditionalSlsDocItemCategory2,

      cast(t184.psty3  as vdm_sd_altv_sls_doc_item_cat preserving type ) as AdditionalSlsDocItemCategory3,

      cast(t184.psty4  as vdm_sd_altv_sls_doc_item_cat preserving type ) as AdditionalSlsDocItemCategory4,

      cast(t184.psty5  as vdm_sd_altv_sls_doc_item_cat preserving type ) as AdditionalSlsDocItemCategory5,

      cast(t184.psty6  as vdm_sd_altv_sls_doc_item_cat preserving type ) as AdditionalSlsDocItemCategory6,

      cast(t184.psty7  as vdm_sd_altv_sls_doc_item_cat preserving type ) as AdditionalSlsDocItemCategory7,

      cast(t184.psty8  as vdm_sd_altv_sls_doc_item_cat preserving type ) as AdditionalSlsDocItemCategory8,

      cast(t184.psty9  as vdm_sd_altv_sls_doc_item_cat preserving type ) as AdditionalSlsDocItemCategory9,

      cast(t184.psty10 as vdm_sd_altv_sls_doc_item_cat preserving type ) as AdditionalSlsDocItemCategory10,

      cast(t184.psty11 as vdm_sd_altv_sls_doc_item_cat preserving type ) as AdditionalSlsDocItemCategory11,

      t184.ernam                                                         as CreatedByUser,

      //Association
      _SalesDocumentType,
      _ItemCategoryGroup,
      _SDDocumentItemUsage,
      _HigherLevelItemCategory,
      _SalesDocumentItemCategory
}
```
