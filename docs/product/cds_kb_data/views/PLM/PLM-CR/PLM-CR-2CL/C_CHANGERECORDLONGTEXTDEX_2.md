---
name: C_CHANGERECORDLONGTEXTDEX_2
description: "Change Record Long Text"
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
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHANGERECORDLONGTEXTDEX_2')/$value
semantic_en: "Change Record Long Text"
semantic_vi: "Change Record Long Text — CDS view tiêu dùng dựa trên I_ChgRecDetailDescriptionTxt."
keywords:
  - "change"
  - "record"
  - "long"
  - "text"
  - "reference"
  - "language"
  - "detail"
  - "description"
tags:
  - PLM
  - component:PLM-CR-2CL
  - consumption-view
  - PLM-CR
  - PLM-CR-2CL
---
# C_CHANGERECORDLONGTEXTDEX_2

**Change Record Long Text**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHANGERECORDLONGTEXTDEX_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeRecordReferenceTextUUID` | ✓ | |  |  | `RAW(16)` | DB Key |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `ChangeRecordDetailDescription` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHANGERECORDLONGTEXTDEX_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHANGERECORDLONGTEXTDEX_2')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Change Record Long Text'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory:   #L,
  dataClass:      #TRANSACTIONAL
}
@VDM.viewType: #CONSUMPTION
@ObjectModel.dataCategory:#TEXT
@ObjectModel.representativeKey:'ChangeRecordReferenceTextUUID'
@ObjectModel.sapObjectNodeType.name: 'ChangeRecordLongText'
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #LANGUAGE_DEPENDENT_TEXT,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE ]
@Analytics:{
    internalName: #LOCAL,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
          mapping:[
            {
              table:'/PLMI/CHGRECD_L', role: #MAIN,
              viewElement: ['ChangeRecordReferenceTextUUID', 'Language'],
              tableElement: [ 'DB_KEY', 'LANGU']
             }
           ]
        }
    }
}
define view entity C_ChangeRecordLongTextDEX_2
  as select from I_ChgRecDetailDescriptionTxt
{
  key  ChangeRecordReferenceTextUUID,
       @Semantics.language: true
  key  Language,
       @Semantics.text: true
       ChangeRecordDetailDescription
}
```
