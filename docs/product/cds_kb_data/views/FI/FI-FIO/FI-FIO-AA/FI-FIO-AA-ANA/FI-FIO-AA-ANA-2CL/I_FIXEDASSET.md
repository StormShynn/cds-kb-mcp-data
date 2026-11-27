---
name: I_FIXEDASSET
description: "Fixed Asset"
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - interface-view
  - fixed-asset
  - component:FI-FIO-AA-ANA-2CL
  - lob:Finance
  - bo:Asset
---
# I_FIXEDASSET

**Fixed Asset**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `comp_code` | `CHAR(4)` | Company Code |
| `MasterFixedAsset` | ✓ | |  | `asset_no` | `CHAR(12)` | Main Asset Number |
| `FixedAsset` | ✓ | |  | `asset_subno` | `CHAR(4)` | Asset Subnumber |
| `FixedAssetExternalID` |  | |  | `case when root.asset_subno = '0000' then cast( concat(ltrim(root.asset_no, '0'), '-0' ) as fis_fixedasset_ext_id) when root.asset_subno <> '0000' then cast( concat(concat( ltrim(root.asset_no, '0') , '-' ), ltrim(root.asset_subno, '0' )) as fis_fixedasset_ext_id) end` | `CHAR(17)` | Asset Number |
| `AssetClass` |  | |  | `asset_class` | `CHAR(8)` | Asset Class |
| `AssetSerialNumber` |  | |  | `serial_number` | `CHAR(18)` | Serial Number |
| `Quantity` |  | |  | `cast( 0 as am_menge )` | `QUAN(13)` | Quantity |
| `BaseUnit` |  | |  | `base_unit` | `UNIT(3)` | Base Unit of Measure |
| `Inventory` |  | |  | `inventory_number` | `CHAR(25)` | Inventory Number |
| `FixedAssetDescription` |  | |  | `description` | `CHAR(50)` | Asset Description |
| `AssetAdditionalDescription` |  | |  | `add_description` | `CHAR(50)` | Additional asset description |
| `Currency` |  | |  | `waers` | `CUKY(5)` | Currency Key |
| `OriglAcqnAmtInCoCodeCrcy` |  | |  | `cast( 0 as urwrt )` | `CURR(23)` | Original Acquisition Value |
| `PartnerCompany` |  | |  | `trade_id` | `CHAR(6)` | Company ID of Trading Partner |
| `AssetManufacturerName` |  | |  | `manufacturer` | `CHAR(30)` | Manufacturer of Asset |
| `InHouseProdnPercent` |  | |  | `inhouse_prod_percent` | `DEC(5)` | In-House Production Percentage |
| `AssetSupplierName` |  | |  | `cast( '' as liefe )` | `CHAR(30)` | Name of Asset Supplier |
| `InventoryNote` |  | |  | `inventory_note` | `CHAR(15)` | Supplementary Inventory Specifications |
| `Group1AssetEvaluationKey` |  | |  | `cast( '' as ord41 )` | `CHAR(4)` | Evaluation Group 1 |
| `Group2AssetEvaluationKey` |  | |  | `cast( '' as ord42 )` | `CHAR(4)` | Evaluation Group 2 |
| `Group3AssetEvaluationKey` |  | |  | `cast( '' as ord43 )` | `CHAR(4)` | Evaluation Group 3 |
| `Group4AssetEvaluationKey` |  | |  | `cast( '' as ord44 )` | `CHAR(4)` | Evaluation Group 4 |
| `Group5AssetEvaluationKey` |  | |  | `cast( '' as gdlgrp )` | `CHAR(8)` | Evaluation Group 5 |
| `AssetAccountDetermination` |  | |  | `gl_account_det` | `CHAR(8)` | Account Determination |
| `HasHistory` |  | |  | `cast( root.is_historical_managed as aneqk )` | `NUMC(1)` | Indicator: Historical Management |
| `AssetCapitalizationDate` |  | |  | `cast( '00000000' as aktivd )` | `DATS(8)` | Asset Capitalization Date |
| `FirstAcquisitionFiscalYear` |  | |  | `cast( '0000' as dzujahr )` | `NUMC(4)` | Fiscal Year in Which First Acquisition Was Posted |
| `FirstAcquisitionFiscalPeriod` |  | |  | `cast( '000' as dzuper )` | `NUMC(3)` | Period in Which First Acquisition Was Posted |
| `AssetDeactivationDate` |  | |  | `cast( '00000000' as deakt )` | `DATS(8)` | Deactivation Date |
| `PlannedRetirementDate` |  | |  | `cast( '00000000' as gplab )` | `DATS(8)` | Planned Retirement Date |
| `FixedAssetOrderDate` |  | |  | `purchase_order_date` | `DATS(8)` | Asset Purchase Order Date |
| `OriginalMasterFixedAsset` |  | |  | `original_asset` | `CHAR(12)` | Original Asset That Was Transferred |
| `FixedAssetGroup` |  | |  | `asset_super_no` | `CHAR(12)` | Asset Super Number |
| `InvestmentReason` |  | |  | `invest_reason` | `CHAR(2)` | Reason for Investment |
| `AssetIsRealEstate` |  | |  | `real_estate_asset` | `NUMC(1)` | Indicator: Real Estate |
| `AreaSizeUnit` |  | |  | `surface_area_unit` | `UNIT(3)` | Area Unit |
| `InvestmentOrder` |  | |  | `investment_io_origin` | `CHAR(12)` | Investment Order |
| `InvestmentProjectWBSElement_2` |  | |  | `cast( main.investment_wbs_origin as faa_inv_wbs_element_int preserving type )` | `NUMC(8)` | Asset WBS Element (Internal ID) |
| `InvestmentProjectWBSElement` |  | |  | `investment_wbs_origin` | `NUMC(8)` | WBS Element of Investment Project |
| `InventoryIsCounted` |  | |  | `inventory_indicator` | `CHAR(1)` | Inventory Indicator |
| `LastInventoryDate` |  | |  | `inventory_date` | `DATS(8)` | Last Inventory Date |
| `AssetSynchronizationRule` |  | |  | `cast( '' as aapm_act_change_pm )` | `CHAR(1)` | Change Asset Master Record from Equipment Master |
| `OriginalAcquisitionFiscalYear` |  | |  | `original_acq_year` | `NUMC(4)` | Fiscal Year of Original Acquisition |
| `AssetTypeName` |  | |  | `asset_type_name` | `CHAR(15)` | Asset type name |
| `Supplier` |  | |  | `supplier_no` | `CHAR(10)` | Account Number of Supplier (Other Key Word) |
| `AssetCountryOfOrigin` |  | |  | `origin_country` | `CHAR(3)` | Asset's Country/Region of Origin |
| `NoticeOfAssessmentTaxID` |  | |  | `assessment_tax_number` | `CHAR(16)` | Tax Number of the Notice of Assessment |
| `LastAssessmentNoticeDate` |  | |  | `assessment_date` | `DATS(8)` | Date of Last Notice of Assessment |
| `EnvrnmtlInvestmentReason` |  | |  | `environmental_investment` | `CHAR(5)` | Reason for Environmental Investment |
| `LastChangeDate` |  | |  | `case when main.lastchange_datetime = 0 then cast( '00000000' as fis_aedat_anla ) when main.lastchange_datetime <> 0 then cast( substring( cast( main.lastchange_datetime as char17 ), 1, 8 ) as fis_aedat_anla) end` | `DATS(8)` | Changed On |
| `FixedAssetFinDataCmpltns` |  | |  | `cast(root.completeness_status as aneqs)` | `NUMC(1)` | Completeness indicator for the asset |
| `AccountIsMarkedForDeletion` |  | |  | `case when root.lifecycle_status = '2' then cast( 'X' as xloev ) when root.lifecycle_status <> '2' then cast( '' as xloev ) end` | `CHAR(1)` | Indicator: Account Marked for Deletion? |
| `AccountIsBlockedForPosting` |  | |  | `cast( root.is_blocked as xspeb_anla )` | `CHAR(1)` | Indicator: Asset Locked to Acquisition Postings |
| `AcquisitionValueDate` |  | |  | `cast( '00000000' as dzugdat )` | `DATS(8)` | Asset Value Date of the First Posting |
| `OriginalFixedAssetValueDate` |  | |  | `original_acq_date` | `DATS(8)` | Original Acquisition Date of AuC/ Transferred Asset |
| `AssetUnderConstIsInvmtMsr` |  | |  | `case when root.auc_status = '2' then cast( 'X' as im_xinvm ) when root.auc_status <> '2' then cast( '' as im_xinvm ) end` | `CHAR(1)` | Asset under Construction for Investment Measures |
| `LastRetirementValueDate` |  | |  | `cast( '00000000' as abgdat )` | `DATS(8)` | Asset Value Date for the Last Retirement |
| `LastChangedByUser` |  | |  | `lastchange_user` | `CHAR(12)` | Name of Person Who Changed Object |
| `FixedAssetPropertyType` |  | |  | `property_ind` | `CHAR(1)` | Property Indicator |
| `CreationDate` |  | |  | `cast( substring( cast( main.creation_datetime as char17 ), 1, 8 ) as erdat )` | `DATS(8)` | Record Creation Date |
| `CreatedByUser` |  | |  | `creation_user` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `ManualDepreciationReason` |  | |  | `cast( '' as grund )` | `CHAR(3)` | Reason for Manual Valuation of Net Assets |
| `LastReorganizationDate` |  | |  | `last_reorg_date` | `DATS(8)` | Date of Last Reorganization |
| `LegacyDataTransferDate` |  | |  | `legacy_transfer_date` | `DATS(8)` | Legacy Data Transfer Date |
| `IsGroupAsset` |  | |  | `cast( '' as xanlgr_1 )` | `CHAR(1)` | Indicator: Asset is a Group Asset |
| `IsLineItemSettled` |  | |  | `case when root.auc_status = '1' then cast( 'X' as opvwa ) when root.auc_status <> '1' then cast( '' as opvwa ) end` | `CHAR(1)` | Asset Under Construct. with Line Item Settlement |
| `OriginalFixedAsset` |  | |  | `original_subasset` | `CHAR(4)` | Original Asset That Was Transferred |
| `MasterFixedAssetSearchTerm` |  | |  | `cast( main.description as mcoa1 )` | `CHAR(30)` | Search term for matchcode search |
| `AssetStatusAtPurchase` |  | |  | `case when main.asset_acquired_used = 'X' then cast( 'X' as fis_asset_purchased_new_or_usd ) when not main.asset_acquired_used = 'X' then cast( 'N' as fis_asset_purchased_new_or_usd ) end` | `CHAR(1)` | Asset Status at Purchase: New, Used or Unknown |
| `AssetIsAcquiredUsed` |  | |  | `asset_acquired_used` | `CHAR(1)` | Asset Acquired Used |
| `IsMainAsset` |  | |  | `is_main_asset` | `CHAR(1)` | Indicator for Main Asset |
| `AssetLifecycleStatus` |  | |  | `lifecycle_status` | `CHAR(1)` | Lifecycle Status |
| `AssetCompletenessStatus` |  | |  | `completeness_status` | `CHAR(1)` | Completeness Status |
| `AssetUnderConstructionStatus` |  | |  | `auc_status` | `CHAR(1)` | Asset Under Construction Status |
| `AssetCreationValidityDate` |  | |  | `validity_date` | `DATS(8)` | Validity Date from Asset Class |
| `CreationDateTime` |  | |  | `creation_datetime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `LastChangeDateTime` |  | |  | `lastchange_datetime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `AssetScreenLayout` |  | |  | `screen_layout` | `CHAR(20)` | Layout for Asset Master Data |
| `OriginalAcquisitionAmount` |  | |  | `original_acq_value` | `CURR(23)` | Original Acquisition Value |
| `OriginalAcquisitionCurrency` |  | |  | `original_acq_value_curr` | `CUKY(5)` | Original Acquisition Value Currency |
| `PropertyClass` |  | |  | `property_key` | `CHAR(4)` | Property Classification Key |
| `LocalTaxOffice` |  | |  | `land_tax_office` | `CHAR(25)` | Local Tax Office |
| `Municipality` |  | |  | `land_municipality` | `CHAR(25)` | Municipality |
| `LandRegisterDate` |  | |  | `land_register_of` | `DATS(8)` | Land Register of |
| `LandRegisterEntrySequence` |  | |  | `land_register_entry_number` | `CHAR(4)` | Land Register Entry: Sequence Number |
| `LandRegisterEntryDate` |  | |  | `land_register_entry` | `DATS(8)` | Land Register Entry on |
| `LandRegisterVolume` |  | |  | `land_register_volume` | `CHAR(5)` | Land Register Volume |
| `LandRegisterPage` |  | |  | `land_register_page` | `CHAR(5)` | Land Register Page |
| `LandRegisterMap` |  | |  | `land_register_map_no` | `CHAR(4)` | Land Register Map Number |
| `LandPlot` |  | |  | `land_plot_number` | `CHAR(10)` | Plot Number |
| `ConveyanceDate` |  | |  | `conveyance_date` | `DATS(8)` | Date of Conveyance |
| `AreaSize` |  | |  | `surface_area` | `QUAN(13)` | Surface Area |
| `LeaseSupplier` |  | |  | `lease_company` | `CHAR(10)` | Leasing Company |
| `LeaseAgreement` |  | |  | `lease_agreement_no` | `CHAR(15)` | Leasing agreement number |
| `LeaseAgreementDate` |  | |  | `lease_agreement_date` | `DATS(8)` | Leasing Agreement Date |
| `LeaseTermEndDate` |  | |  | `lease_notice_date` | `DATS(8)` | Leasing Agreement Notice Date |
| `LeaseTermStartDate` |  | |  | `lease_start_date` | `DATS(8)` | Lease Start Date |
| `LeaseDurationInFiscalYears` |  | |  | `lease_years` | `NUMC(3)` | Length of Lease in Years |
| `LeaseDurationInFiscalPeriods` |  | |  | `lease_periods` | `NUMC(3)` | Length of Lease in Periods |
| `LeaseType` |  | |  | `lease_type` | `CHAR(2)` | Leasing type |
| `LeasedAssetNote` |  | |  | `lease_data_text` | `CHAR(50)` | Leasing data text |
| `LegacyAsset` |  | |  | `cast( main.legacy_asset_no as faa_legacyasset )` | `CHAR(16)` | Legacy Asset Number |
| `LegacyFixedAssetCompanyCode` |  | |  | `legacy_comp_code` | `CHAR(80)` | Legacy Fixed Asset Company Code |
| `LegacyMasterFixedAsset` |  | |  | `legacy_asset_no` | `CHAR(80)` | Legacy Main Asset Number |
| `LegacyFixedAsset` |  | |  | `legacy_asset_subno` | `CHAR(5)` | Legacy Asset Subnumber |
| `LegacyDataTransferSequence` |  | |  | `legacy_transfer_seq_no` | `NUMC(5)` | Legacy Data Transfer - sequence number |
| `AssetIsForPostCapitalization` |  | |  | `is_post_capitalization` | `CHAR(1)` | Fixed Asset with Post-Capitalization |
| `AssetAuthorizationContext` |  | |  | `cast( 'NEW' as faa_authcntxt )` | `CHAR(10)` | Asset Authorization Context |
| `ObjectInternalID` |  | |  | `object_nr` | `CHAR(22)` | Object Number |
| `_FixedAssetAssgmt` | | ✓ | | | | |
| `_FixedAssetDeprArea` | | ✓ | | | | |
| `_AssetValuationForLedger` | | ✓ | | | | |
| `_FixedAssetForLedger` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_MasterFixedAsset` | | ✓ | | | | |
| `_AssetClass` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_PartnerCompany` | | ✓ | | | | |
| `_AssetAccountDetermination` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_AssetCountryOfOrigin` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_Group1AssetEvaluationKey` | | ✓ | | | | |
| `_Group2AssetEvaluationKey` | | ✓ | | | | |
| `_Group3AssetEvaluationKey` | | ✓ | | | | |
| `_Group4AssetEvaluationKey` | | ✓ | | | | |
| `_Group5AssetEvaluationKey` | | ✓ | | | | |
| `_InvestmentReason` | | ✓ | | | | |
| `_EnvrnmtlInvestmentReason` | | ✓ | | | | |
| `_FixedAssetFinDataCmpltns` | | ✓ | | | | |
| `_FixedAssetPropertyType` | | ✓ | | | | |
| `_ManualDepreciationReason` | | ✓ | | | | |
| `_FixedAssetGroup` | | ✓ | | | | |
| `_InvestmentOrder` | | ✓ | | | | |
| `_InvestmentWBSElement` | | ✓ | | | | |
| `_AssetLifecycleStatus` | | ✓ | | | | |
| `_AssetCompletenessStatus` | | ✓ | | | | |
| `_AssetUnderConstructionStatus` | | ✓ | | | | |
| `_AssetStatusAtPurchase` | | ✓ | | | | |
| `_FixedAssetCountryData` | | ✓ | | | | |
| `_GlobAssetAssignment` | | ✓ | | | | |
| `_OriginalAcquisitionCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FixedAssetAssgmt` | `I_FixedAssetAssgmt` | [0..*] |
| `_FixedAssetDeprArea` | `I_FixedAssetDeprArea` | [0..*] |
| `_AssetValuationForLedger` | `I_AssetValuationForLedger` | [0..*] |
| `_FixedAssetForLedger` | `I_FixedAssetForLedger` | [0..*] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_MasterFixedAsset` | `I_MasterFixedAsset` | [0..1] |
| `_AssetClass` | `I_AssetClass` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_PartnerCompany` | `I_Globalcompany` | [0..1] |
| `_AssetAccountDetermination` | `I_AssetAcctDetermination` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_AssetCountryOfOrigin` | `I_Country` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_Group1AssetEvaluationKey` | `I_Group1AssetEvaluationKey` | [0..1] |
| `_Group2AssetEvaluationKey` | `I_Group2AssetEvaluationKey` | [0..1] |
| `_Group3AssetEvaluationKey` | `I_Group3AssetEvaluationKey` | [0..1] |
| `_Group4AssetEvaluationKey` | `I_Group4AssetEvaluationKey` | [0..1] |
| `_Group5AssetEvaluationKey` | `I_Group5AssetEvaluationKey` | [0..1] |
| `_InvestmentReason` | `I_InvestmentReason` | [0..1] |
| `_EnvrnmtlInvestmentReason` | `I_EnvrnmtlInvestmentReason` | [0..1] |
| `_FixedAssetFinDataCmpltns` | `I_FixedAssetFinDataCmpltns` | [0..1] |
| `_FixedAssetPropertyType` | `I_FixedAssetPropertyType` | [0..1] |
| `_ManualDepreciationReason` | `I_ManualDepreciationReason` | [0..1] |
| `_FixedAssetGroup` | `I_FixedAssetGroup` | [0..1] |
| `_InvestmentOrder` | `I_InternalOrder` | [0..1] |
| `_InvestmentWBSElement` | `I_WBSElementBasicData` | [0..1] |
| `_AssetLifecycleStatus` | `I_AssetLifecycleStatus` | [0..1] |
| `_AssetCompletenessStatus` | `I_AssetCompletenessStatus` | [0..1] |
| `_AssetUnderConstructionStatus` | `I_AssetUnderConstructionStatus` | [0..1] |
| `_AssetStatusAtPurchase` | `I_AssetStatusAtPurchase` | [0..1] |
| `_FixedAssetCountryData` | `I_FixedAssetCountryData` | [0..1] |
| `_GlobAssetAssignment` | `I_GlobAssetAssignment` | [0..*] |
| `_OriginalAcquisitionCurrency` | `I_Currency` | [0..1] |
| `_Extension` | `E_FixedAsset` | [1..1] |

