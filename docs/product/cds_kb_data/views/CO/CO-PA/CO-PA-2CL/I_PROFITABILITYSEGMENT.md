---
name: I_PROFITABILITYSEGMENT
description: "Profitabilitysegment"
app_component: CO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PA
  - interface-view
  - component:CO-PA-2CL
  - lob:Controlling
---
# I_PROFITABILITYSEGMENT

**Profitabilitysegment**

| Property | Value |
|---|---|
| App Component | `CO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProfitabilitySegment` | ✓ | |  | `paobjnr` | `CHAR(10)` | Profitability Segment Number (CO-PA) |
| `ControllingArea` |  | |  | `kokrs` | `CHAR(4)` | Controlling Area |
| `CompanyCode` |  | |  | `bukrs` | `CHAR(4)` | Company Code |
| `CostCenter` |  | |  | `copa_kostl` | `CHAR(10)` | Cost center |
| `FunctionalArea` |  | |  | `fkber` | `CHAR(16)` | Functional Area |
| `BusinessArea` |  | |  | `gsber` | `CHAR(4)` | Business Area |
| `SalesDocument` |  | |  | `cast( kaufn as vbeln_va preserving type )` | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  | `kdpos` | `NUMC(6)` | Sales Document Item |
| `Customer` |  | |  | `kndnr` | `CHAR(10)` | Customer |
| `CostObject` |  | |  | `kstrg` | `CHAR(12)` | Cost Object |
| `PartnerProfitCenter` |  | |  | `pprctr` | `CHAR(10)` | Partner Profit Center |
| `ProfitCenter` |  | |  | `prctr` | `CHAR(10)` | Profit Center |
| `WBSElementInternalID` |  | |  | `cast( pspnr as fis_wbsint_no_conv preserving type )` | `NUMC(8)` | WBS Element Internal ID |
| `Segment` |  | |  | `segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `ServiceDocumentType` |  | |  | `service_doc_type` | `CHAR(4)` | Service Document Type |
| `ServiceDocument` |  | |  | `service_doc_id` | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` |  | |  | `service_doc_item_id` | `NUMC(6)` | Service Document Item ID |
| `BusinessSolutionOrder` |  | |  | `solution_order_id` | `CHAR(10)` | Solution Order ID |
| `BusinessSolutionOrderItem` |  | |  | `solution_order_item_id` | `NUMC(6)` | Solution Order Item ID |
| `ProviderContract` |  | |  | `vtkey` | `CHAR(20)` | Identification of a Provider Contract |
| `ProviderContractItem` |  | |  | `vtpos` | `NUMC(6)` | Contract: Item Number |
| `Plant` |  | |  | `werks` | `CHAR(4)` | Plant |
| `OrderID` |  | |  | `AUFNR` | `CHAR(12)` | Order Number |
| `SoldProduct` |  | |  | `artnr` | `CHAR(40)` | Product number |
| `CustomerSupplierIndustry` |  | |  | `brsch` | `CHAR(4)` | Industry Key |
| `SalesDistrict` |  | |  | `bzirk` | `CHAR(6)` | Sales District |
| `BillingDocumentType` |  | |  | `fkart` | `CHAR(4)` | Billing Type |
| `CustomerGroup` |  | |  | `kdgrp` | `CHAR(2)` | Customer Group |
| `BillToParty` |  | |  | `kunre` | `CHAR(10)` | Bill-to Party |
| `ShipToParty` |  | |  | `kunwe` | `CHAR(10)` | Ship-to Party |
| `CustomerSupplierCountry` |  | |  | `land1` | `CHAR(3)` | Country/Region Key |
| `SoldProductGroup` |  | |  | `matkl` | `CHAR(9)` | Material Group |
| `OrganizationDivision` |  | |  | `spart` | `CHAR(2)` | Division |
| `SalesOrganization` |  | |  | `vkorg` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  | `vtweg` | `CHAR(2)` | Distribution Channel |
| `IncmpltSummableValnQtyUnt` |  | |  | `meinh` | `UNIT(3)` | Unit of Measure |
| `AdditionalQuantity1Unit` |  | |  | `qunit1` | `UNIT(3)` | Additional Unit of Measure 1 |
| `AdditionalQuantity2Unit` |  | |  | `qunit2` | `UNIT(3)` | Additional Unit of Measure 2 |
| `AdditionalQuantity3Unit` |  | |  | `qunit3` | `UNIT(3)` | Additional Unit of Measure 3 |
| `CreationDateTime` |  | |  | `timestamp` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `_CompanyCode` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_PartnerProfitCenter` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_SoldProductGroup` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_SalesDocumentItem` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_CustomerSupplierCountry` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_BillingDocumentType` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_ProviderContract` | | ✓ | | | | |
| `_ProviderContractItem` | | ✓ | | | | |
| `_AdditionalQuantity1Unit` | | ✓ | | | | |
| `_AdditionalQuantity2Unit` | | ✓ | | | | |
| `_AdditionalQuantity3Unit` | | ✓ | | | | |
| `_IncmpltSummableValnQtyUnt` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_PartnerProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_SoldProductGroup` | `I_ProductGroup_2` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_SalesDocument` | `I_SalesDocument` | [0..1] |
| `_SalesDocumentItem` | `I_SalesDocumentItem` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_CustomerGroup` | `I_CustomerGroup` | [0..1] |
| `_CustomerSupplierCountry` | `I_Country` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_SalesDistrict` | `I_SalesDistrict` | [0..1] |
| `_BillToParty` | `I_Customer` | [0..1] |
| `_ShipToParty` | `I_Customer` | [0..1] |
| `_BillingDocumentType` | `I_BillingDocumentType` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_ProviderContract` | `I_ProviderContract` | [0..1] |
| `_ProviderContractItem` | `I_ProviderContractItem` | [0..1] |
| `_AdditionalQuantity1Unit` | `I_UnitOfMeasure` | [0..1] |
| `_AdditionalQuantity2Unit` | `I_UnitOfMeasure` | [0..1] |
| `_AdditionalQuantity3Unit` | `I_UnitOfMeasure` | [0..1] |
| `_IncmpltSummableValnQtyUnt` | `I_UnitOfMeasure` | [0..1] |
| `_Extension` | `E_ProfitabilitySegment` | [0..1] |
| `_Extension2` | `E_ProfitabilitySegment_2` | [0..1] |
| `_Extension3` | `E_ProfitabilitySegment_3` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Profitability Segment'

@VDM.viewType: #BASIC

@ObjectModel: {
   sapObjectNodeType.name: 'ProfitabilitySegment',
   representativeKey: 'ProfitabilitySegment',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #A,
     sizeCategory:   #M
   },
   supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
   modelingPattern:  #ANALYTICAL_DIMENSION

}

@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true -- required for C1 released views
@AccessControl.personalData.blocking:#REQUIRED

define view entity I_ProfitabilitySegment
  as select from P_ProfitabilitySegment as ProfSeg
  association [0..1] to I_CompanyCode            as _CompanyCode               on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_ControllingArea        as _ControllingArea           on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [0..*] to I_ProfitCenter           as _ProfitCenter              on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                               and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter

  association [0..*] to I_ProfitCenter           as _PartnerProfitCenter       on  $projection.ControllingArea     = _PartnerProfitCenter.ControllingArea
                                                                               and $projection.PartnerProfitCenter = _PartnerProfitCenter.ProfitCenter

  association [0..*] to I_CostCenter             as _CostCenter                on  $projection.ControllingArea = _CostCenter.ControllingArea
                                                                               and $projection.CostCenter      = _CostCenter.CostCenter
  association [0..1] to I_BusinessArea           as _BusinessArea              on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..1] to I_FunctionalArea         as _FunctionalArea            on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea

  association [0..1] to I_ProductGroup_2         as _SoldProductGroup          on  $projection.SoldProductGroup = _SoldProductGroup.ProductGroup

  association [0..1] to I_DistributionChannel    as _DistributionChannel       on  $projection.DistributionChannel = _DistributionChannel.DistributionChannel

  association [0..1] to I_SalesDocument          as _SalesDocument             on  $projection.SalesDocument = _SalesDocument.SalesDocument
  association [0..1] to I_SalesDocumentItem      as _SalesDocumentItem         on  $projection.SalesDocument     = _SalesDocumentItem.SalesDocument
                                                                               and $projection.SalesDocumentItem = _SalesDocumentItem.SalesDocumentItem

  association [0..1] to I_Customer               as _Customer                  on  $projection.Customer = _Customer.Customer
  association [0..1] to I_CustomerGroup          as _CustomerGroup             on  $projection.CustomerGroup = _CustomerGroup.CustomerGroup

  association [0..1] to I_Country                as _CustomerSupplierCountry   on  $projection.CustomerSupplierCountry = _CustomerSupplierCountry.Country
  association [0..1] to I_SalesOrganization      as _SalesOrganization         on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  association [0..1] to I_SalesDistrict          as _SalesDistrict             on  $projection.SalesDistrict = _SalesDistrict.SalesDistrict
  association [0..1] to I_Customer               as _BillToParty               on  $projection.BillToParty = _BillToParty.Customer
  association [0..1] to I_Customer               as _ShipToParty               on  $projection.ShipToParty = _ShipToParty.Customer

  association [0..1] to I_BillingDocumentType    as _BillingDocumentType       on  $projection.BillingDocumentType = _BillingDocumentType.BillingDocumentType

  association [0..1] to I_WBSElementBasicData    as _WBSElementBasicData       on  $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID

  association [0..1] to I_Plant                  as _Plant                     on  $projection.Plant = _Plant.Plant

  association [0..1] to I_ProviderContract       as _ProviderContract          on  $projection.ProviderContract = _ProviderContract.ProviderContract
  association [0..1] to I_ProviderContractItem   as _ProviderContractItem      on  $projection.ProviderContract     = _ProviderContractItem.ProviderContract
                                                                               and $projection.ProviderContractItem = _ProviderContractItem.ProviderContractItem

  association [0..1] to I_UnitOfMeasure          as _AdditionalQuantity1Unit   on  $projection.AdditionalQuantity1Unit = _AdditionalQuantity1Unit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure          as _AdditionalQuantity2Unit   on  $projection.AdditionalQuantity2Unit = _AdditionalQuantity2Unit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure          as _AdditionalQuantity3Unit   on  $projection.AdditionalQuantity3Unit = _AdditionalQuantity3Unit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure          as _IncmpltSummableValnQtyUnt on  $projection.IncmpltSummableValnQtyUnt = _IncmpltSummableValnQtyUnt.UnitOfMeasure

  association [0..1] to E_ProfitabilitySegment   as _Extension                 on  $projection.ProfitabilitySegment = _Extension.ProfitabilitySegment
  association [0..1] to E_ProfitabilitySegment_2 as _Extension2                on  $projection.ProfitabilitySegment        = _Extension2.ProfitabilitySegment
                                                                               and _Extension2.IsActive                    = 'X'
                                                                               and _Extension2.ProfitabilitySegmentChanges = '0001'
  association [0..1] to E_ProfitabilitySegment_3 as _Extension3                on  $projection.ProfitabilitySegment        = _Extension3.ProfitabilitySegment
                                                                               and _Extension3.IsActive                    = 'X'
                                                                               and _Extension3.ProfitabilitySegmentChanges = '0001'
{
  key ProfSeg.paobjnr                                     as ProfitabilitySegment,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      kokrs                                               as ControllingArea,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      bukrs                                               as CompanyCode,
      @ObjectModel.foreignKey.association: '_CostCenter'
      copa_kostl                                          as CostCenter,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      fkber                                               as FunctionalArea,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      gsber                                               as BusinessArea,
      @ObjectModel.foreignKey.association: '_SalesDocument'
      cast( kaufn as vbeln_va preserving type )           as SalesDocument,
      @ObjectModel.foreignKey.association: '_SalesDocumentItem'
      kdpos                                               as SalesDocumentItem,
      @ObjectModel.foreignKey.association: '_Customer'
      kndnr                                               as Customer,


      kstrg                                               as CostObject,
      @ObjectModel.foreignKey.association: '_PartnerProfitCenter'
      pprctr                                              as PartnerProfitCenter,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      prctr                                               as ProfitCenter,
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      cast( pspnr as fis_wbsint_no_conv preserving type ) as WBSElementInternalID,
      segment                                             as Segment,
      //@ObjectModel.foreignKey.association: '_ServiceDocumentType'
      service_doc_type                                    as ServiceDocumentType,
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_AcctgServiceDocumentVH',
                           element: 'ServiceDocument' }
              }]
      //@ObjectModel.foreignKey.association: '_ServiceDocument'
      service_doc_id                                      as ServiceDocument,
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_AcctgServiceDocumentItemVH',
                           element: 'ServiceDocumentItem' }
              }]
      //@ObjectModel.foreignKey.association: '_ServiceDocumentItem'
      service_doc_item_id                                 as ServiceDocumentItem,
      solution_order_id                                   as BusinessSolutionOrder,
      solution_order_item_id                              as BusinessSolutionOrderItem,
      @ObjectModel.foreignKey.association: '_ProviderContract'
      vtkey                                               as ProviderContract,
      @ObjectModel.foreignKey.association: '_ProviderContractItem'
      vtpos                                               as ProviderContractItem,
      @ObjectModel.foreignKey.association: '_Plant'
      werks                                               as Plant,
      AUFNR                                               as OrderID,
      artnr                                               as SoldProduct,
      brsch                                               as CustomerSupplierIndustry,
      bzirk                                               as SalesDistrict,
      @ObjectModel.foreignKey.association: '_BillingDocumentType'
      fkart                                               as BillingDocumentType,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      kdgrp                                               as CustomerGroup,
      kunre                                               as BillToParty,
      kunwe                                               as ShipToParty,
      land1                                               as CustomerSupplierCountry,
      @ObjectModel.foreignKey.association: '_SoldProductGroup'
      matkl                                               as SoldProductGroup,
      spart                                               as OrganizationDivision,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      vkorg                                               as SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      vtweg                                               as DistributionChannel,
      @ObjectModel.foreignKey.association: '_IncmpltSummableValnQtyUnt'
      meinh                                               as IncmpltSummableValnQtyUnt, // IncompleteSummableValuationQuantityUnit
      @ObjectModel.foreignKey.association: '_AdditionalQuantity1Unit'
      qunit1                                              as AdditionalQuantity1Unit,
      @ObjectModel.foreignKey.association: '_AdditionalQuantity2Unit'
      qunit2                                              as AdditionalQuantity2Unit,
      @ObjectModel.foreignKey.association: '_AdditionalQuantity3Unit'
      qunit3                                              as AdditionalQuantity3Unit,

      timestamp                                           as CreationDateTime,

      /* Extensbility Identifier */
      -- Origin,

      _CompanyCode,
      _ControllingArea,
      _ProfitCenter,
      _PartnerProfitCenter,
      _CostCenter,
      _FunctionalArea,
      _BusinessArea,
      _SoldProductGroup,
      _Plant,
      _DistributionChannel,
      _CustomerSupplierCountry,
      _CustomerGroup,
      _Customer,
      _BillToParty,
      _ShipToParty,
      _SalesOrganization,
      _SalesDistrict,
      _SalesDocument,
      _SalesDocumentItem,
      _WBSElementBasicData,
      _ProviderContract,
      _ProviderContractItem,
      _BillingDocumentType,

      _AdditionalQuantity1Unit,
      _AdditionalQuantity2Unit,
      _AdditionalQuantity3Unit,
      _IncmpltSummableValnQtyUnt


}
```
