---
name: I_SRVCITEMRELATIONSHIPTYPE
description: "Srvcitemrelationshiptype"
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
# I_SRVCITEMRELATIONSHIPTYPE

**Srvcitemrelationshiptype**

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
| `SrvcItemRelshpType` | ✓ | |  | `item_relationship_type` | `CHAR(3)` | Item Relationship Type |
| `_ItemRelationshipTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ItemRelationshipTypeText` | `I_SrvcItemRelationshipTypeText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Service Item Relationships'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISRVCITEMREL',
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
                    table: 'crms4s_item_rel', role: #MAIN,
                    viewElement: ['SrvcItemRelshpType'],
                    tableElement: ['item_relationship_type']
                }
            ]
        }
    }
 }


@AccessControl: {
  authorizationCheck: #NOT_REQUIRED,
  personalData.blocking: #('TRANSACTIONAL_DATA')
 }
@ObjectModel: {
    representativeKey: 'SrvcItemRelshpType',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #C,
     sizeCategory:   #S
   },
      /* Enhancement Solution Order */
   supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ,#VALUE_HELP_PROVIDER]
}
@ObjectModel.dataCategory: #VALUE_HELP
@Search.searchable: true
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'SrvcItemRelationshipType'


define view I_SrvcItemRelationshipType
  as select from crms4s_item_rel
  association [0..*] to I_SrvcItemRelationshipTypeText as _ItemRelationshipTypeText on $projection.SrvcItemRelshpType = _ItemRelationshipTypeText.SrvcItemRelshpType

{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      @ObjectModel.text.association: '_ItemRelationshipTypeText'
  key item_relationship_type as SrvcItemRelshpType,

      _ItemRelationshipTypeText

}
```
