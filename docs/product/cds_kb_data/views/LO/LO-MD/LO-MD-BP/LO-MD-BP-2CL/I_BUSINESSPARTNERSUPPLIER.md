---
name: I_BUSINESSPARTNERSUPPLIER
description: "Business PartnerSUPPLIER"
semantic_vi: "View I_BUSINESSPARTNERSUPPLIER CDS hiển thị dữ liệu đối tác kinh doanh nhà cung cấp, được sử dụng để quản lý thông tin nhà cung cấp trong quy trình logistics."
keywords:
  - "business partner"
  - "supplier"
  - "logistics"
  - "lob"
  - "bo"
  - "supplier account group"
  - "form of address"
  - "international location number"
  - "reference account group"
  - "ekko"
  - "đối tác kinh doanh"
  - "nhà cung cấp"
semantic_en: "The I_BUSINESSPARTNERSUPPLIER CDS view exposes business partner supplier data, which is used to manage supplier information in logistics processes."
app_component: LO-MD-BP-2CL
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
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - supplier
  - business-partner
  - partner
  - component:LO-MD-BP-2CL
  - lob:Logistics General
  - bo:Supplier
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERSUPPLIER

**Business PartnerSUPPLIER**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
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
| `Supplier` | ✓ | |  |  |  |  |
| `BusinessPartner` | ✓ | |  | `partner` |  |  |
| `BusinessPartnerUUID` |  | |  | `partner_guid` |  |  |
| `BusinessPartnerCategory` |  | |  | `type` |  |  |
| `SupplierAccountGroup` |  | |  |  |  |  |
| `FormOfAddress` |  | |  |  |  |  |
| `InternationalLocationNumber1` |  | |  |  |  |  |
| `InternationalLocationNumber2` |  | |  |  |  |  |
| `InternationalLocationNumber3` |  | |  |  |  |  |
| `ReferenceAccountGroup` |  | |  |  |  |  |
| `SupplierAlternativePayee` |  | |  | `AlternativePayeeAccountNumber` |  |  |
| `Customer` |  | |  |  |  |  |
| `PostingIsBlocked` |  | |  |  |  |  |
| `PurchasingIsBlocked` |  | |  |  |  |  |
| `VATLiability` |  | |  |  |  |  |
| `PaymentIsBlockedForSupplier` |  | |  |  |  |  |
| `SuplrProofOfDelivRlvtCode` |  | |  |  |  |  |
| `BR_TaxIsSplit` |  | |  |  |  |  |
| `IsActiveEntity` |  | |  | `cast( 'X' as sdraft_is_active preserving type )` |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `IsToBeAcceptedAtOrigin` |  | |  |  |  |  |
| `SupplierCorporateGroup` |  | |  |  |  |  |
| `ResponsibleType` |  | |  |  |  |  |
| `FiscalAddress` |  | |  |  |  |  |
| `SupplierProcurementBlock` |  | |  |  |  |  |
| `DataExchangeInstructionKey` |  | |  |  |  |  |
| `BPIsEqualizationTaxSubject` |  | |  |  |  |  |
| `BRSpcfcTaxBasePercentageCode` |  | |  |  |  |  |
| `DataMediumExchangeIndicator` |  | |  |  |  |  |
| `TranspServiceAgentStstcGrp` |  | |  |  |  |  |
| `TaxNumberResponsible` |  | |  |  |  |  |
| `TaxNumberType` |  | |  |  |  |  |
| `SuplrQualityManagementSystem` |  | |  |  |  |  |
| `SuplrQltyInProcmtCertfnValidTo` |  | |  |  |  |  |
| `SupplierIsSubRangeRelevant` |  | |  |  |  |  |
| `TrainStationName` |  | |  |  |  |  |
| `AlternativePayeeIsAllowed` |  | |  |  |  |  |
| `PaytSlipWthRefSubscriber` |  | |  |  |  |  |
| `SupplierIsPlantRelevant` |  | |  |  |  |  |
| `FactoryCalendar` |  | |  |  |  |  |
| `SupplierPlant` |  | |  |  |  |  |
| `DeletionIndicator` |  | |  |  |  |  |
| `IsBusinessPurposeCompleted` |  | |  |  |  |  |
| `PaymentReason` |  | |  |  |  |  |
| `SupplierCentralDeletionIsBlock` |  | |  |  |  |  |
| `DataControllerSet` |  | |  |  |  |  |
| `DataController1` |  | |  |  |  |  |
| `DataController2` |  | |  |  |  |  |
| `DataController3` |  | |  |  |  |  |
| `DataController4` |  | |  |  |  |  |
| `DataController5` |  | |  |  |  |  |
| `DataController6` |  | |  |  |  |  |
| `DataController7` |  | |  |  |  |  |
| `DataController8` |  | |  |  |  |  |
| `DataController9` |  | |  |  |  |  |
| `DataController10` |  | |  |  |  |  |
| `IsOneTimeAccount` |  | |  |  |  |  |
| `BusinessPartnerPanNumber` |  | |  |  |  |  |
| `_SupplierToBusinessPartner` | | ✓ | | | | |
| `_ReferenceAccountGroupText` | | ✓ | | | | |
| `_SupplierAlternativePayee` | | ✓ | | | | |
| `_FiscalAddress` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_SupplierAccountGroup` | | ✓ | | | | |
| `_SupplierAccountGroupText` | | ✓ | | | | |
| `_ProcurementBlock` | | ✓ | | | | |
| `_QualityManagementSystem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierToBusinessPartner` | `I_Supplier_to_BusinessPartner` | [1..1] |
| `_SupplierExt` | `E_Supplier` | [0..1] |
| `_ReferenceAccountGroupText` | `I_SupplierAccountGroupText` | [1..*] |
| `_SupplierAlternativePayee` | `I_Supplier_VH` | [0..1] |
| `_FiscalAddress` | `I_Supplier_VH` | [0..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPSUPPLIER'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.sapObjectNodeType.name: 'Supplier'
@ObjectModel.representativeKey: 'Supplier'
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blockingIndicator: 'IsBusinessPurposeCompleted'

@EndUserText.label: 'Business Partner Supplier'
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      automatic: true
    }
  }
}
@Metadata.allowExtensions: true
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm : #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE]
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_BusinessPartnerSupplier
  as select from    I_Supplier as Supplier
    inner join      cvi_vend_link on Supplier.Supplier = cvi_vend_link.vendor
    left outer join but000        on cvi_vend_link.partner_guid = but000.partner_guid

  association [1..1] to I_Supplier_to_BusinessPartner as _SupplierToBusinessPartner on $projection.Supplier = _SupplierToBusinessPartner.Supplier

  association [0..1] to E_Supplier                    as _SupplierExt               on $projection.Supplier = _SupplierExt.Supplier

  association [1..*] to I_SupplierAccountGroupText    as _ReferenceAccountGroupText on $projection.ReferenceAccountGroup = _ReferenceAccountGroupText.SupplierAccountGroup

  association [0..1] to I_Supplier_VH                 as _SupplierAlternativePayee  on $projection.SupplierAlternativePayee = _SupplierAlternativePayee.Supplier

  association [0..1] to I_Supplier_VH                 as _FiscalAddress             on $projection.FiscalAddress = _FiscalAddress.Supplier

  association [1..1] to I_BusinessPartner             as _BusinessPartner           on $projection.BusinessPartner = _BusinessPartner.BusinessPartner

{
  key Supplier.Supplier,
      @ObjectModel.foreignKey.association: '_BusinessPartner'
  key but000.partner                                  as BusinessPartner,
      cvi_vend_link.partner_guid                      as BusinessPartnerUUID,
      but000.type                                     as BusinessPartnerCategory,
      //--[ GENERATED:012:E6ExH29r7jY4pF7Dkl2TM0
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_SupplierAccountGroupStdVH',
                     element: 'SupplierAccountGroup' }
        }]
      // ]--GENERATED
      @ObjectModel: {
          foreignKey.association: '_SupplierAccountGroup'
        }
      @ObjectModel.text.association: '_SupplierAccountGroupText'
      Supplier.SupplierAccountGroup,
      Supplier.FormOfAddress,
      Supplier.InternationalLocationNumber1,
      Supplier.InternationalLocationNumber2,
      Supplier.InternationalLocationNumber3,
      @ObjectModel.text.association: '_ReferenceAccountGroupText'
      Supplier.ReferenceAccountGroup,
      @Consumption.valueHelp: '_SupplierAlternativePayee'
      @ObjectModel.foreignKey.association: '_SupplierAlternativePayee'
      Supplier.AlternativePayeeAccountNumber          as SupplierAlternativePayee,
      Supplier.Customer,
      Supplier.PostingIsBlocked,
      Supplier.PurchasingIsBlocked,
      Supplier.VATLiability,
      Supplier.PaymentIsBlockedForSupplier,
      Supplier.SuplrProofOfDelivRlvtCode,
      Supplier.BR_TaxIsSplit,
      cast( 'X' as sdraft_is_active preserving type ) as IsActiveEntity,
      Supplier.AuthorizationGroup,
      Supplier.IsToBeAcceptedAtOrigin,
      Supplier.SupplierCorporateGroup,
      Supplier.ResponsibleType,
      @Consumption.valueHelp: '_FiscalAddress'
      Supplier.FiscalAddress,
      Supplier.SupplierProcurementBlock,
      Supplier.DataExchangeInstructionKey,
      Supplier.BPIsEqualizationTaxSubject,
      Supplier.BRSpcfcTaxBasePercentageCode,
      Supplier.DataMediumExchangeIndicator,
      Supplier.TranspServiceAgentStstcGrp,
      Supplier.TaxNumberResponsible,
      Supplier.TaxNumberType,
      Supplier.SuplrQualityManagementSystem,
      Supplier.SuplrQltyInProcmtCertfnValidTo,
      Supplier.SupplierIsSubRangeRelevant,
      Supplier.TrainStationName,
      Supplier.AlternativePayeeIsAllowed,
      Supplier.PaytSlipWthRefSubscriber,
      Supplier.SupplierIsPlantRelevant,
      Supplier.FactoryCalendar,
      Supplier.SupplierPlant,
      Supplier.DeletionIndicator,
      @Semantics.booleanIndicator: true
      Supplier.IsBusinessPurposeCompleted,
      Supplier.PaymentReason,
      Supplier.SupplierCentralDeletionIsBlock,
      _SupplierToBusinessPartner,
      //added only for DCL check
      @Consumption.hidden:true
      @UI.hidden:true
      Supplier.DataControllerSet,
      @Consumption.hidden:true
      @UI.hidden:true
      Supplier.DataController1,
      //added only for DCL check
      @Consumption.hidden:true
      @UI.hidden:true
      Supplier.DataController2,
      //added only for DCL check
      @Consumption.hidden:true
      @UI.hidden:true
      Supplier.DataController3,
      //added only for DCL check
      @Consumption.hidden:true
      @UI.hidden:true
      Supplier.DataController4,
      //added only for DCL check
      @Consumption.hidden:true
      @UI.hidden:true
      Supplier.DataController5,
      @Consumption.hidden:true
      @UI.hidden:true
      Supplier.DataController6,
      //added only for DCL check
      @Consumption.hidden:true
      @UI.hidden:true
      Supplier.DataController7,
      //added only for DCL check
      @Consumption.hidden:true
      @UI.hidden:true
      Supplier.DataController8,
      //added only for DCL check
      @Consumption.hidden:true
      @UI.hidden:true
      Supplier.DataController9,
      //added only for DCL check
      @Consumption.hidden:true
      @UI.hidden:true
      Supplier.DataController10,

      Supplier.IsOneTimeAccount,

      Supplier.BusinessPartnerPanNumber               as BusinessPartnerPanNumber,

      _SupplierAccountGroup,
      _SupplierAccountGroupText,
      _ReferenceAccountGroupText,
      _SupplierAlternativePayee,
      _FiscalAddress,
      _ProcurementBlock,
      _QualityManagementSystem,
      _BusinessPartner


}
```
