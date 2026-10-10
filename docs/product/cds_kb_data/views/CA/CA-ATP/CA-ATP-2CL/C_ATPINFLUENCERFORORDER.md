---
name: C_ATPINFLUENCERFORORDER
description: "The CDS view shows influencer-related information that affects Order Confirmations, resulting in non-confirmations or deferred delivery dates. For each availability check performed, an entry is created that clearly displays the determined quantities and dates — both before and after the check. The system persists the following influencing factors: Sales Product Availability Check (SLS_PAL) Capacity Product Availability Check (CAP_PAL) Product Availability Check (PAC) Check Horizon This gives you full visibility into how ATP reached a confirmation result. This CDS view provides the data to answer the following business questions: Which ATP influencers were active for a sales order item, and what quantity and delivery date did each one confirm or constrain? Why was a customer's requested delivery date pushed out or quantity reduced — which influencer or influencing factors caused the deviation? How has the ATP confirmation for a given order item evolved across multiple check runs over time? Which sales orders are currently being affected by each root influencer (supply chain check, sales planning, or capacity planning? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-ATP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ATPINFLUENCERFORORDER')/$value
semantic_en: "The CDS view shows influencer-related information that affects Order Confirmations, resulting in non-confirmations or deferred delivery dates. For each availability check performed, an entry is created that clearly displays the determined quantities and dates — both before and after the check. The system persists the following influencing factors: Sales Product Availability Check (SLS_PAL) Capacity Product Availability Check (CAP_PAL) Product Availability Check (PAC) Check Horizon This gives you full visibility into how ATP reached a confirmation result. This CDS view provides the data to answer the following business questions: Which ATP influencers were active for a sales order item, and what quantity and delivery date did each one confirm or constrain? Why was a customer's requested delivery date pushed out or quantity reduced — which influencer or influencing factors caused the deviation? How has the ATP confirmation for a given order item evolved across multiple check runs over time? Which sales orders are currently being affected by each root influencer (supply chain check, sales planning, or capacity planning? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - CA
  - bo:businesspartner
  - CA-ATP
  - CA-ATP-2CL
  - component:CA-ATP-2CL
  - consumption-view
  - customer
  - delivery
  - lob:cross_application components
  - order
  - plan
  - product
  - sales-order
  - metadata-only
---
# C_ATPINFLUENCERFORORDER

**The CDS view shows influencer-related information that affects Order Confirmations, resulting in non-confirmations or deferred delivery dates. For each availability check performed, an entry is created that clearly displays the determined quantities and dates — both before and after the check. The system persists the following influencing factors: Sales Product Availability Check (SLS_PAL) Capacity Product Availability Check (CAP_PAL) Product Availability Check (PAC) Check Horizon This gives you full visibility into how ATP reached a confirmation result. This CDS view provides the data to answer the following business questions: Which ATP influencers were active for a sales order item, and what quantity and delivery date did each one confirm or constrain? Why was a customer's requested delivery date pushed out or quantity reduced — which influencer or influencing factors caused the deviation? How has the ATP confirmation for a given order item evolved across multiple check runs over time? Which sales orders are currently being affected by each root influencer (supply chain check, sales planning, or capacity planning? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ATPINFLUENCERFORORDER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ATPInfluencerChkReqUUID` |  | |  |  | `RAW(16)` | ATP Influencer Check Request UUID |
| `ATPInfluencerUUID` |  | |  |  | `RAW(16)` | ATP Influencer UUID |
| `ATPInfluencerTopicUUID` |  | |  |  | `RAW(16)` | ATP Influencer Topic UUID |
| `ATPCheckUUID` |  | |  |  | `RAW(16)` | Check ID |
| `ATPInfluencerParentUUID` |  | |  |  | `RAW(16)` | ATP Influencer Parent UUID |
| `ATPInfluencerTopicParentUUID` |  | |  |  | `RAW(16)` | ATP Influencer Parent Topic UUID |
| `ATPRelevantDocumentCategory` |  | |  |  | `CHAR(2)` | Category of a Document Included in ATP Checks |
| `ATPRelevantDocument` |  | |  |  | `CHAR(10)` | Document Number |
| `ATPRelevantDocumentItem` |  | |  |  | `NUMC(6)` | Line Item Number |
| `ATPRelevantDocScheduleLine` |  | |  |  | `NUMC(4)` | Schedule Line Number |
| `ATPRelevantDocumentSubitem` |  | |  |  | `INT4(10)` | Subitem |
| `Product` |  | |  |  | `CHAR(40)` | Material Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `MRPArea` |  | |  |  | `CHAR(10)` | MRP Area |
| `RequestedDeliveryUTCDateTime` |  | |  |  | `DEC(15)` | Requested Delivery Timestamp in UTC |
| `RequestedDeliveryTimeZone` |  | |  |  | `CHAR(6)` | Time Zone |
| `RequestedQuantityInBaseUnit` |  | |  |  | `QUAN(15)` | Requested Quantity |
| `RequestedQuantityUnit` |  | |  |  | `UNIT(3)` | Unit |
| `ReqdProdAvailabilityUTCDateTme` |  | |  |  | `DEC(15)` | Requested Material Availability Timestamp in UTC |
| `ReqdProdAvailabilityTimeZone` |  | |  |  | `CHAR(6)` | Time Zone |
| `ATPInfluencerID` |  | |  |  | `CHAR(10)` | ATP Influencer Identifier |
| `ATPInfluencerName` |  | |  |  | `CHAR(60)` | ATP Influencer Name |
| `ATPInfluencerTopicID` |  | |  |  | `CHAR(20)` | ATP Influencer Topic |
| `ATPInfluencerTopicName` |  | |  |  | `CHAR(60)` | ATP Influencer Name |
| `ATPInfluencerTopicBfrDateTime` |  | |  |  | `DEC(15)` | ATP Influencer Datetime Before |
| `ATPInfluencerTopicAftDateTime` |  | |  |  | `DEC(15)` | ATP Influencer Datetime After |
| `TimeZoneID` |  | |  |  | `CHAR(6)` | ATP Influencer Timezone |
| `ATPInfluencerTopicBfrQuantity` |  | |  |  | `QUAN(13)` | ATP Influencer Quantity Before |
| `ATPInfluencerTopicAftQuantity` |  | |  |  | `QUAN(13)` | ATP Influencer Quantity After |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Unit |
| `ATPCheckSourceName` |  | |  |  | `CHAR(20)` | ABAP System Field: Current Transaction Code |
| `TriggeredByUser` |  | |  |  | `CHAR(12)` | Check Triggered By User |
| `ATPCheckStartUTCDateTime` |  | |  |  | `DEC(15)` | ATP Influencer Creation Datetime |
| `ATPCheckStartTimeZone` |  | |  |  | `CHAR(6)` | Time Zone |
