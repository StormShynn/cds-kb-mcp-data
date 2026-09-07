---
name: I_JNTOPGAGRMT
description: "Jntopgagrmt"
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
# I_JNTOPGAGRMT

**Jntopgagrmt**

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
| `JntOpgAgrmt` | ✓ | |  | `joa` | `CHAR(6)` | Joint Operating Agreement |
| `JntVntrContractNmbr` |  | |  | `contract` | `CHAR(24)` | JV Contract Number |
| `JntVntrPayrollClearingSet` |  | |  | `payset` | `CHAR(24)` | Set of Accounts to Which Payroll Burden Clearing Applies |
| `JntVntrConstructionExclsnSet` |  | |  | `xsetcon` | `CHAR(24)` | Set of Accounts to Exclude from Construction Overhead Calc. |
| `JntVntrCatastropheExclsnSet` |  | |  | `xsetcat` | `CHAR(24)` | Set of Accounts to Exclude from Catastrophe Overhead Calc. |
| `JntVntrConstructionOvhdRule` |  | |  | `conrule` | `CHAR(6)` | Construction Overhead Rule |
| `JntVntrCatastropheOvhdRule` |  | |  | `catrule` | `CHAR(6)` | Catastrophe Overhead Rule |
| `JVAOvhdPercentProdg` |  | |  | `per1` | `DEC(5)` | Percent 1 (% Producing U.S., % Regular Canada)  (JVA) |
| `JVAExclsnAcctSetPercentProdg` |  | |  | `xper1` | `CHAR(24)` | Exclusion Set of Accounts - Percent 1 (JVA) |
| `JVAOvhdPercentDev` |  | |  | `per2` | `DEC(5)` | Percent 2 (% Development U.S., % Special Canada)  (JVA) |
| `JVAExclsnAcctSetPercentDev` |  | |  | `xper2` | `CHAR(24)` | Exclusion Set of Accounts - Percent 2 (JVA) |
| `JntVntrExplorationOvhdRule` |  | |  | `exprule` | `CHAR(6)` | Exploration Overhead Rule |
| `JntVntrDrillingOvhdRule` |  | |  | `drlrule` | `CHAR(6)` | Drilling Overhead Rule |
| `JntVntrCapitalExclsnSet` |  | |  | `xsetcap` | `CHAR(24)` | Set of Accounts to Exclude from Capital Overhead Calc. |
| `JntVntrOvhdOffsetCostCtr` |  | |  | `offcc` | `CHAR(10)` | Overhead Offset Cost Centre - JV |
| `JntOpgAgrmtProdgWellThld` |  | |  | `joaprth` | `CHAR(1)` | Perform Producing Well Threshold Calculation at JOA Level |
| `JntVntrOvhdRecurringDoc` |  | |  | `recdoc` | `CHAR(10)` | Recurring Document Number - JV overheads |
| `CompanyCodeCurrency` |  | | `_CompanyCode` | `Currency` | `CUKY(5)` | Currency Key |
| `JntVntrOvhdFlatRateAmt` |  | |  | `flatrate` | `CURR(13)` | Flat Rate - JV overheads |
| `JntVntrExpnIsEscalated` |  | |  | `escal` | `CHAR(1)` | Escalatable |
| `JntOpgAgrmtClass` |  | |  | `aclass` | `CHAR(2)` | Joint Operating Agreement Class |
| `JntOpgAgrmtCreatedByUser` |  | |  | `cruser` | `CHAR(12)` | User who Created |
| `JntOpgAgrmtCreationTime` |  | |  | `case when crtime is null or crtime = '' then cast('000000' as abap.tims) else cast(substring(crtime, 1, 6) as abap.tims) end` | `TIMS(6)` |  |
| `JntOpgAgrmtCreationDate` |  | |  | `case when crdate is null or crdate = '' then cast('00000000'as jv_crdate ) else crdate end` | `DATS(8)` | Date Created |
| `JntOpgAgrmtLastChangedByUser` |  | |  | `chuser` | `CHAR(12)` | User who Last Changed |
| `JntOpgAgrmtLastChangedTime` |  | |  | `case when chtime is null or chtime = '' then cast('000000' as abap.tims) else cast(substring(chtime, 1, 6) as abap.tims) end` | `TIMS(6)` |  |
| `JntOpgAgrmtLastChangedDate` |  | |  | `case when chdate is null or chdate = '' then cast('00000000' as jv_chdate) else chdate end` | `DATS(8)` | Date Last Changed |
| `JntVntrPrioPerdDrillingIsCalc` |  | |  | `drillp` | `CHAR(1)` | Calculate Drilling Days using prior period. |
| `JntVntrWBSElmntOvhdIsCalc` |  | |  | `allwbs` | `CHAR(1)` | Calculate all WBS elements for overhead |
| `JntOpgAgrmtDrillingPayRate` |  | |  | `dfpay` | `DEC(5)` | % Drilling Payroll Burden in U.S. |
| `JntOpgAgrmtNonDrillingPayRate` |  | |  | `ndpay` | `DEC(5)` | Non-Drilling % to Apply for U.S. Payroll Burden Clearing |
| `_CompanyCode` | | ✓ | | | | |
| `_JntOpgAgrmtClass` | | ✓ | | | | |
| `_JntOpgAgrmtText` | | ✓ | | | | |
| `_JntOpgAgrmtEquityTypeGrp` | | ✓ | | | | |
| `_JntOpgAgrmtPartShr` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_JntOpgAgrmtClass` | `I_JntOpgAgrmtClass` | [1..1] |
| `_JntOpgAgrmtText` | `I_JntOpgAgrmtText` | [0..*] |
| `_JntOpgAgrmtEquityTypeGrp` | `I_JntOpgAgrmtEquityTypeGrp` | [0..*] |
| `_JntOpgAgrmtPartShr` | `I_JntOpgAgrmtPartShr` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJOA'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Joint Operating Agreement'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@ObjectModel:{
 representativeKey: 'JntOpgAgrmt',
 usageType.dataClass: #MASTER,
 usageType.sizeCategory: #L,
 usageType.serviceQuality: #A,
 supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, 
                         #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY, #UI_PROVIDER_PROJECTION_SOURCE ],
                modelingPattern: #ANALYTICAL_DIMENSION }
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@ObjectModel.sapObjectNodeType.name: 'JointOperatingAgreement'
@ClientHandling.algorithm: #SESSION_VARIABLE

define view I_JntOpgAgrmt
  as select from t8ju
  association [1..1] to I_CompanyCode              as _CompanyCode              on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_JntOpgAgrmtClass         as _JntOpgAgrmtClass         on  $projection.CompanyCode      = _JntOpgAgrmtClass.CompanyCode
                                                                                and $projection.JntOpgAgrmtClass = _JntOpgAgrmtClass.JntOpgAgrmtClass
  association [0..*] to I_JntOpgAgrmtText          as _JntOpgAgrmtText          on  $projection.CompanyCode = _JntOpgAgrmtText.CompanyCode
                                                                                and $projection.JntOpgAgrmt = _JntOpgAgrmtText.JntOpgAgrmt
  association [0..*] to I_JntOpgAgrmtEquityTypeGrp as _JntOpgAgrmtEquityTypeGrp on  $projection.CompanyCode = _JntOpgAgrmtEquityTypeGrp.CompanyCode
                                                                                and $projection.JntOpgAgrmt = _JntOpgAgrmtEquityTypeGrp.JntOpgAgrmt
  association [0..*] to I_JntOpgAgrmtPartShr       as _JntOpgAgrmtPartShr       on  $projection.CompanyCode = _JntOpgAgrmtPartShr.CompanyCode
                                                                                and $projection.JntOpgAgrmt = _JntOpgAgrmtPartShr.JntOpgAgrmt
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_JointVentureCompanyCodeVH',
                           element: 'CompanyCode' }
              }]
  key bukrs                 as CompanyCode,
      @ObjectModel.text.association: '_JntOpgAgrmtText'
      @Consumption.valueHelpDefinition: [
             { entity:  { name:    'I_JntOpgAgrmtVH',
                          element: 'JntOpgAgrmt' }
              }]            
  key joa                   as JntOpgAgrmt,
      contract              as JntVntrContractNmbr,
      payset                as JntVntrPayrollClearingSet,
      xsetcon               as JntVntrConstructionExclsnSet,
      xsetcat               as JntVntrCatastropheExclsnSet,
      conrule               as JntVntrConstructionOvhdRule,
      catrule               as JntVntrCatastropheOvhdRule,
      per1                  as JVAOvhdPercentProdg,
      xper1                 as JVAExclsnAcctSetPercentProdg,
      per2                  as JVAOvhdPercentDev,
      xper2                 as JVAExclsnAcctSetPercentDev,
      exprule               as JntVntrExplorationOvhdRule,
      drlrule               as JntVntrDrillingOvhdRule,
      xsetcap               as JntVntrCapitalExclsnSet,
      offcc                 as JntVntrOvhdOffsetCostCtr,
      joaprth               as JntOpgAgrmtProdgWellThld,
      recdoc                as JntVntrOvhdRecurringDoc,
      @Semantics.currencyCode: true
      _CompanyCode.Currency as CompanyCodeCurrency,
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      flatrate              as JntVntrOvhdFlatRateAmt,
      escal                 as JntVntrExpnIsEscalated,
      @ObjectModel.foreignKey.association: '_JntOpgAgrmtClass'
      aclass                as JntOpgAgrmtClass,
      cruser                as JntOpgAgrmtCreatedByUser,

      case when crtime is null or crtime = ''
         then cast('000000' as abap.tims)
         else cast(substring(crtime, 1, 6) as abap.tims)
       end                  as JntOpgAgrmtCreationTime,

      case when crdate is null or crdate = ''
        then cast('00000000'as jv_crdate )
        else crdate
      end                   as JntOpgAgrmtCreationDate,

      chuser                as JntOpgAgrmtLastChangedByUser,

      case when chtime is null or chtime = ''
        then cast('000000' as abap.tims)
        else cast(substring(chtime, 1, 6) as abap.tims)
      end                   as JntOpgAgrmtLastChangedTime,

      case when chdate is null or chdate = ''
        then cast('00000000' as jv_chdate)
        else chdate
      end                   as JntOpgAgrmtLastChangedDate,

      drillp                as JntVntrPrioPerdDrillingIsCalc,
      allwbs                as JntVntrWBSElmntOvhdIsCalc,
      dfpay                 as JntOpgAgrmtDrillingPayRate,
      ndpay                 as JntOpgAgrmtNonDrillingPayRate,

      _CompanyCode,
      _JntOpgAgrmtClass,
      _JntOpgAgrmtText,
      _JntOpgAgrmtEquityTypeGrp,
      _JntOpgAgrmtPartShr
}
```
