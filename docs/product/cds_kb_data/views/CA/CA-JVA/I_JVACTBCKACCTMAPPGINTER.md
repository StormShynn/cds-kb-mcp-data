---
name: I_JVACTBCKACCTMAPPGINTER
description: "Jvactbckacctmappginter"
app_component: CA-JVA
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
  - CA
  - CA-JVA
  - interface-view
  - component:CA-JVA
  - lob:Cross-Application Components
---
# I_JVACTBCKACCTMAPPGINTER

**Jvactbckacctmappginter**

| Property | Value |
|---|---|
| App Component | `CA-JVA` |
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
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `JntVntrIntcoCode` | ✓ | |  |  | `CHAR(4)` | Intercompany code |
| `FromGLAccount` | ✓ | |  |  | `CHAR(10)` | Account From |
| `ToGLAccount` |  | |  |  | `CHAR(10)` | Account To |
| `CutbackAccount` |  | |  |  | `CHAR(10)` | Cutback Account |
| `JVAIsToKeepOriginalAccount` |  | |  |  | `CHAR(1)` | Keep original cutback account |
| `_CompanyCode` | | ✓ | | | | |
| `_InterCompanyCompanyCode` | | ✓ | | | | |
| `_FromGLAccount` | | ✓ | | | | |
| `_ToGLAccount` | | ✓ | | | | |
| `_CutbackAccount` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_InterCompanyCompanyCode` | `I_CompanyCode` | [0..1] |
| `_FromGLAccount` | `I_GLAccountInCompanyCode` | [0..1] |
| `_ToGLAccount` | `I_GLAccountInCompanyCode` | [0..1] |
| `_CutbackAccount` | `I_GLAccountInCompanyCode` | [0..1] |

## Source Code

```abap
@VDM.viewType: #COMPOSITE
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Cutback Account Mapping Intercompany'
@Metadata.ignorePropagatedAnnotations: true
@Analytics: { dataCategory: #DIMENSION }
@ObjectModel.representativeKey: 'FromGLAccount'
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, 
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE, 
                                      #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@Analytics.internalName: #LOCAL
@Metadata.allowExtensions: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #S,
  dataClass: #MIXED
}

define view entity I_JVACtbckAcctMappgInter

  as select from I_JVACtbckAcctMappgInterBsc as JVACtbckAcctMappgInterBsc

  association [0..1] to I_CompanyCode            as _CompanyCode             on  _CompanyCode.CompanyCode = $projection.CompanyCode

  association [0..1] to I_CompanyCode            as _InterCompanyCompanyCode on  _InterCompanyCompanyCode.CompanyCode = $projection.JntVntrIntcoCode

  association [0..1] to I_GLAccountInCompanyCode as _FromGLAccount           on  _FromGLAccount.CompanyCode = $projection.CompanyCode
                                                                             and _FromGLAccount.GLAccount   = $projection.FromGLAccount

  association [0..1] to I_GLAccountInCompanyCode as _ToGLAccount             on  _ToGLAccount.CompanyCode = $projection.CompanyCode
                                                                             and _ToGLAccount.GLAccount   = $projection.ToGLAccount

  association [0..1] to I_GLAccountInCompanyCode as _CutbackAccount          on  _CutbackAccount.CompanyCode = $projection.JntVntrIntcoCode
                                                                             and _CutbackAccount.GLAccount   = $projection.CutbackAccount

{
  @ObjectModel.foreignKey.association: '_CompanyCode'
  key JVACtbckAcctMappgInterBsc.CompanyCode,
  @ObjectModel.foreignKey.association: '_InterCompanyCompanyCode'
  key JVACtbckAcctMappgInterBsc.JntVntrIntcoCode,
  key JVACtbckAcctMappgInterBsc.FromGLAccount,
      JVACtbckAcctMappgInterBsc.ToGLAccount,
      JVACtbckAcctMappgInterBsc.CutbackAccount,
      JVACtbckAcctMappgInterBsc.JVAIsToKeepOriginalAccount,

      _CompanyCode,
      _InterCompanyCompanyCode,
      _FromGLAccount,
      _ToGLAccount,
      _CutbackAccount
}
```
