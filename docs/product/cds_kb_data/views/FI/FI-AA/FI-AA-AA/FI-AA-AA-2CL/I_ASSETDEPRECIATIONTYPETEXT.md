---
name: I_ASSETDEPRECIATIONTYPETEXT
description: "This CDS view provides the supported values for DepreciationType. The following depreciation types are available: Value Meaning N Ordinary depreciation S Special tax depreciation Z Interest (not supported) This CDS view provides the data to answer the following business questions: Which depreciation types are available? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-AA-AA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETDEPRECIATIONTYPETEXT')/$value
semantic_en: "This CDS view provides the supported values for DepreciationType. The following depreciation types are available: Value Meaning N Ordinary depreciation S Special tax depreciation Z Interest (not supported) This CDS view provides the data to answer the following business questions: Which depreciation types are available? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Asset Depreciation Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "asset"
  - "depreciation"
  - "type"
  - "text"
  - "language"
  - "name"
tags:
  - FI
  - bo:asset
  - component:FI-AA-AA-2CL
  - FI-AA
  - FI-AA-AA
  - FI-AA-AA-2CL
  - interface-view
  - lob:finance
---
# I_ASSETDEPRECIATIONTYPETEXT

**This CDS view provides the supported values for DepreciationType. The following depreciation types are available: Value Meaning N Ordinary depreciation S Special tax depreciation Z Interest (not supported) This CDS view provides the data to answer the following business questions: Which depreciation types are available? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-AA-AA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETDEPRECIATIONTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(ddlanguage as spras)` | `LANG(1)` | Language Key |
| `DepreciationType` | ✓ | |  | `cast(domvalue_l as afatyp )` | `CHAR(1)` | Depreciation Type |
| `DepreciationTypeName` |  | |  | `cast(ddtext as afatyptx )` | `CHAR(60)` | Short Descriptive Text: Depreciation Type |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETDEPRECIATIONTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETDEPRECIATIONTYPETEXT')/$value)*

```abap
@Analytics.internalName: #LOCAL
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Asset Depreciation Type - Text'
@VDM.viewType: #BASIC
@ObjectModel: {
    representativeKey: 'DepreciationType',
    dataCategory: #TEXT,
    usageType.serviceQuality: #A,
    usageType.sizeCategory: #S,
    usageType.dataClass: #CUSTOMIZING,
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY]
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view entity I_AssetDepreciationTypeText
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(ddlanguage as spras)             as Language,
      @ObjectModel.text.element: ['DepreciationTypeName']
      @Search.defaultSearchElement: true
  key cast(domvalue_l as afatyp )  as DepreciationType,

      @Semantics.text: true
      cast(ddtext as afatyptx ) as DepreciationTypeName,

      _Language
}
where
      as4local = 'A'
  and domname  = 'AFATYP'
```
