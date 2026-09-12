---
name: I_MDQANLYTSSCRPRODCLFNCUBE
description: "MDQ Score for Product Clfn - Cube"
app_component: CA-MDG-ADQ
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQANLYTSSCRPRODCLFNCUBE')/$value
semantic_en: "MDQ Score for Product Clfn - Cube"
tags:
  - CA
  - bo:material
  - CA-MDG
  - CA-MDG-ADQ
  - component:CA-MDG-ADQ
  - interface-view
  - lob:cross_application components
  - product
  - metadata-only
---
# I_MDQANLYTSSCRPRODCLFNCUBE

**MDQ Score for Product Clfn - Cube**

| Property | Value |
|---|---|
| App Component | `CA-MDG-ADQ` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQANLYTSSCRPRODCLFNCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MasterDataChangeProcess` |  | |  |  | `NUMC(12)` | Master Data Change Process Identifier |
| `Product` |  | |  |  | `CHAR(40)` | Material Number |
| `ClassType` |  | |  |  | `CHAR(3)` | Class Type |
| `CharcInternalID` |  | |  |  | `NUMC(10)` |  |
| `MDQualityBusinessRuleUUID` |  | |  |  | `RAW(16)` | Master Data Quality Validation Rule UUID |
| `MDQltyBusRuleEvalResultCode` |  | |  |  | `CHAR(1)` | Master Data Quality Rule Evaluation Result Type |
| `Characteristic` |  | |  |  | `CHAR(30)` | Characteristic Name |
| `CharcDescription` |  | |  |  | `CHAR(30)` | Characteristic Description |
| `MDChgProcessFinishDate` |  | |  |  | `DATS(8)` | Master Data Change Process Completion Date |
| `MDChgProcessIsLatest` |  | |  |  | `CHAR(1)` |  |
| `MDQltyBusinessRuleBaseTable` |  | |  |  | `CHAR(30)` | Base Table |
| `MDQltyBusinessRuleBaseTabName` |  | |  |  | `CHAR(80)` | Alias of a table |
| `MDQltyBusinessRuleOwner` |  | |  |  | `CHAR(12)` | Master Data Quality Business Rule Owner |
| `MDQltyBusRuleCheckedField` |  | |  |  | `CHAR(30)` | Master Data Quality Fieldname of the Checked Field |
| `MDQltyBusRuleCheckedFieldTable` |  | |  |  | `CHAR(30)` | Name of Table with Checked Field |
| `MDQltyBusRuleChkdFieldAndTable` |  | |  |  | `CHAR(61)` | Master Data Quality Table and Field Name of Checked Field |
| `MDQualityBusinessRule` |  | |  |  | `CHAR(26)` | Master Data Quality Rule Definition ID |
| `MDQualityBusinessRuleName` |  | |  |  | `CHAR(50)` | Master Data Quality Rule Definition Name |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Created On |
| `CrossPlantStatus` |  | |  |  | `CHAR(2)` | Cross-Plant Product Status |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `ExternalProductGroup` |  | |  |  | `CHAR(18)` | External Product Group |
| `HasEmptiesBOM` |  | |  |  | `CHAR(1)` | Empties Bill of Material |
| `HasTextilePartsWthAnimalOrigin` |  | |  |  | `CHAR(1)` | Indicator: Contains Non-Textile Parts of Animal Origin |
| `HasVariableTareWeight` |  | |  |  | `CHAR(1)` | Variable Tare Weight |
| `IndustrySector` |  | |  |  | `CHAR(1)` | Industry |
| `IndustryStandardName` |  | |  |  | `CHAR(18)` | Industry Standard Description (such as ANSI or ISO) |
| `InternationalArticleNumberCat` |  | |  |  | `CHAR(2)` | Category of International Article Number (EAN) |
| `IsBatchManagementRequired` |  | |  |  | `CHAR(1)` | Batch Management Requirement Indicator |
| `IsPilferable` |  | |  |  | `CHAR(1)` | Pilferable |
| `IsRelevantForHzdsSubstances` |  | |  |  | `CHAR(1)` | Relevant for Hazardous Substances |
| `ItemCategoryGroup` |  | |  |  | `CHAR(4)` | General item category group |
| `LaboratoryOrDesignOffice` |  | |  |  | `CHAR(3)` | Laboratory/Design Office |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Date of Last Change |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Time of Last Change |
| `ProdNoInGenProdInPrepackProd` |  | |  |  | `CHAR(40)` | Material Number of the Generic Material in Prepack Materials |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `ProductHierarchy` |  | |  |  | `CHAR(18)` | Product Hierarchy |
| `ProductIsConfigurable` |  | |  |  | `CHAR(1)` | Product is Configurable |
| `ProductOldID` |  | |  |  | `CHAR(40)` | Old Product Number |
| `ProductSeasonUsageCategory` |  | |  |  | `CHAR(1)` | Indicator: Use of Season |
| `ProductStandardID` |  | |  |  | `CHAR(18)` | Global Trade Item Number (EAN/UPC/GTIN) |
| `ProductType` |  | |  |  | `CHAR(4)` | Product Type |
| `QualityInspectionGroup` |  | |  |  | `CHAR(4)` | Quality Inspection Group |
| `SerialNoExplicitnessLevel` |  | |  |  | `CHAR(1)` | Level of Explicitness for Serial Number |
| `ValuationClass` |  | |  |  | `CHAR(4)` | Valuation Class |
| `WarehouseProductGroup` |  | |  |  | `CHAR(4)` | Warehouse Material Group |
| `WarehouseStorageCondition` |  | |  |  | `CHAR(2)` | Warehouse Storage Condition |
| `MDQltyNmbrOfSuccssflEvalRslts` |  | |  |  | `INT4(10)` | Master Data Quality Counter Total Records |
| `MDQltyNmbrOfFailedEvalRslts` |  | |  |  | `INT4(10)` | Master Data Quality Counter Total Records |
| `MDQltyNmbrOfBusRuleEvalResults` |  | |  |  | `INT4(10)` | Master Data Quality Counter Total Records |
| `MDQltyProdAlPgNavgnPath` |  | |  |  | `SSTR(1333)` | Fiori Host Path concatenated with Navigation Target |
