---
name: I_BUSSOLNORDITEMLONGTEXTTP
description: "Bussolnorditemlongtexttp"
semantic_vi: "Chứa dữ liệu văn bản dài cho các mặt hàng giải pháp kinh doanh, cung cấp thông tin về các đối tượng văn bản, ngôn ngữ và loại MIME. View này được sử dụng cho xử lý giao dịch và quản lý văn bản tại mức mặt hàng trong CRM-S4-SOL-SLO."
keywords:
  - "business solution order item"
  - "long text"
  - "text object"
  - "language"
  - "mime type"
  - "transactional processing"
  - "item-level"
  - "crm-s4-sol-slo"
  - "đối tượng văn bản"
  - "loại mime"
  - "quản lý văn bản"
  - "giải pháp kinh doanh"
semantic_en: "Exposes long text data for business solution order items, providing information on text objects, languages, and mime types. This view is used for transactional processing and item-level text management in CRM-S4-SOL-SLO."
app_component: CRM-S4-SOL-SLO
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - text
  - item-level
  - component:CRM-S4-SOL-SLO
  - lob:Other
---
# I_BUSSOLNORDITEMLONGTEXTTP

**Bussolnorditemlongtexttp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SOL-SLO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessSolutionOrder` | ✓ | |  |  |  |  |
| `BusinessSolutionOrderItem` | ✓ | |  |  |  |  |
| `TextObjectType` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `SrvcDocLogTextIdentifier` |  | |  |  |  |  |
| `TextObjectCategory` |  | |  |  |  |  |
| `SrvcDocLongTextMimeType` |  | |  |  |  |  |
| `BusSolnOrdItmLongText` |  | |  |  |  |  |
| `_BusinessSolutionOrderItemTP` | | ✓ | | | | |
| `_BusinessSolutionOrderTP` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck:    #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@ObjectModel: {
  dataCategory: #TEXT,
  usageType:{
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory:   #L
  }
}

@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@EndUserText.label: 'Business Solution Order Item Long Text - TP'

define view entity I_BusSolnOrdItemLongTextTP
  as projection on R_BusSolnOrdItemLongTextTP
{
  key BusinessSolutionOrder,
  key BusinessSolutionOrderItem,
  key TextObjectType,
      @Semantics.language:true
  key Language,
  
      SrvcDocLogTextIdentifier,
      TextObjectCategory,
      SrvcDocLongTextMimeType,

      @Semantics.text: true
      @EndUserText.label: 'Solution Order Item Long Text'
      BusSolnOrdItmLongText,

      /* Associations */
      _BusinessSolutionOrderItemTP : redirected to parent I_BusinessSolutionOrderItemTP,
      _BusinessSolutionOrderTP     : redirected to I_BusinessSolutionOrderTP
}
```
