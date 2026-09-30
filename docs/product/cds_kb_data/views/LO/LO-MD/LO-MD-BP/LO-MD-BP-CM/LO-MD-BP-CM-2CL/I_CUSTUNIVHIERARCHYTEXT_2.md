---
name: I_CUSTUNIVHIERARCHYTEXT_2
description: "Customer Univ Hierarchy Header - Text"
app_component: LO-MD-BP-CM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTUNIVHIERARCHYTEXT_2')/$value
semantic_en: "Customer Univ Hierarchy Header - Text"
semantic_vi: "Customer Univ Hierarchy Header - Text — CDS view giao diện dựa trên hrrp_dirt_n."
keywords:
  - "customer"
  - "univ"
  - "hierarchy"
  - "header"
  - "text"
  - "language"
  - "universal"
  - "cust"
  - "valid"
  - "date"
  - "start"
  - "type"
tags:
  - LO
  - bo:businesspartner
  - component:LO-MD-BP-CM-2CL
  - customer
  - interface-view
  - LO-MD
  - LO-MD-BP
  - LO-MD-BP-CM
  - LO-MD-BP-CM-2CL
  - lob:logistics general
---
# I_CUSTUNIVHIERARCHYTEXT_2

**Customer Univ Hierarchy Header - Text**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTUNIVHIERARCHYTEXT_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `UniversalHierarchy` | ✓ | |  | `hryid` | `CHAR(40)` | Hierarchy ID |
| `CustUnivHierarchyValidEndDate` | ✓ | |  | `cast(hierarchyText.hryvalto as custhierarchyvalidityenddate preserving type )` | `DATS(8)` | Validity End Date |
| `CustUnivHierarchyValidStartDte` |  | |  | `cast(hierarchyText.hryvalfrom as custhierarchyvaliditystartdate preserving type )` | `DATS(8)` | Validity Start Date |
| `HierarchyType` |  | |  | `hrytyp` | `CHAR(4)` | Hierarchy Type |
| `CustomerUniversalHierarchyText` |  | |  | `hrytxt` | `CHAR(50)` | Hierarchy description |
| `_CustUnivHierarchy` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustUnivHierarchy` | `I_CustUnivHierarchy` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTUNIVHIERARCHYTEXT_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTUNIVHIERARCHYTEXT_2')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Customer Univ Hierarchy Header - Text'
@Metadata.ignorePropagatedAnnotations: true
@Analytics: {
  dataExtraction: {
    enabled: true
   }
}
@ObjectModel: {
  usageType:{
    serviceQuality: #X,
    sizeCategory: #S,
    dataClass: #MIXED
    },
    dataCategory : #TEXT
}
@Analytics.technicalName: 'ICUSTUH_T'
@ObjectModel.representativeKey : 'UniversalHierarchy'
@ObjectModel.supportedCapabilities: [#EXTRACTION_DATA_SOURCE ]
@VDM.viewType: #BASIC
define view entity I_CustUnivHierarchyText_2 as select from hrrp_dirt_n as hierarchyText
  association [0..1] to I_CustUnivHierarchy as _CustUnivHierarchy on  $projection.UniversalHierarchy            = _CustUnivHierarchy.UniversalHierarchy
                                                                  and $projection.HierarchyType                 = _CustUnivHierarchy.HierarchyType
                                                                  and $projection.CustUnivHierarchyValidEndDate = _CustUnivHierarchy.CustUnivHierarchyValidEndDate
  association [0..1] to I_Language          as _Language          on  $projection.Language = _Language.Language
{
      @Semantics.language: true
  key hierarchyText.spras                                                               as Language,
  
  key hierarchyText.hryid                                                               as UniversalHierarchy,
      @Semantics.businessDate.to: true
  key cast(hierarchyText.hryvalto as custhierarchyvalidityenddate preserving type )     as CustUnivHierarchyValidEndDate,
      @Semantics.businessDate.from: true
      cast(hierarchyText.hryvalfrom as custhierarchyvaliditystartdate preserving type ) as CustUnivHierarchyValidStartDte,
     // @ObjectModel.foreignKey.association: '_CustUnivHierarchy'
       hierarchyText.hrytyp                                                              as HierarchyType,
  
      @Semantics.text:true
      hierarchyText.hrytxt                                                              as CustomerUniversalHierarchyText,

      _Language,
      _CustUnivHierarchy
}

where
     hierarchyText.hrytyp = 'CH02'
  or hierarchyText.hrytyp = 'CH01'
```
