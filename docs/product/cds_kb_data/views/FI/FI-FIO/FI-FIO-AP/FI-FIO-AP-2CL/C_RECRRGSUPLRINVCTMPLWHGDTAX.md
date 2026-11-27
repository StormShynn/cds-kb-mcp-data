---
name: C_RECRRGSUPLRINVCTMPLWHGDTAX
description: "Recrrgsuplrinvctmplwhgdtax"
semantic_vi: "View này hiển thị dữ liệu thuế giữ lại cho các mẫu hóa đơn nhà cung cấp, được sử dụng để tính toán số tiền thuế cho các giao dịch."
keywords:
  - "withholding tax"
  - "supplier invoice template"
  - "tax calculation"
  - "đơn thuế giữ lại"
  - "mẫu hóa đơn nhà cung cấp"
  - "tính toán thuế"
semantic_en: "This view exposes withholding tax data for supplier invoice templates, used to calculate tax amounts for transactions."
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
  - tax
  - component:FI-FIO-AP-2CL
  - lob:Finance
---
# C_RECRRGSUPLRINVCTMPLWHGDTAX

**Recrrgsuplrinvctmplwhgdtax**

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
| `RecrrgSuplrInvcTmplWhgdTaxUUID` | ✓ | | `_Withtax` | `RecrrgSuplrInvcTmplWhgdTaxUUID` | `RAW(16)` | GUID of Withholding Tax Item |
| `RecrrgSuplrInvcTmplUUID` |  | | `_Withtax` | `RecrrgSuplrInvcTmplUUID` | `RAW(16)` | GUID in recurring supplier invoice template |
| `WithholdingTaxAmount` |  | | `_Withtax` | `WithholdingTaxAmount` | `CURR(23)` | Withholding Tax Amount |
| `WithholdingTaxBaseAmount` |  | | `_Withtax` | `WithholdingTaxBaseAmount` | `CURR(23)` | Withholding Tax Base Amount |
| `WithholdingTaxCode` |  | | `_Withtax` | `WithholdingTaxCode` | `CHAR(2)` | Withholding Tax Code |
| `WithholdingTaxType` |  | | `_Withtax` | `WithholdingTaxType` | `CHAR(2)` | Indicator for Withholding Tax Type |
| `TransactionCurrency` |  | | `_Withtax` | `TransactionCurrency` | `CUKY(5)` | Currency Key |
| `_Tmpl` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Tmpl` | `C_RecrrgSuplrInvcTmpl` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Whgd Tax in Recurring Suplr Invc Tmpl'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #L,
  dataClass: #MIXED
}
@ObjectModel.supportedCapabilities:[#EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.sapObjectNodeType.name:'RecrrgSuplrInvcTmplWhgdTx'
@VDM.viewType: #CONSUMPTION
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@Analytics:{
  dataExtraction: {
    enabled: true
  }
}

define view entity C_RecrrgSuplrInvcTmplWhgdTax 
  as select from I_RecrrgSuplrInvcTmplWhgdTax as _Withtax

  association [1..1] to C_RecrrgSuplrInvcTmpl as _Tmpl on $projection.RecrrgSuplrInvcTmplUUID = _Tmpl.RecrrgSuplrInvcTmplUUID
{
    
  key _Withtax.RecrrgSuplrInvcTmplWhgdTaxUUID as RecrrgSuplrInvcTmplWhgdTaxUUID,    

      _Withtax.RecrrgSuplrInvcTmplUUID        as RecrrgSuplrInvcTmplUUID,           

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      _Withtax.WithholdingTaxAmount           as WithholdingTaxAmount,              

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      _Withtax.WithholdingTaxBaseAmount       as WithholdingTaxBaseAmount,          

      _Withtax.WithholdingTaxCode             as WithholdingTaxCode,                

      _Withtax.WithholdingTaxType             as WithholdingTaxType,                

      _Withtax.TransactionCurrency            as TransactionCurrency,                

      _Tmpl
}
```
