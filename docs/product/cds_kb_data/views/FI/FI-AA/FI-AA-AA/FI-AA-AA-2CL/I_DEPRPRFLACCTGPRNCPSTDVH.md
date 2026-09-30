---
name: I_DEPRPRFLACCTGPRNCPSTDVH
description: "This CDS view provides value help for DepreciationProfile and AccountingPrinciple. This view should be used for value help purposes only. If you intend to select the entire business data, use the view I_DeprProfileAcctgPrncpAssgmt instead. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-AA-AA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRPRFLACCTGPRNCPSTDVH')/$value
semantic_en: "This CDS view provides value help for DepreciationProfile and AccountingPrinciple. This view should be used for value help purposes only. If you intend to select the entire business data, use the view I_DeprProfileAcctgPrncpAssgmt instead. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Depreciation Profile Acct Principle — CDS view giao diện dựa trên faac_depr_prf1a."
keywords:
  - "depreciation"
  - "profile"
  - "acct"
  - "principle"
  - "accounting"
  - "active"
  - "cntry"
  - "spcfc"
  - "depr"
  - "prfl"
  - "classfctn"
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
# I_DEPRPRFLACCTGPRNCPSTDVH

**This CDS view provides value help for DepreciationProfile and AccountingPrinciple. This view should be used for value help purposes only. If you intend to select the entire business data, use the view I_DeprProfileAcctgPrncpAssgmt instead. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRPRFLACCTGPRNCPSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AccountingPrinciple` | ✓ | |  | `acc_principle` | `CHAR(4)` | Accounting Principle |
| `DepreciationProfile` | ✓ | |  | `depr_profile` | `CHAR(12)` | Depreciation Profile |
| `DepreciationProfileIsActive` |  | |  | `is_active` | `CHAR(1)` | Depreciation Profile Is Active for Accounting Principle |
| `CntrySpcfcDeprPrflClassfctnRpt` |  | |  | `glo_report_classification` | `CHAR(4)` | Ctry/Reg.-Specific Classif. of Depr. Profiles for Reporting |
| `_AccountingPrinciple` | | ✓ | | | | |
| `_DepreciationProfileName` | | ✓ | | | | |
| `_AccountingPrincipleName` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AccountingPrinciple` | `I_AccountingPrinciple` | [1] |
| `_DepreciationProfileName` | `I_DepreciationProfileText` | [1..*] |
| `_AccountingPrincipleName` | `I_AccountingPrincipleText` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRPRFLACCTGPRNCPSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRPRFLACCTGPRNCPSTDVH')/$value)*

```abap
@VDM.viewType: #BASIC

@ObjectModel: { dataCategory: #VALUE_HELP,
                representativeKey: 'DepreciationProfile',
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                usageType.serviceQuality: #A,
                supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY],
                modelingPattern: #VALUE_HELP_PROVIDER }

@AccessControl.authorizationCheck: #NOT_REQUIRED

@Search.searchable: true
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true

@AbapCatalog.viewEnhancementCategory: [#NONE]
@EndUserText.label: 'Depreciation Profile Acct Principle'
define view entity I_DeprPrflAcctgPrncpStdVH
  as select from faac_depr_prf1a
  association [1]    to I_AccountingPrinciple     as _AccountingPrinciple     on $projection.AccountingPrinciple = _AccountingPrinciple.AccountingPrinciple
  association [1..*] to I_DepreciationProfileText as _DepreciationProfileName on $projection.DepreciationProfile = _DepreciationProfileName.DepreciationProfile
  association [1..*] to I_AccountingPrincipleText as _AccountingPrincipleName on $projection.AccountingPrinciple = _AccountingPrincipleName.AccountingPrinciple
{
      @ObjectModel.foreignKey.association: '_AccountingPrinciple'
      @ObjectModel.text.association: '_AccountingPrincipleName'
  key acc_principle             as AccountingPrinciple,
//      @ObjectModel.text.association: '_DepreciationProfileName'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key depr_profile              as DepreciationProfile,
      _DepreciationProfileName[1:Language=$session.system_language].DepreciationProfileName,
      is_active                 as DepreciationProfileIsActive,
      glo_report_classification as CntrySpcfcDeprPrflClassfctnRpt,

      // Associations
      _AccountingPrinciple,
      _DepreciationProfileName,
      _AccountingPrincipleName
}
```
