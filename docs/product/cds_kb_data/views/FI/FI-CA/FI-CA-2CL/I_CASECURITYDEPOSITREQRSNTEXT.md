---
name: I_CASECURITYDEPOSITREQRSNTEXT
description: "Casecuritydepositreqrsntext"
app_component: FI-CA-2CL
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
  - interface-view
  - text-view
  - text
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CASECURITYDEPOSITREQRSNTEXT

**Casecuritydepositreqrsntext**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
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
| `CASecurityDepositRequestReason` | ✓ | |  | `reason` | `CHAR(4)` | Reason for Requesting a Security Deposit |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `CASecurityDepositReqReasonText` |  | |  | `cast ( text as req_reason_txt_kk )` | `CHAR(40)` | Request Reason Description |
| `_CASecurityDepositRequestRsn` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CASecurityDepositRequestRsn` | `I_CASecurityDepositReqRsn` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName: 'ICASECDEPREQRSNT'

@EndUserText.label: 'Security Deposit Request Reason - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CASecurityDepositRequestReason',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #B,
                             sizeCategory: #S } }
                             
@VDM.viewType: #BASIC

define view entity I_CASecurityDepositReqRsnText 
  as select from tfk_sec_reason_t
  
  association [1..1] to I_CASecurityDepositReqRsn     as _CASecurityDepositRequestRsn on $projection.CASecurityDepositRequestReason = _CASecurityDepositRequestRsn.CASecurityDepositRequestReason
  association [0..1] to I_Language                    as _Language                    on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_CASecurityDepositRequestRsn'
  key reason  as CASecurityDepositRequestReason,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras   as Language,

      @Semantics.text
       cast ( text    as req_reason_txt_kk ) as CASecurityDepositReqReasonText,

      _Language,
      _CASecurityDepositRequestRsn
}
```
