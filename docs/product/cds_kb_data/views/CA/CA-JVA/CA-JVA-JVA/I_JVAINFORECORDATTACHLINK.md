---
name: I_JVAINFORECORDATTACHLINK
description: "Jvainforecordattachlink"
app_component: CA-JVA-JVA
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
  - CA-JVA-JVA
  - interface-view
  - component:CA-JVA-JVA
  - lob:Cross-Application Components
---
# I_JVAINFORECORDATTACHLINK

**Jvainforecordattachlink**

| Property | Value |
|---|---|
| App Component | `CA-JVA-JVA` |
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
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` | ✓ | |  |  | `NUMC(3)` | Posting Period |
| `JointVenturePartner` | ✓ | |  |  | `CHAR(10)` | JV Partner |
| `CreationDate` | ✓ | |  |  | `DATS(8)` | Created On |
| `LinkedSAPObjectKey` | ✓ | |  | `ObjectKey` | `CHAR(90)` | Document Management Object Key |
| `JVABillingFileType` | ✓ | |  |  | `CHAR(3)` | Billing File Type |
| `DocumentInfoRecordDocType` |  | | `_DirObjectLinks` | `DocumentInfoRecordDocType` | `CHAR(3)` | Document Type |
| `DocumentInfoRecordDocNumber` |  | | `_DirObjectLinks` | `DocumentInfoRecordDocNumber` | `CHAR(25)` | Document Number |
| `DocumentInfoRecordDocPart` |  | | `_DirObjectLinks` | `DocumentInfoRecordDocPart` | `CHAR(3)` | Document Part |
| `DocumentInfoRecordDocVersion` |  | | `_DirObjectLinks` | `DocumentInfoRecordDocVersion` | `CHAR(2)` | Document Version |
| `LinkedSAPObject` |  | | `_DirObjectLinks` | `LinkedSAPObject` | `CHAR(10)` | Linked SAP Object |
| `LogicalDocument` |  | | `_DirOriginals` | `LogicalDocument` | `CHAR(32)` | Logical document |
| `PhysicalDocument` |  | | `_DirOriginals` | `PhysicalDocument` | `CHAR(32)` | Physical document |
| `WorkstationApplication` |  | | `_DirOriginals` | `WorkstationApplication` | `CHAR(3)` | Application |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IRECFILELNK'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'JVABILLING Attachment Service'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel: { sapObjectNodeType.name: 'JVABillingDocument',
                usageType: { sizeCategory: #M,
                             dataClass:  #MIXED,
                             serviceQuality: #C },
                supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ] }
define view I_JVAInfoRecordAttachLink
  with parameters
    @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JointVentureCompanyCodeVH',
                           element: 'CompanyCode' }
              }]
    P_CompanyCode  : bukrs,
    P_FiscalYear   : gjahr,
    P_FiscalPeriod : poper
  as select from I_JVABillingFileLink           as JVFile
    join         I_DocumentInfoRecordObjectLink as _DirObjectLinks on JVFile.ObjectKey = _DirObjectLinks.LinkedSAPObjectKey
    join         I_DocumentInfoRecordAttachment as _DirOriginals   on  _DirObjectLinks.DocumentInfoRecordDocType    = _DirOriginals.DocumentInfoRecordDocType
                                                                   and _DirObjectLinks.DocumentInfoRecordDocNumber  = _DirOriginals.DocumentInfoRecordDocNumber
                                                                   and _DirObjectLinks.DocumentInfoRecordDocPart    = _DirOriginals.DocumentInfoRecordDocPart
                                                                   and _DirObjectLinks.DocumentInfoRecordDocVersion = _DirOriginals.DocumentInfoRecordDocVersion

{
  @Consumption.valueHelpDefinition: [ 
             { entity:  { name:    'I_JointVentureCompanyCodeVH',
                           element: 'CompanyCode' }
              }]
  key JVFile.CompanyCode         as CompanyCode,
  key JVFile.FiscalYear          as FiscalYear,
  key JVFile.FiscalPeriod        as FiscalPeriod,
  @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JointVenturePartnerValueHelp',
                           element: 'JointVenturePartner' }
              }]  
  key JVFile.JointVenturePartner as JointVenturePartner,
  key JVFile.CreationDate        as CreationDate,
  key JVFile.ObjectKey           as LinkedSAPObjectKey,
  key JVFile.JVABillingFileType  as JVABillingFileType,
      _DirObjectLinks.DocumentInfoRecordDocType,
      _DirObjectLinks.DocumentInfoRecordDocNumber,
      _DirObjectLinks.DocumentInfoRecordDocPart,
      _DirObjectLinks.DocumentInfoRecordDocVersion,
      _DirObjectLinks.LinkedSAPObject,
      _DirOriginals.LogicalDocument,
      _DirOriginals.PhysicalDocument,
      _DirOriginals.WorkstationApplication
}
where
      JVFile.CompanyCode              = $parameters.P_CompanyCode
  and JVFile.FiscalYear               = $parameters.P_FiscalYear
  and JVFile.FiscalPeriod             = $parameters.P_FiscalPeriod
  and _DirObjectLinks.LinkedSAPObject = 'JVABILL'
```
