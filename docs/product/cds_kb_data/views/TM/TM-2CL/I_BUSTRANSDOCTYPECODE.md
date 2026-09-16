---
name: I_BUSTRANSDOCTYPECODE
description: "Bustransdoctypecode"
semantic_vi: "View Bustransdoctypecode hiển thị các loại tài liệu giao dịch kinh doanh, được sử dụng để phân loại và quản lý giao dịch trong hệ thống quản lý vận tải. Nó được sử dụng để truy xuất và thao tác các loại tài liệu này, chẳng hạn như khi tạo đơn vận chuyển hoặc khi xử lý hàng hóa."
keywords:
  - "transportation management"
  - "business transaction document type"
  - "đơn vận chuyển"
  - "tài liệu giao dịch kinh doanh"
  - "ekko"
  - "sap"
  - "cds view"
  - "transport order"
  - "shipment processing"
semantic_en: "The Bustransdoctypecode view exposes business transaction document types, which are used to categorize and manage transactions in a transportation management system. It is used to retrieve and manipulate these document types, such as in the creation of transportation orders or in the processing of shipments."
app_component: TM-2CL
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
  - TM
  - interface-view
  - component:TM-2CL
  - lob:Other
---
# I_BUSTRANSDOCTYPECODE

**Bustransdoctypecode**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
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
| `BusinessTransactionDocType` | ✓ | |  | `btd_tco129` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@EndUserText.label: 'Business Transaction Document Type Code'
@Analytics:     {dataCategory:       #DIMENSION,
                 dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@Analytics.technicalName: 'IBTDTYPECODE'
@ObjectModel:   {representativeKey:  'BusinessTransactionDocType',
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #M,
                                      dataClass:      #CUSTOMIZING},
                 modelingPattern:        #ANALYTICAL_DIMENSION,
                 supportedCapabilities:  [ #ANALYTICAL_DIMENSION,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #VALUE_HELP_PROVIDER,
                                           #SEARCHABLE_ENTITY]}
@VDM:           {viewType:           #BASIC}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Metadata:      {allowExtensions:    true,
                 ignorePropagatedAnnotations: true}
@ObjectModel.sapObjectNodeType.name: 'TranspBizTransacDocTypeCode'
define root view entity I_BusTransDocTypeCode
  as select from /scmtms/c_btdty
  /* Foreign Key and Text Associations */
  composition [0..*] of I_BusTransDocTypeCodeText as _Text
{
      @ObjectModel.text.association: '_Text'
  key btd_tco129 as BusinessTransactionDocType,
      _Text
}
```
