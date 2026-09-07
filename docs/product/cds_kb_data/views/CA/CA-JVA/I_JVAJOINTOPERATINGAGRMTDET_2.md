---
name: I_JVAJOINTOPERATINGAGRMTDET_2
description: "Jvajointoperatingagrmtdet 2"
app_component: CA-JVA
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
  - CA
  - CA-JVA
  - interface-view
  - component:CA-JVA
  - lob:Cross-Application Components
---
# I_JVAJOINTOPERATINGAGRMTDET_2

**Jvajointoperatingagrmtdet 2**

| Property | Value |
|---|---|
| App Component | `CA-JVA` |
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
| `CompanyCode` | ✓ | | `_JointVentureMasterFld` | `CompanyCode` | `CHAR(4)` | Company Code |
| `JntOpgAgrmt` | ✓ | | `_JntOpgAgrmt` | `JntOpgAgrmt` | `CHAR(6)` | Joint Operating Agreement |
| `JointVenture` | ✓ | | `_JointVentureMasterFld` | `JointVenture` | `CHAR(6)` | Joint Venture |
| `JointVentureEquityType` | ✓ | | `_JntVntrValdInvmtGrp` | `JointVentureEquityType` | `CHAR(3)` | Equity Type |
| `JointVentureEquityGroup` | ✓ | | `_JntVntrValdInvmtGrp` | `JointVentureEquityGroup` | `CHAR(3)` | Equity Group |
| `JointVenturePartner` | ✓ | | `_JntVntrPartOwnrEquityShr` | `JointVenturePartner` | `CHAR(10)` | JV Partner |
| `JntVntrIntcoCode` | ✓ | | `_JointVentureIntcoVenture` | `JntVntrIntcoCode` | `CHAR(4)` | Intercompany code |
| `JntVntrContractNmbr` |  | | `_JntOpgAgrmt` | `JntVntrContractNmbr` | `CHAR(24)` | JV Contract Number |
| `JntVntrPayrollClearingSet` |  | | `_JntOpgAgrmt` | `JntVntrPayrollClearingSet` | `CHAR(24)` | Set of Accounts to Which Payroll Burden Clearing Applies |
| `JntVntrConstructionExclsnSet` |  | | `_JntOpgAgrmt` | `JntVntrConstructionExclsnSet` | `CHAR(24)` | Set of Accounts to Exclude from Construction Overhead Calc. |
| `JntVntrCatastropheExclsnSet` |  | | `_JntOpgAgrmt` | `JntVntrCatastropheExclsnSet` | `CHAR(24)` | Set of Accounts to Exclude from Catastrophe Overhead Calc. |
| `JntVntrConstructionOvhdRule` |  | | `_JntOpgAgrmt` | `JntVntrConstructionOvhdRule` | `CHAR(6)` | Construction Overhead Rule |
| `JntVntrCatastropheOvhdRule` |  | | `_JntOpgAgrmt` | `JntVntrCatastropheOvhdRule` | `CHAR(6)` | Catastrophe Overhead Rule |
| `JVAOvhdPercentProdg` |  | | `_JntOpgAgrmt` | `JVAOvhdPercentProdg` | `DEC(5)` | Percent 1 (% Producing U.S., % Regular Canada)  (JVA) |
| `JVAExclsnAcctSetPercentProdg` |  | | `_JntOpgAgrmt` | `JVAExclsnAcctSetPercentProdg` | `CHAR(24)` | Exclusion Set of Accounts - Percent 1 (JVA) |
| `JVAOvhdPercentDev` |  | | `_JntOpgAgrmt` | `JVAOvhdPercentDev` | `DEC(5)` | Percent 2 (% Development U.S., % Special Canada)  (JVA) |
| `JVAExclsnAcctSetPercentDev` |  | | `_JntOpgAgrmt` | `JVAExclsnAcctSetPercentDev` | `CHAR(24)` | Exclusion Set of Accounts - Percent 2 (JVA) |
| `JntVntrExplorationOvhdRule` |  | | `_JntOpgAgrmt` | `JntVntrExplorationOvhdRule` | `CHAR(6)` | Exploration Overhead Rule |
| `JntVntrDrillingOvhdRule` |  | | `_JntOpgAgrmt` | `JntVntrDrillingOvhdRule` | `CHAR(6)` | Drilling Overhead Rule |
| `JntVntrCapitalExclsnSet` |  | | `_JntOpgAgrmt` | `JntVntrCapitalExclsnSet` | `CHAR(24)` | Set of Accounts to Exclude from Capital Overhead Calc. |
| `JntVntrOvhdOffsetCostCtr` |  | | `_JntOpgAgrmt` | `JntVntrOvhdOffsetCostCtr` | `CHAR(10)` | Overhead Offset Cost Centre - JV |
| `JntOpgAgrmtProdgWellThld` |  | | `_JntOpgAgrmt` | `JntOpgAgrmtProdgWellThld` | `CHAR(1)` | Perform Producing Well Threshold Calculation at JOA Level |
| `JntVntrOvhdRecurringDoc` |  | | `_JntOpgAgrmt` | `JntVntrOvhdRecurringDoc` | `CHAR(10)` | Recurring Document Number - JV overheads |
| `JntVntrOvhdFlatRateAmt` |  | | `_JntOpgAgrmt` | `JntVntrOvhdFlatRateAmt` | `CURR(13)` | Flat Rate - JV overheads |
| `JntVntrExpnIsEscalated` |  | | `_JntOpgAgrmt` | `JntVntrExpnIsEscalated` | `CHAR(1)` | Escalatable |
| `JntOpgAgrmtClass` |  | | `_JntOpgAgrmt` | `JntOpgAgrmtClass` | `CHAR(2)` | Joint Operating Agreement Class |
| `JntOpgAgrmtDrillingPayRate` |  | | `_JntOpgAgrmt` | `JntOpgAgrmtDrillingPayRate` | `DEC(5)` | % Drilling Payroll Burden in U.S. |
| `JntOpgAgrmtNonDrillingPayRate` |  | | `_JntOpgAgrmt` | `JntOpgAgrmtNonDrillingPayRate` | `DEC(5)` | Non-Drilling % to Apply for U.S. Payroll Burden Clearing |
| `JointVenturePaymentTerms` |  | | `_JointVentureMasterFld` | `JointVenturePaymentTerms` | `CHAR(4)` | Key for Terms of Payment |
| `JointVentureBillingMethod` |  | | `_JointVentureMasterFld` | `JointVentureBillingMethod` | `CHAR(4)` | Billing Method |
| `JointVentureType` |  | | `_JointVentureMasterFld` | `JointVentureType` | `CHAR(1)` | Venture Type |
| `JointVentureOperator` |  | | `_JointVentureMasterFld` | `JointVentureOperator` | `CHAR(10)` | Operator for Non-Operated Venture |
| `JointVentureTaxCode` |  | | `_JointVentureMasterFld` | `JointVentureTaxCode` | `CHAR(2)` | Tax on Sales/Purchases Code |
| `JVAVentureClass` |  | | `_JointVentureMasterFld` | `JVAVentureClass` | `CHAR(2)` | Venture Class |
| `JntVntrInceptionToDateData` |  | | `_JointVentureMasterFld` | `JntVntrInceptionToDateData` | `CHAR(1)` | Inception to Date |
| `JntVntrBillgCutbackIsBlk` |  | | `_JointVentureMasterFld` | `JntVntrBillgCutbackIsBlk` | `CHAR(1)` | Block Joint Venture for Cutback and Billing |
| `JntVntrTaxJurisdiction` |  | | `_JointVentureMasterFld` | `JntVntrTaxJurisdiction` | `CHAR(15)` | Tax Jurisdiction |
| `JntVntrOutPaymentTerms` |  | | `_JointVentureMasterFld` | `JntVntrOutPaymentTerms` | `CHAR(4)` | Key for Terms of Payment |
| `JntVntrOutTaxCode` |  | | `_JointVentureMasterFld` | `JntVntrOutTaxCode` | `CHAR(2)` | Tax on Sales/Purchases Code |
| `JntVntrOutTaxJurisdiction` |  | | `_JointVentureMasterFld` | `JntVntrOutTaxJurisdiction` | `CHAR(15)` | Tax Jurisdiction |
| `JntVntrNonBillgFormat` |  | | `_JointVentureMasterFld` | `JntVntrNonBillgFormat` | `CHAR(4)` | Joint Venture Non-operated Billing Form |
| `JntVntrBillgFrqcy` |  | | `_JointVentureMasterFld` | `JntVntrBillgFrqcy` | `NUMC(1)` | JV Billing Frequency |
| `JntVntrDrillingPayRate` |  | | `_JointVentureMasterFld` | `JntVntrDrillingPayRate` | `DEC(5)` | % Drilling Payroll Burden in U.S. |
| `JntVntrNonDrillingPayRate` |  | | `_JointVentureMasterFld` | `JntVntrNonDrillingPayRate` | `DEC(5)` | Non-Drilling % to Apply for U.S. Payroll Burden Clearing |
| `JntVntrParentCoOvhdExpnCostCtr` |  | | `_JointVentureMasterFld` | `JntVntrParentCoOvhdExpnCostCtr` | `CHAR(10)` | Cost Centre for posting PCO expense |
| `JntVntrParentCoOvhdProject` |  | | `_JointVentureMasterFld` | `JntVntrParentCoOvhdProject` | `NUMC(8)` | WBS Element |
| `JntVntrParentCoOvhdExpnOrder` |  | | `_JointVentureMasterFld` | `JntVntrParentCoOvhdExpnOrder` | `CHAR(12)` | Parent Company Overhead Expense Order |
| `JntVntrSubstituteCostCtr` |  | | `_JointVentureMasterFld` | `JntVntrSubstituteCostCtr` | `CHAR(10)` | Substitute Cost Centre |
| `JntVntrFundingGroup` |  | | `_JointVentureMasterFld` | `JntVntrFundingGroup` | `CHAR(6)` | JV Funding group |
| `JntVntrCrcyIsFundingCrcy` |  | | `_JointVentureMasterFld` | `JntVntrCrcyIsFundingCrcy` | `CHAR(1)` | Check Funding Currencies |
| `JntVntrProperty` |  | | `_JointVentureMasterFld` | `JntVntrProperty` | `CHAR(24)` | JV Property ID |
| `JntVntrBillgThldDebit` |  | | `_JointVentureMasterFld` | `JntVntrBillgThldDebit` | `CURR(13)` | Billing threshold (debit) |
| `JntVntrBillgThldCredit` |  | | `_JointVentureMasterFld` | `JntVntrBillgThldCredit` | `CURR(13)` | Billing threshold (credit) |
| `JntVntrBillgThldIsActive` |  | | `_JointVentureMasterFld` | `JntVntrBillgThldIsActive` | `CHAR(1)` | Billing threshold active |
| `JntVntrPaymentTermSchema` |  | | `_JointVentureMasterFld` | `JntVntrPaymentTermSchema` | `CHAR(4)` | Payment term schema |
| `JVAVentureIntrstCalcGrpID` |  | | `_JointVentureMasterFld` | `JVAVentureIntrstCalcGrpID` | `CHAR(10)` | JV Interest Calculation Group ID |
| `JntVntrEquityFundingDateValue` |  | | `_JntVntrValdInvmtGrp` | `JntVntrEquityFundingDateValue` | `NUMC(8)` | Valid from date (inverted: 99999999 - YYYYMMDD) |
| `JVAEquityGroupFromDate` |  | |  | `cast ( cast ( 99999999 - cast( _JntVntrValdInvmtGrp.JntVntrEquityFundingDateValue as abap.int4 ) as abap.char ( 12 ) ) as abap.dats )` | `DATS(8)` |  |
| `JointVentureEquityGroupActive` |  | | `_JntVntrValdInvmtGrp` | `JointVentureEquityGroupActive` | `CHAR(1)` | Equity Group Active Status |
| `JointVentureDefBillCurrency` |  | | `_JntVntrValdInvmtGrp` | `JointVentureDefBillCurrency` | `CHAR(2)` | JV Default Billing Currency |
| `JVAFundingGrpInEquityGrp` |  | | `_JntVntrValdInvmtGrp` | `JVAFundingGrpInEquityGrp` | `CHAR(6)` | JV Funding group |
| `JVAEquityGroupIntrstCalcGrpID` |  | | `_JntVntrValdInvmtGrp` | `JVAEquityGroupIntrstCalcGrpID` | `CHAR(10)` | JV Interest Calculation Group ID |
| `JointVentureEquityTypeName` |  | | `_JntVntrValdInvmtGrp` | `JointVentureEquityTypeName` | `CHAR(35)` | Investment Type Description |
| `JointVentureIntcoVenture` |  | | `_JointVentureIntcoVenture` | `JointVentureIntcoVenture` | `CHAR(6)` | Joint Venture Intercompany Venture |
| `JointVentureIntcoEquityGrp` |  | | `_JointVentureIntcoVenture` | `JointVentureIntcoEquityGrp` | `CHAR(3)` | JV Intercompany Equity Group |
| `JntVntrEquityShare` |  | | `_JntVntrPartOwnrEquityShr` | `JntVntrEquityShare` | `DEC(9)` | Equity Share |
| `JntVntrOwnrIsSuspended` |  | | `_JntVntrPartOwnrEquityShr` | `JntVntrOwnrIsSuspended` | `CHAR(1)` | Owner Suspended Flag |
| `JntVntrOwnrSuspendedPerd` |  | | `_JntVntrPartOwnrEquityShr` | `JntVntrOwnrSuspendedPerd` | `NUMC(3)` | JV Owner Suspended |
| `JntVntrOwnrSuspendedYr` |  | | `_JntVntrPartOwnrEquityShr` | `JntVntrOwnrSuspendedYr` | `NUMC(4)` | JV Owner Suspended Year |
| `JntVntrOwnrIsNotSuspended` |  | | `_JntVntrPartOwnrEquityShr` | `JntVntrOwnrIsNotSuspended` | `CHAR(1)` | JV Owner Unsuspended |
| `JntVntrOwnrNotSuspendedPerd` |  | | `_JntVntrPartOwnrEquityShr` | `JntVntrOwnrNotSuspendedPerd` | `NUMC(3)` | JV Group Unsuspended Period |
| `JntVntrOwnrNotSuspendedYr` |  | | `_JntVntrPartOwnrEquityShr` | `JntVntrOwnrNotSuspendedYr` | `NUMC(4)` | JV Group Unsuspended Year |
| `JntVntrInterestType` |  | | `_JntVntrPartOwnrEquityShr` | `JntVntrInterestType` | `CHAR(1)` | Interest Type |
| `JntVntrOpgRcvryPercent` |  | | `_JntVntrPartOwnrEquityShr` | `JntVntrOpgRcvryPercent` | `DEC(9)` | JV Operating Recovery Percentage |
| `JntVntrDrillingRcvryPercent` |  | | `_JntVntrPartOwnrEquityShr` | `JntVntrDrillingRcvryPercent` | `DEC(9)` | JV Drilling Recovery Percentage |
| `JntVntrPayIsStppd` |  | | `_JntVntrPartOwnrEquityShr` | `JntVntrPayIsStppd` | `CHAR(1)` | JV Stop/Pay |
| `JntVntrPartWrkgIntrstPerd` |  | | `_JntVntrPartOwnrEquityShr` | `JntVntrPartWrkgIntrstPerd` | `NUMC(3)` | Period when CI partner becomes Working interest |
| `JntVntrPartWrkgIntrstYrValue` |  | | `_JntVntrPartOwnrEquityShr` | `JntVntrPartWrkgIntrstYrValue` | `NUMC(4)` | Year when CI partner becomes Working interest |
| `JntVntrCarriedIntrstGrp` |  | | `_JntVntrPartOwnrEquityShr` | `JntVntrCarriedIntrstGrp` | `CHAR(4)` | JV Carried Interest Group |
| `JntVntrNetProfitIntrstGrp` |  | | `_JntVntrPartOwnrEquityShr` | `JntVntrNetProfitIntrstGrp` | `CHAR(4)` | JV Net Profit Interest Group |
| `JntVntrOperatorAddressArea` |  | | `_JntVntrPartOwnrEquityShr` | `JntVntrOperatorAddressArea` | `CHAR(4)` | Operator address by area |
| `Currency` |  | | `_CompanyCode` | `Currency` | `CUKY(5)` | Currency Key |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_JntOpgAgrmt` | `I_JntOpgAgrmt` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVAJOADETAILS_2'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'JVA and cost object MD information'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: { dataCategory: #CUBE,
              internalName: #LOCAL }
@ObjectModel: { usageType: { sizeCategory: #XL,
                             dataClass:  #MASTER,
                             serviceQuality: #C },
                supportedCapabilities: [#ANALYTICAL_PROVIDER,#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #UI_PROVIDER_PROJECTION_SOURCE ],
                modelingPattern: #ANALYTICAL_CUBE }
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #COMPOSITE }
// This view is successor view of deprecated view I_JVAJointOperatingAgrmtDetail
define view I_JVAJointOperatingAgrmtDet_2
  as select from            I_JointVentureMasterFld    as _JointVentureMasterFld
  
left outer to many join  I_JntVntrValdInvmtGrp      as _JntVntrValdInvmtGrp      on  _JointVentureMasterFld.CompanyCode  = _JntVntrValdInvmtGrp.CompanyCode
                                                                                   and _JointVentureMasterFld.JointVenture = _JntVntrValdInvmtGrp.JointVenture
left outer to many join  I_JntVntrPartOwnrEquityShr as _JntVntrPartOwnrEquityShr on  _JointVentureMasterFld.CompanyCode           = _JntVntrPartOwnrEquityShr.CompanyCode
                                                                                   and _JointVentureMasterFld.JointVenture          = _JntVntrPartOwnrEquityShr.JointVenture
                                                                                   and _JntVntrValdInvmtGrp.JointVentureEquityGroup = _JntVntrPartOwnrEquityShr.JntOpgAgrmtEquityGrp
left outer to many join  I_JointVentureIntcoVenture as _JointVentureIntcoVenture on  _JntVntrValdInvmtGrp.CompanyCode             = _JointVentureIntcoVenture.CompanyCode
                                                                                   and _JntVntrValdInvmtGrp.JointVenture            = _JointVentureIntcoVenture.JointVenture
                                                                                   and _JntVntrValdInvmtGrp.JointVentureEquityGroup = _JointVentureIntcoVenture.JointVentureEquityGroup

  association [1..1] to I_CompanyCode as _CompanyCode on  _JointVentureMasterFld.CompanyCode = _CompanyCode.CompanyCode

  association [1..1] to I_JntOpgAgrmt as _JntOpgAgrmt on  _JointVentureMasterFld.CompanyCode = _JntOpgAgrmt.CompanyCode
                                                      and _JointVentureMasterFld.JntOpgAgrmt = _JntOpgAgrmt.JntOpgAgrmt
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Consumption.valueHelpDefinition: [
             { entity:  { name:    'I_JointVentureCompanyCodeVH',
                          element: 'CompanyCode' }
             }]
  key _JointVentureMasterFld.CompanyCode,
      @ObjectModel.text.element: [ 'JntOpgAgrmtText' ]
      @Consumption.valueHelpDefinition: [
          { entity:  { name:    'I_JNTOPGAGRMTVH',
                       element: 'JntOpgAgrmt' }
          }]
  key _JntOpgAgrmt.JntOpgAgrmt,
      @ObjectModel.text.element: [ 'JointVentureName' ]
      @Consumption.valueHelpDefinition: [
                        { entity:  { name:    'I_JntVntrValueHelp',
                                     element: 'JointVenture' }
                        }]
  key _JointVentureMasterFld.JointVenture,
       @ObjectModel.text.element: [ 'JointVentureEquityTypeName' ]
       @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_JntVntrEquityTypeVH',
                           element: 'JointVentureEquityType' }
              }]
  key _JntVntrValdInvmtGrp.JointVentureEquityType,
      @ObjectModel.text.element: [ 'JntOpgAgrmtEquityGrpText' ]
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_JntVntrEquityGroupValueHelp',
                          element: 'JntOpgAgrmtEquityGrp' }
              }]
  key _JntVntrValdInvmtGrp.JointVentureEquityGroup,
     @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_JointVenturePartnerValueHelp',
                           element: 'JointVenturePartner' }
              }]
  key _JntVntrPartOwnrEquityShr.JointVenturePartner,
  key _JointVentureIntcoVenture.JntVntrIntcoCode,

      _JntOpgAgrmt._JntOpgAgrmtText[1:Language = $session.system_language ].JntOpgAgrmtText,

      _JntOpgAgrmt.JntVntrContractNmbr,

      _JntOpgAgrmt.JntVntrPayrollClearingSet,

      _JntOpgAgrmt.JntVntrConstructionExclsnSet,

      _JntOpgAgrmt.JntVntrCatastropheExclsnSet,

      _JntOpgAgrmt.JntVntrConstructionOvhdRule,

      _JntOpgAgrmt.JntVntrCatastropheOvhdRule,

      _JntOpgAgrmt.JVAOvhdPercentProdg,

      _JntOpgAgrmt.JVAExclsnAcctSetPercentProdg,

      _JntOpgAgrmt.JVAOvhdPercentDev,

      _JntOpgAgrmt.JVAExclsnAcctSetPercentDev,

      _JntOpgAgrmt.JntVntrExplorationOvhdRule,

      _JntOpgAgrmt.JntVntrDrillingOvhdRule,

      _JntOpgAgrmt.JntVntrCapitalExclsnSet,

      _JntOpgAgrmt.JntVntrOvhdOffsetCostCtr,

      _JntOpgAgrmt.JntOpgAgrmtProdgWellThld,

      _JntOpgAgrmt.JntVntrOvhdRecurringDoc,

      @Semantics: { amount : { currencyCode: 'Currency'} }
      _JntOpgAgrmt.JntVntrOvhdFlatRateAmt,

      _JntOpgAgrmt.JntVntrExpnIsEscalated,

      _JntOpgAgrmt.JntOpgAgrmtClass,

      _JntOpgAgrmt.JntOpgAgrmtDrillingPayRate,

      _JntOpgAgrmt.JntOpgAgrmtNonDrillingPayRate,

      _JointVentureMasterFld._JointVentureDesc[1:Language = $session.system_language ].JointVentureName,

      @EndUserText:{ label: 'Payment Terms', quickInfo: 'Payment Terms' }
      _JointVentureMasterFld.JointVenturePaymentTerms,

      _JointVentureMasterFld.JointVentureBillingMethod,

      _JointVentureMasterFld.JointVentureType,

      _JointVentureMasterFld.JointVentureOperator,

      _JointVentureMasterFld.JointVentureTaxCode,

      _JointVentureMasterFld.JVAVentureClass,

      _JointVentureMasterFld.JntVntrInceptionToDateData,

      _JointVentureMasterFld.JntVntrBillgCutbackIsBlk,

      _JointVentureMasterFld.JntVntrTaxJurisdiction,

      _JointVentureMasterFld.JntVntrOutPaymentTerms,

      _JointVentureMasterFld.JntVntrOutTaxCode,

      _JointVentureMasterFld.JntVntrOutTaxJurisdiction,

      _JointVentureMasterFld.JntVntrNonBillgFormat,

      _JointVentureMasterFld.JntVntrBillgFrqcy,

      _JointVentureMasterFld.JntVntrDrillingPayRate,

      _JointVentureMasterFld.JntVntrNonDrillingPayRate,

      _JointVentureMasterFld.JntVntrParentCoOvhdExpnCostCtr,

      _JointVentureMasterFld.JntVntrParentCoOvhdProject,

      _JointVentureMasterFld.JntVntrParentCoOvhdExpnOrder,

      _JointVentureMasterFld.JntVntrSubstituteCostCtr,

      _JointVentureMasterFld.JntVntrFundingGroup,

      _JointVentureMasterFld.JntVntrCrcyIsFundingCrcy,

      _JointVentureMasterFld.JntVntrProperty,

      @Semantics: { amount : { currencyCode: 'Currency'} }
      _JointVentureMasterFld.JntVntrBillgThldDebit,

      @Semantics: { amount : { currencyCode: 'Currency'} }
      _JointVentureMasterFld.JntVntrBillgThldCredit,

      _JointVentureMasterFld.JntVntrBillgThldIsActive,

      _JointVentureMasterFld.JntVntrPaymentTermSchema,

      _JointVentureMasterFld.JVAVentureIntrstCalcGrpID,

      _JntVntrValdInvmtGrp.JntVntrEquityFundingDateValue,

      @EndUserText.label : 'valid-from date'
      cast ( cast ( 99999999 - cast( _JntVntrValdInvmtGrp.JntVntrEquityFundingDateValue
                                 as abap.int4 )
               as abap.char ( 12 ) )
        as abap.dats ) as JVAEquityGroupFromDate,

      _JntVntrValdInvmtGrp.JointVentureEquityGroupActive,

      _JntVntrValdInvmtGrp.JointVentureDefBillCurrency,

      _JntVntrValdInvmtGrp.JVAFundingGrpInEquityGrp,

      _JntVntrValdInvmtGrp.JVAEquityGroupIntrstCalcGrpID,

      @UI.hidden: true
      _JntVntrValdInvmtGrp.JointVentureEquityTypeName,

      _JointVentureIntcoVenture.JointVentureIntcoVenture,

      _JointVentureIntcoVenture.JointVentureIntcoEquityGrp,

      _JntVntrPartOwnrEquityShr.JntVntrEquityShare,

      _JntVntrPartOwnrEquityShr.JntVntrOwnrIsSuspended,

      _JntVntrPartOwnrEquityShr.JntVntrOwnrSuspendedPerd,

      _JntVntrPartOwnrEquityShr.JntVntrOwnrSuspendedYr,

      _JntVntrPartOwnrEquityShr.JntVntrOwnrIsNotSuspended,

      _JntVntrPartOwnrEquityShr.JntVntrOwnrNotSuspendedPerd,

      _JntVntrPartOwnrEquityShr.JntVntrOwnrNotSuspendedYr,

      _JntVntrPartOwnrEquityShr.JntVntrInterestType,

      _JntVntrPartOwnrEquityShr.JntVntrOpgRcvryPercent,

      _JntVntrPartOwnrEquityShr.JntVntrDrillingRcvryPercent,

      _JntVntrPartOwnrEquityShr.JntVntrPayIsStppd,

      _JntVntrPartOwnrEquityShr.JntVntrPartWrkgIntrstPerd,

      _JntVntrPartOwnrEquityShr.JntVntrPartWrkgIntrstYrValue,

      _JntVntrPartOwnrEquityShr.JntVntrCarriedIntrstGrp,

      _JntVntrPartOwnrEquityShr.JntVntrNetProfitIntrstGrp,

      _JntVntrPartOwnrEquityShr.JntVntrOperatorAddressArea,

      @UI.hidden: true
      _JntVntrPartOwnrEquityShr._JntVntrEquityGrp._JntVntrEquityGrpText[1:Language = $session.system_language ].JntOpgAgrmtEquityGrpText,

      /*Associations*/
      _CompanyCode,
      _CompanyCode.Currency

}
```
