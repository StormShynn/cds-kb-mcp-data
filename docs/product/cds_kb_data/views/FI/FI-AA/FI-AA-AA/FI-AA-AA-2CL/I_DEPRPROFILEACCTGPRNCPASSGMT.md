---
name: I_DEPRPROFILEACCTGPRNCPASSGMT
description: "This CDS view indicates to which accounting principle a depreciation profile is assigned. A depreciation profile can be assigned to several accounting principles. In addition, the CDS view indicates whether the depreciation profile is active within the assigned accounting principle. This CDS view provides the data to answer the following business questions: To which accounting principle is the depreciation profile assigned? Is the depreciation profile active within the accounting principle? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-AA-AA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRPROFILEACCTGPRNCPASSGMT')/$value
semantic_en: "This CDS view indicates to which accounting principle a depreciation profile is assigned. A depreciation profile can be assigned to several accounting principles. In addition, the CDS view indicates whether the depreciation profile is active within the assigned accounting principle. This CDS view provides the data to answer the following business questions: To which accounting principle is the depreciation profile assigned? Is the depreciation profile active within the accounting principle? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Depreciation Profile Acc Princ Assgnmt — CDS view giao diện dựa trên faac_depr_prf1a."
keywords:
  - "depreciation"
  - "profile"
  - "acc"
  - "princ"
  - "assgnmt"
  - "accounting"
  - "principle"
  - "active"
  - "cntry"
  - "spcfc"
  - "depr"
  - "prfl"
  - "clfn"
  - "rptg"
tags:
  - FI
  - account
  - bo:asset
  - component:FI-AA-AA-2CL
  - FI-AA
  - FI-AA-AA
  - FI-AA-AA-2CL
  - interface-view
  - lob:finance
---
# I_DEPRPROFILEACCTGPRNCPASSGMT

**This CDS view indicates to which accounting principle a depreciation profile is assigned. A depreciation profile can be assigned to several accounting principles. In addition, the CDS view indicates whether the depreciation profile is active within the assigned accounting principle. This CDS view provides the data to answer the following business questions: To which accounting principle is the depreciation profile assigned? Is the depreciation profile active within the accounting principle? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-AA-AA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRPROFILEACCTGPRNCPASSGMT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DepreciationProfile` | ✓ | |  | `depr_profile` | `CHAR(12)` | Depreciation Profile |
| `AccountingPrinciple` | ✓ | |  | `acc_principle` | `CHAR(4)` | Accounting Principle |
| `DepreciationProfileIsActive` |  | |  | `is_active` | `CHAR(1)` | Depreciation Profile Is Active for Accounting Principle |
| `CntrySpcfcDeprPrflClfnForRptg` |  | |  | `glo_report_classification` | `CHAR(4)` | Ctry/Reg.-Specific Classif. of Depr. Profiles for Reporting |
| `_DepreciationProfile` | | ✓ | | | | |
| `_DepreciationProfileName` | | ✓ | | | | |
| `_AccountingPrinciple` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DepreciationProfile` | `I_DepreciationProfile` | [0..1] |
| `_DepreciationProfileName` | `I_DepreciationProfileText` | [1..*] |
| `_AccountingPrinciple` | `I_AccountingPrinciple` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRPROFILEACCTGPRNCPASSGMT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRPROFILEACCTGPRNCPASSGMT')/$value)*

```abap
@Analytics: { dataCategory: #DIMENSION }
@Analytics.internalName: #LOCAL
@Analytics.technicalName: 'IDEPRPRFACCPRINC'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Depreciation Profile Acc Princ Assgnmt'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { representativeKey: 'AccountingPrinciple',
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY]
              }
@VDM.viewType: #BASIC
@Search.searchable: true
define view entity I_DeprProfileAcctgPrncpAssgmt
  as select from faac_depr_prf1a
  association [0..1] to I_DepreciationProfile          as _DepreciationProfile          on $projection.DepreciationProfile = _DepreciationProfile.DepreciationProfile
  association [1..*] to I_DepreciationProfileText as _DepreciationProfileName on $projection.DepreciationProfile = _DepreciationProfileName.DepreciationProfile
  association [1..1] to I_AccountingPrinciple     as _AccountingPrinciple     on $projection.AccountingPrinciple = _AccountingPrinciple.AccountingPrinciple
{
      @ObjectModel.foreignKey.association: '_DepreciationProfile'
      @ObjectModel.text.association: '_DepreciationProfileName'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key depr_profile              as DepreciationProfile,
//      @ObjectModel.foreignKey.association: '_AccountingPrinciple'
  key acc_principle             as AccountingPrinciple,
      is_active                 as DepreciationProfileIsActive,
      glo_report_classification as CntrySpcfcDeprPrflClfnForRptg,
      // Associations
      _DepreciationProfile,
      _DepreciationProfileName,
      _AccountingPrinciple
}
```
