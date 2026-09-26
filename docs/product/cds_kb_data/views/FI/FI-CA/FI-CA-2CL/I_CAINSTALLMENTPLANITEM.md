---
name: I_CAINSTALLMENTPLANITEM
description: "Cainstallmentplanitem"
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
  - item-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAINSTALLMENTPLANITEM

**Cainstallmentplanitem**

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
| `CAInstallmentPlan` | ✓ | |  | `rpnum` | `CHAR(12)` | Installment Plan Number in Contract A/R & A/P |
| `CADocumentNumber` | ✓ | |  | `opbel` | `CHAR(12)` | Number of a FI-CA Document |
| `CARepetitionItemNumber` | ✓ | |  | `opupw` | `NUMC(3)` | Repetition Item in FI-CA Document |
| `CABPItemNumber` | ✓ | |  | `opupk` | `NUMC(4)` | Item Number in FI-CA Document |
| `CASubItemNumber` | ✓ | |  | `opupz` | `NUMC(3)` | Subitem for a Partial Clearing in Document |
| `TransactionCurrency` |  | |  | `waers` | `CUKY(5)` | Currency Key |
| `CACreationOpenAmountInTC` |  | |  | `betro` | `CURR(13)` | Open Amount on Creation of Installment Plan |
| `CAInstlmntPlnItmDocOriginType` |  | |  | `histyp` | `CHAR(1)` | Document Type Included in Installment Plan History |
| `CAOriglDocItmClrgPriorityValue` |  | |  | `augnr` | `NUMC(3)` | Clearing Priority of Original Items of Installment Plan |
| `_CADocumentBPItem` | | ✓ | | | | |
| `_CAInstallmentPlan` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CADocumentBPItem` | `I_CADocumentBPItem` | [1..1] |
| `_CAInstallmentPlan` | `I_CAInstallmentPlanHeader` | [1..1] |
| `_TransactionCurrency` | `I_Currency` | [1..1] |
| `_Extension` | `E_CAInstallmentPlanItem` | [1..1] |

## Source Code

```abap
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData: { blocking: #REQUIRED,
                                  blockingIndicator: ['_CADocumentBPItem._BusinessPartner.IsBusinessPurposeCompleted'] } }

@EndUserText.label: 'Installment Plan Item'

@Analytics: { dataCategory: #FACT,
              internalName: #LOCAL,
              dataExtraction: { enabled: true,
                                delta.changeDataCapture.automatic: true } }

@Metadata: { ignorePropagatedAnnotations: true }

@ObjectModel: { modelingPattern: #NONE,
                sapObjectNodeType.name: 'ContrAcctgInstallmentPlanItem',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE ],
                usageType: { dataClass: #TRANSACTIONAL,
                             serviceQuality: #A,
                             sizeCategory: #XXL } }

@VDM.viewType: #BASIC

define view entity I_CAInstallmentPlanItem
  as select from fkk_instpln_hist

  association [1..1] to I_CADocumentBPItem        as _CADocumentBPItem    on  $projection.CADocumentNumber       = _CADocumentBPItem.CADocumentNumber
                                                                          and $projection.CARepetitionItemNumber = _CADocumentBPItem.CARepetitionItemNumber
                                                                          and $projection.CABPItemNumber         = _CADocumentBPItem.CABPItemNumber
                                                                          and $projection.CASubItemNumber        = _CADocumentBPItem.CASubItemNumber
  association [1..1] to I_CAInstallmentPlanHeader as _CAInstallmentPlan   on  $projection.CAInstallmentPlan      = _CAInstallmentPlan.CAInstallmentPlan
  association [1..1] to I_Currency                as _TransactionCurrency on  $projection.TransactionCurrency    = _TransactionCurrency.Currency
  association [1..1] to E_CAInstallmentPlanItem         as _Extension                 on $projection.CAInstallmentPlan           = _Extension.CAInstallmentPlan
                                                                              and $projection.CADocumentNumber           = _Extension.CADocumentNumber
                                                                              and $projection.CARepetitionItemNumber           = _Extension.CARepetitionItemNumber
                                                                              and $projection.CABPItemNumber           = _Extension.CABPItemNumber
                                                                              and $projection.CASubItemNumber           = _Extension.CASubItemNumber
{
      @ObjectModel.foreignKey.association: '_CAInstallmentPlan'
  key rpnum  as CAInstallmentPlan,
  key opbel  as CADocumentNumber,
  key opupw  as CARepetitionItemNumber,
  key opupk  as CABPItemNumber,
  key opupz  as CASubItemNumber,

      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      waers  as TransactionCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      betro  as CACreationOpenAmountInTC,
      histyp as CAInstlmntPlnItmDocOriginType,
      augnr  as CAOriglDocItmClrgPriorityValue,

      _CADocumentBPItem,
      _CAInstallmentPlan,
      _TransactionCurrency
}
```
