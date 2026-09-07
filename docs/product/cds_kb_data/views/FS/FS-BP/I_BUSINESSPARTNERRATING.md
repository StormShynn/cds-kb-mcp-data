---
name: I_BUSINESSPARTNERRATING
description: "Business PartnerRATING"
semantic_vi: "View Business Partner Rating cung cấp thông tin đánh giá đối tác kinh doanh, bao gồm các mức độ và xu hướng đánh giá, có thể được sử dụng để đánh giá hiệu suất đối tác kinh doanh và đưa ra quyết định thông minh."
keywords:
  - "business partner"
  - "rating"
  - "partner"
  - "evaluation"
  - "performance"
  - "fs-bp"
  - "lob:other"
  - "bo:businesspartner"
  - "sap"
  - "cds"
  - "view"
semantic_en: "The Business Partner Rating view provides business partner rating information, including rating grades and trends, which can be used to evaluate business partner performance and make informed decisions."
app_component: FS-BP
software_component: SAP_BASIS
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
  - FS
  - FS-BP
  - interface-view
  - business-partner
  - partner
  - component:FS-BP
  - lob:Other
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERRATING

**Business PartnerRATING**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  | `partner` |  |  |
| `BusinessPartnerRatingProcedure` | ✓ | |  | `grade_method` |  |  |
| `BPRatingValidityEndDate` | ✓ | |  | `date_to` |  |  |
| `BusinessPartnerRatingGrade` |  | |  | `grade` |  |  |
| `BusinessPartnerRatingTrend` |  | |  | `tendency` |  |  |
| `BPRatingValidityStartDate` |  | |  | `date_from` |  |  |
| `BPRatingCreationDate` |  | |  | `date_when` |  |  |
| `BusinessPartnerRatingComment` |  | |  | `text` |  |  |
| `BusinessPartnerRatingIsAllowed` |  | |  | `flg_permit` |  |  |
| `BPRatingLongComment` |  | |  | `longtext` |  |  |
| `BPRatingIsValidOnKeyDate` |  | |  | `cast ( case when bp1012.date_to >= tstmp_to_dats( tstmp_current_utctimestamp(), abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL') and bp1012.date_from <=tstmp_to_dats( tstmp_current_utctimestamp(), abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL') then 'X' else '' end as bp_rat_valid preserving type)` |  |  |
| `BusinessPartnerRatingKeyDate` |  | |  | `cast ( tstmp_to_dats( tstmp_current_utctimestamp(), abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL') as bp_rat_key_date preserving type)` |  |  |
| `BusinessPartnerRatingIsExpired` |  | |  | `cast ( case left(cast(( dats_days_between(bp1012.date_to, tstmp_to_dats( tstmp_current_utctimestamp(), abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' )) - cast(_BPRatingProcedure.BPRatingStandardAccessDays as abap.int4) ) as abap.char( 16 )),1) when '-' then '' when '0' then '' else 'X' end as bp_rat_expired preserving type)` |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_BPFinancialServicesExtn` | | ✓ | | | | |
| `_BPRatingTrend` | | ✓ | | | | |
| `_BPRatingProcedure` | | ✓ | | | | |
| `_BPRatingProcedureGrade` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1] |
| `_BPFinancialServicesExtn` | `I_BPFinancialServicesExtn` | [0..1] |
| `_BPRatingTrend` | `I_BPRatingTrend` | [0..1] |
| `_BPRatingProcedure` | `I_BPRatingProcedure` | [0..1] |
| `_BPRatingProcedureGrade` | `I_BPRatingProcedureGrade` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPRATING',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@AccessControl: {authorizationCheck: #MANDATORY,
                 personalData.blocking: #REQUIRED,
                 personalData.blockingIndicator: [ '_BusinessPartner.IsBusinessPurposeCompleted' ]
                }
@ObjectModel: { representativeKey: 'BusinessPartner',
                sapObjectNodeType.name: 'BusinessPartnerRating',
                usageType: { dataClass: #MASTER,
                             serviceQuality: #B,
                             sizeCategory: #XXL
                           },
                supportedCapabilities: [  #ANALYTICAL_DIMENSION,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #SQL_DATA_SOURCE,
                                          #EXTRACTION_DATA_SOURCE ],
                modelingPattern: #ANALYTICAL_DIMENSION                          
              }
@Analytics: { dataExtraction.enabled: true,
              dataCategory: #DIMENSION,
              internalName: #LOCAL
            }
@Metadata: { ignorePropagatedAnnotations: true,  // For C1-Release
             allowExtensions: true
           }
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]           
@VDM.viewType: #BASIC           
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Rating of Business Partner'

/*+[hideWarning] { "IDS" :  [ "KEY_CHECK" ] } */
define view I_BusinessPartnerRating
  as select from bp1012
  association [1]    to I_BusinessPartner         as _BusinessPartner          on  $projection.BusinessPartner                = _BusinessPartner.BusinessPartner      // <--- to inherit authorizations in DCL
  association [0..1] to I_BPFinancialServicesExtn as _BPFinancialServicesExtn  on  $projection.BusinessPartner                = _BPFinancialServicesExtn.BusinessPartner // <--- to inherit authorizations in DCL
  association [0..1] to I_BPRatingTrend           as _BPRatingTrend            on  $projection.BusinessPartnerRatingTrend     = _BPRatingTrend.BusinessPartnerRatingTrend 
  association [0..1] to I_BPRatingProcedure       as _BPRatingProcedure        on  $projection.BusinessPartnerRatingProcedure = _BPRatingProcedure.BusinessPartnerRatingProcedure

  association [0..1] to I_BPRatingProcedureGrade  as _BPRatingProcedureGrade   on  $projection.BusinessPartnerRatingProcedure = _BPRatingProcedureGrade.BusinessPartnerRatingProcedure
                                                                               and $projection.BusinessPartnerRatingGrade     = _BPRatingProcedureGrade.BusinessPartnerRatingGrade

{
  key bp1012.partner             as BusinessPartner,
      @ObjectModel.foreignKey.association: '_BPRatingProcedure'
  key bp1012.grade_method        as BusinessPartnerRatingProcedure,
      @Semantics.businessDate.to: true
  key bp1012.date_to             as BPRatingValidityEndDate,
      bp1012.grade               as BusinessPartnerRatingGrade,
      bp1012.tendency            as BusinessPartnerRatingTrend,
      @Semantics.businessDate.from: true
      bp1012.date_from           as BPRatingValidityStartDate,
      bp1012.date_when           as BPRatingCreationDate,
      bp1012.text                as BusinessPartnerRatingComment,      
      bp1012.flg_permit          as BusinessPartnerRatingIsAllowed,
      bp1012.longtext            as BPRatingLongComment,
      
      // Calculation of IsRatingValidToday:
      //      If current date (today) is between bp1012.date_from and bp1012.date_to then IsRatingValidToday = true.
      cast (  case
        when bp1012.date_to >= tstmp_to_dats( tstmp_current_utctimestamp(), abap_system_timezone( $session.client,'NULL' ),  $session.client, 'NULL')
           and bp1012.date_from <=tstmp_to_dats( tstmp_current_utctimestamp(), abap_system_timezone( $session.client,'NULL' ),  $session.client, 'NULL')
        then 'X'
        else ''
      end   as bp_rat_valid preserving type) as BPRatingIsValidOnKeyDate,
      
     cast ( tstmp_to_dats( tstmp_current_utctimestamp(), abap_system_timezone( $session.client,'NULL' ),  $session.client, 'NULL')  as bp_rat_key_date preserving type) as BusinessPartnerRatingKeyDate,

      // Calculation of IsRatingExpired: 
      //      (Expiry days - Permitted Period) = Protected Since, which is the number of days since the rating is protected
      //      A negative value means the rating is not protected yet.
      //      Example:
      //      bp1012.date_to = 01.01.2018 and today is 01.01.2019 and Grade Protection Period is 300 days
      //      ( 01.01.2019 - 01.01.2018) - 300 = 365 - 300 = 65  --> Rating is proteced since 65 days -> User needs corresponding authorization if SACF is active
      cast ( case left(cast(( dats_days_between(bp1012.date_to, tstmp_to_dats( tstmp_current_utctimestamp(), abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ))
          - cast(_BPRatingProcedure.BPRatingStandardAccessDays as abap.int4) ) as abap.char( 16 )),1)
        when '-' then '' // date_to in the future
        when '0' then '' // date_to = today
        else 'X'         // date_to in the past and lower than threshold of grade method
      end  as bp_rat_expired preserving type) as BusinessPartnerRatingIsExpired,

      _BPRatingProcedure,
      _BPRatingProcedureGrade,
      _BPRatingTrend,
      
      _BusinessPartner,
      _BPFinancialServicesExtn
}
```
