---
name: I_ACTIVECOMPLIANCERQMTVERSION
description: "Activecompliancerqmtversion"
semantic_vi: "View Activecompliancerqmtversion hiển thị các phiên bản yêu cầu tuân thủ và dữ liệu liên quan, hữu ích cho việc theo dõi các thay đổi của yêu cầu tuân thủ theo thời gian."
keywords:
  - "compliance requirement"
  - "yêu cầu tuân thủ"
  - "version"
  - "phiên bản"
  - "metadata"
  - "thông tin liên quan"
  - "activecompliancerqmtversion"
  - "ehs"
  - "ehs-sus"
  - "ehs-sus-ci"
  - "interface-view"
  - "component:ehs-sus-ci"
semantic_en: "The Activecompliancerqmtversion view exposes compliance requirement versions and their associated metadata, useful for tracking changes to compliance requirements over time."
app_component: EHS-SUS-CI
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
  - EHS
  - EHS-SUS
  - EHS-SUS-CI
  - interface-view
  - component:EHS-SUS-CI
  - lob:Other
---
# I_ACTIVECOMPLIANCERQMTVERSION

**Activecompliancerqmtversion**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-CI` |
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
| `CmplRqVersUUID` | ✓ | |  |  | `RAW(16)` | Compliance Requirement UUID |
| `CmplRqVers` |  | |  |  | `CHAR(40)` | Compliance Requirement Version ID |
| `ComplianceRequirement` |  | |  |  | `CHAR(30)` | Compliance Requirement |
| `CmplRqVersName` |  | |  |  | `CHAR(255)` | Name of the Compliance Requirement Version |
| `CmplRqVersBuildDateTime` |  | |  | `CmplRqVersBuildDate` | `DEC(15)` | Compliance Requirement Build Date |
| `EffectiveDate` |  | |  |  | `DATS(8)` | Effective Date |
| `CmplRqApplicationComponent` |  | |  |  | `CHAR(5)` | Request Initiator |
| `CmplRqDomain` |  | |  |  | `CHAR(21)` |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CmplRqVersActvtn` | `I_CmplRqVersActvtn` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Active Compliance Requirement Version'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    modelingPattern: #NONE,
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
    usageType:{
        dataClass: #MASTER,
        serviceQuality: #C,
        sizeCategory: #S
      }
}
@VDM.viewType: #COMPOSITE
define view entity I_ActiveComplianceRqmtVersion
  as select from I_CmplRqVersEnhanced
  association [1..1] to I_CmplRqVersActvtn as _CmplRqVersActvtn on $projection.CmplRqVersUUID = _CmplRqVersActvtn.CmplRqVersUUID
{
  key CmplRqVersUUID,
      CmplRqVers,
      ComplianceRequirement,
      CmplRqVersName,      
      CmplRqVersBuildDate as CmplRqVersBuildDateTime,
      EffectiveDate,
      CmplRqApplicationComponent,
      CmplRqDomain

}
where
  _CmplRqVersActvtn.CmplRqVersActivationStatus = 'A'
```
