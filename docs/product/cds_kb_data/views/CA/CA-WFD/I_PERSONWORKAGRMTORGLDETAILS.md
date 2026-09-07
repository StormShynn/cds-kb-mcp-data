---
name: I_PERSONWORKAGRMTORGLDETAILS
description: "Personworkagrmtorgldetails"
app_component: CA-WFD
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
  - CA-WFD
  - interface-view
  - component:CA-WFD
  - lob:Cross-Application Components
---
# I_PERSONWORKAGRMTORGLDETAILS

**Personworkagrmtorgldetails**

| Property | Value |
|---|---|
| App Component | `CA-WFD` |
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
| `PersonWorkAgreement` | ✓ | |  | `cast( dets.workforce_assgmt_id as persno preserving type )` | `NUMC(8)` | Personnel Number |
| `StartDate` | ✓ | |  | `cast( dets.start_date as begda preserving type )` | `DATS(8)` | Start Date |
| `EndDate` | ✓ | |  | `cast( dets.end_date as endda preserving type )` | `DATS(8)` | End Date |
| `CompanyCode` |  | |  | `company_code` | `CHAR(4)` | Company Code |
| `CostCenter` |  | |  | `cost_center` | `CHAR(10)` | Cost Center |
| `Job` |  | |  | `cast( dets.job_code as stell )` | `NUMC(8)` | Job |
| `OrganizationalUnit` |  | |  | `cast( '' as orgeh )` | `NUMC(8)` | Organizational Unit |
| `PersonWorkAgrmtAuthznGrpg` |  | |  | `cast( '' as vdsk1 )` | `CHAR(14)` | Organizational Key |
| `_CompanyCode` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_PersonWorkAgrmtJobText` | | ✓ | | | | |
| `_OrganizationalUnitText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1] |
| `_CostCenter` | `I_CostCenter` | [1] |
| `_PersonWorkAgrmtJobText` | `I_PersonWorkAgrmtJobText` | [0..*] |
| `_OrganizationalUnitText` | `I_OrganizationalUnitText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPERWKAGRORGDET'
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Person Work Agreement Organization Details'
@Analytics.dataExtraction.enabled: true
@Analytics.dataCategory: #DIMENSION
@AbapCatalog.preserveKey:true
@AccessControl.privilegedAssociations:  [ '_PersonWorkAgrmtJobText', '_OrganizationalUnitText']
@ObjectModel.representativeKey: 'PersonWorkAgreement'
@ObjectModel.sapObjectNodeType.name:'WorkAssignmentDetails'
@Metadata.ignorePropagatedAnnotations:true
@Metadata.allowExtensions:true
@Consumption.dbHints:['NO_JOIN_THRU_JOIN']
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]

define view I_PersonWorkAgrmtOrglDetails
  as select from wfd_d_assgmtdets as dets
  association [1]    to I_CompanyCode            as _CompanyCode            on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1]    to I_CostCenter             as _CostCenter             on  $projection.CostCenter              = _CostCenter.CostCenter
                                                                            and $projection.CompanyCode             = _CostCenter.CompanyCode
                                                                            and _CostCenter.ValidityEndDate   >= $projection.EndDate
                                                                            and _CostCenter.ValidityStartDate <= $projection.EndDate
  association [0..*] to I_PersonWorkAgrmtJobText as _PersonWorkAgrmtJobText on  $projection.Job                   = _PersonWorkAgrmtJobText.Job
                                                                            and _PersonWorkAgrmtJobText.EndDate   >= $projection.EndDate
                                                                            and _PersonWorkAgrmtJobText.StartDate <= $projection.EndDate
  association [0..*] to I_OrganizationalUnitText as _OrganizationalUnitText on  $projection.OrganizationalUnit    = _OrganizationalUnitText.OrganizationalUnit
                                                                            and _OrganizationalUnitText.EndDate   >= $projection.EndDate
                                                                            and _OrganizationalUnitText.StartDate <= $projection.EndDate
{
  key  cast( dets.workforce_assgmt_id as persno preserving type ) as PersonWorkAgreement,
       @Semantics.businessDate.from
  key  cast( dets.start_date as begda preserving type )           as StartDate,
       @Semantics.businessDate.to
  key  cast( dets.end_date as endda preserving type )             as EndDate,
       dets.company_code                                          as CompanyCode,
       dets.cost_center                                           as CostCenter,
       cast( dets.job_code as stell )                             as Job,
       cast( '' as orgeh )                                        as OrganizationalUnit,
       cast( '' as vdsk1 )                                        as PersonWorkAgrmtAuthznGrpg,
       _CompanyCode,
       _CostCenter,
       _PersonWorkAgrmtJobText,
       _OrganizationalUnitText
}
where dets.company_code <> '' and  dets.technical_inactive_ind is initial


//      as select from P_PersonWorkAgrmtOrglDetails
/*  as select from WFD_TF_PersonWorkOrglDetails( p_client : $session.client )
  association [1]    to I_CompanyCode            as _CompanyCode            on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1]    to I_CostCenter             as _CostCenter             on  $projection.CostCenter        = _CostCenter.CostCenter
                                                                            and $projection.CompanyCode       = _CostCenter.CompanyCode
                                                                            and _CostCenter.ValidityEndDate   >= $projection.EndDate
                                                                            and _CostCenter.ValidityStartDate <= $projection.EndDate
  association [0..*] to I_PersonWorkAgrmtJobText as _PersonWorkAgrmtJobText on  $projection.Job                   = _PersonWorkAgrmtJobText.Job
                                                                            and _PersonWorkAgrmtJobText.EndDate   >= $projection.EndDate
                                                                            and _PersonWorkAgrmtJobText.StartDate <= $projection.EndDate
  association [0..*] to I_OrganizationalUnitText as _OrganizationalUnitText on  $projection.OrganizationalUnit    = _OrganizationalUnitText.OrganizationalUnit
                                                                            and _OrganizationalUnitText.EndDate   >= $projection.EndDate
                                                                            and _OrganizationalUnitText.StartDate <= $projection.EndDate
{
  key  PersonWorkAgreement,
       @Semantics.businessDate.from
  key  StartDate,
       @Semantics.businessDate.to
  key  EndDate,
       CompanyCode,
       CostCenter,
       Job,
       OrganizationalUnit,
       PersonWorkAgrmtAuthznGrpg,
       _CompanyCode,
       _CostCenter,
       _PersonWorkAgrmtJobText,
       _OrganizationalUnitText
} */


//define view I_PersonWorkAgrmtOrglDetails
//  as select from P_PersonWorkAgrmtOrglDetails
//
//{
//  key  PersonWorkAgreement,
//       @Semantics.businessDate.from
//  key  StartDate,
//       @Semantics.businessDate.to
//  key  EndDate,
//       CompanyCode,
//       CostCenter,
//       Job,
//       OrganizationalUnit,
//       PersonWorkAgrmtAuthznGrpg,
//       _CompanyCode,
//       _CostCenter,
//       _PersonWorkAgrmtJobText,
//       _OrganizationalUnitText
//}


//   as select from pa0001 as PA0001
//  association [1]    to I_CompanyCode            as _CompanyCode            on  pa0001.bukrs = _CompanyCode.CompanyCode
//  association [1]    to I_CostCenter             as _CostCenter             on  pa0001.kostl                  =  _CostCenter.CostCenter
//                                                                            and pa0001.bukrs                  =  _CostCenter.CompanyCode
//                                                                            and _CostCenter.ValidityEndDate   >= pa0001.endda
//                                                                            and _CostCenter.ValidityStartDate <= pa0001.endda
//  association [0..*] to I_PersonWorkAgrmtJobText as _PersonWorkAgrmtJobText on  pa0001.stell                      =  _PersonWorkAgrmtJobText.Job
//                                                                            and _PersonWorkAgrmtJobText.EndDate   >= pa0001.endda
//                                                                            and _PersonWorkAgrmtJobText.StartDate <= pa0001.endda
//  association [0..*] to I_OrganizationalUnitText as _OrganizationalUnitText on  pa0001.orgeh                      =  _OrganizationalUnitText.OrganizationalUnit
//                                                                            and _OrganizationalUnitText.EndDate   >= pa0001.endda
//                                                                            and _OrganizationalUnitText.StartDate <= pa0001.endda
//
//
//
//{
//  key pa0001.pernr          as PersonWorkAgreement,
//      @Semantics.businessDate.from
//  key pa0001.begda          as StartDate,
//      @Semantics.businessDate.to
//  key pa0001.endda          as EndDate,
//      pa0001.bukrs          as CompanyCode,
//      pa0001.kostl          as CostCenter,
//      pa0001.stell          as Job,
//      pa0001.orgeh          as OrganizationalUnit,
//      pa0001.vdsk1          as PersonWorkAgrmtAuthznGrpg,
//      _CompanyCode,
//      _CostCenter,
//      _PersonWorkAgrmtJobText,
//      _OrganizationalUnitText
//}
//where
//  pa0001.sprps <> 'X'
```
