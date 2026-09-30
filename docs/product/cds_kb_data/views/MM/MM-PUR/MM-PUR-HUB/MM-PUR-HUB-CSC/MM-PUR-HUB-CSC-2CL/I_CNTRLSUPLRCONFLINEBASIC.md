---
name: I_CNTRLSUPLRCONFLINEBASIC
description: "This CDS view provides access to central supplier confirmation line data. It represents the detailed line-level information for supplier confirmations, including delivery dates, confirmed quantities, and performance periods. This CDS view provides the data to answer the following business questions: What are the confirmed delivery dates and quantities for a specific supplier confirmation? Which supplier confirmation lines have specific delivery date categories? What is the performance period for a given supplier confirmation line? What are the expected overall limit amounts for supplier confirmation lines? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: MM-PUR-HUB-CSC-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNTRLSUPLRCONFLINEBASIC')/$value
semantic_en: "This CDS view provides access to central supplier confirmation line data. It represents the detailed line-level information for supplier confirmations, including delivery dates, confirmed quantities, and performance periods. This CDS view provides the data to answer the following business questions: What are the confirmed delivery dates and quantities for a specific supplier confirmation? Which supplier confirmation lines have specific delivery date categories? What is the performance period for a given supplier confirmation line? What are the expected overall limit amounts for supplier confirmation lines? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Line in Central Supplier Confirmation — CDS view giao diện dựa trên R_CntrlSupplierConfLine."
keywords:
  - "line"
  - "central"
  - "supplier"
  - "confirmation"
  - "conf"
  - "suplr"
  - "unique"
  - "procurement"
  - "source"
  - "system"
tags:
  - MM
  - bo:companycode
  - component:MM-PUR-HUB-CSC-2CL
  - delivery
  - interface-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-HUB
  - MM-PUR-HUB-CSC
  - MM-PUR-HUB-CSC-2CL
  - supplier
---
# I_CNTRLSUPLRCONFLINEBASIC

**This CDS view provides access to central supplier confirmation line data. It represents the detailed line-level information for supplier confirmations, including delivery dates, confirmed quantities, and performance periods. This CDS view provides the data to answer the following business questions: What are the confirmed delivery dates and quantities for a specific supplier confirmation? Which supplier confirmation lines have specific delivery date categories? What is the performance period for a given supplier confirmation line? What are the expected overall limit amounts for supplier confirmation lines? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-CSC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNTRLSUPLRCONFLINEBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralSupplierConfirmation` | ✓ | |  |  | `CHAR(10)` | Central supplier Confirmation Number |
| `CentralSupplierConfirmationItm` | ✓ | |  |  | `NUMC(5)` | Central Supplier Confirmation Item |
| `CentralSupplierConfLine` | ✓ | |  |  | `NUMC(4)` | Central Supplier Confirmation Line |
| `CentralSuplrConfLineUniqueID` |  | |  |  | `CHAR(19)` | Central Supplier Confirmation Line Unique ID |
| `ProcurementHubSourceSystem` |  | |  |  | `CHAR(10)` | Connected System ID |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | Change Time Stamp |
| `SuplrConfRefSequenceNumber` |  | |  |  | `NUMC(4)` | Reference Supplier Confirmation Sequence Number |
| `SupplierConfirmationCategory` |  | |  |  | `CHAR(2)` | Confirmation Category |
| `DeliveryDate` |  | |  |  | `DATS(8)` | Delivery Date of Supplier Confirmation |
| `DelivDateCategory` |  | |  |  | `CHAR(1)` | Date Category of Delivery Date in Supplier Confirmation |
| `DeliveryTime` |  | |  |  | `TIMS(6)` | Delivery Date Time-Spot in Supplier Confirmation |
| `ConfirmedQuantity` |  | |  |  | `QUAN(13)` | Quantity as Per Supplier Confirmation |
| `PurchaseOrderQuantityUnit` |  | |  |  | `UNIT(3)` | Purchase Order Unit of Measure |
| `SupplierConfirmationExtNumber` |  | |  |  | `CHAR(35)` | Reference Document Number (for Dependencies see Long Text) |
| `PerformancePeriodStartDate` |  | |  |  | `DATS(8)` | Start Date for Period of Performance |
| `PerformancePeriodEndDate` |  | |  |  | `DATS(8)` | End Date for Period of Performance |
| `ServicePerformer` |  | |  |  | `CHAR(10)` | Service Performer |
| `ExpectedOverallLimitAmount` |  | |  |  | `CURR(13)` | Expected Value of Overall Limit |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `ManufacturerMaterial` |  | |  |  | `CHAR(40)` | Material Number Corresponding to Manufacturer Part Number |
| `StockSegment` |  | |  |  | `CHAR(40)` | Stock Segment |
| `HandoverDate` |  | |  |  | `DATS(8)` | Handover Date at the Handover Location |
| `HandoverTime` |  | |  |  | `TIMS(6)` | Handover time at the handover location |
| `CSupConfExtRefLastChgdDteTme` |  | |  |  | `DEC(21)` | External Change Time Stamp |
| `_SupplierConfirmation` | | ✓ | | | | |
| `_SupplierConfirmationItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierConfirmation` | `I_CntrlSuplrConfBasic` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNTRLSUPLRCONFLINEBASIC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNTRLSUPLRCONFLINEBASIC')/$value)*

```abap
@EndUserText.label: 'Line in Central Supplier Confirmation'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@VDM.viewType : #BASIC
@AccessControl.authorizationCheck:#MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]

define view entity I_CntrlSuplrConfLineBasic
  as select from R_CntrlSupplierConfLine
  association to parent I_CntrlSuplrConfItemBasic as _SupplierConfirmationItem on  $projection.CentralSupplierConfirmation    = _SupplierConfirmationItem.CentralSupplierConfirmation
                                                                          and $projection.CentralSupplierConfirmationItm = _SupplierConfirmationItem.CentralSupplierConfirmationItm
  association to I_CntrlSuplrConfBasic            as _SupplierConfirmation     on  $projection.CentralSupplierConfirmation = _SupplierConfirmation.CentralSupplierConfirmation

{
  key CentralSupplierConfirmation,
  key CentralSupplierConfirmationItm,
  key CentralSupplierConfLine,
      CentralSuplrConfLineUniqueID,
      ProcurementHubSourceSystem,
      LastChangeDateTime,
      SuplrConfRefSequenceNumber,
      SupplierConfirmationCategory,
      DeliveryDate,
      DelivDateCategory,
      DeliveryTime,
      @Semantics.quantity.unitOfMeasure : 'PurchaseOrderQuantityUnit'
      ConfirmedQuantity,
      PurchaseOrderQuantityUnit,
      SupplierConfirmationExtNumber,
      PerformancePeriodStartDate,
      PerformancePeriodEndDate,
      ServicePerformer,
      @Semantics.amount.currencyCode : 'DocumentCurrency'
      ExpectedOverallLimitAmount,
      DocumentCurrency,
      ManufacturerMaterial,
      StockSegment,
      HandoverDate,
      HandoverTime,
      CSupConfExtRefLastChgdDteTme,
      /* Associations */
      _SupplierConfirmation,
      _SupplierConfirmationItem
}
```
