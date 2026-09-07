---
name: I_STSTCLKEYFIGUREVALUEITEM
description: "Ststclkeyfigurevalueitem"
app_component: CA-GTF-FXU-FI-CO
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
  - CA-GTF
  - CA-GTF-FXU
  - interface-view
  - item-level
  - component:CA-GTF-FXU-FI-CO
  - lob:Cross-Application Components
---
# I_STSTCLKEYFIGUREVALUEITEM

**Ststclkeyfigurevalueitem**

| Property | Value |
|---|---|
| App Component | `CA-GTF-FXU-FI-CO` |
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
| `ControllingArea` | ✓ | |  | `kokrs` | `CHAR(4)` | Controlling Area |
| `AccountingDocument` | ✓ | |  | `belnr` | `CHAR(10)` | Document Number |
| `AccountingDocumentItem` | ✓ | |  | `buzei` | `NUMC(3)` | Posting Row |
| `FiscalPeriod` |  | |  | `cast(perio as fins_fiscalperiod preserving type )` | `NUMC(3)` | Fiscal Period |
| `StatisticalKeyFigureQuantity` |  | |  | `cast(smebtr as quan1_12)` | `QUAN(23)` | Quantity |
| `StstcKeyFigQuantityUnit` |  | |  | `cast(meinh as fis_ui_seinh preserving type )` | `UNIT(3)` | Statistical Key Figure Quantity Unit |
| `DocumentItemText` |  | |  | `cast(sgtxt as sgtxt preserving type )` | `CHAR(50)` | Item Text |
| `ControllingObject` |  | |  | `objnr` | `CHAR(22)` | Object Number |
| `FiscalYear` |  | |  | `gjahr` | `NUMC(4)` | Fiscal Year |
| `StatisticalKeyFigure` |  | |  | `cast(stagr as fis_stagr preserving type )` | `CHAR(6)` | Statistical Key Figure |
| `ControllingBusTransacType` |  | |  | `vrgng` | `CHAR(4)` | CO Business Transaction |
| `PersonnelNumber` |  | |  | `pernr` | `NUMC(8)` | Personnel Number |
| `PartnerFunctionalArea` |  | |  | `fkber` | `CHAR(16)` | Functional Area |
| `PartnerFund` |  | |  | `geber` | `CHAR(10)` | Fund |
| `PartnerGrant` |  | |  | `grant_nbr` | `CHAR(20)` | Grant |
| `PartnerBudgetPeriod` |  | |  | `budget_pd` | `CHAR(10)` | Budget Period |
| `PostingDate` |  | |  | `budat` | `DATS(8)` | Posting Date |
| `DocumentDate` |  | |  | `bldat` | `DATS(8)` | Document Date |
| `AccountingDocumentCreationDate` |  | |  | `cpudt` | `DATS(8)` | Date Document Was Created |
| `AccountingDocCreatedByUser` |  | |  | `usnam` | `CHAR(12)` | User Name |
| `ControllingDocumentHeaderText` |  | |  | `bltxt` | `CHAR(50)` | Document Header Text |
| `IsReversalDocument` |  | |  | `stflg` | `CHAR(1)` | Identifier for reversal document |
| `IsReversed` |  | |  | `stokz` | `CHAR(1)` | Indicator: Document was reversed |
| `ReversedReferenceDocument` |  | |  | `cast(refbn as reversedreferencedocument preserving type )` | `CHAR(10)` | Reversed Reference Document |
| `ExchangeRateDate` |  | |  | `cast(wsdat as fin_currconvdat preserving type )` | `DATS(8)` | Date of Translation of Transaction Currency into Local |
| `ExchangeRateType` |  | |  | `kurst` | `CHAR(4)` | Exchange Rate Type |
| `ControllingAreaCurrency` |  | |  | `kwaer` | `CUKY(5)` | Controlling area currency |
| `ReferenceDocumentType` |  | |  | `cast(awtyp as fis_awtyp preserving type )` | `CHAR(5)` | Reference Document Type |
| `SettlementReferenceDate` |  | |  | `dabrz` | `DATS(8)` | Reference date for settlement |
| `_ControllingArea` | | ✓ | | | | |
| `_StstcKeyFigQuantityUnit` | | ✓ | | | | |
| `_StatisticalKeyFigure` | | ✓ | | | | |
| `_PartnerFunctionalArea` | | ✓ | | | | |
| `_PartnerGrant` | | ✓ | | | | |
| `_PartnerBudgetPeriod` | | ✓ | | | | |
| `_ReferenceDocumentType` | | ✓ | | | | |
| `_ControllingAreaCurrency` | | ✓ | | | | |
| `_ReferenceDocumentTypeText` | | ✓ | | | | |
| `_PartnerGrantText` | | ✓ | | | | |
| `_PartnerBudgetPeriodText` | | ✓ | | | | |
| `_PartnerFunctionalAreaText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_StstcKeyFigQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_StatisticalKeyFigure` | `I_StatisticalKeyFigure` | [1..1] |
| `_PartnerFunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_PartnerGrant` | `I_Grant` | [0..1] |
| `_PartnerBudgetPeriod` | `I_BudgetPeriod` | [0..1] |
| `_ReferenceDocumentType` | `I_ReferenceDocumentType` | [0..1] |
| `_ControllingAreaCurrency` | `I_Currency` | [1..1] |
| `_ReferenceDocumentTypeText` | `I_ReferenceDocumentTypeText` | [0..*] |
| `_PartnerGrantText` | `I_GrantText` | [0..*] |
| `_PartnerBudgetPeriodText` | `I_BudgetPeriodText` | [0..*] |
| `_PartnerFunctionalAreaText` | `I_FunctionalAreaText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISKFVALITEM'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Statistical Key Figure Value Item'

@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC

@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #C

@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]


define view I_StstclKeyFigureValueItem
  as select from covpr 
  
  association [0..1] to I_ControllingArea              as _ControllingArea               on  $projection.ControllingArea = _ControllingArea.ControllingArea
  
  association [0..1] to I_UnitOfMeasure                as _StstcKeyFigQuantityUnit       on  $projection.StstcKeyFigQuantityUnit = _StstcKeyFigQuantityUnit.UnitOfMeasure
  
  association [1..1] to I_StatisticalKeyFigure         as _StatisticalKeyFigure          on  $projection.StatisticalKeyFigure = _StatisticalKeyFigure.StatisticalKeyFigure
                                                                                         and $projection.ControllingArea      = _StatisticalKeyFigure.ControllingArea
                                                                                         
  association [0..1] to I_FunctionalArea               as _PartnerFunctionalArea         on  $projection.PartnerFunctionalArea = _PartnerFunctionalArea.FunctionalArea                                                                                       
  
  association [0..1] to I_Grant                        as _PartnerGrant                  on  $projection.PartnerGrant            = _PartnerGrant.GrantID
  
  association [0..1] to I_BudgetPeriod                 as _PartnerBudgetPeriod           on  $projection.PartnerBudgetPeriod = _PartnerBudgetPeriod.BudgetPeriod
  
  association [0..1] to I_ReferenceDocumentType        as _ReferenceDocumentType         on  $projection.ReferenceDocumentType = _ReferenceDocumentType.ReferenceDocumentType
  
  association [1..1] to I_Currency                     as _ControllingAreaCurrency       on $projection.ControllingAreaCurrency = _ControllingAreaCurrency.Currency 
    
  association [0..*] to I_ReferenceDocumentTypeText    as _ReferenceDocumentTypeText     on  $projection.ReferenceDocumentType = _ReferenceDocumentTypeText.ReferenceDocumentType
  
  association [0..*] to I_GrantText                    as _PartnerGrantText              on  $projection.PartnerGrant = _PartnerGrantText.GrantID
    
  association [0..*] to I_BudgetPeriodText             as _PartnerBudgetPeriodText       on  $projection.PartnerBudgetPeriod = _PartnerBudgetPeriodText.BudgetPeriod
    
  association [0..*] to I_FunctionalAreaText           as _PartnerFunctionalAreaText     on  $projection.PartnerFunctionalArea = _PartnerFunctionalAreaText.FunctionalArea
{
  @ObjectModel.foreignKey.association: '_ControllingArea'
  key kokrs     as ControllingArea,
  key belnr     as AccountingDocument,
  key buzei     as AccountingDocumentItem,
      @Semantics.fiscal.period: true
      cast(perio as fins_fiscalperiod preserving type )  as FiscalPeriod,
      @Semantics.quantity.unitOfMeasure: 'StstcKeyFigQuantityUnit'
      cast(smebtr as quan1_12)    as StatisticalKeyFigureQuantity,
      @ObjectModel.foreignKey.association: '_StstcKeyFigQuantityUnit'
      cast(meinh as fis_ui_seinh preserving type ) as StstcKeyFigQuantityUnit,
      cast(sgtxt as sgtxt preserving type ) as DocumentItemText,
      //Ledger for Controlling Objects
      objnr     as ControllingObject,
      gjahr     as FiscalYear,
      @ObjectModel.foreignKey.association: '_StatisticalKeyFigure'
      cast(stagr as fis_stagr preserving type ) as StatisticalKeyFigure,
      vrgng     as ControllingBusTransacType,
      pernr     as PersonnelNumber,
      @ObjectModel.foreignKey.association: '_PartnerFunctionalArea'
      fkber     as PartnerFunctionalArea,
      geber     as PartnerFund,
      @ObjectModel.foreignKey.association: '_PartnerGrant'
      grant_nbr as PartnerGrant,
      @ObjectModel.foreignKey.association: '_PartnerBudgetPeriod' 
      budget_pd as PartnerBudgetPeriod,
      budat     as PostingDate,
      bldat     as DocumentDate,
      cpudt     as AccountingDocumentCreationDate,
      usnam     as AccountingDocCreatedByUser,
      bltxt     as ControllingDocumentHeaderText,
      stflg     as IsReversalDocument,
      stokz     as IsReversed,
      cast(refbn as reversedreferencedocument preserving type ) as ReversedReferenceDocument,
      cast(wsdat as fin_currconvdat preserving type ) as ExchangeRateDate,
      kurst     as ExchangeRateType,
      @ObjectModel.foreignKey.association: '_ControllingAreaCurrency'
      kwaer     as ControllingAreaCurrency,
      @ObjectModel.foreignKey.association: '_ReferenceDocumentType'
      cast(awtyp as fis_awtyp preserving type ) as ReferenceDocumentType,
      dabrz     as SettlementReferenceDate,
      
      _ControllingArea,
      _StstcKeyFigQuantityUnit,
      _StatisticalKeyFigure,
      _PartnerFunctionalArea,
      _PartnerGrant,
      _PartnerBudgetPeriod,
      _ReferenceDocumentType,
      _ControllingAreaCurrency,
      
      _ReferenceDocumentTypeText,
      _PartnerGrantText,
      _PartnerBudgetPeriodText,
      _PartnerFunctionalAreaText
      
}
where vrgng = 'RKS'
```
