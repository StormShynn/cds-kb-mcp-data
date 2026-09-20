---
name: I_PROFITCENTER
description: "Profit Center"
app_component: EC-PCA-MD-2CL
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
  - EC
  - EC-PCA
  - EC-PCA-MD
  - interface-view
  - profit-center
  - component:EC-PCA-MD-2CL
  - lob:Other
  - bo:ProfitCenter
---
# I_PROFITCENTER

**Profit Center**

| Property | Value |
|---|---|
| App Component | `EC-PCA-MD-2CL` |
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
| `ControllingArea` | ✓ | |  | `kokrs` | `CHAR(4)` | Controlling Area |
| `ProfitCenter` | ✓ | |  | `prctr` | `CHAR(10)` | Profit Center |
| `ValidityEndDate` | ✓ | |  | `datbi` | `DATS(8)` | Valid To Date |
| `ProfitCtrResponsiblePersonName` |  | |  | `verak` | `CHAR(20)` | Person Responsible for Profit Center |
| `CompanyCode` |  | |  | `bukrs` | `CHAR(4)` | Company Code |
| `ProfitCtrResponsibleUser` |  | |  | `verak_user` | `CHAR(12)` | User Responsible for the Profit Center |
| `ValidityStartDate` |  | |  | `datab` | `DATS(8)` | Valid-From Date |
| `Department` |  | |  | `abtei` | `CHAR(12)` | Department |
| `ProfitCenterStandardHierarchy` |  | |  | `khinr` | `CHAR(12)` | Profit center area |
| `Segment` |  | |  | `segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenterIsBlocked` |  | |  | `lock_ind` | `CHAR(1)` | Lock indicator |
| `FormulaPlanningTemplate` |  | |  | `pca_template` | `CHAR(10)` | Template for Formula Planning in Profit Centers |
| `FormOfAddress` |  | |  | `anred` | `CHAR(15)` | Title |
| `AddressName` |  | |  | `name1` | `CHAR(35)` | Name |
| `AdditionalName` |  | |  | `name2` | `CHAR(35)` | Name 2 |
| `ProfitCenterAddrName3` |  | |  | `name3` | `CHAR(35)` | Name 3 |
| `ProfitCenterAddrName4` |  | |  | `name4` | `CHAR(35)` | Name 4 |
| `StreetAddressName` |  | |  | `stras` | `CHAR(35)` | Street and House Number |
| `POBox` |  | |  | `pfach` | `CHAR(10)` | PO Box |
| `CityName` |  | |  | `ort01` | `CHAR(35)` | City |
| `PostalCode` |  | |  | `pstlz` | `CHAR(10)` | Postal Code |
| `POBoxPostalCode` |  | |  | `pstl2` | `CHAR(10)` | PO Box Postal Code |
| `District` |  | |  | `ort02` | `CHAR(35)` | District |
| `Country` |  | |  | `land1` | `CHAR(3)` | Country/Region Key |
| `Region` |  | |  | `regio` | `CHAR(3)` | Region (State, Province, County) |
| `TaxJurisdiction` |  | |  | `txjcd` | `CHAR(15)` | Tax Jurisdiction |
| `Language` |  | |  | `spras` | `LANG(1)` | Language Key |
| `PhoneNumber1` |  | |  | `telf1` | `CHAR(16)` | First telephone number |
| `PhoneNumber2` |  | |  | `telf2` | `CHAR(16)` | Second telephone number |
| `TeleboxNumber` |  | |  | `telbx` | `CHAR(15)` | Telebox Number |
| `TelexNumber` |  | |  | `telx1` | `CHAR(30)` | Telex Number |
| `FaxNumber` |  | |  | `telfx` | `CHAR(31)` | Fax Number |
| `TeletexNumber` |  | |  | `teltx` | `CHAR(30)` | Teletex Number |
| `DataCommunicationPhoneNumber` |  | |  | `datlt` | `CHAR(14)` | Data communication line no. |
| `ProfitCenterPrinterName` |  | |  | `drnam` | `CHAR(4)` | Printer name for profit center |
| `ProfitCenterCreatedByUser` |  | |  | `usnam` | `CHAR(12)` | Entered By |
| `ProfitCenterCreationDate` |  | |  | `ersda` | `DATS(8)` | Entered On |
| `LogicalSystem` |  | |  | `logsystem` | `CHAR(10)` | Logical System |
| `_ControllingAreaText` | | ✓ | | | | |
| `_SegmentText` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_ProfitCenterHierarchyNode` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Company` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_PrftCtrCompanyCodeAssignment` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingAreaText` | `I_ControllingArea` | [1..1] |
| `_SegmentText` | `I_SegmentText` | [0..*] |
| `_ControllingArea` | `I_ControllingArea` | [1..1] |
| `_Text` | `I_ProfitCenterText` | [0..*] |
| `_ProfitCenterHierarchyNode` | `I_ProfitCenterHierarchyNode` | [0..*] |
| `_Country` | `I_Country` | [0..1] |
| `_Company` | `I_CompanyCode` | [0..1] |
| `_Segment` | `I_Segment` | [0..1] |
| `_Region` | `I_Region` | [0..1] |
| `_PrftCtrCompanyCodeAssignment` | `I_PrftCtrCompanyCodeAssignment` | [0..*] |
| `_Language` | `I_Language` | [0..1] |
| `_Extension` | `E_ProfitCenter` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Profit Center'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIPROFITCENTER'
@AbapCatalog.preserveKey:true

