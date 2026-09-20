---
name: I_PAYMENTBLOCKLEVEL
description: "Paymentblocklevel"
app_component: FI-AP-AP-B-2CL
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
  - FI
  - FI-AP
  - FI-AP-AP
  - interface-view
  - payment
  - component:FI-AP-AP-B-2CL
  - lob:Finance
---
# I_PAYMENTBLOCKLEVEL

**Paymentblocklevel**

| Property | Value |
|---|---|
| App Component | `FI-AP-AP-B-2CL` |
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
| `PaymentBlockLevel` | ✓ | |  | `cast( dd07l.domvalue_l as farp_splev )` | `CHAR(1)` | Level on Which a Payment Block has Taken Place |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPAYTBLKLVL'
@EndUserText.label: 'Payment Block Level'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey: true
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Search.searchable: true
//@ObjectModel.alternativeKey: [ { id : 'Domain',
//                                 uniqueness: #UNIQUE,
//                                 element: ['DomainValue'] } ]
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'PaymentBlockLevel'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #VALUE_HELP_PROVIDER]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.sapObjectNodeType.name: 'PaymentBlockLevel'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define root view I_PaymentBlockLevel
  as select from dd07l
  composition [0..*] of I_PaymentBlockLevelText as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as farp_splev ) as PaymentBlockLevel,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                       as DomainValue,
      _Text
}
where
      dd07l.domname  = 'SPLEV'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
