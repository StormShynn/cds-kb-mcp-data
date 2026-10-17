---
name: I_GR_ELECTRONICDOCINVOICE
description: "GR Electronicdocinvoice"
app_component: CA-GTF-CSC-EDO-GR
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
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - component:CA-GTF-CSC-EDO-GR
  - lob:Cross-Application Components
---
# I_GR_ELECTRONICDOCINVOICE

**GR Electronicdocinvoice**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-GR` |
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
| `ElectronicDocUUID` | ✓ | |  |  | `CHAR(32)` | eDocument: GUID |
| `GR_ElectronicDocRefDocNumber` |  | |  |  | `CHAR(16)` | Reference Document Number |
| `GR_ElectronicDocPrintTaskCode` |  | |  |  | `CHAR(5)` | Print Task Code |
| `GR_ElectronicDocSeriesPrefix` |  | |  |  | `CHAR(6)` | eDocument Greece: Series Prefix |
| `GR_ElectronicDocumentSeries` |  | |  |  | `CHAR(50)` | eDocument Greece: Series |
| `GR_ElectronicDocLegalNumber` |  | |  |  | `CHAR(50)` | eDocument Greece: Document Counter |
| `GR_ElectronicDocUniqueID` |  | |  |  | `CHAR(40)` | eDocument Greece: UID Unique Identification |
| `GR_ElectronicDocMarkID` |  | |  |  | `CHAR(20)` | eDocument Greece: MARK Identification |
| `GR_ElectronicDocClfnMarkID` |  | |  |  | `CHAR(20)` | eDocument Greece: Classifcation/Reject MARK Identification |
| `GR_ElectronicDocCancelMarkID` |  | |  |  | `CHAR(20)` | eDocument Greece: Cancel MARK Identification |
| `GR_ElectronicDocCustVATID` |  | |  |  | `CHAR(20)` | eDocument Greece: Customer VAT Id |
| `GR_ElectronicDocIssueDate` |  | |  |  | `DATS(8)` | eDocument Greece: Issue Date |
| `GR_ElectronicDocInvoiceType` |  | |  |  | `CHAR(5)` | eDocument Greece: Invoice Type |
| `GR_ElectronicDocSupplierVATID` |  | |  |  | `CHAR(20)` | eDocument Greece: Vendor VAT Id |
| `GR_ElectronicDocBranchID` |  | |  |  | `CHAR(10)` | eDocument Greece: Branch Id |
| `GR_ElectronicDocGrossAmount` |  | |  |  | `DEC(23)` | eDocument Greece: Amount |
| `GR_ElectronicDocPayableAmount` |  | |  |  | `DEC(23)` | eDocument Greece: Amount |
| `GR_ElectronicDocNetAmount` |  | |  |  | `DEC(23)` | eDocument Greece: Amount |
| `GR_ElectronicDocFuelInvoice` |  | |  |  | `CHAR(1)` | eDocument Greece: Fuel Invoice |
| `ElectronicDocCompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `ElectronicDocCountry` |  | |  |  | `CHAR(3)` | Company Country/Region |
| `ElectronicDocSourceType` |  | |  |  | `CHAR(10)` | eDocument Source Type |
| `ElectronicDocSourceKey` |  | |  |  | `CHAR(32)` | eDocument Source Key |
| `ElectronicDocType` |  | |  |  | `CHAR(10)` | eDocument Type |
| `ElectronicDocProcessStatus` |  | |  |  | `CHAR(10)` | eDocument Process Status |
| `ElectronicDocLogicalSystem` |  | |  |  | `CHAR(10)` | Logical System |
| `ElectronicDocLastChangedByUser` |  | |  |  | `CHAR(12)` | Changed by (User) |
| `ElectronicDocLastChangeDate` |  | |  |  | `DATS(8)` | Changed on (Date) |
| `ElectronicDocLastChangeTime` |  | |  |  | `TIMS(6)` | Changed On (Time) |
| `ElectronicDocCreatedByUser` |  | |  |  | `CHAR(12)` | Created By (User) |
| `ElectronicDocCreationDate` |  | |  |  | `DATS(8)` | Creation Date |
| `ElectronicDocCreationTime` |  | |  |  | `TIMS(6)` | Created on (Time) |
| `ElectronicDocSrceCreatedByUser` |  | |  |  | `CHAR(12)` | Source Document Created By (User) |
| `ElectronicDocProcess` |  | |  |  | `CHAR(10)` | eDocument Process |
| `ElectronicDocLastProcStep` |  | |  |  | `CHAR(10)` | eDocument Last Process Step |
| `ElectronicDocLastProcStepVar` |  | |  |  | `CHAR(10)` | eDocument: Variant of the Last Process Step |
| `ElectronicDocHasError` |  | |  |  | `CHAR(1)` | Error Flag |
| `ElectronicDocProcessVersion` |  | |  |  | `NUMC(4)` | eDocument Process Version |
| `ElectronicDocRefSqncNmbr` |  | |  |  | `NUMC(5)` | eDocument document reference sequence number |
| `ElectronicDocStatus` |  | |  |  | `CHAR(40)` | eDocument Status Overview |
| `ElectronicDocPostingDate` |  | |  |  | `DATS(8)` | Posting Date of the Source Document |
| `ElectronicDocIsContingency` |  | |  |  | `CHAR(1)` | eDocument is Created in Contingency |
| `ElectronicDocReferenceProcess` |  | |  |  | `CHAR(10)` | eDocument Reference Process |
| `ElectronicDocClassName` |  | |  |  | `CHAR(30)` | eDocument Class Name |
| `ElectronicDocIsArchPrprocgDone` |  | |  |  | `CHAR(1)` | Preprocessing for Archiving Completed |
| `ElectronicDocInterfaceType` |  | |  |  | `CHAR(10)` | Interface Type |
| `ElectronicDocApprovalIDValue` |  | |  |  |  |  |
| `ElectronicDocInterfaceUUID` |  | |  |  | `CHAR(32)` | Interface Message ID |
| `ElectronicDocFileUUID` |  | |  |  | `CHAR(32)` | File GUID |
| `ElectronicDocResponseCodeValue` |  | |  |  |  |  |
| `ElectronicDocInterfaceID` |  | |  |  | `CHAR(30)` | Interface |
| `ElectronicDocInterfaceVersion` |  | |  |  | `NUMC(4)` | eDocument Interface Version |
| `ElectronicDocIsCntdInArchive` |  | |  |  | `CHAR(1)` | Included in Archive Counter |
| `ElectronicDocMetaStatus` |  | |  |  | `CHAR(4)` | eDocument Status |
| `ElectronicDocProcessForStatus` |  | |  |  | `CHAR(10)` | eDocument Reference Process |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED 