@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations:  [ '_ProfitCenterHierarchyNode'
//--[ GENERATED:012:29JlHNUf7jY4ipE4XHfNBG
,'_ControllingAreaText','_SegmentText'
// ]--GENERATED
]
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'ProfitCenter'
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #M
}

@ObjectModel.sapObjectNodeType.name: 'ProfitCenter'

@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}

@Search.searchable: true
@Consumption.filter.businessDate.at: true
define view I_ProfitCenter
  as select from cepc


  //--[ GENERATED:012:29JlHNUf7jY4ipE4XHfNBG
  association [1..1] to I_ControllingArea              as _ControllingAreaText          on  $projection.ControllingArea = _ControllingAreaText.ControllingArea
  association [0..*] to I_SegmentText                  as _SegmentText                  on  $projection.Segment = _SegmentText.Segment
  // ]--GENERATED
  association [1..1] to I_ControllingArea              as _ControllingArea              on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..*] to I_ProfitCenterText             as _Text                         on  $projection.ControllingArea = _Text.ControllingArea
                                                                                        and $projection.ProfitCenter    = _Text.ProfitCenter
                                                                                        and $projection.ValidityEndDate = _Text.ValidityEndDate
  association [0..*] to I_ProfitCenterHierarchyNode    as _ProfitCenterHierarchyNode    on  $projection.ControllingArea = _ProfitCenterHierarchyNode.ControllingArea
                                                                                        and $projection.ProfitCenter    = _ProfitCenterHierarchyNode.ProfitCenter
  association [0..1] to I_Country                      as _Country                      on  $projection.Country = _Country.Country
  association [0..1] to I_CompanyCode                  as _Company                      on  $projection.CompanyCode = _Company.CompanyCode
  association [0..1] to I_Segment                      as _Segment                      on  $projection.Segment = _Segment.Segment
  association [0..1] to I_Region                       as _Region                       on  $projection.Country = _Region.Country
                                                                                        and $projection.Region  = _Region.Region

  association [0..*] to I_PrftCtrCompanyCodeAssignment as _PrftCtrCompanyCodeAssignment on  $projection.ControllingArea = _PrftCtrCompanyCodeAssignment.ControllingArea
                                                                                        and $projection.ProfitCenter    = _PrftCtrCompanyCodeAssignment.ProfitCenter

  //association[0..*] to I_TaxJurisdiction           as _TaxJurisdiction           on $projection.TaxJurisdiction   = _TaxJurisdiction.TaxJurisdiction
  association [0..1] to I_Language                     as _Language                     on  $projection.Language = _Language.Language
  association [1..1] to E_ProfitCenter                 as _Extension                    on  $projection.ControllingArea = _Extension.ControllingArea
                                                                                        and $projection.ProfitCenter    = _Extension.ProfitCenter
                                                                                        and $projection.ValidityEndDate = _Extension.ValidityEndDate

