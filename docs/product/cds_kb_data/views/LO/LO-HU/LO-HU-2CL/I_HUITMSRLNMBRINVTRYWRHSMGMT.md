---
name: I_HUITMSRLNMBRINVTRYWRHSMGMT
description: "This CDS view retrieves serial numbers assigned to items within handling units in storage locations that are managed in Inventory Management or in Warehouse Management. It provides a structured way to track individual serialized materials at the handling unit item level. This CDS view provides the data to answer the following business questions: Which serial numbers are currently assigned to items in a specific handling unit? What materials and equipment are associated with serialized items in handling units? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-HU-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_HUITMSRLNMBRINVTRYWRHSMGMT')/$value
semantic_en: "This CDS view retrieves serial numbers assigned to items within handling units in storage locations that are managed in Inventory Management or in Warehouse Management. It provides a structured way to track individual serialized materials at the handling unit item level. This CDS view provides the data to answer the following business questions: Which serial numbers are currently assigned to items in a specific handling unit? What materials and equipment are associated with serialized items in handling units? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Handling Unit Itm SrlN Invtry Wrhs Mgmt — CDS view tổng hợp dựa trên I_HndlgUnitItemSrlNoCombined."
keywords:
  - "handling"
  - "unit"
  - "itm"
  - "srln"
  - "invtry"
  - "wrhs"
  - "mgmt"
  - "item"
  - "external"
  - "warehouse"
  - "stock"
  - "serial"
  - "number"
tags:
  - LO
  - bo:companycode
  - component:LO-HU-2CL
  - interface-view
  - inventory
  - LO-HU
  - LO-HU-2CL
  - lob:logistics general
  - material
---
# I_HUITMSRLNMBRINVTRYWRHSMGMT

**This CDS view retrieves serial numbers assigned to items within handling units in storage locations that are managed in Inventory Management or in Warehouse Management. It provides a structured way to track individual serialized materials at the handling unit item level. This CDS view provides the data to answer the following business questions: Which serial numbers are currently assigned to items in a specific handling unit? What materials and equipment are associated with serialized items in handling units? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-HU-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_HUITMSRLNMBRINVTRYWRHSMGMT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `HandlingUnitItem` | ✓ | |  |  | `NUMC(6)` | Handling Unit Item |
| `HandlingUnitExternalID` | ✓ | |  |  | `CHAR(20)` | External Handling Unit Identification |
| `Warehouse` | ✓ | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `StockItemUUID` | ✓ | |  |  | `RAW(16)` | GUID Stock Item |
| `SerialNumber` | ✓ | |  |  | `CHAR(18)` | Serial Number |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `HandlingUnitInternalID` |  | |  |  | `CHAR(10)` | Internal Handling Unit Number |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `_HandlingUnitHeader` | | ✓ | | | | |
| `_HandlingUnitItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_HandlingUnitHeader` | `I_HndlgUntHdrInvtryWrhsMgmt` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_HUITMSRLNMBRINVTRYWRHSMGMT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_HUITMSRLNMBRINVTRYWRHSMGMT')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@Metadata.ignorePropagatedAnnotations: true

@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #NOT_REQUIRED
}

@ObjectModel: {
    usageType: {
      dataClass:      #MIXED,
      serviceQuality: #C,
      sizeCategory:   #XL
    },
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
}

@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@EndUserText.label: 'Handling Unit Itm SrlN Invtry Wrhs Mgmt'

define view entity I_HUItmSrlNmbrInvtryWrhsMgmt
  as select from I_HndlgUnitItemSrlNoCombined

    inner join   I_HndlgUntItmInvtryWrhsMgmt on  I_HndlgUntItmInvtryWrhsMgmt.Warehouse              = I_HndlgUnitItemSrlNoCombined.Warehouse
                                             and I_HndlgUntItmInvtryWrhsMgmt.HandlingUnitExternalID = I_HndlgUnitItemSrlNoCombined.HandlingUnitExternalID
                                             and I_HndlgUntItmInvtryWrhsMgmt.StockItemUUID          = I_HndlgUnitItemSrlNoCombined.StockItemUUID
                                             and I_HndlgUntItmInvtryWrhsMgmt.HandlingUnitItem       = I_HndlgUnitItemSrlNoCombined.HandlingUnitItem

  association        to parent I_HndlgUntItmInvtryWrhsMgmt as _HandlingUnitItem   on  $projection.HandlingUnitExternalID = _HandlingUnitItem.HandlingUnitExternalID
                                                                                  and $projection.StockItemUUID          = _HandlingUnitItem.StockItemUUID
                                                                                  and $projection.Warehouse              = _HandlingUnitItem.Warehouse

  // association to HU Header needed for authorization check
  association [1..1] to I_HndlgUntHdrInvtryWrhsMgmt        as _HandlingUnitHeader on  $projection.HandlingUnitExternalID = _HandlingUnitHeader.HandlingUnitExternalID
                                                                                  and $projection.Warehouse              = _HandlingUnitHeader.Warehouse
{
  key I_HndlgUnitItemSrlNoCombined.HandlingUnitItem,
  key I_HndlgUntItmInvtryWrhsMgmt.HandlingUnitExternalID as HandlingUnitExternalID,
      @Environment.sql.passValue: true
  key I_HndlgUntItmInvtryWrhsMgmt.Warehouse              as Warehouse,
  key I_HndlgUntItmInvtryWrhsMgmt.StockItemUUID          as StockItemUUID,
  key I_HndlgUnitItemSrlNoCombined.SerialNumber,
      I_HndlgUnitItemSrlNoCombined.Equipment,
      I_HndlgUnitItemSrlNoCombined.HandlingUnitInternalID,
      I_HndlgUnitItemSrlNoCombined.Material,

      /* Associations */
      _HandlingUnitHeader,
      _HandlingUnitItem
}
```
