---
name: I_SERVICEDOCUMENTENHCD
description: "Service DocumentUMENTENHCD"
app_component: CRM-S4-REP-RFW
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
  - interface-view
  - service
  - document
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICEDOCUMENTENHCD

**Service DocumentUMENTENHCD**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
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
| `ServiceDocumentUUID` |  | |  |  | `RAW(16)` | GUID of a CRM Order Object |
| `ServiceDocumentCharUUID` |  | |  |  | `CHAR(32)` | 32 Character CRM Object GUID (Converted) |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `ServiceDocumentDescription` |  | |  |  | `CHAR(40)` | Transaction Description |
| `Language` |  | |  |  | `LANG(1)` | Language Key of Description |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date for a Business Transaction |
| `ServiceDocumentTemplateType` |  | |  |  | `CHAR(1)` | Template Type of CRM Transaction |
| `ServiceDocCreationDateTime` |  | |  |  | `DEC(15)` | Created At |
| `ServiceDocChangedDateTime` |  | |  |  | `DEC(15)` | Changed At |
| `ServiceDocumentCreationDate` |  | |  | `cast( tstmp_to_dats( ServiceDocCreationDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as crms4_created_on preserving type )` | `DATS(8)` | Created On |
| `ServiceDocumentChangedDate` |  | |  | `cast( tstmp_to_dats( ServiceDocChangedDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as crms4_changed_on preserving type )` | `DATS(8)` | Changed On |
| `ServiceDocumentCreatedByUser` |  | |  |  | `CHAR(12)` | User that Created the Transaction |
| `ServiceDocumentChangedByUser` |  | |  |  | `CHAR(12)` | Transaction Last Changed By |
| `PricingDocument` |  | |  |  | `CHAR(10)` | Number of the Document Condition |
| `PricingProcedure` |  | |  |  | `CHAR(6)` | Procedure (Pricing, Output Control, Acct. Det., Costing,...) |
| `RefBusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Reference Solution Order ID |
| `SrvcDocIsMaintServiceOrder` |  | |  |  | `CHAR(1)` | Logical Variable |
| `BusinessActivityCategory` |  | |  |  | `CHAR(3)` | Activity Category (Communication Type) |
| `ServiceDocumentPriority` |  | |  |  | `NUMC(1)` | Activity Priority |
| `ServiceDocNetAmount` |  | |  |  | `CURR(15)` | Total Net Value of Document in Document Currency |
| `ServiceDocGrossAmount` |  | |  |  | `CURR(15)` | Total Gross Value of Document in Document Currency |
| `ServiceDocTaxAmount` |  | |  |  | `CURR(15)` | Total Tax Amount in Document Currency |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-To Party |
| `SoldToPartyCountry` |  | |  |  | `CHAR(3)` | Country/Region |
| `SoldToPartyRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `ServiceTeam` |  | |  |  | `CHAR(10)` | Service Team |
| `ResponsibleEmployee` |  | |  |  | `CHAR(10)` | Employee Responsible |
| `ServiceEmployee` |  | |  |  | `CHAR(10)` | Executing Service Employee |
| `ContactPerson` |  | |  |  | `CHAR(10)` | Customer Contact Person |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-To Party |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-To Party |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `RequestedServiceStartDateTime` |  | |  |  | `DEC(15)` | Service Request Start Date |
| `RequestedServiceEndDateTime` |  | |  |  | `DEC(15)` | Service Request Due Date |
| `ServiceContractStartDateTime` |  | |  |  | `DEC(15)` | Contract Start date |
| `ServiceContractEndDateTime` |  | |  |  | `DEC(15)` | Contract End Date |
| `SrvcContrEarliestStartDateTime` |  | |  |  | `DEC(15)` | Earliest Start Date for Service Contract |
| `SrvcContrLatestEndDateTime` |  | |  |  | `DEC(15)` | Latest End Date for Service Contract |
| `SrvcQtanValidityStartDateTime` |  | |  |  | `DEC(15)` | Contract Start date |
| `SrvcQtanValidityEndDateTime` |  | |  |  | `DEC(15)` | Contract End Date |
| `SrvcDocTmplValdtyStartDateTime` |  | |  |  | `DEC(15)` | Template Start Date |
| `SrvcDocTmplValdtyEndDateTime` |  | |  |  | `DEC(15)` | Template End Date |
| `SrvcDocTemplateSearchTermText` |  | |  |  | `CHAR(54)` | Template Search Term |
| `RequestedServiceStartDate` |  | |  | `cast( tstmp_to_dats( RequestedServiceStartDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as crms4_created_on preserving type )` | `DATS(8)` | Created On |
| `RequestedServiceEndDate` |  | |  | `cast( tstmp_to_dats( RequestedServiceEndDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as crms4_changed_on preserving type )` | `DATS(8)` | Changed On |
| `ServiceContractStartDate` |  | |  | `cast( tstmp_to_dats( ServiceContractStartDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as crms4_created_on preserving type )` | `DATS(8)` | Created On |
| `ServiceContractEndDate` |  | |  | `cast( tstmp_to_dats( ServiceContractEndDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as crms4_changed_on preserving type )` | `DATS(8)` | Changed On |
| `SrvcQuotationValidityStartDate` |  | |  | `cast( tstmp_to_dats( SrvcQtanValidityStartDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as crms4_created_on preserving type )` | `DATS(8)` | Created On |
| `SrvcQuotationValidityEndDate` |  | |  | `cast( tstmp_to_dats( SrvcQtanValidityEndDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as crms4_changed_on preserving type )` | `DATS(8)` | Changed On |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `SrvcSEPAMandateRelevance` |  | |  |  | `CHAR(1)` | Indicator for SEPA-Relevant Transactions |
| `SEPAMandate` |  | |  |  | `CHAR(35)` | Unique Reference to Mandate per Payment Recipient |
| `TaxDepartureCountry` |  | |  |  | `CHAR(3)` | Tax Departure Country |
| `VATRegistrationCountry` |  | |  |  | `CHAR(3)` | Tax Destination Country/Region |
| `CustomerTaxClassification1` |  | |  |  | `CHAR(1)` | Alternative Tax Classification |
| `CustomerTaxClassification2` |  | |  |  | `CHAR(1)` | Tax Classification 2 for Customer |
| `CustomerTaxClassification3` |  | |  |  | `CHAR(1)` | Tax Classification 3 for Customer |
| `CustomerTaxClassification4` |  | |  |  | `CHAR(1)` | Tax Classification 4 for Customer |
| `CustomerTaxClassification5` |  | |  |  | `CHAR(1)` | Tax Classification 5 for Customer |
| `CustomerTaxClassification6` |  | |  |  | `CHAR(1)` | Tax Classification 6 for Customer |
| `CustomerTaxClassification7` |  | |  |  | `CHAR(1)` | Tax Classification 7 for Customer |
| `CustomerTaxClassification8` |  | |  |  | `CHAR(1)` | Tax Classification 8 for Customer |
| `CustomerTaxClassification9` |  | |  |  | `CHAR(1)` | Tax Classification 9 for Customer |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `PurchaseOrderByCustomer` |  | |  |  | `CHAR(35)` | Sold-To Party's External Reference Number |
| `CustomerPurchaseOrderDate` |  | |  |  | `DATS(8)` | Reference Document Date |
| `ServiceDocumentRejectionReason` |  | |  |  | `CHAR(2)` | Cancellation Reason Code |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `ServiceDocumentStatus` |  | |  |  | `CHAR(4)` | Life Cycle Status |
| `ServiceDocumentHasError` |  | |  |  | `CHAR(1)` | Error Status |
| `ServiceDocBillingStatus` |  | |  |  | `CHAR(1)` | Billing Status |
| `ServiceDocIsReleasedForBilling` |  | |  |  | `CHAR(1)` | Release Status for Cumulated Billing |
| `ServiceDocumentIsOpen` |  | |  |  | `CHAR(1)` | Status "Open" |
| `SrvcDocTransferStatus` |  | |  |  | `CHAR(1)` | Transfer Status |
| `ServiceDocumentIsQuotation` |  | |  |  | `CHAR(1)` | Quotation Status |
| `ServiceDocumentIsReleased` |  | |  |  | `CHAR(1)` | Release Status |
| `ServiceDocumentIsRejected` |  | |  |  | `CHAR(1)` | Cancellation Status |
| `ServiceConfirmationIsFinal` |  | |  |  | `CHAR(1)` | Final service confirmation for the related service order |
| `ServiceContractCanclnSts` |  | |  |  | `CHAR(1)` | Contract Cancellation Status |
| `MaintSrvcOrdExecutionStatus` |  | |  |  | `CHAR(2)` | Execution Status |
| `SrvcDocExecutionStatus` |  | |  |  | `CHAR(2)` | Execution Status |
| `SrvcDocDeliveryStatus` |  | |  |  | `CHAR(1)` | Delivery Status |
| `SrvcDocGoodsIssueStatus` |  | |  |  | `CHAR(1)` | Goods Issue Status |
| `SrvcDocRejectionStatus` |  | |  |  | `CHAR(1)` | Rejection Status |
| `SalesOrganizationOrgUnitID` |  | |  |  | `CHAR(14)` | Sales Organization ID |
| `SalesOfficeOrgUnitID` |  | |  |  | `CHAR(14)` | Sales Office |
| `SalesGroupOrgUnitID` |  | |  |  | `CHAR(14)` | Sales Group |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `ServiceOrganization` |  | |  |  | `CHAR(14)` | Service Organization |
| `ResponsibleServiceOrganization` |  | |  |  | `CHAR(14)` | Organizational Unit (Service) |
| `EnterpriseServiceOrganization` |  | |  |  | `CHAR(4)` | Enterprise Service Organization |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `RespyMgmtServiceTeam` |  | |  |  | `NUMC(8)` | Service Team (Responsibility Management) |
| `BillingBlockReason` |  | |  |  | `CHAR(2)` | Business Partner: Billing Block Reason |
| `ServiceReasonSchema` |  | |  |  | `CHAR(40)` | Coherent Cat. - Aspect ID |
| `ServiceReasonCategory` |  | |  |  | `CHAR(40)` | Coherent Cat. - Category ID |
| `ServiceDefectSchema` |  | |  |  | `CHAR(40)` | Coherent Cat. - Aspect ID |
| `ServiceDefectCategory` |  | |  |  | `CHAR(40)` | Coherent Cat. - Category ID |
| `ServiceFirstResponseByDateTime` |  | |  |  | `DEC(15)` | First Response By |
| `ServiceDueByDateTime` |  | |  |  | `DEC(15)` | Date Transaction is Due |
| `ErlstRequestedDeliveryDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `RecommendedServicePriority` |  | |  |  | `NUMC(1)` | Recommended Priority |
| `ServiceDocumentUrgency` |  | |  |  | `NUMC(2)` | Urgency |
| `ServiceDocumentImpact` |  | |  |  | `NUMC(2)` | Impact |
| `ServiceEscalationLevel` |  | |  |  | `NUMC(1)` | Escalation |
| `ServiceDocumentProblemCategory` |  | |  |  | `CHAR(3)` | Problem Category |
| `ServiceRisk` |  | |  |  | `NUMC(3)` | Risk |
| `ServiceDocumentCanclnParty` |  | |  |  | `CHAR(4)` | Cancelling Party |
| `ServiceDocumentCanclnReason` |  | |  |  | `CHAR(4)` | CRM Service : Reason for Cancellation |
| `ReferenceInHouseRepair` |  | |  |  | `CHAR(10)` | Reference In-House Repair |
| `ReferenceInHouseRepairItem` |  | |  |  | `NUMC(6)` | Reference In-House Repair Item |
| `RefInHouseRepairIsExisting` |  | |  |  | `CHAR(1)` | Reference to In-House Repair Exists |
| `SrvcDocCreditStatus` |  | |  |  | `CHAR(1)` | Credit Status of Header |
| `SrvcDocBslnCostPostgStatus` |  | |  |  | `CHAR(1)` | Baseline Planned Cost and Revenue Header Status |
| `SrvcDocContinuousCostStatus` |  | |  |  | `CHAR(1)` | Baseline Planned Cost and Revenue Header Status |
| `ShippingCondition` |  | |  |  | `CHAR(2)` | Shipping Conditions |
| `CustomerPriceGroup` |  | |  |  | `CHAR(2)` | Customer Price Group |
| `ContractAccount` |  | |  |  | `CHAR(12)` | Contract Account Number |
| `SrvcDocAcctAssgmtObjectType` |  | |  |  | `CHAR(2)` | Obj.Type for Sett.Acc.Assgnmnt for Search Help or Cust.Exit |
| `SrvcDocAcctAssgmtObject` |  | |  |  | `CHAR(50)` | Settlement Account Assignment |
| `DeliveryPriority` |  | |  |  | `NUMC(2)` | Delivery Priority |
| `IncotermsPart1` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsPart2` |  | |  |  | `CHAR(28)` | Incoterms (Part 2) |
| `StatusProfile` |  | | `_StatusObjectWithUUID` | `StatusProfile` | `CHAR(8)` | Status Profile |
| `_ServiceDocItem` | | ✓ | | | | |
| `_ServiceDocRefObj` | | ✓ | | | | |
| `_ServiceDocPredecessor` | | ✓ | | | | |
| `_ServiceDocSuccessor` | | ✓ | | | | |
| `_SrvcDocBPSoldToParty` | | ✓ | | | | |
| `_ServiceDocLongText` | | ✓ | | | | |
| `_CustMgmtPartner` | | ✓ | | | | |
| `_SrvcDocHeaderLongText` | | ✓ | | | | |
| `_ServiceObjType` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_RespEmployee` | | ✓ | | | | |
| `_ServiceTeam` | | ✓ | | | | |
| `_ServiceEmployee` | | ✓ | | | | |
| `_ContactPerson` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_SoldToPartyToCustomer` | | ✓ | | | | |
| `_SoldToPartyCountry` | | ✓ | | | | |
| `_SoldToPartyRegion` | | ✓ | | | | |
| `_ServiceTeamHeader` | | ✓ | | | | |
| `_ServiceDocumentStatus` | | ✓ | | | | |
| `_SrvcDocLifecycleStatus` | | ✓ | | | | |
| `_ServiceDocBillingStatus` | | ✓ | | | | |
| `_SrvcDocIsRelForBillgSts` | | ✓ | | | | |
| `_ServiceDocumentIsOpen` | | ✓ | | | | |
| `_ServiceDocHasError` | | ✓ | | | | |
| `_ServiceContractCanclnSts` | | ✓ | | | | |
| `_SrvcDocTransferStatus` | | ✓ | | | | |
| `_BillingBlockReason` | | ✓ | | | | |
| `_ActivityCategory` | | ✓ | | | | |
| `_ServiceDocumentPriority` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_PaymentTerms` | | ✓ | | | | |
| `_SrvcSEPAMandateRelevance` | | ✓ | | | | |
| `_FixedPrice` | | ✓ | | | | |
| `_TaxDepartureCountry` | | ✓ | | | | |
| `_VATRegistrationCountry` | | ✓ | | | | |
| `_SalesOrganizationOrgUnit` | | ✓ | | | | |
| `_SalesOrganizationOrgUnit_2` | | ✓ | | | | |
| `_SalesOfficeOrgUnit` | | ✓ | | | | |
| `_SalesOfficeOrgUnit_2` | | ✓ | | | | |
| `_SalesGroupOrgUnit` | | ✓ | | | | |
| `_SalesGroupOrgUnit_2` | | ✓ | | | | |
| `_ServiceOrganizationOrgUnit` | | ✓ | | | | |
| `_ServiceOrganizationOrgUnit_2` | | ✓ | | | | |
| `_RespSrvcOrganizationOrgUnit` | | ✓ | | | | |
| `_RespSrvcOrganizationOrgUnit_2` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_EnterpriseServiceOrg` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_SrvcDocumentRejectionReason` | | ✓ | | | | |
| `_ServiceRisk` | | ✓ | | | | |
| `_ServiceDocProblemCategory` | | ✓ | | | | |
| `_SrvcDocCreditStatus` | | ✓ | | | | |
| `_SrvcDocBslnCostPostgStatus` | | ✓ | | | | |
| `_SrvcDocContinuousCostStatus` | | ✓ | | | | |
| `_PaymentMethod` | | ✓ | | | | |
| `_SrvcDocExecutionStatus` | | ✓ | | | | |
| `_SrvcDocIsQuotation` | | ✓ | | | | |
| `_SrvcDocIsQuotation_2` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocItem` | `I_ServiceDocumentItemEnhcd` | [1..*] |
| `_ServiceDocRefObj` | `I_ServiceDocumentRefObject` | [0..*] |
| `_ServiceDocPredecessor` | `I_ServiceDocumentPredecessor` | [1] |
| `_ServiceDocSuccessor` | `I_ServiceDocumentSuccessor` | [0..*] |
| `_ServiceDocumentExt` | `E_ServiceDocument` | [0..1] |
| `_SrvcDocBPSoldToParty` | `C_SrvcDocBPContactCardQuickVw` | [0..1] |
| `_ServiceDocLongText` | `I_ServiceDocumentLongText` | [0..*] |
| `_StatusObjectWithUUID` | `I_StatusObjectWithUUID` | [0..1] |
| `_CustMgmtPartner` | `I_CustMgmtPartner` | [0..*] |
| `_SrvcDocHeaderLongText` | `I_SrvcDocHeaderLongText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Service Transaction Enhanced'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISERVDOCENHCD',
  compiler.compareFilter: true,
  preserveKey: true
}

@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: ['_ServiceDocRefObj', '_ServiceDocPredecessor', '_ServiceDocSuccessor']
}

@ObjectModel: {
   representativeKey: 'ServiceDocument',
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #C,
     sizeCategory:   #XXL
   },
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
   modelingPattern: #ANALYTICAL_DIMENSION
}
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

define view I_ServiceDocumentEnhcd
  as select from I_ServiceDocument

  association [1..*] to I_ServiceDocumentItemEnhcd    as _ServiceDocItem        on  $projection.ServiceObjectType = _ServiceDocItem.ServiceObjectType
                                                                                and $projection.ServiceDocument   = _ServiceDocItem.ServiceDocument

  association [0..*] to I_ServiceDocumentRefObject    as _ServiceDocRefObj      on  $projection.ServiceObjectType            = _ServiceDocRefObj.ServiceObjectType
                                                                                and $projection.ServiceDocument              = _ServiceDocRefObj.ServiceDocument
                                                                                and _ServiceDocRefObj.ServiceDocumentItem    is initial
                                                                                and _ServiceDocRefObj.SrvcRefObjIsMainObject is not initial

  association [1]    to I_ServiceDocumentPredecessor  as _ServiceDocPredecessor on  $projection.ServiceDocumentUUID = _ServiceDocPredecessor.ServiceDocumentUUID
                                                                                and $projection.ServiceObjectType   = _ServiceDocPredecessor.ServiceObjectType

  association [0..*] to I_ServiceDocumentSuccessor    as _ServiceDocSuccessor   on  $projection.ServiceDocumentUUID = _ServiceDocSuccessor.ServiceDocumentUUID
                                                                                and $projection.ServiceObjectType   = _ServiceDocSuccessor.ServiceObjectType

  association [0..1] to E_ServiceDocument             as _ServiceDocumentExt    on  $projection.ServiceObjectType = _ServiceDocumentExt.ServiceCategory
                                                                                and $projection.ServiceDocument   = _ServiceDocumentExt.ServiceOrder

  association [0..1] to C_SrvcDocBPContactCardQuickVw as _SrvcDocBPSoldToParty  on  $projection.SoldToParty = _SrvcDocBPSoldToParty.BusinessPartner

  association [0..*] to I_ServiceDocumentLongText     as _ServiceDocLongText    on  $projection.ServiceObjectType           = _ServiceDocLongText.ServiceObjectType
                                                                                and $projection.ServiceDocument             = _ServiceDocLongText.ServiceDocument
                                                                                and _ServiceDocLongText.ServiceDocumentItem is initial
                                                                                and _ServiceDocLongText.TextObjectCategory  = 'CRM_ORDERH'

  association [0..1] to I_StatusObjectWithUUID        as _StatusObjectWithUUID  on  $projection.ServiceDocumentUUID = _StatusObjectWithUUID.StatusObjectUUID

  association [0..*] to I_CustMgmtPartner             as _CustMgmtPartner       on  $projection.ServiceDocument           = _CustMgmtPartner.CustMgmtDocument
                                                                                and $projection.ServiceObjectType         = _CustMgmtPartner.CustMgmtObjectType
                                                                                and _CustMgmtPartner.CustMgmtDocumentItem = '000000'



  association [0..*] to I_SrvcDocHeaderLongText       as _SrvcDocHeaderLongText on  $projection.ServiceObjectType   = _SrvcDocHeaderLongText.ServiceObjectType
                                                                                and $projection.ServiceDocument     = _SrvcDocHeaderLongText.ServiceDocument
                                                                                and _SrvcDocHeaderLongText.Language = $session.system_language






{
      // Header Keys
      @ObjectModel.foreignKey.association: '_ServiceObjType'
  key ServiceObjectType,
      @ObjectModel.text.element: 'ServiceDocumentDescription'
  key ServiceDocument,

      // Header Details
      ServiceDocumentUUID,
      ServiceDocumentCharUUID,
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      ServiceDocumentType,
      @Semantics.text: true
      ServiceDocumentDescription,
      Language,
      PostingDate,
      ServiceDocumentTemplateType,
      ServiceDocCreationDateTime,
      ServiceDocChangedDateTime,
      @Semantics.systemDate.createdAt: true
      cast( tstmp_to_dats( ServiceDocCreationDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' )   as crms4_created_on preserving type ) as ServiceDocumentCreationDate,
      @Semantics.systemDate.lastChangedAt: true
      cast( tstmp_to_dats( ServiceDocChangedDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' )   as crms4_changed_on preserving type ) as ServiceDocumentChangedDate,
      //      @Semantics.systemDate.createdAt: true
      //      cast( cast(substring( cast(ServiceDocCreationDateTime as abap.char(30)) , 1 , 8)
      //                            as abap.dats(8))  as crms4_created_on ) as ServiceDocumentCreationDate,
      //      @Semantics.systemDate.lastChangedAt: true
      //      cast( cast(substring( cast(ServiceDocChangedDateTime as abap.char(30)) , 1 , 8)
      //                            as abap.dats(8))  as crms4_changed_on ) as ServiceDocumentChangedDate,
      ServiceDocumentCreatedByUser,
      ServiceDocumentChangedByUser,
      PricingDocument,
      PricingProcedure,
      RefBusinessSolutionOrder,
      SrvcDocIsMaintServiceOrder,

      // Activity
      @ObjectModel.foreignKey.association: '_ActivityCategory'
      BusinessActivityCategory,
      @ObjectModel.foreignKey.association: '_ServiceDocumentPriority'
      ServiceDocumentPriority,

      // Cumulate Extension
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocNetAmount,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocGrossAmount,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocTaxAmount,

      // Partner Details
      @ObjectModel.foreignKey.association: '_SoldToParty'
      SoldToParty,
      @ObjectModel.foreignKey.association: '_SoldToPartyCountry'
      SoldToPartyCountry,
      @ObjectModel.foreignKey.association: '_SoldToPartyRegion'
      SoldToPartyRegion,
      @ObjectModel.foreignKey.association: '_ServiceTeam'
      ServiceTeam,
      @ObjectModel.foreignKey.association: '_RespEmployee'
      ResponsibleEmployee,
      @ObjectModel.foreignKey.association: '_ServiceEmployee'
      ServiceEmployee,
      @ObjectModel.foreignKey.association: '_ContactPerson'
      ContactPerson,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      ShipToParty,
      @ObjectModel.foreignKey.association: '_BillToParty'
      BillToParty,
      @ObjectModel.foreignKey.association: '_PayerParty'
      PayerParty,

      // Dates
      RequestedServiceStartDateTime,
      RequestedServiceEndDateTime,
      ServiceContractStartDateTime,
      ServiceContractEndDateTime,
      SrvcContrEarliestStartDateTime,
      SrvcContrLatestEndDateTime,
      SrvcQtanValidityStartDateTime,
      SrvcQtanValidityEndDateTime,
      SrvcDocTmplValdtyStartDateTime,
      SrvcDocTmplValdtyEndDateTime,
      SrvcDocTemplateSearchTermText,

      cast( tstmp_to_dats( RequestedServiceStartDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' )  as crms4_created_on preserving type )  as RequestedServiceStartDate,
      cast( tstmp_to_dats( RequestedServiceEndDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' )  as crms4_changed_on preserving type )  as RequestedServiceEndDate,
      cast( tstmp_to_dats( ServiceContractStartDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' )  as crms4_created_on preserving type )  as ServiceContractStartDate,
      cast( tstmp_to_dats( ServiceContractEndDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' )  as crms4_changed_on preserving type )  as ServiceContractEndDate,
      cast( tstmp_to_dats( SrvcQtanValidityStartDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' )  as crms4_created_on preserving type )  as SrvcQuotationValidityStartDate,
      cast( tstmp_to_dats( SrvcQtanValidityEndDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' )  as crms4_changed_on preserving type )  as SrvcQuotationValidityEndDate,

      //      cast( cast(substring( cast(RequestedServiceStartDateTime as abap.char(30)) , 1 , 8)
      //                            as abap.dats(8))  as crms4_created_on ) as RequestedServiceStartDate,
      //      cast( cast(substring( cast(RequestedServiceEndDateTime as abap.char(30)) , 1 , 8)
      //                            as abap.dats(8))  as crms4_changed_on ) as RequestedServiceEndDate,
      //
      //      cast( cast(substring( cast(ServiceContractStartDateTime as abap.char(30)) , 1 , 8)
      //                       as abap.dats(8))  as crms4_created_on )      as ServiceContractStartDate,
      //      cast( cast(substring( cast(ServiceContractEndDateTime as abap.char(30)) , 1 , 8)
      //                       as abap.dats(8))  as crms4_changed_on )      as ServiceContractEndDate,
      //
      //      cast( cast(substring( cast(SrvcQtanValidityStartDateTime as abap.char(30)) , 1 , 8)
      //                            as abap.dats(8))  as crms4_created_on ) as SrvcQuotationValidityStartDate,
      //      cast( cast(substring( cast(SrvcQtanValidityEndDateTime as abap.char(30)) , 1 , 8)
      //                            as abap.dats(8))  as crms4_changed_on ) as SrvcQuotationValidityEndDate,

      // Pricing Parameter Set
      @ObjectModel.foreignKey.association: '_PaymentTerms'
      PaymentTerms,
      @ObjectModel.foreignKey.association: '_PaymentMethod'
      PaymentMethod,
      @ObjectModel.foreignKey.association: '_SrvcSEPAMandateRelevance'
      SrvcSEPAMandateRelevance,
      SEPAMandate,
      @ObjectModel.foreignKey.association: '_TaxDepartureCountry'
      TaxDepartureCountry,
      @ObjectModel.foreignKey.association: '_VATRegistrationCountry'
      VATRegistrationCountry,
      CustomerTaxClassification1,
      CustomerTaxClassification2,
      CustomerTaxClassification3,
      CustomerTaxClassification4,
      CustomerTaxClassification5,
      CustomerTaxClassification6,
      CustomerTaxClassification7,
      CustomerTaxClassification8,
      CustomerTaxClassification9,

      WBSElementInternalID,

      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      @Semantics.currencyCode:true
      TransactionCurrency,

      // Sales Set
      PurchaseOrderByCustomer,
      CustomerPurchaseOrderDate,
      @ObjectModel.foreignKey.association: '_SrvcDocumentRejectionReason'
      ServiceDocumentRejectionReason,
      @ObjectModel.foreignKey.association: '_Region'
      Region,

      // Status
      @ObjectModel.foreignKey.association: '_SrvcDocLifecycleStatus'
      ServiceDocumentStatus,
      @ObjectModel.foreignKey.association: '_ServiceDocHasError'
      ServiceDocumentHasError,
      @ObjectModel.foreignKey.association: '_ServiceDocBillingStatus'
      ServiceDocBillingStatus,
      @ObjectModel.foreignKey.association: '_SrvcDocIsRelForBillgSts'
      ServiceDocIsReleasedForBilling,
      @ObjectModel.foreignKey.association: '_ServiceDocumentIsOpen'
      ServiceDocumentIsOpen,
      @ObjectModel.foreignKey.association: '_SrvcDocTransferStatus'
      SrvcDocTransferStatus,
      @ObjectModel.foreignKey.association: '_SrvcDocIsQuotation_2'
      ServiceDocumentIsQuotation,
      ServiceDocumentIsReleased,
      ServiceDocumentIsRejected,
      ServiceConfirmationIsFinal,
      @ObjectModel.foreignKey.association: '_ServiceContractCanclnSts'
      ServiceContractCanclnSts,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'SrvcDocExecutionStatus'
      MaintSrvcOrdExecutionStatus,
      @ObjectModel.foreignKey.association: '_SrvcDocExecutionStatus'
      SrvcDocExecutionStatus,
      SrvcDocDeliveryStatus,
      SrvcDocGoodsIssueStatus,
      SrvcDocRejectionStatus,
      // Organizational Unit Set
      @ObjectModel.foreignKey.association: '_SalesOrganizationOrgUnit_2'
      SalesOrganizationOrgUnitID,
      @ObjectModel.foreignKey.association: '_SalesOfficeOrgUnit_2'
      SalesOfficeOrgUnitID,
      @ObjectModel.foreignKey.association: '_SalesGroupOrgUnit_2'
      SalesGroupOrgUnitID,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      @ObjectModel.foreignKey.association: '_Division'
      Division,
      @ObjectModel.foreignKey.association: '_ServiceOrganizationOrgUnit_2'
      ServiceOrganization,
      @ObjectModel.foreignKey.association: '_RespSrvcOrganizationOrgUnit_2'
      ResponsibleServiceOrganization,
      @ObjectModel.foreignKey.association: '_EnterpriseServiceOrg'
      EnterpriseServiceOrganization,

      // Organizational units with the S/4 SD codes
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesOffice,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      SalesGroup,

      // Service Organizational Units with S/4 Code
      RespyMgmtServiceTeam,

      // Billing Set
      @ObjectModel.foreignKey.association: '_BillingBlockReason'
      BillingBlockReason,

      // Subject
      ServiceReasonSchema,
      ServiceReasonCategory,
      ServiceDefectSchema,
      ServiceDefectCategory,

      // Dates
      ServiceFirstResponseByDateTime,
      ServiceDueByDateTime,
      ErlstRequestedDeliveryDateTime,

      // Service Request
      RecommendedServicePriority,
      ServiceDocumentUrgency,
      ServiceDocumentImpact,
      ServiceEscalationLevel,
      @ObjectModel.foreignKey.association: '_ServiceDocProblemCategory'
      ServiceDocumentProblemCategory,
      @ObjectModel.foreignKey.association: '_ServiceRisk'
      ServiceRisk,

      // Cancel Header
      ServiceDocumentCanclnParty,
      ServiceDocumentCanclnReason,

      // In-House Repair Reference
      ReferenceInHouseRepair,
      ReferenceInHouseRepairItem,
      RefInHouseRepairIsExisting,

      // Credit Status
      @ObjectModel.foreignKey.association: '_SrvcDocCreditStatus'
      SrvcDocCreditStatus,

      // Baseline Cost Posting Status
      SrvcDocBslnCostPostgStatus,

      // Continuous Cost Calculation Status
      SrvcDocContinuousCostStatus,

      //Shipping
      ShippingCondition,

      //Pricing Group
      CustomerPriceGroup,

      //Contract Account
      ContractAccount,

      SrvcDocAcctAssgmtObjectType,
      SrvcDocAcctAssgmtObject,
      DeliveryPriority,
      IncotermsPart1,
      IncotermsPart2,
      // Status profile
      _StatusObjectWithUUID.StatusProfile,

      // Associations to next level
      // Header Keys Assocations
      _ServiceObjType,

      // Header Details Assocations
      _ServiceDocumentType,

      // Partner Details Associations
      _SoldToParty,
      _RespEmployee,
      _ServiceTeam,
      _ServiceEmployee,
      _ContactPerson,
      _ShipToParty,
      _BillToParty,
      _PayerParty,
      _SoldToPartyToCustomer,
      _SoldToPartyCountry,
      _SoldToPartyRegion,
      _ServiceTeamHeader,

      // Status Assocations
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SrvcDocLifecycleStatus'
      _ServiceDocumentStatus,
      _SrvcDocLifecycleStatus,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocBillingStatus,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SrvcDocIsRelForBillgSts,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocumentIsOpen,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocHasError,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceContractCanclnSts,
      _SrvcDocTransferStatus,

      // Billing Set Associations
      _BillingBlockReason,

      // Activity Associations
      _ActivityCategory,
      _ServiceDocumentPriority,

      // Pricing Parameter Set
      _TransactionCurrency,
      _PaymentTerms,
      _SrvcSEPAMandateRelevance,
      _FixedPrice,
      _TaxDepartureCountry,
      _VATRegistrationCountry,

      // Organization Unit Set Assocations
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesOrganizationOrgUnit_2'
      _SalesOrganizationOrgUnit,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SalesOrganizationOrgUnit_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesOfficeOrgUnit_2'
      _SalesOfficeOrgUnit,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SalesOfficeOrgUnit_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesGroupOrgUnit_2'
      _SalesGroupOrgUnit,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SalesGroupOrgUnit_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ServiceOrganizationOrgUnit_2'
      _ServiceOrganizationOrgUnit,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceOrganizationOrgUnit_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_RespSrvcOrganizationOrgUnit_2'
      _RespSrvcOrganizationOrgUnit,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _RespSrvcOrganizationOrgUnit_2,
      _SalesOrganization,
      _SalesOffice,
      _SalesGroup,
      _DistributionChannel,
      _Division,
      _EnterpriseServiceOrg,

      // Sales Set Assocaition
      _Region,
      _SrvcDocumentRejectionReason,

      // Service Request Association
      _ServiceRisk,
      _ServiceDocProblemCategory,

      // Association to Service Document Item
      _ServiceDocItem,

      // Association to Service Document Enhanced views
      _ServiceDocRefObj,
      _ServiceDocPredecessor,
      _ServiceDocSuccessor,

      //Association to long text view
      _ServiceDocLongText,

      @UI.hidden: true
      _SrvcDocBPSoldToParty,

      // Credit Status association
      _SrvcDocCreditStatus,

      // Baseline Cost Posting Status
      _SrvcDocBslnCostPostgStatus,

      // Continuous Cost Calculation Status
      _SrvcDocContinuousCostStatus,

      _PaymentMethod,


      // Service Order Execution Status
      _SrvcDocExecutionStatus,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SrvcDocIsQuotation_2'
      _SrvcDocIsQuotation,

      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SrvcDocIsQuotation_2,

      _SrvcDocHeaderLongText,
      _CustMgmtPartner
}
```
