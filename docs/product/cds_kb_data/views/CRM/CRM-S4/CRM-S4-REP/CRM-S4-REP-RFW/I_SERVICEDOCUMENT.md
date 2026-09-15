---
name: I_SERVICEDOCUMENT
description: "Service DocumentUMENT"
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
# I_SERVICEDOCUMENT

**Service DocumentUMENT**

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
| `ServiceObjectType` | ✓ | |  | `objtype_h` | `CHAR(10)` | Business Trans. Cat. |
| `ServiceDocument` | ✓ | |  | `object_id` | `CHAR(10)` | Transaction ID |
| `ServiceDocumentUUID` |  | |  | `header_guid` | `RAW(16)` | GUID of a CRM Order Object |
| `ServiceDocumentCharUUID` |  | |  | `header_guid_char` | `CHAR(32)` | 32 Character CRM Object GUID (Converted) |
| `ServiceDocumentType` |  | |  | `process_type` | `CHAR(4)` | Business Transaction Type |
| `ServiceDocumentDescription` |  | |  | `description_h` | `CHAR(40)` | Transaction Description |
| `Language` |  | |  | `descr_language` | `LANG(1)` | Language Key of Description |
| `PostingDate` |  | |  | `posting_date` | `DATS(8)` | Posting Date for a Business Transaction |
| `ServiceDocumentTemplateType` |  | |  | `template_type` | `CHAR(1)` | Template Type of CRM Transaction |
| `ServiceDocCreationDateTime` |  | |  | `created_at_h` | `DEC(15)` | Created At |
| `ServiceDocChangedDateTime` |  | |  | `changed_at_h` | `DEC(15)` | Changed At |
| `ServiceDocumentCreatedByUser` |  | |  | `created_by_h` | `CHAR(12)` | User that Created the Transaction |
| `ServiceDocumentChangedByUser` |  | |  | `changed_by_h` | `CHAR(12)` | Transaction Last Changed By |
| `PricingDocument` |  | |  | `pricing_document` | `CHAR(10)` | Number of the Document Condition |
| `PricingProcedure` |  | |  | `pricing_procedure` | `CHAR(6)` | Procedure (Pricing, Output Control, Acct. Det., Costing,...) |
| `RefBusinessSolutionOrder` |  | |  | `refbussolnord` | `CHAR(10)` | Reference Solution Order ID |
| `SrvcDocIsMaintServiceOrder` |  | |  | `is_maintenance_order` | `CHAR(1)` | Logical Variable |
| `BusinessActivityCategory` |  | |  | `category` | `CHAR(3)` | Activity Category (Communication Type) |
| `ServiceDocumentPriority` |  | |  | `priority` | `NUMC(1)` | Activity Priority |
| `ServiceDocNetAmount` |  | |  | `net_value_h` | `CURR(15)` | Total Net Value of Document in Document Currency |
| `ServiceDocGrossAmount` |  | |  | `gross_value_h` | `CURR(15)` | Total Gross Value of Document in Document Currency |
| `ServiceDocTaxAmount` |  | |  | `tax_amount_h` | `CURR(15)` | Total Tax Amount in Document Currency |
| `SoldToParty` |  | |  | `sold_to_party` | `CHAR(10)` | Sold-To Party |
| `SoldToPartyRegion` |  | |  | `sold_to_region` | `CHAR(3)` | Region (State, Province, County) |
| `SoldToPartyCountry` |  | |  | `sold_to_country` | `CHAR(3)` | Country/Region |
| `ServiceTeam` |  | |  | `service_team` | `CHAR(10)` | Service Team |
| `ResponsibleEmployee` |  | |  | `person_resp` | `CHAR(10)` | Employee Responsible |
| `ServiceEmployee` |  | |  | `service_employee` | `CHAR(10)` | Executing Service Employee |
| `ContactPerson` |  | |  | `contact_person` | `CHAR(10)` | Customer Contact Person |
| `ShipToParty` |  | |  | `ship_to_party` | `CHAR(10)` | Ship-To Party |
| `BillToParty` |  | |  | `bill_to_party` | `CHAR(10)` | Bill-To Party |
| `PayerParty` |  | |  | `payer` | `CHAR(10)` | Payer |
| `SrvcDocTmplValdtyStartDateTime` |  | |  | `cast( valid_from as crms4_template_start preserving type )` | `DEC(15)` | Template Start Date |
| `SrvcDocTmplValdtyEndDateTime` |  | |  | `cast( valid_to as crms4_template_end preserving type )` | `DEC(15)` | Template End Date |
| `RequestedServiceStartDateTime` |  | |  | `srv_cust_beg` | `DEC(15)` | Service Request Start Date |
| `RequestedServiceEndDateTime` |  | |  | `srv_cust_end` | `DEC(15)` | Service Request Due Date |
| `ServiceContractStartDateTime` |  | |  | `contstart` | `DEC(15)` | Contract Start date |
| `ServiceContractEndDateTime` |  | |  | `contend` | `DEC(15)` | Contract End Date |
| `SrvcContrEarliestStartDateTime` |  | |  | `sc_earliest_start_date` | `DEC(15)` | Earliest Start Date for Service Contract |
| `SrvcContrLatestEndDateTime` |  | |  | `sc_latest_end_date` | `DEC(15)` | Latest End Date for Service Contract |
| `SrvcQtanValidityStartDateTime` |  | |  | `cast( quot_start as crms4_cont_start )` | `DEC(15)` | Contract Start date |
| `SrvcQtanValidityEndDateTime` |  | |  | `cast( quot_end as crms4_cont_end )` | `DEC(15)` | Contract End Date |
| `PaymentTerms` |  | |  | `pmnttrms` | `CHAR(4)` | Terms of Payment |
| `PaymentMethod` |  | |  | `payment_method` | `CHAR(1)` | Payment Method |
| `SrvcSEPAMandateRelevance` |  | |  | `sepa_on` | `CHAR(1)` | Indicator for SEPA-Relevant Transactions |
| `SEPAMandate` |  | |  | `mandate_id` | `CHAR(35)` | Unique Reference to Mandate per Payment Recipient |
| `WBSElementInternalID` |  | |  | `wbs_element` | `NUMC(8)` | WBS Element |
| `TransactionCurrency` |  | |  | `currency` | `CUKY(5)` | Currency |
| `TaxDepartureCountry` |  | |  | `tax_dep_cty` | `CHAR(3)` | Tax Departure Country |
| `VATRegistrationCountry` |  | |  | `tax_dest_cty` | `CHAR(3)` | Tax Destination Country/Region |
| `CustomerTaxClassification1` |  | |  | `taxk1` | `CHAR(1)` | Alternative Tax Classification |
| `CustomerTaxClassification2` |  | |  | `taxk2` | `CHAR(1)` | Tax Classification 2 for Customer |
| `CustomerTaxClassification3` |  | |  | `taxk3` | `CHAR(1)` | Tax Classification 3 for Customer |
| `CustomerTaxClassification4` |  | |  | `taxk4` | `CHAR(1)` | Tax Classification 4 for Customer |
| `CustomerTaxClassification5` |  | |  | `taxk5` | `CHAR(1)` | Tax Classification 5 for Customer |
| `CustomerTaxClassification6` |  | |  | `taxk6` | `CHAR(1)` | Tax Classification 6 for Customer |
| `CustomerTaxClassification7` |  | |  | `taxk7` | `CHAR(1)` | Tax Classification 7 for Customer |
| `CustomerTaxClassification8` |  | |  | `taxk8` | `CHAR(1)` | Tax Classification 8 for Customer |
| `CustomerTaxClassification9` |  | |  | `taxk9` | `CHAR(1)` | Tax Classification 9 for Customer |
| `PurchaseOrderByCustomer` |  | |  | `po_number_sold` | `CHAR(35)` | Sold-To Party's External Reference Number |
| `CustomerPurchaseOrderDate` |  | |  | `po_date_sold` | `DATS(8)` | Reference Document Date |
| `ServiceDocumentRejectionReason` |  | |  | `rejection` | `CHAR(2)` | Cancellation Reason Code |
| `Region` |  | |  | `region` | `CHAR(3)` | Region (State, Province, County) |
| `SrvcDocCustHierarchyRelevance` |  | |  | `cust_hierarchy_relevance` | `CHAR(2)` | Customer Hierarchy Relevance |
| `CustomerHierarchyBranchUUID` |  | |  | `custh_branch_uuid` | `CHAR(32)` | Customer Hierarchy Branch UUID |
| `SrvcDocCustomerHierarchyOrigin` |  | |  | `custh_branch_uuid_ori` | `CHAR(1)` | Source Indicator of Customer Hierarchy |
| `ServiceDocumentStatus` |  | |  | `stat_lifecycle` | `CHAR(4)` | Life Cycle Status |
| `ServiceDocumentIsReleased` |  | |  | `stat_released` | `CHAR(1)` | Release Status |
| `ServiceDocumentHasError` |  | |  | `stat_error` | `CHAR(1)` | Error Status |
| `ServiceDocBillingStatus` |  | |  | `stat_billing` | `CHAR(1)` | Billing Status |
| `ServiceDocIsReleasedForBilling` |  | |  | `stat_for_billing` | `CHAR(1)` | Release Status for Cumulated Billing |
| `ServiceDocumentIsRejected` |  | |  | `stat_cancelled` | `CHAR(1)` | Cancellation Status |
| `ServiceDocumentIsOpen` |  | |  | `stat_open` | `CHAR(1)` | Status "Open" |
| `SrvcDocTransferStatus` |  | |  | `stat_transfer` | `CHAR(1)` | Transfer Status |
| `ServiceDocumentIsQuotation` |  | |  | `stat_quotation` | `CHAR(1)` | Quotation Status |
| `ServiceConfirmationIsFinal` |  | |  | `stat_final_conf` | `CHAR(1)` | Final service confirmation for the related service order |
| `ServiceContractCanclnSts` |  | |  | `stat_contract_cancelled` | `CHAR(1)` | Contract Cancellation Status |
| `MaintSrvcOrdExecutionStatus` |  | |  | `stat_maintenance` | `CHAR(2)` | Execution Status |
| `SrvcDocExecutionStatus` |  | |  | `stat_maintenance` | `CHAR(2)` | Execution Status |
| `SrvcDocDeliveryStatus` |  | |  | `stat_delivery` | `CHAR(1)` | Delivery Status |
| `SrvcDocGoodsIssueStatus` |  | |  | `stat_goods_issue` | `CHAR(1)` | Goods Issue Status |
| `SrvcDocRejectionStatus` |  | |  | `stat_rejection` | `CHAR(1)` | Rejection Status |
| `SalesOrganizationOrgUnitID` |  | |  | `sales_org` | `CHAR(14)` | Sales Organization ID |
| `SalesOfficeOrgUnitID` |  | |  | `sales_office` | `CHAR(14)` | Sales Office |
| `SalesGroupOrgUnitID` |  | |  | `sales_group` | `CHAR(14)` | Sales Group |
| `DistributionChannel` |  | |  | `dis_channel` | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  | `division` | `CHAR(2)` | Division |
| `ServiceOrganization` |  | |  | `service_org` | `CHAR(14)` | Service Organization |
| `ResponsibleServiceOrganization` |  | |  | `service_org_resp` | `CHAR(14)` | Organizational Unit (Service) |
| `SalesOrganization` |  | |  | `sales_org_sd` | `CHAR(4)` | Sales Organization |
| `SalesOffice` |  | |  | `sales_office_sd` | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  | `sales_group_sd` | `CHAR(3)` | Sales Group |
| `RespyMgmtServiceTeam` |  | |  | `service_team_rm` | `NUMC(8)` | Service Team (Responsibility Management) |
| `EnterpriseServiceOrganization` |  | |  | `enterprise_service_org` | `CHAR(4)` | Enterprise Service Organization |
| `BillingBlockReason` |  | |  | `billing_block` | `CHAR(2)` | Business Partner: Billing Block Reason |
| `ServiceReasonSchema` |  | |  | `asp_id_01` | `CHAR(40)` | Coherent Cat. - Aspect ID |
| `ServiceReasonCategory` |  | |  | `cat_id_01` | `CHAR(40)` | Coherent Cat. - Category ID |
| `ServiceDefectSchema` |  | |  | `asp_id_02` | `CHAR(40)` | Coherent Cat. - Aspect ID |
| `ServiceDefectCategory` |  | |  | `cat_id_02` | `CHAR(40)` | Coherent Cat. - Category ID |
| `ServiceFirstResponseByDateTime` |  | |  | `srv_rfirst` | `DEC(15)` | First Response By |
| `ServiceDueByDateTime` |  | |  | `due_on` | `DEC(15)` | Date Transaction is Due |
| `ErlstRequestedDeliveryDateTime` |  | |  | `cast(req_dlv_date_h as tzntstmps)` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `RecommendedServicePriority` |  | |  | `rec_priority` | `NUMC(1)` | Recommended Priority |
| `ServiceDocumentUrgency` |  | |  | `urgency` | `NUMC(2)` | Urgency |
| `ServiceDocumentImpact` |  | |  | `impact` | `NUMC(2)` | Impact |
| `ServiceEscalationLevel` |  | |  | `escalation` | `NUMC(1)` | Escalation |
| `ServiceDocumentProblemCategory` |  | |  | `problem_category` | `CHAR(3)` | Problem Category |
| `ServiceRisk` |  | |  | `risk` | `NUMC(3)` | Risk |
| `ServiceDocumentCanclnParty` |  | |  | `cancparty` | `CHAR(4)` | Cancelling Party |
| `ServiceDocumentCanclnReason` |  | |  | `canc_reason` | `CHAR(4)` | CRM Service : Reason for Cancellation |
| `ReferenceInHouseRepair` |  | |  | `ref_inhouse_repair` | `CHAR(10)` | Reference In-House Repair |
| `ReferenceInHouseRepairItem` |  | |  | `ref_inhouse_repair_item` | `NUMC(6)` | Reference In-House Repair Item |
| `RefInHouseRepairIsExisting` |  | |  | `has_ref_inhouse_repair` | `CHAR(1)` | Reference to In-House Repair Exists |
| `SrvcDocTemplateSearchTermText` |  | |  | `templ_searchterm` | `CHAR(54)` | Template Search Term |
| `SrvcDocCreditStatus` |  | |  | `stat_credit` | `CHAR(1)` | Credit Status of Header |
| `SrvcDocBslnCostPostgStatus` |  | |  | `stat_bsln_cost_postg` | `CHAR(1)` | Baseline Planned Cost and Revenue Header Status |
| `SrvcDocContinuousCostStatus` |  | |  | `stat_cont_cost_calc` | `CHAR(1)` | Baseline Planned Cost and Revenue Header Status |
| `ShippingCondition` |  | |  | `ship_cond` | `CHAR(2)` | Shipping Conditions |
| `CustomerPriceGroup` |  | |  | `price_grp` | `CHAR(2)` | Customer Price Group |
| `SrvcDocAcctAssgmtObjectType` |  | |  | `cast(ac_object_type as crmt_ac_object_type_no_conv preserving type )` | `CHAR(2)` | Obj.Type for Sett.Acc.Assgnmnt for Search Help or Cust.Exit |
| `SrvcDocAcctAssgmtObject` |  | |  | `ac_assignment` | `CHAR(50)` | Settlement Account Assignment |
| `DeliveryPriority` |  | |  | `dlv_prio` | `NUMC(2)` | Delivery Priority |
| `IncotermsPart1` |  | |  | `incoterms1` | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsPart2` |  | |  | `incoterms2` | `CHAR(28)` | Incoterms (Part 2) |
| `ContractAccount` |  | |  | `contract_account` | `CHAR(12)` | Contract Account Number |
| `_SoldToParty` | | ✓ | | | | |
| `_RespEmployee` | | ✓ | | | | |
| `_ServiceTeam` | | ✓ | | | | |
| `_ServiceEmployee` | | ✓ | | | | |
| `_ContactPerson` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_SoldToPartyToCustomer` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceDocumentPriority` | | ✓ | | | | |
| `_ServiceDocumentStatus` | | ✓ | | | | |
| `_SrvcDocLifecycleStatus` | | ✓ | | | | |
| `_ServiceDocBillingStatus` | | ✓ | | | | |
| `_SrvcDocIsRelForBillgSts` | | ✓ | | | | |
| `_ServiceDocHasError` | | ✓ | | | | |
| `_ServiceDocumentIsOpen` | | ✓ | | | | |
| `_BillingBlockReason` | | ✓ | | | | |
| `_ActivityCategory` | | ✓ | | | | |
| `_ServiceObjType` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_PaymentTerms` | | ✓ | | | | |
| `_SrvcSEPAMandateRelevance` | | ✓ | | | | |
| `_FixedPrice` | | ✓ | | | | |
| `_SalesOrganizationOrgUnit` | | ✓ | | | | |
| `_SalesOfficeOrgUnit` | | ✓ | | | | |
| `_SalesGroupOrgUnit` | | ✓ | | | | |
| `_ServiceOrganizationOrgUnit` | | ✓ | | | | |
| `_RespSrvcOrganizationOrgUnit` | | ✓ | | | | |
| `_SalesOrganizationOrgUnit_2` | | ✓ | | | | |
| `_SalesOfficeOrgUnit_2` | | ✓ | | | | |
| `_SalesGroupOrgUnit_2` | | ✓ | | | | |
| `_ServiceOrganizationOrgUnit_2` | | ✓ | | | | |
| `_RespSrvcOrganizationOrgUnit_2` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_SrvcDocumentRejectionReason` | | ✓ | | | | |
| `_SoldToPartyCountry` | | ✓ | | | | |
| `_TaxDepartureCountry` | | ✓ | | | | |
| `_VATRegistrationCountry` | | ✓ | | | | |
| `_SoldToPartyRegion` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_ServiceRisk` | | ✓ | | | | |
| `_ServiceDocProblemCategory` | | ✓ | | | | |
| `_ServiceTeamHeader` | | ✓ | | | | |
| `_EnterpriseServiceOrg` | | ✓ | | | | |
| `_ServiceContractCanclnSts` | | ✓ | | | | |
| `_SrvcDocTransferStatus` | | ✓ | | | | |
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
| `_SoldToParty` | `I_BusinessPartner` | [0..1] |
| `_RespEmployee` | `I_BusinessPartner` | [0..1] |
| `_ServiceTeam` | `I_BusinessPartner` | [0..1] |
| `_ServiceEmployee` | `I_BusinessPartner` | [0..1] |
| `_ContactPerson` | `I_BusinessPartner` | [0..1] |
| `_ShipToParty` | `I_BusinessPartner` | [0..1] |
| `_BillToParty` | `I_BusinessPartner` | [0..1] |
| `_PayerParty` | `I_BusinessPartner` | [0..1] |
| `_SoldToPartyToCustomer` | `I_BusinessPartnerCustomer` | [0..*] |
| `_ServiceDocumentType` | `I_ServiceDocumentType` | [0..1] |
| `_ServiceDocumentPriority` | `I_ServiceDocumentPriority` | [0..1] |
| `_ServiceDocumentStatus` | `I_ServiceDocumentStatus` | [0..1] |
| `_SrvcDocLifecycleStatus` | `I_SrvcDocLifecycleStatus` | [0..1] |
| `_ServiceDocBillingStatus` | `I_ServiceDocBillingStatus` | [0..1] |
| `_SrvcDocIsRelForBillgSts` | `I_SrvcDocRelForBillgSts` | [0..1] |
| `_ServiceDocHasError` | `I_ServiceDocErrorStatus` | [0..1] |
| `_ServiceDocumentIsOpen` | `I_ServiceDocOpenStatus` | [0..1] |
| `_BillingBlockReason` | `I_BillingBlockReason` | [0..1] |
| `_ActivityCategory` | `I_BusinessActivityCategory` | [0..1] |
| `_ServiceObjType` | `I_CustMgmtBusObjType` | [1..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_PaymentTerms` | `I_PaymentTerms` | [0..1] |
| `_SrvcSEPAMandateRelevance` | `I_SrvcSEPAMandateRelevance` | [0..1] |
| `_FixedPrice` | `I_ServiceDocumentFixedPrice` | [0..1] |
| `_SalesOrganizationOrgUnit` | `I_SalesOrganizationUnit` | [0..1] |
| `_SalesOfficeOrgUnit` | `I_SalesOrganizationUnit` | [0..1] |
| `_SalesGroupOrgUnit` | `I_SalesOrganizationUnit` | [0..1] |
| `_ServiceOrganizationOrgUnit` | `I_SalesOrganizationUnit` | [0..1] |
| `_RespSrvcOrganizationOrgUnit` | `I_SalesOrganizationUnit` | [0..1] |
| `_SalesOrganizationOrgUnit_2` | `I_SrvcMgmtOrganizationUnit` | [0..1] |
| `_SalesOfficeOrgUnit_2` | `I_SrvcMgmtOrganizationUnit` | [0..1] |
| `_SalesGroupOrgUnit_2` | `I_SrvcMgmtOrganizationUnit` | [0..1] |
| `_ServiceOrganizationOrgUnit_2` | `I_SrvcMgmtOrganizationUnit` | [0..1] |
| `_RespSrvcOrganizationOrgUnit_2` | `I_SrvcMgmtOrganizationUnit` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_SalesOffice` | `I_SalesOffice` | [0..1] |
| `_SalesGroup` | `I_SalesGroup` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_SrvcDocumentRejectionReason` | `I_SalesDocumentRjcnReason` | [0..1] |
| `_SoldToPartyCountry` | `I_Country` | [0..1] |
| `_TaxDepartureCountry` | `I_Country` | [0..1] |
| `_VATRegistrationCountry` | `I_Country` | [0..1] |
| `_SoldToPartyRegion` | `I_Region` | [0..1] |
| `_Region` | `I_Region` | [0..1] |
| `_ServiceRisk` | `I_ServiceRisk` | [0..1] |
| `_ServiceDocProblemCategory` | `I_ServiceDocProblemCategory` | [0..1] |
| `_ServiceTeamHeader` | `I_RespyMgmtTeamHeaderDetail` | [0..1] |
| `_EnterpriseServiceOrg` | `I_EnterpriseServiceOrg` | [0..1] |
| `_ServiceContractCanclnSts` | `I_ServiceContractCanclnSts` | [0..1] |
| `_SrvcDocTransferStatus` | `I_SrvcDocTransferStatus` | [0..1] |
| `_SrvcDocCreditStatus` | `I_SrvcDocCreditStatus` | [0..1] |
| `_ServiceDocumentExt` | `E_ServiceDocument` | [0..1] |
| `_SrvcDocBslnCostPostgStatus` | `I_SrvcDocBslnCostPostgStatus` | [0..1] |
| `_SrvcDocContinuousCostStatus` | `I_SrvcDocBslnCostPostgStatus` | [0..1] |
| `_PaymentMethod` | `I_SrvcDocPaymentMethod` | [0..1] |
| `_SrvcDocExecutionStatus` | `I_SrvcDocExecutionStatus` | [0..1] |
| `_SrvcDocIsQuotation` | `I_Indicator` | [1..1] |
| `_SrvcDocIsQuotation_2` | `I_SrvcDocQuotationStatus_2` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Service Transaction'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISERVDOC',
  compiler.compareFilter: true,
  preserveKey: true
}

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@ObjectModel: {
   representativeKey: 'ServiceDocument',
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
   modelingPattern: #ANALYTICAL_DIMENSION,
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #A,
     sizeCategory:   #XXL
   }
}
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
/*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] } */
define view I_ServiceDocument
  as select from crms4d_serv_h
  association [0..1] to I_BusinessPartner            as _SoldToParty                   on  $projection.SoldToParty = _SoldToParty.BusinessPartner
  association [0..1] to I_BusinessPartner            as _RespEmployee                  on  $projection.ResponsibleEmployee = _RespEmployee.BusinessPartner
  association [0..1] to I_BusinessPartner            as _ServiceTeam                   on  $projection.ServiceTeam = _ServiceTeam.BusinessPartner
  association [0..1] to I_BusinessPartner            as _ServiceEmployee               on  $projection.ServiceEmployee = _ServiceEmployee.BusinessPartner
  association [0..1] to I_BusinessPartner            as _ContactPerson                 on  $projection.ContactPerson = _ContactPerson.BusinessPartner
  association [0..1] to I_BusinessPartner            as _ShipToParty                   on  $projection.ShipToParty = _ShipToParty.BusinessPartner
  association [0..1] to I_BusinessPartner            as _BillToParty                   on  $projection.BillToParty = _BillToParty.BusinessPartner
  association [0..1] to I_BusinessPartner            as _PayerParty                    on  $projection.PayerParty = _PayerParty.BusinessPartner
  association [0..*] to I_BusinessPartnerCustomer    as _SoldToPartyToCustomer         on  $projection.SoldToParty = _SoldToPartyToCustomer.BusinessPartner

  association [0..1] to I_ServiceDocumentType        as _ServiceDocumentType           on  $projection.ServiceDocumentType = _ServiceDocumentType.ServiceDocumentType
  association [0..1] to I_ServiceDocumentPriority    as _ServiceDocumentPriority       on  $projection.ServiceDocumentPriority = _ServiceDocumentPriority.ServiceDocumentPriority
  association [0..1] to I_ServiceDocumentStatus      as _ServiceDocumentStatus         on  $projection.ServiceDocumentStatus = _ServiceDocumentStatus.ServiceDocumentStatus
  association [0..1] to I_SrvcDocLifecycleStatus     as _SrvcDocLifecycleStatus        on  $projection.ServiceDocumentStatus = _SrvcDocLifecycleStatus.ServiceDocumentStatus
  association [0..1] to I_ServiceDocBillingStatus    as _ServiceDocBillingStatus       on  $projection.ServiceDocBillingStatus = _ServiceDocBillingStatus.ServiceDocBillingStatus
  association [0..1] to I_SrvcDocRelForBillgSts      as _SrvcDocIsRelForBillgSts       on  $projection.ServiceDocIsReleasedForBilling = _SrvcDocIsRelForBillgSts.ServiceDocIsReleasedForBilling
  association [0..1] to I_ServiceDocErrorStatus      as _ServiceDocHasError            on  $projection.ServiceDocumentHasError = _ServiceDocHasError.ServiceDocumentHasError
  association [0..1] to I_ServiceDocOpenStatus       as _ServiceDocumentIsOpen         on  $projection.ServiceDocumentIsOpen = _ServiceDocumentIsOpen.ServiceDocumentIsOpen
  association [0..1] to I_BillingBlockReason         as _BillingBlockReason            on  $projection.BillingBlockReason = _BillingBlockReason.BillingBlockReason
  association [0..1] to I_BusinessActivityCategory   as _ActivityCategory              on  $projection.BusinessActivityCategory = _ActivityCategory.BusinessActivityCategory

  association [1..1] to I_CustMgmtBusObjType         as _ServiceObjType                on  $projection.ServiceObjectType = _ServiceObjType.BusinessObjectType

  association [0..1] to I_Currency                   as _TransactionCurrency           on  $projection.TransactionCurrency = _TransactionCurrency.Currency

  association [0..1] to I_PaymentTerms               as _PaymentTerms                  on  $projection.PaymentTerms = _PaymentTerms.PaymentTerms

  association [0..1] to I_SrvcSEPAMandateRelevance   as _SrvcSEPAMandateRelevance      on  $projection.SrvcSEPAMandateRelevance = _SrvcSEPAMandateRelevance.SrvcSEPAMandateRelevance

  association [0..1] to I_ServiceDocumentFixedPrice  as _FixedPrice                    on  $projection.ServiceObjectType   = _FixedPrice.ServiceObjectType
                                                                                       and $projection.ServiceDocument     = _FixedPrice.ServiceDocument
                                                                                       and $projection.PricingDocument     = _FixedPrice.PricingDocument
                                                                                       and _FixedPrice.PricingDocumentItem = '000000'

  association [0..1] to I_SalesOrganizationUnit      as _SalesOrganizationOrgUnit      on  $projection.SalesOrganizationOrgUnitID = _SalesOrganizationOrgUnit.OrganizationalUnit

  association [0..1] to I_SalesOrganizationUnit      as _SalesOfficeOrgUnit            on  $projection.SalesOfficeOrgUnitID = _SalesOfficeOrgUnit.OrganizationalUnit

  association [0..1] to I_SalesOrganizationUnit      as _SalesGroupOrgUnit             on  $projection.SalesGroupOrgUnitID = _SalesGroupOrgUnit.OrganizationalUnit

  association [0..1] to I_SalesOrganizationUnit      as _ServiceOrganizationOrgUnit    on  $projection.ServiceOrganization = _ServiceOrganizationOrgUnit.OrganizationalUnit

  association [0..1] to I_SalesOrganizationUnit      as _RespSrvcOrganizationOrgUnit   on  $projection.ResponsibleServiceOrganization = _RespSrvcOrganizationOrgUnit.OrganizationalUnit

  // Added to correct the CRM Organizational Unit
  association [0..1] to I_SrvcMgmtOrganizationUnit   as _SalesOrganizationOrgUnit_2    on  $projection.SalesOrganizationOrgUnitID = _SalesOrganizationOrgUnit_2.OrgUnitTypeIDConcatenated

  association [0..1] to I_SrvcMgmtOrganizationUnit   as _SalesOfficeOrgUnit_2          on  $projection.SalesOfficeOrgUnitID = _SalesOfficeOrgUnit_2.OrgUnitTypeIDConcatenated

  association [0..1] to I_SrvcMgmtOrganizationUnit   as _SalesGroupOrgUnit_2           on  $projection.SalesGroupOrgUnitID = _SalesGroupOrgUnit_2.OrgUnitTypeIDConcatenated

  association [0..1] to I_SrvcMgmtOrganizationUnit   as _ServiceOrganizationOrgUnit_2  on  $projection.ServiceOrganization = _ServiceOrganizationOrgUnit_2.OrgUnitTypeIDConcatenated

  association [0..1] to I_SrvcMgmtOrganizationUnit   as _RespSrvcOrganizationOrgUnit_2 on  $projection.ResponsibleServiceOrganization = _RespSrvcOrganizationOrgUnit_2.OrgUnitTypeIDConcatenated

  association [0..1] to I_SalesOrganization          as _SalesOrganization             on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization

  association [0..1] to I_SalesOffice                as _SalesOffice                   on  $projection.SalesOffice = _SalesOffice.SalesOffice

  association [0..1] to I_SalesGroup                 as _SalesGroup                    on  $projection.SalesGroup = _SalesGroup.SalesGroup

  association [0..1] to I_Division                   as _Division                      on  $projection.Division = _Division.Division

  association [0..1] to I_DistributionChannel        as _DistributionChannel           on  $projection.DistributionChannel = _DistributionChannel.DistributionChannel

  association [0..1] to I_SalesDocumentRjcnReason    as _SrvcDocumentRejectionReason   on  $projection.ServiceDocumentRejectionReason = _SrvcDocumentRejectionReason.SalesDocumentRjcnReason

  association [0..1] to I_Country                    as _SoldToPartyCountry            on  $projection.SoldToPartyCountry = _SoldToPartyCountry.Country

  association [0..1] to I_Country                    as _TaxDepartureCountry           on  $projection.TaxDepartureCountry = _TaxDepartureCountry.Country

  association [0..1] to I_Country                    as _VATRegistrationCountry        on  $projection.VATRegistrationCountry = _VATRegistrationCountry.Country

  association [0..1] to I_Region                     as _SoldToPartyRegion             on  $projection.SoldToPartyRegion  = _SoldToPartyRegion.Region
                                                                                       and $projection.SoldToPartyCountry = _SoldToPartyRegion.Country

  association [0..1] to I_Region                     as _Region                        on  $projection.Region             = _Region.Region
                                                                                       and $projection.SoldToPartyCountry = _Region.Country

  association [0..1] to I_ServiceRisk                as _ServiceRisk                   on  $projection.ServiceRisk = _ServiceRisk.ServiceRisk

  association [0..1] to I_ServiceDocProblemCategory  as _ServiceDocProblemCategory     on  $projection.ServiceDocumentProblemCategory = _ServiceDocProblemCategory.ServiceDocumentProblemCategory

  association [0..1] to I_RespyMgmtTeamHeaderDetail  as _ServiceTeamHeader             on  $projection.RespyMgmtServiceTeam = _ServiceTeamHeader.RespyMgmtTeamID

  association [0..1] to I_EnterpriseServiceOrg       as _EnterpriseServiceOrg          on  $projection.EnterpriseServiceOrganization = _EnterpriseServiceOrg.EnterpriseServiceOrganization

  association [0..1] to I_ServiceContractCanclnSts   as _ServiceContractCanclnSts      on  $projection.ServiceContractCanclnSts = _ServiceContractCanclnSts.ServiceContractCanclnSts

  association [0..1] to I_SrvcDocTransferStatus      as _SrvcDocTransferStatus         on  $projection.SrvcDocTransferStatus = _SrvcDocTransferStatus.SrvcDocTransferStatus

  association [0..1] to I_SrvcDocCreditStatus        as _SrvcDocCreditStatus           on  $projection.SrvcDocCreditStatus = _SrvcDocCreditStatus.SrvcDocCreditStatus

  association [0..1] to E_ServiceDocument            as _ServiceDocumentExt            on  $projection.ServiceObjectType = _ServiceDocumentExt.ServiceCategory
                                                                                       and $projection.ServiceDocument   = _ServiceDocumentExt.ServiceOrder

  association [0..1] to I_SrvcDocBslnCostPostgStatus as _SrvcDocBslnCostPostgStatus    on  $projection.SrvcDocBslnCostPostgStatus = _SrvcDocBslnCostPostgStatus.SrvcDocBslnCostPostgStatus

  association [0..1] to I_SrvcDocBslnCostPostgStatus as _SrvcDocContinuousCostStatus   on  $projection.SrvcDocContinuousCostStatus = _SrvcDocContinuousCostStatus.SrvcDocBslnCostPostgStatus

  association [0..1] to I_SrvcDocPaymentMethod       as _PaymentMethod                 on  $projection.PaymentMethod                = _PaymentMethod.PaymentMethod
                                                                                       and (
                                                                                          $projection.SalesOrganization             = _PaymentMethod.SalesOrganization
                                                                                          or $projection.SalesOrganizationOrgUnitID = _PaymentMethod.OrgUnitTypeIDConcatenated
                                                                                        )


  association [0..1] to I_SrvcDocExecutionStatus     as _SrvcDocExecutionStatus        on  $projection.SrvcDocExecutionStatus     = _SrvcDocExecutionStatus.SrvcDocExecutionStatus
                                                                                       and $projection.ServiceDocumentIsQuotation = _SrvcDocExecutionStatus.ServiceDocumentIsQuotation

  association [1..1] to I_Indicator                  as _SrvcDocIsQuotation            on  $projection.ServiceDocumentIsQuotation = _SrvcDocIsQuotation.IndicatorValue

  association [1..1] to I_SrvcDocQuotationStatus_2   as _SrvcDocIsQuotation_2          on  $projection.ServiceDocumentIsQuotation = _SrvcDocIsQuotation_2.ServiceDocumentIsQuotation
{
      // Header Keys
      @ObjectModel.foreignKey.association: '_ServiceObjType'
  key objtype_h                                                            as ServiceObjectType,
      @ObjectModel.text.element: 'ServiceDocumentDescription'
  key object_id                                                            as ServiceDocument,

      // Header Details
      header_guid                                                          as ServiceDocumentUUID,
      header_guid_char                                                     as ServiceDocumentCharUUID,
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      process_type                                                         as ServiceDocumentType,
      @Semantics.text: true
      description_h                                                        as ServiceDocumentDescription,
      descr_language                                                       as Language,
      posting_date                                                         as PostingDate,
      template_type                                                        as ServiceDocumentTemplateType,
      created_at_h                                                         as ServiceDocCreationDateTime,
      changed_at_h                                                         as ServiceDocChangedDateTime,
      created_by_h                                                         as ServiceDocumentCreatedByUser,
      changed_by_h                                                         as ServiceDocumentChangedByUser,
      pricing_document                                                     as PricingDocument,
      pricing_procedure                                                    as PricingProcedure,
      refbussolnord                                                        as RefBusinessSolutionOrder,
      is_maintenance_order                                                 as SrvcDocIsMaintServiceOrder,

      // Activity
      @ObjectModel.foreignKey.association: '_ActivityCategory'
      category                                                             as BusinessActivityCategory,
      @ObjectModel.foreignKey.association: '_ServiceDocumentPriority'
      priority                                                             as ServiceDocumentPriority,

      // Cumulate Extension
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      net_value_h                                                          as ServiceDocNetAmount,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      gross_value_h                                                        as ServiceDocGrossAmount,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      tax_amount_h                                                         as ServiceDocTaxAmount,

      // Partner Details
      @ObjectModel.foreignKey.association: '_SoldToParty'
      sold_to_party                                                        as SoldToParty,
      @ObjectModel.foreignKey.association: '_SoldToPartyRegion'
      sold_to_region                                                       as SoldToPartyRegion,
      @ObjectModel.foreignKey.association: '_SoldToPartyCountry'
      sold_to_country                                                      as SoldToPartyCountry,
      @ObjectModel.foreignKey.association: '_ServiceTeam'
      service_team                                                         as ServiceTeam,
      @ObjectModel.foreignKey.association: '_RespEmployee'
      person_resp                                                          as ResponsibleEmployee,
      @ObjectModel.foreignKey.association: '_ServiceEmployee'
      service_employee                                                     as ServiceEmployee,
      @ObjectModel.foreignKey.association: '_ContactPerson'
      contact_person                                                       as ContactPerson,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      ship_to_party                                                        as ShipToParty,
      @ObjectModel.foreignKey.association: '_BillToParty'
      bill_to_party                                                        as BillToParty,
      payer                                                                as PayerParty,

      // Dates
      cast( valid_from as crms4_template_start preserving type )           as SrvcDocTmplValdtyStartDateTime,
      cast( valid_to as crms4_template_end preserving type )               as SrvcDocTmplValdtyEndDateTime,
      srv_cust_beg                                                         as RequestedServiceStartDateTime,
      srv_cust_end                                                         as RequestedServiceEndDateTime,
      contstart                                                            as ServiceContractStartDateTime,
      contend                                                              as ServiceContractEndDateTime,
      sc_earliest_start_date                                               as SrvcContrEarliestStartDateTime,
      sc_latest_end_date                                                   as SrvcContrLatestEndDateTime,
      cast( quot_start as crms4_cont_start )                               as SrvcQtanValidityStartDateTime,
      cast( quot_end as crms4_cont_end )                                   as SrvcQtanValidityEndDateTime,


      // Pricing Parameter Set
      @ObjectModel.foreignKey.association: '_PaymentTerms'
      pmnttrms                                                             as PaymentTerms,

      @ObjectModel.foreignKey.association: '_PaymentMethod'
      payment_method                                                       as PaymentMethod,

      @ObjectModel.foreignKey.association: '_SrvcSEPAMandateRelevance'
      sepa_on                                                              as SrvcSEPAMandateRelevance,
      mandate_id                                                           as SEPAMandate,

      wbs_element                                                          as WBSElementInternalID,

      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      @Semantics.currencyCode:true
      currency                                                             as TransactionCurrency,

      @ObjectModel.foreignKey.association: '_TaxDepartureCountry'
      tax_dep_cty                                                          as TaxDepartureCountry,

      @ObjectModel.foreignKey.association: '_VATRegistrationCountry'
      tax_dest_cty                                                         as VATRegistrationCountry,

      taxk1                                                                as CustomerTaxClassification1,
      taxk2                                                                as CustomerTaxClassification2,
      taxk3                                                                as CustomerTaxClassification3,
      taxk4                                                                as CustomerTaxClassification4,
      taxk5                                                                as CustomerTaxClassification5,
      taxk6                                                                as CustomerTaxClassification6,
      taxk7                                                                as CustomerTaxClassification7,
      taxk8                                                                as CustomerTaxClassification8,
      taxk9                                                                as CustomerTaxClassification9,

      // Sales Set
      po_number_sold                                                       as PurchaseOrderByCustomer,
      po_date_sold                                                         as CustomerPurchaseOrderDate,
      @ObjectModel.foreignKey.association: '_SrvcDocumentRejectionReason'
      rejection                                                            as ServiceDocumentRejectionReason,
      @ObjectModel.foreignKey.association: '_Region'
      region                                                               as Region,
      cust_hierarchy_relevance                                             as SrvcDocCustHierarchyRelevance,
      custh_branch_uuid                                                    as CustomerHierarchyBranchUUID,
      custh_branch_uuid_ori                                                as SrvcDocCustomerHierarchyOrigin,

      // Status
      @ObjectModel.foreignKey.association: '_SrvcDocLifecycleStatus'
      stat_lifecycle                                                       as ServiceDocumentStatus,
      stat_released                                                        as ServiceDocumentIsReleased,
      @ObjectModel.foreignKey.association: '_ServiceDocHasError'
      stat_error                                                           as ServiceDocumentHasError,
      @ObjectModel.foreignKey.association: '_ServiceDocBillingStatus'
      stat_billing                                                         as ServiceDocBillingStatus,
      @ObjectModel.foreignKey.association: '_SrvcDocIsRelForBillgSts'
      stat_for_billing                                                     as ServiceDocIsReleasedForBilling,
      stat_cancelled                                                       as ServiceDocumentIsRejected,
      @ObjectModel.foreignKey.association: '_ServiceDocumentIsOpen'
      stat_open                                                            as ServiceDocumentIsOpen,
      @ObjectModel.foreignKey.association: '_SrvcDocTransferStatus'
      stat_transfer                                                        as SrvcDocTransferStatus,
      @ObjectModel.foreignKey.association: '_SrvcDocIsQuotation_2'
      stat_quotation                                                       as ServiceDocumentIsQuotation,
      stat_final_conf                                                      as ServiceConfirmationIsFinal,
      @ObjectModel.foreignKey.association: '_ServiceContractCanclnSts'
      stat_contract_cancelled                                              as ServiceContractCanclnSts,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'SrvcDocExecutionStatus'
      stat_maintenance                                                     as MaintSrvcOrdExecutionStatus,
      @ObjectModel.foreignKey.association: '_SrvcDocExecutionStatus'
      stat_maintenance                                                     as SrvcDocExecutionStatus,
      stat_delivery                                                        as SrvcDocDeliveryStatus,
      stat_goods_issue                                                     as SrvcDocGoodsIssueStatus,
      stat_rejection                                                       as SrvcDocRejectionStatus,

      // Organizational Unit Set
      @ObjectModel.foreignKey.association: '_SalesOrganizationOrgUnit_2'
      sales_org                                                            as SalesOrganizationOrgUnitID,
      @ObjectModel.foreignKey.association: '_SalesOfficeOrgUnit_2'
      sales_office                                                         as SalesOfficeOrgUnitID,
      @ObjectModel.foreignKey.association: '_SalesGroupOrgUnit_2'
      sales_group                                                          as SalesGroupOrgUnitID,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      dis_channel                                                          as DistributionChannel,
      @ObjectModel.foreignKey.association: '_Division'
      division                                                             as Division,
      @ObjectModel.foreignKey.association: '_ServiceOrganizationOrgUnit_2'
      service_org                                                          as ServiceOrganization,
      @ObjectModel.foreignKey.association: '_RespSrvcOrganizationOrgUnit_2'
      service_org_resp                                                     as ResponsibleServiceOrganization,

      // Organizational units with the S/4 SD codes
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      sales_org_sd                                                         as SalesOrganization,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      sales_office_sd                                                      as SalesOffice,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      sales_group_sd                                                       as SalesGroup,

      // Service Organizational Units with S/4 Code
      service_team_rm                                                      as RespyMgmtServiceTeam,
      @ObjectModel.foreignKey.association: '_EnterpriseServiceOrg'
      enterprise_service_org                                               as EnterpriseServiceOrganization,

      // Billing Set
      @ObjectModel.foreignKey.association: '_BillingBlockReason'
      billing_block                                                        as BillingBlockReason,

      // Subject
      asp_id_01                                                            as ServiceReasonSchema,
      cat_id_01                                                            as ServiceReasonCategory,
      asp_id_02                                                            as ServiceDefectSchema,
      cat_id_02                                                            as ServiceDefectCategory,

      // Dates
      srv_rfirst                                                           as ServiceFirstResponseByDateTime,
      due_on                                                               as ServiceDueByDateTime,
      cast(req_dlv_date_h as  tzntstmps)                                   as ErlstRequestedDeliveryDateTime,

      // Service Request
      rec_priority                                                         as RecommendedServicePriority,
      urgency                                                              as ServiceDocumentUrgency,
      impact                                                               as ServiceDocumentImpact,
      escalation                                                           as ServiceEscalationLevel,
      @ObjectModel.foreignKey.association: '_ServiceDocProblemCategory'
      problem_category                                                     as ServiceDocumentProblemCategory,
      @ObjectModel.foreignKey.association: '_ServiceRisk'
      risk                                                                 as ServiceRisk,

      // Cancel Header
      cancparty                                                            as ServiceDocumentCanclnParty,
      canc_reason                                                          as ServiceDocumentCanclnReason,

      // In-House Repair Reference
      ref_inhouse_repair                                                   as ReferenceInHouseRepair,
      ref_inhouse_repair_item                                              as ReferenceInHouseRepairItem,
      has_ref_inhouse_repair                                               as RefInHouseRepairIsExisting,

      templ_searchterm                                                     as SrvcDocTemplateSearchTermText,

      // Credit Status
      @ObjectModel.foreignKey.association: '_SrvcDocCreditStatus'
      stat_credit                                                          as SrvcDocCreditStatus,

      // Baseline Cost Posting Status
      @ObjectModel.foreignKey.association: '_SrvcDocBslnCostPostgStatus'
      stat_bsln_cost_postg                                                 as SrvcDocBslnCostPostgStatus,

      // Cost Posting Status for Continuous Planning
      @ObjectModel.foreignKey.association: '_SrvcDocContinuousCostStatus'
      stat_cont_cost_calc                                                  as SrvcDocContinuousCostStatus,

      //Shipping
      ship_cond                                                            as ShippingCondition,

      //Pricing Group
      price_grp                                                            as CustomerPriceGroup,

      cast(ac_object_type as crmt_ac_object_type_no_conv preserving type ) as SrvcDocAcctAssgmtObjectType,
      ac_assignment                                                        as SrvcDocAcctAssgmtObject,

      dlv_prio                                                             as DeliveryPriority,
      incoterms1                                                           as IncotermsPart1,
      incoterms2                                                           as IncotermsPart2,
      contract_account                                                     as ContractAccount,

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
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SrvcDocTransferStatus,

      // Billing Set Associations
      _BillingBlockReason,

      // Activity Associations
      _ActivityCategory,
      _ServiceDocumentPriority,

      // Pricing Parameter Set
      _TransactionCurrency,
      _PaymentTerms,
      _PaymentMethod,
      _TaxDepartureCountry,
      _VATRegistrationCountry,

      //sepa mandate
      _SrvcSEPAMandateRelevance,

      _FixedPrice,

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
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _DistributionChannel,
      _Division,
      _EnterpriseServiceOrg,

      // Sales Set Assocaition
      _Region,
      _SrvcDocumentRejectionReason,

      // Service Request Association
      _ServiceRisk,
      _ServiceDocProblemCategory,

      // Credit Status association
      _SrvcDocCreditStatus,

      // Baseline Cost Posting status
      _SrvcDocBslnCostPostgStatus,

      // Cost Calc Status for Continuous Planning
      _SrvcDocContinuousCostStatus,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SrvcDocIsQuotation_2'
      _SrvcDocIsQuotation,

      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SrvcDocIsQuotation_2,

      _SrvcDocExecutionStatus
}
```
