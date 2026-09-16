---
name: I_SRVCDOCEXECUTIONSTATUS
description: "Srvcdocexecutionstatus"
app_component: CRM-S4-SRV-SVO-2CL
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
  - status
  - component:CRM-S4-SRV-SVO-2CL
  - lob:Other
---
# I_SRVCDOCEXECUTIONSTATUS

**Srvcdocexecutionstatus**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVO-2CL` |
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
| `ServiceDocumentIsQuotation` | ✓ | |  | `stat_quotation` | `CHAR(1)` | Quotation Status |
| `SrvcDocExecutionStatus` | ✓ | |  | `stat_execution` | `CHAR(2)` | Execution Status |
| `_Text` | | ✓ | | | | |
| `_SrvcDocIsQuotation` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SrvcDocExecutionStatusText` | [0..*] |
| `_SrvcDocIsQuotation` | `I_SrvcDocQuotationStatus_2` | [1..1] |

## Source Code

```abap
@AbapCatalog:
    {
        sqlViewName: 'ISRVCDOCEXECST',
        compiler.compareFilter: true,
        buffering:
            {
                status: #ACTIVE,
                type: #FULL
            }
    }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
      dataCategory: #DIMENSION,
      internalName:#LOCAL,
      dataExtraction.enabled: true
}

@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Service Transaction Execution Status'
@ObjectModel:
    {
        representativeKey: 'SrvcDocExecutionStatus',
        sapObjectNodeType.name: 'SrvcDocExecutionStatus',
        supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ],
        usageType:
            {
                dataClass: #META,
                serviceQuality: #A,
                sizeCategory: #S
            },
        dataCategory: #VALUE_HELP,
        resultSet.sizeCategory: #XS
    }
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true

define view I_SrvcDocExecutionStatus
  as select from crms4c_stat_exec

  association [0..*] to I_SrvcDocExecutionStatusText as _Text               on  $projection.SrvcDocExecutionStatus     = _Text.SrvcDocExecutionStatus
                                                                            and $projection.ServiceDocumentIsQuotation = _Text.ServiceDocumentIsQuotation

   association [1..1] to I_SrvcDocQuotationStatus_2                  as _SrvcDocIsQuotation on  $projection.ServiceDocumentIsQuotation = _SrvcDocIsQuotation.ServiceDocumentIsQuotation


{
      @ObjectModel.foreignKey.association: '_SrvcDocIsQuotation'
      @Semantics.booleanIndicator
  key stat_quotation as ServiceDocumentIsQuotation,

      @ObjectModel.text.association: '_Text'
  key stat_execution as SrvcDocExecutionStatus,

      _Text,
      _SrvcDocIsQuotation
}

where
  object_type = 'BUS2000116'
```
