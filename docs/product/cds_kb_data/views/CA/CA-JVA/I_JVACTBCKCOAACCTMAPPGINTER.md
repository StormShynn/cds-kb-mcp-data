---
name: I_JVACTBCKCOAACCTMAPPGINTER
description: "Jvactbckcoaacctmappginter"
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
# I_JVACTBCKCOAACCTMAPPGINTER

**Jvactbckcoaacctmappginter**

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
| `JVAChartOfAccounts` | ✓ | |  |  | `CHAR(4)` | Chart of Accounts |
| `JVAInterCompanyCOA` | ✓ | |  |  | `CHAR(4)` | Intercompany Chart of Accounts |
| `FromGLAccount` | ✓ | |  |  | `CHAR(10)` | Account From |
| `ToGLAccount` |  | |  |  | `CHAR(10)` | Account To |
| `CutbackAccount` |  | |  |  | `CHAR(10)` | Cutback Account |
| `JVAIsToKeepOriginalAccount` |  | |  |  | `CHAR(1)` | Keep original cutback account |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_JVAInterCompanyCOA` | | ✓ | | | | |
| `_FromGLAccount` | | ✓ | | | | |
| `_ToGLAccount` | | ✓ | | | | |
| `_CutbackAccount` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_JVAInterCompanyCOA` | `I_ChartOfAccounts` | [0..1] |
| `_FromGLAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_ToGLAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_CutbackAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |

## Source Code

```abap
@VDM.viewType: #COMPOSITE
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Cutback Account Mapping COA Intercompany'
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

define view entity I_JVACtbckCOAAcctMappgInter

  as select from I_JVACtbckCOAAcctMappgInterBsc as JVACtbckCOAAcctMappgInterBsc

  association [0..1] to I_ChartOfAccounts            as _ChartOfAccounts    on  _ChartOfAccounts.ChartOfAccounts = $projection.JVAChartOfAccounts

  association [0..1] to I_ChartOfAccounts            as _JVAInterCompanyCOA on  _JVAInterCompanyCOA.ChartOfAccounts = $projection.JVAInterCompanyCOA

  association [0..1] to I_GLAccountInChartOfAccounts as _FromGLAccount      on  _FromGLAccount.ChartOfAccounts = $projection.JVAChartOfAccounts
                                                                            and _FromGLAccount.GLAccount       = $projection.FromGLAccount

  association [0..1] to I_GLAccountInChartOfAccounts as _ToGLAccount        on  _ToGLAccount.ChartOfAccounts = $projection.JVAChartOfAccounts
                                                                            and _ToGLAccount.GLAccount       = $projection.ToGLAccount

  association [0..1] to I_GLAccountInChartOfAccounts as _CutbackAccount     on  _CutbackAccount.ChartOfAccounts = $projection.JVAInterCompanyCOA
                                                                            and _CutbackAccount.GLAccount       = $projection.CutbackAccount

{
  @ObjectModel.foreignKey.association: '_ChartOfAccounts'
  key JVACtbckCOAAcctMappgInterBsc.JVAChartOfAccounts,
  @ObjectModel.foreignKey.association: '_JVAInterCompanyCOA'
  key JVACtbckCOAAcctMappgInterBsc.JVAInterCompanyCOA,
  key JVACtbckCOAAcctMappgInterBsc.FromGLAccount,
      JVACtbckCOAAcctMappgInterBsc.ToGLAccount,
      JVACtbckCOAAcctMappgInterBsc.CutbackAccount,
      JVACtbckCOAAcctMappgInterBsc.JVAIsToKeepOriginalAccount,

      _ChartOfAccounts,
      _JVAInterCompanyCOA,
      _FromGLAccount,
      _ToGLAccount,
      _CutbackAccount

}
```
