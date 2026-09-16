---
name: I_SERVICEDOCUMENTPREDECESSOR
description: "Service DocumentUMENTPREDECESSOR"
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
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICEDOCUMENTPREDECESSOR

**Service DocumentUMENTPREDECESSOR**

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
| `ServiceDocumentRelationUUID` | ✓ | |  | `relationid` | `CHAR(22)` | Object Relationship Service : GUID binary link |
| `ServiceDocRltnSequenceNumber` | ✓ | |  | `posno` | `NUMC(4)` | Sequential Number of Segment in IDoc Type |
| `ServiceDocumentRelationType` |  | |  | `breltyp` | `CHAR(4)` | Relationship type |
| `ServiceDocumentRelationKind` |  | |  | `vona_kind` | `CHAR(1)` | Type of binary relationship types VONA |
| `ServiceDocumentPredecessorUUID` |  | |  | `objguid_a_sel` | `RAW(16)` | GUID of a CRM Order Object |
| `ServiceDocPrdcssrBusObjType` |  | |  | `objtype_a_sel` | `CHAR(10)` | Object Type |
| `CustMgmtPrdcssrTransactionKey` |  | |  | `objkey_a_sel` | `CHAR(70)` | Object key |
| `ServiceDocumentUUID` |  | |  | `objguid_b_sel` | `RAW(16)` | GUID of a CRM Order Object |
| `ServiceObjectType` |  | |  | `objtype_b_sel` | `CHAR(10)` | Object Type |
| `_ServiceDoc` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDoc` | `I_ServiceDocumentEnhcd` | [1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Preceding Service Transaction'
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
                    table: 'crmd_brelvonae', role: #MAIN,
                    viewElement: ['ServiceDocumentRelationUUID', 'ServiceDocRltnSequenceNumber'],
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
  sqlViewName: 'ISERVDOCPRE',
  compiler.compareFilter: true,
  preserveKey: true
}
@ObjectModel: {
//   representativeKey: 'ServiceDocumentRelationUUID',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #B,
     sizeCategory:   #XL
   },
   supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
}
//@Analytics.dataCategory: #DIMENSION
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

//! Business Object SONT for the Service Document Predecessor
@ObjectModel.sapObjectNodeType.name: 'ServiceDocumentPredecessor'

/*
If there is any new Business object addition in service document view (e.g. BUS200016 )
then the same business object has to be added in DCL "I_ServiceDocumentPredecessor" as well.
*/
define view I_ServiceDocumentPredecessor
  as select from crmd_brelvonae

  association [1] to I_ServiceDocumentEnhcd as _ServiceDoc on  $projection.ServiceDocumentPredecessorUUID = _ServiceDoc.ServiceDocumentUUID
                                                           and $projection.ServiceDocPrdcssrBusObjType    = _ServiceDoc.ServiceObjectType

{

  key relationid    as ServiceDocumentRelationUUID,
  key posno         as ServiceDocRltnSequenceNumber,
      breltyp       as ServiceDocumentRelationType,

      /* CRMT_BRELVONAE */
      vona_kind     as ServiceDocumentRelationKind,

      objguid_a_sel as ServiceDocumentPredecessorUUID,
      objtype_a_sel as ServiceDocPrdcssrBusObjType,
      objkey_a_sel  as CustMgmtPrdcssrTransactionKey,

      objguid_b_sel as ServiceDocumentUUID,
      objtype_b_sel as ServiceObjectType,

      //Associations
      _ServiceDoc

}
```