{
      //--[ GENERATED:012:29JlHNUf7jY4ipE4XHfNBG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ControllingArea',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.text.association: '_ControllingAreaText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ControllingArea'
  key kokrs        as ControllingArea,
      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_ProfitCenterHierarchyNode'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
  key prctr        as ProfitCenter,

      @Semantics.businessDate.to: true
  key datbi        as ValidityEndDate,
      verak        as ProfitCtrResponsiblePersonName,
      
///////////////////////////////////////////////////////////////////////////
// Attention
//           Please do NOT use this field CompanyCode from this view
//                (it is empty and will not be used/filled)
//
//  The assignment CompanyCode - Profitcenter is built in another way
// We cannot delete the wrong field here because of DDL guidelines
///////////////////////////////////////////////////////////////////////      
      bukrs        as CompanyCode,
      
      verak_user   as ProfitCtrResponsibleUser,
      @Semantics.businessDate.from: true
      datab        as ValidityStartDate,
      abtei        as Department,
      khinr        as ProfitCenterStandardHierarchy,
      //--[ GENERATED:012:29JlHNUf7jY4ipE4XHfNBG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_SegmentStdVH',
                     element: 'Segment' }
        }]
      @ObjectModel.text.association: '_SegmentText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_Segment' //Inserted by VDM CDS Suite Plugin
      segment      as Segment,
      lock_ind     as ProfitCenterIsBlocked,
      pca_template as FormulaPlanningTemplate,
      anred        as FormOfAddress,
      name1        as AddressName,
      name2        as AdditionalName,
      name3        as ProfitCenterAddrName3,
      name4        as ProfitCenterAddrName4,
      stras        as StreetAddressName,
      pfach        as POBox,
      ort01        as CityName,
      pstlz        as PostalCode,
      pstl2        as POBoxPostalCode,
      ort02        as District,
      @ObjectModel.foreignKey.association: '_Country' //Inserted by VDM CDS Suite Plugin
      land1        as Country,
      @ObjectModel.foreignKey.association: '_Region'
      regio        as Region,
      txjcd        as TaxJurisdiction,
      @Semantics.language:true
      @ObjectModel.foreignKey.association: '_Language' //Inserted by VDM CDS Suite Plugin
      spras        as Language,
      telf1        as PhoneNumber1,
      telf2        as PhoneNumber2,
      telbx        as TeleboxNumber,
      telx1        as TelexNumber,
      telfx        as FaxNumber,
      teltx        as TeletexNumber,
      datlt        as DataCommunicationPhoneNumber,
      drnam        as ProfitCenterPrinterName,
      usnam        as ProfitCenterCreatedByUser,
      @Semantics.systemDate.createdAt: true
      ersda        as ProfitCenterCreationDate,
      logsystem    as LogicalSystem,

      _Text,
      _Country,
      _ControllingArea,
      _ProfitCenterHierarchyNode,
      _Language,
      _Company,
      _Segment,
      _Region,
      _PrftCtrCompanyCodeAssignment,
      //--[ GENERATED:012:29JlHNUf7jY4ipE4XHfNBG
      @Consumption.hidden: true
      _ControllingAreaText,
      @Consumption.hidden: true
      _SegmentText
      // ]--GENERATED

      //_TaxJurisdiction
}
```
