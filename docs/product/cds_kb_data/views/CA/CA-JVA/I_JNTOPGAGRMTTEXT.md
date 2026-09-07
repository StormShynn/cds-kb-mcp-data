---
name: I_JNTOPGAGRMTTEXT
description: "Jntopgagrmttext"
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
  - text-view
  - text
  - component:CA-JVA
  - lob:Cross-Application Components
---
# I_JNTOPGAGRMTTEXT

**Jntopgagrmttext**

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
| `CompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `JntOpgAgrmt` | ✓ | |  | `joa` | `CHAR(6)` | Joint Operating Agreement |
| `JntOpgAgrmtText` |  | |  | `jtext` | `CHAR(40)` | JOA Description |
| `JntOpgAgrmtLongText` |  | |  | `ltext` | `CHAR(80)` | JOA long text (80 Char) |
| `_Language` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_JntOpgAgrmt` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_JntOpgAgrmt` | `I_JntOpgAgrmt` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJOAT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
//@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled:true }
@VDM.viewType: #BASIC
@ObjectModel.usageType:{
  dataClass: #MASTER,
  sizeCategory: #L,
  serviceQuality: #D }
@ObjectModel.dataCategory: #TEXT
@ObjectModel: { supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY],
                modelingPattern: #ANALYTICAL_DIMENSION }
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'JntOpgAgrmt'
@EndUserText.label: 'Joint Operating Agreement - Text'


define view I_JntOpgAgrmtText
  as select from t8jut
  association [0..1] to I_Language    as _Language    on  $projection.Language = _Language.Language
  association [1..1] to I_CompanyCode as _CompanyCode on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_JntOpgAgrmt as _JntOpgAgrmt on  $projection.CompanyCode = _JntOpgAgrmt.CompanyCode
                                                      and $projection.JntOpgAgrmt = _JntOpgAgrmt.JntOpgAgrmt
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs           as CompanyCode,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
      @UI.hidden: true
  key spras           as Language,
      @ObjectModel.foreignKey.association: '_JntOpgAgrmt'
      @ObjectModel.text.element: ['JntOpgAgrmtText']
  key joa             as JntOpgAgrmt,
      @Semantics.text: true
      jtext           as JntOpgAgrmtText,
      ltext           as JntOpgAgrmtLongText,
      _CompanyCode,
      _Language,
      _JntOpgAgrmt
}
```
