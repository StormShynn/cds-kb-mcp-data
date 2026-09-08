---
name: I_MFGORDNONMATRCVRACCTDETNMETH
description: "Mfgordnonmatrcvracctdetnmeth"
app_component: CO-PC-OBJ-ORD-2CL
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
  - CO
  - CO-PC
  - CO-PC-OBJ
  - interface-view
  - component:CO-PC-OBJ-ORD-2CL
  - lob:Controlling
---
# I_MFGORDNONMATRCVRACCTDETNMETH

**Mfgordnonmatrcvracctdetnmeth**

| Property | Value |
|---|---|
| App Component | `CO-PC-OBJ-ORD-2CL` |
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
| `MfgOrdNonMatlRcvrAcctDetnMeth` | ✓ | |  | `cast( domvalue_l as fco_acct_determination_method)` | `CHAR(2)` | Account Determination Method |
| `MfgOrdNonMatlRcvrDetnMethName` |  | |  | `cast(ddtext as fco_acct_detn_meth_text)` | `CHAR(60)` | Account Determination Method Text |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED,
  personalData.blocking: #NOT_REQUIRED
}

@ObjectModel: {
    usageType: {
        dataClass: #MASTER,
        serviceQuality: #B,
        sizeCategory: #S
    },
    dataCategory: #VALUE_HELP,
    resultSet.sizeCategory: #XS,
    supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER]
}
@ObjectModel.representativeKey: 'MfgOrdNonMatlRcvrAcctDetnMeth'
@Metadata: {
             ignorePropagatedAnnotations: true
           }
//@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName:'INMRVACCTDETNMETH'
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

@EndUserText.label: 'Non-Matl Rcvr Acct Determination Method'
define view entity I_MfgOrdNonMatRcvrAcctDetnMeth
  as select from dd07t
  //association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.text.element: ['MfgOrdNonMatlRcvrDetnMethName']
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  //key cast( case when domvalue_l is initial then '00' else domvalue_l end as fco_acct_determination_method) as MfgOrdNonMatlRcvrAcctDetnMeth,
  key cast( domvalue_l as fco_acct_determination_method) as MfgOrdNonMatlRcvrAcctDetnMeth,
      @Semantics.text: true
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      cast(ddtext as fco_acct_detn_meth_text)                                                               as MfgOrdNonMatlRcvrDetnMethName
}
where
      as4local   = 'A'
  and as4vers    = '0000'
  and domname    = 'FCO_ACCT_DETERMINATION_METHOD'
  and ddlanguage = $session.system_language
```
