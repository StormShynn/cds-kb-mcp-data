---
name: I_LGLCNTNTMGMTWRKFLWLGLTRANS
description: "Lglcntntmgmtwrkflwlgltrans"
app_component: CM-TSK-2CL
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
  - CM-TSK
  - interface-view
  - workflow
  - component:CM-TSK-2CL
  - lob:Other
---
# I_LGLCNTNTMGMTWRKFLWLGLTRANS

**Lglcntntmgmtwrkflwlgltrans**

| Property | Value |
|---|---|
| App Component | `CM-TSK-2CL` |
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
| `LglTransWrkFlwModInstce` | ✓ | |  | `cast( LglTransWrkFlwModInstce as lcm_uuid_c32 )` | `CHAR(32)` | UUID Char32 |
| `LegalTransactionUUID` |  | |  |  | `RAW(16)` | Universal Unique Identifier |
| `LglTransWrkFlwCreatedByUser` |  | |  |  | `CHAR(12)` | User Who Created the Work Item |
| `LglCntntMGovLaw` |  | | `_LegalTransaction` | `LglCntntMGovLaw` | `CHAR(7)` | Governing Law |
| `LglCntntMProfile` |  | | `_LegalTransaction` | `LglCntntMProfile` | `CHAR(10)` | Profile |
| `LglTransAccessLvl` |  | | `_LegalTransaction` | `LglTransAccessLvl` | `CHAR(4)` | Access Level |
| `LglCntntMMainOrgCoCode` |  | | `_LegalTransaction` | `LglCntntMMainOrgCoCode` | `CHAR(10)` | Entity ID |
| `LglCntntMMainOrgSalesOrg` |  | | `_LegalTransaction` | `LglCntntMMainOrgSalesOrg` | `CHAR(10)` | Entity ID |
| `LglCntntMMainOrgPurOrg` |  | | `_LegalTransaction` | `LglCntntMMainOrgPurOrg` | `CHAR(10)` | Entity ID |
| `_LegalTransaction` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LegalTransaction` | `I_LegalTransactionAPI01` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ILCMWFLOBJ'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel: {
  representativeKey: 'LglTransWrkFlwModInstce',
  usageType.serviceQuality: #B,
  usageType.sizeCategory: #L,
  usageType.dataClass: #TRANSACTIONAL
}
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
                                     
@EndUserText.label: 'Leading Object for Legal Tasks'
@Metadata.ignorePropagatedAnnotations: true

define view I_LglCntntMgmtWrkflwLglTrans
  as select from I_LegalTransactionWorkflow
  association [1..1] to I_LegalTransactionAPI01 as _LegalTransaction on $projection.LegalTransactionUUID = _LegalTransaction.LegalTransactionUUID
{
  key  cast( LglTransWrkFlwModInstce as lcm_uuid_c32 ) as LglTransWrkFlwModInstce,
       LegalTransactionUUID,
       LglTransWrkFlwCreatedByUser,
       _LegalTransaction.LglCntntMGovLaw               as LglCntntMGovLaw,
       _LegalTransaction.LglCntntMProfile              as LglCntntMProfile,
       _LegalTransaction.LglTransAccessLvl             as LglTransAccessLvl,
       _LegalTransaction.LglCntntMMainOrgCoCode        as LglCntntMMainOrgCoCode,
       _LegalTransaction.LglCntntMMainOrgSalesOrg      as LglCntntMMainOrgSalesOrg,
       _LegalTransaction.LglCntntMMainOrgPurOrg        as LglCntntMMainOrgPurOrg,
       _LegalTransaction
}
```
