---
name: I_JVAVALUATIONTYPE
description: "Jvavaluationtype"
app_component: CA-JVA
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
  - CA
  - CA-JVA
  - interface-view
  - component:CA-JVA
  - lob:Cross-Application Components
---
# I_JVAVALUATIONTYPE

**Jvavaluationtype**

| Property | Value |
|---|---|
| App Component | `CA-JVA` |
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
| `InventoryValuationType` | ✓ | |  |  | `CHAR(10)` | Inventory Valuation Type |
| `AcctCategoryRef` |  | |  |  | `CHAR(4)` | Account Category Reference |
| `InternalPurchasingRule` |  | |  |  | `CHAR(1)` | Internal Purchasing Rule |
| `ExternalPurchasingRule` |  | |  |  | `CHAR(1)` | External Purchasing Rule |

## Source Code

```abap
@EndUserText.label: 'JVA Valuation Type'
@AbapCatalog: { sqlViewName: 'IJVAVALTYPE',                
                preserveKey: true,
                compiler.compareFilter: true,
                dataMaintenance: #DISPLAY_ONLY }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: { dataCategory: #DIMENSION,
              dataExtraction.enabled: true ,
              internalName: #LOCAL }
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: { representativeKey: 'InventoryValuationType',
                usageType: { sizeCategory: #S,
                             dataClass:  #MASTER,
                             serviceQuality: #C },
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY, #UI_PROVIDER_PROJECTION_SOURCE ],
                modelingPattern: #ANALYTICAL_DIMENSION }
@Metadata.ignorePropagatedAnnotations: true
@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #COMPOSITE }

define view I_JVAValuationType

  as select from I_InventoryValuationType

{
  key InventoryValuationType,
      AcctCategoryRef,
      InternalPurchasingRule,
      ExternalPurchasingRule
}

union

select from I_JVAMaterialValuationType as mbew

  left outer to one join I_InventoryValuationType as ValType on ValType.InventoryValuationType = mbew.InventoryValuationType

{
  key coalesce( ValType.InventoryValuationType, mbew.InventoryValuationType ) as InventoryValuationType,
      coalesce( ValType.AcctCategoryRef, '')                 as AcctCategoryRef,
      coalesce( ValType.InternalPurchasingRule, '')          as InternalPurchasingRule,
      coalesce( ValType.ExternalPurchasingRule, '')          as ExternalPurchasingRule
}
```
