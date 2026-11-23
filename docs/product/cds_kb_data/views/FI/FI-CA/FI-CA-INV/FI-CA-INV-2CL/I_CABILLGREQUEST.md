---
name: I_CABILLGREQUEST
description: "Cabillgrequest"
app_component: FI-CA-INV-2CL
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
  - FI-CA
  - FI-CA-INV
  - interface-view
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABILLGREQUEST

**Cabillgrequest**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
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
| `CABillgReqDocument` | ✓ | |  | `billreqno` | `NUMC(12)` | Billing Request Number |
| `CABillgReqCategory` |  | |  | `billreqcat` | `CHAR(4)` | Billing Request Category |
| `CABillgReqType` |  | |  | `billreqtype` | `CHAR(2)` | Billing Request Type |
| `CABillgReqReason` |  | |  | `billreqrsn` | `CHAR(4)` | Reason for Billing Request |
| `CAApplicationArea` |  | |  | `applk` | `CHAR(1)` | Application Area |
| `ContractAccount` |  | |  | `vkont` | `CHAR(12)` | Contract Account Number |
| `BusinessPartner` |  | |  | `cast(gpart as bu_partner preserving type)` | `CHAR(10)` | Business Partner Number |
| `CAInvoicingDocument` |  | |  | `inv_ref` | `CHAR(12)` | Number of Invoicing Document |
| `CABillgReqDescription` |  | |  | `billreq_descr` | `CHAR(60)` | Billing Request Description |
| `CABillgReqStatus` |  | |  | `billreqstatus` | `CHAR(1)` | Status of Billing Request |
| `CABillgReqTotalAmount` |  | |  | `billreq_total_amt` | `CURR(13)` | Total Amount of Billing Request |
| `CABillgReqTotalAmountCurrency` |  | |  | `billreq_total_curr` | `CUKY(5)` | Transaction Currency |
| `CABillgReqTotalAmtTxIsIncluded` |  | |  | `billreq_total_tax_included` | `CHAR(1)` | Tax Included in Total Amount of Billing Request |
| `CABillgReqCreationUser` |  | |  | `crname` | `CHAR(12)` | User Who Created the Billing Request |
| `CABillgReqCreationDate` |  | |  | `crdate` | `DATS(8)` | Creation Date of Billing Request |
| `CABillgReqCreationTime` |  | |  | `crtime` | `TIMS(6)` | Creation Time of Billing Request |
| `CABillgReqChangeUser` |  | |  | `chname` | `CHAR(12)` | User Who Changed the Billing Request |
| `CABillgReqChangeDate` |  | |  | `chdate` | `DATS(8)` | Change Date of Billing Request |
| `CABillgReqChangeTime` |  | |  | `chtime` | `TIMS(6)` | Billing Request Last Changed At |
| `CAClrfctnExist` |  | |  | `cfc_exists` | `CHAR(1)` | Validity Test Negative |
| `CABillgReqReference` |  | |  | `reference` | `CHAR(32)` | External Reference of Billing Request |
| `CABillgReqNumberOfItems` |  | |  | `billreq_recnum` | `INT4(10)` | Total Number of Billing Request Items |
| `LogicalSystem` |  | |  | `log_system` | `CHAR(10)` | Logical System |
| `CABllbleItmListId` |  | |  | `bitlist_id` | `NUMC(12)` | List ID |
| `CADeletionDate` |  | |  | `loedt` | `DATS(8)` | Date on which the entry can be deleted again |
| `CABillgReqCompletionDate` |  | |  | `completion_date` | `DATS(8)` | Completion Date of Billing Request |
| `_CABillgReqStatus` | | ✓ | | | | |
| `_CABillgReqCategory` | | ✓ | | | | |
| `_CABillgReqType` | | ✓ | | | | |
| `_CABillgReqReason` | | ✓ | | | | |
| `_CAApplicationArea` | | ✓ | | | | |
| `_CABillgReqTotalAmountCurrency` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_ContractAccountHeader` | | ✓ | | | | |
| `_ContractAccountPartner` | | ✓ | | | | |
| `_CAInvcgDocHeader` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgReqStatus` | `I_CABillgReqStatus` | [0..1] |
| `_CABillgReqCategory` | `I_CABillgReqCategory` | [0..1] |
| `_CABillgReqType` | `I_CABillgReqType` | [0..1] |
| `_CABillgReqReason` | `I_CABillgReqReason` | [0..1] |
| `_CAApplicationArea` | `I_CAApplicationArea` | [0..1] |
| `_CABillgReqTotalAmountCurrency` | `I_Currency` | [0..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_ContractAccountHeader` | `I_ContractAccountHeader` | [0..1] |
| `_ContractAccountPartner` | `I_ContractAccountPartner` | [0..1] |
| `_CAInvcgDocHeader` | `I_CAInvcgDocHeader` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@Analytics: {
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping: [ {
          table: 'dfkkbix_req_h', 
          role: #MAIN,
          viewElement: ['CABillgReqDocument'],
          tableElement: ['billreqno']
      } ]
    }
  }
}
@VDM.viewType: #BASIC
@ObjectModel: {
  usageType: {
    serviceQuality: #A,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
  },
  modelingPattern: #NONE,
  representativeKey: 'CABillgReqDocument',
  sapObjectNodeType.name: 'ContrAcctgBillingRequest',
  supportedCapabilities: [
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ]
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Billing Request'
define view entity I_CABillgRequest
  as select from dfkkbix_req_h

  association [0..1] to I_CABillgReqStatus       as _CABillgReqStatus              on  $projection.CABillgReqStatus = _CABillgReqStatus.CABillgReqStatus
  association [0..1] to I_CABillgReqCategory     as _CABillgReqCategory            on  $projection.CABillgReqCategory = _CABillgReqCategory.CABillgReqCategory
  association [0..1] to I_CABillgReqType         as _CABillgReqType                on  $projection.CABillgReqType = _CABillgReqType.CABillgReqType
  association [0..1] to I_CABillgReqReason       as _CABillgReqReason              on  $projection.CABillgReqReason = _CABillgReqReason.CABillgReqReason
  association [0..1] to I_CAApplicationArea      as _CAApplicationArea             on  $projection.CAApplicationArea = _CAApplicationArea.CAApplicationArea
  association [0..1] to I_Currency               as _CABillgReqTotalAmountCurrency on  $projection.CABillgReqTotalAmountCurrency = _CABillgReqTotalAmountCurrency.Currency

  association [0..1] to I_BusinessPartner        as _BusinessPartner               on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_ContractAccountHeader  as _ContractAccountHeader         on  $projection.ContractAccount = _ContractAccountHeader.ContractAccount
  association [0..1] to I_ContractAccountPartner as _ContractAccountPartner        on  $projection.ContractAccount = _ContractAccountPartner.ContractAccount
                                                                                   and $projection.BusinessPartner = _ContractAccountPartner.BusinessPartner
  association [0..1] to I_CAInvcgDocHeader       as _CAInvcgDocHeader              on  $projection.CAInvoicingDocument = _CAInvcgDocHeader.CAInvoicingDocument

{
  key billreqno                                 as CABillgReqDocument,
      @ObjectModel.foreignKey.association: '_CABillgReqCategory'
      billreqcat                                as CABillgReqCategory,
      @ObjectModel.foreignKey.association: '_CABillgReqType'
      billreqtype                               as CABillgReqType,
      @ObjectModel.foreignKey.association: '_CABillgReqReason'
      billreqrsn                                as CABillgReqReason,
      @ObjectModel.foreignKey.association: '_CAApplicationArea'
      applk                                     as CAApplicationArea,
      @ObjectModel.foreignKey.association: '_ContractAccountHeader'
      vkont                                     as ContractAccount,
      @ObjectModel.foreignKey.association: '_BusinessPartner'
      cast(gpart as bu_partner preserving type) as BusinessPartner,
      @ObjectModel.foreignKey.association: '_CAInvcgDocHeader'
      inv_ref                                   as CAInvoicingDocument,
      billreq_descr                             as CABillgReqDescription,
      @ObjectModel.foreignKey.association: '_CABillgReqStatus'
      billreqstatus                             as CABillgReqStatus,
      @Semantics.amount.currencyCode: 'CABillgReqTotalAmountCurrency'
      billreq_total_amt                         as CABillgReqTotalAmount,
      @ObjectModel.foreignKey.association: '_CABillgReqTotalAmountCurrency'
      billreq_total_curr                        as CABillgReqTotalAmountCurrency,
      billreq_total_tax_included                as CABillgReqTotalAmtTxIsIncluded,
      @Semantics.user.createdBy: true
      crname                                    as CABillgReqCreationUser,
      @Semantics.systemDate.createdAt: true
      crdate                                    as CABillgReqCreationDate,
      @Semantics.systemTime.createdAt: true
      crtime                                    as CABillgReqCreationTime,
      @Semantics.user.lastChangedBy: true
      chname                                    as CABillgReqChangeUser,
      @Semantics.systemDate.lastChangedAt: true
      chdate                                    as CABillgReqChangeDate,
      @Semantics.systemTime.lastChangedAt: true
      chtime                                    as CABillgReqChangeTime,
      cfc_exists                                as CAClrfctnExist,
      reference                                 as CABillgReqReference,
      billreq_recnum                            as CABillgReqNumberOfItems,
      log_system                                as LogicalSystem,
      bitlist_id                                as CABllbleItmListId,
      loedt                                     as CADeletionDate,
      completion_date                           as CABillgReqCompletionDate,

      _CABillgReqStatus,
      _CABillgReqCategory,
      _CABillgReqType,
      _CABillgReqReason,
      _CAApplicationArea,
      _CABillgReqTotalAmountCurrency,
      _BusinessPartner,
      _ContractAccountPartner,
      _ContractAccountHeader,
      _CAInvcgDocHeader

}
```
