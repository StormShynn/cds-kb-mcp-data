---
name: I_JVAJOINTINTERESTBILLINGCLASS
description: "Jvajointinterestbillingclass"
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
  - billing
  - component:CA-JVA
  - lob:Cross-Application Components
---
# I_JVAJOINTINTERESTBILLINGCLASS

**Jvajointinterestbillingclass**

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
| `JVAJointInterestBillingClass` | ✓ | |  | `class` | `CHAR(3)` | JIB/JIBE Class |
| `JVAJointInterestBillgSubClass` | ✓ | |  | `subclass` | `CHAR(5)` | JIB/JIBE Subclass A |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVAT8J6C'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #BASIC
@ObjectModel:{
  usageType.serviceQuality: #A,
  usageType.sizeCategory: #S,
  usageType.dataClass: #CUSTOMIZING,
  supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #UI_PROVIDER_PROJECTION_SOURCE ],
  modelingPattern: #NONE
}

@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status : #NOT_ALLOWED
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'JVA JIB or JIBE Subclass'
define view I_JVAJointInterestBillingClass
  as select from t8j6c
{
      @EndUserText: { label: 'Company Code' , quickInfo: 'Company Code' }
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_JointVentureCompanyCodeVH',
                           element: 'CompanyCode' }
              }]
  key bukrs    as CompanyCode,
      @EndUserText: { label: 'JIB/JIBE Class' , quickInfo: 'JIB/JIBE Class' }
  key class    as JVAJointInterestBillingClass,
      @EndUserText: { label: 'JIB/JIBE Subclass' , quickInfo: 'JIB/JIBE Subclass' }
  key subclass as JVAJointInterestBillgSubClass
}
```
