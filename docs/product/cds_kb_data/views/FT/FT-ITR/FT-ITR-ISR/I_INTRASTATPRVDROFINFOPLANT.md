---
name: I_INTRASTATPRVDROFINFOPLANT
description: "Plants"
app_component: FT-ITR-ISR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTRASTATPRVDROFINFOPLANT')/$value
semantic_en: "Plants"
semantic_vi: "Plants — CDS view giao diện dựa trên Plants."
keywords:
  - "plants"
  - "intrastat"
  - "provider"
  - "information"
  - "plant"
  - "prvdr"
  - "info"
  - "type"
tags:
  - FT
  - bo:companycode
  - component:FT-ITR-ISR
  - FT-ITR
  - FT-ITR-ISR
  - interface-view
  - plan
---
# I_INTRASTATPRVDROFINFOPLANT

**Plants**

| Property | Value |
|---|---|
| App Component | `FT-ITR-ISR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTRASTATPRVDROFINFOPLANT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IntrastatProviderOfInformation` | ✓ | |  | `poiid` | `CHAR(10)` | Provider of Information ID |
| `Plant` | ✓ | |  | `werks` | `CHAR(4)` | Plant |
| `IntrastatPrvdrOfInfoPlantType` | ✓ | |  | `pltyp` | `CHAR(1)` | Type of Plant |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTRASTATPRVDROFINFOPLANT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTRASTATPRVDROFINFOPLANT')/$value)*

```abap
@EndUserText.label: 'Plants'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true
@Metadata.allowExtensions: true
@ObjectModel.modelingPattern:#NONE
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE  ]

define view entity I_IntrastatPrvdrOfInfoPlant
  as select from /ecrs/poic

{
      @Search.defaultSearchElement: true
  key poiid as IntrastatProviderOfInformation,

      @Search.defaultSearchElement: true
  key werks as Plant,

      @Search.defaultSearchElement: true
  key pltyp as IntrastatPrvdrOfInfoPlantType

}
```
