---
name: I_COSTCENTERCHANGELOG
description: "Cost CenterCHANGELOG"
app_component: CO-OM-2CL
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
  - CO
  - CO-OM
  - interface-view
  - cost-center
  - component:CO-OM-2CL
  - lob:Controlling
  - bo:CostCenter
---
# I_COSTCENTERCHANGELOG

**Cost CenterCHANGELOG**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
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
| `ChangeDocumentControllingArea` | ✓ | |  |  | `CHAR(4)` |  |
| `ChangeDocumentCostCenter` | ✓ | |  | `cast( ChangeDocumentItem.ChangeDocumentCostCenter as kostl )` | `CHAR(10)` | Cost Center |
| `ChangeDocumentValidityEndDate` | ✓ | |  | `cast( ChangeDocumentItem.ChangeDocumentValidityEndDate as costcentervalidityenddate )` | `DATS(8)` | Cost Center Validity End Date |
| `ChangeDocValidityStartDate` | ✓ | |  | `cast( ChangeDocumentItem.ChangeDocValidityStartDate as costcentervaliditystartdate )` | `DATS(8)` | Cost Center Validity Start Date |
| `ChangeDocObject` | ✓ | |  |  | `CHAR(90)` | Object value |
| `ChangeDocument` | ✓ | |  |  | `CHAR(10)` | Change Number of Document |
| `ChangeDocDatabaseTableField` | ✓ | |  |  | `CHAR(30)` | Field Name |
| `ChangeDocItemChangeType` | ✓ | |  |  | `CHAR(1)` | Type of Change |
| `ChangeDocObjectClass` |  | |  |  | `CHAR(15)` | Object Class |
| `DatabaseTable` |  | |  |  | `CHAR(30)` | Table Name |
| `ChangeDocTableKey` |  | |  |  | `CHAR(70)` | Key of Modified Table Row |
| `ChangeDocPreviousUnit` |  | |  |  | `UNIT(3)` | Referenced Unit for Old Field Content |
| `ChangeDocNewUnit` |  | |  |  | `UNIT(3)` | Referenced Unit for New Field Content |
| `ChangeDocPreviousCurrency` |  | |  |  | `CUKY(5)` | Referenced Currency for Old Field Content |
| `ChangeDocNewCurrency` |  | |  |  | `CUKY(5)` | Referenced Currency for New Field Content |
| `ChangeDocNewFieldValue` |  | |  |  | `CHAR(254)` | New Content of Changed Field |
| `ChangeDocPreviousFieldValue` |  | |  |  | `CHAR(254)` | Old Content of Changed Field |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | User Name of Person Making Change in Change Document |
| `CreationDate` |  | |  |  | `DATS(8)` | Creation Date of Change Document |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Change |
| `ChangeDocLanguage` |  | |  |  | `LANG(1)` | Language Key |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid To Date |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `CostCenter` | `I_CostCenter` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICCCHNGLOG'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Cost Center Change Log'
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [
      #CDS_MODELING_ASSOCIATION_TARGET,
      #CDS_MODELING_DATA_SOURCE,
      #SQL_DATA_SOURCE ],
  usageType: {
    sizeCategory: #L,
    serviceQuality: #C,
    dataClass: #MIXED
  }
}
@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations: true

define view I_CostCenterChangeLog
  as select from    P_CostCenterChangeLog as ChangeDocumentItem
    association [0..1] to I_CostCenter    as CostCenter on  ChangeDocumentItem.ChangeDocumentControllingArea = CostCenter.ControllingArea
                                                        and ChangeDocumentItem.ChangeDocumentCostCenter      = CostCenter.CostCenter
                                                        and ChangeDocumentItem.ChangeDocumentValidityEndDate = CostCenter.ValidityEndDate
                                                        and ChangeDocumentItem.ChangeDocValidityStartDate    = CostCenter.ValidityStartDate
{
      //P_CostCenterChangeLog
  key ChangeDocumentItem.ChangeDocumentControllingArea,
  key cast( ChangeDocumentItem.ChangeDocumentCostCenter as kostl )                          as ChangeDocumentCostCenter,
  key cast( ChangeDocumentItem.ChangeDocumentValidityEndDate as costcentervalidityenddate ) as ChangeDocumentValidityEndDate,
  key cast( ChangeDocumentItem.ChangeDocValidityStartDate as costcentervaliditystartdate )  as ChangeDocValidityStartDate,
  key ChangeDocumentItem.ChangeDocObject,
  key ChangeDocumentItem.ChangeDocument,
  key ChangeDocumentItem.ChangeDocDatabaseTableField,
  key ChangeDocumentItem.ChangeDocItemChangeType,
      ChangeDocumentItem.ChangeDocObjectClass,
      ChangeDocumentItem.DatabaseTable,
      ChangeDocumentItem.ChangeDocTableKey,
      ChangeDocumentItem.ChangeDocPreviousUnit,
      ChangeDocumentItem.ChangeDocNewUnit,
      ChangeDocumentItem.ChangeDocPreviousCurrency,
      ChangeDocumentItem.ChangeDocNewCurrency,
      ChangeDocumentItem.ChangeDocNewFieldValue,
      ChangeDocumentItem.ChangeDocPreviousFieldValue,
      CreatedByUser,
      CreationDate,
      CreationTime,
      ChangeDocLanguage,

      //CostCenter
      CostCenter.BusinessArea,
      CostCenter.CompanyCode,
      CostCenter.ControllingArea,
      CostCenter.CostCenter,
      CostCenter.ValidityEndDate,
      CostCenter.ValidityStartDate,

      /* Associations */
      //P_CostCenterChangeLog
      ChangeDocumentItem._ChangeDocLongTableKey,
      ChangeDocumentItem._ChangeDocument,
      ChangeDocumentItem._ChangeDocumentItemExtension,
      //_CostCenter
      CostCenter._BusinessArea,
      CostCenter._CompanyCode,
      CostCenter._ControllingArea

}
```
