---
name: I_BPCREDITPROFILEDEX
description: "Data Extraction of Credit Profile"
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPCREDITPROFILEDEX')/$value
semantic_en: "Data Extraction of Credit Profile"
semantic_vi: "Data Extraction of Credit Profile — CDS view cơ bản dựa trên ukmbp_cms."
keywords:
  - "data"
  - "extraction"
  - "credit"
  - "profile"
  - "business"
  - "partner"
  - "crdt"
  - "mgmt"
  - "group"
  - "cust"
  - "relshp"
  - "start"
  - "year"
  - "worthiness"
  - "score"
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-FSCM-CR-2CL
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
---
# I_BPCREDITPROFILEDEX

**Data Extraction of Credit Profile**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPCREDITPROFILEDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  | `partner` | `CHAR(10)` | Business Partner Number |
| `CrdtMgmtBusinessPartnerGroup` |  | |  | `credit_group` | `NUMC(4)` | Customer Credit Group |
| `CustBusinessRelshpStartYear` |  | |  | `customer_since_year` | `NUMC(4)` | First Year of Customer Relationship |
| `CreditWorthinessScoreValue` |  | |  | `own_rating` | `CHAR(10)` | Score |
| `CrdtWrthnssScoreValdtyEndDate` |  | |  | `rating_val_date` | `DATS(8)` | Valid To Date |
| `CrdtWorthinessScoreLastChgDate` |  | |  | `rating_chg_date` | `DATS(8)` | Change Date for Score |
| `CalcdCrdtWorthinessScoreValue` |  | |  | `own_rating_calc` | `CHAR(10)` | Calculated Score |
| `CreditRiskClass` |  | |  | `risk_class` | `CHAR(3)` | Risk Class |
| `CalculatedCreditRiskClass` |  | |  | `cast( risk_class_calc as ukm_calculated_risk_class_2 preserving type )` | `CHAR(3)` | Calculated Risk Class |
| `CreditRiskClassLastChangeDate` |  | |  | `risk_class_chgdt` | `DATS(8)` | Risk Class Changed On |
| `CreditCheckRule` |  | |  | `check_rule` | `CHAR(10)` | Rule for Credit Check |
| `CreditScoreAndLimitCalcRule` |  | |  | `cast( limit_rule as ukm_limit_and_score_calc_rule preserving type )` | `CHAR(10)` | Rule for Calculating Score and Credit Limit |
| `BPLastChangeDateTime` |  | |  | `last_changed_at` | `DEC(15)` | Last Change to Credit Master Data |
| `_BusinessPartner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPCREDITPROFILEDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPCREDITPROFILEDEX')/$value)*

```abap
@EndUserText.label: 'Data Extraction of Credit Profile'
@Analytics:{ dataCategory: #DIMENSION,
             dataExtraction.enabled: true,
             dataExtraction.delta.changeDataCapture.automatic: true,
             internalName: #LOCAL,
             technicalName: 'IBPCRDTPROFDEX'
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
               sapObjectNodeType.name: 'CreditMgmtBusinessPartner',
               supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #EXTRACTION_DATA_SOURCE ],
               representativeKey: 'BusinessPartner'
}

@VDM: { viewType: #BASIC
      }


define view entity I_BPCreditProfileDEX
  as select from ukmbp_cms
  association [0..1] to I_BusinessPartner as _BusinessPartner on $projection.BusinessPartner = _BusinessPartner.BusinessPartner
{
  key partner                                                                as BusinessPartner,
      credit_group                                                           as CrdtMgmtBusinessPartnerGroup,
      customer_since_year                                                    as CustBusinessRelshpStartYear,

      // Rating
      own_rating                                                             as CreditWorthinessScoreValue,
      rating_val_date                                                        as CrdtWrthnssScoreValdtyEndDate,
      rating_chg_date                                                        as CrdtWorthinessScoreLastChgDate,
      own_rating_calc                                                        as CalcdCrdtWorthinessScoreValue,

      //Risk Class
      risk_class                                                             as CreditRiskClass,
      cast( risk_class_calc as ukm_calculated_risk_class_2 preserving type ) as CalculatedCreditRiskClass,
      risk_class_chgdt                                                       as CreditRiskClassLastChangeDate,

      //Rules
      check_rule                                                             as CreditCheckRule,
      cast( limit_rule as ukm_limit_and_score_calc_rule preserving type )    as CreditScoreAndLimitCalcRule,

      @Semantics.systemDateTime.lastChangedAt:true
      last_changed_at                                                        as BPLastChangeDateTime,

      _BusinessPartner
}
```
