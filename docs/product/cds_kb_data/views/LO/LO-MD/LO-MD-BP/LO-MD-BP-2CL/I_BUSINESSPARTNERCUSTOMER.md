---
name: I_BUSINESSPARTNERCUSTOMER
description: "Business PartnerCUSTOMER"
semantic_vi: "Chứa dữ liệu đối tác kinh doanh khách hàng, hữu ích cho các ứng dụng yêu cầu thông tin khách hàng từ đối tác kinh doanh."
keywords:
  - "business partner"
  - "customer"
  - "business partner customer"
  - "customer information"
  - "đối tác kinh doanh"
  - "khách hàng"
  - "thông tin khách hàng"
semantic_en: "Exposes business partner customer data, useful for applications requiring customer information from business partners."
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
  - customer
  - business-partner
  - partner
  - component:LO-MD-BP-2CL
  - lob:Logistics General
  - bo:Customer
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERCUSTOMER

**Business PartnerCUSTOMER**

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
| `Customer` | ✓ | |  | `kunnr` |  |  |
| `BusinessPartner` | ✓ | |  | `partner` |  |  |
| `BusinessPartnerUUID` |  | |  | `partner_guid` |  |  |
| `CustomerAccountGroup` |  | |  | `ktokd` |  |  |
| `AlternativePayerAccount` |  | |  | `knrza` |  |  |
| `DataMediumExchangeIndicator` |  | |  | `dtams` |  |  |
| `Supplier` |  | |  | `lifnr` |  |  |
| `CustomerClassification` |  | |  | `kukla` |  |  |
| `VATLiability` |  | |  | `stkzu` |  |  |
| `PostingIsBlocked` |  | |  | `sperr` |  |  |
| `DeliveryIsBlocked` |  | |  | `lifsd` |  |  |
| `BillingIsBlockedForCustomer` |  | |  | `faksd` |  |  |
| `OrderIsBlockedForCustomer` |  | |  | `aufsd` |  |  |
| `IsNaturalPerson` |  | |  | `stkzn` |  |  |
| `BusinessPartnerGrouping` |  | |  | `bu_group` |  |  |
| `AuthorizationGroup` |  | |  | `begru` |  |  |
| `DeliveryDateTypeRule` |  | |  | `delivery_date_rule` |  |  |
| `IsActiveEntity` |  | |  | `cast( 'X' as sdraft_is_active preserving type )` |  |  |
| `ExpressTrainStationName` |  | |  | `bahne` |  |  |
| `TrainStationName` |  | |  | `bahns` |  |  |
| `CityLocationCoordinatesCode` |  | |  | `locco` |  |  |
| `Plant` |  | |  | `werks` |  |  |
| `CustomerCorporateGroup` |  | |  | `konzs` |  |  |
| `DataExchangeInstructionKey` |  | |  | `dtaws` |  |  |
| `IndustryCode1` |  | |  | `bran1` |  |  |
| `IndustryCode2` |  | |  | `bran2` |  |  |
| `IndustryCode3` |  | |  | `bran3` |  |  |
| `IsCompetitor` |  | |  | `dear1` |  |  |
| `IsSalesPartner` |  | |  | `dear2` |  |  |
| `IsDefaultSoldToParty` |  | |  | `dear5` |  |  |
| `IsConsumer` |  | |  | `dear6` |  |  |
| `FiscalAddress` |  | |  | `fiskn` |  |  |
| `FreeDefinedAttribute03` |  | |  | `katr3` |  |  |
| `CustomerConditionGroup1` |  | |  | `kdkg1` |  |  |
| `CustomerConditionGroup2` |  | |  | `kdkg2` |  |  |
| `CustomerConditionGroup3` |  | |  | `kdkg3` |  |  |
| `CustomerConditionGroup4` |  | |  | `kdkg4` |  |  |
| `CustomerConditionGroup5` |  | |  | `kdkg5` |  |  |
| `AddressID` |  | |  | `adrnr` |  |  |
| `InternationalLocationNumber1` |  | |  | `bbbnr` |  |  |
| `InternationalLocationNumber2` |  | |  | `bbsnr` |  |  |
| `InternationalLocationNumber3` |  | |  | `bubkz` |  |  |
| `CityCode` |  | |  | `cityc` |  |  |
| `County` |  | |  | `counc` |  |  |
| `CustomerHasUnloadingPoint` |  | |  | `exabl` |  |  |
| `CustomerWorkingTimeCalendar` |  | |  | `knazk` |  |  |
| `IsBusinessPurposeCompleted` |  | |  | `cvp_xblck` |  |  |
| `BPIsEqualizationTaxSubject` |  | |  | `cast (kna1.stkza as xfeld preserving type)` |  |  |
| `Country` |  | |  | `land1` |  |  |
| `Region` |  | |  | `regio` |  |  |
| `DeletionIndicator` |  | |  | `loevm` |  |  |
| `Language` |  | |  | `spras` |  |  |
| `SalesIsBlockedForCustomer` |  | |  | `cast (kna1.cassd as abap.char(1))` |  |  |
| `PaymentReason` |  | |  | `paytrsn` |  |  |
| `CustomerCentralDeletionIsBlock` |  | |  | `nodel` |  |  |
| `AlternativePayerIsAllowed` |  | |  | `xzemp` |  |  |
| `BPPlannedAnnualSalesYear` |  | |  | `umjah` |  |  |
| `BPPlannedAnnualSalesCurrency` |  | |  | `uwaer` |  |  |
| `BPPlannedAnnualSalesAmount` |  | |  | `umsat` |  |  |
| `CustomerTradingPartnerID` |  | |  | `vbund` |  |  |
| `FiscalYearVariant` |  | |  | `periv` |  |  |
| `AccountTaxType` |  | |  | `stcdt` |  |  |
| `IndustryCode4` |  | |  | `bran4` |  |  |
| `IndustryCode5` |  | |  | `bran5` |  |  |
| `TaxInvoiceRepresentativeName` |  | |  | `j_1kfrepre` |  |  |
| `BusinessType` |  | |  | `j_1kftbus` |  |  |
| `IndustryType` |  | |  | `j_1kftind` |  |  |
| `FreeDefinedAttribute01` |  | |  | `katr1` |  |  |
| `FreeDefinedAttribute02` |  | |  | `katr2` |  |  |
| `FreeDefinedAttribute04` |  | |  | `katr4` |  |  |
| `FreeDefinedAttribute05` |  | |  | `katr5` |  |  |
| `FreeDefinedAttribute06` |  | |  | `katr6` |  |  |
| `FreeDefinedAttribute07` |  | |  | `katr7` |  |  |
| `FreeDefinedAttribute08` |  | |  | `katr8` |  |  |
| `FreeDefinedAttribute09` |  | |  | `katr9` |  |  |
| `FreeDefinedAttribute10` |  | |  | `katr10` |  |  |
| `DataControllerSet` |  | |  | `xdcset` |  |  |
| `DataController1` |  | |  | `data_ctrlr1` |  |  |
| `DataController2` |  | |  | `data_ctrlr2` |  |  |
| `DataController3` |  | |  | `data_ctrlr3` |  |  |
| `DataController4` |  | |  | `data_ctrlr4` |  |  |
| `DataController5` |  | |  | `data_ctrlr5` |  |  |
| `DataController6` |  | |  | `data_ctrlr6` |  |  |
| `DataController7` |  | |  | `data_ctrlr7` |  |  |
| `DataController8` |  | |  | `data_ctrlr8` |  |  |
| `DataController9` |  | |  | `data_ctrlr9` |  |  |
| `DataController10` |  | |  | `data_ctrlr10` |  |  |
| `_CustomerToBusinessPartner` | | ✓ | | | | |
| `_AccountGroupValueHelp` | | ✓ | | | | |
| `_CustomerAccountGroupText` | | ✓ | | | | |
| `_BillingBlockReasonValueHelp` | | ✓ | | | | |
| `_BillingBlockReasonText` | | ✓ | | | | |
| `_DelivBlkRsnValueHelp` | | ✓ | | | | |
| `_DeliveryBlockReasonText` | | ✓ | | | | |
| `_CustomerClassValueHelp` | | ✓ | | | | |
| `_CustomerClassificationText` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustomerToBusinessPartner` | `I_Customer_to_BusinessPartner` | [1..1] |
| `_CustomerExt` | `E_Customer` | [0..1] |
| `_AccountGroupValueHelp` | `I_CustomerAccountGroup` | [0..1] |
| `_CustomerAccountGroupText` | `I_CustomerAccountGroupText` | [0..*] |
| `_AlternativePayerValueHelp` | `I_Customer_VH` | [0..1] |
| `_BillingBlockReasonValueHelp` | `I_BillingBlockReason` | [0..1] |
| `_BillingBlockReasonText` | `I_BillingBlockReasonText` | [0..*] |
| `_DelivBlkRsnValueHelp` | `I_DeliveryBlockReason` | [0..1] |
| `_DeliveryBlockReasonText` | `I_DeliveryBlockReasonText` | [0..*] |
| `_CustomerClassValueHelp` | `I_CustomerClassification` | [0..1] |
| `_CustomerClassificationText` | `I_CustomerClassificationText` | [0..*] |
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBUPACUSTOMER'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blockingIndicator: 'IsBusinessPurposeCompleted'
@EndUserText.label: 'Business Partner Customer'
@ObjectModel.sapObjectNodeType.name: 'Customer'
@ObjectModel.representativeKey: 'Customer'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      automatic: true
    }
  }
}
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE]

define view I_BusinessPartnerCustomer 
  as select from    kna1

    inner join      cvi_cust_link on kna1.kunnr = cvi_cust_link.customer
    left outer join but000        on cvi_cust_link.partner_guid = but000.partner_guid //association required to exposebusinesspartertype for Dynamic fieldcontol




  association [1..1] to I_Customer_to_BusinessPartner as _CustomerToBusinessPartner   on $projection.Customer = _CustomerToBusinessPartner.Customer

  association [0..1] to E_Customer                    as _CustomerExt                 on $projection.Customer = _CustomerExt.Customer

  // Associations added for Text Annotation Removal
  association [0..1] to I_CustomerAccountGroup        as _AccountGroupValueHelp       on $projection.CustomerAccountGroup = _AccountGroupValueHelp.CustomerAccountGroup

  association [0..*] to I_CustomerAccountGroupText    as _CustomerAccountGroupText    on $projection.CustomerAccountGroup = _CustomerAccountGroupText.CustomerAccountGroup

  association [0..1] to I_Customer_VH                 as _AlternativePayerValueHelp   on $projection.AlternativePayerAccount = _AlternativePayerValueHelp.Customer

  association [0..1] to I_BillingBlockReason          as _BillingBlockReasonValueHelp on $projection.BillingIsBlockedForCustomer = _BillingBlockReasonValueHelp.BillingBlockReason

  association [0..*] to I_BillingBlockReasonText      as _BillingBlockReasonText      on $projection.BillingIsBlockedForCustomer = _BillingBlockReasonText.BillingBlockReason

  association [0..1] to I_DeliveryBlockReason         as _DelivBlkRsnValueHelp        on $projection.DeliveryIsBlocked = _DelivBlkRsnValueHelp.DeliveryBlockReason

  association [0..*] to I_DeliveryBlockReasonText     as _DeliveryBlockReasonText     on $projection.DeliveryIsBlocked = _DeliveryBlockReasonText.DeliveryBlockReason

  association [0..1] to I_CustomerClassification      as _CustomerClassValueHelp      on $projection.CustomerClassification = _CustomerClassValueHelp.CustomerClassification

  association [0..*] to I_CustomerClassificationText  as _CustomerClassificationText  on $projection.CustomerClassification = _CustomerClassificationText.CustomerClassification

  association [1..1] to I_BusinessPartner             as _BusinessPartner             on $projection.BusinessPartner = _BusinessPartner.BusinessPartner
{
  key kna1.kunnr                                      as Customer,
      @ObjectModel.foreignKey.association: '_BusinessPartner'
  key but000.partner                                  as BusinessPartner,
      cvi_cust_link.partner_guid                      as BusinessPartnerUUID,
      //@ObjectModel: {
      //            foreignKey.association: '_AccountGroupValueHelp'
      //         }
      @ObjectModel.text.association: '_CustomerAccountGroupText'
      kna1.ktokd                                      as CustomerAccountGroup,
     
      kna1.knrza                                      as AlternativePayerAccount,
      kna1.dtams                                      as DataMediumExchangeIndicator,
      
      kna1.lifnr                                      as Supplier,
      @ObjectModel: {
                foreignKey.association: '_CustomerClassValueHelp'
              }
      @ObjectModel.text.association: '_CustomerClassificationText'
      kna1.kukla                                      as CustomerClassification,
      kna1.stkzu                                      as VATLiability,
      kna1.sperr                                      as PostingIsBlocked,
      @ObjectModel: {
                foreignKey.association: '_DelivBlkRsnValueHelp'
              }
      @ObjectModel.text.association: '_DeliveryBlockReasonText'
      kna1.lifsd                                      as DeliveryIsBlocked,
      @ObjectModel: {
               foreignKey.association: '_BillingBlockReasonValueHelp'
             }
      @ObjectModel.text.association: '_BillingBlockReasonText'
      kna1.faksd                                      as BillingIsBlockedForCustomer,
      //Newly added fields
      kna1.aufsd                                      as OrderIsBlockedForCustomer,
      @Semantics.booleanIndicator: true
      kna1.stkzn                                      as IsNaturalPerson,
      but000.bu_group                                 as BusinessPartnerGrouping,
      //Data protection and privacy Requirement
      kna1.begru                                      as AuthorizationGroup,
      kna1.delivery_date_rule                         as DeliveryDateTypeRule,

      //For extensibility
      cast( 'X' as sdraft_is_active preserving type ) as IsActiveEntity,


      kna1.bahne                                      as ExpressTrainStationName,
      kna1.bahns                                      as TrainStationName,
      kna1.locco                                      as CityLocationCoordinatesCode,
      kna1.werks                                      as Plant,
      kna1.konzs                                      as CustomerCorporateGroup,
      kna1.dtaws                                      as DataExchangeInstructionKey,
      kna1.bran1                                      as IndustryCode1,
      kna1.bran2                                      as IndustryCode2,
      kna1.bran3                                      as IndustryCode3,
      kna1.dear1                                      as IsCompetitor,
      kna1.dear2                                      as IsSalesPartner,
      kna1.dear5                                      as IsDefaultSoldToParty,
      kna1.dear6                                      as IsConsumer,
      kna1.fiskn                                      as FiscalAddress,
      kna1.katr3                                      as FreeDefinedAttribute03,
      kna1.kdkg1                                      as CustomerConditionGroup1,
      kna1.kdkg2                                      as CustomerConditionGroup2,
      kna1.kdkg3                                      as CustomerConditionGroup3,
      kna1.kdkg4                                      as CustomerConditionGroup4,
      kna1.kdkg5                                      as CustomerConditionGroup5,
      kna1.adrnr                                      as AddressID,                   //LOB adoption changes - start
      kna1.bbbnr                                      as InternationalLocationNumber1,
      kna1.bbsnr                                      as InternationalLocationNumber2,
      kna1.bubkz                                      as InternationalLocationNumber3,
      kna1.cityc                                      as CityCode,
      kna1.counc                                      as County,
      kna1.exabl                                      as CustomerHasUnloadingPoint,
      kna1.knazk                                      as CustomerWorkingTimeCalendar, // LOB adoption changes - end
      @Semantics.booleanIndicator: true
      kna1.cvp_xblck                                  as IsBusinessPurposeCompleted,
      cast (kna1.stkza as xfeld preserving type)      as BPIsEqualizationTaxSubject,
      // Fields added for exposing keys for city code
      kna1.land1                                      as Country,
      kna1.regio                                      as Region,
      kna1.loevm                                      as DeletionIndicator,
      kna1.spras                                      as Language,
      //kna1.cassd                               as SalesIsBlockedForCustomer,
      @Semantics.booleanIndicator: true
      cast (kna1.cassd as abap.char(1))               as SalesIsBlockedForCustomer,
      kna1.paytrsn                                    as PaymentReason,
      kna1.nodel                                      as CustomerCentralDeletionIsBlock,
      //Field addition for ODM-MDI mapping
      kna1.xzemp                                      as AlternativePayerIsAllowed,
      kna1.umjah                                      as BPPlannedAnnualSalesYear,
      kna1.uwaer                                      as BPPlannedAnnualSalesCurrency,
      @Semantics.amount.currencyCode:'BPPlannedAnnualSalesCurrency'
      kna1.umsat                                      as BPPlannedAnnualSalesAmount,
      kna1.vbund                                      as CustomerTradingPartnerID,
      kna1.periv                                      as FiscalYearVariant,
      kna1.stcdt                                      as AccountTaxType,
      kna1.bran4                                      as IndustryCode4,
      kna1.bran5                                      as IndustryCode5,
      kna1.j_1kfrepre                                      as TaxInvoiceRepresentativeName,
      kna1.j_1kftbus                                       as BusinessType,
      kna1.j_1kftind                                       as IndustryType,
      
      kna1.katr1                                                                                                       as FreeDefinedAttribute01,

      kna1.katr2                                                                                                       as FreeDefinedAttribute02,

     // kna1.katr3                                                                                                       as FreeDefinedAttribute03,

      kna1.katr4                                                                                                       as FreeDefinedAttribute04,

      kna1.katr5                                                                                                       as FreeDefinedAttribute05,

      kna1.katr6                                                                                                       as FreeDefinedAttribute06,

      kna1.katr7                                                                                                       as FreeDefinedAttribute07,

      kna1.katr8                                                                                                       as FreeDefinedAttribute08,

      kna1.katr9                                                                                                       as FreeDefinedAttribute09,

      kna1.katr10                                                                                                      as FreeDefinedAttribute10,
      
      @Consumption.hidden:true
      @UI.hidden:true
      kna1.xdcset                                                                                                 as DataControllerSet,
      @Consumption.hidden:true
      @UI.hidden:true
      kna1.data_ctrlr1                                                                                            as DataController1,
      @Consumption.hidden:true
      @UI.hidden:true
      kna1.data_ctrlr2                                                                                            as DataController2,
      @Consumption.hidden:true
      @UI.hidden:true
      kna1.data_ctrlr3                                                                                            as DataController3,
      @Consumption.hidden:true
      @UI.hidden:true
      kna1.data_ctrlr4                                                                                            as DataController4,
      @Consumption.hidden:true
      @UI.hidden:true
      kna1.data_ctrlr5                                                                                            as DataController5,
      @Consumption.hidden:true
      @UI.hidden:true
      kna1.data_ctrlr6                                                                                            as DataController6,
      @Consumption.hidden:true
      @UI.hidden:true
      kna1.data_ctrlr7                                                                                            as DataController7,
      @Consumption.hidden:true
      @UI.hidden:true
      kna1.data_ctrlr8                                                                                            as DataController8,
      @Consumption.hidden:true
      @UI.hidden:true
      kna1.data_ctrlr9                                                                                            as DataController9,
      @Consumption.hidden:true
      @UI.hidden:true
      kna1.data_ctrlr10                                                                                           as DataController10,
    
      

      _AccountGroupValueHelp,
      _CustomerAccountGroupText,
      _BillingBlockReasonValueHelp,
      _BillingBlockReasonText,
      _DelivBlkRsnValueHelp,
      _DeliveryBlockReasonText,
      _CustomerClassValueHelp,
      _CustomerClassificationText,
      _BusinessPartner,
      _CustomerToBusinessPartner
}
```
