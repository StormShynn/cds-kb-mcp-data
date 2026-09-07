---
name: I_LGLCNTNTMDOCSTAMPTEXTAPI01
description: "Lglcntntmdocstamptextapi 01"
app_component: CM-DOC-2CL
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
  - CM
  - CM-DOC
  - interface-view
  - text
  - component:CM-DOC-2CL
  - lob:Other
---
# I_LGLCNTNTMDOCSTAMPTEXTAPI01

**Lglcntntmdocstamptextapi 01**

| Property | Value |
|---|---|
| App Component | `CM-DOC-2CL` |
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
| `LglCntntMDocumentStamp` | ✓ | |  |  | `CHAR(4)` | Document Stamp Name |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `LglCntntMDocumentStampName` |  | |  |  | `CHAR(40)` | Long Text |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ILCMDOCSTAMPTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck:#NOT_REQUIRED
@VDM.viewType : #BASIC

@ObjectModel:{
   representativeKey: 'LglCntntMDocumentStamp',
   usageType.dataClass: #CUSTOMIZING,
   usageType.serviceQuality: #A,
   usageType.sizeCategory: #S,
   dataCategory: #TEXT
}

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #LANGUAGE_DEPENDENT_TEXT ]

@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@EndUserText.label: 'Document Stamp Name - Text'
define view I_LglCntntMDocStampTextAPI01
  as select from I_LglCntntMDocStampText
{
  key LglCntntMDocumentStamp,
  
      @Semantics.language: true
  key Language,
  
      @Semantics.text: true
      LglCntntMDocumentStampName

}
```
