---
name: I_PROVIDERCONTRACTITEM
description: "Providercontractitem"
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
# I_PROVIDERCONTRACTITEM

**Providercontractitem**

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
| `ProviderContract` | ✓ | |  | `vtkey` | `CHAR(20)` | Identification of a Provider Contract |
| `ProviderContractItem` | ✓ | |  | `vtpos` | `NUMC(6)` | Contract: Item Number |
| `CreationDate` |  | |  | `erdat` | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  | `cast(ertim as ttet_dt_cr_time preserving type )` | `TIMS(6)` | Creation Time |
| `CreatedByUser` |  | |  | `ernam` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `LastChangeDate` |  | |  | `aedat` | `DATS(8)` | Last Changed On |
| `LastChangeTime` |  | |  | `aetim` | `TIMS(6)` | Last Changed At |
| `LastChangedByUser` |  | |  | `aenam` | `CHAR(12)` | Name of Person Who Changed Object |
| `CAProviderContractItemUUID` |  | |  | `vtpid` | `RAW(16)` | External GUID of Provider Contract Items |
| `CAPrvdrContrParentItemUUID` |  | |  | `papid` | `RAW(16)` | External GUID of Higher-Level Provider Contract Items |
| `CAPrvdrContrItmValidFromDteTme` |  | |  | `valfr` | `DEC(15)` | Valid From (Time Stamp) |
| `CAPrvdrContrItmValidToDateTime` |  | |  | `valto` | `DEC(15)` | Valid To (Time Stamp) |
| `CAPrvdrContrItemCanclnDateTime` |  | |  | `cancl` | `DEC(15)` | Time of Reversal (Time Stamp) |
| `PrvdrContrItmWthdrwlDateTime` |  | |  | `withdrawn_at` | `DEC(15)` | Withdrawn On (Timestamp) |
| `CAProviderContractStatus` |  | |  | `status` | `CHAR(1)` | Status of Provider Contract |
| `CAProviderContractItemText` |  | |  | `vtitt` | `CHAR(50)` | Text for Provider Contract Item |
| `ContractAccount` |  | |  | `vkont` | `CHAR(12)` | Contract Account Number |
| `CAPrepaidAccount` |  | |  | `ppacc` | `CHAR(12)` | Prepaid Account |
| `CATechnicalResourceGroup` |  | |  | `vttrg` | `NUMC(6)` | Group of IDs |
| `CAServiceRecipient` |  | |  | `srvrp` | `CHAR(10)` | Recipient of Service |
| `CAAddressIDOfServiceRecipient` |  | |  | `adrsr` | `CHAR(10)` | Address Number for Recipient of the Service |
| `PrvdrContrItmCorrespncRcpnt` |  | |  | `def_rec` | `CHAR(10)` | Correspondence Recipient in Provider Contract Item |
| `AddrIDOfCorrespncRcpnt` |  | |  | `def_rec_adrnr` | `CHAR(10)` | Standard Address No. of Alternative Correspondence Recipient |
| `CAProduct` |  | |  | `prdnr` | `CHAR(40)` | Product Number |
| `ProductConfiguration` |  | |  | `cuobj` | `NUMC(18)` | Configuration Instance |
| `CASalesPackageProduct` |  | |  | `prdnr_sp` | `CHAR(40)` | Product ID of the Sales Package |
| `CAMasterAgreement` |  | |  | `makey` | `CHAR(10)` | Identification of Master Agreement |
| `CAMasterAgreementProduct` |  | |  | `maprd` | `CHAR(40)` | Custom Product or Product Range |
| `CAPartnerSettlementRule` |  | |  | `ptsrl` | `CHAR(4)` | Partner Settlement Rule |
| `CASharingContract` |  | |  | `vtkrf` | `CHAR(20)` | Reference to Sharing Contract |
| `TaxJurisdiction` |  | |  | `txjcd` | `CHAR(15)` | Jurisdiction for Tax Calculation - Tax Jurisdiction Code |
| `CAReceivingCountry` |  | |  | `landl` | `CHAR(3)` | Destination Country/Region (for Tax Reports) |
| `TaxCountry` |  | |  | `tax_country` | `CHAR(3)` | Tax Reporting Country/Region |
| `CASubscriptionChargeType` |  | |  | `charge_type` | `CHAR(2)` | Charge Type |
| `BusinessSolutionOrder` |  | |  | `solution_order_id` | `CHAR(10)` | Solution Order |
| `BusinessSolutionOrderItem` |  | |  | `solution_order_item_id` | `NUMC(6)` | Solution Order Item |
| `SoldProduct` |  | |  | `matnr_copa` | `CHAR(40)` | Product Sold |
| `RevenueRecognitionKey` |  | |  | `rev_rec_key` | `CHAR(6)` | Recognition key |
| `EBRRResultAnalysisInternalID` |  | |  | `rev_rec_key` | `CHAR(6)` | Recognition key |
| `EBRRIsBundleActive` |  | |  | `bundling` | `CHAR(1)` | Bundling Indicator |
| `CAProviderContractQuantity` |  | |  | `quantity` | `QUAN(18)` | Quantity |
| `CAProviderContractQuantityUnit` |  | |  | `quantity_unit` | `UNIT(3)` | Unit of Measure |
| `DistrSystOperatorBP` |  | |  | `uti_dso_bp` | `CHAR(10)` | Distributor |
| `DistrSystOperatorMarketCommID` |  | |  | `uti_dso_maco_id` | `CHAR(20)` | Distribution System Operator ID |
| `MeterOperatorBusinessPartner` |  | |  | `uti_metop_bp` | `CHAR(10)` | Meter Operator |
| `MeterOperatorMarketCommID` |  | |  | `uti_metop_maco_id` | `CHAR(20)` | Meter Operator ID |
| `MarketLocationIdentifier` |  | |  | `uti_malo_id` | `CHAR(35)` | Market Location |
| `SalesOrganization` |  | |  | `vkorg` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  | `vtweg` | `CHAR(2)` | Distribution Channel |
| `CompanyCode` |  | |  | `bukrs` | `CHAR(4)` | Company Code |
| `CAIntcoCompanyCodeSupplying` |  | |  | `ico_bukrs_sup` | `CHAR(4)` | Supplying Company Code |
| `BusinessArea` |  | |  | `gsber` | `CHAR(4)` | Business Area |
| `Segment` |  | |  | `segmt` | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | |  | `prctr` | `CHAR(10)` | Profit Center |
| `Division` |  | |  | `spart` | `CHAR(2)` | Division |
| `CAPrvdrContrSalesAreaAttrib1` |  | |  | `vber1` | `CHAR(4)` | Contract: Sales Area Attribute 1 |
| `CAPrvdrContrSalesAreaAttrib2` |  | |  | `vber2` | `CHAR(4)` | Contract: Sales Area Attribute 2 |
| `WBSElementInternalID` |  | |  | `cast( ps_psp_pnr as fis_wbsint_no_conv preserving type )` | `NUMC(8)` | WBS Element Internal ID |
| `InternalOrder` |  | |  | `aufnr` | `CHAR(12)` | Order Number |
| `CAStandardDivision` |  | |  | `stdsp` | `CHAR(2)` | Contract: Standard Division |
| `PrvdrContrItmIsRlvtForPrfSgDrv` |  | |  | `x_vt_copa` | `CHAR(1)` | Acct Assgmnt of Individual Contracts f. Provider Contracts |
| `CABillgCycle` |  | |  | `cycle` | `CHAR(4)` | Billing Cycle |
| `CALastDayOfBillingPeriod` |  | |  | `cycle_day` | `CHAR(2)` | Day of Period End |
| `CABillgCyclePeriodStartDate` |  | |  | `cycle_date` | `DATS(8)` | Contract: Date of Original Start of Period |
| `CAInvcgSchedule` |  | |  | `inv_schedule` | `CHAR(4)` | Selection Characteristic for Scheduling |
| `CARatingArea` |  | |  | `rating_area` | `CHAR(4)` | Rating Area |
| `CABillgPlnNumber` |  | |  | `billplanno` | `NUMC(12)` | Billing Plan Number |
| `CAConsumptionBillgSoldToParty` |  | |  | `cb_soldto` | `CHAR(10)` | Sold-To Party |
| `CAConsumptionBillgInvoiceRcpnt` |  | |  | `cb_billto` | `CHAR(10)` | Invoice Recipient |
| `ConsumptionBillingPaymentTerms` |  | |  | `cb_dzterm` | `CHAR(4)` | Key for Terms of Payment |
| `CnsmpnBillgBillableControl` |  | |  | `cb_bemot` | `CHAR(2)` | Accounting Indicator |
| `ConsumptionBillingSEPAMandate` |  | |  | `cb_mndid` | `CHAR(35)` | Unique Reference to Mandate for each Payee |
| `CAConsumptionBillgPaymentCard` |  | |  | `cb_ccard_id` | `CHAR(6)` | Payment Card ID for Payments |
| `CAIsRevenueAccountingRelevant` |  | |  | `rarel` | `CHAR(1)` | Relevant for Revenue Accounting |
| `CARevenueAcctgMigrationPackage` |  | |  | `ra_mig_package` | `CHAR(4)` | Migration Package ID |
| `RevenueAccountingRefType` |  | |  | `ra_reftype` | `CHAR(3)` | Reference Type for Revenue Accounting |
| `CARevenueAccountingRefType` |  | |  | `ra_reftype` | `CHAR(3)` | Reference Type for Revenue Accounting |
| `RevenueAccountingReference` |  | |  | `ra_refid` | `CHAR(30)` | Reference ID for Revenue Accounting |
| `CARevenueAcctgDocumentItem` |  | |  | `ra_srcdoc_id` | `CHAR(20)` | Revenue Accounting Item ID |
| `TransactionPriceCurrency` |  | |  | `trprc_curr` | `CUKY(5)` | Currency Key |
| `TransactionPrice` |  | |  | `trprc` | `CURR(13)` | Transaction Price for Each Recurrence Period |
| `TotalTransactionPrice` |  | |  | `trprc_total` | `CURR(13)` | Total Transaction Price |
| `TransacPriceRcrrcPerdTimeUnit` |  | |  | `trprc_freq_unit` | `CHAR(12)` | Time Unit for Recurrence Period |
| `TransacPriceRcrrcPerdDuration` |  | |  | `trprc_freq_duration` | `DEC(13)` | Length of Recurrence Period |
| `StandAloneSellingPriceCurrency` |  | |  | `ssprc_curr` | `CUKY(5)` | Currency Key |
| `StandAloneSellingPrice` |  | |  | `ssprc` | `CURR(13)` | Standalone Selling Price for Each Recurrence Period |
| `TotalStandAloneSellingPrice` |  | |  | `ssprc_total` | `CURR(13)` | Total Standalone Selling Price |
| `SSPriceRecurrencePerdTimeUnit` |  | |  | `ssprc_freq_unit` | `CHAR(12)` | Time Unit for Recurrence Period |
| `SSPriceRecurrencePerdDuration` |  | |  | `ssprc_freq_duration` | `DEC(13)` | Length of Recurrence Period |
| `CAPrvdrContrItmChgReason` |  | |  | `chrsn` | `CHAR(2)` | Change Reason |
| `CAStartOfDurationDateTime` |  | |  | `valfrom_ctrterm` | `DEC(15)` | Contract Term Start (Time Stamp) |
| `CAEndOfDurationDateTime` |  | |  | `valto_ctrterm` | `DEC(15)` | End of Contract Duration (Time Stamp) |
| `CARevnAcctgRecrrgServiceType` |  | |  | `recurr_service_type` | `CHAR(6)` | Service Type |
| `CARevnAcctgTransfRecordOrigin` |  | |  | `ra_oi_orig` | `CHAR(1)` | Type of Origin for Transfer Record |
| `CAOriginOfPaymentMasterData` |  | |  | `pay_par_active` | `CHAR(1)` | Determination of Payment Data |
| `PaymentCondition` |  | |  | `zahlkond` | `CHAR(4)` | Payment Condition |
| `CAPaymentMethodForIncgPayment` |  | |  | `ezawe` | `CHAR(1)` | Incoming Payment Method |
| `CAAlternativePayer` |  | |  | `abwre` | `CHAR(10)` | Alternative Payer |
| `CAAddressIDOfAlternativePayer` |  | |  | `adrre` | `CHAR(10)` | Address Number for Alternative Payer |
| `CABankIDForIncomingPayments` |  | |  | `ebvty` | `CHAR(4)` | Bank Details ID for Incoming Payments |
| `SEPAMandate` |  | |  | `mndid` | `CHAR(35)` | Unique Reference to Mandate for each Payee |
| `CAPaymentCardIDForIncomingPayt` |  | |  | `ccard_id` | `CHAR(6)` | Payment Card ID for Incoming Payments |
| `CAPaymentMethodForOutgPayment` |  | |  | `azawe` | `CHAR(5)` | Outgoing Payment Methods |
| `CAAlternativePayee` |  | |  | `abwra` | `CHAR(10)` | Alternative Payee |
| `CAAddressIDOfAlternativePayee` |  | |  | `adrra` | `CHAR(10)` | Address Number for Alternative Payee |
| `CABankIDForOutgoingPayments` |  | |  | `abvty` | `CHAR(4)` | Bank Details ID for Outgoing Payments |
| `CAPaymentCardIDForOutgoingPayt` |  | |  | `ccard_out` | `CHAR(6)` | Payment Card ID for Outgoing Payments |
| `CAKeyForPaymentCardSupplement` |  | |  | `pcard_guid` | `RAW(16)` | Key for Payment Card Supplement |
| `CAOriginOfDunningMasterData` |  | |  | `dunn_par_active` | `CHAR(1)` | Dunning Control |
| `CADunningProcedure` |  | |  | `mahnv` | `CHAR(2)` | Dunning Procedure |
| `CAServiceDisconncnIsProhibited` |  | |  | `xdiscoexempt` | `CHAR(1)` | Disconnection of Service Not Permitted |
| `CACollectionStrategy` |  | |  | `strat` | `CHAR(2)` | Collection Strategy |
| `CACollectionsMasterDataGroup` |  | |  | `cmgrp` | `CHAR(2)` | Collection Management: Master Data Group |
| `CACollectionsContactPerson` |  | |  | `cpers` | `CHAR(10)` | Collections Contact Person |
| `PurchaseOrderByCustomer` |  | |  | `bstkd` | `CHAR(35)` | Customer Reference |
| `CustomerPurchaseOrderDate` |  | |  | `bstdk` | `DATS(8)` | Customer Reference Date |
| `_BillgPln` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_BillgCycle` | | ✓ | | | | |
| `_CADunningMasterDataOrigin` | | ✓ | | | | |
| `_CADunningProcedure` | | ✓ | | | | |
| `_CACollectionStrategy` | | ✓ | | | | |
| `_CACollMasterDataGroup` | | ✓ | | | | |
| `_CACollectionsContactPerson` | | ✓ | | | | |
| `_InvcgSchedule` | | ✓ | | | | |
| `_CAPaymentMasterDataOrigin` | | ✓ | | | | |
| `_CAPaymentMethod` | | ✓ | | | | |
| `_CARevnAcctgServiceType` | | ✓ | | | | |
| `_CARevnAcctgTransfRecdOrigin` | | ✓ | | | | |
| `_CARatingArea` | | ✓ | | | | |
| `_CASubscriptionChargeType` | | ✓ | | | | |
| `_CompCode` | | ✓ | | | | |
| `_CompCodeSup` | | ✓ | | | | |
| `_ContrAcc` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_PaymentCondition` | | ✓ | | | | |
| `_PrvdrContr` | | ✓ | | | | |
| `_ProviderContractStatus` | | ✓ | | | | |
| `_PrvdrContrItemChgReason` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PCoExtension` | `E_CAProviderContractItem` | [1..1] |
| `_BillgPln` | `I_CABillgPln` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_BillgCycle` | `I_CABillgCycle` | [0..1] |
| `_CADunningMasterDataOrigin` | `I_CADunningMasterDataOrigin` | [0..1] |
| `_CADunningProcedure` | `I_CADunningProcedure` | [0..1] |
| `_CACollectionStrategy` | `I_CACollectionStrategy` | [0..1] |
| `_CACollMasterDataGroup` | `I_CACollMasterDataGroup` | [0..1] |
| `_CACollectionsContactPerson` | `I_BusinessPartner` | [0..1] |
| `_InvcgSchedule` | `I_CAInvcgSchedule` | [0..1] |
| `_CAPaymentMasterDataOrigin` | `I_CAPaymentMasterDataOrigin` | [0..1] |
| `_CAPaymentMethod` | `I_CAPaymentMethod` | [0..1] |
| `_CARevnAcctgServiceType` | `I_CARevnAcctgServiceType` | [0..1] |
| `_CARevnAcctgTransfRecdOrigin` | `I_CARevnAcctgTransfRecdOrigin` | [0..1] |
| `_CARatingArea` | `I_CARatingArea` | [1..1] |
| `_CASubscriptionChargeType` | `I_CASubscriptionChargeType` | [1..1] |
| `_CompCode` | `I_CompanyCode` | [1..1] |
| `_CompCodeSup` | `I_CompanyCode` | [0..1] |
| `_ContrAcc` | `I_ContractAccountHeader` | [1..1] |
| `_Country` | `I_Country` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_PaymentCondition` | `I_PaymentCondition` | [1..1] |
| `_PrvdrContr` | `I_ProviderContract` | [1..1] |
| `_ProviderContractStatus` | `I_ProviderContractStatus` | [1..1] |
| `_PrvdrContrItemChgReason` | `I_PrvdrContrItemChgReason` | [0..1] |
| `_Segment` | `I_Segment` | [0..1] |

## Source Code

```abap
@AbapCatalog: { compiler.compareFilter:true,
                //preserveKey:true,
                sqlViewName: 'IPRVDRCONTRI' }

