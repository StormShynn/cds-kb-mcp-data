---
name: C_ATPINFLUENCERDETAIL
description: "C_ATPInfluencerDetail provides additional attributes for individual ATP influencers beyond the quantity and date information in the main view. While C_ATPInfluencerForOrder provides topic-level confirmation results, C_ATPInfluencerDetail provides influencer-specific supplementary data. This includes: The replenishment lead time horizon end date. The reason a check horizon was triggered. You can navigate directly from C_ATPInfluencerForOrder to C_ATPInfluencerDetail using the association _Detail. The system scopes this by influencer instance using ATPInfluencerUUID. This CDS view provides the data to answer the following business questions: What additional attributes did a specific ATP influencer evaluate during a check run? When does the replenishment lead time horizon end for a given influencer instance? Why was the check horizon triggered — was the requested delivery date within or beyond the replenishment lead time? What is the human-readable explanation for an influencer's supplementary result, where available? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-ATP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ATPINFLUENCERDETAIL')/$value
semantic_en: "C_ATPInfluencerDetail provides additional attributes for individual ATP influencers beyond the quantity and date information in the main view. While C_ATPInfluencerForOrder provides topic-level confirmation results, C_ATPInfluencerDetail provides influencer-specific supplementary data. This includes: The replenishment lead time horizon end date. The reason a check horizon was triggered. You can navigate directly from C_ATPInfluencerForOrder to C_ATPInfluencerDetail using the association _Detail. The system scopes this by influencer instance using ATPInfluencerUUID. This CDS view provides the data to answer the following business questions: What additional attributes did a specific ATP influencer evaluate during a check run? When does the replenishment lead time horizon end for a given influencer instance? Why was the check horizon triggered — was the requested delivery date within or beyond the replenishment lead time? What is the human-readable explanation for an influencer's supplementary result, where available? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - CA
  - bo:companycode
  - CA-ATP
  - CA-ATP-2CL
  - component:CA-ATP-2CL
  - consumption-view
  - delivery
  - lob:cross_application components
  - order
  - plan
  - metadata-only
---
# C_ATPINFLUENCERDETAIL

**C_ATPInfluencerDetail provides additional attributes for individual ATP influencers beyond the quantity and date information in the main view. While C_ATPInfluencerForOrder provides topic-level confirmation results, C_ATPInfluencerDetail provides influencer-specific supplementary data. This includes: The replenishment lead time horizon end date. The reason a check horizon was triggered. You can navigate directly from C_ATPInfluencerForOrder to C_ATPInfluencerDetail using the association _Detail. The system scopes this by influencer instance using ATPInfluencerUUID. This CDS view provides the data to answer the following business questions: What additional attributes did a specific ATP influencer evaluate during a check run? When does the replenishment lead time horizon end for a given influencer instance? Why was the check horizon triggered — was the requested delivery date within or beyond the replenishment lead time? What is the human-readable explanation for an influencer's supplementary result, where available? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-ATP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ATPINFLUENCERDETAIL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ATPInfluencerDetailUUID` |  | |  |  | `RAW(16)` | ATP Influencer Detail UUID |
| `ATPInfluencerUUID` |  | |  |  | `RAW(16)` | ATP Influencer UUID |
| `ATPInfluencerChkReqUUID` |  | |  |  | `RAW(16)` | ATP Influencer Check Request UUID |
| `ATPCheckUUID` |  | |  |  | `RAW(16)` | Check ID |
| `ATPInfluencerDetailID` |  | |  |  | `CHAR(60)` | ATP Influencer Detail |
| `ATPInfluencerDetailValue` |  | |  |  | `CHAR(60)` | ATP Influencer Detail Value |
| `ATPInfluencerDetailName` |  | |  |  | `CHAR(60)` | ATP Influencer Name |
| `ATPInfluencerDetailValueText` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
