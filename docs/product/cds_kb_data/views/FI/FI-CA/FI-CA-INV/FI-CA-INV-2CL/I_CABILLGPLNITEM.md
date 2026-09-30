---
name: I_CABILLGPLNITEM
description: "Cabillgplnitem"
app_component: FI-CA-INV-2CL
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
  - FI-CA-INV
  - interface-view
  - item-level
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABILLGPLNITEM

**Cabillgplnitem**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
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
| `CABillgPlnNumber` | ✓ | |  | `billplanno` | `NUMC(12)` | Billing Plan Number |
| `CABillgPlnItem` | ✓ | |  | `billplanitem` | `NUMC(8)` | Sequence Number of Billing Plan Item |
| `CABillgPlnItmCat` |  | |  | `bipitemcat` | `CHAR(5)` | Billing Plan Item Category |
| `CABillgPlnItmType` |  | |  | `bipitemtype` | `CHAR(5)` | Billing Plan Item Type |
| `CABillgPlnItmTxt` |  | |  | `bipitemtext` | `CHAR(60)` | Description of Billing Plan Item |
| `CABillgPlnItemExtRef` |  | |  | `bipitemref` | `CHAR(32)` | External Reference of Billing Plan Item |
| `CABillgPlnItemAmount` |  | |  | `betrw` | `CURR(13)` | Amount in Transaction Currency with +/- Sign |
| `TransactionCurrency` |  | |  | `waers` | `CUKY(5)` | Currency Key |
| `CATaxIsIncluded` |  | |  | `tax_included` | `CHAR(1)` | Tax Included in Amount |
| `CABillgPlnItemQuantity` |  | |  | `bip_quantity` | `QUAN(31)` | Billing Quantity of Billing Plan Item |
| `CABillgPlnItemQuantityUnit` |  | |  | `bip_qty_unit` | `UNIT(3)` | Billing Quantity Unit of Billing Plan Item |
| `CATaxDeterminationCode` |  | |  | `ermwskz` | `CHAR(2)` | Indicator: Tax Determination Code |
| `TaxCode` |  | |  | `mwskz` | `CHAR(2)` | Tax on Sales/Purchases Code |
| `CABillgPlnItemStartDate` |  | |  | `valid_from` | `DATS(8)` | Valid From |
| `CABillgPlnItmEndDate` |  | |  | `valid_to` | `DATS(8)` | Valid to |
| `CABillgPlnItemTermStartDate` |  | |  | `term_from` | `DATS(8)` | Term From |
| `CABillgPlnItemTermEndDate` |  | |  | `term_to` | `DATS(8)` | Term To |
| `CABillgPlnItemRecurring` |  | |  | `recurring` | `CHAR(1)` | Recurring Billing Plan Item |
| `CABillgCycle` |  | |  | `cycle` | `CHAR(4)` | Billing Cycle |
| `CAStartDateForBillingPeriod` |  | |  | `cycle_startdate` | `DATS(8)` | Start Date of First Billing Period |
| `CAConditionType` |  | |  | `kschl` | `CHAR(4)` | Condition Type |
| `CABillgPlnItemAmountDetnType` |  | |  | `cast(amount_det_type as bip_amount_det_type_gfn_kk preserving type )` | `CHAR(1)` | Type of Amount Determination |
| `CABillgPlnItemAmountDateType` |  | |  | `cast(amount_date_type as bip_amount_date_type_gfn_kk preserving type )` | `CHAR(1)` | Type of Amount Determination Date |
| `CABillgPlnItemPriceDateType` |  | |  | `price_date_type` | `CHAR(1)` | Type of Pricing Date |
| `CAContract` |  | |  | `vtref` | `CHAR(20)` | Reference Specifications from Contract |
| `CAProviderContractItemNumber` |  | |  | `vtpos` | `NUMC(6)` | Contract: Item Number |
| `CASubApplication` |  | |  | `subap` | `CHAR(1)` | Subapplication in Contract Accounts Receivable and Payable |
| `CAProviderContractItemUUID` |  | |  | `vtpid` | `RAW(16)` | External GUID of Provider Contract Items |
| `Division` |  | |  | `spart` | `CHAR(2)` | Division |
| `CompanyCode` |  | |  | `bukrs` | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  | `gsber` | `CHAR(4)` | Business Area |
| `Segment` |  | |  | `segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `CAMainTransaction` |  | |  | `hvorg` | `CHAR(4)` | Main Transaction for Line Item |
| `CASubTransaction` |  | |  | `tvorg` | `CHAR(4)` | Subtransaction for Document Item |
| `CABillgPlnItemServiceType` |  | |  | `service_type` | `CHAR(6)` | Service Type for Revenue Accounting |
| `CADependentItemType` |  | |  | `cast(dittype as dittype_gfn_kk preserving type )` | `CHAR(8)` | Dependent Item Type |
| `Material` |  | |  | `matnr` | `CHAR(40)` | Material Number |
| `SalesOrganization` |  | |  | `vkorg` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  | `vtweg` | `CHAR(2)` | Distribution Channel |
| `CAAccountDeterminationCode` |  | |  | `kofiz` | `CHAR(2)` | Account Determination ID |
| `CAInvcgOffsettingAction` |  | |  | `offset_action` | `CHAR(1)` | Action Code for Offsetting |
| `CAInvcgOffsettingCategory` |  | |  | `offset_cat` | `CHAR(3)` | Offsetting Category |
| `CAInvcgOffsettingProcedure` |  | |  | `offset_proc` | `CHAR(2)` | Offsetting Procedure |
| `CAInvcgOffsettingReferenceKey` |  | |  | `offset_refid` | `CHAR(20)` | Offsetting Reference Key |
| `CABillgPlnItemReqDteLast` |  | |  | `requestdate_last` | `DATS(8)` | Last Reqest Date for Billing Plan Items |
| `CABillgPlnItemReqDteNext` |  | |  | `requestdate_next` | `DATS(8)` | Next Request Date of Billing Plan Items |
| `CABillgPlnDvtgNextRequestDate` |  | |  | `requestdate_next_dev` | `DATS(8)` | Deviating Next Request Date |
| `CABillgPlnItemRequestedToDte` |  | |  | `requested_to` | `DATS(8)` | Billing Plan Items Requested Until |
| `CABillgPlnItemCanceled` |  | |  | `cancelled` | `CHAR(1)` | Billing Plan Item Discarded |
| `CABillgPlnSubItmExist` |  | |  | `subitem_exists` | `CHAR(1)` | Subitem Exists |
| `CABillgPlnItemMain` |  | |  | `main_bipitem` | `NUMC(8)` | Number of Main Item |
| `CABillgPlnItmExcptnReason` |  | |  | `item_excreason` | `CHAR(2)` | Reason for Adjusting a Billing Plan Item |
| `CABillgPlnItemChildExist` |  | |  | `child_exists` | `CHAR(1)` | Follow-On Item Exists |
| `CABillgPlnItemParent` |  | |  | `parent_bipitem` | `NUMC(8)` | Number of Higher-Level Billing Plan Item |
| `CABillgPlnItemStatus` |  | |  | `status` | `CHAR(1)` | Status of Billing Plan Item |
| `CABillgPlnItemNrOfBllbleItm` |  | |  | `bit_number` | `NUMC(8)` | No. of Billing Plan Item Requests |
| `CAIsRevnAcctgTransfRecordRlvt` |  | |  | `raoirel` | `CHAR(1)` | Order Item Created for Transfer to Revenue Accounting |
| `ConditionType` |  | |  | `condition_type` | `CHAR(4)` | Condition Type |
| `ConditionIsForStatistics` |  | |  | `condition_statistic` | `CHAR(1)` | Condition Is Statistical |
| `CANetDueDate` |  | |  | `faedn` | `DATS(8)` | Due date for net payment |
| `CABillgPlnItmIsNotToBeReqd` |  | |  | `cast(case when norequest is initial then '' else 'X' end as xfeld preserving type)` | `CHAR(1)` | Checkbox |
| `CABllbleItmCostType` |  | |  | `cast(co_type as co_type_gfn_kk preserving type)` | `CHAR(8)` | Billable Item Cost Type |
| `CABllbleItmCostSubType` |  | |  | `cast(co_subtype as co_subtype_gfn_kk preserving type)` | `CHAR(8)` | Billable Item Cost Subtype |
| `CAIntcoCompanyCodeRequesting` |  | |  | `ico_bukrs_req` | `CHAR(4)` | Requesting Company Code |
| `CAIntcoCompanyCodeSupplying` |  | |  | `ico_bukrs_sup` | `CHAR(4)` | Supplying Company Code |
| `CAIntcoType` |  | |  | `cast(ico_type as ico_type_gfn_kk preserving type)` | `CHAR(4)` | Intercompany Settlement Type |
| `CAIntcoSubtype` |  | |  | `cast(ico_subtype as ico_subtype_gfn_kk preserving type)` | `CHAR(4)` | Intercompany Settlement Subtype |
| `_CAConditionType` |  | |  | `_ConditionType` |  |  |
| `_CABillgPln` | | ✓ | | | | |
| `_CABillgPlnItmType` | | ✓ | | | | |
| `_CABillgPlnItmCat` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_CABillgCycle` | | ✓ | | | | |
| `_CABillgPlnItmStatus` | | ✓ | | | | |
| `_ExcptnRsn` | | ✓ | | | | |
| `_CABillgPlnItmAmtDetnType` | | ✓ | | | | |
| `_CABillgPlnItmAmtDateType` | | ✓ | | | | |
| `_CABillgPlnItmPrcDateType` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_SubApplication` | | ✓ | | | | |
| `_ProviderContract` | | ✓ | | | | |
| `_CAProviderContractItem` | | ✓ | | | | |
| `_ConditionType` | | ✓ | | | | |
| `_CondType` | | ✓ | | | | |
| `_CARevnAcctgServiceType` | | ✓ | | | | |
| `_CADependentItemType` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_CAAccountDetnCode` | | ✓ | | | | |
| `_CAInvcgOffsettingAction` | | ✓ | | | | |
| `_CAInvcgOffsettingCategory` | | ✓ | | | | |
| `_CAInvcgOffsettingProcedure` | | ✓ | | | | |
| `_CABllbleItmCostType` | | ✓ | | | | |
| `_CABllbleItmCostSubtype` | | ✓ | | | | |
| `_CAIntcoCompanyCodeRequesting` | | ✓ | | | | |
| `_CAIntcoCompanyCodeSupplying` | | ✓ | | | | |
| `_CAIntcoType` | | ✓ | | | | |
| `_CAIntcoSubtype` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgPln` | `I_CABillgPln` | [1..1] |
| `_CABillgPlnItmType` | `I_CABillgPlnItmType` | [0..1] |
| `_CABillgPlnItmCat` | `I_CABillgPlnItmCat` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_CABillgCycle` | `I_CABillgCycle` | [0..1] |
| `_CABillgPlnItmStatus` | `I_CABillgPlnItmStatus` | [0..1] |
| `_ExcptnRsn` | `I_CABillgPlnItmExcptnReason` | [0..1] |
| `_CABillgPlnItmAmtDetnType` | `I_CABillgPlnItmAmtDetnType` | [0..1] |
| `_CABillgPlnItmAmtDateType` | `I_CABillgPlnItmAmtDateType` | [0..1] |
| `_CABillgPlnItmPrcDateType` | `I_CABillgPlnItmPrcDateType` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_SubApplication` | `I_CASubApplication` | [0..1] |
| `_ProviderContract` | `I_CAProviderContractHeader` | [0..1] |
| `_CAProviderContractItem` | `I_CAProviderContractItem` | [0..1] |
| `_ConditionType` | `I_ConditionType` | [0..1] |
| `_CondType` | `I_ConditionType` | [0..1] |
| `_CARevnAcctgServiceType` | `I_CARevnAcctgServiceType` | [0..1] |
| `_CADependentItemType` | `I_CADependentItemType` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_Segment` | `I_Segment` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_Material` | `I_Material` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_CAAccountDetnCode` | `I_CAAccountDetnCode` | [0..1] |
| `_CAInvcgOffsettingAction` | `I_CAInvcgOffsettingAction` | [0..1] |
| `_CAInvcgOffsettingCategory` | `I_CAInvcgOffsettingCategory` | [0..1] |
| `_CAInvcgOffsettingProcedure` | `I_CAInvcgOffsettingProcedure` | [0..1] |
| `_CABllbleItmCostType` | `I_CABllbleItmCostType` | [0..1] |
| `_CABllbleItmCostSubtype` | `I_CABllbleItmCostSubtype` | [0..1] |
| `_CAIntcoCompanyCodeRequesting` | `I_CompanyCode` | [0..1] |
| `_CAIntcoCompanyCodeSupplying` | `I_CompanyCode` | [0..1] |
| `_CAIntcoType` | `I_CAIntcoType` | [0..1] |
| `_CAIntcoSubtype` | `I_CAIntcoSubtype` | [0..1] |
| `_Extension` | `E_CABillgPlnItem` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@Analytics: {
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping: [ {
          table: 'dfkkbix_bip_i', 
          role: #MAIN,
          viewElement: ['CABillgPlnNumber', 'CABillgPlnItem'],
          tableElement: ['billplanno', 'billplanitem']
      } ]
    }
  }
}
@VDM.viewType: #BASIC
@ObjectModel: {
  usageType: {
    serviceQuality: #B,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
  },
  modelingPattern: #NONE,
  representativeKey: 'CABillgPlnItem',
  sapObjectNodeType.name: 'ContrAcctgBillingPlanItem',
  supportedCapabilities: [
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE 
  ]
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Abrechnungsplanposition'
define view entity I_CABillgPlnItem
  as select from dfkkbix_bip_i
  association [1..1] to I_CABillgPln                 as _CABillgPln                   on  $projection.CABillgPlnNumber = _CABillgPln.CABillgPlnNumber
  association [0..1] to I_CABillgPlnItmType          as _CABillgPlnItmType            on  $projection.CABillgPlnItmType = _CABillgPlnItmType.CABillgPlnItmType
  association [0..1] to I_CABillgPlnItmCat           as _CABillgPlnItmCat             on  $projection.CABillgPlnItmCat = _CABillgPlnItmCat.CABillgPlnItmCat
  association [0..1] to I_Currency                   as _TransactionCurrency          on  $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [0..1] to I_CABillgCycle               as _CABillgCycle                 on  $projection.CABillgCycle = _CABillgCycle.CABillgCycle
  association [0..1] to I_CABillgPlnItmStatus        as _CABillgPlnItmStatus          on  $projection.CABillgPlnItemStatus = _CABillgPlnItmStatus.CABillgPlnItemStatus
  association [0..1] to I_CABillgPlnItmExcptnReason  as _ExcptnRsn                    on  $projection.CABillgPlnItmExcptnReason = _ExcptnRsn.CABillgPlnItmExcptnReason
  association [0..1] to I_CABillgPlnItmAmtDetnType   as _CABillgPlnItmAmtDetnType     on  $projection.CABillgPlnItemAmountDetnType = _CABillgPlnItmAmtDetnType.CABillgPlnItemAmountDetnType
  association [0..1] to I_CABillgPlnItmAmtDateType   as _CABillgPlnItmAmtDateType     on  $projection.CABillgPlnItemAmountDateType = _CABillgPlnItmAmtDateType.CABillgPlnItemAmountDateType
  association [0..1] to I_CABillgPlnItmPrcDateType   as _CABillgPlnItmPrcDateType     on  $projection.CABillgPlnItemPriceDateType = _CABillgPlnItmPrcDateType.CABillgPlnItemPriceDateType
  association [0..1] to I_UnitOfMeasure              as _UnitOfMeasure                on  $projection.CABillgPlnItemQuantityUnit = _UnitOfMeasure.UnitOfMeasure
  association [0..1] to I_CASubApplication           as _SubApplication               on  $projection.CASubApplication = _SubApplication.CASubApplication
  association [0..1] to I_CAProviderContractHeader   as _ProviderContract             on  $projection.CASubApplication = 'P'
                                                                                      and $projection.CAContract       = _ProviderContract.CAProviderContract
  association [0..1] to I_CAProviderContractItem     as _CAProviderContractItem       on  $projection.CAContract                   = _CAProviderContractItem.CAProviderContract
                                                                                      and $projection.CAProviderContractItemNumber = _CAProviderContractItem.CAProviderContractItemNumber

  -- outdated
  association [0..1] to I_ConditionType              as _ConditionType                on  $projection.CAConditionType         = _ConditionType.ConditionType
                                                                                      and _ConditionType.ConditionUsage       = 'A'
                                                                                      and _ConditionType.ConditionApplication = 'V'

  association [0..1] to I_ConditionType              as _CondType                     on  $projection.ConditionType      = _CondType.ConditionType
                                                                                      and _CondType.ConditionUsage       = 'A'
                                                                                      and _CondType.ConditionApplication = 'V'
  association [0..1] to I_CARevnAcctgServiceType     as _CARevnAcctgServiceType       on  $projection.CABillgPlnItemServiceType = _CARevnAcctgServiceType.CARevenueAccountingServiceType
  association [0..1] to I_CADependentItemType        as _CADependentItemType          on  $projection.CADependentItemType = _CADependentItemType.CADependentItemType

  association [0..1] to I_CompanyCode                as _CompanyCode                  on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_BusinessArea               as _BusinessArea                 on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..1] to I_Segment                    as _Segment                      on  $projection.Segment = _Segment.Segment
  association [0..1] to I_Division                   as _Division                     on  $projection.Division = _Division.Division
  association [0..1] to I_Material                   as _Material                     on  $projection.Material = _Material.Material
  association [0..1] to I_SalesOrganization          as _SalesOrganization            on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  association [0..1] to I_DistributionChannel        as _DistributionChannel          on  $projection.DistributionChannel = _DistributionChannel.DistributionChannel

  association [0..1] to I_CAAccountDetnCode          as _CAAccountDetnCode            on  $projection.CAAccountDeterminationCode = _CAAccountDetnCode.CAAccountDeterminationCode
  association [0..1] to I_CAInvcgOffsettingAction    as _CAInvcgOffsettingAction      on  $projection.CAInvcgOffsettingAction = _CAInvcgOffsettingAction.CAInvcgOffsettingAction
  association [0..1] to I_CAInvcgOffsettingCategory  as _CAInvcgOffsettingCategory    on  $projection.CAInvcgOffsettingCategory = _CAInvcgOffsettingCategory.CAInvcgOffsettingCategory
  association [0..1] to I_CAInvcgOffsettingProcedure as _CAInvcgOffsettingProcedure   on  $projection.CAInvcgOffsettingProcedure = _CAInvcgOffsettingProcedure.CAInvcgOffsettingProcedure


  association [0..1] to I_CABllbleItmCostType        as _CABllbleItmCostType          on  $projection.CABllbleItmCostType = _CABllbleItmCostType.CABllbleItmCostType
  association [0..1] to I_CABllbleItmCostSubtype     as _CABllbleItmCostSubtype       on  $projection.CABllbleItmCostType    = _CABllbleItmCostSubtype.CABllbleItmCostType
                                                                                      and $projection.CABllbleItmCostSubType = _CABllbleItmCostSubtype.CABllbleItmCostSubType
  association [0..1] to I_CompanyCode                as _CAIntcoCompanyCodeRequesting on  $projection.CAIntcoCompanyCodeRequesting = _CAIntcoCompanyCodeRequesting.CompanyCode
  association [0..1] to I_CompanyCode                as _CAIntcoCompanyCodeSupplying  on  $projection.CAIntcoCompanyCodeSupplying = _CAIntcoCompanyCodeSupplying.CompanyCode
  association [0..1] to I_CAIntcoType                as _CAIntcoType                  on  $projection.CAIntcoType = _CAIntcoType.CAIntcoType
  association [0..1] to I_CAIntcoSubtype             as _CAIntcoSubtype               on  $projection.CAIntcoType    = _CAIntcoSubtype.CAIntcoType
                                                                                      and $projection.CAIntcoSubtype = _CAIntcoSubtype.CAIntcoSubtype
  -- extensions
  association [1..1] to E_CABillgPlnItem             as _Extension                    on  $projection.CABillgPlnNumber = _Extension.CABillgPlnNumber
                                                                                      and $projection.CABillgPlnItem   = _Extension.CABillgPlnItem
{
      @ObjectModel.foreignKey.association: '_CABillgPln'
  key billplanno                                                              as CABillgPlnNumber,
  key billplanitem                                                            as CABillgPlnItem,
      @ObjectModel.foreignKey.association: '_CABillgPlnItmCat'
      bipitemcat                                                              as CABillgPlnItmCat,
      @ObjectModel.foreignKey.association: '_CABillgPlnItmType'
      bipitemtype                                                             as CABillgPlnItmType,
      bipitemtext                                                             as CABillgPlnItmTxt,
      bipitemref                                                              as CABillgPlnItemExtRef,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      betrw                                                                   as CABillgPlnItemAmount,

      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      waers                                                                   as TransactionCurrency,
      tax_included                                                            as CATaxIsIncluded,
      @Semantics.quantity.unitOfMeasure: 'CABillgPlnItemQuantityUnit'
      bip_quantity                                                            as CABillgPlnItemQuantity,

      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      bip_qty_unit                                                            as CABillgPlnItemQuantityUnit,
      -- fk missing
      ermwskz                                                                 as CATaxDeterminationCode,
      -- fkey on upper view
      mwskz                                                                   as TaxCode,

      valid_from                                                              as CABillgPlnItemStartDate,
      valid_to                                                                as CABillgPlnItmEndDate,
      term_from                                                               as CABillgPlnItemTermStartDate,
      term_to                                                                 as CABillgPlnItemTermEndDate,
      @EndUserText.label: 'Wiederkehrende Position'
      recurring                                                               as CABillgPlnItemRecurring,

      @ObjectModel.foreignKey.association: '_CABillgCycle'
      cycle                                                                   as CABillgCycle,
      cycle_startdate                                                         as CAStartDateForBillingPeriod,
      @ObjectModel.foreignKey.association: '_CAConditionType'
      @EndUserText.label: 'Konditionsart der Preisfindung'
      kschl                                                                   as CAConditionType,

      @ObjectModel.foreignKey.association: '_CABillgPlnItmAmtDetnType'
      cast(amount_det_type as bip_amount_det_type_gfn_kk preserving type )    as CABillgPlnItemAmountDetnType,
      @ObjectModel.foreignKey.association: '_CABillgPlnItmAmtDateType'
      cast(amount_date_type  as bip_amount_date_type_gfn_kk preserving type ) as CABillgPlnItemAmountDateType,
      @ObjectModel.foreignKey.association: '_CABillgPlnItmPrcDateType'
      price_date_type                                                         as CABillgPlnItemPriceDateType,
      -- fkey missing
      vtref                                                                   as CAContract,
      // @ObjectModel.foreignKey.association: '_CAProviderContractItem'
      vtpos                                                                   as CAProviderContractItemNumber,
      @ObjectModel.foreignKey.association: '_SubApplication'
      subap                                                                   as CASubApplication,
      vtpid                                                                   as CAProviderContractItemUUID,
      @ObjectModel.foreignKey.association: '_Division'
      spart                                                                   as Division,

      @ObjectModel.foreignKey.association: '_CompanyCode'
      bukrs                                                                   as CompanyCode,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      gsber                                                                   as BusinessArea,
      @ObjectModel.foreignKey.association: '_Segment'
      segment                                                                 as Segment,
      -- fkey on upper view
      hvorg                                                                   as CAMainTransaction,
      -- fkey on upper view
      tvorg                                                                   as CASubTransaction,
      @ObjectModel.foreignKey.association: '_CARevnAcctgServiceType'
      service_type                                                            as CABillgPlnItemServiceType,
      @ObjectModel.foreignKey.association: '_CADependentItemType'
      cast(dittype as dittype_gfn_kk preserving type )                        as CADependentItemType,
      @ObjectModel.foreignKey.association: '_Material'
      matnr                                                                   as Material,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      vkorg                                                                   as SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      vtweg                                                                   as DistributionChannel,
      @ObjectModel.foreignKey.association: '_CAAccountDetnCode'
      kofiz                                                                   as CAAccountDeterminationCode,
      @ObjectModel.foreignKey.association: '_CAInvcgOffsettingAction'
      offset_action                                                           as CAInvcgOffsettingAction,
      @ObjectModel.foreignKey.association: '_CAInvcgOffsettingCategory'
      offset_cat                                                              as CAInvcgOffsettingCategory,
      @ObjectModel.foreignKey.association: '_CAInvcgOffsettingProcedure'
      offset_proc                                                             as CAInvcgOffsettingProcedure,
      offset_refid                                                            as CAInvcgOffsettingReferenceKey,

      requestdate_last                                                        as CABillgPlnItemReqDteLast,
      requestdate_next                                                        as CABillgPlnItemReqDteNext,
      requestdate_next_dev                                                    as CABillgPlnDvtgNextRequestDate,
      requested_to                                                            as CABillgPlnItemRequestedToDte,
      cancelled                                                               as CABillgPlnItemCanceled,
      subitem_exists                                                          as CABillgPlnSubItmExist,
      main_bipitem                                                            as CABillgPlnItemMain,
      @ObjectModel.foreignKey.association: '_ExcptnRsn'
      item_excreason                                                          as CABillgPlnItmExcptnReason,
      child_exists                                                            as CABillgPlnItemChildExist,
      @EndUserText.label: 'Übergeordnete Position'
      parent_bipitem                                                          as CABillgPlnItemParent,

      @ObjectModel.foreignKey.association: '_CABillgPlnItmStatus'
      status                                                                  as CABillgPlnItemStatus,
      bit_number                                                              as CABillgPlnItemNrOfBllbleItm,

      raoirel                                                                 as CAIsRevnAcctgTransfRecordRlvt,
      @ObjectModel.foreignKey.association: '_CondType'
      condition_type                                                          as ConditionType,
      condition_statistic                                                     as ConditionIsForStatistics,
      faedn                                                                   as CANetDueDate,
      @EndUserText.label: 'Position nicht anforderbar'
      cast(case when norequest is initial then ''
                else 'X' end as xfeld preserving type)                        as CABillgPlnItmIsNotToBeReqd,
      @ObjectModel.foreignKey.association: '_CABllbleItmCostType'
      cast(co_type as co_type_gfn_kk preserving type)                         as CABllbleItmCostType,
      @ObjectModel.foreignKey.association: '_CABllbleItmCostSubtype'
      cast(co_subtype as co_subtype_gfn_kk preserving type)                   as CABllbleItmCostSubType,
      @ObjectModel.foreignKey.association: '_CAIntcoCompanyCodeRequesting'
      ico_bukrs_req                                                           as CAIntcoCompanyCodeRequesting,
      @ObjectModel.foreignKey.association: '_CAIntcoCompanyCodeSupplying'
      ico_bukrs_sup                                                           as CAIntcoCompanyCodeSupplying,
      @ObjectModel.foreignKey.association: '_CAIntcoType'
      cast(ico_type as ico_type_gfn_kk preserving type)                       as CAIntcoType,
      @ObjectModel.foreignKey.association: '_CAIntcoSubtype'
      cast(ico_subtype as ico_subtype_gfn_kk preserving type)                 as CAIntcoSubtype,

      _CABillgPln,
      _CABillgCycle,
      _CABillgPlnItmType,
      _CABillgPlnItmCat,
      _CABillgPlnItmStatus,
      _ExcptnRsn,
      _TransactionCurrency,
      _CARevnAcctgServiceType,
      _CADependentItemType,
      _Material,
      _SalesOrganization,
      _DistributionChannel,
      _CAAccountDetnCode,
      _CABillgPlnItmAmtDetnType,
      _CABillgPlnItmAmtDateType,
      _CABillgPlnItmPrcDateType,
      _UnitOfMeasure,
      _SubApplication,
      _ProviderContract,
      _CAProviderContractItem,
      _CondType,
      _CompanyCode,
      _BusinessArea,
      _Segment,
      _Division,
      _CAInvcgOffsettingAction,
      _CAInvcgOffsettingCategory,
      _CAInvcgOffsettingProcedure,
      _CABllbleItmCostType,
      _CABllbleItmCostSubtype,
      _CAIntcoCompanyCodeRequesting,
      _CAIntcoCompanyCodeSupplying,
      _CAIntcoType,
      _CAIntcoSubtype,

      _ConditionType                                                          as _CAConditionType,
      @API.element:   { releaseState: #DEPRECATED, successor: '_CAConditionType' }
      @VDM.lifecycle: { status: #DEPRECATED, successor: '_CAConditionType' }
      _ConditionType
}
```
