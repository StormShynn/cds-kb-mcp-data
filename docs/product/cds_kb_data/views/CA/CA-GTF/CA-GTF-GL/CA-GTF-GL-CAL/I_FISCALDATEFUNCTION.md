---
name: I_FISCALDATEFUNCTION
description: "Fiscaldatefunction"
app_component: CA-GTF-GL-CAL
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
  - CA
  - CA-GTF
  - CA-GTF-GL
  - interface-view
  - component:CA-GTF-GL-CAL
  - lob:Cross-Application Components
---
# I_FISCALDATEFUNCTION

**Fiscaldatefunction**

| Property | Value |
|---|---|
| App Component | `CA-GTF-GL-CAL` |
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
| `DateFunction` | ✓ | |  |  | `CHAR(32)` | Relative Date Function ID |
| `DateFunctionType` |  | |  |  | `NUMC(2)` | Date Function Type |
| `DateFunctionGranularity` |  | |  |  | `NUMC(2)` | Date Function Granularity |
| `DateFunctionStartPoint` |  | |  |  | `NUMC(2)` | Start Point of Date Function |
| `DateFunctionStartOffsetValue` |  | |  |  | `INT4(10)` | Offset Value for Start Date of Date Function |
| `DateFuncStartRelativeOffset` |  | |  |  | `NUMC(2)` | Relative Offset for Start Date of Date Function |
| `DateFunctionStartOffsetUnit` |  | |  |  | `NUMC(2)` | Offset Unit for Start Date of Date Function |
| `DateFunctionStartRelOffsetUnit` |  | |  |  | `NUMC(2)` | Relative Offset Unit for Start Date of Date Function |
| `DateFunctionStartYearOffset` |  | |  |  | `NUMC(2)` | Year Offset for Start Date of Date Function |
| `DateFunctionStartFixedDate` |  | |  |  | `DATS(8)` | Fixed Start Date of Date Function |
| `DateFunctionEndPoint` |  | |  |  | `NUMC(2)` | End Point of Date Function |
| `DateFunctionEndOffsetValue` |  | |  |  | `INT4(10)` | Offset Value for End Date of Date Function |
| `DateFunctionEndRelativeOffset` |  | |  |  | `NUMC(2)` | Relative Offset for End Date of Date Function |
| `DateFunctionEndOffsetUnit` |  | |  |  | `NUMC(2)` | Year Offset for End Date of Date Function |
| `DateFunctionEndRelOffsetUnit` |  | |  |  | `NUMC(2)` | Relative Offset Unit for End Date of Date Function |
| `DateFunctionEndYearOffset` |  | |  |  | `NUMC(2)` | Offset Unit for End Date of Date Function |
| `DateFunctionEndFixedDate` |  | |  |  | `DATS(8)` | Fixed End Date of Date Function |
| `_DateFunctionText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DateFunctionText` | `I_FiscalDateFunctionText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFIDATEFNC'
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Fiscal Date Function'
@ObjectModel.representativeKey: 'DateFunction'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality:  #A
@ObjectModel.usageType.sizeCategory:  #S
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@VDM.viewType: #BASIC 
define view I_FiscalDateFunction as select from I_Datefunction 

  association [0..*] to I_FiscalDateFunctionText as _DateFunctionText on $projection.DateFunction = _DateFunctionText.DateFunction

{
  @ObjectModel.text.association:'_DateFunctionText'
  key DateFunction,
//  ABAPLanguageVersion, 
  DateFunctionType, 
  DateFunctionGranularity,
//  DateFunctionCalendarType,
  DateFunctionStartPoint, 
  DateFunctionStartOffsetValue, 
  DateFuncStartRelativeOffset, 
  DateFunctionStartOffsetUnit, 
  DateFunctionStartRelOffsetUnit,
  DateFunctionStartYearOffset, 
  DateFunctionStartFixedDate, 
  DateFunctionEndPoint, 
  DateFunctionEndOffsetValue, 
  DateFunctionEndRelativeOffset, 
  DateFunctionEndOffsetUnit, 
  DateFunctionEndRelOffsetUnit,
  DateFunctionEndYearOffset, 
  DateFunctionEndFixedDate,
  
  _DateFunctionText
} where DateFunctionCalendarType = '02';
```
