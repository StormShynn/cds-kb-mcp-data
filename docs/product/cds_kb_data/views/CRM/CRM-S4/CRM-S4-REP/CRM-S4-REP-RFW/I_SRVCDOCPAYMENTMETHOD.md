---
name: I_SRVCDOCPAYMENTMETHOD
description: "Srvcdocpaymentmethod"
app_component: CRM-S4-REP-RFW
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
  - CRM
  - interface-view
  - payment
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SRVCDOCPAYMENTMETHOD

**Srvcdocpaymentmethod**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
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
| `PaymentMethod` | ✓ | | `_PaymentMethod` | `PaymentMethod` | `CHAR(1)` | Payment Method |
| `SalesOrganization` | ✓ | | `_SlsOrgIDDetmCountry` | `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `OrgUnitTypeIDConcatenated` | ✓ | | `_SlsOrgIDDetmCountry` | `OrgUnitTypeIDConcatenated` | `CHAR(10)` | Concatenation of Object Type and Object ID |
| `Country` |  | | `_PaymentMethod` | `Country` | `CHAR(3)` | Country/Region Key |
| `_SalesOrganizationOrgUnit` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrganizationOrgUnit` | `I_SrvcMgmtOrganizationUnit` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISRVPYMTHDS'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics: {
      internalName: #LOCAL
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Service Transaction Payment Method'
@ObjectModel: {
    modelingPattern:  #ANALYTICAL_DIMENSION,
    representativeKey: 'PaymentMethod',
    supportedCapabilities: [#ANALYTICAL_DIMENSION,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE],
    usageType: {
        serviceQuality: #C,
        sizeCategory: #L,
        dataClass: #CUSTOMIZING
    }
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true


/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_SrvcDocPaymentMethod
  as select from I_PaymentMethod       as _PaymentMethod
    inner join   P_SlsOrgIDDetmCountry as _SlsOrgIDDetmCountry on _SlsOrgIDDetmCountry.Country = _PaymentMethod.Country
  association [0..1] to I_SrvcMgmtOrganizationUnit as _SalesOrganizationOrgUnit on $projection.OrgUnitTypeIDConcatenated = _SalesOrganizationOrgUnit.OrgUnitTypeIDConcatenated
  association [0..1] to I_SalesOrganization        as _SalesOrganization        on $projection.SalesOrganization = _SalesOrganization.SalesOrganization
{
       @ObjectModel.text.association: '_Text'
  key  _PaymentMethod.PaymentMethod                   as PaymentMethod,
       @ObjectModel.foreignKey.association: '_SalesOrganization'
  key  _SlsOrgIDDetmCountry.SalesOrganization         as SalesOrganization,
       @ObjectModel.foreignKey.association: '_SalesOrganizationOrgUnit'
  key  _SlsOrgIDDetmCountry.OrgUnitTypeIDConcatenated as OrgUnitTypeIDConcatenated,


       _PaymentMethod.Country                         as Country,
       
       @Search.defaultSearchElement: true
       _PaymentMethod._Text[1:Language = $session.system_language and _PaymentMethod.Country = Country and _PaymentMethod.PaymentMethod = PaymentMethod].PaymentMethodDescription,

       //! Associations
       _PaymentMethod._Text,

       _SalesOrganization,
       _SalesOrganizationOrgUnit
}
```
