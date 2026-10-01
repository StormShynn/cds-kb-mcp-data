---
name: I_SLSBILLGPROVIDERCONTRACTITEM
description: "Slsbillgprovidercontractitem"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - contract
  - item-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_SLSBILLGPROVIDERCONTRACTITEM

**Slsbillgprovidercontractitem**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesBillingProviderContract` | ✓ | |  | `ProviderContract` | `CHAR(20)` | Identification of a Provider Contract |
| `SlsBillgProviderContractItem` | ✓ | |  | `ProviderContractItem` | `NUMC(6)` | Contract: Item Number |
| `CAProviderContractItemUUID` |  | |  |  | `RAW(16)` | External GUID of Provider Contract Items |
| `CAPrvdrContrParentItemUUID` |  | |  |  | `RAW(16)` | External GUID of Higher-Level Provider Contract Items |
| `CAProviderContractStatus` |  | |  |  | `CHAR(1)` | Status of Provider Contract |
| `CAProviderContractItemText` |  | |  |  | `CHAR(50)` | Text for Provider Contract Item |
| `CASubscriptionChargeType` |  | |  |  | `CHAR(2)` | Charge Type |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Creation Time |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Last Changed At |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `CAPrvdrContrItmValidFromDteTme` |  | |  |  | `DEC(15)` | Valid From (Time Stamp) |
| `CAPrvdrContrItmValidToDateTime` |  | |  |  | `DEC(15)` | Valid To (Time Stamp) |
| `CAPrvdrContrItemCanclnDateTime` |  | |  |  | `DEC(15)` | Time of Reversal (Time Stamp) |
| `PrvdrContrItmWthdrwlDateTime` |  | |  |  | `DEC(15)` | Withdrawn On (Timestamp) |
| `CAStartOfDurationDateTime` |  | |  |  | `DEC(15)` | Contract Term Start (Time Stamp) |
| `CAEndOfDurationDateTime` |  | |  |  | `DEC(15)` | End of Contract Duration (Time Stamp) |
| `CAProduct` |  | |  |  | `CHAR(40)` | Product Number |
| `ProductConfiguration` |  | |  |  | `NUMC(18)` | Configuration Instance |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `PurchaseOrderByCustomer` |  | |  |  | `CHAR(35)` | Customer Reference |
| `CustomerPurchaseOrderDate` |  | |  |  | `DATS(8)` | Customer Reference Date |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order |
| `BusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Solution Order Item |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `CAPrvdrContrSalesAreaAttrib1` |  | |  |  | `CHAR(4)` | Contract: Sales Area Attribute 1 |
| `CAPrvdrContrSalesAreaAttrib2` |  | |  |  | `CHAR(4)` | Contract: Sales Area Attribute 2 |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CAStandardDivision` |  | |  |  | `CHAR(2)` | Contract: Standard Division |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `InternalOrder` |  | |  |  | `CHAR(12)` | Order Number |
| `EBRRResultAnalysisInternalID` |  | |  |  | `CHAR(6)` | Recognition key |
| `EBRRIsBundleActive` |  | |  |  | `CHAR(1)` | Bundling Indicator |
| `_PrvdrContr` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_CompCode` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PrvdrContr` | `I_SalesBillingProviderContract` | [1] |
| `_Product` | `I_Product` | [0..1] |
| `_PCoExtension` | `E_CAProviderContractItem` | [1..1] |

## Source Code

```abap
/*@AbapCatalog.viewEnhancementCategory: [#NONE]*/

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking : #REQUIRED


@EndUserText.label: 'Sales Billing Provider Contract Item'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MASTER

@Analytics.technicalName: 'ISlsBlgPrvCtrItm'
@ObjectModel.modelingPattern: #NONE

@VDM.viewType: #COMPOSITE

define view entity I_SlsBillgProviderContractItem
  as select from I_ProviderContractItem as _SlsBillgProviderContractItem
  association [1]    to I_SalesBillingProviderContract as _PrvdrContr   on  $projection.SalesBillingProviderContract = _PrvdrContr.SalesBillingProviderContract
  association [0..1] to I_Product                      as _Product      on  $projection.CAProduct = _Product.Product
  association [1..1] to E_CAProviderContractItem       as _PCoExtension on  $projection.SalesBillingProviderContract = _PCoExtension.CAProviderContract
                                                                        and $projection.SlsBillgProviderContractItem = _PCoExtension.CAProviderContractItemNumber
{
      @ObjectModel.foreignKey.association: '_PrvdrContr'
  key ProviderContract     as SalesBillingProviderContract,

  key ProviderContractItem as SlsBillgProviderContractItem,

      /* General Data */
      CAProviderContractItemUUID,
      CAPrvdrContrParentItemUUID,
      CAProviderContractStatus,
      CAProviderContractItemText,
      CASubscriptionChargeType,

      /*-- Administrative Data */
      CreationDate,
      CreationTime,
      CreatedByUser,
      LastChangeDate,
      LastChangeTime,
      LastChangedByUser,

      /*-- Timestamps */
      /*---- Validity */
      CAPrvdrContrItmValidFromDteTme,
      CAPrvdrContrItmValidToDateTime,
      /*---- Cancellation */
      CAPrvdrContrItemCanclnDateTime,
      /*---- Withdrawal */
      PrvdrContrItmWthdrwlDateTime,
      /*---- Duration */
      CAStartOfDurationDateTime,
      CAEndOfDurationDateTime,

      /* Product Information */
      CAProduct,
      ProductConfiguration,
      SoldProduct,

      /*  Customer References (PEPPOL) */
      PurchaseOrderByCustomer,
      CustomerPurchaseOrderDate,

      /* Solution Order */
      BusinessSolutionOrder,
      BusinessSolutionOrderItem,

      /* Organizational Data */
      SalesOrganization,
      DistributionChannel,
      Division,
      CAPrvdrContrSalesAreaAttrib1,
      CAPrvdrContrSalesAreaAttrib2,

      /* Derived Account Assigments */
      CompanyCode,
      BusinessArea,
      Segment,
      ProfitCenter,
      CAStandardDivision,

      /* Other Account Assigments */
      WBSElementInternalID,
      InternalOrder,

      /* Revenue Recognition */
      EBRRResultAnalysisInternalID,
      EBRRIsBundleActive,

      /* Associations */
      _BusinessArea,
      _CompCode,
      _Division,
      _PrvdrContr,
      _Segment,
      _Product
}
where
  _SlsBillgProviderContractItem._PrvdrContr.CAProviderContractCategory = '1'
```
