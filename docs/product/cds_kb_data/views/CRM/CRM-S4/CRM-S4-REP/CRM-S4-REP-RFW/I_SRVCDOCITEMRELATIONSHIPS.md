---
name: I_SRVCDOCITEMRELATIONSHIPS
description: "Srvcdocitemrelationships"
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
  - item-level
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SRVCDOCITEMRELATIONSHIPS

**Srvcdocitemrelationships**

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
| `ServiceDocument` | ✓ | |  | `object_id` | `CHAR(10)` | Transaction ID |
| `ServiceObjectType` | ✓ | |  | `objtype_h` | `CHAR(10)` | Business Trans. Cat. |
| `SrvcItemRelshpFromItemNumber` | ✓ | |  | `item_number_a` | `NUMC(6)` | Shortened Item Number in Document |
| `SrvcItemRelshpType` | ✓ | |  | `item_relationship_type` | `CHAR(3)` | Item Relationship Type |
| `SrvcItemRelshpToItemNumber` | ✓ | |  | `item_number_b` | `NUMC(6)` | Shortened Item Number in Document |
| `_ServiceDocumentItemFrom` | | ✓ | | | | |
| `_ServiceDocumentItemTo` | | ✓ | | | | |
| `_ServiceItemRelationshipType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocumentItemFrom` | `I_ServiceDocumentItemEnhcd` | [0..1] |
| `_ServiceDocumentItemTo` | `I_ServiceDocumentItemEnhcd` | [0..1] |
| `_ServiceItemRelationshipType` | `I_SrvcItemRelationshipType` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Service Transaction Item Relationships'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISRVCDOCITEMREL',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

/* Enhancement Solution Order */
@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
//                   filter: [{operator: #EQ, tableElement: 'objtype_a', value: 'BUS2000%'}],
                    table: 'crms4d_item_rel', role: #MAIN,
                    viewElement: ['ServiceDocument', 'ServiceObjectType','SrvcItemRelshpFromItemNumber', 'SrvcItemRelshpType', 'SrvcItemRelshpToItemNumber'],
                    tableElement: ['object_id', 'objtype_h', 'item_number_a', 'item_relationship_type', 'item_number_b']
                }
            ]
        }
    }
 }

@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
 }
@ObjectModel: {
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #C,
     sizeCategory:   #XXL
   },
   /* Enhancement Solution Order */
   supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
}
/* Enhancement Solution Order */
//! Business Object SONT for the Service Doc Item Relationships
@ObjectModel.sapObjectNodeType.name: 'SrvcDocItemRelationship'
@Metadata.ignorePropagatedAnnotations: true

define view I_SrvcDocItemRelationships
  as select from crms4d_item_rel
  association [0..1] to I_ServiceDocumentItemEnhcd as _ServiceDocumentItemFrom     on  $projection.ServiceDocument              = _ServiceDocumentItemFrom.ServiceDocument
                                                                                   and $projection.ServiceObjectType            = _ServiceDocumentItemFrom.ServiceObjectType
                                                                                   and $projection.SrvcItemRelshpFromItemNumber = _ServiceDocumentItemFrom.ServiceDocumentItem
  association [0..1] to I_ServiceDocumentItemEnhcd as _ServiceDocumentItemTo       on  $projection.ServiceDocument            = _ServiceDocumentItemTo.ServiceDocument
                                                                                   and $projection.ServiceObjectType          = _ServiceDocumentItemTo.ServiceObjectType
                                                                                   and $projection.SrvcItemRelshpToItemNumber = _ServiceDocumentItemTo.ServiceDocumentItem
  association [0..1] to I_SrvcItemRelationshipType as _ServiceItemRelationshipType on  $projection.SrvcItemRelshpType = _ServiceItemRelationshipType.SrvcItemRelshpType


{

  key object_id              as ServiceDocument,
  key objtype_h              as ServiceObjectType,
  key item_number_a          as SrvcItemRelshpFromItemNumber,
  key item_relationship_type as SrvcItemRelshpType,
  key item_number_b          as SrvcItemRelshpToItemNumber,



      _ServiceDocumentItemFrom,
      _ServiceDocumentItemTo,
      _ServiceItemRelationshipType
}
```
