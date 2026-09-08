---
name: I_STATISTICALKEYFIGURE
description: "Statisticalkeyfigure"
app_component: CO-OM-2CL
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
  - CO-OM
  - interface-view
  - component:CO-OM-2CL
  - lob:Controlling
---
# I_STATISTICALKEYFIGURE

**Statisticalkeyfigure**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
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
| `StatisticalKeyFigure` | ✓ | |  | `cast(stagr as fis_stagr preserving type )` | `CHAR(6)` | Statistical Key Figure |
| `ControllingArea` | ✓ | |  | `cast(kokrs as fis_kokrs preserving type )` | `CHAR(4)` | Controlling Area |
| `StstcKeyFigQuantityUnit` |  | |  | `msehi` | `UNIT(3)` | Unit for Statistical Key Figure |
| `StstcKeyFigCategory` |  | |  | `grtyp` | `CHAR(1)` | Statistical Key Figure Category |
| `StstclKeyFigCreatedAtDateTime` |  | |  | `created_on` | `DEC(15)` | Time Stamp of Creation |
| `StstclKeyFigLastChgdAtDteTme` |  | |  | `last_changed_on` | `DEC(15)` | Time Stamp of Last Change |
| `StstclKeyFigureCreatedByUser` |  | |  | `created_by` | `CHAR(12)` | Created By |
| `StstclKeyFigLastChangedByUser` |  | |  | `last_changed_by` | `CHAR(12)` | Last Changed By |
| `StstclKeyFigureOrigin` |  | |  | `hktyp` | `CHAR(1)` | Flag if indicator is derived from LIS or set manually |
| `LogsInformationSystemTable` |  | |  | `struct` | `CHAR(30)` | Generated DDIC table for LIS, conditions, messages |
| `LogsInfoSystemKeyFigure` |  | |  | `kennz` | `CHAR(30)` | Key Figure from LIS |
| `StstclKeyFigureIsCurrency` |  | |  | `w_flag` | `CHAR(1)` | Indicator if statistical ratio describes a currency |
| `StstclKeyFigProcgPlndValType` |  | |  | `m_plan` | `CHAR(1)` | Process planned values |
| `StstclKeyFigProcgActlValType` |  | |  | `m_ist` | `CHAR(1)` | Actual value processing |
| `_Text` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_StatisticalKeyFigureCat` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_StstclKeyFigureHierNode` | | ✓ | | | | |
| `_UserCrtedContactCard` | | ✓ | | | | |
| `_LastChangedByUserContactCard` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_StatisticalKeyFigureText` | [0..*] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_StatisticalKeyFigureCat` | `I_StatisticalKeyFigureCat` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_StstclKeyFigureHierNode` | `I_StstclKeyFigureHierNode` | [0..*] |
| `_UserCrtedContactCard` | `I_UserContactCard` | [0..1] |
| `_LastChangedByUserContactCard` | `I_UserContactCard` | [0..1] |

## Source Code

```abap
@ObjectModel.representativeKey: 'StatisticalKeyFigure' //Inserted by VDM CDS Suite Plugin
@EndUserText.label: 'Statistical Key Figure'
@AbapCatalog.sqlViewName: 'IFISTSTCKEYFIG'
@ObjectModel.sapObjectNodeType.name: 'StatisticalKeyFigure'
@VDM.viewType: #BASIC
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.type: #CLIENT_DEPENDENT
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@AbapCatalog.buffering: {type: #GENERIC, numberOfKeyFields: 1, status: #ACTIVE}
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
@Metadata.allowExtensions: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
define view I_StatisticalKeyFigure as select from tka03 
association [0..*] to I_StatisticalKeyFigureText as _Text 
   on $projection.ControllingArea       = _Text.ControllingArea 
  and $projection.StatisticalKeyFigure  = _Text.StatisticalKeyFigure
  
association[0..1] to I_ControllingArea as _ControllingArea 
   on $projection.ControllingArea = _ControllingArea.ControllingArea
   
association [0..1] to I_StatisticalKeyFigureCat as _StatisticalKeyFigureCat
  on  $projection.StstcKeyFigCategory  = _StatisticalKeyFigureCat.StstcKeyFigCategory

association [0..1] to I_UnitOfMeasure as _UnitOfMeasure
  on  $projection.StstcKeyFigQuantityUnit      = _UnitOfMeasure.UnitOfMeasure

association [0..*] to I_StstclKeyFigureHierNode  as _StstclKeyFigureHierNode on $projection.ControllingArea = _StstclKeyFigureHierNode.ControllingArea
                                                                            and $projection.StatisticalKeyFigure = _StstclKeyFigureHierNode.StatisticalKeyFigure 
                                                                            
association [0..1] to I_UserContactCard          as _UserCrtedContactCard   on  $projection.StstclKeyFigureCreatedByUser = _UserCrtedContactCard.ContactCardID

association [0..1] to I_UserContactCard          as _LastChangedByUserContactCard on  $projection.StstclKeyFigLastChangedByUser = _LastChangedByUserContactCard.ContactCardID
{
@ObjectModel.hierarchy.association: '_StstclKeyFigureHierNode'
@ObjectModel.text.association: '_Text'
    key cast(stagr as fis_stagr preserving type ) as StatisticalKeyFigure,
@ObjectModel.foreignKey.association: '_ControllingArea' //Inserted by VDM CDS Suite Plugin
    key cast(kokrs as fis_kokrs preserving type ) as ControllingArea,
@ObjectModel.foreignKey.association: '_UnitOfMeasure'
    msehi as StstcKeyFigQuantityUnit,
@ObjectModel.foreignKey.association: '_StatisticalKeyFigureCat'
    grtyp as StstcKeyFigCategory,
    
@Semantics.systemDateTime.createdAt: true
    created_on as StstclKeyFigCreatedAtDateTime,
@Semantics.systemDateTime.lastChangedAt: true    
    last_changed_on as StstclKeyFigLastChgdAtDteTme,
@ObjectModel.foreignKey.association: '_UserCrtedContactCard'  
@Semantics.user.createdBy: true
    created_by as StstclKeyFigureCreatedByUser,
@ObjectModel.foreignKey.association: '_LastChangedByUserContactCard'
@Semantics.user.lastChangedBy: true
    last_changed_by as StstclKeyFigLastChangedByUser,
    
    hktyp   as StstclKeyFigureOrigin,
    
    struct  as LogsInformationSystemTable,
    
    kennz   as LogsInfoSystemKeyFigure,
    
    w_flag  as StstclKeyFigureIsCurrency,
     
    m_plan  as StstclKeyFigProcgPlndValType,
    
    m_ist   as StstclKeyFigProcgActlValType,
        
    _Text,
    _ControllingArea,
    _StatisticalKeyFigureCat,
    _UnitOfMeasure,
    _StstclKeyFigureHierNode,
    _UserCrtedContactCard,
    _LastChangedByUserContactCard
}
```
