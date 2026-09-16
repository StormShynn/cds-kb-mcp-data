---
name: I_SERVICEDOCUMENTITEMPRDCSSR_3
description: "Service DocumentUMENTITEMPRDCSSR 3"
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
# I_SERVICEDOCUMENTITEMPRDCSSR_3

**Service DocumentUMENTITEMPRDCSSR 3**

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
| `ServiceDocumentItemPredecessor` |  | |  | `objkey_a` | `CHAR(32)` | Identification of a Reference Object for Items |
| `ServiceDocumentItemCharUUID` |  | |  | `cast(objkey_b as crms4_object_charguid32 preserving type )` | `CHAR(32)` | 32 Character CRM Object GUID |
| `ServiceDocumentItmRelationType` |  | |  | `breltyp` | `CHAR(4)` | Relationship type |
| `ServiceDocItmPrdcssrBusObjType` |  | |  | `objtype_a` | `CHAR(10)` | Object Type |
| `ServiceDocumentItmRelationKind` |  | |  | `vona_kind` | `CHAR(1)` | Type of binary relationship types VONA |
| `ServiceDocumentItemObjectType` |  | |  | `objtype_b` | `CHAR(10)` | Object Type |
| `SrvcDocItmDocFlwCrtnDateTime` |  | |  | `cast (date as crmt_doc_flow_datetime preserving type)` | `DEC(15)` | CRM document flow date time |
| `_ServiceDocItm` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocItm` | `I_ServiceDocumentItemEnhcd` | [1] |

## Source Code

```abap
@EndUserText.label: 'Preceding Transaction of Srvc Trans Item'
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
//                   filter: [{operator: #EQ, tableElement: 'objtype_a', value: 'BUS2000%'}],
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
  sqlViewName: 'ISRVCITMPRD3',
  compiler.compareFilter: true ,
  preserveKey: true
}

@ObjectModel: {
//   representativeKey: 'ServiceDocumentItmRelationUUID',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #A,
     sizeCategory:   #XL
   },
   supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
}

//@Analytics.dataCategory: #DIMENSION
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

//! Business Object SONT for the Service Document Item Predecessor
@ObjectModel.sapObjectNodeType.name: 'ServiceDocumentItemPredecessor'
/*
  1902CE: Data preview might give you an error because hextobin conversion may not work on properly on junk data. Hence dump occurs.
  To view the data, you have to apply the condition "CharcLength = 32" to get the results for Service scenario only.

  1911CE: DONOT use hextobin converted attribute.

*/

define view I_ServiceDocumentItemPrdcssr_3
  as select from crmd_brelvonai
  association [1] to I_ServiceDocumentItemEnhcd as _ServiceDocItm on $projection.ServiceDocumentItemPredecessor = _ServiceDocItm.ServiceDocumentItemCharUUID

{
  key relationid                                                 as ServiceDocumentItmRelationUUID,
  key posno                                                      as ServiceDocItmRltnSqncNumber,

      /* CRMT_BRELVONAI */
      objkey_a                                                   as ServiceDocumentItemPredecessor,
      //cast(objkey_a as crms4_object_charguid32 preserving type ) as ServiceDocItmPrdcssrCharUUID,
      // objkey_b                                              as ServiceDocumentItemCharUUID,

      cast(objkey_b as crms4_object_charguid32 preserving type ) as ServiceDocumentItemCharUUID,
      breltyp                                                    as ServiceDocumentItmRelationType,

      objtype_a                                                  as ServiceDocItmPrdcssrBusObjType,
      vona_kind                                                  as ServiceDocumentItmRelationKind,
      objtype_b                                                  as ServiceDocumentItemObjectType,
      cast (date as crmt_doc_flow_datetime preserving type)      as SrvcDocItmDocFlwCrtnDateTime,

      //Associations
      _ServiceDocItm

}
```
