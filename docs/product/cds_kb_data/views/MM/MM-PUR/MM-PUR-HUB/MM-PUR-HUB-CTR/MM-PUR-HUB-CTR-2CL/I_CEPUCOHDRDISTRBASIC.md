---
name: I_CEPUCOHDRDISTRBASIC
description: "This CDS view provides access to header-level distribution information for central purchase contracts. It exposes distribution keys, target quantities and amounts, organizational data, and partner information for contract distribution scenarios. This CDS view provides the data to answer the following business questions: What are the distribution keys and percentages defined for a central purchase contract? Which organizational units (purchasing organization, company code, plant) are assigned to each distribution? What are the target quantities and amounts allocated across different distribution keys? What is the current distribution status for each contract distribution? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: MM-PUR-HUB-CTR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CEPUCOHDRDISTRBASIC')/$value
semantic_en: "This CDS view provides access to header-level distribution information for central purchase contracts. It exposes distribution keys, target quantities and amounts, organizational data, and partner information for contract distribution scenarios. This CDS view provides the data to answer the following business questions: What are the distribution keys and percentages defined for a central purchase contract? Which organizational units (purchasing organization, company code, plant) are assigned to each distribution? What are the target quantities and amounts allocated across different distribution keys? What is the current distribution status for each contract distribution? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "CePuCo Header Distribution — CDS view giao diện dựa trên I_CntrlPurContrDistribution."
keywords:
  - "cepuco"
  - "header"
  - "distribution"
  - "central"
  - "purchase"
  - "contract"
  - "item"
  - "purchasing"
  - "document"
  - "category"
  - "type"
tags:
  - MM
  - bo:companycode
  - component:MM-PUR-HUB-CTR-2CL
  - contract
  - interface-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-HUB
  - MM-PUR-HUB-CTR
  - MM-PUR-HUB-CTR-2CL
  - plan
---
# I_CEPUCOHDRDISTRBASIC

