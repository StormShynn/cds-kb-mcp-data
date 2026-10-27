---
name: I_PRODSRVCMARGREPCRCYFLD
description: "Currency field for Prod and Srvc Report"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODSRVCMARGREPCRCYFLD')/$value
semantic_en: "Currency field for Prod and Srvc Report"
semantic_vi: "Currency field for Prod and Srvc Report — CDS view giao diện dựa trên P_ProdSrvcMargRepCrcyFld."
keywords:
  - "currency"
  - "field"
  - "for"
  - "prod"
  - "and"
  - "srvc"
  - "report"
tags:
  - CO
  - bo:companycode
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - interface-view
  - lob:controlling
  - lob:finance
---
# I_PRODSRVCMARGREPCRCYFLD

**Currency field for Prod and Srvc Report**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODSRVCMARGREPCRCYFLD')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CurrencyField` | ✓ | |  |  | `CHAR(4)` | Currency Role |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PrjMargAnlysRptCrcyFldTxt` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODSRVCMARGREPCRCYFLD')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODSRVCMARGREPCRCYFLD')/$value)*

```abap
@EndUserText.label: 'Currency field for Prod and Srvc Report'
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { usageType:{ serviceQuality: #A,
                            sizeCategory: #S,
                            dataClass: #CUSTOMIZING },
                representativeKey: 'CurrencyField',
                supportedCapabilities: [    #ANALYTICAL_DIMENSION, 
                                            #CDS_MODELING_ASSOCIATION_TARGET, 
                                            #SQL_DATA_SOURCE, 
                                            #CDS_MODELING_DATA_SOURCE],
                modelingPattern: #ANALYTICAL_DIMENSION } 
                
@VDM.viewType: #BASIC
@Analytics: { dataCategory: #DIMENSION }

//@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.internalName:#LOCAL
define view entity I_ProdSrvcMargRepCrcyFld as select from P_ProdSrvcMargRepCrcyFld

association [0..*] to I_PrjMargAnlysRptCrcyFldTxt as _Text on $projection.CurrencyField = _Text.CurrencyField
{
@ObjectModel.text.association: '_Text'
    key CurrencyField,
    _Text
}
```
