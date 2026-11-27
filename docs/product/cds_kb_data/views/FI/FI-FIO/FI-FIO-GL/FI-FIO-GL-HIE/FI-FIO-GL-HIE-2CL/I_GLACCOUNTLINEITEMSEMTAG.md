---
name: I_GLACCOUNTLINEITEMSEMTAG
description: "GL AccountLINEITEMSEMTAG"
app_component: FI-FIO-GL-HIE-2CL
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
  - FI
  - interface-view
  - gl-account
  - item-level
  - component:FI-FIO-GL-HIE-2CL
  - lob:Finance
---
# I_GLACCOUNTLINEITEMSEMTAG

**GL AccountLINEITEMSEMTAG**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-HIE-2CL` |
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
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `GLAccountHierarchy` | ✓ | |  |  | `CHAR(42)` | Financial Statement Version |
| `SemanticTag` | ✓ | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `ValidityStartDate` | ✓ | |  |  | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` | ✓ | |  |  | `DATS(8)` | Valid To Date |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `GLRecordType` |  | |  |  | `CHAR(1)` | Record Type |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `LogicalSystem` |  | |  |  | `CHAR(10)` | Logical System |
| `ReferenceDocumentContext` |  | |  |  | `CHAR(10)` | Reference Document Context |
| `ReferenceDocument` |  | |  |  | `CHAR(10)` | Reference Doc. Number |
| `ReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Reference Document Item |
| `ReferenceDocumentItemGroup` |  | |  |  | `NUMC(6)` | Reference Document Item Group |
| `IsReversal` |  | |  |  | `CHAR(1)` | Indicator: Item is Reversing Another Item |
| `IsReversed` |  | |  |  | `CHAR(1)` | Indicator: Item is Reversed |
| `ReversalReferenceDocumentCntxt` |  | |  |  | `CHAR(10)` | Reversal Reference Document Context |
| `ReversalReferenceDocument` |  | |  |  | `CHAR(10)` | Reversal Reference Document |
| `IsSettlement` |  | |  |  | `CHAR(1)` | Indicator: Item is Settling or Transferring Another Item |
| `IsSettled` |  | |  |  | `CHAR(1)` | Indicator: Line Item is Settled or Transferred |
| `PredecessorReferenceDocType` |  | |  |  | `CHAR(5)` | Predecessor Reference Document Type |
| `PredecessorReferenceDocCntxt` |  | |  |  | `CHAR(10)` | Predecessor Reference Document Context |
| `PredecessorReferenceDocument` |  | |  |  | `CHAR(10)` | Predecessor Reference Document |
| `PredecessorReferenceDocItem` |  | |  |  | `NUMC(6)` | Predecessor Reference Document Item |
| `SourceReferenceDocumentType` |  | |  |  | `CHAR(5)` | Source Reference Document Type |
| `SourceLogicalSystem` |  | |  |  | `CHAR(10)` | Source Logical System |
| `SourceReferenceDocumentCntxt` |  | |  |  | `CHAR(10)` | Source Reference Document Context |
| `SourceReferenceDocument` |  | |  |  | `CHAR(10)` | Source Reference Document |
| `SourceReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Source Reference Document Item |
| `SourceReferenceDocSubitem` |  | |  |  | `NUMC(6)` | Source Reference Document Subitem |
| `IsCommitment` |  | |  |  | `CHAR(1)` | Indicator: Is Commitment |
| `JrnlEntryItemObsoleteReason` |  | |  |  | `CHAR(1)` | Journal Entry Item Obsolete Reason |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerBusinessArea` |  | |  |  | `CHAR(4)` | Partner Business Area |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `BalanceTransactionCurrency` |  | |  |  | `CUKY(5)` | Balance Transaction Currency |
| `AmountInBalanceTransacCrcy` |  | |  |  | `CURR(23)` | Amount in Balance Transaction Currency |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `FunctionalCurrency` |  | |  |  | `CUKY(5)` | Functional Currency |
| `AmountInFunctionalCurrency` |  | |  |  | `CURR(23)` | Amount in Functional Currency |
| `FreeDefinedCurrency1` |  | |  |  | `CUKY(5)` | Freely Defined Currency 1 |
| `AmountInFreeDefinedCurrency1` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `FreeDefinedCurrency2` |  | |  |  | `CUKY(5)` | Freely Defined Currency 2 |
| `AmountInFreeDefinedCurrency2` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 2 |
| `FreeDefinedCurrency3` |  | |  |  | `CUKY(5)` | Freely Defined Currency 3 |
| `AmountInFreeDefinedCurrency3` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 3 |
| `FreeDefinedCurrency4` |  | |  |  | `CUKY(5)` | Freely Defined Currency 4 |
| `AmountInFreeDefinedCurrency4` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 4 |
| `FreeDefinedCurrency5` |  | |  |  | `CUKY(5)` | Freely Defined Currency 5 |
| `AmountInFreeDefinedCurrency5` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 5 |
| `FreeDefinedCurrency6` |  | |  |  | `CUKY(5)` | Freely Defined Currency 6 |
| `AmountInFreeDefinedCurrency6` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 6 |
| `FreeDefinedCurrency7` |  | |  |  | `CUKY(5)` | Freely Defined Currency 7 |
| `AmountInFreeDefinedCurrency7` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 7 |
| `FreeDefinedCurrency8` |  | |  |  | `CUKY(5)` | Freely Defined Currency 8 |
| `AmountInFreeDefinedCurrency8` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 8 |
| `FixedAmountInGlobalCrcy` |  | |  |  | `CURR(23)` | Fixed Amount in Global Currency |
| `GrpValnFixedAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Group Valuation Fixed Amount in Global Currency |
| `PrftCtrValnFxdAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Profit Center Valuation Fixed Amount in Global Currency |
| `TotalPriceVarcInGlobalCrcy` |  | |  |  | `CURR(23)` | Total Price Variance in Global Currency |
| `GrpValnTotPrcVarcInGlobCrcy` |  | |  |  | `CURR(23)` | Group Valuation Total Price Variance in Global Currency |
| `PrftCtrValnTotPrcVarcInGlbCrcy` |  | |  |  | `CURR(23)` | Profit Center Valuation Total Price Variance in Global Cur. |
| `FixedPriceVarcInGlobalCrcy` |  | |  |  | `CURR(23)` | Fixed Price Variance in Global Currency |
| `GrpValnFixedPrcVarcInGlobCrcy` |  | |  |  | `CURR(23)` | Group Valuation Fixed Price Variance in Global Currency |
| `PrftCtrValnFxdPrcVarcInGlbCrcy` |  | |  |  | `CURR(23)` | Profit Center Valuation Fixed Price Variance in Global Cur. |
| `FixedAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Fixed Amount in Company Currency |
| `ControllingObjectCurrency` |  | |  |  | `CUKY(5)` | CO Object Currency |
| `AmountInObjectCurrency` |  | |  |  | `CURR(23)` | Amount in Object Currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity |
| `FixedQuantity` |  | |  |  | `QUAN(23)` | Fixed Quantity |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `ValuationQuantity` |  | |  |  | `QUAN(23)` | Valuation Quantity |
| `ValuationFixedQuantity` |  | |  |  | `QUAN(23)` | Valuation Fixed Quantity |
| `AdditionalQuantity1Unit` |  | |  |  | `UNIT(3)` | Additional Quantity 1 Unit |
| `AdditionalQuantity1` |  | |  |  | `QUAN(23)` | Additional Quantity 1 |
| `AdditionalQuantity2Unit` |  | |  |  | `UNIT(3)` | Additional Quantity 2 Unit |
| `AdditionalQuantity2` |  | |  |  | `QUAN(23)` | Additional Quantity 2 |
| `AdditionalQuantity3Unit` |  | |  |  | `UNIT(3)` | Additional Quantity 3 Unit |
| `AdditionalQuantity3` |  | |  |  | `QUAN(23)` | Additional Quantity 3 |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Journal Entry Posting View Item |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Reference |
| `AccountingDocumentCategory` |  | |  |  | `CHAR(1)` | Journal Entry Category |
| `PostingKey` |  | |  |  | `CHAR(2)` | Posting Key |
| `TransactionTypeDetermination` |  | |  |  | `CHAR(3)` | Transaction Key |
| `SubLedgerAcctLineItemType` |  | |  |  | `NUMC(5)` | Subledger-Specific Line Item Type |
| `AccountingDocCreatedByUser` |  | |  |  | `CHAR(12)` | User that created the journal entry |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | Last Change Date Time |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Creation Date Time |
| `CreationDate` |  | |  |  | `DATS(8)` | Creation Date |
| `EliminationProfitCenter` |  | |  |  | `CHAR(10)` | Elimination Profit Center |
| `OriginObjectType` |  | |  |  | `NUMC(2)` | Type of Origin Object |
| `GLAccountType` |  | |  |  | `CHAR(1)` | Type of a General Ledger Account |
| `AlternativeGLAccount` |  | |  |  | `CHAR(10)` | Alternative G/L Account Number In Company Code |
| `CountryChartOfAccounts` |  | |  |  | `CHAR(4)` | Alternative Chart of Accounts for Country/Region |
| `InvoiceReference` |  | |  |  | `CHAR(10)` | Invoice Reference |
| `InvoiceReferenceFiscalYear` |  | |  |  | `NUMC(4)` | Invoice Reference Fiscal Year |
| `FollowOnDocumentType` |  | |  |  | `CHAR(1)` | Follow-On Document Type |
| `InvoiceItemReference` |  | |  |  | `NUMC(3)` | Invoice Item Reference |
| `ReferencePurchaseOrderCategory` |  | |  |  | `NUMC(3)` | Category of Reference Purchase Order |
| `PurchasingDocument` |  | |  |  | `CHAR(10)` | Purchasing Document |
| `PurchasingDocumentItem` |  | |  |  | `NUMC(5)` | Purchasing Document Item |
| `AccountAssignmentNumber` |  | |  |  | `NUMC(2)` | Account Assignment Number |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which services are rendered |
| `ConditionContract` |  | |  |  | `CHAR(10)` | Condition Contract |
| `ComponentBreakdown` |  | |  |  | `CHAR(16)` | Component Breakdown |
| `CompBreakdownScaleNumerator` |  | |  |  | `DEC(23)` | Component Breakdown Scale Numerator |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `TaxCode` |  | |  |  | `CHAR(2)` | Tax on Sales/Purchases Code |
| `HouseBank` |  | |  |  | `CHAR(5)` | House Bank Key |
| `HouseBankAccount` |  | |  |  | `CHAR(5)` | House Bank Account |
| `IsOpenItemManaged` |  | |  |  | `CHAR(1)` | Managed on an Open Item Basis |
| `ClearingDate` |  | |  |  | `DATS(8)` | Clearing Date |
| `ClearingAccountingDocument` |  | |  |  | `CHAR(10)` | Clearing Journal Entry (Deprecated) |
| `ClearingDocFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Clearing Journal Entry (Deprecated) |
| `ClearingJournalEntry` |  | |  |  | `CHAR(10)` | Clearing Journal Entry |
| `ClearingJournalEntryFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Clearing Journal Entry |
| `AssetDepreciationArea` |  | |  |  | `NUMC(2)` | Asset Depreciation Area (Real or Derived) |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `AssetValueDate` |  | |  |  | `DATS(8)` | Asset Value Date |
| `AssetTransactionType` |  | |  |  | `CHAR(3)` | Asset Transaction Type |
| `AssetAcctTransClassfctn` |  | |  |  | `CHAR(2)` | Transaction Type Category |
| `DepreciationFiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period of Depreciation |
| `GroupMasterFixedAsset` |  | |  |  | `CHAR(12)` | Group Asset |
| `GroupFixedAsset` |  | |  |  | `CHAR(4)` | Group Asset Subnumber |
| `CostEstimate` |  | |  |  | `NUMC(12)` | Cost Estimate |
| `InventorySpecialStockValnType` |  | |  |  | `CHAR(1)` | Inventory Special Stock Valuation Type (Deprecated) |
| `InvtrySpecialStockValnType_2` |  | |  |  | `CHAR(1)` | Inventory Special Stock Valuation Type |
| `InventorySpecialStockType` |  | |  |  | `CHAR(1)` | Inventory Special Stock Type |
| `InventorySpclStkSalesDocument` |  | |  |  | `CHAR(10)` | Inventory Special Stock Sales Document |
| `InventorySpclStkSalesDocItm` |  | |  |  | `NUMC(6)` | Inventory Special Stock Sales Document Item |
| `InvtrySpclStockWBSElmntIntID` |  | |  |  | `NUMC(8)` | Inventory Special Stock WBS Element Internal ID |
| `InvtrySpclStockWBSElmntExtID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `InventorySpclStockWBSElement` |  | |  |  | `CHAR(24)` | Inventory Special Stock WBS Element |
| `InventorySpecialStockSupplier` |  | |  |  | `CHAR(10)` | Supplier of Inventory Special Stock |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Inventory Valuation Type |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `SenderGLAccount` |  | |  |  | `CHAR(10)` | Sender G/L Account |
| `SenderAccountAssignment` |  | |  |  | `CHAR(30)` | Sender Account Assignment |
| `SenderAccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type in Sender System |
| `CostOriginGroup` |  | |  |  | `CHAR(4)` | Origin Group as Subdivision of Cost Element |
| `OriginSenderObject` |  | |  |  | `CHAR(22)` | Origin Sender Object |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | Controlling Debit Credit Code |
| `ControllingObjectDebitType` |  | |  |  | `NUMC(1)` | Controlling Object Debit Type |
| `QuantityIsIncomplete` |  | |  |  | `NUMC(1)` | Indicator: Quantity is Incomplete |
| `OffsettingAccount` |  | |  |  | `CHAR(10)` | Offsetting Account |
| `OffsettingAccountType` |  | |  |  | `CHAR(1)` | Offsetting Account Type |
| `OffsettingChartOfAccounts` |  | |  |  | `CHAR(4)` | Offsetting Chart of Accounts |
| `LineItemIsCompleted` |  | |  |  | `CHAR(1)` | Indicator: Line Item is Completed |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `ControllingObjectClass` |  | |  |  | `CHAR(2)` | Controlling Object Class |
| `PartnerCompanyCode` |  | |  |  | `CHAR(4)` | Partner Company Code |
| `PartnerControllingObjectClass` |  | |  |  | `CHAR(2)` | Partner Controlling Object Class |
| `OriginCostCenter` |  | |  |  | `CHAR(10)` | Origin Cost Center |
| `OriginProfitCenter` |  | |  |  | `CHAR(10)` | Origin Profit Center |
| `OriginCostCtrActivityType` |  | |  |  | `CHAR(6)` | Origin Cost Center Activity Type |
| `AccountAssignment` |  | |  |  | `CHAR(30)` | Account Assignment |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `WBSElement` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) |
| `PartnerWBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `Project` |  | |  |  | `CHAR(24)` | Project |
| `PartnerProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `PartnerProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `OperatingConcern` |  | |  |  | `CHAR(4)` | Operating Concern |
| `ProjectNetwork` |  | |  |  | `CHAR(12)` | Network Number for Account Assignment |
| `RelatedNetworkActivity` |  | |  |  | `CHAR(4)` | Related Network Activity |
| `BusinessProcess` |  | |  |  | `CHAR(12)` | Business Process |
| `CostObject` |  | |  |  | `CHAR(12)` | Cost Object |
| `BillableControl` |  | |  |  | `CHAR(2)` | Billable Control |
| `CostAnalysisResource` |  | |  |  | `CHAR(10)` | Cost Analysis Resource |
| `CustomerServiceNotification` |  | |  |  | `CHAR(12)` | Customer Service Notification |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
| `ServiceContractType` |  | |  |  | `CHAR(4)` | Service Contract Type |
| `ServiceContract` |  | |  |  | `CHAR(10)` | Service Contract ID |
| `ServiceContractItem` |  | |  |  | `NUMC(6)` | Service Contract Item ID |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order |
| `BusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Solution Order Item |
| `TimeSheetOvertimeCategory` |  | |  |  | `CHAR(4)` | Overtime Category |
| `ProviderContract` |  | |  |  | `CHAR(20)` | Provider Contract |
| `ProviderContractItem` |  | |  |  | `NUMC(6)` | Provider Contract Item |
| `PartnerAccountAssignment` |  | |  |  | `CHAR(30)` | Partner Account Assignment |
| `PartnerAccountAssignmentType` |  | |  |  | `CHAR(2)` | Partner Account Assignment Type |
| `WorkPackage` |  | |  |  | `CHAR(50)` | Plan Item |
| `WorkItem` |  | |  |  | `CHAR(10)` | Work Item ID |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerOrder` |  | |  |  | `CHAR(12)` | Partner Order (Deprecated) |
| `PartnerOrder_2` |  | |  |  | `CHAR(12)` | Partner Order |
| `PartnerOrderCategory` |  | |  |  | `NUMC(2)` | Partner Order Category |
| `PartnerWBSElement` |  | |  |  | `CHAR(24)` | Partner WBS Element |
| `PartnerProject` |  | |  |  | `CHAR(24)` | Partner Project |
| `PartnerSalesDocument` |  | |  |  | `CHAR(10)` | Partner Sales Document |
| `PartnerSalesDocumentItem` |  | |  |  | `NUMC(6)` | Partner Sales Document Item |
| `PartnerProjectNetwork` |  | |  |  | `CHAR(12)` | Partner Project Network |
| `PartnerProjectNetworkActivity` |  | |  |  | `CHAR(4)` | Partner Project Network Activity |
| `PartnerBusinessProcess` |  | |  |  | `CHAR(12)` | Partner Business Process |
| `PartnerCostObject` |  | |  |  | `CHAR(12)` | Partner Cost Object |
| `BillingDocumentType` |  | |  |  | `CHAR(4)` | Billing Type |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `SoldMaterial` |  | |  |  | `CHAR(40)` | Sold Material |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Product Sold Group (Deprecated) |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group for Maintenance Orders |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `CustomerSupplierCorporateGroup` |  | |  |  | `CHAR(10)` | Customer Supplier Corporate Group |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `BudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period |
| `PartnerFund` |  | |  |  | `CHAR(10)` | Partner Fund |
| `PartnerGrant` |  | |  |  | `CHAR(20)` | Partner Grant |
| `PartnerBudgetPeriod` |  | |  |  | `CHAR(10)` | FM: Partner Budget Period |
| `FundsCenter` |  | |  |  | `CHAR(16)` | Funds Management Center |
| `FundedProgram` |  | |  |  | `CHAR(24)` | Funded Program |
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `JointVentureEquityGroup` |  | |  |  | `CHAR(3)` | Joint Venture Equity Group |
| `JointVentureCostRecoveryCode` |  | |  |  | `CHAR(2)` | Joint Venture Cost Recovery Code |
| `JointVentureEquityType` |  | |  |  | `CHAR(3)` | Joint Venture Equity Type |
| `SettlementReferenceDate` |  | |  |  | `DATS(8)` | Settlement Reference Date |
| `WorkCenterInternalID` |  | |  |  | `NUMC(8)` | Object ID of the resource |
| `OrderOperation` |  | |  |  | `CHAR(4)` | Order Operation |
| `OrderItem` |  | |  |  | `NUMC(4)` | Number of Order Item |
| `OrderSuboperation` |  | |  |  | `CHAR(4)` | Order Suboperation |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `FunctionalLocation` |  | |  |  | `CHAR(30)` | Functional Location |
| `Assembly` |  | |  |  | `CHAR(40)` | Assembly |
| `MaintenanceActivityType` |  | |  |  | `CHAR(3)` | Maintenance activity type |
| `MaintenanceOrderPlanningCode` |  | |  |  | `CHAR(1)` | Maintenance order planning indicator |
| `MaintPriorityType` |  | |  |  | `CHAR(2)` | Priority Type |
| `MaintPriority` |  | |  |  | `CHAR(1)` | Priority |
| `SuperiorOrder` |  | |  |  | `CHAR(12)` | Number of Superior Order |
| `MaintenanceOrderIsPlanned` |  | |  |  | `CHAR(1)` | Planned Parts/Work |
| `DebitAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Company Code Currency |
| `CreditAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Company Code Currency |
| `DebitAmountInTransCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Transaction Currency |
| `CreditAmountInTransCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Transaction Currency |
| `DebitAmountInBalanceTransCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Balance Transaction Currency |
| `CreditAmountInBalanceTransCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Balance Transaction Currency |
| `DebitAmountInGlobalCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Global Currency |
| `CreditAmountInGlobalCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Global Currency |
| `DebitAmountInFunctionalCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Functional Currency |
| `CreditAmountInFunctionalCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Functional Currency |
| `DebitAmountInFreeDefinedCrcy1` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 1 |
| `CreditAmountInFreeDefinedCrcy1` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 1 |
| `DebitAmountInFreeDefinedCrcy2` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 2 |
| `CreditAmountInFreeDefinedCrcy2` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 2 |
| `DebitAmountInFreeDefinedCrcy3` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 3 |
| `CreditAmountInFreeDefinedCrcy3` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 3 |
| `DebitAmountInFreeDefinedCrcy4` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 4 |
| `CreditAmountInFreeDefinedCrcy4` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 4 |
| `DebitAmountInFreeDefinedCrcy5` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 5 |
| `CreditAmountInFreeDefinedCrcy5` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 5 |
| `DebitAmountInFreeDefinedCrcy6` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 6 |
| `CreditAmountInFreeDefinedCrcy6` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 6 |
| `DebitAmountInFreeDefinedCrcy7` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 7 |
| `CreditAmountInFreeDefinedCrcy7` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 7 |
| `DebitAmountInFreeDefinedCrcy8` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 8 |
| `CreditAmountInFreeDefinedCrcy8` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 8 |
| `IsStatisticalOrder` |  | |  |  | `CHAR(1)` | Indicator: Internal Order is Statistical Account Assignment |
| `IsStatisticalCostCenter` |  | |  |  | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `IsStatisticalSalesDocument` |  | |  |  | `CHAR(1)` | Sales Document is statistical |
| `WBSIsStatisticalWBSElement` |  | |  |  | `CHAR(1)` | Indicator: WBS Element is Statistical Account Assignment |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `FiscalYearQuarter` |  | |  |  | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `Employee` |  | |  |  | `CHAR(60)` | Identification Number |
| `EmployeeFullName` |  | |  |  | `CHAR(80)` | Full Name |
| `AssetAccountingKeyFigure` |  | |  |  | `CHAR(10)` | Key Figure for Asset Accounting |
| `ProjAndSlsOrdStkAmtInCCCrcy` |  | |  |  | `CURR(23)` | Project/Sales Order Stock |
| `ProjAndSlsOrdStkAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Project/Sales Order Stock |
| `RevenueAmountInCompanyCodeCrcy` |  | |  |  | `CURR(23)` | Revenue Amount in Company Code Currency |
| `RevenueInGlobalCurrency` |  | |  |  | `CURR(23)` | Revenue Amount in Global Currency |
| `GrossRevenueAmtInCCCrcy` |  | |  |  | `CURR(23)` | Gross Revenue |
| `RecognizedRevnAmtInCCCrcy` |  | |  |  | `CURR(23)` | Recognized Revenue |
| `RecognizedRevnAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Recognized Revenue |
| `RevenueAdjustmentAmtInCCCrcy` |  | |  |  | `CURR(23)` | Revenue Adjustment |
| `RevenueAdjustAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Revenue Adjustment |
| `DeferredRevenueAmtInCCCrcy` |  | |  |  | `CURR(23)` | Deferred Revenue |
| `AccruedRevenueAmtInCCCrcy` |  | |  |  | `CURR(23)` | Accrued Revenue |
| `RecognizableRevenueAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Revenue |
| `RecognizableRevnAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Actual Revenue |
| `BilledRevenueAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Actual Revenue |
| `BilledRevenueAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Actual Revenue |
| `BilledValnQtyInCostSourceUnit` |  | |  |  | `QUAN(23)` | Billed Quantity |
| `UnbilledRevnInCoCodeCrcy` |  | |  |  | `CURR(23)` | Unbilled Revenue |
| `RecognizedMarginAmtInCCCrcy` |  | |  |  | `CURR(23)` | Recognized Margin |
| `MnlContrAccrPnLItmAmtInCCCrcy` |  | |  |  | `CURR(23)` | Manual Contract Accruals Income Statement in CCCrcy |
| `CostAmountInCompanyCodeCrcy` |  | |  |  | `CURR(23)` | Cost Amount in Company Code Currency |
| `CostOfGoodsSoldAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Cost of Goods Sold - Total |
| `COGSAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Cost of Goods Sold - Total |
| `FxdCOGSAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Cost of Goods Sold - Fixed |
| `FxdCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | Cost of Goods Sold - Fixed |
| `RecognizedCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | Recognized COS |
| `COGSAdjustmentAmtInCCCrcy` |  | |  |  | `CURR(23)` | COS Adjustment |
| `DeferredCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | Deferred COS |
| `AccruedCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | Accrued COS |
| `RecognizableCostAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Cost |
| `ImminentLossRsrvAmtInCCCrcy` |  | |  |  | `CURR(23)` | Imminent Loss Reserve |
| `SalesDeductReserveAmtInCCCrcy` |  | |  |  | `CURR(23)` | Reserves for Anticipated Sales Deductions |
| `UnrlzdCostsReserveAmtInCCCrcy` |  | |  |  | `CURR(23)` | Reserves for Unrealized Costs |
| `MnlContrAccrBalShtAmtInCCCrcy` |  | |  |  | `CURR(23)` | Manual Contract Accruals Balance Sheet in CCCrcy |
| `SalesDeductionAmountInGlobCrcy` |  | |  |  | `CURR(23)` | Sales Deduction |
| `SalesDeductionAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Sales Deduction |
| `PriceDifferenceAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Price Differences |
| `PriceDifferenceAmtInCCCrcy` |  | |  |  | `CURR(23)` | Price Differences |
| `AdminOverheadAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Administration Overhead |
| `AdminOverheadAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Administration Overhead |
| `SalesOverheadAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Sales Overhead |
| `SalesOverheadAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Sales Overhead |
| `MarketingOverheadAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Marketing Overhead |
| `MarketingOvhdAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Marketing Overhead |
| `RnDOverheadAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Research and Development Overhead |
| `RnDOverheadAmtInCCCrcy` |  | |  |  | `CURR(23)` | Research and Development Overhead |
| `LongTermInvmtAmtInCCCrcy` |  | |  |  | `CURR(23)` | Increase (Decrease) in Long-term Investments |
| `AcctsRblAmtInCCCrcy` |  | |  |  | `CURR(23)` | Increase (Decrease) in Accounts Receivable (Net) |
| `AcctsOthRblAmtInCCCrcy` |  | |  |  | `CURR(23)` | Increase (Decrease) in Accounts Other Receivable (Net) |
| `AcctsPyblAmtInCCCrcy` |  | |  |  | `CURR(23)` | Increase (Decrease) in Accounts Payable (Net) |
| `AcctsOthPyblAmtInCCCrcy` |  | |  |  | `CURR(23)` | Increase (Decrease) in Accounts Other Payables (Net) |
| `ProvisionAmtInCCCrcy` |  | |  |  | `CURR(23)` | Increase/Decrease of Provisions |
| `NotesReceivableAmtInCCCrcy` |  | |  |  | `CURR(23)` | Increase (Decrease) in Notes Receivable |
| `TangibleAstDeprAmtInCCCrcy` |  | |  |  | `CURR(23)` | Depreciation of Tangible Assets |
| `IntngblAssetAmtznAmtInCCCrcy` |  | |  |  | `CURR(23)` | Amortization of Intangible Assets |
| `TangibleAstAmtInCCCrcy` |  | |  |  | `CURR(23)` | Purchase (Sale) of Tangible Assets |
| `IntangibleAstAmtInCCCrcy` |  | |  |  | `CURR(23)` | Purchase (Sale) of Intangible Assets |
| `FixedAssetRtrmtAmtInCCCrcy` |  | |  |  | `CURR(23)` | Gain/Loss from Retirement of Fixed Assets |
| `InventoryAmtInCCCrcy` |  | |  |  | `CURR(23)` | Increase/Decrease of Inventories |
| `CommonStockAmtInCCCrcy` |  | |  |  | `CURR(23)` | Increase (Decrease) in Common Stocks |
| `CashAndCashEqvlntAmtInCCCrcy` |  | |  |  | `CURR(23)` | Change (Increase/ Decrease) in cash and cash equivalents |
| `DownPaymentAmtInCCCrcy` |  | |  |  | `CURR(23)` | Customer Down Payment |
| `AssetAmtInCCCrcy` |  | |  |  | `CURR(23)` | Asset Amount In CompanyCode Currency |
| `LiabilityEquityAmtInCCCrcy` |  | |  |  | `CURR(23)` | Liabilities and Equity Amount In Company Code Currency |
| `NotAssignedAmtInCCCrcy` |  | |  |  | `CURR(23)` | Not Assigned Amount In Company Code Currency |
| `NetResultAmtInCCCrcy` |  | |  |  | `CURR(23)` | Net Result Amount In Company Code Currency |
| `PnLResultAmtInCCCrcy` |  | |  |  | `CURR(23)` | Profit for the Period |
| `GLAcctNetIncomeAmtInCCCrcy` |  | |  |  | `CURR(23)` | Net Income Amount In Company Code Currency |
| `AssetLiabilityAmtInCCCrcy` |  | |  | `cast ( DeferredCOGSAmtInCCCrcy + DeferredRevenueAmtInCCCrcy + AccruedRevenueAmtInCCCrcy + AccruedCOGSAmtInCCCrcy as fis_asset_lblty)` | `CURR(23)` | Asset/Liability Amount in Company Code Currency |
| `VarblCOGSAmtInGlobCrcy` |  | |  | `cast ( CostOfGoodsSoldAmtInGlobCrcy - FxdCOGSAmtInGlobCrcy as fins_cogs_variable)` | `CURR(23)` | Cost of Goods Sold - Variable |
| `VarblCOGSAmtInCCCrcy` |  | |  | `cast ( COGSAmountInCoCodeCrcy - FxdCOGSAmtInCCCrcy as fins_cogs_variable)` | `CURR(23)` | Cost of Goods Sold - Variable |
| `ContrbnMargin1AmtInGlobCrcy` |  | |  | `cast ( BilledRevenueAmtInGlobCrcy + SalesDeductionAmountInGlobCrcy + RevenueAdjustAmtInGlobCrcy + ( CostOfGoodsSoldAmtInGlobCrcy - FxdCOGSAmtInGlobCrcy ) as fins_contribution_margin_i)` | `CURR(23)` | Contribution Margin I |
| `ContrbnMargin1AmtInCoCodeCrcy` |  | |  | `cast ( BilledRevenueAmtInCoCodeCrcy + SalesDeductionAmtInCoCodeCrcy + RevenueAdjustmentAmtInCCCrcy + ( COGSAmountInCoCodeCrcy - FxdCOGSAmtInCCCrcy ) as fins_contribution_margin_i)` | `CURR(23)` | Contribution Margin I |
| `ContrbnMargin2AmtInGlobCrcy` |  | |  | `cast ( ( BilledRevenueAmtInGlobCrcy + SalesDeductionAmountInGlobCrcy + RevenueAdjustAmtInGlobCrcy + (CostOfGoodsSoldAmtInGlobCrcy - FxdCOGSAmtInGlobCrcy) ) + FxdCOGSAmtInGlobCrcy + PriceDifferenceAmtInGlobCrcy as fins_contribution_margin_ii)` | `CURR(23)` | Contribution Margin II |
| `ContrbnMargin2AmtInCoCodeCrcy` |  | |  | `cast ( ( BilledRevenueAmtInCoCodeCrcy + SalesDeductionAmtInCoCodeCrcy + RevenueAdjustmentAmtInCCCrcy + (COGSAmountInCoCodeCrcy - FxdCOGSAmtInCCCrcy) ) + FxdCOGSAmtInCCCrcy + PriceDifferenceAmtInCCCrcy as fins_contribution_margin_ii)` | `CURR(23)` | Contribution Margin II |
| `ContrbnMargin3AmtInGlobCrcy` |  | |  | `cast ( ( ( BilledRevenueAmtInGlobCrcy + SalesDeductionAmountInGlobCrcy + RevenueAdjustAmtInGlobCrcy + (CostOfGoodsSoldAmtInGlobCrcy - FxdCOGSAmtInGlobCrcy) ) + FxdCOGSAmtInGlobCrcy + PriceDifferenceAmtInGlobCrcy ) + AdminOverheadAmtInGlobCrcy + SalesOverheadAmtInGlobCrcy + MarketingOverheadAmtInGlobCrcy + RnDOverheadAmtInGlobCrcy as fins_contribution_margin_iii)` | `CURR(23)` | Contribution Margin III |
| `ContrbnMargin3AmtInCoCodeCrcy` |  | |  | `cast ( ( ( BilledRevenueAmtInCoCodeCrcy + SalesDeductionAmtInCoCodeCrcy + RevenueAdjustmentAmtInCCCrcy + (COGSAmountInCoCodeCrcy - FxdCOGSAmtInCCCrcy) ) + FxdCOGSAmtInCCCrcy + PriceDifferenceAmtInCCCrcy ) + AdminOverheadAmtInCoCodeCrcy + SalesOverheadAmtInCoCodeCrcy + MarketingOvhdAmtInCoCodeCrcy + RnDOverheadAmtInCCCrcy as fins_contribution_margin_iii)` | `CURR(23)` | Contribution Margin III |
| `OperatingActyCashAmtInCCCrcy` |  | |  | `cast ( PnLResultAmtInCCCrcy - TangibleAstDeprAmtInCCCrcy - IntngblAssetAmtznAmtInCCCrcy - FixedAssetRtrmtAmtInCCCrcy - ProvisionAmtInCCCrcy - InventoryAmtInCCCrcy - AcctsRblAmtInCCCrcy - AcctsOthRblAmtInCCCrcy + AcctsPyblAmtInCCCrcy + AcctsOthPyblAmtInCCCrcy as fins_cfs_cashopg)` | `CURR(23)` | Net cash generated from continuing operating activities |
| `InvestingActyCashAmtInCCCrcy` |  | |  | `cast ( - TangibleAstAmtInCCCrcy + TangibleAstDeprAmtInCCCrcy - IntangibleAstAmtInCCCrcy + IntngblAssetAmtznAmtInCCCrcy + FixedAssetRtrmtAmtInCCCrcy - LongTermInvmtAmtInCCCrcy as fins_cfs_cashinvtg)` | `CURR(23)` | Net cash used in continuing investing activities |
| `FinancingActyCashAmtInCCCrcy` |  | |  | `cast ( CommonStockAmtInCCCrcy + NotesReceivableAmtInCCCrcy as fins_cfs_cashfin)` | `CURR(23)` | Net cash generated from financing activities |
| `NetCashAmtInCCCrcy` |  | |  | `cast ( ( PnLResultAmtInCCCrcy - TangibleAstDeprAmtInCCCrcy - IntngblAssetAmtznAmtInCCCrcy - FixedAssetRtrmtAmtInCCCrcy - ProvisionAmtInCCCrcy - InventoryAmtInCCCrcy - AcctsRblAmtInCCCrcy - AcctsOthRblAmtInCCCrcy + AcctsPyblAmtInCCCrcy + AcctsOthPyblAmtInCCCrcy) + ( - TangibleAstAmtInCCCrcy + TangibleAstDeprAmtInCCCrcy - IntangibleAstAmtInCCCrcy + IntngblAssetAmtznAmtInCCCrcy + FixedAssetRtrmtAmtInCCCrcy - LongTermInvmtAmtInCCCrcy) + (CommonStockAmtInCCCrcy + NotesReceivableAmtInCCCrcy) as fins_cfs_netcash)` | `CURR(23)` | Net Cash Amount In CompanyCode Currency |
| `GLAccountAuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `SupplierBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `CustomerBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `AcctgDocTypeAuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `OrderType` |  | |  |  | `CHAR(4)` | Order Type |
| `SalesOrderType` |  | |  |  | `CHAR(4)` | Sales Document Type |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `_JournalEntry` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_FiscalPeriod` | | ✓ | | | | |
| `_FiscalPeriodForVariant` | | ✓ | | | | |
| `_LedgerFiscalYear` | | ✓ | | | | |
| `_LedgerFiscalYearForVariant` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_FiscalYearPeriod` | | ✓ | | | | |
| `_FiscalYearPeriodForVariant` | | ✓ | | | | |
| `_CalendarDate` | | ✓ | | | | |
| `_FiscalCalendarDate` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_BalanceTransactionCurrency` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_GlobalCurrency` | | ✓ | | | | |
| `_FunctionalCurrency` | | ✓ | | | | |
| `_FreeDefinedCurrency1` | | ✓ | | | | |
| `_FreeDefinedCurrency2` | | ✓ | | | | |
| `_FreeDefinedCurrency3` | | ✓ | | | | |
| `_FreeDefinedCurrency4` | | ✓ | | | | |
| `_FreeDefinedCurrency5` | | ✓ | | | | |
| `_FreeDefinedCurrency6` | | ✓ | | | | |
| `_FreeDefinedCurrency7` | | ✓ | | | | |
| `_FreeDefinedCurrency8` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_CostSourceUnit` | | ✓ | | | | |
| `_AdditionalQuantity1Unit` | | ✓ | | | | |
| `_AdditionalQuantity2Unit` | | ✓ | | | | |
| `_AdditionalQuantity3Unit` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_CurrentProfitCenter` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_CurrentCostCenter` | | ✓ | | | | |
| `_CostAnalysisResource` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_WBSElementInternalID` | | ✓ | | | | |
| `_WBSElementExternalID` | | ✓ | | | | |
| `_Project` | | ✓ | | | | |
| `_ProjectExternalID` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_GLAccountInCompanyCode` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |
| `_DebitCreditCode` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_SourceLedger` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_SalesDocumentItem` | | ✓ | | | | |
| `_InternalOrder` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_Employment` | | ✓ | | | | |
| `_FinancialTransactionType` | | ✓ | | | | |
| `_BusinessTransactionType` | | ✓ | | | | |
| `_ReferenceDocumentType` | | ✓ | | | | |
| `_PredecessorReferenceDocType` | | ✓ | | | | |
| `_PartnerCostCenter` | | ✓ | | | | |
| `_PartnerProfitCenter` | | ✓ | | | | |
| `_PartnerBusinessArea` | | ✓ | | | | |
| `_PartnerFunctionalArea` | | ✓ | | | | |
| `_PartnerCompanyCode` | | ✓ | | | | |
| `_PartnerSegment` | | ✓ | | | | |
| `_AccountingDocumentCategory` | | ✓ | | | | |
| `_PostingKey` | | ✓ | | | | |
| `_SubLedgerAccLineItemType` | | ✓ | | | | |
| `_User` | | ✓ | | | | |
| `_EliminationProfitCenter` | | ✓ | | | | |
| `_GLAccountType` | | ✓ | | | | |
| `_OffsettingAccountType` | | ✓ | | | | |
| `_OffsettingChartOfAccounts` | | ✓ | | | | |
| `_OffsettingAccount` | | ✓ | | | | |
| `_OffsettingAccountWithBP` | | ✓ | | | | |
| `_AlternativeGLAccount` | | ✓ | | | | |
| `_CountryChartOfAccounts` | | ✓ | | | | |
| `_PurchasingDocument` | | ✓ | | | | |
| `_PurchasingDocumentItem` | | ✓ | | | | |
| `_SpecialGLCode` | | ✓ | | | | |
| `_TaxCode` | | ✓ | | | | |
| `_HouseBank` | | ✓ | | | | |
| `_ClearingJrnlEntryFiscalYear` | | ✓ | | | | |
| `_ClearingJournalEntry` | | ✓ | | | | |
| `_ClearingAccountingDocument` | | ✓ | | | | |
| `_FixedAsset` | | ✓ | | | | |
| `_MasterFixedAsset` | | ✓ | | | | |
| `_GroupMasterFixedAsset` | | ✓ | | | | |
| `_GroupFixedAsset` | | ✓ | | | | |
| `_InventorySpecialStockValnType` | | ✓ | | | | |
| `_InventorySpclStockValnType` | | ✓ | | | | |
| `_InventorySpecialStockType` | | ✓ | | | | |
| `_InventorySpclStkSalesDocument` | | ✓ | | | | |
| `_InventorySpclStkSalesDocItm` | | ✓ | | | | |
| `_InvtrySpclStockWBSElmntIntID` | | ✓ | | | | |
| `_InventorySpclStockWBSElement` | | ✓ | | | | |
| `_InventorySpecialStockSupplier` | | ✓ | | | | |
| `_InventoryValuationType` | | ✓ | | | | |
| `_ControllingDebitCreditCode` | | ✓ | | | | |
| `_OriginSenderObject` | | ✓ | | | | |
| `_ControllingObjectClass` | | ✓ | | | | |
| `_PartnerControllingObjectClass` | | ✓ | | | | |
| `_OriginCostCenter` | | ✓ | | | | |
| `_OriginProfitCenter` | | ✓ | | | | |
| `_CostCtrActivityType` | | ✓ | | | | |
| `_OriginCostCtrActivityType` | | ✓ | | | | |
| `_OrderCategory` | | ✓ | | | | |
| `_BusinessProcess` | | ✓ | | | | |
| `_PartnerCostCtrActivityType` | | ✓ | | | | |
| `_PartnerOrder` | | ✓ | | | | |
| `_PartnerOrder_2` | | ✓ | | | | |
| `_PartnerOrderCategory` | | ✓ | | | | |
| `_PartnerWBSElement` | | ✓ | | | | |
| `_PartnerProject` | | ✓ | | | | |
| `_PartnerSalesDocument` | | ✓ | | | | |
| `_PartnerSalesDocumentItem` | | ✓ | | | | |
| `_PartnerBusinessProcess` | | ✓ | | | | |
| `_WorkPackage` | | ✓ | | | | |
| `_WorkPackageWorkItem` | | ✓ | | | | |
| `_BillingDocumentType` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_SoldMaterial` | | ✓ | | | | |
| `_SoldProduct` | | ✓ | | | | |
| `_Fund` | | ✓ | | | | |
| `_PartnerFund` | | ✓ | | | | |
| `_FundsCenter` | | ✓ | | | | |
| `_MovementCategory` | | ✓ | | | | |
| `_AssetTransactionType` | | ✓ | | | | |
| `_BudgetPeriod` | | ✓ | | | | |
| `_CostOriginGroup` | | ✓ | | | | |
| `_CustomerSupplierCountry` | | ✓ | | | | |
| `_CustomerSupplierIndustry` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_FinancialManagementArea` | | ✓ | | | | |
| `_HouseBankAccount` | | ✓ | | | | |
| `_LogicalSystem` | | ✓ | | | | |
| `_OperatingConcern` | | ✓ | | | | |
| `_PartnerCompany` | | ✓ | | | | |
| `_ProjectNetwork` | | ✓ | | | | |
| `_PurReqValuationArea` | | ✓ | | | | |
| `_SemanticTag` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |
| `_GLAccountHierarchy` | | ✓ | | | | |
| `_Equipment` | | ✓ | | | | |
| `_FunctionalLocation` | | ✓ | | | | |
| `_MaintenanceActivityType` | | ✓ | | | | |
| `_MaintOrdPlngDegreeCode` | | ✓ | | | | |
| `_PMNotificationPriorityType` | | ✓ | | | | |
| `_PMNotificationPriority` | | ✓ | | | | |
| `_MaintenanceOrderSubOperation` | | ✓ | | | | |
| `_Assembly` | | ✓ | | | | |
| `_SuperiorOrder` | | ✓ | | | | |
| `_ProjectInternalID` | | ✓ | | | | |
| `_ConditionContract` | | ✓ | | | | |
| `_SoldProductGroup` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceDocument` | | ✓ | | | | |
| `_ServiceDocumentItem` | | ✓ | | | | |
| `_ServiceContract` | | ✓ | | | | |
| `_ServiceContractItem` | | ✓ | | | | |
| `_ServiceContractType` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_WBSElementBasicDataText` | | ✓ | | | | |
| `_ProjectBasicData` | | ✓ | | | | |
| `_ProjectBasicDataText` | | ✓ | | | | |
| `_PartnerProjectExternalID` | | ✓ | | | | |
| `_PartnerProjctExtrnalIDText` | | ✓ | | | | |
| `_PartnerWBSElementExternalID` | | ✓ | | | | |
| `_PartnerWBSElemntExtrnalIDText` | | ✓ | | | | |
| `_PartnerProjectBasicData` | | ✓ | | | | |
| `_PartnerProjectBasicDataText` | | ✓ | | | | |
| `_PartnerWBSElementBasicData` | | ✓ | | | | |
| `_PartnerWBSElemntBasicDataText` | | ✓ | | | | |
| `_InvtrySpclStockWBSElmntBD` | | ✓ | | | | |
| `_InvtrySpclStockWBSElmntExtID` | | ✓ | | | | |
| `_ProviderContract` | | ✓ | | | | |
| `_ProviderContractItem` | | ✓ | | | | |
| `_TimeSheetOvertimeCat` | | ✓ | | | | |
| `_AssetKeyFigure` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_JournalEntryItem` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFIGLACCTLITST'
@EndUserText.label: 'G/L Line Item with Semantic Tag Including FA'
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
@AccessControl.auditFilter: #ENABLED
@Analytics.dataCategory: #CUBE
@ObjectModel.representativeKey: 'LedgerGLLineItem'
@AbapCatalog.preserveKey: true
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #REQUIRED
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@Consumption.dbHints: ['USE_HEX_PLAN','NO_JOIN_THRU_AGGR']
define view I_GLAccountLineItemSemTag
  as select from P_GLAccountLineItemSemTag as P_GLAccountLineItemSemTag
  association [1..1] to E_JournalEntryItem as _Extension on  $projection.SourceLedger       = _Extension.SourceLedger
                                                         and $projection.CompanyCode        = _Extension.CompanyCode
                                                         and $projection.FiscalYear         = _Extension.FiscalYear
                                                         and $projection.AccountingDocument = _Extension.AccountingDocument
                                                         and $projection.LedgerGLLineItem   = _Extension.LedgerGLLineItem

