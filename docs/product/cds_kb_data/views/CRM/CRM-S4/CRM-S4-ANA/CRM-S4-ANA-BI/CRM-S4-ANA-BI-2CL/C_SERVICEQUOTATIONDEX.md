---
name: C_SERVICEQUOTATIONDEX
description: "Servicequotationdex"
semantic_vi: "View Servicequotationdex CDS hiển thị một tập hợp các đề xuất dịch vụ, cung cấp thông tin quan trọng như loại đối tượng dịch vụ, chi tiết tài liệu và ngày hạn hiệu lực. Nó được sử dụng để trích xuất và phân tích dữ liệu đề xuất dịch vụ."
keywords:
  - "service quotation"
  - "đề xuất dịch vụ"
  - "service object type"
  - "tài liệu dịch vụ"
  - "validity dates"
  - "thời hạn hiệu lực"
  - "service quotation data"
  - "dữ liệu đề xuất dịch vụ"
  - "crm"
  - "s4hana"
  - "sap"
  - "c4c"
semantic_en: "The Servicequotationdex CDS view exposes a collection of service quotations, providing key information such as service object type, document details, and validity dates. It is used to extract and analyze service quotation data."
app_component: CRM-S4-ANA-BI-2CL
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
  - CRM
  - consumption-view
  - data-extraction
  - service
  - component:CRM-S4-ANA-BI-2CL
  - lob:Other
---
# C_SERVICEQUOTATIONDEX

**Servicequotationdex**