@AccessControl: { authorizationCheck: #CHECK,
                  personalData.blocking : #REQUIRED }

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Provider Contract Item'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { representativeKey: 'ProviderContractItem',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE,
                                         #CDS_MODELING_DATA_SOURCE ],
                usageType: { dataClass: #MASTER,
                             serviceQuality: #C,
                             sizeCategory: #XL } }

@VDM.viewType: #BASIC

define view I_ProviderContractItem
  as select from dfkk_vt_i

  association [1..1] to E_CAProviderContractItem      as _PCoExtension                on  $projection.ProviderContract     = _PCoExtension.CAProviderContract
                                                                                      and $projection.ProviderContractItem = _PCoExtension.CAProviderContractItemNumber
  association [0..1] to I_CABillgPln                  as _BillgPln                    on  $projection.CABillgPlnNumber = _BillgPln.CABillgPlnNumber
  association [0..1] to I_BusinessArea                as _BusinessArea                on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..1] to I_CABillgCycle                as _BillgCycle                  on  $projection.CABillgCycle = _BillgCycle.CABillgCycle
  association [0..1] to I_CADunningMasterDataOrigin   as _CADunningMasterDataOrigin   on  $projection.CAOriginOfDunningMasterData = _CADunningMasterDataOrigin.CAOriginOfDunningMasterData
  association [0..1] to I_CADunningProcedure          as _CADunningProcedure          on  $projection.CADunningProcedure = _CADunningProcedure.CADunningProcedure
  association [0..1] to I_CACollectionStrategy        as _CACollectionStrategy        on  $projection.CACollectionStrategy = _CACollectionStrategy.CACollectionStrategy
  association [0..1] to I_CACollMasterDataGroup       as _CACollMasterDataGroup       on  $projection.CACollectionsMasterDataGroup = _CACollMasterDataGroup.CACollectionsMasterDataGroup
  association [0..1] to I_BusinessPartner             as _CACollectionsContactPerson  on  $projection.CACollectionsContactPerson = _CACollectionsContactPerson.BusinessPartner
  association [0..1] to I_CAInvcgSchedule             as _InvcgSchedule               on  $projection.CAInvcgSchedule = _InvcgSchedule.CAInvcgSchedule
  association [0..1] to I_CAPaymentMasterDataOrigin   as _CAPaymentMasterDataOrigin   on  $projection.CAOriginOfPaymentMasterData = _CAPaymentMasterDataOrigin.CAOriginOfPaymentMasterData
  association [0..1] to I_CAPaymentMethod             as _CAPaymentMethod             on  $projection.CAPaymentMethodForIncgPayment = _CAPaymentMethod.CAPaymentMethod
                                                                                      and $projection.CAReceivingCountry            = _CAPaymentMethod.Country
  association [0..1] to I_CARevnAcctgServiceType      as _CARevnAcctgServiceType      on  $projection.CARevnAcctgRecrrgServiceType = _CARevnAcctgServiceType.CARevenueAccountingServiceType
  association [0..1] to I_CARevnAcctgTransfRecdOrigin as _CARevnAcctgTransfRecdOrigin on  $projection.CARevnAcctgTransfRecordOrigin = _CARevnAcctgTransfRecdOrigin.CARevnAcctgTransfRecordOrigin
  association [1..1] to I_CARatingArea                as _CARatingArea                on  $projection.CARatingArea = _CARatingArea.CARatingArea
  association [1..1] to I_CASubscriptionChargeType    as _CASubscriptionChargeType    on  $projection.CASubscriptionChargeType = _CASubscriptionChargeType.CASubscriptionChargeType
  association [1..1] to I_CompanyCode                 as _CompCode                    on  $projection.CompanyCode = _CompCode.CompanyCode
  association [0..1] to I_CompanyCode                 as _CompCodeSup                 on  $projection.CAIntcoCompanyCodeSupplying = _CompCodeSup.CompanyCode
  association [1..1] to I_ContractAccountHeader       as _ContrAcc                    on  $projection.ContractAccount = _ContrAcc.ContractAccount
  association [0..1] to I_Country                     as _Country                     on  $projection.CAReceivingCountry = _Country.Country
  association [0..1] to I_Division                    as _Division                    on  $projection.Division = _Division.Division
  association [1..1] to I_PaymentCondition            as _PaymentCondition            on  $projection.PaymentCondition = _PaymentCondition.PaymentCondition
  association [1..1] to I_ProviderContract            as _PrvdrContr                  on  $projection.ProviderContract = _PrvdrContr.ProviderContract
  association [1..1] to I_ProviderContractStatus      as _ProviderContractStatus      on  $projection.CAProviderContractStatus = _ProviderContractStatus.CAProviderContractStatus
  association [0..1] to I_PrvdrContrItemChgReason     as _PrvdrContrItemChgReason     on  $projection.CAPrvdrContrItmChgReason = _PrvdrContrItemChgReason.CAPrvdrContrItmChgReason
  association [0..1] to I_Segment                     as _Segment                     on  $projection.Segment = _Segment.Segment

{
      @ObjectModel.foreignKey.association: '_PrvdrContr'
  key vtkey                                                    as ProviderContract,
  key vtpos                                                    as ProviderContractItem,

      //    administration data
      erdat                                                    as CreationDate,
      cast(ertim as ttet_dt_cr_time preserving type )          as CreationTime,
      ernam                                                    as CreatedByUser,
      aedat                                                    as LastChangeDate,
      aetim                                                    as LastChangeTime,
      aenam                                                    as LastChangedByUser,

      //    General data
      vtpid                                                    as CAProviderContractItemUUID,
      papid                                                    as CAPrvdrContrParentItemUUID,
      valfr                                                    as CAPrvdrContrItmValidFromDteTme,
      valto                                                    as CAPrvdrContrItmValidToDateTime,
      cancl                                                    as CAPrvdrContrItemCanclnDateTime,
      withdrawn_at                                             as PrvdrContrItmWthdrwlDateTime,
      @ObjectModel.foreignKey.association: '_ProviderContractStatus'
      status                                                   as CAProviderContractStatus,
      vtitt                                                    as CAProviderContractItemText,
      @ObjectModel.foreignKey.association: '_ContrAcc'
      vkont                                                    as ContractAccount,
      ppacc                                                    as CAPrepaidAccount,
      vttrg                                                    as CATechnicalResourceGroup,
      srvrp                                                    as CAServiceRecipient,
      adrsr                                                    as CAAddressIDOfServiceRecipient,
      def_rec                                                  as PrvdrContrItmCorrespncRcpnt,
      def_rec_adrnr                                            as AddrIDOfCorrespncRcpnt,
      prdnr                                                    as CAProduct,
      cuobj                                                    as ProductConfiguration,
      prdnr_sp                                                 as CASalesPackageProduct,
      makey                                                    as CAMasterAgreement,
      maprd                                                    as CAMasterAgreementProduct,
      ptsrl                                                    as CAPartnerSettlementRule,
      vtkrf                                                    as CASharingContract,
      txjcd                                                    as TaxJurisdiction,
      @ObjectModel.foreignKey.association: '_Country'
      landl                                                    as CAReceivingCountry,
      tax_country                                              as TaxCountry,
      @ObjectModel.foreignKey.association: '_CASubscriptionChargeType'
      charge_type                                              as CASubscriptionChargeType,

      solution_order_id                                        as BusinessSolutionOrder,
      solution_order_item_id                                   as BusinessSolutionOrderItem,
      matnr_copa                                               as SoldProduct,
      @API.element: {
        successor: 'EBRRResultAnalysisInternalID',
        releaseState: #DEPRECATED }
      @VDM.lifecycle: {
        status: #DEPRECATED,
        successor: 'EBRRResultAnalysisInternalID' }
      rev_rec_key                                              as RevenueRecognitionKey,
      rev_rec_key                                              as EBRRResultAnalysisInternalID,

      bundling                                                 as EBRRIsBundleActive,

      @Semantics.quantity.unitOfMeasure: 'CAProviderContractQuantityUnit'
      quantity                                                 as CAProviderContractQuantity,
      @Semantics.unitOfMeasure: true
      quantity_unit                                            as CAProviderContractQuantityUnit,

      //    General data 2 (Utility Fields)
      uti_dso_bp                                               as DistrSystOperatorBP,
      uti_dso_maco_id                                          as DistrSystOperatorMarketCommID,
      uti_metop_bp                                             as MeterOperatorBusinessPartner,
      uti_metop_maco_id                                        as MeterOperatorMarketCommID,
      uti_malo_id                                              as MarketLocationIdentifier,

      //    Organizational data
      vkorg                                                    as SalesOrganization,
      vtweg                                                    as DistributionChannel,
      @ObjectModel.foreignKey.association: '_CompCode'
      bukrs                                                    as CompanyCode,
      @ObjectModel.foreignKey.association: '_CompCodeSup'
      ico_bukrs_sup                                            as CAIntcoCompanyCodeSupplying,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      gsber                                                    as BusinessArea,
      @ObjectModel.foreignKey.association: '_Segment'
      segmt                                                    as Segment,
      //      @ObjectModel.foreignKey.association: '_ProfitCenter'
      prctr                                                    as ProfitCenter,
      @ObjectModel.foreignKey.association: '_Division'
      spart                                                    as Division,
      vber1                                                    as CAPrvdrContrSalesAreaAttrib1,
      vber2                                                    as CAPrvdrContrSalesAreaAttrib2,
      //ps_psp_pnr                                                    as WBSElementInternalID,  //has conversion exit, not allowed anymore
      cast( ps_psp_pnr as fis_wbsint_no_conv preserving type ) as WBSElementInternalID,
      aufnr                                                    as InternalOrder,
      stdsp                                                    as CAStandardDivision,
      @Semantics.booleanIndicator
      x_vt_copa                                                as PrvdrContrItmIsRlvtForPrfSgDrv,

      //    Billing and Ivoicing data
      @ObjectModel.foreignKey.association: '_BillgCycle'
      cycle                                                    as CABillgCycle,
      cycle_day                                                as CALastDayOfBillingPeriod,
      cycle_date                                               as CABillgCyclePeriodStartDate,
      @ObjectModel.foreignKey.association: '_InvcgSchedule'
      inv_schedule                                             as CAInvcgSchedule,
      @ObjectModel.foreignKey.association: '_CARatingArea'
      rating_area                                              as CARatingArea,
      @ObjectModel.foreignKey.association: '_BillgPln'
      billplanno                                               as CABillgPlnNumber,
      //    Consumption Billing
      cb_soldto                                                as CAConsumptionBillgSoldToParty,
      cb_billto                                                as CAConsumptionBillgInvoiceRcpnt,
      cb_dzterm                                                as ConsumptionBillingPaymentTerms,
      cb_bemot                                                 as CnsmpnBillgBillableControl,
      //cb_dzterm                                                     as PaymentTerms,
      //cb_bemot                                                      as BillableControl,
      cb_mndid                                                 as ConsumptionBillingSEPAMandate,
      cb_ccard_id                                              as CAConsumptionBillgPaymentCard,
      //cb_ccard_id                                                   as CAPaymentCard,


      //    Revenue Accounting data
      @Semantics.booleanIndicator
      rarel                                                    as CAIsRevenueAccountingRelevant,
      ra_mig_package                                           as CARevenueAcctgMigrationPackage,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'CARevenueAccountingRefType'
      ra_reftype                                               as RevenueAccountingRefType,
      ra_reftype                                               as CARevenueAccountingRefType,
      ra_refid                                                 as RevenueAccountingReference,
      ra_srcdoc_id                                             as CARevenueAcctgDocumentItem,
      @Semantics.currencyCode: true
      trprc_curr                                               as TransactionPriceCurrency,
      @Semantics.amount.currencyCode: 'TransactionPriceCurrency'
      trprc                                                    as TransactionPrice,
      @Semantics.amount.currencyCode: 'TransactionPriceCurrency'
      trprc_total                                              as TotalTransactionPrice,
      trprc_freq_unit                                          as TransacPriceRcrrcPerdTimeUnit,
      //      @Semantics.quantity.unitOfMeasure: 'TransacPriceRcrrcPerdTimeUnit'
      trprc_freq_duration                                      as TransacPriceRcrrcPerdDuration,
      @Semantics.currencyCode: true
      ssprc_curr                                               as StandAloneSellingPriceCurrency,
      @Semantics.amount.currencyCode: 'StandAloneSellingPriceCurrency'
      ssprc                                                    as StandAloneSellingPrice,
      @Semantics.amount.currencyCode: 'StandAloneSellingPriceCurrency'
      ssprc_total                                              as TotalStandAloneSellingPrice,
      ssprc_freq_unit                                          as SSPriceRecurrencePerdTimeUnit,
      //      @Semantics.quantity.unitOfMeasure: 'SSPriceRecurrencePerdTimeUnit'
      ssprc_freq_duration                                      as SSPriceRecurrencePerdDuration,
      @ObjectModel.foreignKey.association: '_PrvdrContrItemChgReason'
      chrsn                                                    as CAPrvdrContrItmChgReason,
      valfrom_ctrterm                                          as CAStartOfDurationDateTime,
      valto_ctrterm                                            as CAEndOfDurationDateTime,
      @ObjectModel.foreignKey.association: '_CARevnAcctgServiceType'
      recurr_service_type                                      as CARevnAcctgRecrrgServiceType,
      @ObjectModel.foreignKey.association: '_CARevnAcctgTransfRecdOrigin'
      ra_oi_orig                                               as CARevnAcctgTransfRecordOrigin,

      //   Payment Data
      @ObjectModel.foreignKey.association: '_CAPaymentMasterDataOrigin'
      pay_par_active                                           as CAOriginOfPaymentMasterData,
      @ObjectModel.foreignKey.association: '_PaymentCondition'
      zahlkond                                                 as PaymentCondition,
      @ObjectModel.foreignKey.association: '_CAPaymentMethod'
      ezawe                                                    as CAPaymentMethodForIncgPayment,
      abwre                                                    as CAAlternativePayer,
      adrre                                                    as CAAddressIDOfAlternativePayer,
      ebvty                                                    as CABankIDForIncomingPayments,
      mndid                                                    as SEPAMandate,
      ccard_id                                                 as CAPaymentCardIDForIncomingPayt,
      azawe                                                    as CAPaymentMethodForOutgPayment,
      abwra                                                    as CAAlternativePayee,
      adrra                                                    as CAAddressIDOfAlternativePayee,
      abvty                                                    as CABankIDForOutgoingPayments,
      ccard_out                                                as CAPaymentCardIDForOutgoingPayt,
      pcard_guid                                               as CAKeyForPaymentCardSupplement,


      //    Dunning Data
      @ObjectModel.foreignKey.association: '_CADunningMasterDataOrigin'
      dunn_par_active                                          as CAOriginOfDunningMasterData,
      @ObjectModel.foreignKey.association: '_CADunningProcedure'
      mahnv                                                    as CADunningProcedure,
      xdiscoexempt                                             as CAServiceDisconncnIsProhibited,
      @ObjectModel.foreignKey.association: '_CACollectionStrategy'
      strat                                                    as CACollectionStrategy,
      @ObjectModel.foreignKey.association: '_CACollMasterDataGroup'
      cmgrp                                                    as CACollectionsMasterDataGroup,
      @ObjectModel.foreignKey.association: '_CACollectionsContactPerson'
      cpers                                                    as CACollectionsContactPerson,

      //    PEPPOL
      bstkd                                                    as PurchaseOrderByCustomer,
      bstdk                                                    as CustomerPurchaseOrderDate,

      // Associations
      _BillgCycle,
      _BillgPln,
      _BusinessArea,
      _CADunningMasterDataOrigin,
      _CADunningProcedure,
      _CARatingArea,
      _CAPaymentMasterDataOrigin,
      _CARevnAcctgServiceType,
      _CARevnAcctgTransfRecdOrigin,
      _CASubscriptionChargeType,
      _ContrAcc,
      _CompCode,
      _CompCodeSup,
      _Country,
      _Division,
      _InvcgSchedule,
      _PaymentCondition,
      _CAPaymentMethod,
      _ProviderContractStatus,
      _PrvdrContr,
      _PrvdrContrItemChgReason,
      _Segment,
      _CACollectionStrategy,
      _CACollMasterDataGroup,
      _CACollectionsContactPerson
}
```
