---
name: I_JNTOPGAGRMTCLASSTEXT
description: "Jntopgagrmtclasstext"
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
# I_JNTOPGAGRMTCLASSTEXT

**Jntopgagrmtclasstext**

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
| `JntOpgAgrmtClass` | ✓ | |  | `aclass` | `CHAR(2)` | Joint Operating Agreement Class |
| `JntOpgAgrmtClassText` |  | |  | `actext` | `CHAR(35)` | Joint operating agreement class text |
| `_Language` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_JntOpgAgrmtClass` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_JntOpgAgrmtClass` | `I_JntOpgAgrmtClass` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJOACLT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Joint Operating Agreement Class - Text'
@VDM.viewType: #BASIC
@ObjectModel: { 
  usageType.dataClass: #CUSTOMIZING, 
  usageType.sizeCategory: #S,
  usageType.serviceQuality: #A,
  dataCategory: #TEXT,
  representativeKey: 'JntOpgAgrmtClass'
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT 
define view I_JntOpgAgrmtClassText
  as select from t8j9g
  association [0..1] to I_Language         as _Language         on  $projection.Language = _Language.Language
  association [1..1] to I_CompanyCode      as _CompanyCode      on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_JntOpgAgrmtClass as _JntOpgAgrmtClass on  $projection.CompanyCode      = _JntOpgAgrmtClass.CompanyCode
                                                                and $projection.JntOpgAgrmtClass = _JntOpgAgrmtClass.JntOpgAgrmtClass
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs              as CompanyCode,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key spras              as Language,
      @ObjectModel.foreignKey.association: '_JntOpgAgrmtClass'
  key aclass             as JntOpgAgrmtClass,
      @Semantics.text: true
      actext             as JntOpgAgrmtClassText,
      
      _CompanyCode,
      _Language,
      _JntOpgAgrmtClass
}
```
