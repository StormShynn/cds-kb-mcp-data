---
name: I_PERSWRKAGRMTMANAGERFORKEYDTE
description: "Perswrkagrmtmanagerforkeydte"
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
# I_PERSWRKAGRMTMANAGERFORKEYDTE

**Perswrkagrmtmanagerforkeydte**

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
| `PersonWorkAgreement` | ✓ | |  | `cast( PersonWorkAgreement as persno preserving type )` | `NUMC(8)` | Personnel Number |
| `KeyDate` | ✓ | |  | `cast( $parameters.P_KeyDate as dats preserving type )` | `DATS(8)` | Field of type DATS |
| `ManagerPersonWorkAgreement` | ✓ | |  | `cast( ManagerPersonWorkAgreement as mstbr preserving type )` | `CHAR(8)` | Supervisor Area |
| `PersonWorkAgrmtAuthznGrpg` |  | |  | `cast( PersonWorkAgrmtAuthznGrpg as vdsk1 preserving type )` | `CHAR(14)` | Organizational Key |
| `_ManagerPersonWorkAgreement` | | ✓ | | | | |
| `_ManagerPersonWorkAgreement_1` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ManagerPersonWorkAgreement` | `I_PersonWorkAgreement` | [1..1] |
| `_ManagerPersonWorkAgreement_1` | `I_PersonWorkAgreement_1` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPERSWRKAGRMTMGR'
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@AbapCatalog.compiler.compareFilter: true
//@AccessControl.authorizationCheck: #CHECK
@AccessControl.authorizationCheck: #MANDATORY
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions: true
@ObjectModel.representativeKey: 'PersonWorkAgreement'
@EndUserText.label: 'Retrieve manager for given date'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION]

define view I_PersWrkAgrmtManagerForKeyDte
  with parameters
    @Consumption.hidden     : true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate : vdm_v_key_date
  as select from I_PersWrkAgrmtPosDet as perswrkagrmtposdet
  //  as select from P_U_PersWrkAgrmtMgrForKeyDte (P_KeyDate: $parameters.P_KeyDate)
  association [1..1] to I_PersonWorkAgreement   as _ManagerPersonWorkAgreement   on _ManagerPersonWorkAgreement.PersonWorkAgreement = $projection.ManagerPersonWorkAgreement
  association [1..1] to I_PersonWorkAgreement_1 as _ManagerPersonWorkAgreement_1 on _ManagerPersonWorkAgreement_1.PersonWorkAgreement = $projection.ManagerPersonWorkAgreement
{
  key cast( PersonWorkAgreement as persno preserving type ) as PersonWorkAgreement,
  key cast( $parameters.P_KeyDate as dats preserving type ) as KeyDate,
      @ObjectModel.foreignKey.association: '_ManagerPersonWorkAgreement_1'
  key cast( ManagerPersonWorkAgreement as mstbr preserving type ) as ManagerPersonWorkAgreement,
      cast( PersonWorkAgrmtAuthznGrpg as vdsk1 preserving type ) as PersonWorkAgrmtAuthznGrpg,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ManagerPersonWorkAgreement_1'
      _ManagerPersonWorkAgreement,
      _ManagerPersonWorkAgreement_1
}
where
  (
        perswrkagrmtposdet.StartDate                  <= $parameters.P_KeyDate
    and perswrkagrmtposdet.EndDate                    >= $parameters.P_KeyDate
  )
  and(
        perswrkagrmtposdet.ManagerPersonWorkAgreement is not null
  )
  and(
        perswrkagrmtposdet.ManagerPersonWorkAgreement <> '00000000'
  )

/*  with parameters
    @Consumption.hidden     : true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate : vdm_v_key_date
  as select from wfd_tf_perwrkagrmtmgrforkeydte( p_client: $session.client, p_todaydate: $parameters.P_KeyDate )
//  as select from P_U_PersWrkAgrmtMgrForKeyDte (P_KeyDate: $parameters.P_KeyDate)
  association [1..1] to I_PersonWorkAgreement   as _ManagerPersonWorkAgreement   on _ManagerPersonWorkAgreement.PersonWorkAgreement = $projection.ManagerPersonWorkAgreement
  association [1..1] to I_PersonWorkAgreement_1 as _ManagerPersonWorkAgreement_1 on _ManagerPersonWorkAgreement_1.PersonWorkAgreement = $projection.ManagerPersonWorkAgreement
{
  key  PersonWorkAgreement,
  key  $parameters.P_KeyDate as KeyDate,
       @ObjectModel.foreignKey.association: '_ManagerPersonWorkAgreement_1'
  key  ManagerPersonWorkAgreement,
       PersonWorkAgrmtAuthznGrpg,
       @API.element.releaseState: #DEPRECATED
       @API.element.successor: '_ManagerPersonWorkAgreement_1'
       _ManagerPersonWorkAgreement,
       _ManagerPersonWorkAgreement_1
}
*/

//define view I_PersWrkAgrmtManagerForKeyDte
//  with parameters
//    @Consumption.hidden     : true
//    @Environment.systemField: #SYSTEM_DATE
//    P_KeyDate : vdm_v_key_date
//  as select from P_U_PersWrkAgrmtMgrForKeyDte (P_KeyDate: $parameters.P_KeyDate)
//  association [1..1] to I_PersonWorkAgreement   as _ManagerPersonWorkAgreement   on _ManagerPersonWorkAgreement.PersonWorkAgreement = $projection.ManagerPersonWorkAgreement
//  association [1..1] to I_PersonWorkAgreement_1 as _ManagerPersonWorkAgreement_1 on _ManagerPersonWorkAgreement_1.PersonWorkAgreement = $projection.ManagerPersonWorkAgreement
//{
//  key  PersonWorkAgreement,
//  key  $parameters.P_KeyDate as KeyDate,
//       @ObjectModel.foreignKey.association: '_ManagerPersonWorkAgreement_1'
//  key  ManagerPersonWorkAgreement,
//       PersonWorkAgrmtAuthznGrpg,
//       @API.element.releaseState: #DEPRECATED
//       @API.element.successor: '_ManagerPersonWorkAgreement_1'
//       _ManagerPersonWorkAgreement,
//       _ManagerPersonWorkAgreement_1
//}

//  as select from    I_PersWrkAgrmtPosDet                                             as PersWrkAgrmtPosDet
//    left outer join I_PersWrkAgrmtPosToMgrPosition(P_KeyDate: $parameters.P_KeyDate) as PersWrkAgrmtPosToMgrPosition on PersWrkAgrmtPosToMgrPosition.PersonWorkAgreement = PersWrkAgrmtPosDet.PersonWorkAgreement
//
//    left outer join I_PersWrkAgrmtPosDet                                             as PersonWrkAgrmtManager        on  PersonWrkAgrmtManager.PersonWrkAgrmtPosition = PersWrkAgrmtPosToMgrPosition.ManagerWrkAgrmtPosition // retrieve the corresponding workagreement of teh position
//                                                                                                                     and PersonWrkAgrmtManager.StartDate              <= $parameters.P_KeyDate
//                                                                                                                     and PersonWrkAgrmtManager.EndDate                >= $parameters.P_KeyDate
//
//  association [1..1] to I_PersonWorkAgreement   as _ManagerPersonWorkAgreement   on _ManagerPersonWorkAgreement.PersonWorkAgreement = $projection.ManagerPersonWorkAgreement
//  association [1..1] to I_PersonWorkAgreement_1 as _ManagerPersonWorkAgreement_1 on _ManagerPersonWorkAgreement_1.PersonWorkAgreement = $projection.ManagerPersonWorkAgreement
//
//{
//  key PersWrkAgrmtPosDet.PersonWorkAgreement as PersonWorkAgreement,
//  key $parameters.P_KeyDate                  as KeyDate,
//      @ObjectModel.foreignKey.association: '_ManagerPersonWorkAgreement_1'
//  key case when PersWrkAgrmtPosToMgrPosition.ManagerWrkAgrmtPosition is not null
//    then PersonWrkAgrmtManager.PersonWorkAgreement
//   when PersWrkAgrmtPosDet.ManagerPersonWorkAgreement is not null
//     then  PersWrkAgrmtPosDet.ManagerPersonWorkAgreement
//   end                                       as ManagerPersonWorkAgreement,
//      PersWrkAgrmtPosDet.PersonWorkAgrmtAuthznGrpg,
//      @API.element.releaseState: #DEPRECATED
//      @API.element.successor: '_ManagerPersonWorkAgreement_1'
//      _ManagerPersonWorkAgreement,
//      _ManagerPersonWorkAgreement_1
//}
//where
//          PersWrkAgrmtPosDet.StartDate                         <= $parameters.P_KeyDate
//  and     PersWrkAgrmtPosDet.EndDate                           >= $parameters.P_KeyDate
//  and(
//    (
//          PersWrkAgrmtPosToMgrPosition.ManagerWrkAgrmtPosition is not null
//      and PersWrkAgrmtPosToMgrPosition.ManagerWrkAgrmtPosition <> ''
//      and PersonWrkAgrmtManager.PersonWorkAgreement            is not null
//    )
//    or(
//          PersWrkAgrmtPosDet.ManagerPersonWorkAgreement        is not null
//      and PersWrkAgrmtPosDet.ManagerPersonWorkAgreement        <> ''
//    )
//  )
```