@ObjectModel: {
  usageType:{
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #TRANSACTIONAL
  },
  supportedCapabilities: [#SQL_DATA_SOURCE, 
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET],
  modelingPattern: #NONE
}
 
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
 
@Metadata.ignorePropagatedAnnotations: true
 
@EndUserText.label: 'eDocument Greece Country/Region Specific Data'
 
define view entity I_GR_ElectronicDocInvoice
  as select from R_GR_ElectronicDocInvoice as GRInv
  inner join I_ElectronicDoc as EDoc on GRInv.ElectronicDocUUID = EDoc.ElectronicDocUUID
{

  key GRInv.ElectronicDocUUID,
      GRInv.GR_ElectronicDocRefDocNumber,
      GRInv.GR_ElectronicDocPrintTaskCode,
      GRInv.GR_ElectronicDocSeriesPrefix,
      GRInv.GR_ElectronicDocumentSeries,
      GRInv.GR_ElectronicDocLegalNumber,
      GRInv.GR_ElectronicDocUniqueID,
      GRInv.GR_ElectronicDocMarkID,
      GRInv.GR_ElectronicDocClfnMarkID,
      GRInv.GR_ElectronicDocCancelMarkID,
      GRInv.GR_ElectronicDocCustVATID,
      GRInv.GR_ElectronicDocIssueDate,
      GRInv.GR_ElectronicDocInvoiceType,
      GRInv.GR_ElectronicDocSupplierVATID,
      GRInv.GR_ElectronicDocBranchID,
      GRInv.GR_ElectronicDocGrossAmount,
      GRInv.GR_ElectronicDocPayableAmount,
      GRInv.GR_ElectronicDocNetAmount,
      GRInv.GR_ElectronicDocFuelInvoice,
      EDoc.ElectronicDocCompanyCode,
      EDoc.ElectronicDocCountry,
      EDoc.ElectronicDocSourceType,
      EDoc.ElectronicDocSourceKey,
      EDoc.ElectronicDocType,
      EDoc.ElectronicDocProcessStatus,
      EDoc.ElectronicDocLogicalSystem,
      EDoc.ElectronicDocLastChangedByUser,
      EDoc.ElectronicDocLastChangeDate,
      EDoc.ElectronicDocLastChangeTime,
      EDoc.ElectronicDocCreatedByUser,
      EDoc.ElectronicDocCreationDate,
      EDoc.ElectronicDocCreationTime,
      EDoc.ElectronicDocSrceCreatedByUser,
      EDoc.ElectronicDocProcess,
      EDoc.ElectronicDocLastProcStep,
      EDoc.ElectronicDocLastProcStepVar,    
      EDoc.ElectronicDocHasError,
      EDoc.ElectronicDocProcessVersion,
      EDoc.ElectronicDocRefSqncNmbr,
      EDoc.ElectronicDocStatus,
      EDoc.ElectronicDocPostingDate,
      EDoc.ElectronicDocIsContingency,
      EDoc.ElectronicDocReferenceProcess,
      EDoc.ElectronicDocClassName,
      EDoc.ElectronicDocIsArchPrprocgDone,
      EDoc.ElectronicDocInterfaceType,
      EDoc.ElectronicDocApprovalIDValue,
      EDoc.ElectronicDocInterfaceUUID,
      EDoc.ElectronicDocFileUUID,
      EDoc.ElectronicDocResponseCodeValue,
      EDoc.ElectronicDocInterfaceID,
      EDoc.ElectronicDocInterfaceVersion,
      EDoc.ElectronicDocIsCntdInArchive,
      EDoc.ElectronicDocMetaStatus,
      EDoc.ElectronicDocProcessForStatus      
      }
```
