---
name: I_CREDITMANAGEMENTACCOUNTDEX
description: "Data Extraction of Credit Accounts"
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITMANAGEMENTACCOUNTDEX')/$value
semantic_en: "Data Extraction of Credit Accounts"
semantic_vi: "Data Extraction of Credit Accounts — CDS view cơ bản dựa trên ukmbp_cms_sgm."
keywords:
  - "data"
  - "extraction"
  - "credit"
  - "accounts"
  - "business"
  - "partner"
  - "segment"
  - "currency"
  - "customer"
  - "limit"
  - "amount"
  - "calculated"
tags:
  - FIN
  - account
  - component:FIN-FSCM-CR-2CL
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
  - bo:businesspartner
---
# I_CREDITMANAGEMENTACCOUNTDEX

**Data Extraction of Credit Accounts**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITMANAGEMENTACCOUNTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  | `partner` | `CHAR(10)` | Business Partner Number |
| `CreditSegment` | ✓ | |  | `credit_sgmnt` | `CHAR(10)` | Credit Segment |
| `CreditSegmentCurrency` |  | | `_CreditSegment` | `CreditSegmentCurrency` | `CUKY(5)` | Credit Segment Currency |
| `CustomerCreditLimitAmount` |  | |  | `credit_limit` | `CURR(15)` | Credit Limit |
| `CreditLimitCalculatedAmount` |  | |  | `cred_lim_calc` | `CURR(15)` | Calculated Credit Limit |
| `CreditLimitRequestedAmount` |  | |  | `cred_lim_req` | `CURR(15)` | Credit Limit Requested |
| `CreditAccountIsBlocked` |  | |  | `xblocked` | `CHAR(1)` | Blocked by Credit Management |
| `CreditLimitValidityEndDate` |  | |  | `limit_valid_date` | `DATS(8)` | Valid To Date |
| `CreditLimitLastChangeDate` |  | |  | `limit_chg_date` | `DATS(8)` | Change Date for Credit Limit |
| `CreditCoordinator` |  | |  | `coordinator` | `CHAR(12)` | Credit Analyst |
| `CreditAccountResubmissionDate` |  | |  | `follow_up_dt` | `DATS(8)` | Resubmission Date |
| `BusinessPartnerIsCritical` |  | |  | `cast( xcritical as ukm_critical_account preserving type )` | `CHAR(1)` | Special Attention Required |
| `CreditLimitIsZero` |  | |  | `x_limit_zero` | `CHAR(1)` | Limit Is Zero |
| `CreditAccountBlockReason` |  | |  | `block_reason` | `CHAR(2)` | Reason for Block in Credit Management |
| `CrdtLmtIsReqdFrmAutomCalc` |  | |  | `automatic_req` | `CHAR(1)` | Limit Request from Automatic Calculation |
| `CreditLimitReqdValidityEndDate` |  | |  | `lim_val_date_req` | `DATS(8)` | Valid To Date (Requested) |
| `CreditLimitRequestDate` |  | |  | `req_date` | `DATS(8)` | Request Date |
| `_CreditSegment` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreditSegment` | `I_CreditManagementSegment` | [1..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITMANAGEMENTACCOUNTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITMANAGEMENTACCOUNTDEX')/$value)*

```abap
@EndUserText.label: 'Data Extraction of Credit Accounts'

@Analytics:{ dataCategory: #DIMENSION,
             dataExtraction.enabled: true,
             dataExtraction.delta.changeDataCapture.automatic: true,
             internalName: #LOCAL,
             technicalName: 'ICRDTACCDEX'
}

@AccessControl: { authorizationCheck:     #MANDATORY,
                  personalData.blocking:  #BLOCKED_DATA_EXCLUDED //data privacy, hide data from blocked business partners
                }

@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

@Metadata: { allowExtensions: true,
             ignorePropagatedAnnotations:true
}

@ObjectModel:{ modelingPattern: #ANALYTICAL_DIMENSION,
               usageType.serviceQuality: #B,
               usageType.sizeCategory: #L,
               usageType.dataClass: #MASTER,
               sapObjectNodeType.name: 'CreditManagementAccount',
               supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #EXTRACTION_DATA_SOURCE ],
               representativeKey: 'BusinessPartner'
}

@VDM: { viewType: #BASIC
      }

define view entity I_CreditManagementAccountDEX
  as select from ukmbp_cms_sgm
  association [1..1] to I_CreditManagementSegment as _CreditSegment   on $projection.CreditSegment = _CreditSegment.CreditSegment
  association [1..1] to I_BusinessPartner         as _BusinessPartner on $projection.BusinessPartner = _BusinessPartner.BusinessPartner
{     
      key partner                                                   as BusinessPartner,
      @ObjectModel.foreignKey.association: '_CreditSegment'
      key credit_sgmnt                                              as CreditSegment,

      _CreditSegment.CreditSegmentCurrency                      as CreditSegmentCurrency,
      @Semantics.amount.currencyCode: 'CreditSegmentCurrency'
      credit_limit                                              as CustomerCreditLimitAmount,
      @Semantics.amount.currencyCode: 'CreditSegmentCurrency'
      cred_lim_calc                                             as CreditLimitCalculatedAmount,
      @Semantics.amount.currencyCode: 'CreditSegmentCurrency'
      cred_lim_req                                              as CreditLimitRequestedAmount,
      xblocked                                                  as CreditAccountIsBlocked,
      limit_valid_date                                          as CreditLimitValidityEndDate,
      limit_chg_date                                            as CreditLimitLastChangeDate,
      coordinator                                               as CreditCoordinator,
      follow_up_dt                                              as CreditAccountResubmissionDate,
      cast( xcritical as ukm_critical_account preserving type ) as BusinessPartnerIsCritical,
      x_limit_zero                                              as CreditLimitIsZero,
      block_reason                                              as CreditAccountBlockReason,
      automatic_req                                             as CrdtLmtIsReqdFrmAutomCalc,
      lim_val_date_req                                          as CreditLimitReqdValidityEndDate,
      req_date                                                  as CreditLimitRequestDate,

      _BusinessPartner,
      _CreditSegment
}
```
