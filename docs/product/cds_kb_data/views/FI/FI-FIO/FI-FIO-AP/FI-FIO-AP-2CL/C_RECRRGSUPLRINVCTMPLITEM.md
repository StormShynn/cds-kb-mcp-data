---
name: C_RECRRGSUPLRINVCTMPLITEM
description: "Recrrgsuplrinvctmplitem"
semantic_vi: "View này hiển thị dữ liệu mẫu đơn yêu cầu thanh toán của nhà cung cấp, bao gồm thông tin tài khoản và số tiền giao dịch, có ích cho báo cáo và phân tích tài chính."
keywords:
  - "supplier invoice"
  - "đơn yêu cầu thanh toán nhà cung cấp"
  - "financial reporting"
  - "báo cáo tài chính"
  - "sap fi"
  - "fi-fio-ap-2cl"
  - "ekko"
  - "recrrgsuplrinvc"
  - "recrrgsuplrinvcitem"
semantic_en: "This view exposes supplier invoice template item data, including account information and transaction amounts, which is useful for financial reporting and analysis."
app_component: FI-FIO-AP-2CL
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
  - FI
  - consumption-view
  - item-level
  - component:FI-FIO-AP-2CL
  - lob:Finance
---
# C_RECRRGSUPLRINVCTMPLITEM

