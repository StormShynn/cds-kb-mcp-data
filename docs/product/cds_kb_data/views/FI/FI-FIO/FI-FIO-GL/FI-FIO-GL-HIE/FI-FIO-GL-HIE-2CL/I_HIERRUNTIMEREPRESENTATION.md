---
name: I_HIERRUNTIMEREPRESENTATION
description: "Hierruntimerepresentation"
app_component: FI-FIO-GL-HIE-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - interface-view
  - component:FI-FIO-GL-HIE-2CL
  - lob:Finance
---
# I_HIERRUNTIMEREPRESENTATION

**Hierruntimerepresentation**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-HIE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RuntimeHierarchy` | ✓ | |  | `hryid` | `CHAR(40)` | Hierarchy ID |
| `ValidityEndDate` | ✓ | |  | `cast(hryvalto as fis_datbi preserving type )` | `DATS(8)` | Validity End Date |
| `HierarchyType` |  | |  | `hrytyp` | `CHAR(4)` | Hierarchy Type |
| `ValidityStartDate` |  | |  | `cast(hryvalfrom as fis_datab preserving type )` | `DATS(8)` | Validity Start Date |
| `LastChangedByUser` |  | |  | `upduser` | `CHAR(12)` | Last Changed By |
| `LastChangeDateTime` |  | |  | `updtime` | `DEC(15)` | Last Updated At (Timestamp) |
| `HierarchyClass` |  | |  | `hrycls` | `CHAR(12)` | Hierarchy Class |
| `HierarchyShortID` |  | |  | `hrysid` | `CHAR(20)` | Hierarchy ID |
| `FromCreationDateTime` |  | |  | `cretime` | `DEC(15)` | Created At (Timestamp) |
| `CreatedByUser` |  | |  | `creuser` | `CHAR(12)` | Created by |
| `ControllingArea` |  | |  | `kokrs` | `CHAR(4)` | Controlling Area |
| `ChartOfAccounts` |  | |  | `ktopl` | `CHAR(4)` | Chart of Accounts |
| `ConsolidationChartOfAccounts` |  | |  | `itclg` | `CHAR(2)` | Consolidation Chart of Accounts |
| `SubItemCategory` |  | |  | `sityp` | `CHAR(3)` | Subitem Category |
| `ValidationScenarioID` |  | |  | `scen_id` | `CHAR(5)` | Validation Scenario |
| `FinancialManagementArea` |  | |  | `fikrs` | `CHAR(4)` | Financial Management Area |
| `FinMgmtAreaFiscalYear` |  | |  | `fma_fisyear` | `NUMC(4)` | Fiscal Year for Financial Management Area |
| `SalesOrganization` |  | |  | `salesorganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  | `distributionchannel` | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  | `division` | `CHAR(2)` | Division |
| `Language` |  | |  | `dspra` | `LANG(1)` | Language Key |
| `GroupChartOfAccountIsUsed` |  | |  | `xergs` | `CHAR(1)` | Financial Statement Version Uses Group Chart of Accounts |
| `FinancialStatementAssetsItem` |  | |  | `aktva` | `CHAR(10)` | Item Key Representing the Assets |
| `FinStatementLiabilitiesItem` |  | |  | `pssva` | `CHAR(10)` | Item Key Representing the Liabilities |
| `FinancialStatementNetLossItem` |  | |  | `ergak` | `CHAR(10)` | Item Key Representing the Line Item Net Loss |
| `FinStatementNetProfitItem` |  | |  | `ergpa` | `CHAR(10)` | Fin.Statement Key Representing the Net Profit/Yr |
| `FinStatementProfitAndLossItem` |  | |  | `erggv` | `CHAR(10)` | Fin.Statement Key Representing the P+L Profit Item |
| `FinancialStatementOrphansItem` |  | |  | `zuord` | `CHAR(10)` | Item Key Representing the Non-Assignable Accounts |
| `FinancialStatementNotesItem` |  | |  | `anhng` | `CHAR(10)` | Item Key That Represents the Notes to Financial Statements |
| `GeneralLedgerAgingScope` |  | |  | `aging` | `CHAR(10)` | Aging |
| `FunctionalAreaIsUsed` |  | |  | `funareaassigned` | `CHAR(1)` | Indicator: Functional Area Enabled |
| `SemanticTagIsUsed` |  | |  | `semtagassigned` | `CHAR(1)` | Indicator: Semantic Tag Assigned |
| `HierarchyNodeIsTimeDependent` |  | |  | `node_timedep` | `CHAR(1)` | Indicator: Node is time-dependent |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_HierRuntimeRprstnText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IHRRPDIR'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Hierarchy Directory'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #XL
   }
}
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true

define view I_HierRuntimeRepresentation
  as select from hrrp_dir_n
  association [0..*] to I_HierRuntimeRprstnText as _Text on  $projection.RuntimeHierarchy = _Text.RuntimeHierarchy
                                                         and $projection.ValidityEndDate  = _Text.ValidityEndDate
{
               @ObjectModel.text.association: '_Text'
  key          hryid                                          as RuntimeHierarchy,

               @Semantics.businessDate.to: true
  key          cast(hryvalto as fis_datbi preserving type )   as ValidityEndDate,
               hrytyp                                         as HierarchyType,

               @Semantics.businessDate.from: true
               cast(hryvalfrom as fis_datab preserving type ) as ValidityStartDate,

               @Semantics.user.lastChangedBy: true
               upduser                                        as LastChangedByUser,
               @Semantics.systemDateTime.lastChangedAt: true
               updtime                                        as LastChangeDateTime,

               hrycls                                         as HierarchyClass,
               hrysid                                         as HierarchyShortID,
               cretime                                        as FromCreationDateTime,
               creuser                                        as CreatedByUser,
               //HRRP_SI_CLFD
               kokrs                                          as ControllingArea,
               ktopl                                          as ChartOfAccounts,
               itclg                                          as ConsolidationChartOfAccounts,
               sityp                                          as SubItemCategory,
               scen_id                                        as ValidationScenarioID,
               fikrs                                          as FinancialManagementArea,
               fma_fisyear                                    as FinMgmtAreaFiscalYear,
               //HRRP_SI_HATTR
               salesorganization                              as SalesOrganization,
               distributionchannel                            as DistributionChannel,
               division                                       as Division,
               //HRRP_SI_FSV
               dspra                                          as Language,
               xergs                                          as GroupChartOfAccountIsUsed,
               aktva                                          as FinancialStatementAssetsItem,
               pssva                                          as FinStatementLiabilitiesItem,
               ergak                                          as FinancialStatementNetLossItem,
               ergpa                                          as FinStatementNetProfitItem,
               erggv                                          as FinStatementProfitAndLossItem,
               zuord                                          as FinancialStatementOrphansItem,
               anhng                                          as FinancialStatementNotesItem,
               aging                                          as GeneralLedgerAgingScope,
               funareaassigned                                as FunctionalAreaIsUsed,
               semtagassigned                                 as SemanticTagIsUsed,
               node_timedep                                   as HierarchyNodeIsTimeDependent,
               _Text
}
```
