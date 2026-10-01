---
name: I_REVENUEGROWTHPROMOTIONVH
description: "Revenue Growth Management Promotion"
app_component: IS-RGM-PP
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REVENUEGROWTHPROMOTIONVH')/$value
semantic_en: "Revenue Growth Management Promotion"
semantic_vi: "Revenue Growth Management Promotion — CDS view giao diện (transactional data) dựa trên P_RevenueGrowthPromotion."
keywords:
  - "revenue"
  - "growth"
  - "management"
  - "promotion"
  - "revn"
  - "mgmt"
  - "name"
  - "sales"
  - "organization"
  - "distribution"
  - "channel"
tags:
  - IS
  - component:IS-RGM-PP
  - interface-view
  - IS-RGM
  - IS-RGM-PP
---
# I_REVENUEGROWTHPROMOTIONVH

**Revenue Growth Management Promotion**

| Property | Value |
|---|---|
| App Component | `IS-RGM-PP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REVENUEGROWTHPROMOTIONVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RevnGrowthMgmtPromotionUUID` | ✓ | |  |  | `RAW(16)` | Promotion UUID |
| `RevnGrowthMgmtPromotionID` |  | |  |  | `CHAR(16)` | Promotion ID |
| `RevnGrowthMgmtPromotionName` |  | |  |  | `CHAR(255)` | Promotion Name |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `Customer` |  | | `_PromnCustAssgmt` | `Customer` | `CHAR(10)` | Customer Number |
| `StartDate` |  | | `_PromnDuration` | `StartDate` | `DATS(8)` | Valid-From Date |
| `EndDate` |  | | `_PromnDuration` | `EndDate` | `DATS(8)` | Valid To Date |
| `_PromnCustAssgmt` | | ✓ | | | | |
| `_PromnTrdSpndAssgmt` | | ✓ | | | | |
| `_PromnDuration` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PromnCustAssgmt` | `I_RevnGrowthPromnCustAssgmt` | [0..*] |
| `_PromnTrdSpndAssgmt` | `I_RevnGrowthPromnTrdSpndAssgmt` | [0..*] |
| `_PromnDuration` | `I_RevnGrowthPromotionDuration` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REVENUEGROWTHPROMOTIONVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REVENUEGROWTHPROMOTIONVH')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Revenue Growth Management Promotion'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  dataCategory:#VALUE_HELP,
  usageType:{
    serviceQuality: #B,
    sizeCategory: #L,
    dataClass: #TRANSACTIONAL
  },
  semanticKey: ['RevnGrowthMgmtPromotionUUID'],
  representativeKey:'RevnGrowthMgmtPromotionUUID',
  supportedCapabilities:[#VALUE_HELP_PROVIDER]
}
@Search.searchable: true
@Consumption.ranked: true
@UI.presentationVariant: [{sortOrder: [{ by: 'RevnGrowthMgmtPromotionID', direction: #ASC }]}]
@VDM.viewType: #BASIC


define view entity I_RevenueGrowthPromotionVH
  as select from P_RevenueGrowthPromotion
  association [0..*] to I_RevnGrowthPromnCustAssgmt    as _PromnCustAssgmt    on  $projection.RevnGrowthMgmtPromotionUUID = _PromnCustAssgmt.RevnGrowthMgmtPromotionUUID
  association [0..*] to I_RevnGrowthPromnTrdSpndAssgmt as _PromnTrdSpndAssgmt on  $projection.RevnGrowthMgmtPromotionUUID = _PromnTrdSpndAssgmt.RevnGrowthMgmtPromotionUUID
  association [0..*] to I_RevnGrowthPromotionDuration  as _PromnDuration      on  $projection.RevnGrowthMgmtPromotionUUID    = _PromnDuration.RevnGrowthMgmtPromotionUUID
                                                                              and _PromnDuration.RevnGrowthMgmtPromnDurnType = 'SELLIN'
{
      @UI.hidden: true
  key RevnGrowthMgmtPromotionUUID,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.element: [ 'RevnGrowthMgmtPromotionName' ]
      RevnGrowthMgmtPromotionID,
      @Search.defaultSearchElement : true
      @Search.fuzzinessThreshold: 0.8
      @Semantics.text:true
      RevnGrowthMgmtPromotionName,

      //Sales Area
      @Search.defaultSearchElement : true
      SalesOrganization,
      @Search.defaultSearchElement : true
      DistributionChannel,
      @Search.defaultSearchElement : true
      Division,

      @Search.defaultSearchElement : true
      _PromnCustAssgmt.Customer,
      @Search.defaultSearchElement : true
      _PromnDuration.StartDate,
      @Search.defaultSearchElement : true
      _PromnDuration.EndDate,

      //Association
      _PromnCustAssgmt,
      _PromnTrdSpndAssgmt,
      _PromnDuration


}
```