{
      @ObjectModel.foreignKey.association: '_Ledger'
      @Environment.sql.passValue: true
  key Ledger,
      @ObjectModel.foreignKey.association: '_SourceLedger'
  key SourceLedger,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Environment.sql.passValue: true
  key CompanyCode,
      @ObjectModel.foreignKey.association: '_FiscalYear'
      @Environment.sql.passValue: true
  key FiscalYear,
      @ObjectModel.foreignKey.association: '_JournalEntry'
  key AccountingDocument,
  key LedgerGLLineItem,

      ///////////////////////////////////////////////////////////////////////
      // I_SemTagGLAccount
      ///////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_Hierarchy'
      @Environment.sql.passValue: true
  key GLAccountHierarchy,
      @ObjectModel.foreignKey.association: '_SemanticTag'
  key SemanticTag,
      @Semantics.businessDate.from: true
  key ValidityStartDate,
      @Semantics.businessDate.to: true
  key ValidityEndDate,

      @ObjectModel.foreignKey.association: '_LedgerFiscalYearForVariant'
      //@Environment.sql.passValue: true
      @Semantics.fiscal.year: true
      LedgerFiscalYear,
      GLRecordType,

      // Test workaround
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      ChartOfAccounts,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea,

      ///////////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_00  Unified Journal Entry: Transaction, Currencies, Units
      ///////////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_FinancialTransactionType'
      FinancialTransactionType,
      @ObjectModel.foreignKey.association: '_BusinessTransactionType'
      BusinessTransactionType,
      @ObjectModel.foreignKey.association: '_ReferenceDocumentType'
      ReferenceDocumentType,
      @ObjectModel.foreignKey.association: '_LogicalSystem'
      LogicalSystem,
      ReferenceDocumentContext,
      ReferenceDocument,
      ReferenceDocumentItem,
      ReferenceDocumentItemGroup,
      //SUBTA,
      IsReversal,
      IsReversed,
      //XTRUEREV,
      //AWTYP_REV,
      ReversalReferenceDocumentCntxt,
      ReversalReferenceDocument,
      //SUBTA_REV,
      IsSettlement,
      IsSettled,
      @ObjectModel.foreignKey.association: '_PredecessorReferenceDocType'
      PredecessorReferenceDocType,
      PredecessorReferenceDocCntxt,
      PredecessorReferenceDocument,
      PredecessorReferenceDocItem,
      //PREC_SUBTA,

      SourceReferenceDocumentType,
      SourceLogicalSystem,
      SourceReferenceDocumentCntxt,
      SourceReferenceDocument,
      SourceReferenceDocumentItem,
      SourceReferenceDocSubitem,
      IsCommitment,
      JrnlEntryItemObsoleteReason,

      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      GLAccount,


      ////////////////////////////////////////////////////////////////////////////////////
      // .INCLUDE  ACDOC_SI_GL_ACCAS Unified Journal Entry: G/L additional account assignments
      ////////////////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_CostCenter'
      CostCenter,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      ProfitCenter,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      FunctionalArea,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      BusinessArea,
      @ObjectModel.foreignKey.association: '_Segment'
      Segment,
      @ObjectModel.foreignKey.association: '_PartnerCostCenter'
      PartnerCostCenter,
      @ObjectModel.foreignKey.association: '_PartnerProfitCenter'
      PartnerProfitCenter,
      @ObjectModel.foreignKey.association: '_PartnerFunctionalArea'
      PartnerFunctionalArea,
      @ObjectModel.foreignKey.association: '_PartnerBusinessArea'
      PartnerBusinessArea,
      @ObjectModel.foreignKey.association: '_PartnerCompany'
      PartnerCompany,
      PartnerSegment,


      /////////////////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_VALUE_DATA Unified Journal Entry: Value Fields
      /////////////////////////////////////////////////////////////////////////////////////

      @ObjectModel.foreignKey.association: '_BalanceTransactionCurrency'
      @Semantics.currencyCode:true
      BalanceTransactionCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
      AmountInBalanceTransacCrcy,

      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      @Semantics.currencyCode:true
      TransactionCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      AmountInTransactionCurrency,

      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      @Semantics.currencyCode:true
      CompanyCodeCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      AmountInCompanyCodeCurrency,

      ////////////////////////////////////
      // NEW
      @ObjectModel.foreignKey.association: '_GlobalCurrency'
      @Semantics.currencyCode:true
      GlobalCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      AmountInGlobalCurrency,

      // Functional Currency
      @ObjectModel.foreignKey.association: '_FunctionalCurrency'
      @Semantics.currencyCode:true
      FunctionalCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
      AmountInFunctionalCurrency,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency1'
      @Semantics.currencyCode:true
      FreeDefinedCurrency1,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      AmountInFreeDefinedCurrency1,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency2'
      @Semantics.currencyCode:true
      FreeDefinedCurrency2,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      AmountInFreeDefinedCurrency2,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency3'
      @Semantics.currencyCode:true
      FreeDefinedCurrency3,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      AmountInFreeDefinedCurrency3,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency4'
      @Semantics.currencyCode:true
      FreeDefinedCurrency4,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      AmountInFreeDefinedCurrency4,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency5'
      @Semantics.currencyCode:true
      FreeDefinedCurrency5,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      AmountInFreeDefinedCurrency5,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency6'
      @Semantics.currencyCode:true
      FreeDefinedCurrency6,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      AmountInFreeDefinedCurrency6,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency7'
      @Semantics.currencyCode:true
      FreeDefinedCurrency7,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      AmountInFreeDefinedCurrency7,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency8'
      @Semantics.currencyCode:true
      FreeDefinedCurrency8,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      AmountInFreeDefinedCurrency8,
      ////////////////////////////////////

      ////////////////////////////////////
      // NEW
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      FixedAmountInGlobalCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      GrpValnFixedAmtInGlobCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      PrftCtrValnFxdAmtInGlobCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      TotalPriceVarcInGlobalCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      GrpValnTotPrcVarcInGlobCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      PrftCtrValnTotPrcVarcInGlbCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      FixedPriceVarcInGlobalCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      GrpValnFixedPrcVarcInGlobCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      PrftCtrValnFxdPrcVarcInGlbCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      FixedAmountInCoCodeCrcy,

      ////////////////////////////////////


      @Semantics.currencyCode:true
      ControllingObjectCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'ControllingObjectCurrency'} }
      AmountInObjectCurrency,


      @ObjectModel.foreignKey.association: '_BaseUnit'
      @Semantics.unitOfMeasure:true
      BaseUnit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      Quantity,

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      FixedQuantity,

      @ObjectModel.foreignKey.association: '_CostSourceUnit'
      @Semantics.unitOfMeasure:true
      CostSourceUnit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      ValuationQuantity,

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      ValuationFixedQuantity,

      @ObjectModel.foreignKey.association: '_AdditionalQuantity1Unit'
      @Semantics.unitOfMeasure:true
      AdditionalQuantity1Unit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity1Unit'} }
      AdditionalQuantity1,

      @ObjectModel.foreignKey.association: '_AdditionalQuantity2Unit'
      @Semantics.unitOfMeasure:true
      AdditionalQuantity2Unit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity2Unit'} }
      AdditionalQuantity2,

      @ObjectModel.foreignKey.association: '_AdditionalQuantity3Unit'
      @Semantics.unitOfMeasure:true
      AdditionalQuantity3Unit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity3Unit'} }
      AdditionalQuantity3,


      /////////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_FIX  Unified Journal Entry: Mandatory fields for G/L
      ////////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_DebitCreditCode'
      DebitCreditCode,
      //      @ObjectModel.foreignKey.association: '_FiscalPeriod'
      FiscalPeriod,
      @Analytics.internalName: #LOCAL
      @Semantics.fiscal.yearVariant: true
      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
      P_GLAccountLineItemSemTag.FiscalYearVariant,
      @Semantics.fiscal.yearPeriod: true
      FiscalYearPeriod,
      PostingDate,
      DocumentDate,
      @ObjectModel.foreignKey.association: '_AccountingDocumentType'
      AccountingDocumentType,
      AccountingDocumentItem,
      AssignmentReference,
      @ObjectModel.foreignKey.association: '_AccountingDocumentCategory'
      AccountingDocumentCategory,
      @ObjectModel.foreignKey.association: '_PostingKey'
      PostingKey,
      TransactionTypeDetermination,
      @ObjectModel.foreignKey.association: '_SubLedgerAccLineItemType'
      SubLedgerAcctLineItemType,
      //      @ObjectModel.foreignKey.association: '_User'
      AccountingDocCreatedByUser,
      LastChangeDateTime,
      CreationDateTime,
      CreationDate,
      @ObjectModel.foreignKey.association: '_EliminationProfitCenter'
      EliminationProfitCenter,
      OriginObjectType,
      @ObjectModel.foreignKey.association: '_GLAccountType'
      GLAccountType,
      @ObjectModel.foreignKey.association: '_AlternativeGLAccount'
      AlternativeGLAccount,
      @ObjectModel.foreignKey.association: '_CountryChartOfAccounts'
      CountryChartOfAccounts,


      ///////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_GEN  Unified Journal Entry: Fields for several subledgers
      //////////////////////////////////////////////////////////////////////////
      InvoiceReference,
      InvoiceReferenceFiscalYear,
      FollowOnDocumentType,
      InvoiceItemReference,
      ReferencePurchaseOrderCategory,
      @ObjectModel.foreignKey.association: '_PurchasingDocument'
      PurchasingDocument,
      @ObjectModel.foreignKey.association: '_PurchasingDocumentItem'
      PurchasingDocumentItem,
      AccountAssignmentNumber,
      DocumentItemText,
      @ObjectModel.foreignKey.association: '_SalesOrder'
      SalesOrder,
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      SalesOrderItem,
      @ObjectModel.foreignKey.association: '_SalesDocument'
      SalesDocument,
      @ObjectModel.foreignKey.association: '_SalesDocumentItem'
      SalesDocumentItem,
      @ObjectModel.foreignKey.association: '_Material'
      Material,
      @ObjectModel.foreignKey.association: '_Product'
      Product,
      @ObjectModel.foreignKey.association: '_Plant'
      Plant,
      @ObjectModel.foreignKey.association: '_Supplier'
      Supplier,
      @ObjectModel.foreignKey.association: '_Customer'
      Customer,

      ServicesRenderedDate,
      @ObjectModel.foreignKey.association: '_ConditionContract'
      ConditionContract,
      
      ComponentBreakdown,
      CompBreakdownScaleNumerator,

      /////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_FI  Unified Journal Entry: Fields for FI subledgers
      /////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_FinancialAccountType'
      FinancialAccountType,
      @ObjectModel.foreignKey.association: '_SpecialGLCode'
      SpecialGLCode,
      @Consumption.valueHelpDefinition: [
            { entity:  { name:    'I_TaxCodeStdVH',
                         element: 'TaxCode' }
            }]
      //      @ObjectModel.foreignKey.association: '_TaxCode'
      TaxCode,
      @ObjectModel.foreignKey.association: '_HouseBank'
      HouseBank,
      @ObjectModel.foreignKey.association: '_HouseBankAccount'
      HouseBankAccount,
      IsOpenItemManaged,
      ClearingDate,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'ClearingJournalEntry'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'ClearingJournalEntry'
      @ObjectModel.foreignKey.association: '_ClearingAccountingDocument'
      ClearingAccountingDocument,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'ClearingJournalEntryFiscalYear'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'ClearingJournalEntryFiscalYear'
      ClearingDocFiscalYear,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ClearingJournalEntry'
      ClearingJournalEntry,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ClearingJrnlEntryFiscalYear'
      ClearingJournalEntryFiscalYear,


      /////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_FAA  Unified Journal Entry: Fields for Asset Accounting
      /////////////////////////////////////////////////////////////////////////
      AssetDepreciationArea,
      @ObjectModel.foreignKey.association: '_MasterFixedAsset'
      MasterFixedAsset,
      @ObjectModel.foreignKey.association: '_FixedAsset'
      FixedAsset,
      AssetValueDate,
      @ObjectModel.foreignKey.association: '_AssetTransactionType'
      AssetTransactionType,
      @ObjectModel.foreignKey.association: '_MovementCategory'
      AssetAcctTransClassfctn,
      DepreciationFiscalPeriod,
      @ObjectModel.foreignKey.association: '_GroupMasterFixedAsset'
      GroupMasterFixedAsset,
      @ObjectModel.foreignKey.association: '_GroupFixedAsset'
      GroupFixedAsset,


      //////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_ML Unified Journal Entry: Fields for Material Ledger
      //////////////////////////////////////////////////////////////////////////
      CostEstimate,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'InvtrySpecialStockValnType_2'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'InvtrySpecialStockValnType_2'
      @ObjectModel.foreignKey.association: '_InventorySpecialStockValnType'
      InventorySpecialStockValnType,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_InventorySpclStockValnType'
      InvtrySpecialStockValnType_2,
      //xobew,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
      InventorySpecialStockType,
      @ObjectModel.foreignKey.association: '_InventorySpclStkSalesDocument'
      InventorySpclStkSalesDocument, //  as InventorySpecialStockSalesDocument,
      @ObjectModel.foreignKey.association: '_InventorySpclStkSalesDocItm'
      InventorySpclStkSalesDocItm, //  as InventorySpecialStockSalesDocumentItem,
      @ObjectModel.foreignKey.association: '_InvtrySpclStockWBSElmntIntID'
      InvtrySpclStockWBSElmntIntID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_InvtrySpclStockWBSElmntExtID'
      InvtrySpclStockWBSElmntExtID,
      @ObjectModel.foreignKey.association: '_InventorySpclStockWBSElement'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'InvtrySpclStockWBSElmntIntID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'InvtrySpclStockWBSElmntIntID'
      InventorySpclStockWBSElement, //  as InventorySpecialStockWBSElement,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockSupplier'
      InventorySpecialStockSupplier,
      @ObjectModel.foreignKey.association: '_InventoryValuationType'
      InventoryValuationType,
      @ObjectModel.foreignKey.association: '_Purreqvaluationarea'
      ValuationArea,


      ////////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_CFIN   Unified Journal Entry: Fields for Central Finance
      //////////////////////////////////////////////////////////////////////////////
      //@ObjectModel.foreignKey.association: '_SenderGLAccount'
      SenderGLAccount,
      SenderAccountAssignment,
      SenderAccountAssignmentType,


      ////////////////////////////////////////////////////////////////////////////
      //  .INCLUDE  ACDOC_SI_CO  Unified Journal Entry: CO fields
      ///////////////////////////////////////////////////////////////////////////
      //      @ObjectModel.foreignKey.association: '_CostOriginGroup'
      CostOriginGroup,
      @ObjectModel.foreignKey.association: '_OriginSenderObject'
      OriginSenderObject,
      @ObjectModel.foreignKey.association: '_ControllingDebitCreditCode'
      ControllingDebitCreditCode,
      ControllingObjectDebitType,
      QuantityIsIncomplete,
      @ObjectModel.foreignKey.association: '_OffsettingAccountWithBP'
      OffsettingAccount,
      @ObjectModel.foreignKey.association: '_OffsettingAccountType'
      OffsettingAccountType,
      @ObjectModel.foreignKey.association: '_OffsettingChartOfAccounts'
      OffsettingChartOfAccounts,
      LineItemIsCompleted,
      PersonnelNumber,
      @ObjectModel.foreignKey.association: '_ControllingObjectClass'
      ControllingObjectClass,
      @ObjectModel.foreignKey.association: '_PartnerCompanyCode'
      PartnerCompanyCode,
      @ObjectModel.foreignKey.association: '_PartnerControllingObjectClass'
      PartnerControllingObjectClass,
      @ObjectModel.foreignKey.association: '_OriginCostCenter'
      OriginCostCenter,
      @ObjectModel.foreignKey.association: '_OriginProfitCenter'
      OriginProfitCenter,
      @ObjectModel.foreignKey.association: '_OriginCostCtrActivityType'
      OriginCostCtrActivityType,
      AccountAssignment,
      AccountAssignmentType,
      @ObjectModel.foreignKey.association: '_CostCtrActivityType'
      CostCtrActivityType,
      @ObjectModel.foreignKey.association: '_Order'
      OrderID,
      @ObjectModel.foreignKey.association: '_OrderCategory'
      OrderCategory,
      @ObjectModel.foreignKey.association: '_WBSElementInternalID'
      WBSElementInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_WBSElementExternalID'
      WBSElementExternalID,
      @ObjectModel.foreignKey.association: '_WBSElement'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'WBSElementInternalID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'WBSElementInternalID'
      WBSElement,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerWBSElementBasicData'
      PartnerWBSElementInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerWBSElementExternalID'
      PartnerWBSElementExternalID,
      @ObjectModel.foreignKey.association: '_ProjectInternalID'
      ProjectInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ProjectExternalID'
      ProjectExternalID,
      @ObjectModel.foreignKey.association: '_Project'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'ProjectInternalID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'ProjectInternalID'
      Project,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerProjectBasicData'
      PartnerProjectInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerProjectExternalID'
      PartnerProjectExternalID,
      @ObjectModel.foreignKey.association: '_OperatingConcern'
      OperatingConcern,
      @ObjectModel.foreignKey.association: '_ProjectNetwork'
      ProjectNetwork,
      //      @ObjectModel.foreignKey.association: '_RelatedNetworkActivity'
      RelatedNetworkActivity,
      @ObjectModel.foreignKey.association: '_BusinessProcess'
      BusinessProcess,
      CostObject,
      BillableControl,
      //bemot,
      @ObjectModel.foreignKey.association: '_CostAnalysisResource'
      CostAnalysisResource,
      CustomerServiceNotification,
      @Consumption.valueHelpDefinition: [
            { entity:  { name:    'I_AcctgServiceDocumentTypeVH',
                         element: 'ServiceDocumentType' }
            }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      ServiceDocumentType,
      @Consumption.valueHelpDefinition: [
            { entity:  { name:    'I_AcctgServiceDocumentVH',
                         element: 'ServiceDocument' }
            }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceDocument'
      ServiceDocument,
      @Consumption.valueHelpDefinition: [
            { entity:  { name:    'I_AcctgServiceDocumentItemVH',
                         element: 'ServiceDocumentItem' }
            }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceDocumentItem'
      ServiceDocumentItem,
      @Consumption.valueHelpDefinition: [
            { entity:  { name:    'I_ServiceContractTypeStdVH',
                         element: 'ServiceContractType' }
            }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceContractType'
      ServiceContractType,
      @Consumption.valueHelpDefinition: [
            { entity:  { name:    'I_AcctgServiceContractVH',
                         element: 'ServiceContract' }
            }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceContract'
      ServiceContract,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceContractItem'
      ServiceContractItem,

      BusinessSolutionOrder,
      BusinessSolutionOrderItem,

      @ObjectModel.foreignKey.association: '_TimeSheetOvertimeCat'
      TimeSheetOvertimeCategory,

      @ObjectModel.foreignKey.association: '_ProviderContract'
      ProviderContract,
      @ObjectModel.foreignKey.association: '_ProviderContractItem'
      ProviderContractItem,

      //      @ObjectModel.foreignKey.association: '_CAProviderContract'
      //      CAProviderContract,
      //      //      @ObjectModel.foreignKey.association: '_CAProviderContractItemNumber'
      //      CAProviderContractItemNumber,

      PartnerAccountAssignment,
      PartnerAccountAssignmentType,
      WorkPackage,
      WorkItem,
      @ObjectModel.foreignKey.association: '_PartnerCostCtrActivityType'
      PartnerCostCtrActivityType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'PartnerOrder_2'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'PartnerOrder_2'
      @ObjectModel.foreignKey.association: '_PartnerOrder'
      PartnerOrder,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerOrder_2'
      PartnerOrder_2,
      @ObjectModel.foreignKey.association: '_PartnerOrderCategory'
      PartnerOrderCategory,
      @ObjectModel.foreignKey.association: '_PartnerWBSElement'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'PartnerWBSElementInternalID'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'PartnerWBSElementInternalID'
      PartnerWBSElement,
      @ObjectModel.foreignKey.association: '_PartnerProject'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'PartnerProjectInternalID'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'PartnerProjectInternalID'
      PartnerProject,
      @ObjectModel.foreignKey.association: '_PartnerSalesDocument'
      PartnerSalesDocument,
      @ObjectModel.foreignKey.association: '_PartnerSalesDocumentItem'
      PartnerSalesDocumentItem,
      PartnerProjectNetwork,
      //      @ObjectModel.foreignKey.association: '_PartnerProjectNetworkActivity'
      PartnerProjectNetworkActivity,
      @ObjectModel.foreignKey.association: '_PartnerBusinessProcess'
      PartnerBusinessProcess,
      PartnerCostObject,

      //////////////////////////////////////////////////////////////////////
      //  .INCLUDE  ACDOC_SI_COPA  Unified Journal Entry: CO-PA fields
      //////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_BillingDocumentType'
      BillingDocumentType,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      @ObjectModel.foreignKey.association: '_Division'
      @Analytics.internalName:#LOCAL
      OrganizationDivision,
      @ObjectModel.foreignKey.association: '_SoldMaterial'
      SoldMaterial,
      @ObjectModel.foreignKey.association: '_SoldProduct'
      SoldProduct,
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      MaterialGroup,
      @ObjectModel.foreignKey.association: '_SoldProductGroup'
      SoldProductGroup,
      @ObjectModel.foreignKey.association: '_ProductGroup'
      ProductGroup,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      CustomerGroup,
      @ObjectModel.foreignKey.association: '_CustomerSupplierCountry'
      CustomerSupplierCountry,
      @ObjectModel.foreignKey.association: '_CustomerSupplierIndustry'
      @Analytics.internalName:#LOCAL
      CustomerSupplierIndustry,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      SalesDistrict,
      @ObjectModel.foreignKey.association: '_BillToParty'
      BillToParty,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      ShipToParty,
      CustomerSupplierCorporateGroup,


      //////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_PS  Unified Journal Entry: Fields for Public Sector
      /////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_FinancialManagementArea'
      FinancialManagementArea,
      @ObjectModel.foreignKey.association: '_Fund'
      Fund,
      GrantID,
      @ObjectModel.foreignKey.association: '_BudgetPeriod'
      BudgetPeriod,
      @ObjectModel.foreignKey.association: '_PartnerFund'
      PartnerFund,
      PartnerGrant,
      PartnerBudgetPeriod,
      @ObjectModel.foreignKey.association: '_FundsCenter'
      FundsCenter,
      FundedProgram,

      ///////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_JVA  Unified Journal Entry: Fields for Joint Venture Accounting
      ///////////////////////////////////////////////////////////////////////
      JointVenture,
      JointVentureEquityGroup,
      JointVentureCostRecoveryCode,
      //vptnr,
      //btype,
      JointVentureEquityType,
      //prodper,

      ///////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_RE STRU  0 0 Unified Journal Entry: Fields for Real Estate
      ///////////////////////////////////////////////////////////////////////
      //swenr,
      //sgenr,
      //sgrnr,
      //smenr,
      //recnnr,
      //snksl,
      //sempsl,
      SettlementReferenceDate,
      //pswenr,
      //psgenr,
      //psgrnr,
      //psmenr,
      //precnnr,
      //psnksl,
      //psempsl,
      //pdabrz
      WorkCenterInternalID,
      OrderOperation,
      OrderItem,

      //////////////////////////////////////////////////
      // .INCLUDE  ACDOC_SI_LOG_ACT:  New Fields  PM  //
      //////////////////////////////////////////////////
      //@ObjectModel.foreignKey.association: '_MaintenanceOrderSubOperation'
      OrderSuboperation,
      @ObjectModel.foreignKey.association: '_Equipment'
      Equipment,
      @ObjectModel.foreignKey.association: '_FunctionalLocation'
      FunctionalLocation,
      @ObjectModel.foreignKey.association: '_Assembly'
      Assembly,
      @ObjectModel.foreignKey.association: '_MaintenanceActivityType'
      MaintenanceActivityType,
      @ObjectModel.foreignKey.association: '_MaintOrdPlngDegreeCode'
      MaintenanceOrderPlanningCode,
      @ObjectModel.foreignKey.association: '_PMNotificationPriorityType'
      MaintPriorityType,
      @ObjectModel.foreignKey.association: '_PMNotificationPriority'
      MaintPriority,
      @ObjectModel.foreignKey.association: '_SuperiorOrder'
      SuperiorOrder,
      MaintenanceOrderIsPlanned,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      DebitAmountInCoCodeCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      CreditAmountInCoCodeCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      DebitAmountInTransCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      CreditAmountInTransCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
      DebitAmountInBalanceTransCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
      CreditAmountInBalanceTransCrcy,

      ////////////////////////////////////
      // NEW
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      DebitAmountInGlobalCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      CreditAmountInGlobalCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
      DebitAmountInFunctionalCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
      CreditAmountInFunctionalCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      DebitAmountInFreeDefinedCrcy1,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      CreditAmountInFreeDefinedCrcy1,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      DebitAmountInFreeDefinedCrcy2,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      CreditAmountInFreeDefinedCrcy2,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      DebitAmountInFreeDefinedCrcy3,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      CreditAmountInFreeDefinedCrcy3,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      DebitAmountInFreeDefinedCrcy4,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      CreditAmountInFreeDefinedCrcy4,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      DebitAmountInFreeDefinedCrcy5,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      CreditAmountInFreeDefinedCrcy5,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      DebitAmountInFreeDefinedCrcy6,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      CreditAmountInFreeDefinedCrcy6,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      DebitAmountInFreeDefinedCrcy7,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      CreditAmountInFreeDefinedCrcy7,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      DebitAmountInFreeDefinedCrcy8,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      CreditAmountInFreeDefinedCrcy8,
      //////////////////////////////////


      IsStatisticalOrder,
      IsStatisticalCostCenter,
      IsStatisticalSalesDocument,
      WBSIsStatisticalWBSElement,

      ///////////////////////////////////////////////////////////////////////
      // Additional requested fields
      ///////////////////////////////////////////////////////////////////////
      //      @ObjectModel.foreignKey.association: '_FiscalQuarter'
      FiscalQuarter,
      FiscalYearQuarter,
      Employee,
      EmployeeFullName,
      @ObjectModel.foreignKey.association: '_AssetKeyFigure'
      AssetAccountingKeyFigure,


      ///////////////////////////////////////////////////////////////////////
      // Restricted Key Figures
      ///////////////////////////////////////////////////////////////////////
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ProjAndSlsOrdStkAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      ProjAndSlsOrdStkAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      RevenueAmountInCompanyCodeCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      RevenueInGlobalCurrency,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      GrossRevenueAmtInCCCrcy, //GrossRevenue,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      RecognizedRevnAmtInCCCrcy, //GrossRevenue,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      RecognizedRevnAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      RevenueAdjustmentAmtInCCCrcy, //GrossRevenueAdjusted,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      RevenueAdjustAmtInGlobCrcy, //GrossRevenueAdjusted,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      DeferredRevenueAmtInCCCrcy, //GrossRevenueDeferred,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      AccruedRevenueAmtInCCCrcy, //GrossRevenueAccrued,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      RecognizableRevenueAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      RecognizableRevnAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      BilledRevenueAmtInCoCodeCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      BilledRevenueAmtInGlobCrcy,

      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      @DefaultAggregation: #SUM
      BilledValnQtyInCostSourceUnit,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      UnbilledRevnInCoCodeCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      RecognizedMarginAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      MnlContrAccrPnLItmAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      CostAmountInCompanyCodeCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      CostOfGoodsSoldAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      COGSAmountInCoCodeCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      FxdCOGSAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      FxdCOGSAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      RecognizedCOGSAmtInCCCrcy, //CostofGoodsSold,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      COGSAdjustmentAmtInCCCrcy, //CostofGoodsSoldAdjusted,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      DeferredCOGSAmtInCCCrcy, //CostofGoodsSoldDeferred,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      AccruedCOGSAmtInCCCrcy, //CostofGoodsSoldAccrued,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      RecognizableCostAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ImminentLossRsrvAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      SalesDeductReserveAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      UnrlzdCostsReserveAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      MnlContrAccrBalShtAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      SalesDeductionAmountInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      SalesDeductionAmtInCoCodeCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      PriceDifferenceAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PriceDifferenceAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      AdminOverheadAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      AdminOverheadAmtInCoCodeCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      SalesOverheadAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      SalesOverheadAmtInCoCodeCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      MarketingOverheadAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      MarketingOvhdAmtInCoCodeCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      RnDOverheadAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      RnDOverheadAmtInCCCrcy,

      // Cash Flow Statement (IFRS)
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      LongTermInvmtAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      AcctsRblAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      AcctsOthRblAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      AcctsPyblAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      AcctsOthPyblAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ProvisionAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      NotesReceivableAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      TangibleAstDeprAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      IntngblAssetAmtznAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      TangibleAstAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      IntangibleAstAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      FixedAssetRtrmtAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      InventoryAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      CommonStockAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      CashAndCashEqvlntAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      DownPaymentAmtInCCCrcy,
      /////////////////////////////////////////////////////////////////////////////
      //New added SemanticTag
      /////////////////////////////////////////////////////////////////////////////
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      AssetAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      LiabilityEquityAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      NotAssignedAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      NetResultAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PnLResultAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      GLAcctNetIncomeAmtInCCCrcy,

      ///////////////////////////////////////////////////////////////////////
      // Calculated Restricted Key Figures
      ///////////////////////////////////////////////////////////////////////

      //      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      //      @DefaultAggregation: #SUM
      //      //GrossProfit + OperatingExpenses
      //      RecognizedMarginAmount + OperatingExpenses                                                      as EBITA,
      //
      //      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      //      @DefaultAggregation: #SUM
      //      //GrossProfit + OperatingExpenses + Depreciation
      //      RecognizedMarginAmount + OperatingExpenses + Depreciation                                       as EBIT,
      //
      //      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      //      @DefaultAggregation: #SUM
      //      //GrossProfit + OperatingExpenses + Depreciation + Interest
      //      RecognizedMarginAmount + OperatingExpenses + Depreciation + Interest                            as EBT,

      //      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      //      @DefaultAggregation: #SUM
      //      PeriodProfit + NetCashOperatingActivities,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      cast (
        DeferredCOGSAmtInCCCrcy + DeferredRevenueAmtInCCCrcy + AccruedRevenueAmtInCCCrcy + AccruedCOGSAmtInCCCrcy
      as fis_asset_lblty)              as AssetLiabilityAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      cast (
        CostOfGoodsSoldAmtInGlobCrcy - FxdCOGSAmtInGlobCrcy
      as fins_cogs_variable)           as VarblCOGSAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      cast (
        COGSAmountInCoCodeCrcy - FxdCOGSAmtInCCCrcy
      as fins_cogs_variable)           as VarblCOGSAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      // BilledRevenueAmtInGlobCrcy + SalesDeductionAmountInGlobCrcy + VarblCOGSAmtInGlobCrcy
      cast (
        BilledRevenueAmtInGlobCrcy + SalesDeductionAmountInGlobCrcy + RevenueAdjustAmtInGlobCrcy + (
        CostOfGoodsSoldAmtInGlobCrcy - FxdCOGSAmtInGlobCrcy )
      as fins_contribution_margin_i)   as ContrbnMargin1AmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      // BilledRevenueAmtInGlobCrcy + SalesDeductionAmountInGlobCrcy + VarblCOGSAmtInGlobCrcy
      cast (
        BilledRevenueAmtInCoCodeCrcy + SalesDeductionAmtInCoCodeCrcy + RevenueAdjustmentAmtInCCCrcy + (
        COGSAmountInCoCodeCrcy - FxdCOGSAmtInCCCrcy )
      as fins_contribution_margin_i)   as ContrbnMargin1AmtInCoCodeCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      // ContrbnMargin1AmtInGlobCrcy + FxdCOGSAmtInGlobCrcy + PriceDifferenceAmtInGlobCrcy
      cast ( (
        BilledRevenueAmtInGlobCrcy + SalesDeductionAmountInGlobCrcy + RevenueAdjustAmtInGlobCrcy + (CostOfGoodsSoldAmtInGlobCrcy - FxdCOGSAmtInGlobCrcy) ) +
        FxdCOGSAmtInGlobCrcy + PriceDifferenceAmtInGlobCrcy
      as fins_contribution_margin_ii)  as ContrbnMargin2AmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      // ContrbnMargin1AmtInGlobCrcy + FxdCOGSAmtInGlobCrcy + PriceDifferenceAmtInGlobCrcy
      cast ( (
        BilledRevenueAmtInCoCodeCrcy + SalesDeductionAmtInCoCodeCrcy + RevenueAdjustmentAmtInCCCrcy + (COGSAmountInCoCodeCrcy - FxdCOGSAmtInCCCrcy) ) +
        FxdCOGSAmtInCCCrcy + PriceDifferenceAmtInCCCrcy
      as fins_contribution_margin_ii)  as ContrbnMargin2AmtInCoCodeCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      // ContrbnMargin2AmtInGlobCrcy + AdminOverheadAmtInGlobCrcy + SalesOverheadAmtInGlobCrcy + MarketingOverheadAmtInGlobCrcy + ResearchAndDevOveAmtInGlobCrcy
      cast ( ( (
        BilledRevenueAmtInGlobCrcy + SalesDeductionAmountInGlobCrcy + RevenueAdjustAmtInGlobCrcy + (CostOfGoodsSoldAmtInGlobCrcy - FxdCOGSAmtInGlobCrcy) ) +
        FxdCOGSAmtInGlobCrcy + PriceDifferenceAmtInGlobCrcy ) +
        AdminOverheadAmtInGlobCrcy + SalesOverheadAmtInGlobCrcy + MarketingOverheadAmtInGlobCrcy + RnDOverheadAmtInGlobCrcy
      as fins_contribution_margin_iii) as ContrbnMargin3AmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      // ContrbnMargin2AmtInGlobCrcy + AdminOverheadAmtInGlobCrcy + SalesOverheadAmtInGlobCrcy + MarketingOverheadAmtInGlobCrcy + ResearchAndDevOveAmtInGlobCrcy
      cast ( ( (
        BilledRevenueAmtInCoCodeCrcy + SalesDeductionAmtInCoCodeCrcy + RevenueAdjustmentAmtInCCCrcy + (COGSAmountInCoCodeCrcy - FxdCOGSAmtInCCCrcy) ) +
        FxdCOGSAmtInCCCrcy + PriceDifferenceAmtInCCCrcy ) +
        AdminOverheadAmtInCoCodeCrcy + SalesOverheadAmtInCoCodeCrcy + MarketingOvhdAmtInCoCodeCrcy + RnDOverheadAmtInCCCrcy
      as fins_contribution_margin_iii) as ContrbnMargin3AmtInCoCodeCrcy,

      // Cash Flow Statement (IFRS)
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      //      cast (
      //        GLAcctNetIncomeAmtInCCCrcy - TangibleAstDeprAmtInCCCrcy - IntngblAssetAmtznAmtInCCCrcy - FixedAssetRtrmtAmtInCCCrcy
      //        - ProvisionAmtInCCCrcy - InventoryAmtInCCCrcy
      //        - AcctsRblAmtInCCCrcy - AcctsOthRblAmtInCCCrcy + AcctsPyblAmtInCCCrcy + AcctsOthPyblAmtInCCCrcy
      //      as fins_cfs_cashopg)                                                                                                         as OperatingActyCashAmtInCCCrcy,
      cast (
        PnLResultAmtInCCCrcy - TangibleAstDeprAmtInCCCrcy - IntngblAssetAmtznAmtInCCCrcy - FixedAssetRtrmtAmtInCCCrcy -
        ProvisionAmtInCCCrcy - InventoryAmtInCCCrcy       - AcctsRblAmtInCCCrcy          - AcctsOthRblAmtInCCCrcy     +
        AcctsPyblAmtInCCCrcy + AcctsOthPyblAmtInCCCrcy
      as fins_cfs_cashopg)             as OperatingActyCashAmtInCCCrcy,


      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      cast (
        - TangibleAstAmtInCCCrcy + TangibleAstDeprAmtInCCCrcy - IntangibleAstAmtInCCCrcy + IntngblAssetAmtznAmtInCCCrcy
        + FixedAssetRtrmtAmtInCCCrcy - LongTermInvmtAmtInCCCrcy
      as fins_cfs_cashinvtg)           as InvestingActyCashAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      cast (
        CommonStockAmtInCCCrcy + NotesReceivableAmtInCCCrcy
      as fins_cfs_cashfin)             as FinancingActyCashAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      // OperatingActyCashAmtInCCCrcy + InvestingActyCashAmtInCCCrcy + FinancingActyCashAmtInCCCrcy
      //      cast ( (
      //        GLAcctNetIncomeAmtInCCCrcy - TangibleAstDeprAmtInCCCrcy - IntngblAssetAmtznAmtInCCCrcy - FixedAssetRtrmtAmtInCCCrcy
      //        - ProvisionAmtInCCCrcy - InventoryAmtInCCCrcy
      //        - AcctsRblAmtInCCCrcy - AcctsOthRblAmtInCCCrcy + AcctsPyblAmtInCCCrcy + AcctsOthPyblAmtInCCCrcy) + (
      //        - TangibleAstAmtInCCCrcy + TangibleAstDeprAmtInCCCrcy - IntangibleAstAmtInCCCrcy + IntngblAssetAmtznAmtInCCCrcy
      //        + FixedAssetRtrmtAmtInCCCrcy - LongTermInvmtAmtInCCCrcy) + (
      //        CommonStockAmtInCCCrcy + NotesReceivableAmtInCCCrcy)
      //      as fins_cfs_netcash)             as NetCashAmtInCCCrcy,
      cast ( (
        PnLResultAmtInCCCrcy - TangibleAstDeprAmtInCCCrcy - IntngblAssetAmtznAmtInCCCrcy - FixedAssetRtrmtAmtInCCCrcy -
        ProvisionAmtInCCCrcy - InventoryAmtInCCCrcy       - AcctsRblAmtInCCCrcy          - AcctsOthRblAmtInCCCrcy     +
        AcctsPyblAmtInCCCrcy + AcctsOthPyblAmtInCCCrcy)   + ( - TangibleAstAmtInCCCrcy + TangibleAstDeprAmtInCCCrcy - IntangibleAstAmtInCCCrcy + IntngblAssetAmtznAmtInCCCrcy
        + FixedAssetRtrmtAmtInCCCrcy - LongTermInvmtAmtInCCCrcy) +
        (CommonStockAmtInCCCrcy + NotesReceivableAmtInCCCrcy)
      as fins_cfs_netcash)             as NetCashAmtInCCCrcy,


      ///////////////////////////////////////////////////////////////////////
      // Associations
      ///////////////////////////////////////////////////////////////////////

      _JournalEntry,
      _CompanyCode,
      _FiscalYear,
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_FiscalPeriodForVariant'
      _FiscalPeriod,
      _FiscalPeriodForVariant,
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_LedgerFiscalYearForVariant'
      _LedgerFiscalYear,
      _LedgerFiscalYearForVariant,
      _FiscalYearVariant,
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_FiscalYearPeriodForVariant'
      _FiscalYearPeriod,
      _FiscalYearPeriodForVariant,
      _CalendarDate,
      _FiscalCalendarDate,
      _ControllingArea,
      _BalanceTransactionCurrency,
      _TransactionCurrency,
      _CompanyCodeCurrency,
      _GlobalCurrency,
      _FunctionalCurrency,
      _FreeDefinedCurrency1,
      _FreeDefinedCurrency2,
      _FreeDefinedCurrency3,
      _FreeDefinedCurrency4,
      _FreeDefinedCurrency5,
      _FreeDefinedCurrency6,
      _FreeDefinedCurrency7,
      _FreeDefinedCurrency8,
      _BaseUnit,
      _CostSourceUnit,
      _AdditionalQuantity1Unit,
      _AdditionalQuantity2Unit,
      _AdditionalQuantity3Unit,
      _Segment,
      _ProfitCenter,
      _CurrentProfitCenter,
      _CostCenter,
      _CurrentCostCenter,
      _CostAnalysisResource,
      _WBSElement,
      _WBSElementInternalID,
      _WBSElementExternalID,
      _Project,
      _ProjectExternalID,
      _BusinessArea,
      _FunctionalArea,
      _GLAccountInChartOfAccounts,
      _GLAccountInCompanyCode,
      _ChartOfAccounts,
      _AccountingDocumentType,
      _FinancialAccountType,
      _DebitCreditCode,
      _Material,
      _Product,
      _Plant,
      _Ledger,
      _SourceLedger,

      _Customer,
      _CustomerGroup,

      _Supplier,

      _MaterialGroup,
      _ProductGroup,

      _SalesOrder,
      _SalesOrderItem,
      _SalesDocument,
      _SalesDocumentItem,
      _InternalOrder,
      _Order,

      _Employment,
      _FinancialTransactionType,
      _BusinessTransactionType,
      _ReferenceDocumentType,
      _PredecessorReferenceDocType,

      _PartnerCostCenter,
      _PartnerProfitCenter,
      _PartnerBusinessArea,
      _PartnerFunctionalArea,
      _PartnerCompanyCode,
      _PartnerSegment,

      _AccountingDocumentCategory,

      _PostingKey,
      _SubLedgerAccLineItemType,
      _User,

      _EliminationProfitCenter,

      //_ControllingObject,

      _GLAccountType,
      _OffsettingAccountType,
      _OffsettingChartOfAccounts,
      _OffsettingAccount,
      _OffsettingAccountWithBP,
      _AlternativeGLAccount,
      //_SenderGLAccount,
      _CountryChartOfAccounts,

      _PurchasingDocument,
      _PurchasingDocumentItem,

      _SpecialGLCode,
      _TaxCode,

      _HouseBank,

      _ClearingJrnlEntryFiscalYear,
      _ClearingJournalEntry,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_ClearingJournalEntry'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_ClearingJournalEntry'
      _ClearingAccountingDocument,

      _FixedAsset,
      _MasterFixedAsset,
      _GroupMasterFixedAsset,
      _GroupFixedAsset,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_InventorySpclStockValnType'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_InventorySpclStockValnType'
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _InventorySpecialStockValnType,
      _InventorySpclStockValnType,
      _InventorySpecialStockType,
      _InventorySpclStkSalesDocument,
      _InventorySpclStkSalesDocItm,
      _InvtrySpclStockWBSElmntIntID,
      _InventorySpclStockWBSElement,
      _InventorySpecialStockSupplier,
      _InventoryValuationType,
      _ControllingDebitCreditCode,
      _OriginSenderObject,
      _ControllingObjectClass,
      _PartnerControllingObjectClass,
      _OriginCostCenter,
      _OriginProfitCenter,
      _CostCtrActivityType,
      _OriginCostCtrActivityType,
      _OrderCategory,
      //_RelatedNetworkActivity,
      //_PartnerProjectNetworkActivity,

      _BusinessProcess,
      _PartnerCostCtrActivityType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_PartnerOrder_2'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  '_PartnerOrder_2'
      _PartnerOrder,
      _PartnerOrder_2,
      _PartnerOrderCategory,
      _PartnerWBSElement,
      _PartnerProject,
      _PartnerSalesDocument,
      _PartnerSalesDocumentItem,
      _PartnerBusinessProcess,

      _WorkPackage,
      _WorkPackageWorkItem,

      _BillingDocumentType,

      _SalesOrganization,
      _DistributionChannel,
      _Division,

      _SoldMaterial,
      _SoldProduct,

      _Fund,
      _PartnerFund,
      _FundsCenter,

      _MovementCategory,
      _AssetTransactionType,

      _BudgetPeriod,

      _CostOriginGroup,

      _CustomerSupplierCountry,
      _CustomerSupplierIndustry,
      _SalesDistrict,
      _BillToParty,
      _ShipToParty,

      _FinancialManagementArea,
      //_FundedProgram

      _HouseBankAccount,

      _LogicalSystem,

      _OperatingConcern,

      _PartnerCompany,

      _ProjectNetwork,

      _PurReqValuationArea,

      //_Extension  Extensions must be local

      _SemanticTag,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_GLAccountHierarchy'
      _Hierarchy,
      _GLAccountHierarchy,

      _Equipment,
      _FunctionalLocation,
      _MaintenanceActivityType,
      _MaintOrdPlngDegreeCode,
      _PMNotificationPriorityType,
      _PMNotificationPriority,
      _MaintenanceOrderSubOperation,
      _Assembly,
      _SuperiorOrder,
      _ProjectInternalID,
      _ConditionContract,
      _SoldProductGroup,

      _ServiceDocumentType,
      _ServiceDocument,
      _ServiceDocumentItem,
      _ServiceContract,
      _ServiceContractItem,
      _ServiceContractType,

      _WBSElementBasicData,
      _WBSElementBasicDataText,
      _ProjectBasicData,
      _ProjectBasicDataText,
      _PartnerProjectExternalID,
      _PartnerProjctExtrnalIDText,
      _PartnerWBSElementExternalID,
      _PartnerWBSElemntExtrnalIDText,
      _PartnerProjectBasicData,
      _PartnerProjectBasicDataText,
      _PartnerWBSElementBasicData,
      _PartnerWBSElemntBasicDataText,

      _InvtrySpclStockWBSElmntBD,
      _InvtrySpclStockWBSElmntExtID,

      _ProviderContract,
      _ProviderContractItem,
      _TimeSheetOvertimeCat,

      //      _CAProviderContract,
      //      _CAProviderContractItemNumber,

      // Just for Authorization Check!!! DO NOT USE!!! WILL BE DEPRECATED!!!
      GLAccountAuthorizationGroup,
      SupplierBasicAuthorizationGrp,
      CustomerBasicAuthorizationGrp,
      AcctgDocTypeAuthorizationGroup,
      OrderType,
      SalesOrderType,
      AssetClass,

      ///////////////////////////////////////////////////////////////////////
      // Additional requested associations
      ///////////////////////////////////////////////////////////////////////
      _AssetKeyFigure

}
where
  (
        ValidityStartDate <= $session.system_date
    and ValidityEndDate   >= $session.system_date
  )
```
