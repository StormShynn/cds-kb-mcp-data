---
name: I_EVENTBASEDERRORSITUATION
description: "Eventbasederrorsituation"
app_component: CO-PC-OBJ-ORD-2CL
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
  - CO
  - CO-PC
  - CO-PC-OBJ
  - interface-view
  - component:CO-PC-OBJ-ORD-2CL
  - lob:Controlling
---
# I_EVENTBASEDERRORSITUATION

**Eventbasederrorsituation**

| Property | Value |
|---|---|
| App Component | `CO-PC-OBJ-ORD-2CL` |
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
| `EventbasedProductCostgErrorID` | ✓ | |  |  | `CHAR(36)` | Event-Based Product Costing Error ID |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `SystemMessageClass` |  | |  |  | `CHAR(20)` | Message Class |
| `SystemMessageNumber` |  | |  |  | `CHAR(3)` | Message number |
| `LogMessageText` |  | |  | `cast ( Text as le_msg_text)` | `CHAR(132)` | Message Text composed with variables |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Event-Based Error for Situation Handling'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #S,
  dataClass: #MIXED
}
//@VDM.private:false
@VDM.viewType:#COMPOSITE
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:[#SITUATION_ANCHOR, #SITUATION_TRIGGER, #SITUATION_DATACONTEXT]
@ObjectModel.semanticKey: ['EventbasedProductCostgErrorID']
define view entity I_EventBasedErrorSituation 
    as select from P_EvtBsdErrorSituation as error
{
    key EventbasedProductCostgErrorID,   
        CompanyCode,
        SystemMessageClass,
        @EndUserText.label: 'Message Number'
        SystemMessageNumber,
        cast ( Text as  le_msg_text)  as LogMessageText
}
```
