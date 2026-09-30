---
name: I_IN_SUBCONTRGDOCDET_2
description: "India Subcontracting Document Detail"
app_component: FI-LOC-LO-IN
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_SUBCONTRGDOCDET_2')/$value
semantic_en: "India Subcontracting Document Detail"
semantic_vi: "India Subcontracting Document Detail — CDS view giao diện dựa trên j_1ig_subcon."
keywords:
  - "india"
  - "subcontracting"
  - "document"
  - "detail"
  - "purg"
  - "company"
  - "code"
  - "material"
  - "year"
  - "item"
  - "sequence"
  - "number"
tags:
  - FI
  - component:FI-LOC-LO-IN
  - contract
  - document
  - FI-LOC
  - FI-LOC-LO
  - FI-LOC-LO-IN
  - interface-view
  - lob:finance
  - lob:logistics general
---
# I_IN_SUBCONTRGDOCDET_2

**India Subcontracting Document Detail**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-IN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_SUBCONTRGDOCDET_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurgOrgCompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `MaterialDocument` | ✓ | |  | `mblnr` | `CHAR(10)` | Number of Material Document |
| `MaterialDocumentYear` | ✓ | |  | `mjahr` | `NUMC(4)` | Material Document Year |
| `MaterialDocumentItem` | ✓ | |  | `zeile` | `NUMC(4)` | Item in Material Document |
| `IN_SequenceNumber` | ✓ | |  | `seq_no` | `NUMC(4)` | Sequence number |
| `IN_SubcontrgDocNmbr` | ✓ | |  | `chln_inv` | `CHAR(10)` | Challan Number or Invoice Number for Subcontracting |
| `IN_SubcontractingDocumentItem` | ✓ | |  | `item` | `NUMC(6)` | Challan Item or Invoice Item for Subcontracting |
| `IN_NewSequenceNumber` | ✓ | |  | `seq_no_new` | `NUMC(20)` | New Sequence Number |
| `MaterialDocPostgDate` |  | |  | `budat` | `DATS(8)` | Posting Date in the Document |
| `GoodsMovementType` |  | |  | `bwart` | `CHAR(3)` | Movement Type (Inventory Management) |
| `Plant` |  | |  | `werks` | `CHAR(4)` | Plant |
| `QuantityInBaseUnit` |  | |  | `menge` | `QUAN(13)` | Quantity |
| `IN_GRItemRemainingQuantity` |  | |  | `gr_rqty` | `QUAN(13)` | GR Remaining Quantity |
| `BaseUnit` |  | |  | `meins` | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  | `ch_qty` | `QUAN(13)` | Quantity |
| `IN_ChallanItemOpenQuantity` |  | |  | `ch_oqty` | `QUAN(13)` | Challan Quantity Open for Reconciliation |
| `Material` |  | |  | `matnr` | `CHAR(40)` | Material Number |
| `ActiveSupplier` |  | |  | `lifnr` | `CHAR(10)` | Account Number of Supplier |
| `IN_SubcontrgItmRcnldQty` |  | |  | `rec_qty` | `QUAN(13)` | Challan Reconciled Quantity |
| `QuantityUnit` |  | |  | `rec_meins` | `UNIT(3)` | Base Unit of Measure |
| `IN_ChallanItemStatus` |  | |  | `status` | `CHAR(1)` | Subcontracting Status |
| `IssgOrRcvgStkIdfgSpclStkType` |  | |  | `sobkz` | `CHAR(1)` | Special Stock Indicator |
| `Batch` |  | |  | `charg` | `CHAR(10)` | Batch Number |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Supplier` | `I_Supplier` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_SUBCONTRGDOCDET_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_SUBCONTRGDOCDET_2')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:
   [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]

@ObjectModel.usageType: {
sizeCategory: #L,
serviceQuality: #C,
dataClass: #MIXED }
@VDM.viewType: #BASIC
@EndUserText.label: 'India Subcontracting Document Detail'

define view entity I_IN_SubcontrgDocDet_2 
as select from j_1ig_subcon as _SubcontrgDoc
association [0..1] to I_Supplier as _Supplier on _SubcontrgDoc.lifnr = _Supplier.Supplier
{
key bukrs as PurgOrgCompanyCode,
key mblnr as MaterialDocument,
key mjahr as MaterialDocumentYear,
key zeile as MaterialDocumentItem,
key seq_no as IN_SequenceNumber,
key chln_inv as IN_SubcontrgDocNmbr,
key item as IN_SubcontractingDocumentItem,
key seq_no_new as IN_NewSequenceNumber,
budat as MaterialDocPostgDate,
bwart as GoodsMovementType,
werks as Plant,
@Semantics.quantity.unitOfMeasure:'BaseUnit'
menge as QuantityInBaseUnit,
@Semantics.quantity.unitOfMeasure:'BaseUnit'
gr_rqty as IN_GRItemRemainingQuantity,
meins as BaseUnit,
@Semantics.quantity.unitOfMeasure:'BaseUnit'
ch_qty as Quantity,
@Semantics.quantity.unitOfMeasure:'BaseUnit'
ch_oqty as IN_ChallanItemOpenQuantity,
matnr as Material,
lifnr as ActiveSupplier,
@Semantics.quantity.unitOfMeasure:'QuantityUnit'
rec_qty as IN_SubcontrgItmRcnldQty,
rec_meins as QuantityUnit,
status as IN_ChallanItemStatus,
sobkz as IssgOrRcvgStkIdfgSpclStkType,
charg as Batch
}
where
(
_SubcontrgDoc.lifnr <> ' '
and _Supplier.IsBusinessPurposeCompleted <> 'X'
)
```
