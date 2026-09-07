---
name: I_JVAVENTURECOSTOBJECTDETS_2
description: "Jvaventurecostobjectdets 2"
app_component: CA-JVA
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
  - interface-view
  - component:CA-JVA
  - lob:Cross-Application Components
---
# I_JVAVENTURECOSTOBJECTDETS_2

**Jvaventurecostobjectdets 2**

| Property | Value |
|---|---|
| App Component | `CA-JVA` |
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
| `CompanyCode` | ✓ | | `_JointVentureMasterFld` | `CompanyCode` | `CHAR(4)` | Company Code |
| `JntOpgAgrmt` | ✓ | | `_JointVentureMasterFld` | `JntOpgAgrmt` | `CHAR(6)` | Joint Operating Agreement |
| `JointVenture` | ✓ | | `_JointVentureMasterFld` | `JointVenture` | `CHAR(6)` | Joint Venture |
| `CostCenter` | ✓ | | `_JointVentureCostCenter` | `CostCenter` | `CHAR(10)` | Cost Center |
| `WBSElement` | ✓ | | `_JointVentureProjectData` | `WBSElement` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `InternalOrder` | ✓ | | `_JointVentureOrderData` | `InternalOrder` | `CHAR(12)` | Order Number |
| `JntOpgAgrmtClass` |  | | `_JntOpgAgrmt` | `JntOpgAgrmtClass` | `CHAR(2)` | Joint Operating Agreement Class |
| `JointVentureType` |  | | `_JointVentureMasterFld` | `JointVentureType` | `CHAR(1)` | Venture Type |
| `JointVentureOperator` |  | | `_JointVentureMasterFld` | `JointVentureOperator` | `CHAR(10)` | Operator for Non-Operated Venture |
| `JVAVentureClass` |  | | `_JointVentureMasterFld` | `JVAVentureClass` | `CHAR(2)` | Venture Class |
| `JntVntrBillgCutbackIsBlk` |  | | `_JointVentureMasterFld` | `JntVntrBillgCutbackIsBlk` | `CHAR(1)` | Block Joint Venture for Cutback and Billing |
| `JntVntrDrillingPayRate` |  | | `_JointVentureMasterFld` | `JntVntrDrillingPayRate` | `DEC(5)` | % Drilling Payroll Burden in U.S. |
| `JntVntrNonDrillingPayRate` |  | | `_JointVentureMasterFld` | `JntVntrNonDrillingPayRate` | `DEC(5)` | Non-Drilling % to Apply for U.S. Payroll Burden Clearing |
| `JntVntrParentCoOvhdExpnCostCtr` |  | | `_JointVentureMasterFld` | `JntVntrParentCoOvhdExpnCostCtr` | `CHAR(10)` | Cost Centre for posting PCO expense |
| `JntVntrParentCoOvhdProject` |  | | `_JointVentureMasterFld` | `JntVntrParentCoOvhdProject` | `NUMC(8)` | WBS Element |
| `JntVntrParentCoOvhdExpnOrder` |  | | `_JointVentureMasterFld` | `JntVntrParentCoOvhdExpnOrder` | `CHAR(12)` | Parent Company Overhead Expense Order |
| `JntVntrSubstituteCostCtr` |  | | `_JointVentureMasterFld` | `JntVntrSubstituteCostCtr` | `CHAR(10)` | Substitute Cost Centre |
| `JntVntrProperty` |  | | `_JointVentureMasterFld` | `JntVntrProperty` | `CHAR(24)` | JV Property ID |
| `ControllingArea` |  | | `_JointVentureCostCenter` | `ControllingArea` | `CHAR(4)` | Controlling Area |
| `ValidityEndDate` |  | | `_JointVentureCostCenter` | `ValidityEndDate` | `DATS(8)` | Valid To Date |
| `ValidityStartDate` |  | | `_JointVentureCostCenter` | `ValidityStartDate` | `DATS(8)` | Valid-From Date |
| `CostCenterCategory` |  | | `_JointVentureCostCenter` | `CostCenterCategory` | `CHAR(1)` | Cost Center Category |
| `ProfitCenter` |  | | `_JointVentureCostCenter` | `ProfitCenter` | `CHAR(10)` | Profit Center |
| `FunctionalArea` |  | | `_JointVentureCostCenter` | `FunctionalArea` | `CHAR(16)` | Functional Area |
| `JointVentureRecoveryCode` |  | | `_JointVentureCostCenter` | `JointVentureRecoveryCode` | `CHAR(2)` | Recovery Indicator |
| `JointVentureEquityType` |  | | `_JointVentureCostCenter` | `JointVentureEquityType` | `CHAR(3)` | Equity Type |
| `JointVentureObjectType` |  | | `_JointVentureCostCenter` | `JointVentureObjectType` | `CHAR(4)` | Joint Venture Object Type |
| `JointVentureClass` |  | | `_JointVentureCostCenter` | `JointVentureClass` | `CHAR(3)` | JIB/JIBE Class |
| `JointVentureSubClass` |  | | `_JointVentureCostCenter` | `JointVentureSubClass` | `CHAR(5)` | JIB/JIBE Subclass A |
| `WBSDescription` |  | | `_JointVentureProjectData` | `WBSDescription` | `CHAR(40)` | Work Breakdown Structure Element Name |
| `WBSElementShortID` |  | | `_JointVentureProjectData` | `WBSElementShortID` | `CHAR(16)` | WBS element short identification |
| `ProjectType` |  | | `_JointVentureProjectData` | `ProjectType` | `CHAR(2)` | Project Type |
| `WBSElementHierarchyLevel` |  | | `_JointVentureProjectData` | `WBSElementHierarchyLevel` | `INT1(3)` | Level in Project Hierarchy |
| `WBSElementIsPlanningElement` |  | | `_JointVentureProjectData` | `WBSElementIsPlanningElement` | `CHAR(1)` | Indicator: Planning element |
| `WBSIsAccountAssignmentElement` |  | | `_JointVentureProjectData` | `WBSIsAccountAssignmentElement` | `CHAR(1)` | Indicator: Account assignment element |
| `WBSElementIsBillingElement` |  | | `_JointVentureProjectData` | `WBSElementIsBillingElement` | `CHAR(1)` | Indicator: Billing element |
| `NetworkAssignmentType` |  | | `_JointVentureProjectData` | `NetworkAssignmentType` | `NUMC(1)` | Network assignment |
| `RequestingCostCenter` |  | | `_JointVentureProjectData` | `RequestingCostCenter` | `CHAR(10)` | Requesting cost center |
| `ResponsibleCostCenter` |  | | `_JointVentureProjectData` | `ResponsibleCostCenter` | `CHAR(10)` | Responsible Cost Center |
| `FunctionalLocation` |  | | `_JointVentureProjectData` | `FunctionalLocation` | `CHAR(30)` | Functional location |
| `JointVentureCostRecoveryCode` |  | | `_JointVentureProjectData` | `JointVentureCostRecoveryCode` | `CHAR(2)` | Recovery Indicator |
| `JntVntrProjectType` |  | | `_JointVentureProjectData` | `JntVntrProjectType` | `CHAR(4)` | Joint Venture Object Type |
| `OrderType` |  | | `_JointVentureOrderData` | `OrderType` | `CHAR(4)` | Order Type |
| `OrderCategory` |  | | `_JointVentureOrderData` | `OrderCategory` | `NUMC(2)` | Order Category |
| `ReferenceOrder` |  | | `_JointVentureOrderData` | `ReferenceOrder` | `CHAR(12)` | Reference Order Number |
| `InternalOrderDescription` |  | | `_JointVentureOrderData` | `InternalOrderDescription` | `CHAR(40)` | Internal Order Description |
| `Currency` |  | | `_CompanyCode` | `Currency` | `CUKY(5)` | Currency Key |
| `_CompanyCode` | | ✓ | | | | |
| `_JntOpgAgrmt` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_JntOpgAgrmt` | `I_JntOpgAgrmt` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVACOSTOBJECT_2'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true 
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Joint Venture Cost Object Details'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: { dataCategory: #CUBE,
              internalName: #LOCAL }
@ObjectModel: { usageType: { sizeCategory: #XL,
                             dataClass:  #MIXED,
                             serviceQuality: #D },
                supportedCapabilities: [#ANALYTICAL_PROVIDER,#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #UI_PROVIDER_PROJECTION_SOURCE ],
                modelingPattern: #ANALYTICAL_CUBE }
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #COMPOSITE
      }
// This view is successor view of deprecated view I_JVAVentureCostObjectDetails
define view I_JVAVentureCostObjectDets_2
  as select from            I_JointVentureMasterFld as _JointVentureMasterFld

    left outer to many join I_CostCenter            as _JointVentureCostCenter  on  _JointVentureMasterFld.CompanyCode  = _JointVentureCostCenter.CompanyCode
                                                                                and _JointVentureMasterFld.JointVenture = _JointVentureCostCenter.JointVenture

    left outer to many join I_WBSElementData_2      as _JointVentureProjectData on  _JointVentureMasterFld.CompanyCode  = _JointVentureProjectData.CompanyCode
                                                                                and _JointVentureMasterFld.JointVenture = _JointVentureProjectData.JointVenture

    left outer to many join I_JointVentureOrderData as _JointVentureOrderData   on  _JointVentureMasterFld.CompanyCode  = _JointVentureOrderData.CompanyCode
                                                                                and _JointVentureMasterFld.JointVenture = _JointVentureOrderData.JointVenture

  association [1..1] to I_CompanyCode as _CompanyCode on  $projection.CompanyCode = _CompanyCode.CompanyCode

  association [1..1] to I_JntOpgAgrmt as _JntOpgAgrmt on  _JointVentureMasterFld.CompanyCode = _JntOpgAgrmt.CompanyCode
                                                      and _JointVentureMasterFld.JntOpgAgrmt = _JntOpgAgrmt.JntOpgAgrmt

{
        @ObjectModel.foreignKey.association: '_CompanyCode'
        @Consumption.valueHelpDefinition: [
             { entity:  { name:    'I_JointVentureCompanyCodeVH',
                          element: 'CompanyCode' }
             }]
  key   _JointVentureMasterFld.CompanyCode,

        @ObjectModel.text.element: [ 'JntOpgAgrmtText' ]
        @Consumption.valueHelpDefinition: [
            { entity:  { name:    'I_JNTOPGAGRMTVH',
                         element: 'JntOpgAgrmt' }
            }]
  key   _JointVentureMasterFld.JntOpgAgrmt,

        @Consumption.valueHelpDefinition: [
                   { entity:  { name:    'I_JntVntrValueHelp',
                                element: 'JointVenture' }
                   }]
        @ObjectModel.text.element: [ 'JointVentureName' ]
  key   _JointVentureMasterFld.JointVenture,

        @Consumption.valueHelpDefinition: [
                          { entity:  { name:    'I_CostCenterStdVH',
                                       element: 'CostCenter' }
                          }]
        @ObjectModel.text.element: [ 'CostCenterName' ]
  key   _JointVentureCostCenter.CostCenter,

        @Consumption.valueHelpDefinition: [
                                 { entity:  { name:    'I_WBSELEMENTBASICDATASTDVH',
                                              element: 'WBSElementInternalID' }
                                 }]
        @ObjectModel.text.element: [ 'WBSDescription' ]
  key   _JointVentureProjectData.WBSElement,

        @Consumption.valueHelpDefinition: [
                                        { entity:  { name:    'I_InternalOrderStdVH',
                                                     element: 'InternalOrder' }
                                        }]
        @ObjectModel.text.element: [ 'InternalOrderDescription' ]
  key   _JointVentureOrderData.InternalOrder,

        _JntOpgAgrmt._JntOpgAgrmtText[1:Language = $session.system_language].JntOpgAgrmtText,

        _JntOpgAgrmt.JntOpgAgrmtClass,

        _JointVentureMasterFld._JointVentureDesc[1:Language = $session.system_language].JointVentureName,

        _JointVentureMasterFld.JointVentureType,

        _JointVentureMasterFld.JointVentureOperator,

        _JointVentureMasterFld.JVAVentureClass,

        _JointVentureMasterFld.JntVntrBillgCutbackIsBlk,

        _JointVentureMasterFld.JntVntrDrillingPayRate,

        _JointVentureMasterFld.JntVntrNonDrillingPayRate,

        _JointVentureMasterFld.JntVntrParentCoOvhdExpnCostCtr,

        _JointVentureMasterFld.JntVntrParentCoOvhdProject,

        _JointVentureMasterFld.JntVntrParentCoOvhdExpnOrder,

        _JointVentureMasterFld.JntVntrSubstituteCostCtr,

        _JointVentureMasterFld.JntVntrProperty,

        _JointVentureCostCenter.ControllingArea,

        _JointVentureCostCenter._Text[1:Language = $session.system_language].CostCenterName,

        _JointVentureCostCenter.ValidityEndDate,

        _JointVentureCostCenter.ValidityStartDate,

        _JointVentureCostCenter.CostCenterCategory,

        _JointVentureCostCenter.ProfitCenter,

        _JointVentureCostCenter.FunctionalArea,

        _JointVentureCostCenter.JointVentureRecoveryCode,

        _JointVentureCostCenter.JointVentureEquityType,

        _JointVentureCostCenter.JointVentureObjectType,

        _JointVentureCostCenter.JointVentureClass,

        _JointVentureCostCenter.JointVentureSubClass,

        _JointVentureProjectData.WBSDescription,

        _JointVentureProjectData.WBSElementShortID,

        _JointVentureProjectData.ProjectType,

        _JointVentureProjectData.WBSElementHierarchyLevel,

        _JointVentureProjectData.WBSElementIsPlanningElement,

        _JointVentureProjectData.WBSIsAccountAssignmentElement,

        _JointVentureProjectData.WBSElementIsBillingElement,

        _JointVentureProjectData.NetworkAssignmentType,

        _JointVentureProjectData.RequestingCostCenter,

        _JointVentureProjectData.ResponsibleCostCenter,

        _JointVentureProjectData.FunctionalLocation,

        _JointVentureProjectData.JointVentureCostRecoveryCode,

        _JointVentureProjectData.JntVntrProjectType,

        _JointVentureOrderData.OrderType,

        _JointVentureOrderData.OrderCategory,

        _JointVentureOrderData.ReferenceOrder,

        _JointVentureOrderData.InternalOrderDescription,

        _CompanyCode,
        _CompanyCode.Currency,
        _JntOpgAgrmt

}
```
