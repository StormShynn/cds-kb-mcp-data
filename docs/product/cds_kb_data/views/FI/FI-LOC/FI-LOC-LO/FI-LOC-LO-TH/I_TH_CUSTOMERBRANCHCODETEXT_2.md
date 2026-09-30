---
name: I_TH_CUSTOMERBRANCHCODETEXT_2
description: "Customer Branch Code for Thailand - Text"
app_component: FI-LOC-LO-TH
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TH_CUSTOMERBRANCHCODETEXT_2')/$value
semantic_en: "Customer Branch Code for Thailand - Text"
semantic_vi: "Customer Branch Code for Thailand - Text — CDS view cơ bản (master data) dựa trên fitha_pbupl_d_t."
keywords:
  - "customer"
  - "branch"
  - "code"
  - "for"
  - "thailand"
  - "text"
  - "language"
  - "description"
  - "business"
  - "purpose"
  - "completed"
tags:
  - FI
  - bo:businesspartner
  - component:FI-LOC-LO-TH
  - customer
  - FI-LOC
  - FI-LOC-LO
  - FI-LOC-LO-TH
  - interface-view
  - lob:finance
  - lob:logistics general
---
# I_TH_CUSTOMERBRANCHCODETEXT_2

**Customer Branch Code for Thailand - Text**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-TH` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TH_CUSTOMERBRANCHCODETEXT_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Customer` | ✓ | |  | `kunnr` | `CHAR(10)` | Customer Number |
| `BranchCode` | ✓ | |  | `j_1tpbupl` | `CHAR(5)` | Branch Code |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `TH_BranchCodeDescription` |  | |  | `description` | `CHAR(40)` | Branch Code Description |
| `IsBusinessPurposeCompleted` |  | | `_Customer` | `IsBusinessPurposeCompleted` | `CHAR(1)` | Business Purpose Completed Flag |
| `AuthorizationGroup` |  | | `_Customer` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `CustomerAccountGroup` |  | | `_Customer` | `CustomerAccountGroup` | `CHAR(4)` | Customer Account Group |
| `DataControllerSet` |  | | `_Customer` | `DataControllerSet` | `CHAR(1)` | BP: Data Controller Set Flag |
| `_Customer` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_BranchCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Customer` | `I_Customer` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TH_CUSTOMERBRANCHCODETEXT_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TH_CUSTOMERBRANCHCODETEXT_2')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Customer Branch Code for Thailand - Text'
@AccessControl.personalData.blocking: #REQUIRED
@Analytics.technicalName: 'I_TH_CUSTBRNCHCODETEXT_2'
@AccessControl.personalData.blockingIndicator: [ 'IsBusinessPurposeCompleted' ]
@Analytics: { internalName: #LOCAL }
@ObjectModel: { dataCategory:          #TEXT,
                modelingPattern:       #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT],
                representativeKey:     'BranchCode',
                usageType: { serviceQuality: #A,
                             dataClass:      #MASTER,
                             sizeCategory:   #XL } }
@Metadata.ignorePropagatedAnnotations:true
@VDM:{ lifecycle.contract.type: #PUBLIC_LOCAL_API,
       viewType: #BASIC }

define view entity I_TH_CustomerBranchCodeText_2
  as select from fitha_pbupl_d_t

  association        to parent I_TH_CustomerBranchCode_2 as _BranchCode on  $projection.Customer   = _BranchCode.Customer
                                                                        and $projection.BranchCode = _BranchCode.BranchCode
  association [1..1] to I_Customer                       as _Customer   on  $projection.Customer = _Customer.Customer
  association [0..1] to I_Language                       as _Language   on  $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Customer'
  key kunnr       as Customer,
      @ObjectModel.text.element: ['TH_BranchCodeDescription']
      @ObjectModel.foreignKey.association: '_BranchCode'
  key j_1tpbupl   as BranchCode,
      @Semantics.language:true
      @ObjectModel.foreignKey.association: '_Language'
  key spras       as Language,
      @Semantics.text:true
      @ObjectModel.text.element: ['TH_BranchCodeDescription']
      description as TH_BranchCodeDescription,
      @Semantics.booleanIndicator:true
      _Customer.IsBusinessPurposeCompleted,
      _Customer.AuthorizationGroup,
      _Customer.CustomerAccountGroup,
      _Customer.DataControllerSet,
      _Customer,
      _BranchCode,
      _Language


}
```
