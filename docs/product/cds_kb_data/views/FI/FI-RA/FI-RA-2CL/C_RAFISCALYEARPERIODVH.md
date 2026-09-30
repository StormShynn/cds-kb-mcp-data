---
name: C_RAFISCALYEARPERIODVH
description: "RA Fiscal Year Period"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RAFISCALYEARPERIODVH')/$value
semantic_en: "RA Fiscal Year Period"
semantic_vi: "RA Fiscal Year Period — CDS view tiêu dùng dựa trên I_FiscalYearPeriodForLedger."
keywords:
  - "fiscal"
  - "year"
  - "period"
  - "company"
  - "code"
  - "ledger"
  - "variant"
tags:
  - FI
  - bo:companycode
  - component:FI-RA-2CL
  - consumption-view
  - FI-RA
  - FI-RA-2CL
  - lob:finance
---
# C_RAFISCALYEARPERIODVH

**RA Fiscal Year Period**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RAFISCALYEARPERIODVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` | ✓ | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalPeriodStartDate` |  | |  |  | `DATS(8)` | Start Date of Fiscal Period |
| `FiscalPeriodEndDate` |  | |  |  | `DATS(8)` | End Date of Fiscal Period |
| `IsSpecialPeriod` |  | |  |  | `CHAR(1)` | Indicator: Is Special Period |
| `FiscalYearStartDate` |  | |  |  | `DATS(8)` | Start Date of Fiscal Year |
| `FiscalYearEndDate` |  | |  |  | `DATS(8)` | End Date of Fiscal Year |
| `NextFiscalPeriod` |  | |  |  | `NUMC(3)` | Next Fiscal Period |
| `NextFiscalPeriodFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Next Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `_CompanyCode` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_FiscalPeriodStartDate` | | ✓ | | | | |
| `_FiscalYearForLedger` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RAFISCALYEARPERIODVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RAFISCALYEARPERIODVH')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED

@ObjectModel: { dataCategory: #VALUE_HELP,
                representativeKey: 'FiscalPeriod',
                usageType.dataClass: #CUSTOMIZING,
                usageType.serviceQuality: #C,
                usageType.sizeCategory: #L }

@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.modelingPattern: #NONE

@VDM.viewType: #CONSUMPTION

@EndUserText.label: 'RA Fiscal Year Period'

@Metadata.ignorePropagatedAnnotations: true

@Search.searchable: true
@Consumption.ranked: true

define view entity C_RAFiscalYearPeriodVH
  as select from I_FiscalYearPeriodForLedger
{

      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key CompanyCode,

      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_LedgerStdVH',
                     element: 'Ledger' }
        }]
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }  
      @ObjectModel.foreignKey.association: '_Ledger'
  key Ledger,
      
      
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      @ObjectModel.foreignKey.association: '_FiscalYearForLedger'
  key FiscalYear,
  
      @Search: { defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.8 }
  key FiscalPeriod,

      FiscalYearVariant,

      FiscalPeriodStartDate,
      FiscalPeriodEndDate,

      IsSpecialPeriod,

      FiscalYearStartDate,
      FiscalYearEndDate,

      NextFiscalPeriod,
      NextFiscalPeriodFiscalYear,
      
      FiscalYearPeriod,

      _CompanyCode,
      _Ledger,
      _FiscalPeriodStartDate,
      _FiscalYearForLedger,
      _Text

}
```