**This CDS view provides access to header-level distribution information for central purchase contracts. It exposes distribution keys, target quantities and amounts, organizational data, and partner information for contract distribution scenarios. This CDS view provides the data to answer the following business questions: What are the distribution keys and percentages defined for a central purchase contract? Which organizational units (purchasing organization, company code, plant) are assigned to each distribution? What are the target quantities and amounts allocated across different distribution keys? What is the current distribution status for each contract distribution? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CEPUCOHDRDISTRBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralPurchaseContract` | ✓ | |  |  | `CHAR(10)` | Purchasing Document Number |
| `DistributionKey` | ✓ | |  |  | `NUMC(4)` | Distribution Number of Central Purchasing Document |
| `CentralPurchaseContractItem` |  | |  |  | `NUMC(5)` | Item Number of Purchasing Document |
| `PurchasingDocumentCategory` |  | |  |  | `CHAR(1)` | Purchasing Document Category |
| `PurchasingDocumentType` |  | |  |  | `CHAR(4)` | Purchasing Document Type |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `LogicalSystem` |  | |  |  | `CHAR(10)` | Logical System |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment Key |
| `CashDiscount1Days` |  | |  |  | `DEC(3)` | Cash Discount Days 1 |
| `CashDiscount2Days` |  | |  |  | `DEC(3)` | Cash Discount Days 2 |
| `NetPaymentDays` |  | |  |  | `DEC(3)` | Net Payment Terms Period |
| `CashDiscount1Percent` |  | |  |  | `DEC(5)` | Cash Discount Percentage 1 |
| `CashDiscount2Percent` |  | |  |  | `DEC(5)` | Cash Discount Percentage 2 |
| `CntrlPurContrDistributionPct` |  | |  |  | `DEC(6)` | Distribution Percentage in Central Purchasing Document |
| `TargetQuantity` |  | |  |  | `QUAN(13)` | Target Quantity |
| `TargetAmount` |  | |  |  | `CURR(15)` | Target Value for Header Area per Distribution |
| `ExtContractForPurg` |  | |  |  | `CHAR(10)` | Contract of External System |
| `ExtContractItemForPurg` |  | |  |  | `NUMC(5)` | Contract Item of External System |
| `PurgDocItemDistributionStatus` |  | |  | `ItemDistributionStatus` | `CHAR(2)` | Distribution Status |
| `TextIsDeleted` |  | |  | `cast(IsDeleted as boolean)` | `CHAR(1)` | Boolean Variable (X = True, - = False, Space = Unknown) |
| `OrderQuantityUnit` |  | |  |  | `UNIT(3)` | Purchase Order Unit of Measure |
| `DistributionType` |  | |  |  | `CHAR(2)` | Distribution Type for Central Purchase Contract Item |
| `DistrResponseMessageUUID` |  | |  |  | `RAW(16)` | Generic Data Element for GUID Fields (X16) |
| `ProcurementHubSourceSystem` |  | |  | `cast(ProcurementHubSourceSystem as mmpur_d_source_sys)` | `CHAR(10)` | Connected System ID |
| `PurchasingInfoRecordUpdateCode` |  | |  |  | `CHAR(1)` | Indicator: Update Info Record |
| `ProcmtHubCompanyCodeGroupingID` |  | |  |  | `CHAR(3)` | Grouping ID for Company Codes |
| `ExtContractItemDistrForPurg` |  | |  |  | `NUMC(4)` | Distribution Number of Central Purchasing Document |
| `SourceListIsUpdated` |  | |  | `cast(SourceListIsUpdated as xfeld)` | `CHAR(1)` | Checkbox |
| `SourceListRestriction` |  | |  |  | `CHAR(2)` | Source List Restriction Indicator |
| `MRPSourcingControl` |  | |  |  | `CHAR(1)` | Source List Usage in Materials Planning |
| `IncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsLocation1` |  | |  |  | `CHAR(70)` | Incoterms Location 1 |
| `ShippingInstruction` |  | |  |  | `CHAR(2)` | Shipping Instructions |
| `_CentralPurchaseContract` | | ✓ | | | | |
| `_CntrlPurContrHdrPartner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CentralPurchaseContract` | `I_CentralPurchaseContractBasic` | [1..1] |
| `_CntrlPurContrHdrPartner` | `I_CePuCoHdrDistrPartnerBasic` | [0..*] |
| `_DistributionExtension` | `E_CntrlPurContrDistribution` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CEPUCOHDRDISTRBASIC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CEPUCOHDRDISTRBASIC')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'CePuCo Header Distribution'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #B,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@VDM.viewType : #BASIC
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define view entity I_CePuCoHdrDistrBasic
  as select from I_CntrlPurContrDistribution
  association [1..1] to I_CentralPurchaseContractBasic as _CentralPurchaseContract on  _CentralPurchaseContract.CentralPurchaseContract = $projection.CentralPurchaseContract
  association [0..*] to I_CePuCoHdrDistrPartnerBasic      as _CntrlPurContrHdrPartner on  _CntrlPurContrHdrPartner.CentralPurchaseContract = $projection.CentralPurchaseContract
                                                                                   and _CntrlPurContrHdrPartner.DistributionKey         = $projection.DistributionKey
  ----Extension Association
  association [1..1] to E_CntrlPurContrDistribution    as _DistributionExtension   on  _DistributionExtension.PurchasingDocument = $projection.CentralPurchaseContract
                                                                                   and _DistributionExtension.DistributionKey    = $projection.DistributionKey
                                                                                   and _DistributionExtension.PurchasingDocumentItem = '00000' 

{
  key CentralPurchaseContract,
  key DistributionKey,
      CentralPurchaseContractItem,
      PurchasingDocumentCategory,
      PurchasingDocumentType,
      PurchasingOrganization,
      CompanyCode,
      Plant,
      LogicalSystem,
      DocumentCurrency,
      Currency,
      PurchasingGroup,
      StorageLocation,
      PaymentTerms,
      CashDiscount1Days,
      CashDiscount2Days,
      NetPaymentDays,
      CashDiscount1Percent,
      CashDiscount2Percent,
      CntrlPurContrDistributionPct,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      TargetQuantity,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      TargetAmount,
      ExtContractForPurg,
      ExtContractItemForPurg,
      ItemDistributionStatus as PurgDocItemDistributionStatus,
      cast(IsDeleted as boolean) as TextIsDeleted,
      OrderQuantityUnit,
      DistributionType,
      DistrResponseMessageUUID,
      cast(ProcurementHubSourceSystem as mmpur_d_source_sys) as ProcurementHubSourceSystem,
      PurchasingInfoRecordUpdateCode,
      ProcmtHubCompanyCodeGroupingID,
      ExtContractItemDistrForPurg,
      cast(SourceListIsUpdated as xfeld) as SourceListIsUpdated,
      SourceListRestriction,
      MRPSourcingControl,
      IncotermsClassification,
      IncotermsLocation1,
      ShippingInstruction,

      /* Associations */
      @ObjectModel.association.type: [ #TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT ]
      _CentralPurchaseContract,
      @ObjectModel.association.type: [ #TO_COMPOSITION_CHILD ]
      _CntrlPurContrHdrPartner
}
where
  CentralPurchaseContractItem = '00000'
```
