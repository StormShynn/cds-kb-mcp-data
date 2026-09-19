---
name: I_PAYMENTTERMSTEXT
description: "Paymenttermstext"
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
  - payment
  - text
  - component:FI-AR-IS-2CL
  - lob:Finance
---
# I_PAYMENTTERMSTEXT

**Paymenttermstext**

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
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `PaymentTerms` | ✓ | |  |  | `CHAR(4)` | Terms of Payment Key |
| `PaymentTermsName` |  | | `_CustomerPaymentTermsText` | `CustomerPaymentTermsName` | `CHAR(30)` | Description of terms of payment |
| `PaymentTermsDescription` |  | |  | `cast( PaymentTermsDescription as farp_paytterms_desc preserving type )` | `CHAR(1024)` | Payment Terms Description |
| `_Language` | | ✓ | | | | |
| `_PaymentTerms` | | ✓ | | | | |
| `_CustomerPaymentTermsText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_PaymentTerms` | `I_PaymentTerms` | [1..1] |
| `_CustomerPaymentTermsText` | `I_CustomerPaymentTermsText` | [0..1] |

## Source Code

```abap
@AbapCatalog: {
    sqlViewName: 'IFIPAYMENTTERMST',
    compiler.compareFilter:true,
    preserveKey:true
    }
@AccessControl:{
    authorizationCheck: #NOT_REQUIRED
    }
@Analytics:{
    dataExtraction.enabled: true,
    internalName: #LOCAL
    }
@ClientHandling:{
    algorithm: #SESSION_VARIABLE
    }
@EndUserText: {
    label: 'Payment Term - Text'
    }
@Metadata: {
    ignorePropagatedAnnotations: true
    }
@ObjectModel: {
    dataCategory: #TEXT,
    modelingPattern:  #LANGUAGE_DEPENDENT_TEXT,
    representativeKey: 'PaymentTerms',
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
@VDM: {
    lifecycle.contract.type: #PUBLIC_LOCAL_API,
    viewType: #BASIC
    }

define view I_PaymentTermsText
  as select from P_PaymentTermsTextTblFunc ( P_SAPClient : $session.client )
  association [0..1] to I_Language                 as _Language                 on  $projection.Language = _Language.Language
  association [1..1] to I_PaymentTerms             as _PaymentTerms             on  $projection.PaymentTerms = _PaymentTerms.PaymentTerms
  association [0..1] to I_CustomerPaymentTermsText as _CustomerPaymentTermsText on  $projection.PaymentTerms = _CustomerPaymentTermsText.CustomerPaymentTerms
                                                                                and $projection.Language     = _CustomerPaymentTermsText.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key Language,
      @ObjectModel.foreignKey.association: '_PaymentTerms'
      @ObjectModel.text.element:['PaymentTermsName', 'PaymentTermsDescription']
  key PaymentTerms,
      @Semantics.text: true
      _CustomerPaymentTermsText.CustomerPaymentTermsName              as PaymentTermsName,
      @Semantics.text: true
      cast( PaymentTermsDescription as farp_paytterms_desc preserving type ) as PaymentTermsDescription,
      _PaymentTerms,
      _CustomerPaymentTermsText,
      _Language

}
```
