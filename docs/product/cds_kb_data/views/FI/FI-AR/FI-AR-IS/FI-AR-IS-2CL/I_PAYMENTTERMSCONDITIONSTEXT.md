---
name: I_PAYMENTTERMSCONDITIONSTEXT
description: "Paymenttermsconditionstext"
app_component: FI-AR-IS-2CL
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
  - FI-AR
  - FI-AR-IS
  - interface-view
  - text-view
  - pricing-condition
  - payment
  - text
  - component:FI-AR-IS-2CL
  - lob:Finance
---
# I_PAYMENTTERMSCONDITIONSTEXT

**Paymenttermsconditionstext**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
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
| `PaymentTerms` | ✓ | |  | `cast( zterm as farp_dzterm preserving type )` | `CHAR(4)` | Terms of Payment Key |
| `PaymentTermsValidityMonthDay` | ✓ | |  | `ztagg` | `NUMC(2)` | Day Limit |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `PaymentTermsConditionDesc` |  | |  | `cast( text1 as fis_payment_terms_cndns_desc preserving type )` | `CHAR(50)` | Own Explanation of Payment Terms Condition |
| `_Language` | | ✓ | | | | |
| `_PaymentTerms` | | ✓ | | | | |
| `_PaymentTermsConditions` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_PaymentTerms` | `I_PaymentTerms` | [1..1] |
| `_PaymentTermsConditions` | `I_PaymentTermsConditions` | [1..1] |

## Source Code

```abap
@AccessControl:{
    authorizationCheck: #NOT_REQUIRED
    }
@Analytics:{
    dataExtraction.enabled: true,
    internalName: #LOCAL
    }
@EndUserText: {
    label: 'Payment Terms Conditions - Text'
    }
@ClientHandling.clientSafe: true
@Metadata: {
    ignorePropagatedAnnotations: true
    }
@ObjectModel: {
    dataCategory: #TEXT,
    modelingPattern:  #LANGUAGE_DEPENDENT_TEXT,
    representativeKey: 'PaymentTermsValidityMonthDay',
    supportedCapabilities: [
                            #LANGUAGE_DEPENDENT_TEXT,
                            #EXTRACTION_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #CDS_MODELING_DATA_SOURCE,
                            #SQL_DATA_SOURCE
                            ],
    usageType.serviceQuality: #A,
    usageType.sizeCategory: #M,
    usageType.dataClass: #CUSTOMIZING
    }
@Analytics.technicalName: 'IPAYTTRMSCNDNST'
@VDM: {
    lifecycle.contract.type: #PUBLIC_LOCAL_API,
    viewType: #BASIC
    }
define view entity I_PaymentTermsConditionsText
  as select from t052u
  association [0..1] to I_Language               as _Language               on  $projection.Language = _Language.Language
  association [1..1] to I_PaymentTerms           as _PaymentTerms           on  $projection.PaymentTerms = _PaymentTerms.PaymentTerms
  association [1..1] to I_PaymentTermsConditions as _PaymentTermsConditions on  $projection.PaymentTerms                 = _PaymentTermsConditions.PaymentTerms
                                                                            and $projection.PaymentTermsValidityMonthDay = _PaymentTermsConditions.PaymentTermsValidityMonthDay
{
      @ObjectModel.foreignKey.association: '_PaymentTerms'
  key cast( zterm as farp_dzterm preserving type )                  as PaymentTerms,
      @ObjectModel.foreignKey.association: '_PaymentTermsConditions'
  key ztagg                                                         as PaymentTermsValidityMonthDay,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras                                                         as Language,

      @Semantics.text: true
      cast( text1 as fis_payment_terms_cndns_desc preserving type ) as PaymentTermsConditionDesc,

      _PaymentTerms,
      _PaymentTermsConditions,
      _Language

}
```