**Recrrgsuplrinvctmplitem**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AP-2CL` |
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
| `RecrrgSuplrInvcTmplItemUUID` | ✓ | | `_GlLine` | `RecrrgSuplrInvcTmplItemUUID` | `RAW(16)` | GUID of G/L Item in Recurring Supplier Invoice Template |
| `RecrrgSuplrInvcTmplUUID` |  | | `_GlLine` | `RecrrgSuplrInvcTmplUUID` | `RAW(16)` | GUID in recurring supplier invoice template |
| `RecrrgSuplrInvoiceTemplateItem` |  | | `_GlLine` | `RecrrgSuplrInvoiceTemplateItem` | `NUMC(3)` | recurring supplier invoice g/l item number |
| `GLAccount` |  | | `_GlLine` | `GLAccount` | `CHAR(10)` | General Ledger Account |
| `AmountInTransactionCurrency` |  | | `_GlLine` | `AmountInTransactionCurrency` | `DEC(25)` | Amount in Document Currency |
| `DebitCreditCode` |  | | `_GlLine` | `DebitCreditCode` | `CHAR(1)` | Debit/Credit Indicator |
| `DebitCreditCodeName` |  | |  | `_DebitCreditCodeText._Text[ Language = $session.system_language ].DebitCreditCodeName` | `CHAR(60)` | Debit/Credit Code Name |
| `IsNegativePosting` |  | | `_GlLine` | `IsNegativePosting` | `CHAR(1)` | Indicator: Negative Posting |
| `CompanyCode` |  | | `_GlLine` | `CompanyCode` | `CHAR(4)` | Company Code |
| `TaxCode` |  | | `_GlLine` | `TaxCode` | `CHAR(2)` | Tax on Sales/Purchases Code |
| `TaxCountry` |  | | `_GlLine` | `TaxCountry` | `CHAR(3)` | Tax Reporting Country/Region |
| `TaxJurisdiction` |  | | `_GlLine` | `TaxJurisdiction` | `CHAR(15)` | Tax Jurisdiction |
| `DocumentItemText` |  | | `_GlLine` | `DocumentItemText` | `CHAR(50)` | Item Text |
| `CostCenter` |  | | `_GlLine` | `CostCenter` | `CHAR(10)` | Cost Center |
| `SalesDocument` |  | | `_GlLine` | `SalesDocument` | `CHAR(10)` | Sales and Distribution Document Number |
| `SalesDocumentItem` |  | | `_GlLine` | `SalesDocumentItem` | `NUMC(6)` | Sales document item |
| `InternalOrder` |  | | `_GlLine` | `InternalOrder` | `CHAR(12)` | Internal Order |
| `SettlementReferenceDate` |  | | `_GlLine` | `SettlementReferenceDate` | `DATS(8)` | Reference Date for Settlement |
| `FundsCenter` |  | | `_GlLine` | `FundsCenter` | `CHAR(16)` | Funds Center |
| `FunctionalArea` |  | | `_GlLine` | `FunctionalArea` | `CHAR(16)` | Functional Area |
| `ProfitCenter` |  | | `_GlLine` | `ProfitCenter` | `CHAR(10)` | Profit Center |
| `Fund` |  | | `_GlLine` | `Fund` | `CHAR(10)` | Fund |
| `CostObject` |  | | `_GlLine` | `CostObject` | `CHAR(12)` | Cost Object |
| `ProjectNetwork` |  | | `_GlLine` | `ProjectNetwork` | `CHAR(12)` | Network Number for Account Assignment |
| `NetworkActivity` |  | | `_GlLine` | `NetworkActivity` | `CHAR(4)` | Operation/Activity Number |
| `WBSElementExternalID` |  | | `_GlLine` | `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `CostCtrActivityType` |  | | `_GlLine` | `CostCtrActivityType` | `CHAR(6)` | Activity Type |
| `PersonnelNumber` |  | | `_GlLine` | `PersonnelNumber` | `NUMC(8)` | Personnel Number |
| `REInternalFinNumber` |  | | `_GlLine` | `REInternalFinNumber` | `CHAR(8)` | Internal Key of Real Estate Object (FI) |
| `BusinessProcess` |  | | `_GlLine` | `BusinessProcess` | `CHAR(12)` | Business Process |
| `GrantID` |  | | `_GlLine` | `GrantID` | `CHAR(20)` | Grant |
| `CommitmentItem` |  | | `_GlLine` | `CommitmentItem` | `CHAR(24)` | Commitment Item |
| `Quantity` |  | | `_GlLine` | `Quantity` | `QUAN(13)` | Quantity |
| `BaseUnit` |  | | `_GlLine` | `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `AssignmentReference` |  | | `_GlLine` | `AssignmentReference` | `CHAR(18)` | Assignment Number |
| `IsNotCashDiscountLiable` |  | | `_GlLine` | `IsNotCashDiscountLiable` | `CHAR(1)` | Indicator: Line Item Not Liable to Cash Discount? |
| `TaxBaseAmountInTransCrcy` |  | | `_GlLine` | `TaxBaseAmountInTransCrcy` | `DEC(25)` | Tax Base Amount in Document Currency |
| `ProfitabilitySegment` |  | | `_GlLine` | `ProfitabilitySegment` | `CHAR(10)` | Profitability Segment Number (CO-PA) |
| `Plant` |  | | `_GlLine` | `Plant` | `CHAR(4)` | Plant |
| `BudgetPeriod` |  | | `_GlLine` | `BudgetPeriod` | `CHAR(10)` | Budget Period |
| `ControllingArea` |  | | `_GlLine` | `ControllingArea` | `CHAR(4)` | Controlling Area |
| `JointVentureCostRecoveryCode` |  | | `_GlLine` | `JointVentureCostRecoveryCode` | `CHAR(2)` | Joint Venture Cost Recovery Code |
| `WorkItem` |  | | `_GlLine` | `WorkItem` | `CHAR(10)` | Work Item ID |
| `TransactionCurrency` |  | | `_Tmpl` | `TransactionCurrency` | `CUKY(5)` | Transaction Currency |
| `_Tmpl` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Tmpl` | `C_RecrrgSuplrInvcTmpl` | [1..1] |
| `_DebitCreditCodeText` | `I_DebitCreditCode` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'G/L Items in Recurring Suplr Invc Tmpl'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #L,
  dataClass: #MIXED
}
@VDM.viewType: #CONSUMPTION
@ObjectModel.supportedCapabilities:[#EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.sapObjectNodeType.name:'RecrrgSuplrInvcTmplItm'
@ObjectModel.semanticKey: ['RecrrgSuplrInvoiceTemplateItem']
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@Analytics:{
  dataExtraction: {
    enabled: true
  }
}

define view entity C_RecrrgSuplrInvcTmplItem
  as select from I_RecrrgSuplrInvcTmplItem as _GlLine

  association [1..1] to C_RecrrgSuplrInvcTmpl as _Tmpl                on $projection.RecrrgSuplrInvcTmplUUID = _Tmpl.RecrrgSuplrInvcTmplUUID

  association [0..1] to I_DebitCreditCode     as _DebitCreditCodeText on $projection.DebitCreditCode = _DebitCreditCodeText.DebitCreditCode

{
   
  key _GlLine.RecrrgSuplrInvcTmplItemUUID                                                   as RecrrgSuplrInvcTmplItemUUID,

      _GlLine.RecrrgSuplrInvcTmplUUID                                                       as RecrrgSuplrInvcTmplUUID,

      _GlLine.RecrrgSuplrInvoiceTemplateItem                                                as RecrrgSuplrInvoiceTemplateItem,

      _GlLine.GLAccount                                                                     as GLAccount,

      _GlLine.AmountInTransactionCurrency                                                   as AmountInTransactionCurrency,

      _GlLine.DebitCreditCode                                                               as DebitCreditCode,

      _DebitCreditCodeText._Text[ Language = $session.system_language ].DebitCreditCodeName as DebitCreditCodeName,

      _GlLine.IsNegativePosting                                                             as IsNegativePosting,

      _GlLine.CompanyCode                                                                   as CompanyCode,

      _GlLine.TaxCode                                                                       as TaxCode,

      _GlLine.TaxCountry                                                                    as TaxCountry,

      _GlLine.TaxJurisdiction                                                               as TaxJurisdiction,

      _GlLine.DocumentItemText                                                              as DocumentItemText,

      _GlLine.CostCenter                                                                    as CostCenter,

      _GlLine.SalesDocument                                                                 as SalesDocument,

      _GlLine.SalesDocumentItem                                                             as SalesDocumentItem,

      _GlLine.InternalOrder                                                                 as InternalOrder,

      _GlLine.SettlementReferenceDate                                                       as SettlementReferenceDate,

      _GlLine.FundsCenter                                                                   as FundsCenter,

      _GlLine.FunctionalArea                                                                as FunctionalArea,

      _GlLine.ProfitCenter                                                                  as ProfitCenter,

      _GlLine.Fund                                                                          as Fund,

      _GlLine.CostObject                                                                    as CostObject,

      _GlLine.ProjectNetwork                                                                as ProjectNetwork,

      _GlLine.NetworkActivity                                                               as NetworkActivity,

      _GlLine.WBSElementExternalID                                                          as WBSElementExternalID,

      _GlLine.CostCtrActivityType                                                           as CostCtrActivityType,

      _GlLine.PersonnelNumber                                                               as PersonnelNumber,

      _GlLine.REInternalFinNumber                                                           as REInternalFinNumber,

      _GlLine.BusinessProcess                                                               as BusinessProcess,

      _GlLine.GrantID                                                                       as GrantID,

      _GlLine.CommitmentItem                                                                as CommitmentItem,

      @Semantics.quantity.unitOfMeasure : 'BaseUnit'
      _GlLine.Quantity                                                                      as Quantity,

      _GlLine.BaseUnit                                                                      as BaseUnit,

      _GlLine.AssignmentReference                                                           as AssignmentReference,

      _GlLine.IsNotCashDiscountLiable                                                       as IsNotCashDiscountLiable,

      _GlLine.TaxBaseAmountInTransCrcy                                                      as TaxBaseAmountInTransCrcy,

      _GlLine.ProfitabilitySegment                                                          as ProfitabilitySegment,

      _GlLine.Plant                                                                         as Plant,

      _GlLine.BudgetPeriod                                                                  as BudgetPeriod,

      _GlLine.ControllingArea                                                               as ControllingArea,

      _GlLine.JointVentureCostRecoveryCode                                                  as JointVentureCostRecoveryCode,

      _GlLine.WorkItem                                                                      as WorkItem,

      _Tmpl.TransactionCurrency                                                             as TransactionCurrency,

      _Tmpl
}
```
