---
name: I_SERVICEDOCUMENTITEMENHCD
description: "Service DocumentUMENTITEMENHCD"
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
  - item-level
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICEDOCUMENTITEMENHCD

**Service DocumentUMENTITEMENHCD**

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
| `ServiceDocumentItem` | ✓ | |  |  | `NUMC(6)` | Shortened Item Number in Document |
| `ServiceDocumentDescription` |  | |  |  | `CHAR(40)` | Transaction Description |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `ServiceDocumentItemPriority` |  | |  |  | `NUMC(1)` | Activity Priority |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date for a Business Transaction |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Service Rendered Date |
| `SrvcDocItmPostingDateTime` |  | |  |  | `DEC(15)` | Posting Date |
| `SrvcDocItmValdtyStartDateTime` |  | |  |  | `DEC(15)` | Time Dependency: Validity Start Date |
| `SrvcDocItmValdtyEndDateTime` |  | |  |  | `DEC(15)` | Time Dependency: Validity End Date |
| `ServiceDocumentItemUUID` |  | |  |  | `RAW(16)` | GUID of a CRM Order Object |
| `ServiceDocumentItemCharUUID` |  | |  |  | `CHAR(32)` | 32 Character CRM Object GUID (Converted) |
| `ServiceDocumentItemObjectType` |  | |  |  | `CHAR(10)` | CRM Item Object Type |
| `ServiceDocumentUUID` |  | |  |  | `RAW(16)` | GUID of a CRM Order Object |
| `ParentServiceDocumentItemUUID` |  | |  |  | `RAW(16)` | GUID of a CRM Order Object |
| `ServiceDocumentItemDescription` |  | |  |  | `CHAR(40)` | Product Description |
| `Language` |  | |  |  | `LANG(1)` | Short Text Language for an Item |
| `ServiceDocumentTemplateType` |  | |  |  | `CHAR(1)` | Template Type of CRM Transaction |
| `ServiceDocItemCreationDateTime` |  | |  |  | `DEC(15)` | Created At |
| `ServiceDocItemChangedDateTime` |  | |  |  | `DEC(15)` | Changed At |
| `ServiceDocItemCreationDate` |  | |  | `cast( tstmp_to_dats( ServiceDocItemCreationDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as crms4_created_on preserving type )` | `DATS(8)` | Created On |
| `ServiceDocItemChangedDate` |  | |  | `cast( tstmp_to_dats( ServiceDocItemChangedDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as crms4_changed_on preserving type )` | `DATS(8)` | Changed On |
| `ServiceDocItemCreatedByUser` |  | |  |  | `CHAR(12)` | User that Created the Transaction |
| `ServiceDocItemChangedByUser` |  | |  |  | `CHAR(12)` | Transaction Last Changed By |
| `OriginallyRequestedProduct` |  | |  |  | `CHAR(54)` | Product Name Entered |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ServiceDocItemCategory` |  | |  |  | `CHAR(4)` | Item Category |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ResponsibleCostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ProfitCenterDeterminationDate` |  | |  |  | `DATS(8)` | Date |
| `RefBusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Reference Solution Order ID |
| `RefBusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Item Number in Referenced Solution Order |
| `BusSolnOrdItemBundleProduct` |  | |  |  | `CHAR(40)` | Product ID of Bundle Item |
| `BusSolnOrdItemBundleItem` |  | |  |  | `NUMC(6)` | Bundle Item Number in Document |
| `SrvcDocItmRequestedQuantity` |  | |  |  | `QUAN(15)` | Ordered Quantity |
| `InvoiceAmountInInvoiceDocCrcy` |  | |  |  | `CURR(19)` | Invoice Value |
| `InvoiceQuantity` |  | |  |  | `QUAN(15)` | Invoiced Quantity |
| `SrvcDocItmDeliveredQuantity` |  | |  |  | `QUAN(15)` | Delivered Quantity |
| `SrvcDocItmReleasedQuantity` |  | |  |  | `QUAN(15)` | Released Quantity |
| `CumulativeConfirmedQuantity` |  | |  |  | `QUAN(13)` | CRM: Confirmed Quantity |
| `SrvcDocItmReldAmtInTransCrcy` |  | |  |  | `CURR(19)` | Released Value |
| `SrvcDocItemCumulatedNetAmount` |  | |  |  | `CURR(15)` | Cumulated Net Value |
| `SrvcDocItmOrdToBaseQtyNmrtr` |  | |  |  | `INT4(10)` | Numerator (factor) for conversion trans. quantity in BME |
| `SrvcDocItmOrdToBaseQtyDnmntr` |  | |  |  | `INT4(10)` | Denominator (factor) for conversion trans. quantity in BME |
| `OrderToBaseQuantityExponent` |  | |  |  | `INT2(5)` | 10 Exponent for Quantity Conversion |
| `ServiceDocItemQuantityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure in Which the Product Is Sold |
| `SrvcDocItemBaseQuantityUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure of Product |
| `BillingDateTime` |  | |  |  | `DEC(15)` | Billing Date for Billing Index and Printout |
| `BillingDocCreationDateTime` |  | |  |  | `DEC(15)` | Billing Document Creation Date |
| `BillingPlanTimeZone` |  | |  |  | `CHAR(6)` | Time Zone of Billing Plan Set |
| `BillingPriceSourceName` |  | |  |  | `CHAR(15)` | Source of price in service confirmation |
| `DocumentDescription` |  | |  | `cast( '' as abap.char( 16 ) )` | `CHAR(16)` |  |
| `SoldToPartyCountry` |  | |  |  | `CHAR(3)` | Country/Region |
| `SoldToPartyRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-To Party |
| `ServiceTeam` |  | |  |  | `CHAR(10)` | Service Team |
| `ResponsibleEmployee` |  | |  |  | `CHAR(10)` | Employee Responsible |
| `ServiceEmployee` |  | |  |  | `CHAR(10)` | Executing Service Employee |
| `ContactPerson` |  | |  |  | `CHAR(10)` | Customer Contact Person |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-To Party |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-To Party |
| `ServiceDocumentItemStatus` |  | |  |  | `CHAR(4)` | Life Cycle Status |
| `ServiceDocumentItemHasError` |  | |  |  | `CHAR(1)` | Error Status |
| `SrvcDocItmIsReleasedForBilling` |  | |  |  | `CHAR(1)` | Billing Release Status |
| `ServiceDocItemBillingStatus` |  | |  |  | `CHAR(1)` | Billing Status |
| `ServiceDocumentItemIsOpen` |  | |  |  | `CHAR(1)` | Status "Open" |
| `SrvcDocItmDeliveryStatus` |  | |  |  | `CHAR(1)` | Delivery Status |
| `SrvcDocItmGoodsIssueStatus` |  | |  |  | `CHAR(1)` | Goods Issue Status |
| `ServiceDocumentItemIsReleased` |  | |  |  | `CHAR(1)` | Release Status |
| `ServiceDocumentItemIsRejected` |  | |  |  | `CHAR(1)` | Cancellation Status |
| `SrvcDocItemIsWithdrawn` |  | |  |  | `CHAR(1)` |  |
| `SrvcDocItemConcurStatus` |  | |  |  | `CHAR(1)` | Concur Status |
| `ServiceDocumentItemIsQuotation` |  | |  |  | `CHAR(1)` | Quotation Status |
| `SrvcDocItemTransferStatus` |  | |  |  | `CHAR(1)` | Transfer Status |
| `MaintSrvcOrdExecutionStatus` |  | |  |  | `CHAR(2)` | Execution Status |
| `SrvcDocItemExecutionStatus` |  | |  |  | `CHAR(2)` | Execution Status |
| `ServiceDocumentItemQuantity` |  | |  |  | `QUAN(13)` | CRM: Order Quantity |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `StatisticsCurrency` |  | |  |  | `CUKY(5)` | Reference Currency |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `ExchangeRateDate` |  | |  |  | `DATS(8)` | Exchange Rate Date |
| `AccountingExchangeRate` |  | |  |  | `DEC(9)` | Exchange Rate |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `SrvcSEPAMandateRelevance` |  | |  |  | `CHAR(1)` | Indicator for SEPA-Relevant Transactions |
| `SEPAMandate` |  | |  |  | `CHAR(35)` | Unique Reference to Mandate per Payment Recipient |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `BillableControl` |  | |  |  | `CHAR(2)` | Accounting Indicator |
| `VATRegistrationCountry` |  | |  |  | `CHAR(3)` | Tax Destination Country/Region |
| `ProductTaxClassification1` |  | |  |  | `CHAR(1)` | Tax Classification of Material |
| `ProductTaxClassification2` |  | |  |  | `CHAR(1)` | Tax Classification 2 for Material |
| `ProductTaxClassification3` |  | |  |  | `CHAR(1)` | Tax Classification 3 for Material |
| `ProductTaxClassification4` |  | |  |  | `CHAR(1)` | Tax Classification 4 for Material |
| `ProductTaxClassification5` |  | |  |  | `CHAR(1)` | Tax Classification 5 for Material |
| `ProductTaxClassification6` |  | |  |  | `CHAR(1)` | Tax Classification 6 for Material |
| `ProductTaxClassification7` |  | |  |  | `CHAR(1)` | Tax Classification 7 for Material |
| `ProductTaxClassification8` |  | |  |  | `CHAR(1)` | Tax Classification 8 for Material |
| `ProductTaxClassification9` |  | |  |  | `CHAR(1)` | Tax Classification 9 for Material |
| `ServiceDocumentItemNetAmount` |  | |  |  | `CURR(15)` | Net Value |
| `ServiceDocumentItemTaxAmount` |  | |  |  | `CURR(15)` | Tax amount in document currency |
| `ServiceDocItemGrossAmount` |  | |  |  | `CURR(15)` | Gross Order Value in PO Currency |
| `ServiceDocumentItemNetPrice` |  | |  |  | `CURR(15)` | Net Price |
| `BillingBlockReason` |  | |  |  | `CHAR(2)` | Business Partner: Billing Block Reason |
| `SrvcDocItmBillingRelevance` |  | |  |  | `CHAR(1)` | Billing Relevance |
| `DynItemProcessorPrfl` |  | |  |  | `CHAR(8)` | Dynamic Item Processor Profile |
| `ProductGroup` |  | |  |  | `CHAR(2)` | Material Price Group |
| `SrvcMaterialPricingGroup` |  | |  |  | `CHAR(2)` | Material Price Group |
| `MaterialPricingGroup_2` |  | |  |  | `CHAR(2)` | Material Price Group |
| `ProductGroup1` |  | |  |  | `CHAR(3)` | Material Group 1 |
| `ProductGroup2` |  | |  |  | `CHAR(3)` | Material Group 2 |
| `ProductGroup3` |  | |  |  | `CHAR(3)` | Material Group 3 |
| `ProductGroup4` |  | |  |  | `CHAR(3)` | Material Group 4 |
| `ProductGroup5` |  | |  |  | `CHAR(3)` | Material Group 5 |
| `ProductHierarchy` |  | |  |  | `CHAR(20)` | Product Category |
| `Industry` |  | |  |  | `CHAR(4)` | Industry Sector |
| `PurchaseOrderByCustomer` |  | |  |  | `CHAR(35)` | Sold-To Party's External Reference Number |
| `PurchaseOrderByShipToParty` |  | |  |  | `CHAR(35)` | Ship-To Party's External Reference Number |
| `ServiceDocItemRejectionReason` |  | |  |  | `CHAR(2)` | Cancellation Reason Code |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `AdditionalCustomerGroup1` |  | |  |  | `CHAR(3)` | Customer Group 1 |
| `AdditionalCustomerGroup2` |  | |  |  | `CHAR(3)` | Customer Group 2 |
| `AdditionalCustomerGroup3` |  | |  |  | `CHAR(3)` | Customer Group 3 |
| `AdditionalCustomerGroup4` |  | |  |  | `CHAR(3)` | Customer Group 4 |
| `AdditionalCustomerGroup5` |  | |  |  | `CHAR(3)` | Customer Group 5 |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `ServiceSchema1Category1UUID` |  | |  |  | `RAW(16)` | Category GUID 1- schema 1 |
| `ServiceSchema1Category2UUID` |  | |  |  | `RAW(16)` | Category GUID 2- schema 1 |
| `ServiceSchema1Category3UUID` |  | |  |  | `RAW(16)` | Category GUID 3- schema 1 |
| `ServiceSchema1Category4UUID` |  | |  |  | `RAW(16)` | Category GUID 4- schema 1 |
| `ServiceSchema1Category5UUID` |  | |  |  | `RAW(16)` | Category GUID 5- schema 1 |
| `ServiceSchema1Category6UUID` |  | |  |  | `RAW(16)` | Category GUID 6- schema 1 |
| `ServiceSchema1Category7UUID` |  | |  |  | `RAW(16)` | Category GUID 7- schema 1 |
| `ServiceSchema1Category8UUID` |  | |  |  | `RAW(16)` | Category GUID 8- schema 1 |
| `ServiceSchema1Category9UUID` |  | |  |  | `RAW(16)` | Category GUID 9- schema 1 |
| `ServiceSchema1Category10UUID` |  | |  |  | `RAW(16)` | Category GUID 10- schema 1 |
| `SrvcCatztnSchema1` |  | |  |  | `CHAR(40)` | Coherent Cat. - Aspect ID |
| `SrvcCatztnSchemaCategory1` |  | |  |  | `CHAR(40)` | Coherent Cat. - Category ID |
| `ServiceSchema2Category1UUID` |  | |  |  | `RAW(16)` | Category GUID 1- schema 2 |
| `ServiceSchema2Category2UUID` |  | |  |  | `RAW(16)` | Category GUID 2- schema 2 |
| `ServiceSchema2Category3UUID` |  | |  |  | `RAW(16)` | Category GUID 3- schema 2 |
| `ServiceSchema2Category4UUID` |  | |  |  | `RAW(16)` | Category GUID 4- schema 2 |
| `ServiceSchema2Category5UUID` |  | |  |  | `RAW(16)` | Category GUID 5- schema 2 |
| `ServiceSchema2Category6UUID` |  | |  |  | `RAW(16)` | Category GUID 6- schema 2 |
| `ServiceSchema2Category7UUID` |  | |  |  | `RAW(16)` | Category GUID 7- schema 2 |
| `ServiceSchema2Category8UUID` |  | |  |  | `RAW(16)` | Category GUID 8- schema 2 |
| `ServiceSchema2Category9UUID` |  | |  |  | `RAW(16)` | Category GUID 9- schema 2 |
| `ServiceSchema2Category10UUID` |  | |  |  | `RAW(16)` | Category GUID 10- schema 2 |
| `SrvcCatztnSchema2` |  | |  |  | `CHAR(40)` | Coherent Cat. - Aspect ID |
| `SrvcCatztnSchemaCategory2` |  | |  |  | `CHAR(40)` | Coherent Cat. - Category ID |
| `SettlementPeriodRuleUUID` |  | |  |  | `RAW(16)` | Rule for Determining the Period Date |
| `BillingPlanBillingDateRuleUUID` |  | |  |  | `RAW(16)` | Rule for Determining the Next Billing Date |
| `BillingPlanPriceDateRule` |  | |  |  | `CHAR(1)` | Rule for Determining the Pricing Date |
| `BillingPlanIsFinalized` |  | |  |  | `CHAR(1)` | Billing Plan Is Finalized |
| `SalesOrganizationOrgUnitID` |  | |  |  | `CHAR(14)` | Sales Organization ID |
| `SalesOfficeOrgUnitID` |  | |  |  | `CHAR(14)` | Sales Office |
| `SalesGroupOrgUnitID` |  | |  |  | `CHAR(14)` | Sales Group |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `ResponsibleSalesOrganization` |  | |  |  | `CHAR(14)` | Organizational Unit (Sales) |
| `ServiceOrganization` |  | |  |  | `CHAR(14)` | Service Organization |
| `ResponsibleServiceOrganization` |  | |  |  | `CHAR(14)` | Organizational Unit (Service) |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `RespyMgmtServiceTeam` |  | |  |  | `NUMC(8)` | Service Team (Responsibility Management) |
| `EnterpriseServiceOrganization` |  | |  |  | `CHAR(4)` | Enterprise Service Organization |
| `EnterpriseProjectServiceOrg` |  | |  |  | `CHAR(5)` | Service Organization (Project) |
| `RequestedServiceStartDateTime` |  | |  |  | `DEC(15)` | Service Request Start Date |
| `RequestedServiceEndDateTime` |  | |  |  | `DEC(15)` | Service Request Due Date |
| `ServiceContrItemStartDateTime` |  | |  |  | `DEC(15)` | Contract Start date |
| `ServiceContrItemEndDateTime` |  | |  |  | `DEC(15)` | Contract End Date |
| `RequestedServiceStartDate` |  | |  | `tstmp_to_dats( RequestedServiceStartDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' )` | `DATS(8)` |  |
| `RequestedServiceEndDate` |  | |  | `tstmp_to_dats( RequestedServiceEndDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' )` | `DATS(8)` |  |
| `ServiceContractItemStartDate` |  | |  | `tstmp_to_dats( ServiceContrItemStartDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' )` | `DATS(8)` |  |
| `ServiceContractItemEndDate` |  | |  | `tstmp_to_dats( ServiceContrItemEndDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' )` | `DATS(8)` |  |
| `ServiceFirstResponseByDateTime` |  | |  |  | `DEC(15)` | First Response By |
| `ServiceFirstResponseByDate` |  | |  | `tstmp_to_dats( ServiceFirstResponseByDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' )` | `DATS(8)` |  |
| `SrvcDocItemSLADueByDateTime` |  | |  |  | `DEC(15)` | Due By |
| `SrvcDocItemSLADueByDate` |  | |  | `tstmp_to_dats( SrvcDocItemSLADueByDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' )` | `DATS(8)` |  |
| `ActualServiceStartDateTime` |  | |  |  | `DEC(15)` | Service Actual Start Date |
| `ActualServiceEndDateTime` |  | |  |  | `DEC(15)` | Service Actual End Date |
| `SrvcContrItemRnwlDuration` |  | |  |  | `QUAN(13)` | Unit for Auto Renewal Period |
| `SrvcContrItemRnwlDurationUnit` |  | |  |  | `UNIT(3)` | UOM for Auto Renewal Period |
| `SrvcContrItemExtensionDuration` |  | |  |  | `QUAN(13)` | Unit for Contract Extension |
| `SrvcContrItemExtnDurationUnit` |  | |  |  | `UNIT(3)` | UOM for Contract Extension |
| `PlannedServiceStartDateTime` |  | |  |  | `DEC(15)` | Service Planned From Date |
| `PlannedServiceEndDateTime` |  | |  |  | `DEC(15)` | Service Planned To Date |
| `PlannedServiceStartDate` |  | |  | `tstmp_to_dats( PlannedServiceStartDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' )` | `DATS(8)` |  |
| `PlannedServiceEndDate` |  | |  | `tstmp_to_dats( PlannedServiceEndDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' )` | `DATS(8)` |  |
| `SrvcDocItmTmeSliceStrtDteTme` |  | |  |  | `DEC(15)` | Start of Contract Time Slice |
| `SrvcDocItmTmeSliceEndDteTme` |  | |  |  | `DEC(15)` | End of Contract Time Slice |
| `SrvcContrItemRenewalDateTime` |  | |  |  | `DEC(15)` | Start Date of Auto Renewal Period |
| `ActualServiceDuration` |  | |  |  | `QUAN(7)` | Confirmed Duration |
| `ActualServiceDurationUnit` |  | |  |  | `UNIT(3)` | Time Unit for Confirmed Duration |
| `ServiceWorkDuration` |  | |  |  | `DEC(8)` | Work Duration of Service Transaction |
| `ServiceWorkDuration_2` |  | |  |  | `DEC(13)` | Work Duration 2 of Service Transaction |
| `ServiceWorkDurationUnit` |  | |  |  | `CHAR(2)` | Work Duration Unit of Service Transaction |
| `SrvcOrderConfirmationRelevance` |  | |  |  | `CHAR(1)` | Relevant for Confirmation |
| `ServiceTransactionChargeType` |  | |  |  | `CHAR(4)` | Service Type |
| `SrvcTransactionValuationType` |  | |  |  | `CHAR(6)` | Valuation Type |
| `ResponseProfile` |  | |  |  | `CHAR(10)` | Response Profile |
| `ServiceProfile` |  | |  |  | `CHAR(10)` | Service Profile |
| `ServiceDuration` |  | |  |  | `QUAN(13)` | Duration |
| `ServiceDurationUnit` |  | |  |  | `UNIT(3)` | Unit for Duration of Work |
| `TimeSheetOvertimeCategory` |  | |  |  | `CHAR(4)` | Overtime Category |
| `MasterWarranty` |  | |  |  | `CHAR(20)` | Master warranty number |
| `ContractAccount` |  | |  |  | `CHAR(12)` | Contract Account Number |
| `ItemOrderProbabilityInPercent` |  | |  |  | `NUMC(3)` | Order Probability |
| `QuotationIsAccepted` |  | |  |  | `CHAR(1)` | Acceptance Status |
| `ConfigurationNumber` |  | |  |  | `NUMC(18)` | Configuration (Internal Object Number) |
| `IncotermsPart1` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsPart2` |  | |  |  | `CHAR(28)` | Incoterms (Part 2) |
| `DeliveryPriority` |  | |  |  | `NUMC(2)` | Delivery Priority |
| `OrderCombinationIsAllowed` |  | |  |  | `CHAR(1)` | Indicator: Order Combination |
| `PartialDeliveryIsAllowed` |  | |  |  | `CHAR(1)` | Delivery Control (Item) |
| `CABillgCycle` |  | |  |  | `CHAR(4)` | Billing Cycle |
| `RevenueAccountingReference` |  | |  |  | `CHAR(30)` | Revenue Accounting Reference ID |
| `RevenueAccountingRefType` |  | |  |  | `CHAR(3)` | Revenue Accounting Reference Type |
| `ItemGrossWeight` |  | |  |  | `QUAN(15)` | Gross Weight |
| `ItemNetWeight` |  | |  |  | `QUAN(15)` | Net Weight |
| `ItemWeightUnit` |  | |  |  | `UNIT(3)` | Unit of Weight |
| `ItemVolume` |  | |  |  | `QUAN(15)` | Volume Occupied by the Product per Volume Unit |
| `ItemVolumeUnit` |  | |  |  | `UNIT(3)` | Unit for the Volume of a Product |
| `MaterialPricingGroup` |  | |  |  | `CHAR(2)` | Customer Price Group |
| `CustomerPriceGroup` |  | |  |  | `CHAR(2)` | Customer Price Group |
| `DeliveryGroup` |  | |  |  | `NUMC(3)` | Delivery Group (Items are Delivered Together) |
| `DeliveryBlockReason` |  | |  |  | `CHAR(2)` | Business Partner: Delivery Block Reason |
| `RequestedDeliveryUTCDateTime` |  | |  | `RequestedDeliveryDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `ErlstConfirmedDeliveryDateTime` |  | |  |  | `DEC(15)` | First Confirmed Delivery Date for Item |
| `LtstConfirmedDeliveryDateTime` |  | |  |  | `DEC(15)` | Latest Confirmation Date for an Item |
| `RequestedDeliveryDate` |  | |  | `tstmp_to_dats( RequestedDeliveryDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' )` | `DATS(8)` |  |
| `SubscrpnOrdProdSelType` |  | |  |  | `CHAR(1)` | Product Selection Type |
| `SubscriptionContract` |  | |  |  | `CHAR(20)` | IS-T Contract Number |
| `SrvcTransChangeProcess` |  | |  |  | `CHAR(32)` | BTMF Process |
| `SrvcTransChangeProcessType` |  | |  |  | `CHAR(4)` | BTMF Process Type |
| `SrvcTransChgProcSourceItemUUID` |  | |  |  | `RAW(16)` | Contract Item Identifier |
| `CustMgmtMasterAgreement` |  | |  |  | `CHAR(10)` | Transaction ID |
| `CustMgmtMstrAgrmtItem` |  | |  |  | `NUMC(6)` | Shortened Item Number in Document |
| `SubscrpnContrActivationStatus` |  | |  |  | `CHAR(1)` | Activation Status of Subscription Order/Contract |
| `SubscrpnContrTimeSliceStatus` |  | |  |  | `CHAR(1)` | Status of Contract Time Slice |
| `SharingContractID` |  | |  |  | `CHAR(20)` | Reference to Sharing Contract |
| `CrsCatalogMappingVersionNumber` |  | |  |  | `NUMC(4)` | Version |
| `CustMgmtMstrAgrmtParentItem` |  | |  |  | `NUMC(6)` | Shortened Item Number in Document |
| `SubscrpnContractSharingGroupID` |  | |  |  | `CHAR(10)` | Sharing Group ID |
| `CAPartnerSettlementRule` |  | |  |  | `CHAR(4)` | Partner Settlement Rule |
| `ChangeProcessGroup` |  | |  |  | `CHAR(32)` | BTMF Process Group |
| `BusSolutionQtnItemIsPhased` |  | |  |  | `CHAR(1)` | Phase Indicator |
| `BusSolnQtnItmPhasedPrdcssrItem` |  | |  |  | `NUMC(6)` | Shortened Item Number in Document |
| `SubscriptionContractItem` |  | |  |  | `NUMC(6)` | Shortened Item Number in Document |
| `SrvcDocItemWithdrawalReason` |  | |  |  | `CHAR(2)` | Reason for Withdrawal of Subscription Contract |
| `SrvcDocItemRefundType` |  | |  |  | `CHAR(4)` | Refund Code for Withdrawal of Subscription Contract |
| `SrvcDocItmRecrrgChrgNetAmount` |  | |  |  | `CURR(15)` | Periodically charged values |
| `SubscrpnContrTrmsAreSpecified` |  | |  |  | `CHAR(1)` | Overwrite Default Terms |
| `MidBillgCycExprtnIsAllowed` |  | |  |  | `CHAR(1)` | Allow Mid-Bill-Cycle Expiration |
| `SrvcDocItmRecrrgChrgTaxAmount` |  | |  |  | `CURR(15)` | Periodically charged taxes |
| `SrvcDocItmRecrrgChrgGrossAmt` |  | |  |  | `CURR(15)` | Periodically charged values including taxes |
| `SrvcDocItmRecrrgChrgDuration` |  | |  |  | `DEC(13)` | Duration of a recurrence period |
| `SrvcDocItmRecrrgChrgDurnUnit` |  | |  |  | `CHAR(12)` | Time unit  of a recurrence period |
| `SubscriptionContractReference` |  | |  |  | `CHAR(10)` | Transaction ID |
| `SubscriptionBillingCycle` |  | |  |  | `CHAR(4)` | Billing Cycle |
| `SubscrpnBillgRatePlanCharUUID` |  | |  |  | `CHAR(32)` | Rate Plan ID |
| `SubscriptionContractExternalID` |  | |  |  | `CHAR(20)` | IS-T Contract Number |
| `SbscrShContrSvTrMtAgrItmUUID` |  | |  |  | `RAW(16)` | Sharing Order/Contract: Reference to Master Agreement |
| `SbscrShContrSvTrMtAgrItmCstPrd` |  | |  |  | `CHAR(40)` | Sharing Order/Contract: Reference to Master Agreement Prod. |
| `SvTrMtAgrItmIsFxdConfign` |  | |  |  | `CHAR(1)` |  |
| `SubscrpnContrItmBillgPlnCyc` |  | |  |  | `CHAR(4)` | Billing Plan Cycle |
| `SubscrpnOrdIsPending` |  | |  |  | `CHAR(1)` | Create Subscription as Pending |
| `NrOfBillgCyclesBilledTogether` |  | |  |  | `NUMC(2)` | Number of Cycles Billed Together |
| `ServiceDocumentItemCanclnParty` |  | |  |  | `CHAR(4)` | Cancelling Party |
| `ServiceDocumentItmCanclnReason` |  | |  |  | `CHAR(4)` | CRM Service : Reason for Cancellation |
| `SrvcDocItmCanclnProcedure` |  | |  |  | `CHAR(4)` | Cancellation Procedure |
| `ServiceDocumentRnwlDuration` |  | |  |  | `QUAN(13)` | Unit for Auto Renewal Period |
| `ServiceDocRnwlDurationUnit` |  | |  |  | `UNIT(3)` | UOM for Auto Renewal Period |
| `ServiceDocExtensionDuration` |  | |  |  | `QUAN(13)` | Unit for Contract Extension |
| `ServiceDocExtnDurationUnit` |  | |  |  | `UNIT(3)` | UOM for Contract Extension |
| `SrvcDocItemGracePeriod` |  | |  |  | `QUAN(13)` | Grace Period |
| `SrvcDocItemGracePeriodUnit` |  | |  |  | `UNIT(3)` | Unit of Grace Period |
| `SrvcDocItmGrcePerdEndDateTime` |  | |  |  | `DEC(15)` | End Date of Grace Period |
| `SbscrContrItmBizValdStrtDteTme` |  | |  |  | `DEC(15)` | Start Date of Business Validity |
| `SbscrContrItmBizValdEndDteTme` |  | |  |  | `DEC(15)` | End Date of Business Validity |
| `SubscrpnContrAutoRnwlIsActv` |  | |  |  | `CHAR(1)` | Auto-Renewal Indicator |
| `ReferenceInHouseRepair` |  | |  |  | `CHAR(10)` | Reference In-House Repair |
| `ReferenceInHouseRepairItem` |  | |  |  | `NUMC(6)` | Reference In-House Repair Item |
| `RefInHouseRepairIsExisting` |  | |  |  | `CHAR(1)` | Reference to In-House Repair Exists |
| `SrvcDocItemCreditStatus` |  | |  |  | `CHAR(1)` | Credit Status of Item |
| `SrvcDocItmBslnCostPostgStatus` |  | |  |  | `CHAR(1)` | Baseline Planned Cost and Revenue Item Status |
| `SrvcDocItmContinuousCostStatus` |  | |  |  | `CHAR(1)` | Ongoing Planned Cost and Revenue Status at Item Level |
| `SrvcDocItemIsUnplanned` |  | |  |  | `CHAR(1)` | Unplanned Item |
| `ShippingCondition` |  | |  |  | `CHAR(2)` | Shipping Conditions |
| `SrvcDocSubitemOrigin` |  | |  |  | `CHAR(2)` | Usage of Higher-Level Item |
| `SrvcDocItmAcctAssgmtObjectType` |  | |  |  | `CHAR(2)` | Obj.Type for Sett.Acc.Assgnmnt for Search Help or Cust.Exit |
| `SrvcDocItmAcctAssgmtObject` |  | |  |  | `CHAR(50)` | Settlement Account Assignment |
| `SrvcDocItmGoodsIssueQuantity` |  | |  |  | `QUAN(15)` | Goods Issue Quantity |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `SrvcDocItmPartReferenceItem` |  | |  |  | `NUMC(6)` | Shortened Item Number in Document |
| `SrvcDocItmApptRefObjectUUID` |  | |  |  | `RAW(16)` | GUID of a CRM Order Object |
| `SrvcDocItmApptReferenceItem` |  | |  |  | `NUMC(6)` | Shortened Item Number in Document |
| `SrvcDocItmRefObjReferenceItem` |  | |  |  | `NUMC(6)` | Shortened Item Number in Document |
| `_ServiceDocument` | | ✓ | | | | |
| `_ParentServiceDocItem` | | ✓ | | | | |
| `_ParentServiceDocItem_2` | | ✓ | | | | |
| `_ServiceDocItemRefObj` | | ✓ | | | | |
| `_ServiceDocItemMainRefObj` | | ✓ | | | | |
| `_ServiceDocLongText` | | ✓ | | | | |
| `_ServiceDocItemNote` | | ✓ | | | | |
| `_ServiceDocItemTypeSlsSttg` | | ✓ | | | | |
| `_ServiceDocItmPredecessor` | | ✓ | | | | |
| `_ServiceDocItmSuccessor` | | ✓ | | | | |
| `_ServiceDocItmPrdcssr_2` | | ✓ | | | | |
| `_ServiceDocItmSuccssr_2` | | ✓ | | | | |
| `_ServiceDocumentItemPrdcssr_3` | | ✓ | | | | |
| `_ServiceDocumentItemSuccssr_3` | | ✓ | | | | |
| `_SrvcMaterialPricingGroup` | | ✓ | | | | |
| `_CustMgmtPartner` | | ✓ | | | | |
| `_ServiceObjType` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceDocItemPriority` | | ✓ | | | | |
| `_ServiceDocItemCategory` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_SrvcMgmtProductHierarchy` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_RespEmployee` | | ✓ | | | | |
| `_ServiceTeam` | | ✓ | | | | |
| `_ServiceEmployee` | | ✓ | | | | |
| `_ContactPerson` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_ServiceDocItemStatus` | | ✓ | | | | |
| `_SrvcDocItmLifecycleStatus` | | ✓ | | | | |
| `_ServiceDocItemHasError` | | ✓ | | | | |
| `_ServiceDocItemBillingStatus` | | ✓ | | | | |
| `_SrvcDocItemIsRelForBillgSts` | | ✓ | | | | |
| `_ServiceDocumentIsOpen` | | ✓ | | | | |
| `_SrvcDocItemTransferStatus` | | ✓ | | | | |
| `_BillingBlockReason` | | ✓ | | | | |
| `_SrvcDocItemBillgRlvnce` | | ✓ | | | | |
| `_BillingRequestItem` | | ✓ | | | | |
| `_ServiceProductList` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_BaseUnit_2` | | ✓ | | | | |
| `_SalesUnit` | | ✓ | | | | |
| `_WeightUnit` | | ✓ | | | | |
| `_VolumeUnit` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_PaymentTerms` | | ✓ | | | | |
| `_PaymentMethod` | | ✓ | | | | |
| `_SrvcSEPAMandateRelevance` | | ✓ | | | | |
| `_FixedPrice` | | ✓ | | | | |
| `_StatusObjItemStatus` | | ✓ | | | | |
| `_SalesOrganizationOrgUnit` | | ✓ | | | | |
| `_SalesOrganizationOrgUnit_2` | | ✓ | | | | |
| `_SalesOfficeOrgUnit` | | ✓ | | | | |
| `_SalesOfficeOrgUnit_2` | | ✓ | | | | |
| `_SalesGroupOrgUnit` | | ✓ | | | | |
| `_SalesGroupOrgUnit_2` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_ServiceTeamHeader` | | ✓ | | | | |
| `_EnterpriseServiceOrg` | | ✓ | | | | |
| `_ServiceOrganizationOrgUnit` | | ✓ | | | | |
| `_ServiceOrganizationOrgUnit_2` | | ✓ | | | | |
| `_RespSrvcOrganizationOrgUnit` | | ✓ | | | | |
| `_RespSrvcOrganizationOrgUnit_2` | | ✓ | | | | |
| `_ServiceDocOvertimeCat` | | ✓ | | | | |
| `_Industry` | | ✓ | | | | |
| `_ServiceDocItemRejectionReason` | | ✓ | | | | |
| `_SoldToPartyRegion` | | ✓ | | | | |
| `_SoldToPartyCountry` | | ✓ | | | | |
| `_SettlementDateRule` | | ✓ | | | | |
| `_BillPlanDateRule` | | ✓ | | | | |
| `_ResponseProfile` | | ✓ | | | | |
| `_ServiceProfile` | | ✓ | | | | |
| `_TechResource` | | ✓ | | | | |
| `_MasterAgrmtItem` | | ✓ | | | | |
| `_BillableControl` | | ✓ | | | | |
| `_DeliveryBlockReason` | | ✓ | | | | |
| `_VATRegistrationCountry` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_MaterialPricingGroup_2` | | ✓ | | | | |
| `_AdditionalMaterialGroup1` | | ✓ | | | | |
| `_AdditionalMaterialGroup2` | | ✓ | | | | |
| `_AdditionalMaterialGroup3` | | ✓ | | | | |
| `_AdditionalMaterialGroup4` | | ✓ | | | | |
| `_AdditionalMaterialGroup5` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_AdditionalCustomerGroup1` | | ✓ | | | | |
| `_AdditionalCustomerGroup2` | | ✓ | | | | |
| `_AdditionalCustomerGroup3` | | ✓ | | | | |
| `_AdditionalCustomerGroup4` | | ✓ | | | | |
| `_AdditionalCustomerGroup5` | | ✓ | | | | |
| `_ActualServiceDurationUnit` | | ✓ | | | | |
| `_ServiceDurationUnit` | | ✓ | | | | |
| `_SrvcContrItemRnwlDurationUnit` | | ✓ | | | | |
| `_SrvcContrItemExtnDurationUnit` | | ✓ | | | | |
| `_SrvcDocItemCreditStatus` | | ✓ | | | | |
| `_SrvcDocItmBslnCostPostgStat` | | ✓ | | | | |
| `_SrvcDocItmContinuousCostStat` | | ✓ | | | | |
| `_SrvcDocExecutionStatus` | | ✓ | | | | |
| `_SrvcDocIsQuotation` | | ✓ | | | | |
| `_SrvcDocIsQuotation_2` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocument` | `I_ServiceDocumentEnhcd` | [1] |
| `_ParentServiceDocItem` | `I_ServiceDocumentItemEnhcd` | [1] |
| `_ParentServiceDocItem_2` | `I_ServiceDocumentItemEnhcd` | [1] |
| `_ServiceDocItemRefObj` | `I_ServiceDocumentRefObject` | [0..*] |
| `_ServiceDocItemMainRefObj` | `I_ServiceDocumentRefObject` | [0..1] |
| `_ServiceDocLongText` | `I_ServiceDocumentLongText` | [0..*] |
| `_ServiceDocItemNote` | `I_ServiceDocItemNote` | [1..*] |
| `_ServiceDocItemTypeSlsSttg` | `I_ServiceDocItemTypeSlsSttg` | [0..1] |
| `_ServiceDocItmPredecessor` | `I_ServiceDocumentItemPrdcssr` | [1] |
| `_ServiceDocItmSuccessor` | `I_ServiceDocumentItemSuccessor` | [0..*] |
| `_ServiceDocItmPrdcssr_2` | `I_ServiceDocumentItemPrdcssr_2` | [0..1] |
| `_ServiceDocItmSuccssr_2` | `I_ServiceDocumentItemSuccssr_2` | [0..*] |
| `_ServiceDocumentItemPrdcssr_3` | `I_ServiceDocumentItemPrdcssr_3` | [0..1] |
| `_ServiceDocumentItemSuccssr_3` | `I_ServiceDocumentItemSuccssr_3` | [0..*] |
| `_SrvcMaterialPricingGroup` | `I_MaterialPricingGroup` | [0..1] |
| `_ServiceDocItemExt` | `E_ServiceDocumentItem` | [0..1] |
| `_CustMgmtPartner` | `I_CustMgmtPartner` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Service Transaction Item Enhanced'
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AbapCatalog: {
  sqlViewName: 'ISERVDOCITMENHCD',
  compiler.compareFilter: true,
  preserveKey: true
}
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: ['_ServiceDocItemRefObj','_ServiceDocItemMainRefObj']
}
@ObjectModel: {
  representativeKey: 'ServiceDocumentItem',
  usageType: {
    dataClass:      #MIXED,
    serviceQuality: #C,
    sizeCategory:   #XXL
  },
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE
  ],
  modelingPattern: #ANALYTICAL_DIMENSION
}
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

