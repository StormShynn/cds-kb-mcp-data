---
name: C_CHANGERECORDPARTNERDEX_2
description: "Change Record Partner or Person Resp"
app_component: PLM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHANGERECORDPARTNERDEX_2')/$value
semantic_en: "Change Record Partner or Person Resp"
semantic_vi: "Change Record Partner or Person Resp — CDS view tiêu dùng dựa trên I_ChgRecResponsible_2."
keywords:
  - "change"
  - "record"
  - "partner"
  - "person"
  - "resp"
tags:
  - PLM
  - bo:salesorder
  - component:PLM-CR-2CL
  - consumption-view
  - PLM-CR
  - PLM-CR-2CL
  - bo:purchaseorder
---
# C_CHANGERECORDPARTNERDEX_2

**Change Record Partner or Person Resp**

| Property | Value |
|---|---|
| App Component | `PLM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| Release State (SAP ATC / Clean Core) | Released — a third, independent signal from SAP's ABAP Cloud released-objects list |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHANGERECORDPARTNERDEX_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeRecordUUID` | ✓ | |  |  | `RAW(16)` | DB Key |
| `ChangeRecordPartner` |  | |  |  | `CHAR(12)` | Agent |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHANGERECORDPARTNERDEX_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHANGERECORDPARTNERDEX_2')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Change Record Partner or Person Resp'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory:   #M,
  dataClass:      #TRANSACTIONAL
}
@VDM.viewType: #CONSUMPTION
@ObjectModel.representativeKey:'ChangeRecordUUID'
@ObjectModel.sapObjectNodeType.name: 'ChangeRecordResponsible'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #ANALYTICAL_DIMENSION,
                                      #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern        : #ANALYTICAL_DIMENSION

@Analytics:{
    internalName: #LOCAL,
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true
    }
}


define view entity C_ChangeRecordPartnerDEX_2 as select from I_ChgRecResponsible_2
{
  key ChangeRecordUUID,  
//  key ChgRecordPartnerRole2,
//  key ChangeRecordPartnerType,
      ChangeRecordPartner
} where ChgRecordPartnerRole2 = 'BUP003' and ChangeRecordPartnerType = 'BP'
```
