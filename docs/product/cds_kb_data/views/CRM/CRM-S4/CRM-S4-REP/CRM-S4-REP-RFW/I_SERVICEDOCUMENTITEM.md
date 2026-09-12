---
name: I_SERVICEDOCUMENTITEM
description: "Service DocumentUMENTITEM"
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
# I_SERVICEDOCUMENTITEM

**Service DocumentUMENTITEM**

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
| `ServiceDocumentItem` | ✓ | |  | `number_int` | `NUMC(6)` | Shortened Item Number in Document |
| `ServiceDocumentDescription` |  | |  | `description_h` | `CHAR(40)` | Transaction Description |
| `ServiceDocumentType` |  | |  | `process_type` | `CHAR(4)` | Business Transaction Type |
| `ServiceDocumentItemPriority` |  | |  | `priority` | `NUMC(1)` | Activity Priority |
| `PostingDate` |  | |  | `posting_date` | `DATS(8)` | Posting Date for a Business Transaction |
| `ServicesRenderedDate` |  | |  | `srv_rendered_date` | `DATS(8)` | Service Rendered Date |
| `SrvcDocItmPostingDateTime` |  | |  | `cast( order_date as crms4_order_date preserving type )` | `DEC(15)` | Posting Date |
| `SrvcDocItmValdtyStartDateTime` |  | |  | `cast( valid_from as crms4_valid_from preserving type )` | `DEC(15)` | Time Dependency: Validity Start Date |
| `SrvcDocItmValdtyEndDateTime` |  | |  | `cast( valid_to as crms4_valid_to preserving type )` | `DEC(15)` | Time Dependency: Validity End Date |
| `ServiceDocumentItemUUID` |  | |  | `item_guid` | `RAW(16)` | GUID of a CRM Order Object |
| `ServiceDocumentItemCharUUID` |  | |  | `item_guid_char` | `CHAR(32)` | 32 Character CRM Object GUID (Converted) |
| `ServiceDocumentItemObjectType` |  | |  | `objtype_i` | `CHAR(10)` | CRM Item Object Type |
| `ServiceDocumentUUID` |  | |  | `header_guid` | `RAW(16)` | GUID of a CRM Order Object |
| `ParentServiceDocumentItemUUID` |  | |  | `parent` | `RAW(16)` | GUID of a CRM Order Object |
| `ServiceDocumentItemDescription` |  | |  | `description_i` | `CHAR(40)` | Product Description |
| `Language` |  | |  | `itm_language` | `LANG(1)` | Short Text Language for an Item |
| `ServiceDocumentTemplateType` |  | |  | `template_type` | `CHAR(1)` | Template Type of CRM Transaction |
| `ServiceDocItemCreationDateTime` |  | |  | `created_at_i` | `DEC(15)` | Created At |
| `ServiceDocItemChangedDateTime` |  | |  | `changed_at_i` | `DEC(15)` | Changed At |
| `ServiceDocItemCreatedByUser` |  | |  | `created_by_i` | `CHAR(12)` | User that Created the Transaction |
| `ServiceDocItemChangedByUser` |  | |  | `changed_by_i` | `CHAR(12)` | Transaction Last Changed By |
| `OriginallyRequestedProduct` |  | |  | `ordered_prod` | `CHAR(54)` | Product Name Entered |
| `Product` |  | |  | `product_id` | `CHAR(40)` | Product |
| `ServiceDocItemCategory` |  | |  | `itm_type` | `CHAR(4)` | Item Category |
| `ProfitCenter` |  | |  | `profit_center` | `CHAR(10)` | Profit Center |
| `ResponsibleCostCenter` |  | |  | `cost_center` | `CHAR(10)` | Cost Center |
| `ControllingArea` |  | |  | `kokrs` | `CHAR(4)` | Controlling Area |
| `ProfitCenterDeterminationDate` |  | |  | `profit_determine_date` | `DATS(8)` | Date |
| `RefBusinessSolutionOrder` |  | |  | `refbussolnord` | `CHAR(10)` | Reference Solution Order ID |
| `RefBusinessSolutionOrderItem` |  | |  | `refbussolnorditm` | `NUMC(6)` | Item Number in Referenced Solution Order |
| `BusSolnOrdItemBundleProduct` |  | |  | `bundle_product_id` | `CHAR(40)` | Product ID of Bundle Item |
| `BusSolnOrdItemBundleItem` |  | |  | `bundle_item_number` | `NUMC(6)` | Bundle Item Number in Document |
| `SrvcDocItmRequestedQuantity` |  | |  | `ordered_quantity` | `QUAN(15)` | Ordered Quantity |
| `InvoiceAmountInInvoiceDocCrcy` |  | |  | `billed_value` | `CURR(19)` | Invoice Value |
| `InvoiceQuantity` |  | |  | `billed_quantity` | `QUAN(15)` | Invoiced Quantity |
| `SrvcDocItmDeliveredQuantity` |  | |  | `dlv_quantity` | `QUAN(15)` | Delivered Quantity |
| `SrvcDocItmReleasedQuantity` |  | |  | `released_quantity` | `QUAN(15)` | Released Quantity |
| `CumulativeConfirmedQuantity` |  | |  | `confirmed_qty` | `QUAN(13)` | CRM: Confirmed Quantity |
| `SrvcDocItmReldAmtInTransCrcy` |  | |  | `released_value` | `CURR(19)` | Released Value |
| `SrvcDocItemCumulatedNetAmount` |  | |  | `main_item_cum_net_value` | `CURR(15)` | Cumulated Net Value |
| `SrvcDocItmOrdToBaseQtyNmrtr` |  | |  | `process_qty_num` | `INT4(10)` | Numerator (factor) for conversion trans. quantity in BME |
| `SrvcDocItmOrdToBaseQtyDnmntr` |  | |  | `process_qty_den` | `INT4(10)` | Denominator (factor) for conversion trans. quantity in BME |
| `OrderToBaseQuantityExponent` |  | |  | `exponent10` | `INT2(5)` | 10 Exponent for Quantity Conversion |
| `ServiceDocItemQuantityUnit` |  | |  | `process_qty_unit` | `UNIT(3)` | Unit of Measure in Which the Product Is Sold |
| `SrvcDocItemBaseQuantityUnit` |  | |  | `base_qty_unit` | `UNIT(3)` | Base Unit of Measure of Product |
| `SrvcDocItemIsRlvtForProdHier` |  | |  | `prod_hierarchy_relevance` | `CHAR(1)` | Product Hierarchy Relevance |
| `SlsProdHierarchyParentNodeUUID` |  | |  | `prodh_parent_node_uuid` | `CHAR(32)` | Product Hierarchy Parent Node UUID |
| `SrvcDocItmProdHierarchyOrigin` |  | |  | `prod_hierarchy_ori` | `CHAR(1)` | Source Indicator of Product Hierarchy |
| `BillingDateTime` |  | |  | `bill_date` | `DEC(15)` | Billing Date for Billing Index and Printout |
| `BillingDocCreationDateTime` |  | |  | `invcr_date` | `DEC(15)` | Billing Document Creation Date |
| `BillingPlanTimeZone` |  | |  | `billplan_timezone` | `CHAR(6)` | Time Zone of Billing Plan Set |
| `BillingPriceSourceName` |  | |  | `price_source` | `CHAR(15)` | Source of price in service confirmation |
| `SoldToParty` |  | |  | `sold_to_party` | `CHAR(10)` | Sold-To Party |
| `SoldToPartyCountry` |  | |  | `sold_to_country` | `CHAR(3)` | Country/Region |
| `SoldToPartyRegion` |  | |  | `sold_to_region` | `CHAR(3)` | Region (State, Province, County) |
| `ServiceTeam` |  | |  | `service_team` | `CHAR(10)` | Service Team |
| `ResponsibleEmployee` |  | |  | `person_resp` | `CHAR(10)` | Employee Responsible |
| `ServiceEmployee` |  | |  | `service_employee` | `CHAR(10)` | Executing Service Employee |
| `ContactPerson` |  | |  | `contact_person` | `CHAR(10)` | Customer Contact Person |
| `PayerParty` |  | |  | `payer` | `CHAR(10)` | Payer |
| `BillToParty` |  | |  | `bill_to_party` | `CHAR(10)` | Bill-To Party |
| `ShipToParty` |  | |  | `ship_to_party` | `CHAR(10)` | Ship-To Party |
| `ServiceDocumentItemStatus` |  | |  | `stat_lifecycle` | `CHAR(4)` | Life Cycle Status |
| `ServiceDocumentItemHasError` |  | |  | `stat_error` | `CHAR(1)` | Error Status |
| `ServiceDocItemBillingStatus` |  | |  | `stat_billing` | `CHAR(1)` | Billing Status |
| `SrvcDocItmIsReleasedForBilling` |  | |  | `stat_for_billing` | `CHAR(1)` | Billing Release Status |
| `ServiceDocumentItemIsOpen` |  | |  | `stat_open` | `CHAR(1)` | Status "Open" |
| `SrvcDocItmDeliveryStatus` |  | |  | `stat_delivery` | `CHAR(1)` | Delivery Status |
| `SrvcDocItmGoodsIssueStatus` |  | |  | `stat_goods_issue` | `CHAR(1)` | Goods Issue Status |
| `ServiceDocumentItemIsReleased` |  | |  | `stat_released` | `CHAR(1)` | Release Status |
| `ServiceDocumentItemIsRejected` |  | |  | `stat_cancelled` | `CHAR(1)` | Cancellation Status |
| `SrvcDocItemIsWithdrawn` |  | |  | `stat_withdrawn` | `CHAR(1)` |  |
| `ServiceDocumentItemIsQuotation` |  | |  | `stat_quotation` | `CHAR(1)` | Quotation Status |
| `SrvcDocItemTransferStatus` |  | |  | `stat_transfer` | `CHAR(1)` | Transfer Status |
| `MaintSrvcOrdExecutionStatus` |  | |  | `stat_maintenance` | `CHAR(2)` | Execution Status |
| `SrvcDocItemExecutionStatus` |  | |  | `stat_maintenance` | `CHAR(2)` | Execution Status |
| `ServiceDocumentItemQuantity` |  | |  | `order_qty` | `QUAN(13)` | CRM: Order Quantity |
| `TransactionCurrency` |  | |  | `currency` | `CUKY(5)` | Currency |
| `StatisticsCurrency` |  | |  | `ref_currency` | `CUKY(5)` | Reference Currency |
| `ExchangeRateType` |  | |  | `exchg_type` | `CHAR(4)` | Exchange Rate Type |
| `ExchangeRateDate` |  | |  | `exchg_date` | `DATS(8)` | Exchange Rate Date |
| `AccountingExchangeRate` |  | |  | `exchg_rate` | `DEC(9)` | Exchange Rate |
| `PaymentTerms` |  | |  | `pmnttrms` | `CHAR(4)` | Terms of Payment |
| `PaymentMethod` |  | |  | `payment_method` | `CHAR(1)` | Payment Method |
| `SrvcSEPAMandateRelevance` |  | |  | `sepa_on` | `CHAR(1)` | Indicator for SEPA-Relevant Transactions |
| `SEPAMandate` |  | |  | `mandate_id` | `CHAR(35)` | Unique Reference to Mandate per Payment Recipient |
| `WBSElementInternalID` |  | |  | `wbs_element` | `NUMC(8)` | WBS Element |
| `BillableControl` |  | |  | `ac_indicator` | `CHAR(2)` | Accounting Indicator |
| `VATRegistrationCountry` |  | |  | `tax_dest_cty` | `CHAR(3)` | Tax Destination Country/Region |
| `ProductTaxClassification1` |  | |  | `taxm1` | `CHAR(1)` | Tax Classification of Material |
| `ProductTaxClassification2` |  | |  | `taxm2` | `CHAR(1)` | Tax Classification 2 for Material |
| `ProductTaxClassification3` |  | |  | `taxm3` | `CHAR(1)` | Tax Classification 3 for Material |
| `ProductTaxClassification4` |  | |  | `taxm4` | `CHAR(1)` | Tax Classification 4 for Material |
| `ProductTaxClassification5` |  | |  | `taxm5` | `CHAR(1)` | Tax Classification 5 for Material |
| `ProductTaxClassification6` |  | |  | `taxm6` | `CHAR(1)` | Tax Classification 6 for Material |
| `ProductTaxClassification7` |  | |  | `taxm7` | `CHAR(1)` | Tax Classification 7 for Material |
| `ProductTaxClassification8` |  | |  | `taxm8` | `CHAR(1)` | Tax Classification 8 for Material |
| `ProductTaxClassification9` |  | |  | `taxm9` | `CHAR(1)` | Tax Classification 9 for Material |
| `ServiceDocumentItemNetAmount` |  | |  | `net_value_i` | `CURR(15)` | Net Value |
| `ServiceDocumentItemTaxAmount` |  | |  | `tax_amount_i` | `CURR(15)` | Tax amount in document currency |
| `ServiceDocItemGrossAmount` |  | |  | `gross_value_i` | `CURR(15)` | Gross Order Value in PO Currency |
| `ServiceDocumentItemNetPrice` |  | |  | `net_price_i` | `CURR(15)` | Net Price |
| `BillingBlockReason` |  | |  | `billing_block` | `CHAR(2)` | Business Partner: Billing Block Reason |
| `SrvcDocItmBillingRelevance` |  | |  | `billing_relevance` | `CHAR(1)` | Billing Relevance |
| `DynItemProcessorPrfl` |  | |  | `dip_profile` | `CHAR(8)` | Dynamic Item Processor Profile |
| `ProductGroup` |  | |  | `prod_pr_group` | `CHAR(2)` | Material Price Group |
| `SrvcMaterialPricingGroup` |  | |  | `prod_pr_group` | `CHAR(2)` | Material Price Group |
| `MaterialPricingGroup_2` |  | |  | `prod_pr_group` | `CHAR(2)` | Material Price Group |
| `ProductGroup1` |  | |  | `prc_group1` | `CHAR(3)` | Material Group 1 |
| `ProductGroup2` |  | |  | `prc_group2` | `CHAR(3)` | Material Group 2 |
| `ProductGroup3` |  | |  | `prc_group3` | `CHAR(3)` | Material Group 3 |
| `ProductGroup4` |  | |  | `prc_group4` | `CHAR(3)` | Material Group 4 |
| `ProductGroup5` |  | |  | `prc_group5` | `CHAR(3)` | Material Group 5 |
| `ProductHierarchy` |  | |  | `prod_hierarchy` | `CHAR(20)` | Product Category |
| `Industry` |  | |  | `industry` | `CHAR(4)` | Industry Sector |
| `PurchaseOrderByCustomer` |  | |  | `po_number_sold` | `CHAR(35)` | Sold-To Party's External Reference Number |
| `PurchaseOrderByShipToParty` |  | |  | `po_number_ship` | `CHAR(35)` | Ship-To Party's External Reference Number |
| `ServiceDocItemRejectionReason` |  | |  | `rejection` | `CHAR(2)` | Cancellation Reason Code |
| `CustomerGroup` |  | |  | `cust_group` | `CHAR(2)` | Customer Group |
| `AdditionalCustomerGroup1` |  | |  | `cust_group1` | `CHAR(3)` | Customer Group 1 |
| `AdditionalCustomerGroup2` |  | |  | `cust_group2` | `CHAR(3)` | Customer Group 2 |
| `AdditionalCustomerGroup3` |  | |  | `cust_group3` | `CHAR(3)` | Customer Group 3 |
| `AdditionalCustomerGroup4` |  | |  | `cust_group4` | `CHAR(3)` | Customer Group 4 |
| `AdditionalCustomerGroup5` |  | |  | `cust_group5` | `CHAR(3)` | Customer Group 5 |
| `Plant` |  | |  | `plant` | `CHAR(4)` | Plant |
| `ServiceSchema1Category1UUID` |  | |  | `catlvlguid01_01` | `RAW(16)` | Category GUID 1- schema 1 |
| `ServiceSchema1Category2UUID` |  | |  | `catlvlguid02_01` | `RAW(16)` | Category GUID 2- schema 1 |
| `ServiceSchema1Category3UUID` |  | |  | `catlvlguid03_01` | `RAW(16)` | Category GUID 3- schema 1 |
| `ServiceSchema1Category4UUID` |  | |  | `catlvlguid04_01` | `RAW(16)` | Category GUID 4- schema 1 |
| `ServiceSchema1Category5UUID` |  | |  | `catlvlguid05_01` | `RAW(16)` | Category GUID 5- schema 1 |
| `ServiceSchema1Category6UUID` |  | |  | `catlvlguid06_01` | `RAW(16)` | Category GUID 6- schema 1 |
| `ServiceSchema1Category7UUID` |  | |  | `catlvlguid07_01` | `RAW(16)` | Category GUID 7- schema 1 |
| `ServiceSchema1Category8UUID` |  | |  | `catlvlguid08_01` | `RAW(16)` | Category GUID 8- schema 1 |
| `ServiceSchema1Category9UUID` |  | |  | `catlvlguid09_01` | `RAW(16)` | Category GUID 9- schema 1 |
| `ServiceSchema1Category10UUID` |  | |  | `catlvlguid10_01` | `RAW(16)` | Category GUID 10- schema 1 |
| `SrvcCatztnSchema1` |  | |  | `asp_id_01` | `CHAR(40)` | Coherent Cat. - Aspect ID |
| `SrvcCatztnSchemaCategory1` |  | |  | `cat_id_01` | `CHAR(40)` | Coherent Cat. - Category ID |
| `ServiceSchema2Category1UUID` |  | |  | `catlvlguid01_02` | `RAW(16)` | Category GUID 1- schema 2 |
| `ServiceSchema2Category2UUID` |  | |  | `catlvlguid02_02` | `RAW(16)` | Category GUID 2- schema 2 |
| `ServiceSchema2Category3UUID` |  | |  | `catlvlguid03_02` | `RAW(16)` | Category GUID 3- schema 2 |
| `ServiceSchema2Category4UUID` |  | |  | `catlvlguid04_02` | `RAW(16)` | Category GUID 4- schema 2 |
| `ServiceSchema2Category5UUID` |  | |  | `catlvlguid05_02` | `RAW(16)` | Category GUID 5- schema 2 |
| `ServiceSchema2Category6UUID` |  | |  | `catlvlguid06_02` | `RAW(16)` | Category GUID 6- schema 2 |
| `ServiceSchema2Category7UUID` |  | |  | `catlvlguid07_02` | `RAW(16)` | Category GUID 7- schema 2 |
| `ServiceSchema2Category8UUID` |  | |  | `catlvlguid08_02` | `RAW(16)` | Category GUID 8- schema 2 |
| `ServiceSchema2Category9UUID` |  | |  | `catlvlguid09_02` | `RAW(16)` | Category GUID 9- schema 2 |
| `ServiceSchema2Category10UUID` |  | |  | `catlvlguid10_02` | `RAW(16)` | Category GUID 10- schema 2 |
| `SrvcCatztnSchema2` |  | |  | `asp_id_02` | `CHAR(40)` | Coherent Cat. - Aspect ID |
| `SrvcCatztnSchemaCategory2` |  | |  | `cat_id_02` | `CHAR(40)` | Coherent Cat. - Category ID |
| `SettlementPeriodRuleUUID` |  | |  | `billplan_d_rule_period_date` | `RAW(16)` | Rule for Determining the Period Date |
| `BillingPlanBillingDateRuleUUID` |  | |  | `billplan_d_rule_bill_date` | `RAW(16)` | Rule for Determining the Next Billing Date |
| `BillingPlanPriceDateRule` |  | |  | `billplan_d_rule_price_date` | `CHAR(1)` | Rule for Determining the Pricing Date |
| `BillingPlanIsFinalized` |  | |  | `billingplanisfinalized` | `CHAR(1)` | Billing Plan Is Finalized |
| `SalesOrganizationOrgUnitID` |  | |  | `sales_org` | `CHAR(14)` | Sales Organization ID |
| `SalesOfficeOrgUnitID` |  | |  | `sales_office` | `CHAR(14)` | Sales Office |
| `SalesGroupOrgUnitID` |  | |  | `sales_group` | `CHAR(14)` | Sales Group |
| `DistributionChannel` |  | |  | `dis_channel` | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  | `division` | `CHAR(2)` | Division |
| `ResponsibleSalesOrganization` |  | |  | `sales_org_resp` | `CHAR(14)` | Organizational Unit (Sales) |
| `ServiceOrganization` |  | |  | `service_org` | `CHAR(14)` | Service Organization |
| `ResponsibleServiceOrganization` |  | |  | `service_org_resp` | `CHAR(14)` | Organizational Unit (Service) |
| `SalesOrganization` |  | |  | `sales_org_sd` | `CHAR(4)` | Sales Organization |
| `SalesOffice` |  | |  | `sales_office_sd` | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  | `sales_group_sd` | `CHAR(3)` | Sales Group |
| `RespyMgmtServiceTeam` |  | |  | `service_team_rm` | `NUMC(8)` | Service Team (Responsibility Management) |
| `EnterpriseServiceOrganization` |  | |  | `enterprise_service_org` | `CHAR(4)` | Enterprise Service Organization |
| `EnterpriseProjectServiceOrg` |  | |  | `proj_org_id` | `CHAR(5)` | Service Organization (Project) |
| `RequestedServiceStartDateTime` |  | |  | `srv_cust_beg` | `DEC(15)` | Service Request Start Date |
| `RequestedServiceEndDateTime` |  | |  | `srv_cust_end` | `DEC(15)` | Service Request Due Date |
| `ServiceContrItemStartDateTime` |  | |  | `contstart` | `DEC(15)` | Contract Start date |
| `ServiceContrItemEndDateTime` |  | |  | `contend` | `DEC(15)` | Contract End Date |
| `ServiceFirstResponseByDateTime` |  | |  | `srv_rfirst` | `DEC(15)` | First Response By |
| `SrvcDocItemSLADueByDateTime` |  | |  | `srv_rready` | `DEC(15)` | Due By |
| `ActualServiceStartDateTime` |  | |  | `srvc_actual` | `DEC(15)` | Service Actual Start Date |
| `ActualServiceEndDateTime` |  | |  | `srvc_act_to` | `DEC(15)` | Service Actual End Date |
| `ServiceWorkDuration` |  | |  | `srq_work_dura` | `DEC(8)` | Work Duration of Service Transaction |
| `ServiceWorkDuration_2` |  | |  | `srq_work_dura_2` | `DEC(13)` | Work Duration 2 of Service Transaction |
| `ServiceWorkDurationUnit` |  | |  | `srq_work_unit` | `CHAR(2)` | Work Duration Unit of Service Transaction |
| `SrvcDocItmTmeSliceStrtDteTme` |  | |  | `cont_start_ts` | `DEC(15)` | Start of Contract Time Slice |
| `SrvcDocItmTmeSliceEndDteTme` |  | |  | `cont_end_ts` | `DEC(15)` | End of Contract Time Slice |
| `SrvcContrItemRenewalDateTime` |  | |  | `auto_renew_start` | `DEC(15)` | Start Date of Auto Renewal Period |
| `SrvcContrItemRnwlDuration` |  | |  | `auto_renew_period` | `QUAN(13)` | Unit for Auto Renewal Period |
| `SrvcContrItemRnwlDurationUnit` |  | |  | `auto_renew_period_unit` | `UNIT(3)` | UOM for Auto Renewal Period |
| `SrvcContrItemExtensionDuration` |  | |  | `auto_renew_exten` | `QUAN(13)` | Unit for Contract Extension |
| `SrvcContrItemExtnDurationUnit` |  | |  | `auto_renew_exten_unit` | `UNIT(3)` | UOM for Contract Extension |
| `PlannedServiceStartDateTime` |  | |  | `spla_planfr` | `DEC(15)` | Service Planned From Date |
| `PlannedServiceEndDateTime` |  | |  | `spla_planto` | `DEC(15)` | Service Planned To Date |
| `SrvcDocItemGracePeriod` |  | |  | `grace_period` | `QUAN(13)` | Grace Period |
| `SrvcDocItemGracePeriodUnit` |  | |  | `grace_period_unit` | `UNIT(3)` | Unit of Grace Period |
| `SrvcDocItmGrcePerdEndDateTime` |  | |  | `grace_period_end` | `DEC(15)` | End Date of Grace Period |
| `SbscrContrItmBizValdStrtDteTme` |  | |  | `biz_valid_start` | `DEC(15)` | Start Date of Business Validity |
| `SbscrContrItmBizValdEndDteTme` |  | |  | `biz_valid_end` | `DEC(15)` | End Date of Business Validity |
| `SrvcDocSubitemOrigin` |  | |  | `itm_usage` | `CHAR(2)` | Usage of Higher-Level Item |
| `SrvcDocItmAcctAssgmtObjectType` |  | |  | `cast(ac_object_type as crmt_ac_object_type_no_conv preserving type )` | `CHAR(2)` | Obj.Type for Sett.Acc.Assgnmnt for Search Help or Cust.Exit |
| `SrvcDocItmAcctAssgmtObject` |  | |  | `ac_assignment` | `CHAR(50)` | Settlement Account Assignment |
| `ActualServiceDuration` |  | |  | `srv_conf_time` | `QUAN(7)` | Confirmed Duration |
| `ActualServiceDurationUnit` |  | |  | `srv_conf_tunit` | `UNIT(3)` | Time Unit for Confirmed Duration |
| `SrvcOrderConfirmationRelevance` |  | |  | `confirm_relevant` | `CHAR(1)` | Relevant for Confirmation |
| `ServiceTransactionChargeType` |  | |  | `service_type` | `CHAR(4)` | Service Type |
| `SrvcTransactionValuationType` |  | |  | `valuation_type` | `CHAR(6)` | Valuation Type |
| `ResponseProfile` |  | |  | `srv_escal` | `CHAR(10)` | Response Profile |
| `ServiceProfile` |  | |  | `srv_serwi` | `CHAR(10)` | Service Profile |
| `ServiceDuration` |  | |  | `duration` | `QUAN(13)` | Duration |
| `ServiceDurationUnit` |  | |  | `duration_unit` | `UNIT(3)` | Unit for Duration of Work |
| `TimeSheetOvertimeCategory` |  | |  | `overtime_cat` | `CHAR(4)` | Overtime Category |
| `MasterWarranty` |  | |  | `warranty_id` | `CHAR(20)` | Master warranty number |
| `ContractAccount` |  | |  | `contract_account` | `CHAR(12)` | Contract Account Number |
| `ItemOrderProbabilityInPercent` |  | |  | `probability` | `NUMC(3)` | Order Probability |
| `QuotationIsAccepted` |  | |  | `stat_accepted` | `CHAR(1)` | Acceptance Status |
| `ConfigurationNumber` |  | |  | `int_obj_no` | `NUMC(18)` | Configuration (Internal Object Number) |
| `IncotermsPart1` |  | |  | `incoterms1` | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsPart2` |  | |  | `incoterms2` | `CHAR(28)` | Incoterms (Part 2) |
| `DeliveryPriority` |  | |  | `dlv_prio` | `NUMC(2)` | Delivery Priority |
| `OrderCombinationIsAllowed` |  | |  | `ordercombind` | `CHAR(1)` | Indicator: Order Combination |
| `PartialDeliveryIsAllowed` |  | |  | `part_dlv_itm` | `CHAR(1)` | Delivery Control (Item) |
| `CABillgCycle` |  | |  | `ci_billing_cycle` | `CHAR(4)` | Billing Cycle |
| `RevenueAccountingReference` |  | |  | `revacc_refid` | `CHAR(30)` | Revenue Accounting Reference ID |
| `RevenueAccountingRefType` |  | |  | `revacc_reftype` | `CHAR(3)` | Revenue Accounting Reference Type |
| `ItemGrossWeight` |  | |  | `gross_weight_i` | `QUAN(15)` | Gross Weight |
| `ItemNetWeight` |  | |  | `net_weight_i` | `QUAN(15)` | Net Weight |
| `ItemWeightUnit` |  | |  | `weight_unit_i` | `UNIT(3)` | Unit of Weight |
| `ItemVolume` |  | |  | `volume_i` | `QUAN(15)` | Volume Occupied by the Product per Volume Unit |
| `ItemVolumeUnit` |  | |  | `volume_unit_i` | `UNIT(3)` | Unit for the Volume of a Product |
| `MaterialPricingGroup` |  | |  | `price_grp` | `CHAR(2)` | Customer Price Group |
| `CustomerPriceGroup` |  | |  | `price_grp` | `CHAR(2)` | Customer Price Group |
| `DeliveryGroup` |  | |  | `dlv_group` | `NUMC(3)` | Delivery Group (Items are Delivered Together) |
| `DeliveryBlockReason` |  | |  | `delivery_block` | `CHAR(2)` | Business Partner: Delivery Block Reason |
| `ErlstConfirmedDeliveryDateTime` |  | |  | `first_conf_date` | `DEC(15)` | First Confirmed Delivery Date for Item |
| `LtstConfirmedDeliveryDateTime` |  | |  | `latest_conf_date` | `DEC(15)` | Latest Confirmation Date for an Item |
| `RequestedDeliveryDateTime` |  | |  | `cast(first_req_date as tzntstmps)` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `SubscrpnOrdProdSelType` |  | |  | `prod_sel_type` | `CHAR(1)` | Product Selection Type |
| `SubscriptionContract` |  | |  | `ci_contract_id` | `CHAR(20)` | IS-T Contract Number |
| `SrvcTransChangeProcess` |  | |  | `btmf_process` | `CHAR(32)` | BTMF Process |
| `SrvcTransChangeProcessType` |  | |  | `btmf_process_type` | `CHAR(4)` | BTMF Process Type |
| `SrvcTransChgProcSourceItemUUID` |  | |  | `ci_contract_item` | `RAW(16)` | Contract Item Identifier |
| `CustMgmtMasterAgreement` |  | |  | `ma_head_objid` | `CHAR(10)` | Transaction ID |
| `CustMgmtMstrAgrmtItem` |  | |  | `ma_item_objid` | `NUMC(6)` | Shortened Item Number in Document |
| `SubscrpnContrActivationStatus` |  | |  | `stat_activation` | `CHAR(1)` | Activation Status of Subscription Order/Contract |
| `SubscrpnContrTimeSliceStatus` |  | |  | `stat_cont_ts` | `CHAR(1)` | Status of Contract Time Slice |
| `SharingContractID` |  | |  | `pool_agr_ref` | `CHAR(20)` | Reference to Sharing Contract |
| `CrsCatalogMappingVersionNumber` |  | |  | `ccm_version` | `NUMC(4)` | Version |
| `CustMgmtMstrAgrmtParentItem` |  | |  | `ma_root_objid` | `NUMC(6)` | Shortened Item Number in Document |
| `SubscrpnContractSharingGroupID` |  | |  | `sharing_group_id` | `CHAR(10)` | Sharing Group ID |
| `CAPartnerSettlementRule` |  | |  | `ci_partner_rule` | `CHAR(4)` | Partner Settlement Rule |
| `ChangeProcessGroup` |  | |  | `changeprocessgroup` | `CHAR(32)` | BTMF Process Group |
| `BusSolutionQtnItemIsPhased` |  | |  | `phase_indicator` | `CHAR(1)` | Phase Indicator |
| `BusSolnQtnItmPhasedPrdcssrItem` |  | |  | `successor_of` | `NUMC(6)` | Shortened Item Number in Document |
| `SubscriptionContractItem` |  | |  | `cont_ref_item` | `NUMC(6)` | Shortened Item Number in Document |
| `SrvcDocItemWithdrawalReason` |  | |  | `withdrawal_reason` | `CHAR(2)` | Reason for Withdrawal of Subscription Contract |
| `SrvcDocItemRefundType` |  | |  | `refund_code` | `CHAR(4)` | Refund Code for Withdrawal of Subscription Contract |
| `SrvcDocItmRecrrgChrgNetAmount` |  | |  | `recurring_charge` | `CURR(15)` | Periodically charged values |
| `SubscrpnContrTrmsAreSpecified` |  | |  | `default_terms_ovrwrt` | `CHAR(1)` | Overwrite Default Terms |
| `MidBillgCycExprtnIsAllowed` |  | |  | `midbillcycexprtnallwd` | `CHAR(1)` | Allow Mid-Bill-Cycle Expiration |
| `SrvcDocItmRecrrgChrgTaxAmount` |  | |  | `recurring_tax` | `CURR(15)` | Periodically charged taxes |
| `SrvcDocItmRecrrgChrgGrossAmt` |  | |  | `recurring_gross` | `CURR(15)` | Periodically charged values including taxes |
| `SrvcDocItmRecrrgChrgDuration` |  | |  | `rec_duration` | `DEC(13)` | Duration of a recurrence period |
| `SrvcDocItmRecrrgChrgDurnUnit` |  | |  | `rec_time_unit` | `CHAR(12)` | Time unit  of a recurrence period |
| `SubscriptionContractReference` |  | |  | `cont_ref` | `CHAR(10)` | Transaction ID |
| `SubscriptionBillingCycle` |  | |  | `subscrpnbillgcycle` | `CHAR(4)` | Billing Cycle |
| `SubscrpnBillgRatePlanCharUUID` |  | |  | `rate_plan_id` | `CHAR(32)` | Rate Plan ID |
| `SubscriptionContractExternalID` |  | |  | `subscriptioncontractexternalid` | `CHAR(20)` | IS-T Contract Number |
| `SbscrShContrSvTrMtAgrItmUUID` |  | |  | `ma_share_ref` | `RAW(16)` | Sharing Order/Contract: Reference to Master Agreement |
| `SbscrShContrSvTrMtAgrItmCstPrd` |  | |  | `ma_share_ref_prod_id` | `CHAR(40)` | Sharing Order/Contract: Reference to Master Agreement Prod. |
| `SvTrMtAgrItmIsFxdConfign` |  | |  | `case fix_config when 'A' then 'X' else '' end` | `CHAR(1)` |  |
| `SubscrpnContrItmBillgPlnCyc` |  | |  | `ci_billing_plan_cycle` | `CHAR(4)` | Billing Plan Cycle |
| `SubscrpnOrdIsPending` |  | |  | `subscrp_stat_is_pndg` | `CHAR(1)` | Create Subscription as Pending |
| `NrOfBillgCyclesBilledTogether` |  | |  | `billgcyc_billd_togthr_nr` | `NUMC(2)` | Number of Cycles Billed Together |
| `ServiceDocumentItemCanclnParty` |  | |  | `cancparty` | `CHAR(4)` | Cancelling Party |
| `ServiceDocumentItmCanclnReason` |  | |  | `canc_reason` | `CHAR(4)` | CRM Service : Reason for Cancellation |
| `SrvcDocItmCanclnProcedure` |  | |  | `cancproc` | `CHAR(4)` | Cancellation Procedure |
| `ServiceDocumentRnwlDuration` |  | |  | `auto_renew_period` | `QUAN(13)` | Unit for Auto Renewal Period |
| `ServiceDocRnwlDurationUnit` |  | |  | `auto_renew_period_unit` | `UNIT(3)` | UOM for Auto Renewal Period |
| `ServiceDocExtensionDuration` |  | |  | `auto_renew_exten` | `QUAN(13)` | Unit for Contract Extension |
| `ServiceDocExtnDurationUnit` |  | |  | `auto_renew_exten_unit` | `UNIT(3)` | UOM for Contract Extension |
| `SubscrpnContrAutoRnwlIsActv` |  | |  | `auto_renew_indicator` | `CHAR(1)` | Auto-Renewal Indicator |
| `ReferenceInHouseRepair` |  | |  | `ref_inhouse_repair` | `CHAR(10)` | Reference In-House Repair |
| `ReferenceInHouseRepairItem` |  | |  | `ref_inhouse_repair_item` | `NUMC(6)` | Reference In-House Repair Item |
| `RefInHouseRepairIsExisting` |  | |  | `has_ref_inhouse_repair` | `CHAR(1)` | Reference to In-House Repair Exists |
| `SrvcDocItemCreditStatus` |  | |  | `stat_credit` | `CHAR(1)` | Credit Status of Item |
| `SrvcDocItmBslnCostPostgStatus` |  | |  | `stat_bsln_cost_postg` | `CHAR(1)` | Baseline Planned Cost and Revenue Item Status |
| `SrvcDocItmContinuousCostStatus` |  | |  | `stat_cont_cost_calc` | `CHAR(1)` | Ongoing Planned Cost and Revenue Status at Item Level |
| `SrvcDocItemConcurStatus` |  | |  | `stat_concur` | `CHAR(1)` | Concur Status |
| `SrvcDocItemIsUnplanned` |  | |  | `is_unplanned_item` | `CHAR(1)` | Unplanned Item |
| `ShippingCondition` |  | |  | `ship_cond` | `CHAR(2)` | Shipping Conditions |
| `SrvcDocItmGoodsIssueQuantity` |  | |  | `gi_quantity` | `QUAN(15)` | Goods Issue Quantity |
| `Batch` |  | |  | `batch` | `CHAR(10)` | Batch Number |
| `SrvcDocItmPartReferenceItem` |  | |  | `item_no_partner` | `NUMC(6)` | Shortened Item Number in Document |
| `SrvcDocItmApptRefObjectUUID` |  | |  | `ref_guid_appt` | `RAW(16)` | GUID of a CRM Order Object |
| `SrvcDocItmApptReferenceItem` |  | |  | `item_no_appt` | `NUMC(6)` | Shortened Item Number in Document |
| `SrvcDocItmRefObjReferenceItem` |  | |  | `item_no_refobj` | `NUMC(6)` | Shortened Item Number in Document |
| `_SoldToParty` | | ✓ | | | | |
| `_RespEmployee` | | ✓ | | | | |
| `_ServiceTeam` | | ✓ | | | | |
| `_ServiceEmployee` | | ✓ | | | | |
| `_ContactPerson` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceDocItemCategory` | | ✓ | | | | |
| `_ServiceDocItemPriority` | | ✓ | | | | |
| `_ServiceDocItemStatus` | | ✓ | | | | |
| `_SrvcDocItmLifecycleStatus` | | ✓ | | | | |
| `_ServiceDocItemBillingStatus` | | ✓ | | | | |
| `_SrvcDocItemIsRelForBillgSts` | | ✓ | | | | |
| `_ServiceDocItemHasError` | | ✓ | | | | |
| `_ServiceDocumentIsOpen` | | ✓ | | | | |
| `_ServiceDocument` | | ✓ | | | | |
| `_ServiceObjType` | | ✓ | | | | |
| `_BillingBlockReason` | | ✓ | | | | |
| `_DeliveryBlockReason` | | ✓ | | | | |
| `_BillingRequestItem` | | ✓ | | | | |
| `_ServiceProductList` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_BaseUnit_2` | | ✓ | | | | |
| `_SalesUnit` | | ✓ | | | | |
| `_ServiceDurationUnit` | | ✓ | | | | |
| `_ActualServiceDurationUnit` | | ✓ | | | | |
| `_SrvcContrItemExtnDurationUnit` | | ✓ | | | | |
| `_SrvcContrItemRnwlDurationUnit` | | ✓ | | | | |
| `_VolumeUnit` | | ✓ | | | | |
| `_WeightUnit` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_PaymentTerms` | | ✓ | | | | |
| `_PaymentMethod` | | ✓ | | | | |
| `_SrvcSEPAMandateRelevance` | | ✓ | | | | |
| `_FixedPrice` | | ✓ | | | | |
| `_StatusObjItemStatus` | | ✓ | | | | |
| `_ServiceOrganizationOrgUnit` | | ✓ | | | | |
| `_RespSrvcOrganizationOrgUnit` | | ✓ | | | | |
| `_SalesOrganizationOrgUnit` | | ✓ | | | | |
| `_SalesOfficeOrgUnit` | | ✓ | | | | |
| `_SalesGroupOrgUnit` | | ✓ | | | | |
| `_SalesOrganizationOrgUnit_2` | | ✓ | | | | |
| `_SalesOfficeOrgUnit_2` | | ✓ | | | | |
| `_SalesGroupOrgUnit_2` | | ✓ | | | | |
| `_ServiceOrganizationOrgUnit_2` | | ✓ | | | | |
| `_RespSrvcOrganizationOrgUnit_2` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_ServiceDocOvertimeCat` | | ✓ | | | | |
| `_Industry` | | ✓ | | | | |
| `_ServiceDocItemRejectionReason` | | ✓ | | | | |
| `_SoldToPartyRegion` | | ✓ | | | | |
| `_SoldToPartyCountry` | | ✓ | | | | |
| `_VATRegistrationCountry` | | ✓ | | | | |
| `_ServiceTeamHeader` | | ✓ | | | | |
| `_EnterpriseServiceOrg` | | ✓ | | | | |
| `_BillPlanDateRule` | | ✓ | | | | |
| `_SettlementDateRule` | | ✓ | | | | |
| `_ResponseProfile` | | ✓ | | | | |
| `_ServiceProfile` | | ✓ | | | | |
| `_TechResource` | | ✓ | | | | |
| `_MasterAgrmtItem` | | ✓ | | | | |
| `_BillableControl` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_SrvcMgmtProductHierarchy` | | ✓ | | | | |
| `_SrvcMaterialPricingGroup` | | ✓ | | | | |
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
| `_SrvcDocItemTransferStatus` | | ✓ | | | | |
| `_SrvcDocItemCreditStatus` | | ✓ | | | | |
| `_SrvcDocItmBslnCostPostgStat` | | ✓ | | | | |
| `_SrvcDocItmContinuousCostStat` | | ✓ | | | | |
| `_SrvcDocExecutionStatus` | | ✓ | | | | |
| `_SrvcDocIsQuotation` | | ✓ | | | | |
| `_SrvcDocIsQuotation_2` | | ✓ | | | | |
| `_SrvcDocItemBillgRlvnce` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SoldToParty` | `I_BusinessPartner` | [0..1] |
| `_RespEmployee` | `I_BusinessPartner` | [0..1] |
| `_ServiceTeam` | `I_BusinessPartner` | [0..1] |
| `_ServiceEmployee` | `I_BusinessPartner` | [0..1] |
| `_ContactPerson` | `I_BusinessPartner` | [0..1] |
| `_PayerParty` | `I_BusinessPartner` | [0..1] |
| `_BillToParty` | `I_BusinessPartner` | [0..1] |
| `_ShipToParty` | `I_BusinessPartner` | [0..1] |
| `_ServiceDocumentType` | `I_ServiceDocumentType` | [0..1] |
| `_ServiceDocItemCategory` | `I_ServiceDocItemCategory` | [0..1] |
| `_ServiceDocItemPriority` | `I_ServiceDocumentPriority` | [0..1] |
| `_ServiceDocItemStatus` | `I_ServiceDocumentStatus` | [0..1] |
| `_SrvcDocItmLifecycleStatus` | `I_SrvcDocLifecycleStatus` | [0..1] |
| `_ServiceDocItemBillingStatus` | `I_ServiceDocBillingStatus` | [0..1] |
| `_SrvcDocItemIsRelForBillgSts` | `I_SrvcDocRelForBillgSts` | [0..1] |
| `_ServiceDocItemHasError` | `I_ServiceDocErrorStatus` | [0..1] |
| `_ServiceDocumentIsOpen` | `I_ServiceDocOpenStatus` | [0..1] |
| `_ServiceDocument` | `I_ServiceDocument` | [1..1] |
| `_ServiceObjType` | `I_CustMgmtBusObjType` | [1..1] |
| `_BillingBlockReason` | `I_BillingBlockReason` | [0..1] |
| `_DeliveryBlockReason` | `I_DeliveryBlockReason` | [0..1] |
| `_BillingRequestItem` | `I_BillingRequestItem` | [0..*] |
| `_ServiceProductList` | `I_ServiceProductList` | [0..*] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_BaseUnit_2` | `I_UnitOfMeasure` | [0..1] |
| `_SalesUnit` | `I_UnitOfMeasure` | [0..1] |
| `_ServiceDurationUnit` | `I_UnitOfMeasure` | [0..1] |
| `_ActualServiceDurationUnit` | `I_UnitOfMeasure` | [0..1] |
| `_SrvcContrItemExtnDurationUnit` | `I_UnitOfMeasure` | [0..1] |
| `_SrvcContrItemRnwlDurationUnit` | `I_UnitOfMeasure` | [0..1] |
| `_VolumeUnit` | `I_UnitOfMeasure` | [0..1] |
| `_WeightUnit` | `I_UnitOfMeasure` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_PaymentTerms` | `I_PaymentTerms` | [0..1] |
| `_PaymentMethod` | `I_SrvcDocPaymentMethod` | [0..1] |
| `_SrvcSEPAMandateRelevance` | `I_SrvcSEPAMandateRelevance` | [0..1] |
| `_FixedPrice` | `I_ServiceDocumentFixedPrice` | [0..1] |
| `_StatusObjItemStatus` | `I_StatusObjectUUIDStatus` | [0..*] |
| `_ServiceOrganizationOrgUnit` | `I_SalesOrganizationUnit` | [0..1] |
| `_RespSrvcOrganizationOrgUnit` | `I_SalesOrganizationUnit` | [0..1] |
| `_SalesOrganizationOrgUnit` | `I_SalesOrganizationUnit` | [0..1] |
| `_SalesOfficeOrgUnit` | `I_SalesOrganizationUnit` | [0..1] |
| `_SalesGroupOrgUnit` | `I_SalesOrganizationUnit` | [0..1] |
| `_SalesOrganizationOrgUnit_2` | `I_SrvcMgmtOrganizationUnit` | [0..1] |
| `_SalesOfficeOrgUnit_2` | `I_SrvcMgmtOrganizationUnit` | [0..1] |
| `_SalesGroupOrgUnit_2` | `I_SrvcMgmtOrganizationUnit` | [0..1] |
| `_ServiceOrganizationOrgUnit_2` | `I_SrvcMgmtOrganizationUnit` | [0..1] |
| `_RespSrvcOrganizationOrgUnit_2` | `I_SrvcMgmtOrganizationUnit` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_SalesOffice` | `I_SalesOffice` | [0..1] |
| `_SalesGroup` | `I_SalesGroup` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_ServiceDocOvertimeCat` | `I_TimeSheetOvertimeCat` | [0..1] |
| `_Industry` | `I_CustomerSupplierIndustry` | [0..1] |
| `_ServiceDocItemRejectionReason` | `I_SalesDocumentRjcnReason` | [0..1] |
| `_SoldToPartyRegion` | `I_Region` | [0..1] |
| `_SoldToPartyCountry` | `I_Country` | [0..1] |
| `_VATRegistrationCountry` | `I_Country` | [0..1] |
| `_ServiceTeamHeader` | `I_RespyMgmtTeamHeaderDetail` | [0..1] |
| `_EnterpriseServiceOrg` | `I_EnterpriseServiceOrg` | [0..1] |
| `_ServiceDocItemExt` | `E_ServiceDocumentItem` | [0..1] |
| `_BillPlanDateRule` | `I_CustMgmtDateRule` | [0..1] |
| `_SettlementDateRule` | `I_CustMgmtDateRule` | [0..1] |
| `_ResponseProfile` | `I_ResponseProfile` | [0..1] |
| `_ServiceProfile` | `I_ServiceProfile` | [0..1] |
| `_TechResource` | `I_SubscrpnItmTechResource` | [0..*] |
| `_MasterAgrmtItem` | `I_CustMgmtMasterAgrmtItem` | [0..1] |
| `_BillableControl` | `I_BillableControl` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_Product` | `I_Product` | [1..1] |
| `_ProductGroup` | `I_ProductGroup_2` | [0..1] |
| `_SrvcMgmtProductHierarchy` | `I_SrvcMgmtProductHierarchy` | [0..1] |
| `_SrvcMaterialPricingGroup` | `I_MaterialPricingGroup` | [0..1] |
| `_MaterialPricingGroup_2` | `I_MaterialPricingGroup` | [0..1] |
| `_AdditionalMaterialGroup1` | `I_AdditionalMaterialGroup1` | [0..1] |
| `_AdditionalMaterialGroup2` | `I_AdditionalMaterialGroup2` | [0..1] |
| `_AdditionalMaterialGroup3` | `I_AdditionalMaterialGroup3` | [0..1] |
| `_AdditionalMaterialGroup4` | `I_AdditionalMaterialGroup4` | [0..1] |
| `_AdditionalMaterialGroup5` | `I_AdditionalMaterialGroup5` | [0..1] |
| `_CustomerGroup` | `I_CustomerGroup` | [0..1] |
| `_AdditionalCustomerGroup1` | `I_AdditionalCustomerGroup1` | [0..1] |
| `_AdditionalCustomerGroup2` | `I_AdditionalCustomerGroup2` | [0..1] |
| `_AdditionalCustomerGroup3` | `I_AdditionalCustomerGroup3` | [0..1] |
| `_AdditionalCustomerGroup4` | `I_AdditionalCustomerGroup4` | [0..1] |
| `_AdditionalCustomerGroup5` | `I_AdditionalCustomerGroup5` | [0..1] |
| `_SrvcDocItemTransferStatus` | `I_SrvcDocTransferStatus` | [0..1] |
| `_SrvcDocItemCreditStatus` | `I_SrvcDocItemCreditStatus` | [0..1] |
| `_SrvcDocItmBslnCostPostgStat` | `I_SrvcDocItmBslnCostPostgStat` | [0..1] |
| `_SrvcDocItmContinuousCostStat` | `I_SrvcDocItmBslnCostPostgStat` | [0..1] |
| `_SrvcDocExecutionStatus` | `I_SrvcDocExecutionStatus` | [0..1] |
| `_SrvcDocIsQuotation` | `I_Indicator` | [1..1] |
| `_SrvcDocIsQuotation_2` | `I_SrvcDocQuotationStatus_2` | [1..1] |
| `_SrvcDocItemBillgRlvnce` | `I_SrvcDocItemBillgRlvnce` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Service Transaction Item'
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AbapCatalog: {
  sqlViewName: 'ISERVDOCITM',
  compiler.compareFilter: true,
  preserveKey: true
}
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@ObjectModel: {
  representativeKey: 'ServiceDocumentItem',
  usageType: {
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #A,
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

define view I_ServiceDocumentItem
  as select from crms4d_serv_i
  association [0..1] to I_BusinessPartner             as _SoldToParty                   on  $projection.SoldToParty = _SoldToParty.BusinessPartner
  association [0..1] to I_BusinessPartner             as _RespEmployee                  on  $projection.ResponsibleEmployee = _RespEmployee.BusinessPartner
  association [0..1] to I_BusinessPartner             as _ServiceTeam                   on  $projection.ServiceTeam = _ServiceTeam.BusinessPartner
  association [0..1] to I_BusinessPartner             as _ServiceEmployee               on  $projection.ServiceEmployee = _ServiceEmployee.BusinessPartner
  association [0..1] to I_BusinessPartner             as _ContactPerson                 on  $projection.ContactPerson = _ContactPerson.BusinessPartner
  association [0..1] to I_BusinessPartner             as _PayerParty                    on  $projection.PayerParty = _PayerParty.BusinessPartner
  association [0..1] to I_BusinessPartner             as _BillToParty                   on  $projection.BillToParty = _BillToParty.BusinessPartner
  association [0..1] to I_BusinessPartner             as _ShipToParty                   on  $projection.ShipToParty = _ShipToParty.BusinessPartner

  association [0..1] to I_ServiceDocumentType         as _ServiceDocumentType           on  $projection.ServiceDocumentType = _ServiceDocumentType.ServiceDocumentType
  association [0..1] to I_ServiceDocItemCategory      as _ServiceDocItemCategory        on  $projection.ServiceDocItemCategory = _ServiceDocItemCategory.ServiceDocItemCategory
  association [0..1] to I_ServiceDocumentPriority     as _ServiceDocItemPriority        on  $projection.ServiceDocumentItemPriority = _ServiceDocItemPriority.ServiceDocumentPriority
  association [0..1] to I_ServiceDocumentStatus       as _ServiceDocItemStatus          on  $projection.ServiceDocumentItemStatus = _ServiceDocItemStatus.ServiceDocumentStatus
  association [0..1] to I_SrvcDocLifecycleStatus      as _SrvcDocItmLifecycleStatus     on  $projection.ServiceDocumentItemStatus = _SrvcDocItmLifecycleStatus.ServiceDocumentStatus
  association [0..1] to I_ServiceDocBillingStatus     as _ServiceDocItemBillingStatus   on  $projection.ServiceDocItemBillingStatus = _ServiceDocItemBillingStatus.ServiceDocBillingStatus
  association [0..1] to I_SrvcDocRelForBillgSts       as _SrvcDocItemIsRelForBillgSts   on  $projection.SrvcDocItmIsReleasedForBilling = _SrvcDocItemIsRelForBillgSts.ServiceDocIsReleasedForBilling
  association [0..1] to I_ServiceDocErrorStatus       as _ServiceDocItemHasError        on  $projection.ServiceDocumentItemHasError = _ServiceDocItemHasError.ServiceDocumentHasError
  association [0..1] to I_ServiceDocOpenStatus        as _ServiceDocumentIsOpen         on  $projection.ServiceDocumentItemIsOpen = _ServiceDocumentIsOpen.ServiceDocumentIsOpen
  association [1..1] to I_ServiceDocument             as _ServiceDocument               on  $projection.ServiceObjectType = _ServiceDocument.ServiceObjectType
                                                                                        and $projection.ServiceDocument   = _ServiceDocument.ServiceDocument

  association [1..1] to I_CustMgmtBusObjType          as _ServiceObjType                on  $projection.ServiceObjectType = _ServiceObjType.BusinessObjectType

  association [0..1] to I_BillingBlockReason          as _BillingBlockReason            on  $projection.BillingBlockReason = _BillingBlockReason.BillingBlockReason
  association [0..1] to I_DeliveryBlockReason         as _DeliveryBlockReason           on  $projection.DeliveryBlockReason = _DeliveryBlockReason.DeliveryBlockReason

  association [0..*] to I_BillingRequestItem          as _BillingRequestItem            on  $projection.ServiceObjectType   = _BillingRequestItem.ServiceObjectType
                                                                                        and $projection.ServiceDocument     = _BillingRequestItem.ServiceDocument
                                                                                        and $projection.ServiceDocumentItem = _BillingRequestItem.ServiceDocumentItem

  association [0..*] to I_ServiceProductList          as _ServiceProductList            on  $projection.ServiceObjectType   = _ServiceProductList.ServiceObjectType
                                                                                        and $projection.ServiceDocument     = _ServiceProductList.ServiceDocument
                                                                                        and $projection.ServiceDocumentItem = _ServiceProductList.ServiceDocumentItem

  association [0..1] to I_UnitOfMeasure               as _BaseUnit                      on  $projection.ServiceDocItemQuantityUnit = _BaseUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _BaseUnit_2                    on  $projection.SrvcDocItemBaseQuantityUnit = _BaseUnit_2.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _SalesUnit                     on  $projection.ServiceDocItemQuantityUnit = _SalesUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _ServiceDurationUnit           on  $projection.ServiceDurationUnit = _ServiceDurationUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _ActualServiceDurationUnit     on  $projection.ActualServiceDurationUnit = _ActualServiceDurationUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _SrvcContrItemExtnDurationUnit on  $projection.SrvcContrItemExtnDurationUnit = _SrvcContrItemExtnDurationUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _SrvcContrItemRnwlDurationUnit on  $projection.SrvcContrItemRnwlDurationUnit = _SrvcContrItemRnwlDurationUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _VolumeUnit                    on  $projection.ItemVolumeUnit = _VolumeUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _WeightUnit                    on  $projection.ItemWeightUnit = _WeightUnit.UnitOfMeasure
  association [0..1] to I_Currency                    as _TransactionCurrency           on  $projection.TransactionCurrency = _TransactionCurrency.Currency

  association [0..1] to I_PaymentTerms                as _PaymentTerms                  on  $projection.PaymentTerms = _PaymentTerms.PaymentTerms

  association [0..1] to I_SrvcDocPaymentMethod        as _PaymentMethod                 on  $projection.PaymentMethod                = _PaymentMethod.PaymentMethod
                                                                                        and (
                                                                                           $projection.SalesOrganization             = _PaymentMethod.SalesOrganization
                                                                                           or $projection.SalesOrganizationOrgUnitID = _PaymentMethod.OrgUnitTypeIDConcatenated
                                                                                         )

  association [0..1] to I_SrvcSEPAMandateRelevance    as _SrvcSEPAMandateRelevance      on  $projection.SrvcSEPAMandateRelevance = _SrvcSEPAMandateRelevance.SrvcSEPAMandateRelevance

  association [0..1] to I_ServiceDocumentFixedPrice   as _FixedPrice                    on  $projection.ServiceObjectType   = _FixedPrice.ServiceObjectType
                                                                                        and $projection.ServiceDocument     = _FixedPrice.ServiceDocument
                                                                                        and $projection.ServiceDocumentItem = _FixedPrice.PricingDocumentItem

  association [0..*] to I_StatusObjectUUIDStatus      as _StatusObjItemStatus           on  $projection.ServiceDocumentItemUUID = _StatusObjItemStatus.StatusObjectUUID

  association [0..1] to I_SalesOrganizationUnit       as _ServiceOrganizationOrgUnit    on  $projection.ServiceOrganization = _ServiceOrganizationOrgUnit.OrganizationalUnit

  association [0..1] to I_SalesOrganizationUnit       as _RespSrvcOrganizationOrgUnit   on  $projection.ResponsibleServiceOrganization = _RespSrvcOrganizationOrgUnit.OrganizationalUnit


  association [0..1] to I_SalesOrganizationUnit       as _SalesOrganizationOrgUnit      on  $projection.SalesOrganizationOrgUnitID = _SalesOrganizationOrgUnit.OrganizationalUnit

  association [0..1] to I_SalesOrganizationUnit       as _SalesOfficeOrgUnit            on  $projection.SalesOfficeOrgUnitID = _SalesOfficeOrgUnit.OrganizationalUnit

  association [0..1] to I_SalesOrganizationUnit       as _SalesGroupOrgUnit             on  $projection.SalesGroupOrgUnitID = _SalesGroupOrgUnit.OrganizationalUnit

  // Added to correct the CRM Organizational Unit
  association [0..1] to I_SrvcMgmtOrganizationUnit    as _SalesOrganizationOrgUnit_2    on  $projection.SalesOrganizationOrgUnitID = _SalesOrganizationOrgUnit_2.OrgUnitTypeIDConcatenated

  association [0..1] to I_SrvcMgmtOrganizationUnit    as _SalesOfficeOrgUnit_2          on  $projection.SalesOfficeOrgUnitID = _SalesOfficeOrgUnit_2.OrgUnitTypeIDConcatenated

  association [0..1] to I_SrvcMgmtOrganizationUnit    as _SalesGroupOrgUnit_2           on  $projection.SalesGroupOrgUnitID = _SalesGroupOrgUnit_2.OrgUnitTypeIDConcatenated

  association [0..1] to I_SrvcMgmtOrganizationUnit    as _ServiceOrganizationOrgUnit_2  on  $projection.ServiceOrganization = _ServiceOrganizationOrgUnit_2.OrgUnitTypeIDConcatenated

  association [0..1] to I_SrvcMgmtOrganizationUnit    as _RespSrvcOrganizationOrgUnit_2 on  $projection.ResponsibleServiceOrganization = _RespSrvcOrganizationOrgUnit_2.OrgUnitTypeIDConcatenated
  //

  association [0..1] to I_SalesOrganization           as _SalesOrganization             on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization

  association [0..1] to I_SalesOffice                 as _SalesOffice                   on  $projection.SalesOffice = _SalesOffice.SalesOffice

  association [0..1] to I_SalesGroup                  as _SalesGroup                    on  $projection.SalesGroup = _SalesGroup.SalesGroup

  association [0..1] to I_DistributionChannel         as _DistributionChannel           on  $projection.DistributionChannel = _DistributionChannel.DistributionChannel

  association [0..1] to I_Division                    as _Division                      on  $projection.Division = _Division.Division

  association [0..1] to I_TimeSheetOvertimeCat        as _ServiceDocOvertimeCat         on  $projection.TimeSheetOvertimeCategory = _ServiceDocOvertimeCat.TimeSheetOvertimeCategory

  association [0..1] to I_CustomerSupplierIndustry    as _Industry                      on  $projection.Industry = _Industry.Industry

  association [0..1] to I_SalesDocumentRjcnReason     as _ServiceDocItemRejectionReason on  $projection.ServiceDocItemRejectionReason = _ServiceDocItemRejectionReason.SalesDocumentRjcnReason

  association [0..1] to I_Region                      as _SoldToPartyRegion             on  $projection.SoldToPartyRegion  = _SoldToPartyRegion.Region
                                                                                        and $projection.SoldToPartyCountry = _SoldToPartyRegion.Country

  association [0..1] to I_Country                     as _SoldToPartyCountry            on  $projection.SoldToPartyCountry = _SoldToPartyCountry.Country

  association [0..1] to I_Country                     as _VATRegistrationCountry        on  $projection.VATRegistrationCountry = _VATRegistrationCountry.Country

  association [0..1] to I_RespyMgmtTeamHeaderDetail   as _ServiceTeamHeader             on  $projection.RespyMgmtServiceTeam = _ServiceTeamHeader.RespyMgmtTeamID

  association [0..1] to I_EnterpriseServiceOrg        as _EnterpriseServiceOrg          on  $projection.EnterpriseServiceOrganization = _EnterpriseServiceOrg.EnterpriseServiceOrganization

  association [0..1] to E_ServiceDocumentItem         as _ServiceDocItemExt             on  $projection.ServiceObjectType   = _ServiceDocItemExt.ServiceCategory
                                                                                        and $projection.ServiceDocument     = _ServiceDocItemExt.ServiceOrderItem
                                                                                        and $projection.ServiceDocumentItem = _ServiceDocItemExt.ServiceLineExternalID
  association [0..1] to I_CustMgmtDateRule            as _BillPlanDateRule              on  $projection.BillingPlanBillingDateRuleUUID = _BillPlanDateRule.CustMgmtDateRuleUUID

  association [0..1] to I_CustMgmtDateRule            as _SettlementDateRule            on  $projection.SettlementPeriodRuleUUID = _SettlementDateRule.CustMgmtDateRuleUUID

  association [0..1] to I_ResponseProfile             as _ResponseProfile               on  $projection.ResponseProfile = _ResponseProfile.ResponseProfile

  association [0..1] to I_ServiceProfile              as _ServiceProfile                on  $projection.ServiceProfile = _ServiceProfile.ServiceProfile


  association [0..*] to I_SubscrpnItmTechResource     as _TechResource                  on  $projection.ServiceObjectType   = _TechResource.ServiceObjectType
                                                                                        and $projection.ServiceDocument     = _TechResource.ServiceDocument
                                                                                        and $projection.ServiceDocumentItem = _TechResource.ServiceDocumentItem

  association [0..1] to I_CustMgmtMasterAgrmtItem     as _MasterAgrmtItem               on  _MasterAgrmtItem.ServiceObjectType  = 'BUS2000267'
                                                                                        and $projection.CustMgmtMasterAgreement = _MasterAgrmtItem.CustMgmtMasterAgreement
                                                                                        and $projection.CustMgmtMstrAgrmtItem   = _MasterAgrmtItem.CustMgmtMstrAgrmtItem

  association [0..1] to I_BillableControl             as _BillableControl               on  $projection.BillableControl = _BillableControl.BillableControl

  association [0..*] to I_ProfitCenter                as _ProfitCenter                  on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                                        and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter

  association [0..1] to I_ControllingArea             as _ControllingArea               on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [1..1] to I_Product                     as _Product                       on  $projection.Product = _Product.Product

  association [0..1] to I_ProductGroup_2              as _ProductGroup                  on  $projection.ProductGroup = _ProductGroup.ProductGroup

  association [0..1] to I_SrvcMgmtProductHierarchy    as _SrvcMgmtProductHierarchy      on  $projection.ProductHierarchy = _SrvcMgmtProductHierarchy.SrvcProductHierarchy

  association [0..1] to I_MaterialPricingGroup        as _SrvcMaterialPricingGroup      on  $projection.SrvcMaterialPricingGroup = _SrvcMaterialPricingGroup.MaterialPricingGroup

  association [0..1] to I_MaterialPricingGroup        as _MaterialPricingGroup_2        on  $projection.MaterialPricingGroup_2 = _MaterialPricingGroup_2.MaterialPricingGroup

  association [0..1] to I_AdditionalMaterialGroup1    as _AdditionalMaterialGroup1      on  $projection.ProductGroup1 = _AdditionalMaterialGroup1.AdditionalMaterialGroup1

  association [0..1] to I_AdditionalMaterialGroup2    as _AdditionalMaterialGroup2      on  $projection.ProductGroup2 = _AdditionalMaterialGroup2.AdditionalMaterialGroup2

  association [0..1] to I_AdditionalMaterialGroup3    as _AdditionalMaterialGroup3      on  $projection.ProductGroup3 = _AdditionalMaterialGroup3.AdditionalMaterialGroup3

  association [0..1] to I_AdditionalMaterialGroup4    as _AdditionalMaterialGroup4      on  $projection.ProductGroup4 = _AdditionalMaterialGroup4.AdditionalMaterialGroup4

  association [0..1] to I_AdditionalMaterialGroup5    as _AdditionalMaterialGroup5      on  $projection.ProductGroup5 = _AdditionalMaterialGroup5.AdditionalMaterialGroup5

  association [0..1] to I_CustomerGroup               as _CustomerGroup                 on  $projection.CustomerGroup = _CustomerGroup.CustomerGroup

  association [0..1] to I_AdditionalCustomerGroup1    as _AdditionalCustomerGroup1      on  $projection.AdditionalCustomerGroup1 = _AdditionalCustomerGroup1.AdditionalCustomerGroup1

  association [0..1] to I_AdditionalCustomerGroup2    as _AdditionalCustomerGroup2      on  $projection.AdditionalCustomerGroup2 = _AdditionalCustomerGroup2.AdditionalCustomerGroup2

  association [0..1] to I_AdditionalCustomerGroup3    as _AdditionalCustomerGroup3      on  $projection.AdditionalCustomerGroup3 = _AdditionalCustomerGroup3.AdditionalCustomerGroup3

  association [0..1] to I_AdditionalCustomerGroup4    as _AdditionalCustomerGroup4      on  $projection.AdditionalCustomerGroup4 = _AdditionalCustomerGroup4.AdditionalCustomerGroup4

  association [0..1] to I_AdditionalCustomerGroup5    as _AdditionalCustomerGroup5      on  $projection.AdditionalCustomerGroup5 = _AdditionalCustomerGroup5.AdditionalCustomerGroup5

  association [0..1] to I_SrvcDocTransferStatus       as _SrvcDocItemTransferStatus     on  $projection.SrvcDocItemTransferStatus = _SrvcDocItemTransferStatus.SrvcDocTransferStatus

  association [0..1] to I_SrvcDocItemCreditStatus     as _SrvcDocItemCreditStatus       on  $projection.SrvcDocItemCreditStatus = _SrvcDocItemCreditStatus.SrvcDocItemCreditStatus

  association [0..1] to I_SrvcDocItmBslnCostPostgStat as _SrvcDocItmBslnCostPostgStat   on  $projection.SrvcDocItmBslnCostPostgStatus = _SrvcDocItmBslnCostPostgStat.SrvcDocItmBslnCostPostgStatus

  association [0..1] to I_SrvcDocItmBslnCostPostgStat as _SrvcDocItmContinuousCostStat  on  $projection.SrvcDocItmContinuousCostStatus = _SrvcDocItmContinuousCostStat.SrvcDocItmBslnCostPostgStatus

  association [0..1] to I_SrvcDocExecutionStatus      as _SrvcDocExecutionStatus        on  $projection.SrvcDocItemExecutionStatus     = _SrvcDocExecutionStatus.SrvcDocExecutionStatus
                                                                                        and $projection.ServiceDocumentItemIsQuotation = _SrvcDocExecutionStatus.ServiceDocumentIsQuotation

  association [1..1] to I_Indicator                   as _SrvcDocIsQuotation            on  $projection.ServiceDocumentItemIsQuotation = _SrvcDocIsQuotation.IndicatorValue
  association [1..1] to I_SrvcDocQuotationStatus_2    as _SrvcDocIsQuotation_2          on  $projection.ServiceDocumentItemIsQuotation = _SrvcDocIsQuotation_2.ServiceDocumentIsQuotation

  association [1..1] to I_SrvcDocItemBillgRlvnce      as _SrvcDocItemBillgRlvnce        on  $projection.SrvcDocItmBillingRelevance = _SrvcDocItemBillgRlvnce.SrvcDocItmBillingRelevance
{
      // Header Keys
      @ObjectModel.foreignKey.association: '_ServiceObjType'
  key objtype_h                                                            as ServiceObjectType,
      @ObjectModel.foreignKey.association: '_ServiceDocument'
  key object_id                                                            as ServiceDocument,
      @ObjectModel.text.element: 'ServiceDocumentItemDescription'
  key number_int                                                           as ServiceDocumentItem,

      // Header Details
      description_h                                                        as ServiceDocumentDescription,
      // Process Type is required for Search by Document Type view
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      process_type                                                         as ServiceDocumentType,
      priority                                                             as ServiceDocumentItemPriority,
      posting_date                                                         as PostingDate,
      srv_rendered_date                                                    as ServicesRenderedDate,
      //      order_date                           as SrvcDocItmPostingDateTime,
      //      valid_from                           as SrvcDocItmValdtyStartDateTime,
      //      valid_to                             as SrvcDocItmValdtyEndDateTime,
      cast( order_date as crms4_order_date preserving type )               as SrvcDocItmPostingDateTime,
      cast( valid_from as crms4_valid_from preserving type )               as SrvcDocItmValdtyStartDateTime,
      cast( valid_to as crms4_valid_to preserving type )                   as SrvcDocItmValdtyEndDateTime,

      // Item Details
      item_guid                                                            as ServiceDocumentItemUUID,
      item_guid_char                                                       as ServiceDocumentItemCharUUID,
      objtype_i                                                            as ServiceDocumentItemObjectType,
      header_guid                                                          as ServiceDocumentUUID,
      parent                                                               as ParentServiceDocumentItemUUID,
      @Semantics.text: true
      description_i                                                        as ServiceDocumentItemDescription,
      itm_language                                                         as Language,
      template_type                                                        as ServiceDocumentTemplateType,
      created_at_i                                                         as ServiceDocItemCreationDateTime,
      changed_at_i                                                         as ServiceDocItemChangedDateTime,
      created_by_i                                                         as ServiceDocItemCreatedByUser,
      changed_by_i                                                         as ServiceDocItemChangedByUser,
      ordered_prod                                                         as OriginallyRequestedProduct,
      @ObjectModel.foreignKey.association: '_Product'
      product_id                                                           as Product, //represents MATNR & is added to enable JOIN with MVKE
      @ObjectModel.foreignKey.association: '_ServiceDocItemCategory'
      itm_type                                                             as ServiceDocItemCategory,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      profit_center                                                        as ProfitCenter,
      cost_center                                                          as ResponsibleCostCenter,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      kokrs                                                                as ControllingArea,
      profit_determine_date                                                as ProfitCenterDeterminationDate,
      refbussolnord                                                        as RefBusinessSolutionOrder,
      refbussolnorditm                                                     as RefBusinessSolutionOrderItem,
      bundle_product_id                                                    as BusSolnOrdItemBundleProduct,
      bundle_item_number                                                   as BusSolnOrdItemBundleItem,

      // Item - Cumulated Value
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      ordered_quantity                                                     as SrvcDocItmRequestedQuantity,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      billed_value                                                         as InvoiceAmountInInvoiceDocCrcy,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      billed_quantity                                                      as InvoiceQuantity,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      dlv_quantity                                                         as SrvcDocItmDeliveredQuantity,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      released_quantity                                                    as SrvcDocItmReleasedQuantity,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      confirmed_qty                                                        as CumulativeConfirmedQuantity,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      released_value                                                       as SrvcDocItmReldAmtInTransCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      main_item_cum_net_value                                              as SrvcDocItemCumulatedNetAmount,

      // Item - Product
      process_qty_num                                                      as SrvcDocItmOrdToBaseQtyNmrtr,
      process_qty_den                                                      as SrvcDocItmOrdToBaseQtyDnmntr,
      exponent10                                                           as OrderToBaseQuantityExponent,
      @ObjectModel.foreignKey.association: '_SalesUnit'
      @Semantics.unitOfMeasure:true
      process_qty_unit                                                     as ServiceDocItemQuantityUnit,
      @ObjectModel.foreignKey.association: '_BaseUnit_2'
      @Semantics.unitOfMeasure:true
      base_qty_unit                                                        as SrvcDocItemBaseQuantityUnit,
      prod_hierarchy_relevance                                             as SrvcDocItemIsRlvtForProdHier,
      prodh_parent_node_uuid                                               as SlsProdHierarchyParentNodeUUID,
      prod_hierarchy_ori                                                   as SrvcDocItmProdHierarchyOrigin,
      // Billing Set
      bill_date                                                            as BillingDateTime,
      invcr_date                                                           as BillingDocCreationDateTime,
      billplan_timezone                                                    as BillingPlanTimeZone,

      // Item Pricing
      price_source                                                         as BillingPriceSourceName,

      // Partner Details
      @ObjectModel.foreignKey.association: '_SoldToParty'
      sold_to_party                                                        as SoldToParty,
      @ObjectModel.foreignKey.association: '_SoldToPartyCountry'
      sold_to_country                                                      as SoldToPartyCountry,
      @ObjectModel.foreignKey.association: '_SoldToPartyRegion'
      sold_to_region                                                       as SoldToPartyRegion,
      @ObjectModel.foreignKey.association: '_ServiceTeam'
      service_team                                                         as ServiceTeam,
      @ObjectModel.foreignKey.association: '_RespEmployee'
      person_resp                                                          as ResponsibleEmployee,
      @ObjectModel.foreignKey.association: '_ServiceEmployee'
      service_employee                                                     as ServiceEmployee,
      @ObjectModel.foreignKey.association: '_ContactPerson'
      contact_person                                                       as ContactPerson,
      @ObjectModel.foreignKey.association: '_PayerParty'
      payer                                                                as PayerParty,
      @ObjectModel.foreignKey.association: '_BillToParty'
      bill_to_party                                                        as BillToParty,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      ship_to_party                                                        as ShipToParty,

      // Status
      @ObjectModel.foreignKey.association: '_SrvcDocItmLifecycleStatus'
      stat_lifecycle                                                       as ServiceDocumentItemStatus,
      @ObjectModel.foreignKey.association: '_ServiceDocItemHasError'
      stat_error                                                           as ServiceDocumentItemHasError,
      @ObjectModel.foreignKey.association: '_ServiceDocItemBillingStatus'
      stat_billing                                                         as ServiceDocItemBillingStatus,
      @ObjectModel.foreignKey.association: '_SrvcDocItemIsRelForBillgSts'
      stat_for_billing                                                     as SrvcDocItmIsReleasedForBilling,
      @ObjectModel.foreignKey.association: '_ServiceDocumentIsOpen'
      stat_open                                                            as ServiceDocumentItemIsOpen,
      stat_delivery                                                        as SrvcDocItmDeliveryStatus,
      stat_goods_issue                                                     as SrvcDocItmGoodsIssueStatus,
      stat_released                                                        as ServiceDocumentItemIsReleased,
      stat_cancelled                                                       as ServiceDocumentItemIsRejected,
      @Semantics.booleanIndicator:true
      stat_withdrawn                                                       as SrvcDocItemIsWithdrawn,
      @ObjectModel.foreignKey.association: '_SrvcDocIsQuotation_2'
      stat_quotation                                                       as ServiceDocumentItemIsQuotation,

      @ObjectModel.foreignKey.association: '_SrvcDocItemTransferStatus'
      stat_transfer                                                        as SrvcDocItemTransferStatus,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'SrvcDocItemExecutionStatus'
      stat_maintenance                                                     as MaintSrvcOrdExecutionStatus,
      @ObjectModel.foreignKey.association: '_SrvcDocExecutionStatus'
      stat_maintenance                                                     as SrvcDocItemExecutionStatus,
      // Item - Schedule Line
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      order_qty                                                            as ServiceDocumentItemQuantity,

      // Pricing Parameter Set
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      @Semantics.currencyCode:true
      currency                                                             as TransactionCurrency,
      ref_currency                                                         as StatisticsCurrency,
      exchg_type                                                           as ExchangeRateType,
      exchg_date                                                           as ExchangeRateDate,
      exchg_rate                                                           as AccountingExchangeRate,
      @ObjectModel.foreignKey.association: '_PaymentTerms'
      pmnttrms                                                             as PaymentTerms,

      @ObjectModel.foreignKey.association: '_PaymentMethod'
      payment_method                                                       as PaymentMethod,

      @ObjectModel.foreignKey.association: '_SrvcSEPAMandateRelevance'
      sepa_on                                                              as SrvcSEPAMandateRelevance,
      mandate_id                                                           as SEPAMandate,

      wbs_element                                                          as WBSElementInternalID,

      @ObjectModel.foreignKey.association: '_BillableControl'
      ac_indicator                                                         as BillableControl,

      @ObjectModel.foreignKey.association: '_VATRegistrationCountry'
      tax_dest_cty                                                         as VATRegistrationCountry,
      taxm1                                                                as ProductTaxClassification1,
      taxm2                                                                as ProductTaxClassification2,
      taxm3                                                                as ProductTaxClassification3,
      taxm4                                                                as ProductTaxClassification4,
      taxm5                                                                as ProductTaxClassification5,
      taxm6                                                                as ProductTaxClassification6,
      taxm7                                                                as ProductTaxClassification7,
      taxm8                                                                as ProductTaxClassification8,
      taxm9                                                                as ProductTaxClassification9,

      // Item - Pricing
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      net_value_i                                                          as ServiceDocumentItemNetAmount,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      tax_amount_i                                                         as ServiceDocumentItemTaxAmount,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      gross_value_i                                                        as ServiceDocItemGrossAmount,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      net_price_i                                                          as ServiceDocumentItemNetPrice,

      // Billing Set
      @ObjectModel.foreignKey.association: '_BillingBlockReason'
      billing_block                                                        as BillingBlockReason,
      @ObjectModel.foreignKey.association: '_SrvcDocItemBillgRlvnce'
      billing_relevance                                                    as SrvcDocItmBillingRelevance,
      dip_profile                                                          as DynItemProcessorPrfl,


      // Item Product
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'SrvcMaterialPricingGroup'
      @ObjectModel.foreignKey.association: '_ProductGroup'
      prod_pr_group                                                        as ProductGroup,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'MaterialPricingGroup_2'
      @ObjectModel.foreignKey.association: '_SrvcMaterialPricingGroup'
      prod_pr_group                                                        as SrvcMaterialPricingGroup,
      @ObjectModel.foreignKey.association: '_MaterialPricingGroup_2'
      prod_pr_group                                                        as MaterialPricingGroup_2,

      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup1'
      prc_group1                                                           as ProductGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup2'
      prc_group2                                                           as ProductGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup3'
      prc_group3                                                           as ProductGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup4'
      prc_group4                                                           as ProductGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup5'
      prc_group5                                                           as ProductGroup5,
      @ObjectModel.foreignKey.association: '_SrvcMgmtProductHierarchy'
      prod_hierarchy                                                       as ProductHierarchy,

      // Item - Sales Set
      @ObjectModel.foreignKey.association: '_Industry'
      industry                                                             as Industry,
      po_number_sold                                                       as PurchaseOrderByCustomer,
      po_number_ship                                                       as PurchaseOrderByShipToParty,
      @ObjectModel.foreignKey.association: '_ServiceDocItemRejectionReason'
      rejection                                                            as ServiceDocItemRejectionReason,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      cust_group                                                           as CustomerGroup,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup1'
      cust_group1                                                          as AdditionalCustomerGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup2'
      cust_group2                                                          as AdditionalCustomerGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup3'
      cust_group3                                                          as AdditionalCustomerGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup4'
      cust_group4                                                          as AdditionalCustomerGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup5'
      cust_group5                                                          as AdditionalCustomerGroup5,
      plant                                                                as Plant,

      // Service Subject
      catlvlguid01_01                                                      as ServiceSchema1Category1UUID,
      catlvlguid02_01                                                      as ServiceSchema1Category2UUID,
      catlvlguid03_01                                                      as ServiceSchema1Category3UUID,
      catlvlguid04_01                                                      as ServiceSchema1Category4UUID,
      catlvlguid05_01                                                      as ServiceSchema1Category5UUID,
      catlvlguid06_01                                                      as ServiceSchema1Category6UUID,
      catlvlguid07_01                                                      as ServiceSchema1Category7UUID,
      catlvlguid08_01                                                      as ServiceSchema1Category8UUID,
      catlvlguid09_01                                                      as ServiceSchema1Category9UUID,
      catlvlguid10_01                                                      as ServiceSchema1Category10UUID,
      asp_id_01                                                            as SrvcCatztnSchema1,
      cat_id_01                                                            as SrvcCatztnSchemaCategory1,

      catlvlguid01_02                                                      as ServiceSchema2Category1UUID,
      catlvlguid02_02                                                      as ServiceSchema2Category2UUID,
      catlvlguid03_02                                                      as ServiceSchema2Category3UUID,
      catlvlguid04_02                                                      as ServiceSchema2Category4UUID,
      catlvlguid05_02                                                      as ServiceSchema2Category5UUID,
      catlvlguid06_02                                                      as ServiceSchema2Category6UUID,
      catlvlguid07_02                                                      as ServiceSchema2Category7UUID,
      catlvlguid08_02                                                      as ServiceSchema2Category8UUID,
      catlvlguid09_02                                                      as ServiceSchema2Category9UUID,
      catlvlguid10_02                                                      as ServiceSchema2Category10UUID,
      asp_id_02                                                            as SrvcCatztnSchema2,
      cat_id_02                                                            as SrvcCatztnSchemaCategory2,

      // Item - Billing Plan
      billplan_d_rule_period_date                                          as SettlementPeriodRuleUUID,
      billplan_d_rule_bill_date                                            as BillingPlanBillingDateRuleUUID,
      billplan_d_rule_price_date                                           as BillingPlanPriceDateRule,
      billingplanisfinalized                                               as BillingPlanIsFinalized,

      // Organization Unit Set
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
      sales_org_resp                                                       as ResponsibleSalesOrganization,
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

      //Service Organization-Enterprise Project
      proj_org_id                                                          as EnterpriseProjectServiceOrg,

      // Dates
      srv_cust_beg                                                         as RequestedServiceStartDateTime,
      srv_cust_end                                                         as RequestedServiceEndDateTime,
      contstart                                                            as ServiceContrItemStartDateTime,
      contend                                                              as ServiceContrItemEndDateTime,
      srv_rfirst                                                           as ServiceFirstResponseByDateTime,
      srv_rready                                                           as SrvcDocItemSLADueByDateTime,
      srvc_actual                                                          as ActualServiceStartDateTime,
      srvc_act_to                                                          as ActualServiceEndDateTime,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'ServiceWorkDuration_2'
      srq_work_dura                                                        as ServiceWorkDuration,
      srq_work_dura_2                                                      as ServiceWorkDuration_2,
      srq_work_unit                                                        as ServiceWorkDurationUnit,
      @Semantics.dateTime: true
      cont_start_ts                                                        as SrvcDocItmTmeSliceStrtDteTme,
      @Semantics.dateTime: true
      cont_end_ts                                                          as SrvcDocItmTmeSliceEndDteTme,
      @Semantics.dateTime: true
      auto_renew_start                                                     as SrvcContrItemRenewalDateTime,

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrItemRnwlDurationUnit'} }
      auto_renew_period                                                    as SrvcContrItemRnwlDuration,
      @ObjectModel.foreignKey.association: '_SrvcContrItemRnwlDurationUnit'
      @Semantics.unitOfMeasure:true
      auto_renew_period_unit                                               as SrvcContrItemRnwlDurationUnit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrItemExtnDurationUnit'} }
      auto_renew_exten                                                     as SrvcContrItemExtensionDuration,
      @ObjectModel.foreignKey.association: '_SrvcContrItemExtnDurationUnit'
      @Semantics.unitOfMeasure:true
      auto_renew_exten_unit                                                as SrvcContrItemExtnDurationUnit,
      spla_planfr                                                          as PlannedServiceStartDateTime,
      spla_planto                                                          as PlannedServiceEndDateTime,
      grace_period                                                         as SrvcDocItemGracePeriod,
      grace_period_unit                                                    as SrvcDocItemGracePeriodUnit,
      grace_period_end                                                     as SrvcDocItmGrcePerdEndDateTime,
      biz_valid_start                                                      as SbscrContrItmBizValdStrtDteTme,
      biz_valid_end                                                        as SbscrContrItmBizValdEndDteTme,
      itm_usage                                                            as SrvcDocSubitemOrigin,
      cast(ac_object_type as crmt_ac_object_type_no_conv preserving type ) as SrvcDocItmAcctAssgmtObjectType,
      ac_assignment                                                        as SrvcDocItmAcctAssgmtObject,

      // Item - Service
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ActualServiceDurationUnit'} }
      srv_conf_time                                                        as ActualServiceDuration,
      @ObjectModel.foreignKey.association: '_ActualServiceDurationUnit'
      @Semantics.unitOfMeasure:true
      srv_conf_tunit                                                       as ActualServiceDurationUnit,
      confirm_relevant                                                     as SrvcOrderConfirmationRelevance, // Despite the DB field name, this is not a boolean value
      service_type                                                         as ServiceTransactionChargeType,
      valuation_type                                                       as SrvcTransactionValuationType,
      @ObjectModel.foreignKey.association: '_ResponseProfile'
      srv_escal                                                            as ResponseProfile,
      @ObjectModel.foreignKey.association: '_ServiceProfile'
      srv_serwi                                                            as ServiceProfile,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDurationUnit'} }
      duration                                                             as ServiceDuration,
      @ObjectModel.foreignKey.association: '_ServiceDurationUnit'
      @Semantics.unitOfMeasure:true
      duration_unit                                                        as ServiceDurationUnit,
      @ObjectModel.foreignKey.association: '_ServiceDocOvertimeCat'
      overtime_cat                                                         as TimeSheetOvertimeCategory,

      // Business Solution Quotation
      warranty_id                                                          as MasterWarranty,
      contract_account                                                     as ContractAccount,
      probability                                                          as ItemOrderProbabilityInPercent,
      stat_accepted                                                        as QuotationIsAccepted,

      int_obj_no                                                           as ConfigurationNumber,
      incoterms1                                                           as IncotermsPart1,
      incoterms2                                                           as IncotermsPart2,
      dlv_prio                                                             as DeliveryPriority,
      ordercombind                                                         as OrderCombinationIsAllowed,
      part_dlv_itm                                                         as PartialDeliveryIsAllowed,

      ci_billing_cycle                                                     as CABillgCycle,
      revacc_refid                                                         as RevenueAccountingReference,
      revacc_reftype                                                       as RevenueAccountingRefType,
      //      ac_object_type                                                                                 as SettAccAssgmntObjectType,
      //      ac_assignment                                                                                  as SettlementAccountAssignment,
      //       price_source                                                                                  as PriceSource,

      // Volume & Weights

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ItemWeightUnit'} }
      gross_weight_i                                                       as ItemGrossWeight,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      net_weight_i                                                         as ItemNetWeight,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_WeightUnit'
      weight_unit_i                                                        as ItemWeightUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      volume_i                                                             as ItemVolume,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_VolumeUnit'
      volume_unit_i                                                        as ItemVolumeUnit,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'CustomerPriceGroup'
      price_grp                                                            as MaterialPricingGroup,
      price_grp                                                            as CustomerPriceGroup,

      // Delivery details
      dlv_group                                                            as DeliveryGroup,
      @ObjectModel.foreignKey.association: '_deliveryBlockReason'
      delivery_block                                                       as DeliveryBlockReason,

      @Semantics.dateTime: true
      first_conf_date                                                      as ErlstConfirmedDeliveryDateTime,

      @Semantics.dateTime: true
      latest_conf_date                                                     as LtstConfirmedDeliveryDateTime,


      cast(first_req_date as  tzntstmps)                                   as RequestedDeliveryDateTime,
      //      cast(first_conf_date as tzntstmps)   as FirstConfdDeliveryDateTime,

      // Item - Subscription specific data
      prod_sel_type                                                        as SubscrpnOrdProdSelType,
      ci_contract_id                                                       as SubscriptionContract,
      btmf_process                                                         as SrvcTransChangeProcess,
      btmf_process_type                                                    as SrvcTransChangeProcessType,
      ci_contract_item                                                     as SrvcTransChgProcSourceItemUUID,
      ma_head_objid                                                        as CustMgmtMasterAgreement,
      ma_item_objid                                                        as CustMgmtMstrAgrmtItem,
      stat_activation                                                      as SubscrpnContrActivationStatus,
      stat_cont_ts                                                         as SubscrpnContrTimeSliceStatus,
      pool_agr_ref                                                         as SharingContractID,
      ccm_version                                                          as CrsCatalogMappingVersionNumber,
      ma_root_objid                                                        as CustMgmtMstrAgrmtParentItem,
      sharing_group_id                                                     as SubscrpnContractSharingGroupID,
      ci_partner_rule                                                      as CAPartnerSettlementRule,
      changeprocessgroup                                                   as ChangeProcessGroup,
      phase_indicator                                                      as BusSolutionQtnItemIsPhased,
      successor_of                                                         as BusSolnQtnItmPhasedPrdcssrItem,
      cont_ref_item                                                        as SubscriptionContractItem,
      withdrawal_reason                                                    as SrvcDocItemWithdrawalReason,
      refund_code                                                          as SrvcDocItemRefundType,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      recurring_charge                                                     as SrvcDocItmRecrrgChrgNetAmount,
      @Semantics.booleanIndicator:true
      default_terms_ovrwrt                                                 as SubscrpnContrTrmsAreSpecified,
      @Semantics.booleanIndicator:true
      midbillcycexprtnallwd                                                as MidBillgCycExprtnIsAllowed,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      recurring_tax                                                        as SrvcDocItmRecrrgChrgTaxAmount,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      recurring_gross                                                      as SrvcDocItmRecrrgChrgGrossAmt,
      rec_duration                                                         as SrvcDocItmRecrrgChrgDuration,
      rec_time_unit                                                        as SrvcDocItmRecrrgChrgDurnUnit,
      cont_ref                                                             as SubscriptionContractReference,
      subscrpnbillgcycle                                                   as SubscriptionBillingCycle,
      @Semantics.uuid
      rate_plan_id                                                         as SubscrpnBillgRatePlanCharUUID,
      subscriptioncontractexternalid                                       as SubscriptionContractExternalID,
      ma_share_ref                                                         as SbscrShContrSvTrMtAgrItmUUID,
      ma_share_ref_prod_id                                                 as SbscrShContrSvTrMtAgrItmCstPrd,
      @Semantics.booleanIndicator: true
      case fix_config
        when 'A' then 'X'
         else ''
         end                                                               as SvTrMtAgrItmIsFxdConfign,
      ci_billing_plan_cycle                                                as SubscrpnContrItmBillgPlnCyc,
      @Semantics.booleanIndicator: true
      subscrp_stat_is_pndg                                                 as SubscrpnOrdIsPending,
      billgcyc_billd_togthr_nr                                             as NrOfBillgCyclesBilledTogether,
      // Cancellation
      cancparty                                                            as ServiceDocumentItemCanclnParty,
      canc_reason                                                          as ServiceDocumentItmCanclnReason,
      cancproc                                                             as SrvcDocItmCanclnProcedure,

      // Auto renew
      auto_renew_period                                                    as ServiceDocumentRnwlDuration,
      auto_renew_period_unit                                               as ServiceDocRnwlDurationUnit,
      auto_renew_exten                                                     as ServiceDocExtensionDuration,
      auto_renew_exten_unit                                                as ServiceDocExtnDurationUnit,

      // Subscription Contract
      auto_renew_indicator                                                 as SubscrpnContrAutoRnwlIsActv,

      // In-House Repair Reference
      ref_inhouse_repair                                                   as ReferenceInHouseRepair,
      ref_inhouse_repair_item                                              as ReferenceInHouseRepairItem,
      has_ref_inhouse_repair                                               as RefInHouseRepairIsExisting,

      // Credit Status
      @ObjectModel.foreignKey.association: '_SrvcDocItemCreditStatus'
      stat_credit                                                          as SrvcDocItemCreditStatus,

      @ObjectModel.foreignKey.association: '_SrvcDocItmBslnCostPostgStat'
      stat_bsln_cost_postg                                                 as SrvcDocItmBslnCostPostgStatus,

      // Cost Posting Status for Continuous Planning
      @ObjectModel.foreignKey.association: '_SrvcDocItmContinuousCostStat'
      stat_cont_cost_calc                                                  as SrvcDocItmContinuousCostStatus,

      stat_concur                                                          as SrvcDocItemConcurStatus,

      is_unplanned_item                                                    as SrvcDocItemIsUnplanned,

      //Shipping
      ship_cond                                                            as ShippingCondition,
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      gi_quantity                                                          as SrvcDocItmGoodsIssueQuantity,
      batch                                                                as Batch,

      // Associations
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

      //sepa mandate
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

      _SrvcDocItemTransferStatus,

      // Item - Service Assocations
      _ActualServiceDurationUnit,
      _ServiceDurationUnit,
      _SrvcContrItemRnwlDurationUnit,
      _SrvcContrItemExtnDurationUnit,

      // Credit Status association
      _SrvcDocItemCreditStatus,

      // Baseline Cost Posting status
      _SrvcDocItmBslnCostPostgStat,

      // Cost Calculation Status for Continuous Planning
      _SrvcDocItmContinuousCostStat,

      // Service Document Execution Status
      _SrvcDocExecutionStatus,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SrvcDocIsQuotation_2'
      _SrvcDocIsQuotation,
      _SrvcDocIsQuotation_2,

      //RAP : Inheritance of Complex Set
      item_no_partner                                                      as SrvcDocItmPartReferenceItem,
      ref_guid_appt                                                        as SrvcDocItmApptRefObjectUUID,
      item_no_appt                                                         as SrvcDocItmApptReferenceItem,
      item_no_refobj                                                       as SrvcDocItmRefObjReferenceItem
}
```
