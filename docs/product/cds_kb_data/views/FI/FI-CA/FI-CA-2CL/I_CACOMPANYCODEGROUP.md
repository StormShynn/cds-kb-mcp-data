---
name: I_CACOMPANYCODEGROUP
description: "CACompany CodeGROUP"
semantic_vi: "View I_CACOMPANYCODEGROUP hiển thị các nhóm mã công ty và mã công ty thanh toán liên quan, có liên quan khi quản lý cấu hình mã công ty trong thành phần FI-CA-2CL."
keywords:
  - "company code"
  - "company code group"
  - "payment company code"
  - "fi-ca-2cl"
  - "fi"
  - "finance"
  - "sap"
  - "company code configuration"
  - "mã công ty"
  - "nhóm mã công ty"
  - "mã công ty thanh toán"
semantic_en: "The I_CACOMPANYCODEGROUP CDS view exposes company code groups and their associated payment company codes, which are relevant when managing company code configurations in the FI-CA-2CL component."
app_component: FI-CA-2CL
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
  - FI
  - FI-CA
  - interface-view
  - company-code
  - component:FI-CA-2CL
  - lob:Finance
  - bo:CompanyCode
---
# I_CACOMPANYCODEGROUP

**CACompany CodeGROUP**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
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
| `CACompanyCodeGroup` | ✓ | |  | `opbuk` | `CHAR(4)` | Company Code Group |
| `CAPaymentCompanyCode` |  | |  | `pybuk` | `CHAR(4)` | Company Code for Automatic Payment Transactions |
| `_Text` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CACompanyCodeGroupText` | [0..*] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Company Code Group'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CACompanyCodeGroup',
                sapObjectNodeType.name: 'ContrAcctgCompanyCodeGroup',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, 
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CACompanyCodeGroup
  as select from tfk001g

  association [0..*] to I_CACompanyCodeGroupText as _Text        on $projection.CACompanyCodeGroup = _Text.CACompanyCodeGroup
  association [1..1] to I_CompanyCode            as _CompanyCode on $projection.CAPaymentCompanyCode = _CompanyCode.CompanyCode

{
      @ObjectModel.text.association: '_Text'
  key opbuk as CACompanyCodeGroup,
      
      @ObjectModel.foreignKey.association: '_CompanyCode'
      pybuk as CAPaymentCompanyCode,

      _Text,
      _CompanyCode
}
```