## Source Code

```abap
@Analytics: {
      technicalName: 'IFIXASSET',
      dataCategory: #DIMENSION,
      dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
          mapping:
            [
              {
                table: 'FAAT_MD',
                role: #MAIN,
                viewElement: ['CompanyCode', 'MasterFixedAsset', 'FixedAsset'],
                tableElement: ['comp_code', 'asset_no', 'asset_subno']
              }
            ]
         }
      }
    }
@EndUserText.label: 'Fixed Asset'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@ObjectModel: { sapObjectNodeType.name: 'FixedAsset',
                representativeKey: 'FixedAsset',
                compositionRoot:true,
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #XXL,
                usageType.dataClass: #MASTER,
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
              }
@Metadata: {ignorePropagatedAnnotations: true, allowExtensions:true}

define view entity I_FixedAsset
  as select from           faat_md_root as root
    left outer to one join faat_md      as main on  main.comp_code   = root.comp_code
                                                and main.asset_no    = root.asset_no
                                                and main.asset_subno = root.asset_subno
    left outer to one join t001                 on t001.bukrs = root.comp_code
  // Association to children
  association [0..*] to I_FixedAssetAssgmt             as _FixedAssetAssgmt             on  $projection.CompanyCode      = _FixedAssetAssgmt.CompanyCode
                                                                                        and $projection.MasterFixedAsset = _FixedAssetAssgmt.MasterFixedAsset
                                                                                        and $projection.FixedAsset       = _FixedAssetAssgmt.FixedAsset
  association [0..*] to I_FixedAssetDeprArea           as _FixedAssetDeprArea           on  $projection.CompanyCode      = _FixedAssetDeprArea.CompanyCode
                                                                                        and $projection.MasterFixedAsset = _FixedAssetDeprArea.MasterFixedAsset
                                                                                        and $projection.FixedAsset       = _FixedAssetDeprArea.FixedAsset
  association [0..*] to I_AssetValuationForLedger      as _AssetValuationForLedger      on  $projection.CompanyCode      = _AssetValuationForLedger.CompanyCode
                                                                                        and $projection.MasterFixedAsset = _AssetValuationForLedger.MasterFixedAsset
                                                                                        and $projection.FixedAsset       = _AssetValuationForLedger.FixedAsset
  association [0..*] to I_FixedAssetForLedger          as _FixedAssetForLedger          on  $projection.CompanyCode      = _FixedAssetForLedger.CompanyCode
                                                                                        and $projection.MasterFixedAsset = _FixedAssetForLedger.MasterFixedAsset
                                                                                        and $projection.FixedAsset       = _FixedAssetForLedger.FixedAsset
  //Associations to Object Core Views
  association [0..1] to I_CompanyCode                  as _CompanyCode                  on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_MasterFixedAsset             as _MasterFixedAsset             on  $projection.CompanyCode      = _MasterFixedAsset.CompanyCode
                                                                                        and $projection.MasterFixedAsset = _MasterFixedAsset.MasterFixedAsset
  association [0..1] to I_AssetClass                   as _AssetClass                   on  $projection.AssetClass = _AssetClass.AssetClass
  association [0..1] to I_Currency                     as _Currency                     on  $projection.Currency = _Currency.Currency
  association [0..1] to I_Globalcompany                as _PartnerCompany               on  $projection.PartnerCompany = _PartnerCompany.Company
  association [0..1] to I_AssetAcctDetermination       as _AssetAccountDetermination    on  $projection.AssetAccountDetermination = _AssetAccountDetermination.AssetAccountDetermination
  association [0..1] to I_Supplier                     as _Supplier                     on  $projection.Supplier = _Supplier.Supplier
  association [0..1] to I_Country                      as _AssetCountryOfOrigin         on  $projection.AssetCountryOfOrigin = _AssetCountryOfOrigin.Country
  association [0..1] to I_UnitOfMeasure                as _UnitOfMeasure                on  $projection.BaseUnit = _UnitOfMeasure.UnitOfMeasure

  association [0..1] to I_Group1AssetEvaluationKey     as _Group1AssetEvaluationKey     on  $projection.Group1AssetEvaluationKey = _Group1AssetEvaluationKey.Group1AssetEvaluationKey
  association [0..1] to I_Group2AssetEvaluationKey     as _Group2AssetEvaluationKey     on  $projection.Group2AssetEvaluationKey = _Group2AssetEvaluationKey.Group2AssetEvaluationKey
  association [0..1] to I_Group3AssetEvaluationKey     as _Group3AssetEvaluationKey     on  $projection.Group3AssetEvaluationKey = _Group3AssetEvaluationKey.Group3AssetEvaluationKey
  association [0..1] to I_Group4AssetEvaluationKey     as _Group4AssetEvaluationKey     on  $projection.Group4AssetEvaluationKey = _Group4AssetEvaluationKey.Group4AssetEvaluationKey
  association [0..1] to I_Group5AssetEvaluationKey     as _Group5AssetEvaluationKey     on  $projection.Group5AssetEvaluationKey = _Group5AssetEvaluationKey.Group5AssetEvaluationKey
  association [0..1] to I_InvestmentReason             as _InvestmentReason             on  $projection.InvestmentReason = _InvestmentReason.InvestmentReason
  association [0..1] to I_EnvrnmtlInvestmentReason     as _EnvrnmtlInvestmentReason     on  $projection.EnvrnmtlInvestmentReason = _EnvrnmtlInvestmentReason.EnvrnmtlInvestmentReason
  association [0..1] to I_FixedAssetFinDataCmpltns     as _FixedAssetFinDataCmpltns     on  $projection.FixedAssetFinDataCmpltns = _FixedAssetFinDataCmpltns.FixedAssetFinDataCmpltns
  association [0..1] to I_FixedAssetPropertyType       as _FixedAssetPropertyType       on  $projection.FixedAssetPropertyType = _FixedAssetPropertyType.FixedAssetPropertyType
  association [0..1] to I_ManualDepreciationReason     as _ManualDepreciationReason     on  $projection.ManualDepreciationReason = _ManualDepreciationReason.ManualDepreciationReason
  association [0..1] to I_FixedAssetGroup              as _FixedAssetGroup              on  $projection.FixedAssetGroup = _FixedAssetGroup.FixedAssetGroup
  association [0..1] to I_InternalOrder                as _InvestmentOrder              on  $projection.InvestmentOrder = _InvestmentOrder.InternalOrder
  association [0..1] to I_WBSElementBasicData          as _InvestmentWBSElement         on  $projection.InvestmentProjectWBSElement_2 = _InvestmentWBSElement.WBSElementInternalID
  association [0..1] to I_AssetLifecycleStatus         as _AssetLifecycleStatus         on  $projection.AssetLifecycleStatus = _AssetLifecycleStatus.AssetLifecycleStatus
  association [0..1] to I_AssetCompletenessStatus      as _AssetCompletenessStatus      on  $projection.AssetCompletenessStatus = _AssetCompletenessStatus.AssetCompletenessStatus
  association [0..1] to I_AssetUnderConstructionStatus as _AssetUnderConstructionStatus on  $projection.AssetUnderConstructionStatus = _AssetUnderConstructionStatus.AssetUnderConstructionStatus
  association [0..1] to I_AssetStatusAtPurchase        as _AssetStatusAtPurchase        on  $projection.AssetStatusAtPurchase = _AssetStatusAtPurchase.AssetStatusAtPurchase
  association [0..1] to I_FixedAssetCountryData        as _FixedAssetCountryData        on  $projection.CompanyCode      = _FixedAssetCountryData.CompanyCode
                                                                                        and $projection.MasterFixedAsset = _FixedAssetCountryData.MasterFixedAsset
                                                                                        and $projection.FixedAsset       = _FixedAssetCountryData.FixedAsset
  association [0..*] to I_GlobAssetAssignment          as _GlobAssetAssignment          on  $projection.CompanyCode      = _GlobAssetAssignment.CompanyCode
                                                                                        and $projection.MasterFixedAsset = _GlobAssetAssignment.MasterFixedAsset
                                                                                        and $projection.FixedAsset       = _GlobAssetAssignment.FixedAsset
  association [0..1] to I_Currency                     as _OriginalAcquisitionCurrency  on  $projection.OriginalAcquisitionCurrency = _OriginalAcquisitionCurrency.Currency

  // Association to Extension View
  association [1..1] to E_FixedAsset                   as _Extension                    on  $projection.MasterFixedAsset = _Extension.MasterFixedAsset
                                                                                        and $projection.FixedAsset       = _Extension.FixedAsset
                                                                                        and $projection.CompanyCode      = _Extension.CompanyCode
{
      //Key fields
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key root.comp_code                                                                as CompanyCode,
      @ObjectModel.foreignKey.association: '_MasterFixedAsset'
  key root.asset_no                                                                 as MasterFixedAsset,
      @ObjectModel.text.element: ['FixedAssetDescription']
  key root.asset_subno                                                              as FixedAsset,

      //Relevant Fields
      case when root.asset_subno = '0000' then cast( concat(ltrim(root.asset_no, '0'), '-0' ) as fis_fixedasset_ext_id)
           when root.asset_subno <> '0000' then cast( concat(concat( ltrim(root.asset_no, '0') , '-' ), ltrim(root.asset_subno, '0' )) as fis_fixedasset_ext_id)
      end                                                                           as FixedAssetExternalID,

      @ObjectModel.foreignKey.association: '_AssetClass'
      main.asset_class                                                              as AssetClass,
      main.serial_number                                                            as AssetSerialNumber,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @VDM.lifecycle: {status: #DEPRECATED}
      cast( 0 as am_menge )                                                         as Quantity, //Works in OP only, hence deprecated in cloud with CE1911
      @ObjectModel: { foreignKey.association: '_UnitOfMeasure' }
      main.base_unit                                                                as BaseUnit,
      main.inventory_number                                                         as Inventory,
      @Semantics.text:true
      main.description                                                              as FixedAssetDescription,
      @Semantics.text:true
      main.add_description                                                          as AssetAdditionalDescription,
      @ObjectModel: { foreignKey.association: '_Currency' }
      t001.waers                                                                    as Currency, //CompanyCodeCurrency!
      @Semantics.amount.currencyCode: 'Currency'
      @VDM.lifecycle: {status: #DEPRECATED}
      cast( 0 as urwrt )                                                            as OriglAcqnAmtInCoCodeCrcy, //Works in OP only, hence deprecated in cloud with CE1911. Now OriginalAcquisitionAmount (in Transaction Currency) is provided
      @ObjectModel.foreignKey.association: '_PartnerCompany'
      main.trade_id                                                                 as PartnerCompany,
      main.manufacturer                                                             as AssetManufacturerName,
      main.inhouse_prod_percent                                                     as InHouseProdnPercent,
      @VDM.lifecycle: {status: #DEPRECATED}
      cast( '' as liefe )                                                           as AssetSupplierName,
      main.inventory_note                                                           as InventoryNote,
      @ObjectModel.foreignKey.association: '_Group1AssetEvaluationKey'
      @VDM.lifecycle: {status: #DEPRECATED}
      cast( '' as ord41 )                                                           as Group1AssetEvaluationKey,
      @ObjectModel.foreignKey.association: '_Group2AssetEvaluationKey'
      @VDM.lifecycle: {status: #DEPRECATED}
      cast( '' as ord42 )                                                           as Group2AssetEvaluationKey,
      @ObjectModel.foreignKey.association: '_Group3AssetEvaluationKey'
      @VDM.lifecycle: {status: #DEPRECATED}
      cast( '' as ord43 )                                                           as Group3AssetEvaluationKey,
      @ObjectModel.foreignKey.association: '_Group4AssetEvaluationKey'
      @VDM.lifecycle: {status: #DEPRECATED}
      cast( '' as ord44 )                                                           as Group4AssetEvaluationKey,
      @ObjectModel.foreignKey.association: '_Group5AssetEvaluationKey'
      @VDM.lifecycle: {status: #DEPRECATED}
      cast( '' as gdlgrp )                                                          as Group5AssetEvaluationKey,
      @ObjectModel.foreignKey.association: '_AssetAccountDetermination'
      main.gl_account_det                                                           as AssetAccountDetermination,
      cast( root.is_historical_managed as aneqk )                                   as HasHistory,
      @VDM.lifecycle: {status: #DEPRECATED}
      cast( '00000000' as aktivd )                                                  as AssetCapitalizationDate, //Works in OP only, hence deprecated in cloud with CE1911, use I_FixedAssetForLedger.AssetCapitalizationDate instead
      @Semantics.fiscal.year: true
      @VDM.lifecycle: {status: #DEPRECATED}
      cast( '0000' as dzujahr )                                                     as FirstAcquisitionFiscalYear,   //Works in OP only, hence deprecated in cloud with CE1911, use I_FixedAssetForLedger.FirstAcquisitionFiscalYear instead
      @Semantics.fiscal.period: true
      @VDM.lifecycle: {status: #DEPRECATED}
      cast( '000' as dzuper )                                                       as FirstAcquisitionFiscalPeriod, //Works in OP only, hence deprecated in cloud with CE1911, use I_FixedAssetForLedger.FirstAcquisitionFiscalPeriod instead
      @VDM.lifecycle: {status: #DEPRECATED}
      cast( '00000000' as deakt )                                                   as AssetDeactivationDate, //Works in OP only, hence deprecated in cloud with CE1911, use I_FixedAssetForLedger.AssetDeactivationDate instead
      @VDM.lifecycle: {status: #DEPRECATED}
      cast( '00000000' as gplab )                                                   as PlannedRetirementDate,
      main.purchase_order_date                                                      as FixedAssetOrderDate,
      main.original_asset                                                           as OriginalMasterFixedAsset,
      @ObjectModel.foreignKey.association: '_FixedAssetGroup'
      main.asset_super_no                                                           as FixedAssetGroup,
      @ObjectModel.foreignKey.association: '_InvestmentReason'
      main.invest_reason                                                            as InvestmentReason,
      main.real_estate_asset                                                        as AssetIsRealEstate,
      main.surface_area_unit                                                        as AreaSizeUnit,
      @ObjectModel.foreignKey.association: '_InvestmentOrder'
      main.investment_io_origin                                                     as InvestmentOrder,
      @ObjectModel.foreignKey.association: '_InvestmentWBSElement'
      //cast(main.investment_wbs_origin as fis_wbsint_no_conv preserving type) as InvestmentProjectWBSElement_2,
      cast( main.investment_wbs_origin as faa_inv_wbs_element_int preserving type ) as InvestmentProjectWBSElement_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'InvestmentProjectWBSElement_2'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'InvestmentProjectWBSElement_2'
      main.investment_wbs_origin                                                    as InvestmentProjectWBSElement,
      main.inventory_indicator                                                      as InventoryIsCounted,
      main.inventory_date                                                           as LastInventoryDate,
      @VDM.lifecycle: {status: #DEPRECATED}
      cast( '' as aapm_act_change_pm )                                              as AssetSynchronizationRule,
      @Semantics.fiscal.year: true
      main.original_acq_year                                                        as OriginalAcquisitionFiscalYear,
      main.asset_type_name                                                          as AssetTypeName,
      @ObjectModel.foreignKey.association: '_Supplier'
      main.supplier_no                                                              as Supplier,
      @ObjectModel.foreignKey.association: '_AssetCountryOfOrigin'
      main.origin_country                                                           as AssetCountryOfOrigin,
      main.assessment_tax_number                                                    as NoticeOfAssessmentTaxID,
      main.assessment_date                                                          as LastAssessmentNoticeDate,
      @ObjectModel.foreignKey.association: '_EnvrnmtlInvestmentReason'
      main.environmental_investment                                                 as EnvrnmtlInvestmentReason,
      @Semantics.businessDate.at: true
      case when main.lastchange_datetime = 0 then cast( '00000000' as fis_aedat_anla )
           when main.lastchange_datetime <> 0 then cast( substring( cast( main.lastchange_datetime  as char17 ), 1, 8 ) as fis_aedat_anla)
      end                                                                           as LastChangeDate,

      @ObjectModel.foreignKey.association: '_FixedAssetFinDataCmpltns'
      cast(root.completeness_status as aneqs)                                       as FixedAssetFinDataCmpltns,
      case when root.lifecycle_status = '2' then cast( 'X' as xloev )
           when root.lifecycle_status <> '2' then cast( '' as xloev )
      end                                                                           as AccountIsMarkedForDeletion,
      cast( root.is_blocked as xspeb_anla )                                         as AccountIsBlockedForPosting,
      @VDM.lifecycle: {status: #DEPRECATED}
      cast( '00000000' as dzugdat )                                                 as AcquisitionValueDate, //Works in OP only, hence deprecated in cloud with CE1911, use I_FixedAssetForLedger.AcquisitionValueDate instead
      main.original_acq_date                                                        as OriginalFixedAssetValueDate,
      case when root.auc_status = '2' then cast( 'X' as im_xinvm )
           when root.auc_status <> '2' then cast( '' as im_xinvm )
      end                                                                           as AssetUnderConstIsInvmtMsr,
      @VDM.lifecycle: {status: #DEPRECATED}
      cast( '00000000' as abgdat )                                                  as LastRetirementValueDate, //Works in OP only, hence deprecated in cloud with CE1911, use I_AssetValuationForLedger.LastRetirementValueDate
      main.lastchange_user                                                          as LastChangedByUser,
      @ObjectModel.foreignKey.association: '_FixedAssetPropertyType'
      main.property_ind                                                             as FixedAssetPropertyType,
      @Semantics.businessDate.at: true
      cast( substring( cast( main.creation_datetime as char17 ), 1, 8 ) as erdat )  as CreationDate,
      main.creation_user                                                            as CreatedByUser,
      @ObjectModel.foreignKey.association: '_ManualDepreciationReason'
      @VDM.lifecycle: {status: #DEPRECATED}
      cast( '' as grund )                                                           as ManualDepreciationReason, //Works in OP only, hence deprecated in cloud with CE1911
      main.last_reorg_date                                                          as LastReorganizationDate,
      main.legacy_transfer_date                                                     as LegacyDataTransferDate,
      @VDM.lifecycle: {status: #DEPRECATED}
      cast( '' as xanlgr_1 )                                                        as IsGroupAsset, //Works in OP only, hence deprecated in cloud with CE1911
      case when root.auc_status = '1' then cast( 'X' as opvwa )
           when root.auc_status <> '1' then cast( '' as opvwa )
      end                                                                           as IsLineItemSettled,
      main.original_subasset                                                        as OriginalFixedAsset,
      cast( main.description as mcoa1 )                                             as MasterFixedAssetSearchTerm,
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'AssetIsAcquiredUsed'}
      @ObjectModel: {foreignKey.association: '_AssetStatusAtPurchase'}
      case when main.asset_acquired_used = 'X' then cast( 'X' as fis_asset_purchased_new_or_usd )
           when not main.asset_acquired_used = 'X' then cast( 'N' as fis_asset_purchased_new_or_usd )
      end                                                                           as AssetStatusAtPurchase,
      main.asset_acquired_used                                                      as AssetIsAcquiredUsed,

      /* Added at CE1905 */
      root.is_main_asset                                                            as IsMainAsset,
      @ObjectModel.foreignKey.association: '_AssetLifeCycleStatus'
      root.lifecycle_status                                                         as AssetLifecycleStatus,
      @ObjectModel.foreignKey.association: '_AssetCompletenessStatus'
      root.completeness_status                                                      as AssetCompletenessStatus,
      @ObjectModel.foreignKey.association: '_AssetUnderConstructionStatus'
      root.auc_status                                                               as AssetUnderConstructionStatus,
      root.validity_date                                                            as AssetCreationValidityDate,
      main.creation_datetime                                                        as CreationDateTime,
      main.lastchange_datetime                                                      as LastChangeDateTime,
      main.screen_layout                                                            as AssetScreenLayout,
      @Semantics.amount.currencyCode: 'OriginalAcquisitionCurrency'
      main.original_acq_value                                                       as OriginalAcquisitionAmount,
      @ObjectModel: { foreignKey.association: '_OriginalAcquisitionCurrency' }
      main.original_acq_value_curr                                                  as OriginalAcquisitionCurrency,
      main.property_key                                                             as PropertyClass,
      main.land_tax_office                                                          as LocalTaxOffice,
      main.land_municipality                                                        as Municipality,
      main.land_register_of                                                         as LandRegisterDate,
      main.land_register_entry_number                                               as LandRegisterEntrySequence,
      main.land_register_entry                                                      as LandRegisterEntryDate,
      main.land_register_volume                                                     as LandRegisterVolume,
      main.land_register_page                                                       as LandRegisterPage,
      main.land_register_map_no                                                     as LandRegisterMap,
      main.land_plot_number                                                         as LandPlot,
      main.conveyance_date                                                          as ConveyanceDate,
      @Semantics.quantity.unitOfMeasure: 'AreaSizeUnit'
      main.surface_area                                                             as AreaSize,
      main.lease_company                                                            as LeaseSupplier,
      main.lease_agreement_no                                                       as LeaseAgreement,
      main.lease_agreement_date                                                     as LeaseAgreementDate,
      main.lease_notice_date                                                        as LeaseTermEndDate,
      main.lease_start_date                                                         as LeaseTermStartDate,
      main.lease_years                                                              as LeaseDurationInFiscalYears,
      main.lease_periods                                                            as LeaseDurationInFiscalPeriods,
      main.lease_type                                                               as LeaseType,
      main.lease_data_text                                                          as LeasedAssetNote,
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'LegacyMasterFixedAsset'}
      cast( main.legacy_asset_no as faa_legacyasset )                               as LegacyAsset,
      main.legacy_comp_code                                                         as LegacyFixedAssetCompanyCode,
      main.legacy_asset_no                                                          as LegacyMasterFixedAsset,
      main.legacy_asset_subno                                                       as LegacyFixedAsset,
      main.legacy_transfer_seq_no                                                   as LegacyDataTransferSequence,
      root.is_post_capitalization                                                   as AssetIsForPostCapitalization,
      @Consumption.hidden: true
      @VDM.lifecycle.status: #DEPRECATED
      cast( 'NEW' as faa_authcntxt )                                                as AssetAuthorizationContext, //Needed for DCL
      @Consumption.hidden: true
      main.object_nr                                                                as ObjectInternalID,

      /* Associations */
      _FixedAssetAssgmt,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_AssetValuationForLedger'
      _FixedAssetDeprArea,
      _AssetValuationForLedger,
      _FixedAssetForLedger,

      _CompanyCode,
      _MasterFixedAsset,
      _AssetClass,
      _Currency,
      _UnitOfMeasure,
      _PartnerCompany,
      _Group1AssetEvaluationKey,
      _Group2AssetEvaluationKey,
      _Group3AssetEvaluationKey,
      _Group4AssetEvaluationKey,
      _Group5AssetEvaluationKey,
      _AssetAccountDetermination,
      _Supplier,
      _AssetCountryOfOrigin,
      _InvestmentReason,
      _EnvrnmtlInvestmentReason,
      _FixedAssetFinDataCmpltns,
      _FixedAssetPropertyType,
      _ManualDepreciationReason,
      _FixedAssetGroup,
      _InvestmentOrder,
      _InvestmentWBSElement,
      _AssetLifecycleStatus,
      _AssetCompletenessStatus,
      _AssetUnderConstructionStatus,
      _AssetStatusAtPurchase,
      _FixedAssetCountryData,
      _GlobAssetAssignment,
      _OriginalAcquisitionCurrency
}
where
      root.lifecycle_status <> '2'
  and root.lifecycle_status <> '8'
```
