---
name: I_JOINTVENTUREMASTERFLD
description: "Jointventuremasterfld"
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
# I_JOINTVENTUREMASTERFLD

**Jointventuremasterfld**

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
| `CompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `JointVenture` | ✓ | |  | `cast(vname as jv_name_cds preserving type )` | `CHAR(6)` | Joint Venture |
| `JointVenturePaymentTerms` |  | |  | `payterms` | `CHAR(4)` | Key for Terms of Payment |
| `JointVentureBillingMethod` |  | |  | `bmethod` | `CHAR(4)` | Billing Method |
| `JointVentureType` |  | |  | `vtype` | `CHAR(1)` | Venture Type |
| `JointVentureOperator` |  | |  | `operator` | `CHAR(10)` | Operator for Non-Operated Venture |
| `JointVentureTaxCode` |  | |  | `taxcode` | `CHAR(2)` | Tax on Sales/Purchases Code |
| `JVAVentureClass` |  | |  | `vclass` | `CHAR(2)` | Venture Class |
| `JntVntrInceptionToDateData` |  | |  | `itd` | `CHAR(1)` | Inception to Date |
| `JointVentureCreatedByUser` |  | |  | `cruser` | `CHAR(12)` | User who Created |
| `JntVntrTimeCreated` |  | |  | `cast( crtime as jv_crtime_cds )` | `TIMS(6)` | Time Created |
| `JntVntrDateCreated` |  | |  | `crdate` | `DATS(8)` | Date Created |
| `JointVentureLastChangedByUser` |  | |  | `chuser` | `CHAR(12)` | User who Last Changed |
| `JntVntrTimeLastChanged` |  | |  | `cast( case when chtime is null or chtime = ' ' then '000000' else chtime end as jv_chtime_cds )` | `TIMS(6)` | Time Last Changed |
| `JntVntrDateLastChanged` |  | |  | `cast( case when chdate is null or chdate = ' ' then '00000000' else chdate end as jv_chdate_cds )` | `DATS(8)` | Date Last Changed |
| `JntVntrBillgFormat` |  | |  | `bformat` | `CHAR(4)` | JV Billing Format |
| `JntOpgAgrmt` |  | |  | `joa` | `CHAR(6)` | Joint Operating Agreement |
| `JntVntrBillgCutbackIsBlk` |  | |  | `vactive` | `CHAR(1)` | Block Joint Venture for Cutback and Billing |
| `JntVntrTaxJurisdiction` |  | |  | `txjcd` | `CHAR(15)` | Tax Jurisdiction |
| `JntVntrOutPaymentTerms` |  | |  | `outpayterm` | `CHAR(4)` | Key for Terms of Payment |
| `JntVntrOutTaxCode` |  | |  | `outtaxcode` | `CHAR(2)` | Tax on Sales/Purchases Code |
| `JntVntrOutTaxJurisdiction` |  | |  | `txjcd2` | `CHAR(15)` | Tax Jurisdiction |
| `JntVntrNonBillgFormat` |  | |  | `nbformat` | `CHAR(4)` | Joint Venture Non-operated Billing Form |
| `JntVntrBillgFrqcy` |  | |  | `bfreq` | `NUMC(1)` | JV Billing Frequency |
| `JntVntrDrillingPayRate` |  | |  | `ovrdf` | `DEC(5)` | % Drilling Payroll Burden in U.S. |
| `JntVntrNonDrillingPayRate` |  | |  | `ovrnd` | `DEC(5)` | Non-Drilling % to Apply for U.S. Payroll Burden Clearing |
| `JntVntrParentCoOvhdExpnCostCtr` |  | |  | `pcocostc` | `CHAR(10)` | Cost Centre for posting PCO expense |
| `JntVntrParentCoOvhdProject` |  | |  | `cast ( pcoprojk as ps_s4_pspnr preserving type )` | `NUMC(8)` | WBS Element |
| `JntVntrParentCoOvhdExpnOrder` |  | |  | `pcoordnr` | `CHAR(12)` | Parent Company Overhead Expense Order |
| `JntVntrSubstituteCostCtr` |  | |  | `kostl` | `CHAR(10)` | Substitute Cost Centre |
| `JntVntrFundingGroup` |  | |  | `fundgroup` | `CHAR(6)` | JV Funding group |
| `JntVntrCrcyIsFundingCrcy` |  | |  | `checkfc` | `CHAR(1)` | Check Funding Currencies |
| `JntVntrProperty` |  | |  | `property` | `CHAR(24)` | JV Property ID |
| `Currency` |  | | `_CompanyCode` | `Currency` | `CUKY(5)` | Currency Key |
| `JntVntrBillgThldDebit` |  | |  | `billthres` | `CURR(13)` | Billing threshold (debit) |
| `JntVntrBillgThldCredit` |  | |  | `billthresc` | `CURR(13)` | Billing threshold (credit) |
| `JntVntrBillgThldIsActive` |  | |  | `billthresa` | `CHAR(1)` | Billing threshold active |
| `JntVntrPaymentTermSchema` |  | |  | `pschem` | `CHAR(4)` | Payment term schema |
| `JVAVentureIntrstCalcGrpID` |  | |  | `ic_group` | `CHAR(10)` | JV Interest Calculation Group ID |
| `_CompanyCode` | | ✓ | | | | |
| `_JointVentureDesc` | | ✓ | | | | |
| `_JntOpgAgrmtText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_JointVentureDesc` | `I_JointVentureDesc` | [0..*] |
| `_JntOpgAgrmtText` | `I_JntOpgAgrmtText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVMSTFLD'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel:{
   representativeKey: 'JointVenture',
   usageType: {
       serviceQuality: #A,
       sizeCategory: #M,
       dataClass: #MASTER
   }          }
