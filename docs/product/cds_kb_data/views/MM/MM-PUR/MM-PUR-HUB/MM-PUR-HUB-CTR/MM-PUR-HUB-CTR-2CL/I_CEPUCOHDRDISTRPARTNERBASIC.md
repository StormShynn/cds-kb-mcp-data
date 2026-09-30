---
name: I_CEPUCOHDRDISTRPARTNERBASIC
description: "This CDS view provides access to distribution partner information at the header level of central purchase contracts. It retrieves partner details associated with distribution keys for central purchasing contracts, focusing on header-level partner assignments where the contract item is '00000'. This CDS view provides the data to answer the following business questions: Which distribution partners are assigned to a specific central purchase contract at the header level? What are the partner functions and organizational assignments for central contract distributions? Which suppliers and purchasing organizations are associated with central contract distribution keys? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: MM-PUR-HUB-CTR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CEPUCOHDRDISTRPARTNERBASIC')/$value
semantic_en: "This CDS view provides access to distribution partner information at the header level of central purchase contracts. It retrieves partner details associated with distribution keys for central purchasing contracts, focusing on header-level partner assignments where the contract item is '00000'. This CDS view provides the data to answer the following business questions: Which distribution partners are assigned to a specific central purchase contract at the header level? What are the partner functions and organizational assignments for central contract distributions? Which suppliers and purchasing organizations are associated with central contract distribution keys? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "CePuCo Header Distribution Partner — CDS view giao diện dựa trên I_CntrlPurchaseContractPartner."
keywords:
  - "cepuco"
  - "header"
  - "distribution"
  - "partner"
  - "central"
  - "purchase"
  - "contract"
  - "counter"
  - "item"
  - "function"
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
  - supplier
---
# I_CEPUCOHDRDISTRPARTNERBASIC

**This CDS view provides access to distribution partner information at the header level of central purchase contracts. It retrieves partner details associated with distribution keys for central purchasing contracts, focusing on header-level partner assignments where the contract item is '00000'. This CDS view provides the data to answer the following business questions: Which distribution partners are assigned to a specific central purchase contract at the header level? What are the partner functions and organizational assignments for central contract distributions? Which suppliers and purchasing organizations are associated with central contract distribution keys? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CEPUCOHDRDISTRPARTNERBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralPurchaseContract` | ✓ | |  |  | `CHAR(10)` | Purchasing Document Number |
| `DistributionKey` | ✓ | |  |  | `NUMC(4)` | Distribution Number of Central Purchasing Document |
| `PartnerCounter` | ✓ | |  |  | `NUMC(3)` | Partner counter |
| `CentralPurchaseContractItem` |  | |  |  | `NUMC(5)` | Item Number of Purchasing Document |
| `PartnerFunction` |  | |  |  | `CHAR(2)` | Partner Function |
| `ExtPlantForPurg` |  | |  |  | `CHAR(4)` | Plant of External System |
| `Supplier` |  | |  |  | `CHAR(10)` | Reference to other supplier |
| `SupplierSubrange` |  | |  |  | `CHAR(6)` | Supplier Subrange |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` |  |
| `_CntrlPurContrDistribution` | | ✓ | | | | |
| `_CentralPurchaseContract` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CntrlPurContrDistribution` | `I_CePuCoHdrDistrBasic` | [1..1] |
| `_CentralPurchaseContract` | `I_CentralPurchaseContractBasic` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CEPUCOHDRDISTRPARTNERBASIC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CEPUCOHDRDISTRPARTNERBASIC')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'CePuCo Header Distribution Partner'
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
define view entity I_CePuCoHdrDistrPartnerBasic
  as select from I_CntrlPurchaseContractPartner
  association [1..1] to I_CePuCoHdrDistrBasic          as _CntrlPurContrDistribution on  $projection.CentralPurchaseContract = _CntrlPurContrDistribution.CentralPurchaseContract
                                                                                     and $projection.DistributionKey         = _CntrlPurContrDistribution.DistributionKey
  association [1..1] to I_CentralPurchaseContractBasic as _CentralPurchaseContract   on  $projection.CentralPurchaseContract = _CentralPurchaseContract.CentralPurchaseContract
{
  key CentralPurchaseContract,
  key DistributionKey,
  key PartnerCounter,
      CentralPurchaseContractItem,
      PartnerFunction,
      ExtPlantForPurg,
      Supplier,
      SupplierSubrange,
      PurchasingOrganization,
      /* Associations */
      @ObjectModel.association.type: [ #TO_COMPOSITION_ROOT ]
      _CentralPurchaseContract,
      
      @ObjectModel.association.type: [ #TO_COMPOSITION_PARENT ]
      _CntrlPurContrDistribution
}
where
  CentralPurchaseContractItem = '00000'
```
