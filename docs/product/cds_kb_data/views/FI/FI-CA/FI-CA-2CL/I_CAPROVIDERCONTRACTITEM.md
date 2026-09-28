---
name: I_CAPROVIDERCONTRACTITEM
description: "Caprovidercontractitem"
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
# I_CAPROVIDERCONTRACTITEM

**Caprovidercontractitem**

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
| `CAProviderContract` | ✓ | |  | `ProviderContract` | `CHAR(20)` | Identification of a Provider Contract |
| `CAProviderContractItemNumber` | ✓ | |  | `ProviderContractItem` | `NUMC(6)` | Contract: Item Number |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Creation Time |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Last Changed At |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `CAProviderContractItemUUID` |  | |  |  | `RAW(16)` | External GUID of Provider Contract Items |
| `CAPrvdrContrParentItemUUID` |  | |  |  | `RAW(16)` | External GUID of Higher-Level Provider Contract Items |
| `CAPrvdrContrItmValidFromDteTme` |  | |  |  | `DEC(15)` | Valid From (Time Stamp) |
| `CAPrvdrContrItmValidToDateTime` |  | |  |  | `DEC(15)` | Valid To (Time Stamp) |
| `CAPrvdrContrItemCanclnDateTime` |  | |  |  | `DEC(15)` | Time of Reversal (Time Stamp) |
| `PrvdrContrItmWthdrwlDateTime` |  | |  |  | `DEC(15)` | Withdrawn On (Timestamp) |
| `CAProviderContractStatus` |  | |  |  | `CHAR(1)` | Status of Provider Contract |
| `CAProviderContractItemText` |  | |  |  | `CHAR(50)` | Text for Provider Contract Item |
| `ContractAccount` |  | |  |  | `CHAR(12)` | Contract Account Number |
| `CAPrepaidAccount` |  | |  |  | `CHAR(12)` | Prepaid Account |
| `CATechnicalResourceGroup` |  | |  |  | `NUMC(6)` | Group of IDs |
| `CAServiceRecipient` |  | |  |  | `CHAR(10)` | Recipient of Service |
| `CAAddressIDOfServiceRecipient` |  | |  |  | `CHAR(10)` | Address Number for Recipient of the Service |
| `PrvdrContrItmCorrespncRcpnt` |  | |  |  | `CHAR(10)` | Correspondence Recipient in Provider Contract Item |
| `AddrIDOfCorrespncRcpnt` |  | |  |  | `CHAR(10)` | Standard Address No. of Alternative Correspondence Recipient |
| `CAProduct` |  | |  |  | `CHAR(40)` | Product Number |
| `ProductConfiguration` |  | |  |  | `NUMC(18)` | Configuration Instance |
| `CASalesPackageProduct` |  | |  |  | `CHAR(40)` | Product ID of the Sales Package |
| `CAMasterAgreement` |  | |  |  | `CHAR(10)` | Identification of Master Agreement |
| `CAMasterAgreementProduct` |  | |  |  | `CHAR(40)` | Custom Product or Product Range |
| `CAPartnerSettlementRule` |  | |  |  | `CHAR(4)` | Partner Settlement Rule |
| `CASharingContract` |  | |  |  | `CHAR(20)` | Reference to Sharing Contract |
| `TaxJurisdiction` |  | |  |  | `CHAR(15)` | Jurisdiction for Tax Calculation - Tax Jurisdiction Code |
| `CAReceivingCountry` |  | |  |  | `CHAR(3)` | Destination Country/Region (for Tax Reports) |
| `TaxCountry` |  | |  |  | `CHAR(3)` | Tax Reporting Country/Region |
| `CASubscriptionChargeType` |  | |  |  | `CHAR(2)` | Charge Type |
| `CAProviderContractQuantity` |  | |  |  | `QUAN(18)` | Quantity |
| `CAProviderContractQuantityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure |
| `DistrSystOperatorBP` |  | |  |  | `CHAR(10)` | Distributor |
| `DistrSystOperatorMarketCommID` |  | |  |  | `CHAR(20)` | Distribution System Operator ID |
| `MeterOperatorBusinessPartner` |  | |  |  | `CHAR(10)` | Meter Operator |
| `MeterOperatorMarketCommID` |  | |  |  | `CHAR(20)` | Meter Operator ID |
| `MarketLocationIdentifier` |  | |  |  | `CHAR(35)` | Market Location |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order |
| `BusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Solution Order Item |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CAIntcoCompanyCodeSupplying` |  | |  |  | `CHAR(4)` | Supplying Company Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `CAPrvdrContrSalesAreaAttrib1` |  | |  |  | `CHAR(4)` | Contract: Sales Area Attribute 1 |
| `CAPrvdrContrSalesAreaAttrib2` |  | |  |  | `CHAR(4)` | Contract: Sales Area Attribute 2 |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `InternalOrder` |  | |  |  | `CHAR(12)` | Order Number |
| `CAStandardDivision` |  | |  |  | `CHAR(2)` | Contract: Standard Division |
| `PrvdrContrItmIsRlvtForPrfSgDrv` |  | |  |  | `CHAR(1)` | Acct Assgmnt of Individual Contracts f. Provider Contracts |
| `CABillgCycle` |  | |  |  | `CHAR(4)` | Billing Cycle |
| `CALastDayOfBillingPeriod` |  | |  |  | `CHAR(2)` | Day of Period End |
| `CABillgCyclePeriodStartDate` |  | |  |  | `DATS(8)` | Contract: Date of Original Start of Period |
| `CAInvcgSchedule` |  | |  |  | `CHAR(4)` | Selection Characteristic for Scheduling |
| `CARatingArea` |  | |  |  | `CHAR(4)` | Rating Area |
| `CABillgPlnNumber` |  | |  |  | `NUMC(12)` | Billing Plan Number |
| `CAConsumptionBillgSoldToParty` |  | |  |  | `CHAR(10)` | Sold-To Party |
| `CAConsumptionBillgInvoiceRcpnt` |  | |  |  | `CHAR(10)` | Invoice Recipient |
| `ConsumptionBillingPaymentTerms` |  | |  |  | `CHAR(4)` | Key for Terms of Payment |
| `CnsmpnBillgBillableControl` |  | |  |  | `CHAR(2)` | Accounting Indicator |
| `ConsumptionBillingSEPAMandate` |  | |  |  | `CHAR(35)` | Unique Reference to Mandate for each Payee |
| `CAConsumptionBillgPaymentCard` |  | |  |  | `CHAR(6)` | Payment Card ID for Payments |
| `CAIsRevenueAccountingRelevant` |  | |  |  | `CHAR(1)` | Relevant for Revenue Accounting |
| `CARevenueAcctgMigrationPackage` |  | |  |  | `CHAR(4)` | Migration Package ID |
| `RevenueAccountingRefType` |  | |  |  | `CHAR(3)` | Reference Type for Revenue Accounting |
| `CARevenueAccountingRefType` |  | |  |  | `CHAR(3)` | Reference Type for Revenue Accounting |
| `RevenueAccountingReference` |  | |  |  | `CHAR(30)` | Reference ID for Revenue Accounting |
| `CARevenueAcctgDocumentItem` |  | |  |  | `CHAR(20)` | Revenue Accounting Item ID |
| `TransactionPriceCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `TransactionPrice` |  | |  |  | `CURR(13)` | Transaction Price for Each Recurrence Period |
| `TotalTransactionPrice` |  | |  |  | `CURR(13)` | Total Transaction Price |
| `TransacPriceRcrrcPerdTimeUnit` |  | |  |  | `CHAR(12)` | Time Unit for Recurrence Period |
| `TransacPriceRcrrcPerdDuration` |  | |  |  | `DEC(13)` | Length of Recurrence Period |
| `StandAloneSellingPriceCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `StandAloneSellingPrice` |  | |  |  | `CURR(13)` | Standalone Selling Price for Each Recurrence Period |
| `TotalStandAloneSellingPrice` |  | |  |  | `CURR(13)` | Total Standalone Selling Price |
| `SSPriceRecurrencePerdTimeUnit` |  | |  |  | `CHAR(12)` | Time Unit for Recurrence Period |
| `SSPriceRecurrencePerdDuration` |  | |  |  | `DEC(13)` | Length of Recurrence Period |
| `CAPrvdrContrItmChgReason` |  | |  |  | `CHAR(2)` | Change Reason |
| `CAStartOfDurationDateTime` |  | |  |  | `DEC(15)` | Contract Term Start (Time Stamp) |
| `CAEndOfDurationDateTime` |  | |  |  | `DEC(15)` | End of Contract Duration (Time Stamp) |
| `CARevnAcctgRecrrgServiceType` |  | |  |  | `CHAR(6)` | Service Type |
| `CARevnAcctgTransfRecordOrigin` |  | |  |  | `CHAR(1)` | Type of Origin for Transfer Record |
| `CAOriginOfPaymentMasterData` |  | |  |  | `CHAR(1)` | Determination of Payment Data |
| `PaymentCondition` |  | |  |  | `CHAR(4)` | Payment Condition |
| `CAPaymentMethodForIncgPayment` |  | |  |  | `CHAR(1)` | Incoming Payment Method |
| `CAAlternativePayer` |  | |  |  | `CHAR(10)` | Alternative Payer |
| `CAAddressIDOfAlternativePayer` |  | |  |  | `CHAR(10)` | Address Number for Alternative Payer |
| `CABankIDForIncomingPayments` |  | |  |  | `CHAR(4)` | Bank Details ID for Incoming Payments |
| `SEPAMandate` |  | |  |  | `CHAR(35)` | Unique Reference to Mandate for each Payee |
| `CAPaymentCardIDForIncomingPayt` |  | |  |  | `CHAR(6)` | Payment Card ID for Incoming Payments |
| `CAPaymentMethodForOutgPayment` |  | |  |  | `CHAR(5)` | Outgoing Payment Methods |
| `CAAlternativePayee` |  | |  |  | `CHAR(10)` | Alternative Payee |
| `CAAddressIDOfAlternativePayee` |  | |  |  | `CHAR(10)` | Address Number for Alternative Payee |
| `CABankIDForOutgoingPayments` |  | |  |  | `CHAR(4)` | Bank Details ID for Outgoing Payments |
| `CAPaymentCardIDForOutgoingPayt` |  | |  |  | `CHAR(6)` | Payment Card ID for Outgoing Payments |
| `CAKeyForPaymentCardSupplement` |  | |  |  | `RAW(16)` | Key for Payment Card Supplement |
| `CAOriginOfDunningMasterData` |  | |  |  | `CHAR(1)` | Dunning Control |
| `CADunningProcedure` |  | |  |  | `CHAR(2)` | Dunning Procedure |
| `CAServiceDisconncnIsProhibited` |  | |  |  | `CHAR(1)` | Disconnection of Service Not Permitted |
| `CACollectionStrategy` |  | |  |  | `CHAR(2)` | Collection Strategy |
| `CACollectionsMasterDataGroup` |  | |  |  | `CHAR(2)` | Collection Management: Master Data Group |
| `CACollectionsContactPerson` |  | |  |  | `CHAR(10)` | Collections Contact Person |
| `PurchaseOrderByCustomer` |  | |  |  | `CHAR(35)` | Customer Reference |
| `CustomerPurchaseOrderDate` |  | |  |  | `DATS(8)` | Customer Reference Date |
| `_PrvdrContr` | | ✓ | | | | |
| `_ProviderContractStatus` | | ✓ | | | | |
| `_ContrAcc` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_CASubscriptionChargeType` | | ✓ | | | | |
| `_CompCode` | | ✓ | | | | |
| `_CompCodeSup` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_BillgCycle` | | ✓ | | | | |
| `_InvcgSchedule` | | ✓ | | | | |
| `_CARatingArea` | | ✓ | | | | |
| `_BillgPln` | | ✓ | | | | |
| `_PrvdrContrItemChgReason` | | ✓ | | | | |
| `_CARevnAcctgServiceType` | | ✓ | | | | |
| `_CARevnAcctgTransfRecdOrigin` | | ✓ | | | | |
| `_CAPaymentMasterDataOrigin` | | ✓ | | | | |
| `_PaymentCondition` | | ✓ | | | | |
| `_CAPaymentMethod` | | ✓ | | | | |
| `_CADunningMasterDataOrigin` | | ✓ | | | | |
| `_CADunningProcedure` | | ✓ | | | | |
| `_CACollectionStrategy` | | ✓ | | | | |
| `_CACollMasterDataGroup` | | ✓ | | | | |
| `_CACollectionsContactPerson` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PrvdrContr` | `I_CAProviderContractHeader` | [1..1] |
| `_PCoExtension` | `E_CAProviderContractItem` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICAPRVDRCONTRI'