define view I_ServiceDocumentItemEnhcd
  as select from I_ServiceDocumentItem
  association [1]    to I_ServiceDocumentEnhcd         as _ServiceDocument              on  $projection.ServiceObjectType = _ServiceDocument.ServiceObjectType
                                                                                        and $projection.ServiceDocument   = _ServiceDocument.ServiceDocument

  association [1]    to I_ServiceDocumentItemEnhcd     as _ParentServiceDocItem         on  $projection.ParentServiceDocumentItemUUID = _ParentServiceDocItem.ServiceDocumentItemUUID

  association [1]    to I_ServiceDocumentItemEnhcd     as _ParentServiceDocItem_2       on  $projection.ServiceObjectType             = _ParentServiceDocItem_2.ServiceObjectType
                                                                                        and $projection.ServiceDocument               = _ParentServiceDocItem_2.ServiceDocument
                                                                                        and $projection.ParentServiceDocumentItemUUID = _ParentServiceDocItem_2.ServiceDocumentItemUUID

  association [0..*] to I_ServiceDocumentRefObject     as _ServiceDocItemRefObj         on  $projection.ServiceObjectType   = _ServiceDocItemRefObj.ServiceObjectType
                                                                                        and $projection.ServiceDocument     = _ServiceDocItemRefObj.ServiceDocument
                                                                                        and $projection.ServiceDocumentItem = _ServiceDocItemRefObj.ServiceDocumentItem

  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_ServiceDocumentRefObject     as _ServiceDocItemMainRefObj     on  $projection.ServiceObjectType                    = _ServiceDocItemMainRefObj.ServiceObjectType
                                                                                        and $projection.ServiceDocument                      = _ServiceDocItemMainRefObj.ServiceDocument
                                                                                        and $projection.ServiceDocumentItem                  = _ServiceDocItemMainRefObj.ServiceDocumentItem
                                                                                        and _ServiceDocItemMainRefObj.SrvcRefObjIsMainObject = 'X'

  association [0..*] to I_ServiceDocumentLongText      as _ServiceDocLongText           on  $projection.ServiceObjectType          = _ServiceDocLongText.ServiceObjectType
                                                                                        and $projection.ServiceDocument            = _ServiceDocLongText.ServiceDocument
                                                                                        and $projection.ServiceDocumentItem        = _ServiceDocLongText.ServiceDocumentItem
                                                                                        and _ServiceDocLongText.TextObjectCategory = 'CRM_ORDERI'

  association [1..*] to I_ServiceDocItemNote           as _ServiceDocItemNote           on  $projection.ServiceDocumentItemUUID = _ServiceDocItemNote.ServiceDocumentItemUUID

  association [0..1] to I_ServiceDocItemTypeSlsSttg    as _ServiceDocItemTypeSlsSttg    on  $projection.ServiceDocItemCategory = _ServiceDocItemTypeSlsSttg.ServiceDocItemCategory

  association [1]    to I_ServiceDocumentItemPrdcssr   as _ServiceDocItmPredecessor     on  $projection.ServiceDocumentItemUUID       = _ServiceDocItmPredecessor.ServiceDocumentItemUUID
                                                                                        and $projection.ServiceDocumentItemObjectType = _ServiceDocItmPredecessor.ServiceDocumentItemObjectType
                                                                                        and _ServiceDocItmPredecessor.CharcLength     = 32

  association [0..*] to I_ServiceDocumentItemSuccessor as _ServiceDocItmSuccessor       on  $projection.ServiceDocumentItemUUID       = _ServiceDocItmSuccessor.ServiceDocumentItemUUID
                                                                                        and $projection.ServiceDocumentItemObjectType = _ServiceDocItmSuccessor.ServiceDocumentItemObjectType
                                                                                        and _ServiceDocItmSuccessor.CharcLength       = 32

  association [0..1] to I_ServiceDocumentItemPrdcssr_2 as _ServiceDocItmPrdcssr_2       on  $projection.ServiceDocumentItemCharUUID = _ServiceDocItmPrdcssr_2.ServiceDocumentItemCharUUID

  association [0..*] to I_ServiceDocumentItemSuccssr_2 as _ServiceDocItmSuccssr_2       on  $projection.ServiceDocumentItemCharUUID = _ServiceDocItmSuccssr_2.ServiceDocumentItemCharUUID

  association [0..1] to I_ServiceDocumentItemPrdcssr_3 as _ServiceDocumentItemPrdcssr_3 on  $projection.ServiceDocumentItemCharUUID = _ServiceDocumentItemPrdcssr_3.ServiceDocumentItemCharUUID

  association [0..*] to I_ServiceDocumentItemSuccssr_3 as _ServiceDocumentItemSuccssr_3 on  $projection.ServiceDocumentItemCharUUID = _ServiceDocumentItemSuccssr_3.ServiceDocumentItemCharUUID

  association [0..1] to I_MaterialPricingGroup         as _SrvcMaterialPricingGroup     on  $projection.SrvcMaterialPricingGroup = _SrvcMaterialPricingGroup.MaterialPricingGroup

  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }
  association [0..1] to I_StatusObjectUUIDStatus       as _SrvcDocItemUserStatus        on  $projection.ServiceDocumentItemUUID   = _SrvcDocItemUserStatus.StatusObjectUUID
                                                                                        and _SrvcDocItemUserStatus.IsUserStatus   = 'X'
                                                                                        and _SrvcDocItemUserStatus.StatusIsActive = 'X' */


  association [0..1] to E_ServiceDocumentItem          as _ServiceDocItemExt            on  $projection.ServiceObjectType   = _ServiceDocItemExt.ServiceCategory
                                                                                        and $projection.ServiceDocument     = _ServiceDocItemExt.ServiceOrderItem
                                                                                        and $projection.ServiceDocumentItem = _ServiceDocItemExt.ServiceLineExternalID

  association [0..*] to I_CustMgmtPartner              as _CustMgmtPartner              on  $projection.ServiceDocument             = _CustMgmtPartner.CustMgmtDocument
                                                                                        and $projection.ServiceObjectType           = _CustMgmtPartner.CustMgmtObjectType
                                                                                        and $projection.SrvcDocItmPartReferenceItem = _CustMgmtPartner.CustMgmtDocumentItem


  //  association [0..*] to I_SrvcDocumentItemLongText     as _ServiceDocItemLongText       on  $projection.ServiceObjectType    = _ServiceDocItemLongText.ServiceObjectType
  //                                                                                        and $projection.ServiceDocument      = _ServiceDocItemLongText.ServiceDocument
  //                                                                                        and $projection.ServiceDocumentItem  = _ServiceDocItemLongText.ServiceDocumentItem
  //                                                                                        and _ServiceDocItemLongText.Language = $session.system_language


