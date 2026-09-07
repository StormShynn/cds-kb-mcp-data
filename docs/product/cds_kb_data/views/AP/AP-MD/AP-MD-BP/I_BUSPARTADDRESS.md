---
name: I_BUSPARTADDRESS
description: "Business PartnerADDRESS"
semantic_vi: "Chứa thông tin địa chỉ đối tác kinh doanh, bao gồm các ngày hiệu lực và ID hệ thống bên ngoài. View này được sử dụng để lấy và quản lý địa chỉ đối tác kinh doanh trong thành phần AP-MD-BP."
keywords:
  - "business partner"
  - "address"
  - "ap-md-bp"
  - "component"
  - "sap"
  - "lob other"
  - "business partner address"
  - "address id"
  - "validity date"
  - "external system id"
semantic_en: "Exposes business partner addresses, including their validity dates and external system IDs. This view is used to retrieve and manage business partner addresses in the AP-MD-BP component."
app_component: AP-MD-BP
software_component: SAP_BASIS
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
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - business-partner
  - address
  - component:AP-MD-BP
  - lob:Other
---
# I_BUSPARTADDRESS

**Business PartnerADDRESS**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  | `partner` | `CHAR(10)` | Business Partner Number |
| `AddressID` | ✓ | |  | `addrnumber` | `CHAR(10)` | Address Number |
| `AddressUUID` |  | |  | `address_guid` | `RAW(16)` | GUID of a Business Partner Address |
| `ValidityStartDate` |  | |  | `addr_valid_from` | `DEC(15)` | Validity Start of a Business Partner Address |
| `ValidityEndDate` |  | |  | `addr_valid_to` | `DEC(15)` | Validity End of a Business Partner Address |
| `AddressIDByExternalSystem` |  | |  | `adext` | `CHAR(20)` | Address number in external system |
| `BPTargetAddressID` |  | |  | `move_addr` | `CHAR(10)` | Number of Move Target Address for Address Moves |
| `BPAddressMoveDateTime` |  | |  | `addr_move_date` | `DEC(15)` | Date of Move for Address Moves |
| `AuthorizationGroup` |  | | `_BusinessPartner` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `IsBusinessPurposeCompleted` |  | | `_BusinessPartner` | `IsBusinessPurposeCompleted` | `CHAR(1)` | Business Purpose Completed Flag |
| `_Address` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_BPProtectedAddress` | | ✓ | | | | |
| `_AddressDefaultRepresentation` | | ✓ | | | | |
| `_AddressInternationalVersions` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Address` | `I_Address` | [1..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_BPProtectedAddress` | `I_BPProtectedAddress` | [0..1] |
| `_AddressDefaultRepresentation` | `I_Address_2` | [0..1] |
| `_AddressInternationalVersions` | `I_Address_2` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBUPAADDRESS'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@VDM.viewType: #BASIC
@EndUserText.label: 'Business Partner Address'
@AccessControl.privilegedAssociations:  [ '_Address', '_AddressDefaultRepresentation' ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities:[#SQL_DATA_SOURCE, 
                                    #EXTRACTION_DATA_SOURCE,
                                    #ANALYTICAL_DIMENSION,
                                    #CDS_MODELING_ASSOCIATION_TARGET       ]
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.representativeKey:'AddressID'
@ObjectModel.sapObjectNodeType.name: 'BusinessPartnerAddress'
@Analytics: {
 dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping:[
                {
                    table: 'BUT020', role: #MAIN,
                    viewElement: ['BusinessPartner', 'AddressID'],
                    tableElement: ['partner','addrnumber']
                },
                   {
                    table: 'BUT000', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['BusinessPartner'],
                    tableElement: ['partner']
                }
            ]
    }
  }
}
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_BusPartAddress
  as select from but020 as BusinessPartnerAddress

  //    inner join   I_Address_2 as _AddressDefaultRepresentation on  _AddressDefaultRepresentation.AddressID                 = BusinessPartnerAddress.addrnumber
  //                                                              and _AddressDefaultRepresentation.AddressPersonID           = BUT000.persnumber
  //                                                              and _AddressDefaultRepresentation.AddressRepresentationCode is initial

  association [1..1] to I_Address            as _Address                      on  $projection.AddressID = _Address.AddressID

  association [1..1] to I_BusinessPartner    as _BusinessPartner              on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner

  association [0..1] to I_BPProtectedAddress as _BPProtectedAddress           on  $projection.BusinessPartner = _BPProtectedAddress.BusinessPartner
                                                                              and $projection.AddressID       = _BPProtectedAddress.AddressID

  association [0..1] to I_Address_2          as _AddressDefaultRepresentation on  $projection.AddressID                                   = _AddressDefaultRepresentation.AddressID
  //                                                                           and $projection.PersonNumber    = _AddressDefaultRepresentation.AddressPersonID
                                                                              and _AddressDefaultRepresentation.AddressRepresentationCode is initial
  association [0..*] to I_Address_2          as _AddressInternationalVersions on  $projection.AddressID                                   = _AddressInternationalVersions.AddressID
                                                                              and _AddressInternationalVersions.AddressRepresentationCode is not initial    
{
      @ObjectModel.foreignKey.association: '_BusinessPartner'
  key BusinessPartnerAddress.partner         as BusinessPartner,
  key BusinessPartnerAddress.addrnumber      as AddressID,
      BusinessPartnerAddress.address_guid    as AddressUUID,
      BusinessPartnerAddress.addr_valid_from as ValidityStartDate,
      BusinessPartnerAddress.addr_valid_to   as ValidityEndDate,
      BusinessPartnerAddress.adext           as AddressIDByExternalSystem, // added in 1802
      BusinessPartnerAddress.move_addr       as BPTargetAddressID,
      BusinessPartnerAddress.addr_move_date  as BPAddressMoveDateTime,



      _BusinessPartner.AuthorizationGroup,
      @Semantics.booleanIndicator: true
      _BusinessPartner.IsBusinessPurposeCompleted,
      _BPProtectedAddress,
      _BusinessPartner,
      _AddressDefaultRepresentation,
      _AddressInternationalVersions,
      _Address

}
```
