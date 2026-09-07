---
name: I_JNTVNTRBUSINESSPARTNER
description: "JNTVNTRBusiness Partner"
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
  - business-partner
  - partner
  - component:CA-JVA
  - lob:Cross-Application Components
  - bo:BusinessPartner
---
# I_JNTVNTRBUSINESSPARTNER

**JNTVNTRBusiness Partner**

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
| `JointVenturePartner` | ✓ | |  | `cast( jvp.partn as jv_part_cds preserving type )` | `CHAR(10)` | Joint Venture Partner |
| `JointVenturePartnerShortText` |  | |  | `cast( left(_BusinessPartner.BusinessPartnerName, 35) as jv_part_nm preserving type )` | `CHAR(35)` | Name of the joint venture partner |
| `JointVenturePartner2ShortText` |  | |  | `cast( left(_BusinessPartner.BusinessPartnerName, 40) as jva_partner_name preserving type )` | `CHAR(40)` | JVA Partner name |
| `JntVntrIntcoCode` |  | |  | `intcocd` | `CHAR(4)` | Intercompany code |
| `JntVntrCashCallThld` |  | |  | `ccthresh` | `DEC(13)` | Cash Call Threshold |
| `JntVntrHardCopyBillgIsSupp` |  | |  | `paper` | `CHAR(1)` | Indicator: Hardcopy billings |
| `JntVntrOwnrIsEDITo` |  | |  | `edi` | `CHAR(1)` | Indicator: EDI to Owner |
| `JntVentureIsConvenienceNetting` |  | |  | `convnetind` | `CHAR(1)` | JV Convenience Netting Indicator |
| `JntVntrBillgFormat` |  | |  | `bformat` | `CHAR(4)` | JV Billing Format |
| `TaxCode` |  | |  | `taxcode` | `CHAR(2)` | Tax on Sales/Purchases Code |
| `EDIPartner` |  | |  | `edicomp` | `CHAR(12)` | EDI Partner Code |
| `EDIReceiver` |  | |  | `edicomp` | `CHAR(12)` | EDI Partner Code |
| `JntVntrPartnerProcessGrp` |  | |  | `ppgroup` | `CHAR(3)` | Partner processing group |
| `JntVntrPartEquityCashCallThld` |  | |  | `veccthresh` | `DEC(13)` | Partner/Venture/Equity Group Cash Call Threshold |
| `JntVntrPartProjCashCallThld` |  | |  | `pjccthresh` | `DEC(13)` | Partner/Project Cash Call Threshold |
| `PersonResponsible` |  | |  | `person` | `CHAR(30)` | Name of employee responsible |
| `ResponsibleContact` |  | |  | `person` | `CHAR(30)` | Name of employee responsible |
| `PhoneNumber` |  | |  | `telfn` | `CHAR(15)` | Telephone number |
| `ContactPhoneNumber` |  | |  | `telfn` | `CHAR(15)` | Telephone number |
| `JntVntrGeneratedExpndtrSet` |  | |  | `t819_only` | `CHAR(1)` | JV Generate 819 Transaction Set Only (no 810) |
| `Currency` |  | | `_CompanyCode` | `Currency` | `CUKY(5)` | Currency Key |
| `JntVntrBillgThldDebit` |  | |  | `billthres` | `CURR(13)` | Billing threshold (debit) |
| `JntVntrBillgThldCredit` |  | |  | `billthresc` | `CURR(13)` | Billing threshold (credit) |
| `JntVntrBillgThldIsActive` |  | |  | `billthresa` | `CHAR(1)` | Billing threshold active |
| `JntVntrBillgReportsAreSpprsd` |  | |  | `billthresx` | `CHAR(1)` | All billing reports suppressed |
| `JntVntrSeparateBillgIsPrepared` |  | |  | `billthress` | `CHAR(1)` | Prepare separate reports for suppressed periods |
| `_CompanyCode` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_BPDataControllerUsage` | `I_BPDataControllerUsage` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVBP'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Joint Venture Business Partner'
@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'JointVenturePartner'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #B
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions:true
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Analytics.internalName:#LOCAL
@Analytics.settings.valueHelp.supressInitialValue: true

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #UI_PROVIDER_PROJECTION_SOURCE ]
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view I_JntVntrBusinessPartner
  as select from t8jo as jvp

  association [0..1] to I_CompanyCode     as _CompanyCode     on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_BusinessPartner as _BusinessPartner on $projection.JointVenturePartner = _BusinessPartner.BusinessPartner
  association [0..*] to I_BPDataControllerUsage as _BPDataControllerUsage on $projection.JointVenturePartner = _BPDataControllerUsage.BusinessPartner
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Consumption.valueHelpDefinition: [
             { entity:  { name:    'I_JointVentureCompanyCodeVH',
                          element: 'CompanyCode' }
             }]
  key jvp.bukrs                                                                                  as CompanyCode,
        @ObjectModel.text.element: ['JointVenturePartner2ShortText']
        @Consumption.valueHelpDefinition: [ 
               { entity:  { name:    'I_JointVenturePartnerValueHelp',
                           element: 'JointVenturePartner' }
               }]  
               
  key cast( jvp.partn as jv_part_cds preserving type )                                           as JointVenturePartner,
      @Semantics.text: true
      cast( left(_BusinessPartner.BusinessPartnerName, 35) as jv_part_nm preserving type )       as JointVenturePartnerShortText,
      @Semantics.text: true
      cast( left(_BusinessPartner.BusinessPartnerName, 40) as jva_partner_name preserving type ) as JointVenturePartner2ShortText,
      jvp.intcocd                                                                                as JntVntrIntcoCode,
      jvp.ccthresh                                                                               as JntVntrCashCallThld,
      jvp.paper                                                                                  as JntVntrHardCopyBillgIsSupp,
      jvp.edi                                                                                    as JntVntrOwnrIsEDITo,
      jvp.convnetind                                                                             as JntVentureIsConvenienceNetting,
      jvp.bformat                                                                                as JntVntrBillgFormat,
      jvp.taxcode                                                                                as TaxCode,
      // Due to data domain incompantibility reason this field should not be used. Use "EDIReceiver" instead.
      jvp.edicomp                                                                                as EDIPartner,
      jvp.edicomp                                                                                as EDIReceiver,
      jvp.ppgroup                                                                                as JntVntrPartnerProcessGrp,
      jvp.veccthresh                                                                             as JntVntrPartEquityCashCallThld,
      jvp.pjccthresh                                                                             as JntVntrPartProjCashCallThld,
      // Due to data domain incompantibility reason this field should not be used. Use "ResponsibleContact" instead.
      jvp.person                                                                                 as PersonResponsible,
      jvp.person                                                                                 as ResponsibleContact,
      // Due to data domain incompantibility reason this field should not be used. Use "ContactPhoneNumber" instead.
      jvp.telfn                                                                                  as PhoneNumber,
      jvp.telfn                                                                                  as ContactPhoneNumber,
      jvp.t819_only                                                                              as JntVntrGeneratedExpndtrSet,
      _CompanyCode.Currency                                                                      as Currency,
      @Semantics.amount.currencyCode : 'Currency'
      jvp.billthres                                                                              as JntVntrBillgThldDebit,
      @Semantics.amount.currencyCode : 'Currency'
      jvp.billthresc                                                                             as JntVntrBillgThldCredit,
      jvp.billthresa                                                                             as JntVntrBillgThldIsActive,
      jvp.billthresx                                                                             as JntVntrBillgReportsAreSpprsd,
      jvp.billthress                                                                             as JntVntrSeparateBillgIsPrepared,

      _CompanyCode,
      _BusinessPartner
}
```