@EndUserText.label: 'Joint Venture Master Data Fields'
@Metadata.ignorePropagatedAnnotations:true
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@Analytics: {
    dataCategory: #DIMENSION
}
@Metadata.allowExtensions: true
@Analytics.internalName:#LOCAL
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #UI_PROVIDER_PROJECTION_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@Analytics.settings.valueHelp.supressInitialValue: true

define view I_JointVentureMasterFld
  as select from t8jv
  association [0..1] to I_CompanyCode      as _CompanyCode      on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..*] to I_JointVentureDesc as _JointVentureDesc on  $projection.CompanyCode  = _JointVentureDesc.CompanyCode
                                                                and $projection.JointVenture = _JointVentureDesc.JointVenture
  association [0..*] to I_JntOpgAgrmtText  as _JntOpgAgrmtText  on  $projection.CompanyCode = _JntOpgAgrmtText.CompanyCode
                                                                and $projection.JntOpgAgrmt = _JntOpgAgrmtText.JntOpgAgrmt                                                                
{
      @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JointVentureCompanyCodeVH',
                           element: 'CompanyCode' }
              }]
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs                                            as CompanyCode,
       @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JntVntrValueHelp',
                           element: 'JointVenture' }
              }]  
      @ObjectModel.text.association: '_JointVentureDesc'
  key cast(vname as jv_name_cds preserving type )      as JointVenture,
      payterms                                         as JointVenturePaymentTerms,
      bmethod                                          as JointVentureBillingMethod, 
      vtype                                            as JointVentureType,
      operator                                         as JointVentureOperator,
      taxcode                                          as JointVentureTaxCode,
      vclass                                           as JVAVentureClass,
      itd                                              as JntVntrInceptionToDateData,
      cruser                                           as JointVentureCreatedByUser,
      cast( crtime as jv_crtime_cds )                  as JntVntrTimeCreated,
      crdate                                           as JntVntrDateCreated,
      chuser                                           as JointVentureLastChangedByUser,

      cast( case when chtime is null or chtime = ' ' then '000000' else chtime
              end as jv_chtime_cds )                   as JntVntrTimeLastChanged,

      cast( case when chdate is null or chdate = ' ' then '00000000' else chdate
              end as jv_chdate_cds )                   as JntVntrDateLastChanged,

      bformat                                          as JntVntrBillgFormat,
       @Consumption.valueHelpDefinition: [
             { entity:  { name:    'I_JntOpgAgrmtVH',
                          element: 'JntOpgAgrmt' }
              }] 
        @ObjectModel.text.association: '_JntOpgAgrmtText'       
      joa                                              as JntOpgAgrmt,
      vactive                                          as JntVntrBillgCutbackIsBlk,
      txjcd                                            as JntVntrTaxJurisdiction,
      outpayterm                                       as JntVntrOutPaymentTerms,
      outtaxcode                                       as JntVntrOutTaxCode,
      txjcd2                                           as JntVntrOutTaxJurisdiction,
      nbformat                                         as JntVntrNonBillgFormat,
      bfreq                                            as JntVntrBillgFrqcy,
      ovrdf                                            as JntVntrDrillingPayRate,
      ovrnd                                            as JntVntrNonDrillingPayRate,
      pcocostc                                         as JntVntrParentCoOvhdExpnCostCtr,
      cast ( pcoprojk as ps_s4_pspnr preserving type ) as JntVntrParentCoOvhdProject,
      pcoordnr                                         as JntVntrParentCoOvhdExpnOrder,
      kostl                                            as JntVntrSubstituteCostCtr,
      fundgroup                                        as JntVntrFundingGroup,
      checkfc                                          as JntVntrCrcyIsFundingCrcy,
      property                                         as JntVntrProperty,

      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_Currency'
      _CompanyCode.Currency,

      @Semantics: { amount : { currencyCode: 'Currency'} }
      billthres                                        as JntVntrBillgThldDebit,
      @Semantics: { amount : { currencyCode: 'Currency'} }
      billthresc                                       as JntVntrBillgThldCredit,
      billthresa                                       as JntVntrBillgThldIsActive,
      pschem                                           as JntVntrPaymentTermSchema,
      ic_group                                         as JVAVentureIntrstCalcGrpID,   

      _CompanyCode,
      _CompanyCode._Currency,
      _JointVentureDesc,
      _JntOpgAgrmtText
}
```