| Property | Value |
|---|---|
| App Component | `CRM-S4-ANA-BI-2CL` |
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
| `ServiceObjectType` | ✓ | |  |  | `CHAR(10)` | Business Trans. Cat. |
| `ServiceDocument` | ✓ | |  |  | `CHAR(10)` | Transaction ID |
| `ServiceDocumentDescription` |  | |  |  | `CHAR(40)` | Transaction Description |
| `RequestedServiceStartDateTime` |  | |  |  | `DEC(15)` | Service Request Start Date |
| `RequestedServiceEndDateTime` |  | |  |  | `DEC(15)` | Service Request Due Date |
| `SrvcQtanValidityStartDateTime` |  | |  |  | `DEC(15)` | Contract Start date |
| `SrvcQtanValidityEndDateTime` |  | |  |  | `DEC(15)` | Contract End Date |
| `ServiceDocumentIsReleased` |  | |  |  | `CHAR(1)` | Release Status |
| `ServiceDocumentIsOpen` |  | |  |  | `CHAR(1)` | Status "Open" |
| `ServiceDocumentIsRejected` |  | |  |  | `CHAR(1)` | Cancellation Status |
| `ServiceDocumentStatus` |  | |  |  | `CHAR(4)` | Life Cycle Status |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `ContactPersonBusinessPartnerId` |  | |  | `ContactPerson` | `CHAR(10)` | Customer Contact Person |
| `RespyMgmtGlobalTeamID` |  | |  |  | `CHAR(40)` | Global Team ID in Responsibility Mgmt. |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-To Party |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-To Party |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment |
| `ServiceDocumentRejectionReason` |  | |  |  | `CHAR(2)` | Cancellation Reason Code |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `ServiceDocGrossAmount` |  | |  |  | `CURR(15)` | Total Gross Value of Document in Document Currency |
| `ServiceDocNetAmount` |  | |  |  | `CURR(15)` | Total Net Value of Document in Document Currency |
| `ServiceDocTaxAmount` |  | |  |  | `CURR(15)` | Total Tax Amount in Document Currency |
| `ReferenceInHouseRepair` |  | |  |  | `CHAR(10)` | Reference In-House Repair |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `SerialNumber` |  | |  |  | `CHAR(18)` | Serial Number |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `SrvcQtanFunctionalLocation` |  | |  | `cast ( ServiceQtanRefObj.FunctionalLocation as functionallocation preserving type )` | `CHAR(30)` | Functional Location |
| `ProductID` |  | |  |  | `CHAR(40)` | Material Number |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocumentExt` | `E_ServiceDocument` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Data Extraction for Service Quotation'
@VDM: {
  viewType: #CONSUMPTION
  // lifecycle.contract.type: #PUBLIC_LOCAL_API  //! Removed due to ATC
}

@Analytics: {
    technicalName: 'CSRVCQTANDEX',
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    filter: [{operator: #EQ, tableElement: 'objtype_h', value: 'BUS2000116'}],
                    table: 'crms4d_serv_h', role: #MAIN,
                    viewElement: ['ServiceObjectType', 'ServiceDocument'],
                    tableElement: ['objtype_h', 'object_id']
                },
                {
                    filter: [{operator: #EQ, tableElement: 'objtype_h', value: 'BUS2000116'}],
                    table: 'crms4d_refobj', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['ServiceObjectType', 'ServiceDocument'],
                    tableElement: ['objtype_h', 'object_id']
                }  ]  }   }   }

@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@ObjectModel: {
  representativeKey: 'ServiceDocument',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #D,
     sizeCategory:   #XL
   },
   supportedCapabilities: [#EXTRACTION_DATA_SOURCE]
}

@ObjectModel.sapObjectNodeType.name: 'ServiceQuotation'
@Metadata.ignorePropagatedAnnotations: true

define view entity C_ServiceQuotationDEX
  as select from           I_ServiceDocumentEnhcd     as ServiceQuotation
    left outer to one join I_ServiceDocumentRefObject as ServiceQtanRefObj on  ServiceQtanRefObj.ServiceObjectType      = 'BUS2000116'
                                                                           and ServiceQtanRefObj.ServiceDocument        = ServiceQuotation.ServiceDocument
                                                                           and ServiceQtanRefObj.ServiceDocumentItem    is null
                                                                           and ServiceQtanRefObj.SrvcRefObjIsMainObject = 'X'

  association [0..1] to E_ServiceDocument as _ServiceDocumentExt on  $projection.ServiceObjectType = _ServiceDocumentExt.ServiceCategory
                                                                 and $projection.ServiceDocument   = _ServiceDocumentExt.ServiceOrder


{
      @ObjectModel.foreignKey.association: '_ServiceObjType'
  key ServiceQuotation.ServiceObjectType,
  key ServiceQuotation.ServiceDocument,
      /* Header Details */
      //      ServiceQuotation.ServiceDocumentUUID,
      //      ServiceQuotation.ServiceDocumentCharUUID,
      ServiceQuotation.ServiceDocumentDescription,
      ServiceQuotation.RequestedServiceStartDateTime,
      ServiceQuotation.RequestedServiceEndDateTime,
      ServiceQuotation.SrvcQtanValidityStartDateTime,
      ServiceQuotation.SrvcQtanValidityEndDateTime,
      @Semantics.booleanIndicator: true
      ServiceQuotation.ServiceDocumentIsReleased,
      @Semantics.booleanIndicator: true
      ServiceQuotation.ServiceDocumentIsOpen,
      @Semantics.booleanIndicator: true
      ServiceQuotation.ServiceDocumentIsRejected,

      @ObjectModel.foreignKey.association: '_SrvcDocLifecycleStatus'
      ServiceQuotation.ServiceDocumentStatus,

      /* Organizational units with the S/4 SD codes */
      ServiceQuotation.SalesOrganization,
      ServiceQuotation.DistributionChannel,
      ServiceQuotation.Division,
      ServiceQuotation.SalesOffice,
      ServiceQuotation.SalesGroup,

      ServiceQuotation.ContactPerson       as ContactPersonBusinessPartnerId,
      ServiceQuotation._ServiceTeamHeader.RespyMgmtGlobalTeamID,
      
      ServiceQuotation.SoldToParty,
      ServiceQuotation.ShipToParty,
      
      ServiceQuotation.PaymentTerms,
      @ObjectModel.foreignKey.association: '_SrvcDocumentRejectionReason'
      ServiceQuotation.ServiceDocumentRejectionReason,
      
     
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      ServiceQuotation.TransactionCurrency,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceQuotation.ServiceDocGrossAmount,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceQuotation.ServiceDocNetAmount,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceQuotation.ServiceDocTaxAmount,
      ServiceQuotation.ReferenceInHouseRepair,
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      ServiceQuotation.ServiceDocumentType,

      /* Reference Object Details */
//            ServiceQtanRefObj.ServiceRefObjectSequenceNumber,
      ServiceQtanRefObj.SerialNumber,
      ServiceQtanRefObj.Equipment,
      cast ( ServiceQtanRefObj.FunctionalLocation as functionallocation preserving type ) as SrvcQtanFunctionalLocation,
      ServiceQtanRefObj.ProductID,
//      ServiceQtanRefObj.ServiceDocumentItem,
//      ServiceQtanRefObj.SrvcRefObjIsMainObject,
      

      /* Keys */
      ServiceQuotation._ServiceObjType,

      ServiceQuotation._ServiceDocumentType,
      ServiceQuotation._TransactionCurrency,
      ServiceQuotation._SrvcDocLifecycleStatus,
      ServiceQuotation._SrvcDocumentRejectionReason


}
where
      ServiceQuotation.ServiceObjectType          = 'BUS2000116'
  and ServiceQuotation.ServiceDocumentIsQuotation = 'X'
```
