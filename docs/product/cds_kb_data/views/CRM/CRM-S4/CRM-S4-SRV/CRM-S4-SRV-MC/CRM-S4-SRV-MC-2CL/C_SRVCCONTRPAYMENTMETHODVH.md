---
name: C_SRVCCONTRPAYMENTMETHODVH
description: "Srvccontrpaymentmethodvh"
semantic_vi: "Chứa phương thức thanh toán hợp đồng dịch vụ cho các công ty hóa đơn, được sử dụng để cung cấp hỗ trợ giá trị giúp chọn phương thức thanh toán trong hợp đồng dịch vụ CRM."
keywords:
  - "service contract"
  - "hợp đồng dịch vụ"
  - "payment method"
  - "phương thức thanh toán"
  - "billing company"
  - "công ty hóa đơn"
  - "crm"
  - "thanh toán"
  - "hỗ trợ giá trị"
semantic_en: "Exposes service contract payment methods for billing companies, used to provide a value help for selecting payment methods in CRM service contracts."
app_component: CRM-S4-SRV-MC-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - consumption-view
  - value-help
  - payment
  - component:CRM-S4-SRV-MC-2CL
  - lob:Other
---
# C_SRVCCONTRPAYMENTMETHODVH

**Srvccontrpaymentmethodvh**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-MC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingCompanyCode` | ✓ | | `_CompanyCode` | `CompanyCode` | `CHAR(4)` | Company Code |
| `PaymentMethod` | ✓ | | `_PaymentMethod` | `PaymentMethod` | `CHAR(1)` | Payment Method |
| `PaymentMethodName` |  | | `_PaymentMethod` | `PaymentMethodName` | `CHAR(30)` | Name of Payment Method in Language of the Country/Region |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #CONSUMPTION
@Search: {
  searchable: true
}

@Consumption.ranked: true

@ObjectModel:{
  usageType:{
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #L},
  dataCategory: #VALUE_HELP}

@ObjectModel.representativeKey: 'PaymentMethod'
@ObjectModel.supportedCapabilities:[#VALUE_HELP_PROVIDER]
@Metadata.ignorePropagatedAnnotations: true
@Consumption.valueHelpDefault.fetchValues:#AUTOMATICALLY_WHEN_DISPLAYED

@EndUserText.label: 'Payment Method of Service Contract'
define view entity C_SrvcContrPaymentMethodVH
  as select from I_CompanyCode              as _CompanyCode

    inner join   I_PaymentMethodInCountryVH as _PaymentMethod on _CompanyCode.Country = _PaymentMethod.Country

{
         @Search: {
          defaultSearchElement: true,
          ranking: #LOW
         }
  key    _CompanyCode.CompanyCode as BillingCompanyCode,

         @Search: {
          defaultSearchElement: true,
          ranking: #HIGH }
         @ObjectModel.text.element: ['PaymentMethodDescription']
         @UI.lineItem: [{ position: 10, importance: #HIGH }]
  key    _PaymentMethod.PaymentMethod,

         @Search: {
          defaultSearchElement: true,
          ranking: #LOW,
          fuzzinessThreshold: 0.8
         }
         @UI.lineItem: [{ position: 20, importance: #HIGH }]
         _PaymentMethod._Text[1:Language=$session.system_language].PaymentMethodDescription,

         @Search: {
          defaultSearchElement: true,
          ranking: #LOW,
          fuzzinessThreshold: 0.8
         }
         @UI.lineItem: [{ position: 30, importance: #HIGH }]
         _PaymentMethod.PaymentMethodName

}
```
