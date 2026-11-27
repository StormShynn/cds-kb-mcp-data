---
name: C_RECRRGSUPLRINVCTMPLINSTCE
description: "Recrrgsuplrinvctmplinstce"
semantic_vi: "View này hiển thị dữ liệu bản sao lặp lại của mẫu đơn yêu cầu thanh toán nhà cung cấp, được sử dụng khi phân tích hoặc xử lý đơn thanh toán lặp lại."
keywords:
  - "recurring supplier invoice"
  - "đơn thanh toán lặp lại nhà cung cấp"
  - "financial management"
  - "fi"
  - "fi-fio-ap-2cl"
  - "ekko"
  - "purchase order"
  - "đơn mua hàng"
  - "accounting document"
  - "tài liệu kế toán"
semantic_en: "This view exposes recurring supplier invoice template instance data for financial management, used when analyzing or processing recurring invoices."
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
  - component:FI-FIO-AP-2CL
  - lob:Finance
---
# C_RECRRGSUPLRINVCTMPLINSTCE

**Recrrgsuplrinvctmplinstce**

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
| `RecrrgSuplrInvcTmplInstceUUID` | ✓ | | `_Forcast` | `RecrrgSuplrInvcTmplInstceUUID` | `RAW(16)` | GUID in Forecast Lines of Recurring Supplier Invoice |
| `RecrrgSuplrInvcTmplUUID` |  | | `_Forcast` | `RecrrgSuplrInvcTmplUUID` | `RAW(16)` | GUID in recurring supplier invoice template |
| `RecrrgSuplrInvcTmplInstance` |  | | `_Forcast` | `RecrrgSuplrInvcTmplInstance` | `NUMC(6)` | recurring supplier invoice forecast item number |
| `RecurrenceInstanceStatus` |  | | `_Forcast` | `RecurrenceInstanceStatus` | `CHAR(1)` | recurring supplier invoice template item posting status |
| `RecurrenceInstanceStatusName` |  | |  | `_RecurrenceStatusText._Text[ Language = $session.system_language ].RecurrenceStatusName` | `CHAR(60)` | Short Text for Fixed Values |
| `PostingDate` |  | | `_Forcast` | `PostingDate` | `DATS(8)` | Posting Date in the Document |
| `AccountingDocument` |  | | `_Forcast` | `AccountingDocument` | `CHAR(10)` | Document Number of an Invoice Document |
| `FiscalYear` |  | | `_Forcast` | `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `TransactionCurrency` |  | | `_Forcast` | `TransactionCurrency` | `CUKY(5)` | Currency Key |
| `AmountInTransactionCurrency` |  | | `_Forcast` | `AmountInTransactionCurrency` | `CURR(23)` | Amount in Document Currency |
| `CompanyCode` |  | | `_Tmpl` | `CompanyCode` | `CHAR(4)` | Company Code |
| `OriginalReferenceDocument` |  | | `_Forcast` | `OriginalReferenceDocument` | `CHAR(20)` | Original Reference Document |
| `_Tmpl` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Tmpl` | `C_RecrrgSuplrInvcTmpl` | [1..1] |
| `_RecurrenceStatusText` | `I_RecurrenceStatus` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Forecast Lines of Recrrg Suplr Invc'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.semanticKey: ['RecrrgSuplrInvcTmplInstance']
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #L,
  dataClass: #MIXED
}
@VDM.viewType: #CONSUMPTION
@ObjectModel.supportedCapabilities:[#EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.sapObjectNodeType.name:'RecrrgSuplrInvcTmplInstce'
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@Analytics:{
  dataExtraction: {
    enabled: true
  }
}


define view entity C_RecrrgSuplrInvcTmplInstce
  as select from I_RecrrgSuplrInvcTmplInstce as _Forcast

  association [1..1] to C_RecrrgSuplrInvcTmpl as _Tmpl                 on $projection.RecrrgSuplrInvcTmplUUID = _Tmpl.RecrrgSuplrInvcTmplUUID

  association [0..1] to I_RecurrenceStatus    as _RecurrenceStatusText on $projection.RecurrenceInstanceStatus = _RecurrenceStatusText.RecrrgAcctgDocOccrncSts
{

  key _Forcast.RecrrgSuplrInvcTmplInstceUUID                                                  as RecrrgSuplrInvcTmplInstceUUID,

      _Forcast.RecrrgSuplrInvcTmplUUID                                                        as RecrrgSuplrInvcTmplUUID,

      _Forcast.RecrrgSuplrInvcTmplInstance                                                    as RecrrgSuplrInvcTmplInstance,

      _Forcast.RecurrenceInstanceStatus                                                       as RecurrenceInstanceStatus,

      _RecurrenceStatusText._Text[ Language = $session.system_language ].RecurrenceStatusName as RecurrenceInstanceStatusName,

      _Forcast.PostingDate                                                                    as PostingDate,

      _Forcast.AccountingDocument                                                             as AccountingDocument,

      _Forcast.FiscalYear                                                                     as FiscalYear,

      _Forcast.TransactionCurrency                                                            as TransactionCurrency,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      _Forcast.AmountInTransactionCurrency                                                    as AmountInTransactionCurrency,

      _Tmpl.CompanyCode                                                                       as CompanyCode,

      _Forcast.OriginalReferenceDocument                                                      as OriginalReferenceDocument,

      _Tmpl
}
```
