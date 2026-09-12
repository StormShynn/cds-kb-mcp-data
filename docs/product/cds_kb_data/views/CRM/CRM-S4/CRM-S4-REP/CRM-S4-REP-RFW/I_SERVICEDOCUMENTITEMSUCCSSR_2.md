---
name: I_SERVICEDOCUMENTITEMSUCCSSR_2
description: "Service DocumentUMENTITEMSUCCSSR 2"
app_component: CRM-S4-REP-RFW
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
  - CRM
  - interface-view
  - service
  - document
  - item-level
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICEDOCUMENTITEMSUCCSSR_2

**Service DocumentUMENTITEMSUCCSSR 2**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
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
| `ServiceDocumentItmRelationUUID` | ✓ | |  | `relationid` | `CHAR(22)` | Object Relationship Service : GUID binary link |
| `ServiceDocItmRltnSqncNumber` | ✓ | |  | `posno` | `NUMC(4)` | Sequential Number of Segment in IDoc Type |
| `ServiceDocumentItemCharUUID` |  | |  | `cast(objkey_a as crms4_object_charguid32 preserving type )` | `CHAR(32)` | 32 Character CRM Object GUID |
| `ServiceDocItmSuccssrCharUUID` |  | |  | `cast(objkey_b as crms4_object_charguid32 preserving type )` | `CHAR(32)` | 32 Character CRM Object GUID |
| `ServiceDocumentItmRelationType` |  | |  | `breltyp` | `CHAR(4)` | Relationship type |
| `ServiceDocumentItemObjectType` |  | |  | `objtype_a` | `CHAR(10)` | Object Type |
| `ServiceDocumentItmRelationKind` |  | |  | `vona_kind` | `CHAR(1)` | Type of binary relationship types VONA |
| `ServiceDocItmSuccssrBusObjType` |  | |  | `objtype_b` | `CHAR(10)` | Object Type |
| `_ServiceDocItm` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocItm` | `I_ServiceDocumentItemEnhcd` | [1] |

## Source Code

```abap
@EndUserText.label: 'Follow-Up Transaction of Srvc Trans Item'
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                  //  filter: [{operator: #EQ, tableElement: 'objtype_b', value: 'BUS2000%'}],
                    table: 'crmd_brelvonai', role: #MAIN,
                    viewElement: ['ServiceDocumentItmRelationUUID', 'ServiceDocItmRltnSqncNumber'],
                    tableElement: ['relationid', 'posno']
                }
            ]
        }
    }
 }

@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@AbapCatalog: {
  sqlViewName: 'ISERVDOCITMSUCC2',
  compiler.compareFilter: true ,
  preserveKey: true
}

@ObjectModel: {
//   representativeKey: 'ServiceDocumentItmRelationUUID',
   supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE],
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #A,
     sizeCategory:   #XL
   }
}

//@Analytics.dataCategory: #DIMENSION
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

//! Business Object SONT for the Service Document Item Successor
@ObjectModel.sapObjectNodeType.name: 'ServiceDocumentItemSuccessor'
/*
  1902 CE: Data preview might give you an error because hextobin conversion may not work on properly on junk data. Hence dump occurs.
  To view the data, you have to apply the condition "CharcLength = 32" to get the results for Service scenario only.

  1911 CE: DO not use hextobin converted attribute.

*/

/*
If there is any new Business object addition in service document view (e.g. BUS2000116 )
then the same business object has to be added in DCL "I_ServiceDocumentItemSuccessor" as well.
*/

define view I_ServiceDocumentItemSuccssr_2
  as select from crmd_brelvonai
  association [1] to I_ServiceDocumentItemEnhcd as _ServiceDocItm on $projection.ServiceDocItmSuccssrCharUUID = _ServiceDocItm.ServiceDocumentItemCharUUID

{
  key relationid                                                 as ServiceDocumentItmRelationUUID,
  key posno                                                      as ServiceDocItmRltnSqncNumber,

      /* CRMT_BRELVONAI */
      //      objkey_a   as ServiceDocumentItemCharUUID,
      cast(objkey_a as crms4_object_charguid32 preserving type ) as ServiceDocumentItemCharUUID,
      //      objkey_b   as ServiceDocItmSuccssrCharUUID,
      cast(objkey_b as crms4_object_charguid32 preserving type ) as ServiceDocItmSuccssrCharUUID,
      breltyp                                                    as ServiceDocumentItmRelationType,

      objtype_a                                                  as ServiceDocumentItemObjectType,
      vona_kind                                                  as ServiceDocumentItmRelationKind,
      objtype_b                                                  as ServiceDocItmSuccssrBusObjType,

      //Associations
      _ServiceDocItm

}
where
     objtype_b like 'BUS2000%'
  or objtype_b =    'VBAP'
```
