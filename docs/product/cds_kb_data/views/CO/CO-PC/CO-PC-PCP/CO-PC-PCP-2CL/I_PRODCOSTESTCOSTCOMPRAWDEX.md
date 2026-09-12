---
name: I_PRODCOSTESTCOSTCOMPRAWDEX
description: "Prodcostestcostcomprawdex"
app_component: CO-PC-PCP-2CL
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
  - CO-PC
  - CO-PC-PCP
  - interface-view
  - data-extraction
  - component:CO-PC-PCP-2CL
  - lob:Controlling
---
# I_PRODCOSTESTCOSTCOMPRAWDEX

**Prodcostestcostcomprawdex**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
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
| `CostingReferenceObject` | ✓ | |  |  | `CHAR(1)` | Reference Object |
| `CostEstimate` | ✓ | |  |  | `NUMC(12)` | Cost Estimate Number for Cost Est. w/o Qty Structure |
| `CostingType` | ✓ | |  |  | `CHAR(2)` | Costing Type |
| `CostingDate` | ✓ | |  |  | `DATS(8)` | Costing Date (Key) |
| `CostingVersion` | ✓ | |  |  | `NUMC(2)` | Costing Version |
| `ValuationVariant` | ✓ | |  |  | `CHAR(3)` | Valuation Variant in Costing |
| `CostIsEnteredManually` | ✓ | |  |  | `CHAR(1)` | Costs Entered Manually in Additive or Automatic Cost Est. |
| `CostingPartnerNumber` | ✓ | |  |  | `NUMC(6)` | Partner number for costing |
| `CostComponentSplitType` | ✓ | |  |  | `CHAR(1)` | Type of Cost Component Split for Product Costing |
| `CostIsInCtrlgAreaCrcy` | ✓ | |  |  | `CHAR(1)` | Link Field for Currency Type |
| `IsCostComponentSplitLowerLevel` | ✓ | |  |  | `CHAR(1)` | Indicator Lower Level/Level |
| `CostEstWQSIsInclAdditiveCosts` | ✓ | |  |  | `CHAR(1)` | Costs Were Entered Manually in an Additive Cost Estimate |
| `CostCompSpltDrctPrtnCharc` | ✓ | |  |  | `CHAR(1)` | Direct Partner Characteristic |
| `Currency` |  | |  | `cast ( case when keph.CostIsInCtrlgAreaCrcy = 'X' then _ProductCostEstimate.ControllingAreaCurrency when keph.CostIsInCtrlgAreaCrcy = ' ' then _ProductCostEstimate.CompanyCodeCurrency end as waers )` | `CUKY(5)` | Currency Key |
| `CostComponentCostField1Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField2Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField3Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField4Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField5Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField6Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField7Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField8Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField9Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField10Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField11Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField12Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField13Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField14Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField15Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField16Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField17Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField18Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField19Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField20Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField21Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField22Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField23Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField24Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField25Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField26Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField27Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField28Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField29Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField30Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField31Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField32Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField33Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField34Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField35Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField36Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField37Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField38Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField39Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField40Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField41Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField42Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField43Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField44Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField45Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField46Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField47Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField48Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField49Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField50Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField51Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField52Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField53Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField54Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField55Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField56Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField57Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField58Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField59Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField60Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField61Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField62Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField63Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField64Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField65Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField66Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField67Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField68Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField69Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField70Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField71Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField72Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField73Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField74Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField75Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField76Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField77Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField78Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField79Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField80Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField81Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField82Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField83Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField84Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField85Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField86Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField87Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField88Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField89Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField90Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField91Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField92Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField93Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField94Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField95Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField96Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField97Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField98Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField99Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField100Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField101Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField102Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField103Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField104Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField105Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField106Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField107Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField108Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField109Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField110Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField111Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField112Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField113Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField114Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField115Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField116Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField117Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField118Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField119Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `CostComponentCostField120Amt` |  | |  |  | `CURR(13)` | Cost Field |
| `_ProductCostEstimate` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductCostEstimate` | `I_ProductCostEstimate` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Prod Cost Est Cost Comp Raw Data Ext'
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  sapObjectNodeType.name: 'ProductCostEstimate',
  modelingPattern: #NONE,
  usageType: {
    dataClass: #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory: #XL
  },
  supportedCapabilities: [#EXTRACTION_DATA_SOURCE]
}

