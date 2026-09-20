---
name: I_PAYMENTTERMS
description: "Paymentterms"
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
  - payment
  - component:FI-AR-IS-2CL
  - lob:Finance
---
# I_PAYMENTTERMS

**Paymentterms**

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
| `PaymentTerms` | ✓ | |  | `cast( _PaymentTerms.zterm as farp_dzterm preserving type )` | `CHAR(4)` | Terms of Payment Key |
| `PaymentIsInstallment` |  | | `_PaymentTermsInstallCondition` | `PaymentIsInstallment` | `CHAR(1)` | Indicator: Term for Installment Payment |
| `_PaymentTermsConditions` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_InstallmentPaymentTermsItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PaymentTermsConditions` | `I_PaymentTermsConditions` | [0..*] |
| `_Text` | `I_PaymentTermsText` | [0..*] |
| `_InstallmentPaymentTermsItem` | `I_PaymentTermsInstallmentItem` | [0..*] |

## Source Code

```abap
@AbapCatalog: {
    sqlViewName: 'IFIPAYMENTTERMS',
    compiler.compareFilter:true,
    preserveKey:true
    }
@AccessControl: {
    authorizationCheck: #NOT_REQUIRED
    }
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: true,
    internalName: #LOCAL
    }
@ClientHandling: {
    algorithm: #SESSION_VARIABLE
    }
@EndUserText.label: 'Payment Terms'
@Metadata: {
    ignorePropagatedAnnotations: true
    }
@ObjectModel: {
    modelingPattern:  #ANALYTICAL_DIMENSION,
    representativeKey: 'PaymentTerms',
    sapObjectNodeType.name: 'PaymentTerms',
    supportedCapabilities: [
                            #ANALYTICAL_DIMENSION,
                            #EXTRACTION_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #CDS_MODELING_DATA_SOURCE,
                            #SQL_DATA_SOURCE
                            ],
    usageType.dataClass: #CUSTOMIZING,
    usageType.serviceQuality: #A,
    usageType.sizeCategory: #M
    }
@Search.searchable: true
@VDM: {
    lifecycle.contract.type: #PUBLIC_LOCAL_API,
    viewType: #BASIC    
    }

define view I_PaymentTerms
  as select distinct from t052 as _PaymentTerms
    left outer to one join I_PaymentTermsConditions as _PaymentTermsInstallCondition on _PaymentTerms.zterm = _PaymentTermsInstallCondition.PaymentTerms
                                                                             and _PaymentTermsInstallCondition.PaymentIsInstallment = 'X'
  
  association [0..*] to I_PaymentTermsConditions        as _PaymentTermsConditions          on $projection.PaymentTerms = _PaymentTermsConditions.PaymentTerms
  association [0..*] to I_PaymentTermsText              as _Text                            on $projection.PaymentTerms = _Text.PaymentTerms
  association [0..*] to I_PaymentTermsInstallmentItem   as _InstallmentPaymentTermsItem     on $projection.PaymentTerms = _InstallmentPaymentTermsItem.InstallmentItemPaymentTerms
  
{
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
      @ObjectModel.text.association: '_Text'
  key cast( _PaymentTerms.zterm as farp_dzterm preserving type )              as PaymentTerms,
      @Semantics.booleanIndicator: true
      _PaymentTermsInstallCondition.PaymentIsInstallment                      as PaymentIsInstallment,
      
      _PaymentTermsConditions,
      _Text,
      _InstallmentPaymentTermsItem
}
```