@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData: { blocking : #REQUIRED,
                                  blockingIndicator: ['_PrvdrContr._BusinessPartner.IsBusinessPurposeCompleted'] } }

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Provider Contract Item'

@Metadata: { allowExtensions: true,
             ignorePropagatedAnnotations: true }

@Analytics: { dataCategory: #DIMENSION,
              dataExtraction: { enabled: true,
                                delta.changeDataCapture.automatic: true },
              internalName: #LOCAL }

@ObjectModel: { representativeKey: 'CAProviderContractItemNumber',
                sapObjectNodeType.name: 'ContrAcctgProviderContractItem',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE,
                                         #CDS_MODELING_DATA_SOURCE ,
                                         #EXTRACTION_DATA_SOURCE,
                                         #ANALYTICAL_DIMENSION  ],
                usageType: { dataClass: #MASTER,
                             serviceQuality: #C,
                             sizeCategory: #XL } }

@VDM.viewType: #BASIC

define view I_CAProviderContractItem
  as select from I_ProviderContractItem
  association [1..1] to I_CAProviderContractHeader as _PrvdrContr   on  $projection.CAProviderContract = _PrvdrContr.CAProviderContract
  association [1..1] to E_CAProviderContractItem   as _PCoExtension on  $projection.CAProviderContract           = _PCoExtension.CAProviderContract
                                                                    and $projection.CAProviderContractItemNumber = _PCoExtension.CAProviderContractItemNumber
{
      @ObjectModel.foreignKey.association: '_PrvdrContr'
  key ProviderContract     as CAProviderContract,
  key ProviderContractItem as CAProviderContractItemNumber,

      //    administration data
      CreationDate,
      CreationTime,
      CreatedByUser,
      LastChangeDate,
      LastChangeTime,
      LastChangedByUser,

      //    General data
      CAProviderContractItemUUID,
      CAPrvdrContrParentItemUUID,
      CAPrvdrContrItmValidFromDteTme,
      CAPrvdrContrItmValidToDateTime,
      CAPrvdrContrItemCanclnDateTime,
      PrvdrContrItmWthdrwlDateTime,
      CAProviderContractStatus,
      CAProviderContractItemText,
      @ObjectModel.foreignKey.association: '_ContrAcc'
      ContractAccount,
      CAPrepaidAccount,
      CATechnicalResourceGroup,
      CAServiceRecipient,
      CAAddressIDOfServiceRecipient,
      PrvdrContrItmCorrespncRcpnt,
      AddrIDOfCorrespncRcpnt,
      CAProduct,
      ProductConfiguration,
      CASalesPackageProduct,
      CAMasterAgreement,
      CAMasterAgreementProduct,
      CAPartnerSettlementRule,
      CASharingContract,
      TaxJurisdiction,
      CAReceivingCountry,
      TaxCountry,
      CASubscriptionChargeType,

      @Semantics.quantity.unitOfMeasure: 'CAProviderContractQuantityUnit'
      CAProviderContractQuantity,
      @Semantics.unitOfMeasure: true
      CAProviderContractQuantityUnit,

      //    General data 2
      DistrSystOperatorBP,
      DistrSystOperatorMarketCommID,
      MeterOperatorBusinessPartner,
      MeterOperatorMarketCommID,
      MarketLocationIdentifier,

      //     Subscription Billing
      SoldProduct,
      BusinessSolutionOrder,
      BusinessSolutionOrderItem,

      //    Organizational data
      SalesOrganization,
      DistributionChannel,
      @ObjectModel.foreignKey.association: '_CompCode'
      CompanyCode,
      @ObjectModel.foreignKey.association: '_CompCodeSup'
      CAIntcoCompanyCodeSupplying,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      BusinessArea,
      @ObjectModel.foreignKey.association: '_Segment'
      Segment,
      //      @ObjectModel.foreignKey.association: '_ProfitCenter'
      ProfitCenter,
      @ObjectModel.foreignKey.association: '_Division'
      Division,
      CAPrvdrContrSalesAreaAttrib1,
      CAPrvdrContrSalesAreaAttrib2,
      //ps_psp_pnr                                                    as WBSElementInternalID,  //has conversion exit, not allowed anymore
      WBSElementInternalID,
      InternalOrder,
      CAStandardDivision,
      @Semantics.booleanIndicator
      PrvdrContrItmIsRlvtForPrfSgDrv,

      //    Billing and Ivoicing data
      @ObjectModel.foreignKey.association: '_BillgCycle'
      CABillgCycle,
      CALastDayOfBillingPeriod,
      CABillgCyclePeriodStartDate,
      @ObjectModel.foreignKey.association: '_InvcgSchedule'
      CAInvcgSchedule,
      CARatingArea,
      @ObjectModel.foreignKey.association: '_BillgPln'
      CABillgPlnNumber,
      //    Consumption Billing
      CAConsumptionBillgSoldToParty,
      CAConsumptionBillgInvoiceRcpnt,
      ConsumptionBillingPaymentTerms,
      CnsmpnBillgBillableControl,
      //cb_dzterm                                                     as PaymentTerms,
      //cb_bemot                                                      as BillableControl,
      ConsumptionBillingSEPAMandate,
      CAConsumptionBillgPaymentCard,
      //cb_ccard_id                                                   as CAPaymentCard,

      //    Revenue Accounting data
      CAIsRevenueAccountingRelevant,
      CARevenueAcctgMigrationPackage,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'CARevenueAccountingRefType'
      RevenueAccountingRefType,
      CARevenueAccountingRefType,
      RevenueAccountingReference,
      CARevenueAcctgDocumentItem,
      @Semantics.currencyCode: true
      TransactionPriceCurrency,
      @Semantics.amount.currencyCode: 'TransactionPriceCurrency'
      TransactionPrice,
      @Semantics.amount.currencyCode: 'TransactionPriceCurrency'
      TotalTransactionPrice,
      TransacPriceRcrrcPerdTimeUnit,
      //      @Semantics.quantity.unitOfMeasure: 'TransacPriceRcrrcPerdTimeUnit'
      TransacPriceRcrrcPerdDuration,
      @Semantics.currencyCode: true
      StandAloneSellingPriceCurrency,
      @Semantics.amount.currencyCode: 'StandAloneSellingPriceCurrency'
      StandAloneSellingPrice,
      @Semantics.amount.currencyCode: 'StandAloneSellingPriceCurrency'
      TotalStandAloneSellingPrice,
      SSPriceRecurrencePerdTimeUnit,
      //      @Semantics.quantity.unitOfMeasure: 'SSPriceRecurrencePerdTimeUnit'
      SSPriceRecurrencePerdDuration,
      CAPrvdrContrItmChgReason,
      CAStartOfDurationDateTime,
      CAEndOfDurationDateTime,
      CARevnAcctgRecrrgServiceType,
      CARevnAcctgTransfRecordOrigin,

      //   Payment Data
      CAOriginOfPaymentMasterData,
      PaymentCondition,
      CAPaymentMethodForIncgPayment,
      CAAlternativePayer,
      CAAddressIDOfAlternativePayer,
      CABankIDForIncomingPayments,
      SEPAMandate,
      CAPaymentCardIDForIncomingPayt,
      CAPaymentMethodForOutgPayment,
      CAAlternativePayee,
      CAAddressIDOfAlternativePayee,
      CABankIDForOutgoingPayments,
      CAPaymentCardIDForOutgoingPayt,
      CAKeyForPaymentCardSupplement,

      //    Dunning Data
      CAOriginOfDunningMasterData,
      CADunningProcedure,
      CAServiceDisconncnIsProhibited,
      CACollectionStrategy,
      CACollectionsMasterDataGroup,
      CACollectionsContactPerson,

      //    PEPPOL
      PurchaseOrderByCustomer,
      CustomerPurchaseOrderDate,

      // associations
      _PrvdrContr,
      _ProviderContractStatus,
      _ContrAcc,
      _Country,
      _CASubscriptionChargeType,
      _CompCode,
      _CompCodeSup,
      _BusinessArea,
      _Segment,
      _Division,
      _BillgCycle,
      _InvcgSchedule,
      _CARatingArea,
      _BillgPln,
      _PrvdrContrItemChgReason,
      _CARevnAcctgServiceType,
      _CARevnAcctgTransfRecdOrigin,
      _CAPaymentMasterDataOrigin,
      _PaymentCondition,
      _CAPaymentMethod,
      _CADunningMasterDataOrigin,
      _CADunningProcedure,
      _CACollectionStrategy,
      _CACollMasterDataGroup,
      _CACollectionsContactPerson
}
```