@Analytics: {
        dataCategory: #FACT,
        internalName: #LOCAL,
        dataExtraction: {
           enabled: true,
           delta.changeDataCapture:{
              mapping: [
                    { viewElement: ['CostingReferenceObject', 'CostEstimate', 'CostingType', 'CostingDate', 'CostingVersion', 'ValuationVariant', 'CostIsEnteredManually', 'CostingPartnerNumber', 'CostComponentSplitType', 'CostIsInCtrlgAreaCrcy', 'IsCostComponentSplitLowerLevel', 'CostEstWQSIsInclAdditiveCosts', 'CostCompSpltDrctPrtnCharc' ],
                      role: #MAIN,
                      table: 'KEPH',
                      tableElement: ['BZOBJ','KALNR', 'KALKA', 'KADKY', 'TVERS', 'BWVAR', 'KKZMA', 'PATNR', 'KEART', 'LOSFX', 'KKZST', 'KKZMM', 'DIPA' ]}
                    ]
                    }
              }
}


@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

define view entity I_ProdCostEstCostCompRawDEX
  as select from P_KEPH as keph
  association [0..1] to I_ProductCostEstimate as _ProductCostEstimate on  $projection.CostingReferenceObject = _ProductCostEstimate.CostingReferenceObject
                                                                      and $projection.CostEstimate           = _ProductCostEstimate.CostEstimate
                                                                      and $projection.CostingType            = _ProductCostEstimate.CostingType
                                                                      and $projection.CostingDate            = _ProductCostEstimate.CostingDate
                                                                      and $projection.CostingVersion         = _ProductCostEstimate.CostingVersion
                                                                      and $projection.ValuationVariant       = _ProductCostEstimate.ValuationVariant
                                                                      and $projection.CostIsEnteredManually  = _ProductCostEstimate.CostIsEnteredManually

{
  key keph.CostingReferenceObject,
  key keph.CostEstimate,
  key keph.CostingType,
  key keph.CostingDate,
  key keph.CostingVersion,
  key keph.ValuationVariant,
  key keph.CostIsEnteredManually,
  key keph.CostingPartnerNumber,
  key keph.CostComponentSplitType,
  key keph.CostIsInCtrlgAreaCrcy,
      @Semantics.booleanIndicator
  key keph.IsCostComponentSplitLowerLevel,
  key keph.CostEstWQSIsInclAdditiveCosts,
  key keph.CostCompSpltDrctPrtnCharc,
      cast ( case
          when keph.CostIsInCtrlgAreaCrcy = 'X' then _ProductCostEstimate.ControllingAreaCurrency
          when keph.CostIsInCtrlgAreaCrcy = ' ' then _ProductCostEstimate.CompanyCodeCurrency
      end as waers ) as Currency,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField1Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField2Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField3Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField4Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField5Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField6Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField7Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField8Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField9Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField10Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField11Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField12Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField13Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField14Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField15Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField16Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField17Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField18Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField19Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField20Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField21Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField22Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField23Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField24Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField25Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField26Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField27Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField28Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField29Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField30Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField31Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField32Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField33Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField34Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField35Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField36Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField37Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField38Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField39Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField40Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField41Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField42Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField43Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField44Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField45Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField46Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField47Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField48Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField49Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField50Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField51Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField52Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField53Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField54Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField55Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField56Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField57Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField58Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField59Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField60Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField61Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField62Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField63Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField64Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField65Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField66Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField67Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField68Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField69Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField70Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField71Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField72Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField73Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField74Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField75Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField76Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField77Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField78Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField79Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField80Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField81Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField82Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField83Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField84Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField85Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField86Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField87Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField88Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField89Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField90Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField91Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField92Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField93Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField94Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField95Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField96Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField97Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField98Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField99Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField100Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField101Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField102Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField103Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField104Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField105Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField106Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField107Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField108Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField109Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField110Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField111Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField112Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField113Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField114Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField115Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField116Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField117Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField118Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField119Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField120Amt,

      _ProductCostEstimate
}
```