{

      //Header Keys
      @ObjectModel.foreignKey.association: '_ServiceObjType'
  key ServiceObjectType,
      @ObjectModel.foreignKey.association: '_ServiceDocument'
  key ServiceDocument,
      @ObjectModel.text.element: 'ServiceDocumentItemDescription'
  key ServiceDocumentItem,

      // Header Details
      ServiceDocumentDescription,
      // Process Type is required for Search by Document Type view
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      ServiceDocumentType,
      ServiceDocumentItemPriority,
      PostingDate,
      ServicesRenderedDate,
      SrvcDocItmPostingDateTime,
      SrvcDocItmValdtyStartDateTime,
      SrvcDocItmValdtyEndDateTime,

      // Item Details
      ServiceDocumentItemUUID,
      ServiceDocumentItemCharUUID,
      ServiceDocumentItemObjectType,
      ServiceDocumentUUID,
      ParentServiceDocumentItemUUID,
      @Semantics.text: true
      ServiceDocumentItemDescription,
      Language,
      ServiceDocumentTemplateType,
      ServiceDocItemCreationDateTime,
      ServiceDocItemChangedDateTime,
      @Semantics.systemDate.createdAt: true
      cast( tstmp_to_dats( ServiceDocItemCreationDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' ) as crms4_created_on preserving type ) as ServiceDocItemCreationDate,
      @Semantics.systemDate.lastChangedAt: true
      cast( tstmp_to_dats( ServiceDocItemChangedDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' ) as crms4_changed_on preserving type ) as ServiceDocItemChangedDate,

      ServiceDocItemCreatedByUser,
      ServiceDocItemChangedByUser,
      OriginallyRequestedProduct,
      @ObjectModel.foreignKey.association: '_Product'
      Product,

      @ObjectModel.foreignKey.association: '_ServiceDocItemCategory'
      ServiceDocItemCategory,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      ProfitCenter,
      ResponsibleCostCenter,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea,
      ProfitCenterDeterminationDate,
      RefBusinessSolutionOrder,
      RefBusinessSolutionOrderItem,
      BusSolnOrdItemBundleProduct,
      BusSolnOrdItemBundleItem,

      // Item - Cumulated Value
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      SrvcDocItmRequestedQuantity,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      InvoiceAmountInInvoiceDocCrcy,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      InvoiceQuantity,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      SrvcDocItmDeliveredQuantity,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      SrvcDocItmReleasedQuantity,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      CumulativeConfirmedQuantity,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      SrvcDocItmReldAmtInTransCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      SrvcDocItemCumulatedNetAmount,

      // Item - Product
      SrvcDocItmOrdToBaseQtyNmrtr,
      SrvcDocItmOrdToBaseQtyDnmntr,
      OrderToBaseQuantityExponent,
      @Semantics.unitOfMeasure:true
      ServiceDocItemQuantityUnit,
      @ObjectModel.foreignKey.association: '_BaseUnit_2'
      @Semantics.unitOfMeasure:true
      SrvcDocItemBaseQuantityUnit,

      // Billing Set
      BillingDateTime,
      BillingDocCreationDateTime,
      BillingPlanTimeZone,

      // Item Pricing
      BillingPriceSourceName,
      cast( '' as abap.char( 16 ) )                               as DocumentDescription,

      // Partner Details
      @ObjectModel.foreignKey.association: '_SoldToPartyCountry'
      SoldToPartyCountry,
      @ObjectModel.foreignKey.association: '_SoldToPartyRegion'
      SoldToPartyRegion,
      @ObjectModel.foreignKey.association: '_SoldToParty'
      SoldToParty,
      @ObjectModel.foreignKey.association: '_ServiceTeam'
      ServiceTeam,
      @ObjectModel.foreignKey.association: '_RespEmployee'
      ResponsibleEmployee,
      @ObjectModel.foreignKey.association: '_ServiceEmployee'
      ServiceEmployee,
      @ObjectModel.foreignKey.association: '_ContactPerson'
      ContactPerson,
      @ObjectModel.foreignKey.association: '_PayerParty'
      PayerParty,
      @ObjectModel.foreignKey.association: '_BillToParty'
      BillToParty,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      ShipToParty,

      // Status
      @ObjectModel.foreignKey.association: '_SrvcDocItmLifecycleStatus'
      ServiceDocumentItemStatus,
      @ObjectModel.foreignKey.association: '_ServiceDocItemHasError'
      ServiceDocumentItemHasError,
      @ObjectModel.foreignKey.association: '_SrvcDocItemIsRelForBillgSts'
      SrvcDocItmIsReleasedForBilling,
      @ObjectModel.foreignKey.association: '_ServiceDocItemBillingStatus'
      ServiceDocItemBillingStatus,
      @ObjectModel.foreignKey.association: '_ServiceDocumentIsOpen'
      ServiceDocumentItemIsOpen,
      SrvcDocItmDeliveryStatus,
      SrvcDocItmGoodsIssueStatus,
      ServiceDocumentItemIsReleased,
      ServiceDocumentItemIsRejected,
      @Semantics.booleanIndicator:true
      SrvcDocItemIsWithdrawn,
      SrvcDocItemConcurStatus,

      @ObjectModel.foreignKey.association: '_SrvcDocIsQuotation_2'
      ServiceDocumentItemIsQuotation,

      @ObjectModel.foreignKey.association: '_SrvcDocItemTransferStatus'
      SrvcDocItemTransferStatus,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'SrvcDocItemExecutionStatus'
      MaintSrvcOrdExecutionStatus,
      @ObjectModel.foreignKey.association: '_SrvcDocExecutionStatus'
      SrvcDocItemExecutionStatus,

      // Item - Schedule Line
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      ServiceDocumentItemQuantity,

      // Pricing Parameter Set
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      @Semantics.currencyCode:true
      TransactionCurrency,
      StatisticsCurrency,
      ExchangeRateType,
      ExchangeRateDate,
      AccountingExchangeRate,
      @ObjectModel.foreignKey.association: '_PaymentTerms'
      PaymentTerms,
      @ObjectModel.foreignKey.association: '_PaymentMethod'
      PaymentMethod,
      @ObjectModel.foreignKey.association: '_SrvcSEPAMandateRelevance'
      SrvcSEPAMandateRelevance,
      SEPAMandate,
      WBSElementInternalID,
      @ObjectModel.foreignKey.association: '_BillableControl'
      BillableControl,
      @ObjectModel.foreignKey.association: '_VATRegistrationCountry'
      VATRegistrationCountry,
      ProductTaxClassification1,
      ProductTaxClassification2,
      ProductTaxClassification3,
      ProductTaxClassification4,
      ProductTaxClassification5,
      ProductTaxClassification6,
      ProductTaxClassification7,
      ProductTaxClassification8,
      ProductTaxClassification9,

      // Item - Pricing
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocumentItemNetAmount,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocumentItemTaxAmount,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocItemGrossAmount,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocumentItemNetPrice,

      // Billing Set
      @ObjectModel.foreignKey.association: '_BillingBlockReason'
      BillingBlockReason,
      @ObjectModel.foreignKey.association: '_SrvcDocItemBillgRlvnce'
      SrvcDocItmBillingRelevance,
      DynItemProcessorPrfl,

      // Item Product
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'SrvcMaterialPricingGroup'
      @ObjectModel.foreignKey.association: '_ProductGroup'
      ProductGroup,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'MaterialPricingGroup_2'
      @ObjectModel.foreignKey.association: '_SrvcMaterialPricingGroup'
      SrvcMaterialPricingGroup,
      @ObjectModel.foreignKey.association: '_MaterialPricingGroup_2'
      MaterialPricingGroup_2,

      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup1'
      ProductGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup2'
      ProductGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup3'
      ProductGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup4'
      ProductGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup5'
      ProductGroup5,
      @ObjectModel.foreignKey.association: '_SrvcMgmtProductHierarchy'
      ProductHierarchy,

      // Item - Sales Set
      @ObjectModel.foreignKey.association: '_Industry'
      Industry,
      PurchaseOrderByCustomer,
      PurchaseOrderByShipToParty,
      @ObjectModel.foreignKey.association: '_ServiceDocItemRejectionReason'
      ServiceDocItemRejectionReason,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      CustomerGroup,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup1'
      AdditionalCustomerGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup2'
      AdditionalCustomerGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup3'
      AdditionalCustomerGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup4'
      AdditionalCustomerGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup5'
      AdditionalCustomerGroup5,
      Plant,

      // Service Subject
      ServiceSchema1Category1UUID,
      ServiceSchema1Category2UUID,
      ServiceSchema1Category3UUID,
      ServiceSchema1Category4UUID,
      ServiceSchema1Category5UUID,
      ServiceSchema1Category6UUID,
      ServiceSchema1Category7UUID,
      ServiceSchema1Category8UUID,
      ServiceSchema1Category9UUID,
      ServiceSchema1Category10UUID,
      SrvcCatztnSchema1,
      SrvcCatztnSchemaCategory1,

      ServiceSchema2Category1UUID,
      ServiceSchema2Category2UUID,
      ServiceSchema2Category3UUID,
      ServiceSchema2Category4UUID,
      ServiceSchema2Category5UUID,
      ServiceSchema2Category6UUID,
      ServiceSchema2Category7UUID,
      ServiceSchema2Category8UUID,
      ServiceSchema2Category9UUID,
      ServiceSchema2Category10UUID,
      SrvcCatztnSchema2,
      SrvcCatztnSchemaCategory2,

      // Item - Billing Plan
      SettlementPeriodRuleUUID,
      BillingPlanBillingDateRuleUUID,
      BillingPlanPriceDateRule,
      BillingPlanIsFinalized,

      // Organization Unit Set
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
      ResponsibleSalesOrganization,
      @ObjectModel.foreignKey.association: '_ServiceOrganizationOrgUnit_2'
      ServiceOrganization,
      @ObjectModel.foreignKey.association: '_RespSrvcOrganizationOrgUnit_2'
      ResponsibleServiceOrganization,

      // Organizational units with the S/4 SD codes
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,

      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesOffice,

      @ObjectModel.foreignKey.association: '_SalesGroup'
      SalesGroup,

      // Service Organizational Units with S/4 Code
      RespyMgmtServiceTeam,

      @ObjectModel.foreignKey.association: '_EnterpriseServiceOrg'
      EnterpriseServiceOrganization,

      //Service Organization-Enterprise Project
      EnterpriseProjectServiceOrg,

      // Date
      RequestedServiceStartDateTime,
      RequestedServiceEndDateTime,
      ServiceContrItemStartDateTime,
      ServiceContrItemEndDateTime,

      tstmp_to_dats( RequestedServiceStartDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' )                                       as RequestedServiceStartDate,
      tstmp_to_dats( RequestedServiceEndDateTime,
                     abap_system_timezone( $session.client,'NULL' ),
                     $session.client,
                     'NULL' )                                     as RequestedServiceEndDate,
      tstmp_to_dats( ServiceContrItemStartDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' )                                       as ServiceContractItemStartDate,
      tstmp_to_dats( ServiceContrItemEndDateTime,
                     abap_system_timezone( $session.client,'NULL' ),
                     $session.client,
                     'NULL' )                                     as ServiceContractItemEndDate,

      ServiceFirstResponseByDateTime,

      tstmp_to_dats( ServiceFirstResponseByDateTime,
                     abap_system_timezone( $session.client,'NULL' ),
                     $session.client,
                     'NULL' )                                     as ServiceFirstResponseByDate,


      SrvcDocItemSLADueByDateTime,

      tstmp_to_dats( SrvcDocItemSLADueByDateTime,
                     abap_system_timezone( $session.client,'NULL' ),
                     $session.client,
                     'NULL' )                                     as SrvcDocItemSLADueByDate,

      ActualServiceStartDateTime,
      ActualServiceEndDateTime,

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrItemRnwlDurationUnit'} }
      SrvcContrItemRnwlDuration,

      @ObjectModel.foreignKey.association: '_SrvcContrItemRnwlDurationUnit'
      @Semantics.unitOfMeasure:true
      SrvcContrItemRnwlDurationUnit,

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrItemExtnDurationUnit'} }
      SrvcContrItemExtensionDuration,

      @ObjectModel.foreignKey.association: '_SrvcContrItemExtnDurationUnit'
      @Semantics.unitOfMeasure:true
      SrvcContrItemExtnDurationUnit,

      PlannedServiceStartDateTime,
      PlannedServiceEndDateTime,

      tstmp_to_dats( PlannedServiceStartDateTime,
                     abap_system_timezone( $session.client,'NULL' ),
                     $session.client,
                     'NULL' )                                     as PlannedServiceStartDate,

      tstmp_to_dats( PlannedServiceEndDateTime,
                     abap_system_timezone( $session.client,'NULL' ),
                     $session.client,
                     'NULL' )                                     as PlannedServiceEndDate,
      @Semantics.dateTime: true
      SrvcDocItmTmeSliceStrtDteTme,
      @Semantics.dateTime: true
      SrvcDocItmTmeSliceEndDteTme,
      @Semantics.dateTime: true
      SrvcContrItemRenewalDateTime,

      // Item - Service
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ActualServiceDurationUnit'} }
      ActualServiceDuration,
      @ObjectModel.foreignKey.association: '_ActualServiceDurationUnit'
      @Semantics.unitOfMeasure:true
      ActualServiceDurationUnit,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'ServiceWorkDuration_2'
      ServiceWorkDuration,
      ServiceWorkDuration_2,
      ServiceWorkDurationUnit,
      SrvcOrderConfirmationRelevance, // Despite the DB field name, this is not a boolean value
      ServiceTransactionChargeType,
      SrvcTransactionValuationType,

      @ObjectModel.foreignKey.association: '_ResponseProfile'
      ResponseProfile,

      @ObjectModel.foreignKey.association: '_ServiceProfile'
      ServiceProfile,

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDurationUnit'} }
      ServiceDuration,

      @ObjectModel.foreignKey.association: '_ServiceDurationUnit'
      @Semantics.unitOfMeasure:true
      ServiceDurationUnit,

      @ObjectModel.foreignKey.association: '_ServiceDocOvertimeCat'
      TimeSheetOvertimeCategory,

      // Business Solution Quotation
      MasterWarranty,
      ContractAccount,
      ItemOrderProbabilityInPercent,
      QuotationIsAccepted,
      ConfigurationNumber,
      IncotermsPart1,
      IncotermsPart2,
      DeliveryPriority,
      OrderCombinationIsAllowed,
      PartialDeliveryIsAllowed,

      CABillgCycle,
      RevenueAccountingReference,
      RevenueAccountingRefType,

      //Volume & Weights
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemGrossWeight,
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemNetWeight,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_WeightUnit'
      ItemWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      ItemVolume,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_VolumeUnit'
      ItemVolumeUnit,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'CustomerPriceGroup'
      MaterialPricingGroup,
      CustomerPriceGroup,

      // Delivery details
      DeliveryGroup,
      @ObjectModel.foreignKey.association: '_deliveryBlockReason'
      DeliveryBlockReason,
      RequestedDeliveryDateTime                                   as RequestedDeliveryUTCDateTime,

      //      FirstConfdDeliveryDateTime,
      ErlstConfirmedDeliveryDateTime,

      // Last Confirmation Delivery Date,
      LtstConfirmedDeliveryDateTime,

      //   tstmp_to_dats( ConfirmedDeliveryDateTime,
      //      abap_system_timezone( $session.client,'NULL' ),
      //       $session.client,
      //       'NULL' )                                              as ConfirmedDeliveryDate,

      tstmp_to_dats( RequestedDeliveryDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' )                                       as RequestedDeliveryDate,

      // Item - Subscription specific data
      SubscrpnOrdProdSelType,
      SubscriptionContract,
      SrvcTransChangeProcess,
      SrvcTransChangeProcessType,
      SrvcTransChgProcSourceItemUUID,
      CustMgmtMasterAgreement,
      CustMgmtMstrAgrmtItem,
      SubscrpnContrActivationStatus,
      SubscrpnContrTimeSliceStatus,
      SharingContractID,
      CrsCatalogMappingVersionNumber,
      CustMgmtMstrAgrmtParentItem,
      SubscrpnContractSharingGroupID,
      CAPartnerSettlementRule,
      ChangeProcessGroup,
      BusSolutionQtnItemIsPhased,
      BusSolnQtnItmPhasedPrdcssrItem,
      SubscriptionContractItem,
      SrvcDocItemWithdrawalReason,
      SrvcDocItemRefundType,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      SrvcDocItmRecrrgChrgNetAmount,
      @Semantics.booleanIndicator: true
      SubscrpnContrTrmsAreSpecified,
      @Semantics.booleanIndicator : true
      MidBillgCycExprtnIsAllowed,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      SrvcDocItmRecrrgChrgTaxAmount,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      SrvcDocItmRecrrgChrgGrossAmt,
      SrvcDocItmRecrrgChrgDuration,
      SrvcDocItmRecrrgChrgDurnUnit,
      SubscriptionContractReference,
      SubscriptionBillingCycle,
      @Semantics.uuid
      SubscrpnBillgRatePlanCharUUID,
      SubscriptionContractExternalID,
      SbscrShContrSvTrMtAgrItmUUID,
      SbscrShContrSvTrMtAgrItmCstPrd,
      @Semantics.booleanIndicator: true
      SvTrMtAgrItmIsFxdConfign,
      SubscrpnContrItmBillgPlnCyc,
      @Semantics.booleanIndicator: true
      SubscrpnOrdIsPending,
      NrOfBillgCyclesBilledTogether,

      // Cancellation
      ServiceDocumentItemCanclnParty,
      ServiceDocumentItmCanclnReason,
      SrvcDocItmCanclnProcedure,

      // Auto renew
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDurationUnit'} }
      ServiceDocumentRnwlDuration,
      ServiceDocRnwlDurationUnit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDurationUnit'} }
      ServiceDocExtensionDuration,
      ServiceDocExtnDurationUnit,

      //biz and grace
      SrvcDocItemGracePeriod,
      SrvcDocItemGracePeriodUnit,
      SrvcDocItmGrcePerdEndDateTime,
      SbscrContrItmBizValdStrtDteTme,
      SbscrContrItmBizValdEndDteTme,


      // Subscription Contract
      SubscrpnContrAutoRnwlIsActv,

      // In-House Repair Reference
      ReferenceInHouseRepair,
      ReferenceInHouseRepairItem,
      RefInHouseRepairIsExisting,

      // Credit Status
      @ObjectModel.foreignKey.association: '_SrvcDocItemCreditStatus'
      SrvcDocItemCreditStatus,

      // Baseline Cost Posting Status
      SrvcDocItmBslnCostPostgStatus,

      // Cost Calculation Status for Continuous Planning
      SrvcDocItmContinuousCostStatus,

      //_SrvcDocItemUserStatus.StatusCode                           as UserStatus,

      SrvcDocItemIsUnplanned,

      //Shipping
      ShippingCondition,

      SrvcDocSubitemOrigin,
      SrvcDocItmAcctAssgmtObjectType,
      SrvcDocItmAcctAssgmtObject,
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      SrvcDocItmGoodsIssueQuantity,
      Batch,
      /* Associations */
      // Item Key Association
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ParentServiceDocItem_2'
      _ParentServiceDocItem,
      _ParentServiceDocItem_2,
      _ServiceDocItemRefObj,
      _ServiceDocItemMainRefObj,
      _ServiceDocItemNote,
      _ServiceDocLongText,
      _ServiceDocItemTypeSlsSttg,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ServiceDocItmPrdcssr_2'
      _ServiceDocItmPredecessor,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ServiceDocItmSuccssr_2'
      _ServiceDocItmSuccessor,
      _ServiceDocItmPrdcssr_2,
      _ServiceDocItmSuccssr_2,

      // Item Key Association
      _ServiceObjType,
      _ServiceDocument,

      // Header Details
      _ServiceDocumentType,
      _ServiceDocItemPriority,

      // Item Details
      _ServiceDocItemCategory,
      _ProfitCenter,
      _ControllingArea,
      _SrvcMgmtProductHierarchy,

      // Partner
      _SoldToParty,
      _RespEmployee,
      _ServiceTeam,
      _ServiceEmployee,
      _ContactPerson,
      _PayerParty,
      _BillToParty,
      _ShipToParty,

      // Status
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SrvcDocItmLifecycleStatus'
      _ServiceDocItemStatus,
      _SrvcDocItmLifecycleStatus,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocItemHasError,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocItemBillingStatus,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SrvcDocItemIsRelForBillgSts,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocumentIsOpen,
      _SrvcDocItemTransferStatus,

      // Billing Set
      _BillingBlockReason,
      _SrvcDocItemBillgRlvnce,
      _BillingRequestItem,
      _ServiceProductList,

      // Item - Product
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_BaseUnit_2'
      _BaseUnit,
      _BaseUnit_2,
      _SalesUnit,
      _WeightUnit,
      _VolumeUnit,
      _TransactionCurrency,
      _PaymentTerms,
      _PaymentMethod,
      _SrvcSEPAMandateRelevance,
      _FixedPrice,
      _StatusObjItemStatus,

      // Organization Unit Set
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

      _SalesOrganization,
      _SalesOffice,
      _SalesGroup,
      _Division,
      _DistributionChannel,
      _ServiceTeamHeader,
      _EnterpriseServiceOrg,

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

      _ServiceDocOvertimeCat,
      _Industry,
      _ServiceDocItemRejectionReason,
      _SoldToPartyRegion,
      _SoldToPartyCountry,
      _SettlementDateRule,
      _BillPlanDateRule,
      _ResponseProfile,
      _ServiceProfile,
      _TechResource,
      _MasterAgrmtItem,
      _BillableControl,
      _DeliveryBlockReason,
      _VATRegistrationCountry,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SrvcMaterialPricingGroup'
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ProductGroup,
      _Product,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_MaterialPricingGroup_2'
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SrvcMaterialPricingGroup,
      _MaterialPricingGroup_2,
      _AdditionalMaterialGroup1,
      _AdditionalMaterialGroup2,
      _AdditionalMaterialGroup3,
      _AdditionalMaterialGroup4,
      _AdditionalMaterialGroup5,
      _CustomerGroup,
      _AdditionalCustomerGroup1,
      _AdditionalCustomerGroup2,
      _AdditionalCustomerGroup3,
      _AdditionalCustomerGroup4,
      _AdditionalCustomerGroup5,

      // Item - Service Associations
      _ActualServiceDurationUnit,
      _ServiceDurationUnit,
      _SrvcContrItemRnwlDurationUnit,
      _SrvcContrItemExtnDurationUnit,
      _ServiceDocumentItemPrdcssr_3,
      _ServiceDocumentItemSuccssr_3,

      // Credit status associtation
      _SrvcDocItemCreditStatus,

      // Baseline Cost Posting status
      _SrvcDocItmBslnCostPostgStat,

      // Continuous Cost Calculation Status
      _SrvcDocItmContinuousCostStat,

      _SrvcDocExecutionStatus,

      //_SrvcDocItemUserStatus

      //RAP : Inheritance of complex set
      SrvcDocItmPartReferenceItem,
      SrvcDocItmApptRefObjectUUID,
      SrvcDocItmApptReferenceItem,
      SrvcDocItmRefObjReferenceItem,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SrvcDocIsQuotation_2'
      _SrvcDocIsQuotation,

      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SrvcDocIsQuotation_2,

      //For ESH long text search
      //      _ServiceDocItemLongText
      _CustMgmtPartner
}
```
