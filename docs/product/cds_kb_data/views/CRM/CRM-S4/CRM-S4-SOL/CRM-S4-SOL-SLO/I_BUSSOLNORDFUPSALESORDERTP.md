---
name: I_BUSSOLNORDFUPSALESORDERTP
description: "BUSSOLNORDFUPSales OrderTP"
semantic_vi: "Chứa dữ liệu đơn hàng bán hàng cho giải pháp kinh doanh trong CRM, được sử dụng cho xử lý giao dịch và quản lý đơn hàng bán hàng."
keywords:
  - "sales order"
  - "đơn hàng bán hàng"
  - "crm"
  - "transactional processing"
  - "business solution"
  - "s4hana"
  - "sap crm"
  - "sales order management"
  - "đơn hàng bán hàng quản lý"
semantic_en: "Exposes sales order data for business solutions in CRM, used for transactional processing and sales order management."
app_component: CRM-S4-SOL-SLO
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - sales-order
  - component:CRM-S4-SOL-SLO
  - lob:Other
  - bo:SalesOrder
---
# I_BUSSOLNORDFUPSALESORDERTP

**BUSSOLNORDFUPSales OrderTP**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SOL-SLO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessSolutionOrder` | ✓ | |  |  |  |  |
| `SalesOrder` | ✓ | |  |  |  |  |
| `_BusinessSolutionOrder` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  usageType:{
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory:   #L
  }
}

@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@EndUserText.label: 'Business Solution Order Follow up Sales Order - TP'

define view entity I_BusSolnOrdFUPSalesOrderTP
  as projection on R_BusSolnOrdFUPSalesOrderTP
{
  key BusinessSolutionOrder,
  key SalesOrder,

      //Associations
      _BusinessSolutionOrder : redirected to parent I_BusinessSolutionOrderTP
}
```
