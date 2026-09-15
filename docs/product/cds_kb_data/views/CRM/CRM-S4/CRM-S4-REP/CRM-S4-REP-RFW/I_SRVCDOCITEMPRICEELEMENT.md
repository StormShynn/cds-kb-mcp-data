---
name: I_SRVCDOCITEMPRICEELEMENT
description: "Srvcdocitempriceelement"
app_component: CRM-S4-REP-RFW
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
  - item-level
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SRVCDOCITEMPRICEELEMENT

**Srvcdocitempriceelement**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
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
| `ServiceDocument` | ✓ | |  |  | `CHAR(10)` | Transaction ID |
| `ServiceDocumentItem` | ✓ | |  | `cast(PricingElement.PricingDocumentItem as crms4_number_int preserving type)` | `NUMC(6)` | Shortened Item Number in Document |
| `PricingProcedureStep` | ✓ | |  |  | `NUMC(3)` | Step Number |
| `PricingProcedureCounter` | ✓ | |  |  | `NUMC(3)` | Condition Counter |
| `ServiceObjectType` |  | |  |  | `CHAR(10)` | Business Trans. Cat. |
| `ConditionApplication` |  | |  |  | `CHAR(2)` | Application |
| `ConditionType` |  | |  |  | `CHAR(4)` | Condition Type |
| `PriceConditionDeterminationDte` |  | |  |  | `DATS(8)` | Condition Pricing Date |
| `ConditionCalculationType` |  | |  |  | `CHAR(3)` | Calculation Type for Condition |
| `ConditionBaseValue` |  | |  |  | `DEC(24)` | Condition Basis |
| `ConditionRateValue` |  | |  |  | `DEC(24)` | Condition Amount or Percentage |
| `ConditionCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `ConditionQuantity` |  | |  |  | `DEC(5)` | Condition Pricing Unit |
| `ConditionQuantityUnit` |  | |  |  | `UNIT(3)` | Condition Unit in the Document |
| `ConditionCategory` |  | |  |  | `CHAR(1)` | Condition Category (Examples: Tax, Freight, Price, Cost) |
| `ConditionIsForStatistics` |  | |  |  | `CHAR(1)` | Condition is used for statistics |
| `PricingScaleType` |  | |  |  | `CHAR(1)` | Scale Type |
| `IsRelevantForAccrual` |  | |  |  | `CHAR(1)` | Condition is Relevant for Accrual  (e.g. Freight) |
| `CndnIsRelevantForInvoiceList` |  | |  |  | `CHAR(1)` | Condition for Invoice List |
| `ConditionOrigin` |  | |  |  | `CHAR(1)` | Origin of the Condition |
| `IsGroupCondition` |  | |  |  | `CHAR(1)` | Group Condition |
| `ConditionRecord` |  | |  |  | `CHAR(10)` | Number of Condition Record |
| `ConditionSequentialNumber` |  | |  |  | `NUMC(3)` | Sequential Number of the Condition |
| `TaxCode` |  | |  |  | `CHAR(2)` | Tax on Sales/Purchases Code |
| `WithholdingTaxCode` |  | |  |  | `CHAR(2)` | Withholding Tax Code |
| `CndnRoundingOffDiffAmount` |  | |  |  | `CURR(5)` | Rounding-Off Difference of a Condition |
| `ConditionAmount` |  | |  |  | `CURR(15)` | Condition Value |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `ConditionControl` |  | |  |  | `CHAR(1)` | Condition Control |
| `ConditionInactiveReason` |  | |  |  | `CHAR(1)` | Condition is Inactive |
| `ConditionClass` |  | |  |  | `CHAR(1)` | Condition Class |
| `PrcgProcedureCounterForHeader` |  | |  |  | `NUMC(3)` | Condition Counter (Header) |
| `FactorForConditionBasisValue` |  | |  |  | `FLTP(16)` | Factor for Condition Base Value |
| `StructureCondition` |  | |  |  | `CHAR(1)` | Structure Condition |
| `PeriodFactorForCndnBasisValue` |  | |  |  | `FLTP(16)` | Factor for Condition Basis (Period) |
| `PricingScaleBasis` |  | |  |  | `CHAR(3)` | Scale Basis Indicator |
| `ConditionScaleBasisValue` |  | |  |  | `DEC(24)` | Scale Base Value |
| `ConditionScaleBasisUnit` |  | |  |  | `UNIT(3)` | Condition Scale Unit of Measure |
| `ConditionScaleBasisCurrency` |  | |  |  | `CUKY(5)` | Scale Currency |
| `CndnIsRelevantForIntcoBilling` |  | |  |  | `CHAR(1)` | Condition for Intercompany Billing |
| `ConditionIsManuallyChanged` |  | |  |  | `CHAR(1)` | Condition Changed Manually |
| `ConditionIsForConfiguration` |  | |  |  | `CHAR(1)` | Condition Used for Variant Configuration |
| `VariantCondition` |  | |  |  | `CHAR(26)` | Variant Condition Key |
| `ConditionRateAmount` |  | |  |  | `DEC(24)` | Condition Amount |
| `ConditionRateRatio` |  | |  |  | `DEC(24)` | Condition Ratio (in Percent or Per Mille) |
| `ConditionRateRatioUnit` |  | |  |  | `UNIT(3)` | Unit of Measurement |
| `ConditionBaseAmount` |  | |  |  | `DEC(24)` | Amount of the Condition Basis |
| `ConditionBaseQuantity` |  | |  |  | `DEC(24)` | Quantity of the Condition Basis |
| `_ServiceDocument` | | ✓ | | | | |
| `_ServiceDocumentItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocument` | `I_ServiceDocument` | [1..1] |
| `_ServiceDocumentItem` | `I_ServiceDocumentItem` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Service Transaction Item Pricing Element'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel: {
    usageType: {
        dataClass:      #TRANSACTIONAL,
        serviceQuality: #A,
        sizeCategory:   #XL
    },
    supportedCapabilities: [ #SQL_DATA_SOURCE, 
                             #CDS_MODELING_DATA_SOURCE, 
                             #CDS_MODELING_ASSOCIATION_TARGET ],
    modelingPattern: #NONE
}
@Metadata.ignorePropagatedAnnotations:true

define view entity I_SrvcDocItemPriceElement 
  as select from I_PricingElement   as PricingElement
  inner join     I_ServiceDocument  as ServiceDocument on  PricingElement.PricingDocument        =  ServiceDocument.PricingDocument
                                                       and PricingElement.PricingDocumentItem    != '000000'
      
    association[1..1] to I_ServiceDocument      as _ServiceDocument  on _ServiceDocument.ServiceObjectType = $projection.ServiceObjectType
                                                                    and _ServiceDocument.ServiceDocument   = $projection.ServiceDocument

    association[1..1] to I_ServiceDocumentItem  as _ServiceDocumentItem   on $projection.ServiceObjectType   = _ServiceDocumentItem.ServiceObjectType
                                                                         and $projection.ServiceDocument     = _ServiceDocumentItem.ServiceDocument
                                                                         and $projection.ServiceDocumentItem = _ServiceDocumentItem.ServiceDocumentItem
{
      @ObjectModel.foreignKey.association: '_ServiceDocument'                                                                                                   
  key ServiceDocument.ServiceDocument,  
      @ObjectModel.foreignKey.association: '_ServiceDocumentItem'   
  key cast(PricingElement.PricingDocumentItem as crms4_number_int preserving type) as ServiceDocumentItem,
  key PricingElement.PricingProcedureStep,
  key PricingElement.PricingProcedureCounter, // decision from pricing colleagues: keep wrong name, do not rename to PricingElementCounter
      @ObjectModel.foreignKey.association: '_ServiceObjType'
      ServiceDocument.ServiceObjectType,
      @ObjectModel.foreignKey.association: '_ConditionApplication'
      PricingElement.ConditionApplication, // required for foreign key association of condition type
      @ObjectModel.foreignKey.association: '_PricingConditionType'
      PricingElement.ConditionType,
      PricingElement.PriceConditionDeterminationDte,
      @ObjectModel.foreignKey.association: '_ConditionCalculationType'
      PricingElement.ConditionCalculationType,
      PricingElement.ConditionBaseValue,
      PricingElement.ConditionRateValue,
      @ObjectModel.foreignKey.association: '_ConditionCurrency'
      PricingElement.ConditionCurrency,
      @Aggregation.default: #NONE
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      PricingElement.ConditionQuantity,
      @ObjectModel.foreignKey.association: '_ConditionQuantityUnit'
      PricingElement.ConditionQuantityUnit,
      @ObjectModel.foreignKey.association: '_ConditionCategory'
      PricingElement.ConditionCategory,
      PricingElement.ConditionIsForStatistics,
      PricingElement.PricingScaleType,
      PricingElement.IsRelevantForAccrual,
      @Semantics.booleanIndicator: true
      PricingElement.CndnIsRelevantForInvoiceList,
      @ObjectModel.foreignKey.association: '_ConditionOrigin'
      PricingElement.ConditionOrigin,
      @Semantics.booleanIndicator: true
      PricingElement.IsGroupCondition,
      PricingElement.ConditionRecord,
      PricingElement.ConditionSequentialNumber,
      PricingElement.TaxCode,
      PricingElement.WithholdingTaxCode,
      @Aggregation.default: #NONE
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      PricingElement.CndnRoundingOffDiffAmount,
      @Aggregation.default: #NONE
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      PricingElement.ConditionAmount,
      @ObjectModel.foreignKey.association: '_Currency'
      PricingElement.TransactionCurrency,
      @ObjectModel.foreignKey.association: '_ConditionControl'
      PricingElement.ConditionControl,
      @ObjectModel.foreignKey.association: '_ConditionInactiveReason'
      PricingElement.ConditionInactiveReason,
      @ObjectModel.foreignKey.association: '_ConditionClass'
      PricingElement.ConditionClass,
      PricingElement.PrcgProcedureCounterForHeader,
      PricingElement.FactorForConditionBasisValue,
      @ObjectModel.foreignKey.association: '_StructureCondition'
      PricingElement.StructureCondition,
      PricingElement.PeriodFactorForCndnBasisValue,
      @ObjectModel.foreignKey.association: '_PricingScaleBasis'
      PricingElement.PricingScaleBasis,
      PricingElement.ConditionScaleBasisValue,
      @ObjectModel.foreignKey.association: '_ScaleUnitOfMeasure'
      PricingElement.ConditionScaleBasisUnit,
      @ObjectModel.foreignKey.association: '_ScaleCurrency'
      PricingElement.ConditionScaleBasisCurrency,
      PricingElement.CndnIsRelevantForIntcoBilling,
      PricingElement.ConditionIsManuallyChanged,
      PricingElement.ConditionIsForConfiguration,
      PricingElement.VariantCondition, 
      @Semantics.amount.currencyCode: 'ConditionCurrency'
      @OData.v2.amount.noDecimalShift: true
      PricingElement.ConditionRateAmount,
      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      PricingElement.ConditionRateRatio,
      @ObjectModel.foreignKey.association: '_ConditionRateRatioUnit'
      PricingElement.ConditionRateRatioUnit,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      @OData.v2.amount.noDecimalShift: true
      PricingElement.ConditionBaseAmount,
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      PricingElement.ConditionBaseQuantity,

      //Association
      _ServiceDocument,
      _ServiceDocumentItem,
      PricingElement._ConditionApplication,
      PricingElement._PricingConditionType, // naming could be better: _ConditionType
      PricingElement._ConditionCalculationType,
      PricingElement._ConditionCurrency,
      PricingElement._Currency, // naming could be better: _TransactionCurrency
      PricingElement._ConditionQuantityUnit,
      PricingElement._ConditionCategory,
      PricingElement._ConditionOrigin,
      PricingElement._ConditionControl,
      PricingElement._ConditionInactiveReason,
      PricingElement._ConditionClass,
      PricingElement._PricingScaleBasis,
      PricingElement._ScaleUnitOfMeasure, // naming could be better: ConditionScaleBasisUnit
      PricingElement._ScaleCurrency, // naming could be better: _ConditionScaleBasisCurrency
      PricingElement._VariantCondition,
      PricingElement._StructureCondition,
      PricingElement._ConditionRateRatioUnit,
      ServiceDocument._ServiceObjType
}
```
