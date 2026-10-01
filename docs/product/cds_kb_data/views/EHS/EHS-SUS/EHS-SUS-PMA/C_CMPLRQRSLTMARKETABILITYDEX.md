---
name: C_CMPLRQRSLTMARKETABILITYDEX
description: "Compliance Assessment for Products"
app_component: EHS-SUS-PMA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLRQRSLTMARKETABILITYDEX')/$value
semantic_en: "Compliance Assessment for Products"
semantic_vi: "Compliance Assessment for Products — CDS view tiêu dùng (transactional data) dựa trên I_CmplRqRslt."
keywords:
  - "compliance"
  - "assessment"
  - "for"
  - "products"
  - "cmpl"
  - "rslt"
  - "chml"
  - "cmplnc"
  - "info"
  - "substance"
  - "suplr"
  - "matl"
  - "chemical"
  - "customer"
  - "material"
tags:
  - EHS
  - bo:material
  - component:EHS-SUS-PMA
  - consumption-view
  - EHS-SUS
  - EHS-SUS-PMA
  - product
---
# C_CMPLRQRSLTMARKETABILITYDEX

**Compliance Assessment for Products**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-PMA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLRQRSLTMARKETABILITYDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CmplRqRsltUUID` | ✓ | | `_CmplRqRslt` | `CmplRqRsltUUID` | `RAW(16)` | Compliance Assessment UUID |
| `ChmlCmplncInfoUUID` |  | | `_CmplRqRslt` | `ChmlCmplncInfoUUID` | `RAW(16)` | Chemical Compliance Information |
| `SubstanceUUID` |  | | `_CmplRqRslt` | `SubstanceUUID` | `RAW(16)` | Substance |
| `ChmlSuplrMatlUUID` |  | | `_CmplRqRslt` | `ChmlSuplrMatlUUID` | `RAW(16)` | Supplier Raw Material |
| `ChemicalCustomerMaterialUUID` |  | | `_CmplRqRslt` | `ChemicalCustomerMaterialUUID` | `RAW(16)` | Chemical Customer Material UUID |
| `CmplRqVersUUID` |  | | `_CmplRqRslt` | `CmplRqVersUUID` | `RAW(16)` | Compliance Requirement UUID |
| `CmplRqVers` |  | | `_CmplRqVers` | `CmplRqVers` | `CHAR(40)` | Compliance Requirement Version ID |
| `CmplRqPattern` |  | | `_CmplRqVers` | `CmplRqPattern` | `CHAR(30)` |  |
| `ComplianceRequirement` |  | | `_CmplRqRslt` | `ComplianceRequirement` | `CHAR(30)` | Compliance Requirement |
| `CmplRqRsltProcessingStatus` |  | | `_CmplRqRslt` | `CmplRqRsltProcessingStatus` | `CHAR(2)` | Processing Status |
| `ValidityStartDateTime` |  | | `_CmplRqRslt` | `ValidityStartDateTime` | `DEC(15)` | Valid-From Date Time Stamp |
| `ValidityEndDateTime` |  | | `_CmplRqRslt` | `ValidityEndDateTime` | `DEC(15)` | Valid-To Date Time Stamp |
| `CmplRqRsltReldCmplncSts` |  | | `_CmplRqRslt` | `CmplRqRsltReldCmplncSts` | `CHAR(2)` | Released Compliance Status |
| `CmplRqRsltCalculatedStatus` |  | | `_CmplRqRslt` | `CmplRqRsltCalculatedStatus` | `CHAR(2)` | Calculated Compliance Status |
| `CmplRqRsltManualStatus` |  | | `_CmplRqRslt` | `CmplRqRsltManualStatus` | `CHAR(2)` | Manually Set Status of a Compliance Requirement |
| `CmplRqRsltPrelimCmplncSts` |  | | `_CmplRqRslt` | `CmplRqRsltPrelimCmplncSts` | `CHAR(2)` | Preliminary Compliance Status |
| `CmplRqRsltStatusRemark` |  | | `_CmplRqRslt` | `CmplRqRsltStatusRemark` | `STRI(999999)` | Remarks on Status of Compliance Requirement |
| `ChmlCompositionType` |  | | `_CmplRqRslt` | `ChmlCompositionType` | `CHAR(10)` | Legal Area |
| `MaterialIsSold` |  | | `_CmplRqRslt` | `MaterialIsSold` | `CHAR(1)` | Product is Sold |
| `MaterialIsTransported` |  | | `_CmplRqRslt` | `MaterialIsTransported` | `CHAR(1)` | Product is Transported |
| `MaterialIsSourced` |  | | `_CmplRqRslt` | `MaterialIsSourced` | `CHAR(1)` | Product is Sourced |
| `MaterialIsProduced` |  | | `_CmplRqRslt` | `MaterialIsProduced` | `CHAR(1)` | Product is Produced |
| `CmplRqRsltReferencedObjectUUID` |  | | `_CmplRqRslt` | `CmplRqRsltReferencedObjectUUID` | `RAW(16)` | Asessment (CRR) Reference / Host UUID |
| `CmplRqRsltReferencedObjectType` |  | | `_CmplRqRslt` | `CmplRqRsltReferencedObjectType` | `CHAR(3)` | Asessment Reference / Host Type |
| `CmplRqRsltReferencedObjectId` |  | | `_CmplRqRslt` | `CmplRqRsltReferencedObjectId` | `CHAR(255)` | Object Type of Compliance Assessment Reference |
| `CreationDateTime` |  | | `_CmplRqRslt` | `CreationDateTime` | `DEC(21)` | Created On |
| `LastChangeDateTime` |  | | `_CmplRqRslt` | `LastChangeDateTime` | `DEC(21)` | Last Changed On |
| `_CmplRqVers` | | ✓ | | | | |
| `_ChmlCmplncInfo` | | ✓ | | | | |
| `_Substance` | | ✓ | | | | |
| `_SupplierMaterial` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLRQRSLTMARKETABILITYDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLRQRSLTMARKETABILITYDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]

@EndUserText.label: 'Compliance Assessment for Products'

@AccessControl: {
     authorizationCheck:    #MANDATORY,
     personalData.blocking: #NOT_REQUIRED
}

@Metadata: {
     ignorePropagatedAnnotations: true
}

@ObjectModel: {
      usageType: {
         sizeCategory:   #XL,
         serviceQuality: #C,
         dataClass:      #TRANSACTIONAL
      },
      sapObjectNodeType.name: 'ComplianceAssessment',
      supportedCapabilities: [#EXTRACTION_DATA_SOURCE],
      modelingPattern: #NONE
}

@VDM: {
      viewType: #CONSUMPTION
}

@Analytics: {
        dataCategory: #FACT,
        internalName: #LOCAL,
        dataExtraction: {
          enabled: true,
          delta.changeDataCapture:
          { mapping:
            [
              { role: #MAIN, table: 'ehfndd_crr', tableElement: ['UUID'], viewElement: ['CmplRqRsltUUID'] }
            ]
          }
        }
}
define view entity C_CmplRqRsltMarketabilityDEX

  as select from I_CmplRqRslt as _CmplRqRslt

{
  key _CmplRqRslt.CmplRqRsltUUID,

      _CmplRqRslt.ChmlCmplncInfoUUID,
      _CmplRqRslt.SubstanceUUID,
      _CmplRqRslt.ChmlSuplrMatlUUID,
      _CmplRqRslt.ChemicalCustomerMaterialUUID,

      _CmplRqRslt.CmplRqVersUUID,
      _CmplRqVers.CmplRqVers,
      _CmplRqVers.CmplRqPattern,
      _CmplRqRslt.ComplianceRequirement,

      _CmplRqRslt.CmplRqRsltProcessingStatus,
      _CmplRqRslt.ValidityStartDateTime,
      _CmplRqRslt.ValidityEndDateTime,

      _CmplRqRslt.CmplRqRsltReldCmplncSts,
      _CmplRqRslt.CmplRqRsltCalculatedStatus,
      _CmplRqRslt.CmplRqRsltManualStatus,
      _CmplRqRslt.CmplRqRsltPrelimCmplncSts,
      _CmplRqRslt.CmplRqRsltStatusRemark,

      _CmplRqRslt.ChmlCompositionType,
      _CmplRqRslt.MaterialIsSold,
      _CmplRqRslt.MaterialIsTransported,
      _CmplRqRslt.MaterialIsSourced,
      _CmplRqRslt.MaterialIsProduced,

      _CmplRqRslt.CmplRqRsltReferencedObjectUUID,
      _CmplRqRslt.CmplRqRsltReferencedObjectType,
      _CmplRqRslt.CmplRqRsltReferencedObjectId,

      _CmplRqRslt.CreationDateTime,
      _CmplRqRslt.LastChangeDateTime,

      /**** Associations (not used in extraction case) ****/
      _CmplRqVers,
      _ChmlCmplncInfo,
      _Substance,
      _SupplierMaterial
}
where
  _CmplRqVers.CmplRqApplicationComponent = 'PMA'
```
