---
name: I_COMPANYMARGINCURRENCYFIELD
description: "Company Margin Currency Field"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMPANYMARGINCURRENCYFIELD')/$value
semantic_en: "Company Margin Currency Field"
semantic_vi: "Company Margin Currency Field — CDS view giao diện dựa trên I_CurrencyField."
keywords:
  - "company"
  - "margin"
  - "currency"
  - "field"
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
# I_COMPANYMARGINCURRENCYFIELD

**Company Margin Currency Field**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMPANYMARGINCURRENCYFIELD')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CurrencyField` | ✓ | |  |  | `CHAR(4)` | Currency Role |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMPANYMARGINCURRENCYFIELD')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMPANYMARGINCURRENCYFIELD')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: { dataCategory: #DIMENSION }
@EndUserText.label: 'Company Margin Currency Field'
@ObjectModel: { representativeKey: 'CurrencyField',
                usageType: { sizeCategory: #S,
                             dataClass:  #CUSTOMIZING,
                             serviceQuality: #A },
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
                modelingPattern: #ANALYTICAL_DIMENSION }                                
@Metadata.ignorePropagatedAnnotations: true 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@Analytics.settings.valueHelp.supressInitialValue: true
@Analytics.internalName:#LOCAL 

define view entity I_CompanyMarginCurrencyField as select from I_CurrencyField {
@ObjectModel.text.association: '_Text'
  key CurrencyField,
  _Text
}
where CurrencyField = 'CCC'
   or CurrencyField = 'GC'
   or CurrencyField = 'FC'
```
