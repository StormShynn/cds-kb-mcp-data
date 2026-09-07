---
name: I_JOINTVENTUREDETAILS
description: "Jointventuredetails"
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
# I_JOINTVENTUREDETAILS

**Jointventuredetails**

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
| `CompanyCode` | ✓ | |  | `cast( jv.bukrs as fis_bukrs preserving type )` | `CHAR(4)` | Company Code |
| `JointVenture` | ✓ | |  | `vname` | `CHAR(6)` | Joint Venture |
| `JntOpgAgrmtEquityGrp` | ✓ | |  | `egrup` | `CHAR(3)` | Equity Group |
| `JointVenturePartner` | ✓ | |  | `partn` | `CHAR(10)` | JV Partner |
| `JointVentureType` |  | |  | `vtype` | `CHAR(1)` | Venture Type |
| `Operator` |  | |  | `operator` | `CHAR(10)` | Operator for Non-Operated Venture |
| `TaxCode` |  | |  | `taxcode` | `CHAR(2)` | Tax on Sales/Purchases Code |
| `JointVentureClass` |  | |  | `vclass` | `CHAR(2)` | Venture Class |
| `JntOpgAgrmt` |  | |  | `joa` | `CHAR(6)` | Joint Operating Agreement |
| `JntVntrFundingGroup` |  | |  | `fundgroup` | `CHAR(6)` | JV Funding group |
| `PaymentTerms` |  | |  | `payterms` | `CHAR(4)` | Key for Terms of Payment |
| `JointVentureBillingType` |  | |  | `bmethod` | `CHAR(4)` | Billing Method |
| `JntVntrInceptionToDateBillg` |  | |  | `itd` | `CHAR(1)` | Inception to Date |
| `CreatedByUser` |  | |  | `cruser` | `CHAR(12)` | User who Created |
| `JntVntrTimeCreated` |  | |  | `crtime` | `CHAR(8)` | Time Created |
| `JntVntrDateCreated` |  | |  | `crdate` | `DATS(8)` | Date Created |
| `LastChangedByUser` |  | |  | `chuser` | `CHAR(12)` | User who Last Changed |
| `JntVntrTimeLastChanged` |  | |  | `chtime` | `CHAR(8)` | Time Last Changed |
| `JntVntrDateLastChanged` |  | |  | `chdate` | `DATS(8)` | Date Last Changed |
| `JntVntrBillgFormat` |  | |  | `bformat` | `CHAR(4)` | JV Billing Format |
| `JntVntrBillgCutbackIsBlk` |  | |  | `vactive` | `CHAR(1)` | Block Joint Venture for Cutback and Billing |
| `TaxJurisdiction` |  | |  | `txjcd` | `CHAR(15)` | Tax Jurisdiction |
| `JntVntrOutPaymentTerms` |  | |  | `outpayterm` | `CHAR(4)` | Key for Terms of Payment |
| `JntVntrOutTaxCode` |  | |  | `outtaxcode` | `CHAR(2)` | Tax on Sales/Purchases Code |
| `JntVntrTaxJurisdiction` |  | |  | `txjcd2` | `CHAR(15)` | Tax Jurisdiction |
| `JntVntrNonBillgFormat` |  | |  | `nbformat` | `CHAR(4)` | Joint Venture Non-operated Billing Form |
| `JntVntrBillgFrqcy` |  | |  | `bfreq` | `NUMC(1)` | JV Billing Frequency |
| `JntVntrDrillingPayRate` |  | |  | `ovrdf` | `DEC(5)` | % Drilling Payroll Burden in U.S. |
| `JntVntrNonDrillingPayRate` |  | |  | `ovrnd` | `DEC(5)` | Non-Drilling % to Apply for U.S. Payroll Burden Clearing |
| `JntVntrParentCoOvhdExpnCostCtr` |  | |  | `pcocostc` | `CHAR(10)` | Cost Centre for posting PCO expense |
| `JntVntrParentCoOvhdProject` |  | |  | `pcoprojk` | `NUMC(8)` | Parent Company Overhead Expense WBS Element |
| `JntVntrParentCoOvhdExpnOrder` |  | |  | `pcoordnr` | `CHAR(12)` | Parent Company Overhead Expense Order |
| `JntVntrSubstituteCostCtr` |  | |  | `kostl` | `CHAR(10)` | Substitute Cost Centre |
| `JntVntrCrcyIsFundingCrcy` |  | |  | `checkfc` | `CHAR(1)` | Check Funding Currencies |
| `JntVntrProperty` |  | |  | `property` | `CHAR(24)` | JV Property ID |
| `Currency` |  | | `_CompanyCode` | `Currency` | `CUKY(5)` | Currency Key |
| `JntVntrBillgThldDebit` |  | |  | `billthres` | `CURR(13)` | Billing threshold (debit) |
| `JntVntrBillgThldCredit` |  | |  | `billthresc` | `CURR(13)` | Billing threshold (credit) |
| `JntVntrBillgThldIsActive` |  | |  | `billthresa` | `CHAR(1)` | Billing threshold active |
| `JntVntrPaymentTermSchema` |  | |  | `pschem` | `CHAR(4)` | Payment term schema |
| `_CompanyCode` | | ✓ | | | | |
| `_JntOpgAgrmt` | | ✓ | | | | |
| `_JntOpgAgrmtText` | | ✓ | | | | |
| `_JntVntrEquityGrp` | | ✓ | | | | |
| `_JntVntrEquityGrpText` | | ✓ | | | | |
| `_JntVntrPartOwnrEquityShr` | | ✓ | | | | |
| `_JointVentureDesc` | | ✓ | | | | |
| `_JointVentureMasterFld` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_JntOpgAgrmt` | `I_JntOpgAgrmt` | [1..1] |
| `_JntOpgAgrmtText` | `I_JntOpgAgrmtText` | [1..1] |
| `_JntVntrEquityGrp` | `I_JntVntrEquityGrp` | [1..1] |
| `_JntVntrEquityGrpText` | `I_JntVntrEquityGrpText` | [1..1] |
| `_JntVntrPartOwnrEquityShr` | `I_JntVntrPartOwnrEquityShr` | [1..1] |
| `_JointVentureDesc` | `I_JointVentureDesc` | [0..*] |
| `_JointVentureMasterFld` | `I_JointVentureMasterFld` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJNTVNTR'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Master Data for Joint Venture'
//@Analytics.dataCategory: #FACT
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'JointVenture'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey:true
@ObjectModel:{
  usageType.serviceQuality: #C,
  usageType.sizeCategory: #S,
  usageType.dataClass: #MASTER,
  supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET],
  modelingPattern: #NONE
}
@Metadata.ignorePropagatedAnnotations: true

define view I_JointVentureDetails
  as select from    t8jv as jv
    left outer join t8jf as eg on  jv.bukrs = eg.bukrs
                               and jv.vname = eg.vname
    left outer join t8jq as bp on  eg.bukrs = bp.bukrs
                               and eg.vname = bp.vname
                               and eg.egrup = bp.egrup
  association [1..1] to I_CompanyCode              as _CompanyCode              on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_JntOpgAgrmt              as _JntOpgAgrmt              on  $projection.CompanyCode = _JntOpgAgrmt.CompanyCode
                                                                                and $projection.JntOpgAgrmt = _JntOpgAgrmt.JntOpgAgrmt
  association [1..1] to I_JntOpgAgrmtText           as _JntOpgAgrmtText          on  $projection.CompanyCode = _JntOpgAgrmtText.CompanyCode
                                                                                and $projection.JntOpgAgrmt = _JntOpgAgrmtText.JntOpgAgrmt  
                                                                                and _JntOpgAgrmtText.Language   = $session.system_language                                                                                
  association [1..1] to I_JntVntrEquityGrp         as _JntVntrEquityGrp         on  $projection.CompanyCode          = _JntVntrEquityGrp.CompanyCode
                                                                                and $projection.JointVenture         = _JntVntrEquityGrp.JointVenture
                                                                                and $projection.JntOpgAgrmtEquityGrp = _JntVntrEquityGrp.JntOpgAgrmtEquityGrp
  association [1..1] to I_JntVntrEquityGrpText     as _JntVntrEquityGrpText     on  $projection.CompanyCode          = _JntVntrEquityGrpText.CompanyCode
                                                                                and $projection.JointVenture         = _JntVntrEquityGrpText.JointVenture
                                                                                and $projection.JntOpgAgrmtEquityGrp = _JntVntrEquityGrpText.JntOpgAgrmtEquityGrp
                                                                                and _JntVntrEquityGrpText.Language   = $session.system_language                                                                                    
  association [1..1] to I_JntVntrPartOwnrEquityShr as _JntVntrPartOwnrEquityShr on  $projection.CompanyCode          = _JntVntrPartOwnrEquityShr.CompanyCode
                                                                                and $projection.JointVenture         = _JntVntrPartOwnrEquityShr.JointVenture
                                                                                and $projection.JntOpgAgrmtEquityGrp = _JntVntrPartOwnrEquityShr.JntOpgAgrmtEquityGrp
                                                                                and $projection.JointVenturePartner  = _JntVntrPartOwnrEquityShr.JointVenturePartner
  association [0..*] to I_JointVentureDesc         as _JointVentureDesc         on  $projection.CompanyCode  = _JointVentureDesc.CompanyCode
                                                                                and $projection.JointVenture = _JointVentureDesc.JointVenture
                                                                                
  association [1..1] to I_JointVentureMasterFld    as _JointVentureMasterFld    on  $projection.CompanyCode  = _JointVentureMasterFld.CompanyCode
                                                                                and $projection.JointVenture = _JointVentureMasterFld.JointVenture         
 
 
{     
      @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JointVentureCompanyCodeVH',
                           element: 'CompanyCode' }
              }]
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key cast( jv.bukrs as fis_bukrs preserving type ) as CompanyCode,
       @Consumption.valueHelpDefinition: [ { entity:  { name:    'I_JntVntrValueHelp',
                                             element: 'JointVenture' }
                                         }]
       @ObjectModel.foreignKey.association: '_JointVentureMasterFld'
       @ObjectModel.text.association: '_JointVentureDesc'
  key jv.vname                                      as JointVenture,
      @Consumption.valueHelpDefinition: [ { entity:  { name:    'I_JntVntrEquityGroupValueHelp',
                                              element: 'JntOpgAgrmtEquityGrp' }
                                          }]
      @ObjectModel.foreignKey.association: '_JntVntrEquityGrp'
      @ObjectModel.text.association: '_JntVntrEquityGrpText'    
  key eg.egrup                                      as JntOpgAgrmtEquityGrp,
      @Consumption.valueHelpDefinition: [ { entity:  { name:    'I_JointVenturePartnerValueHelp',
                                            element: 'JointVenturePartner' }
                                         }]      
      @ObjectModel.foreignKey.association: '_JntVntrPartOwnrEquityShr'
  key bp.partn                                      as JointVenturePartner,
      jv.vtype                                      as JointVentureType,
      jv.operator                                   as Operator,
      jv.taxcode                                    as TaxCode,
      jv.vclass                                     as JointVentureClass,      
      @Consumption.valueHelpDefinition: [ { entity:  { name:    'I_JntOpgAgrmtVH',
                                            element: 'JntOpgAgrmt' }
                                        }]   
      @ObjectModel.text.association: '_JntOpgAgrmtText'                                     
      jv.joa                                        as JntOpgAgrmt,
      jv.fundgroup                                  as JntVntrFundingGroup,
      jv.payterms                                   as PaymentTerms,
      jv.bmethod                                    as JointVentureBillingType,
      jv.itd                                        as JntVntrInceptionToDateBillg,
      jv.cruser                                     as CreatedByUser,
      jv.crtime                                     as JntVntrTimeCreated,
      jv.crdate                                     as JntVntrDateCreated,
      jv.chuser                                     as LastChangedByUser,
      jv.chtime                                     as JntVntrTimeLastChanged,
      jv.chdate                                     as JntVntrDateLastChanged,
      jv.bformat                                    as JntVntrBillgFormat,
      jv.vactive                                    as JntVntrBillgCutbackIsBlk,
      jv.txjcd                                      as TaxJurisdiction,
      jv.outpayterm                                 as JntVntrOutPaymentTerms,
      jv.outtaxcode                                 as JntVntrOutTaxCode,
      jv.txjcd2                                     as JntVntrTaxJurisdiction,
      jv.nbformat                                   as JntVntrNonBillgFormat,
      jv.bfreq                                      as JntVntrBillgFrqcy,
      jv.ovrdf                                      as JntVntrDrillingPayRate,
      jv.ovrnd                                      as JntVntrNonDrillingPayRate,
      jv.pcocostc                                   as JntVntrParentCoOvhdExpnCostCtr,
      jv.pcoprojk                                   as JntVntrParentCoOvhdProject,
      jv.pcoordnr                                   as JntVntrParentCoOvhdExpnOrder,
      jv.kostl                                      as JntVntrSubstituteCostCtr,
      jv.checkfc                                    as JntVntrCrcyIsFundingCrcy,
      jv.property                                   as JntVntrProperty,

      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_Currency'
      _CompanyCode.Currency,

      @Semantics: { amount : { currencyCode: 'Currency'} }
      jv.billthres                                  as JntVntrBillgThldDebit,
      @Semantics: { amount : { currencyCode: 'Currency'} }
      jv.billthresc                                 as JntVntrBillgThldCredit,
      
      jv.billthresa                                 as JntVntrBillgThldIsActive,
      jv.pschem                                     as JntVntrPaymentTermSchema,
      
      _CompanyCode,
      _CompanyCode._Currency,
      _JntOpgAgrmt,
      _JntVntrEquityGrp,
      _JntVntrPartOwnrEquityShr,
      _JointVentureDesc,
      _JointVentureMasterFld,
      _JntOpgAgrmtText,
      _JntVntrEquityGrpText
      
}
```
