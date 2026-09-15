---
name: I_COMPANYMARGINCUBEDST
description: "Companymargincubedst"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: yes
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - interface-view
  - component:CO-FIO-PA-2CL
  - lob:Controlling
---
# I_COMPANYMARGINCUBEDST

**Companymargincubedst**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | Yes — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `docid` | ✓ | |  |  | `NUMC(16)` |  |
| `version` | ✓ | |  |  | `NUMC(6)` |  |
| `doctag` |  | |  |  | `CHAR(60)` |  |
| `docqprov` |  | |  |  | `CHAR(30)` |  |
| `tra_00001` |  | |  |  | `CHAR(2)` |  |
| `sva_00001` |  | |  |  | `CHAR(1)` |  |
| `tra_00002` |  | |  |  | `NUMC(6)` |  |
| `sva_00002` |  | |  |  | `CHAR(1)` |  |
| `tra_plant` |  | |  |  | `CHAR(4)` |  |
| `sva_plant` |  | |  |  | `CHAR(1)` |  |
| `svh_plant` |  | |  |  | `CHAR(1)` |  |
| `hnm_plant` |  | |  |  | `CHAR(30)` |  |
| `hno_plant` |  | |  |  | `CHAR(32)` |  |
| `hio_plant` |  | |  |  | `CHAR(30)` |  |
| `tra_customer` |  | |  |  | `CHAR(10)` |  |
| `sva_customer` |  | |  |  | `CHAR(1)` |  |
| `svh_customer` |  | |  |  | `CHAR(1)` |  |
| `hnm_customer` |  | |  |  | `CHAR(30)` |  |
| `hno_customer` |  | |  |  | `CHAR(32)` |  |
| `hio_customer` |  | |  |  | `CHAR(30)` |  |
| `tra_fiscalperiod` |  | |  |  | `NUMC(3)` |  |
| `sva_fiscalperiod` |  | |  |  | `CHAR(1)` |  |
| `svh_fiscalperiod` |  | |  |  | `CHAR(1)` |  |
| `hnm_fiscalperiod` |  | |  |  | `CHAR(30)` |  |
| `hno_fiscalperiod` |  | |  |  | `CHAR(32)` |  |
| `hio_fiscalperiod` |  | |  |  | `CHAR(30)` |  |
| `tra_postingdate` |  | |  |  | `DATS(8)` |  |
| `sva_postingdate` |  | |  |  | `CHAR(1)` |  |
| `svh_postingdate` |  | |  |  | `CHAR(1)` |  |
| `hnm_postingdate` |  | |  |  | `CHAR(30)` |  |
| `hno_postingdate` |  | |  |  | `CHAR(32)` |  |
| `hio_postingdate` |  | |  |  | `CHAR(30)` |  |
| `tra_fiscalyear` |  | |  |  | `NUMC(4)` |  |
| `sva_fiscalyear` |  | |  |  | `CHAR(1)` |  |
| `tra_profitcenter` |  | |  |  | `CHAR(10)` |  |
| `sva_profitcenter` |  | |  |  | `CHAR(1)` |  |
| `svh_profitcenter` |  | |  |  | `CHAR(1)` |  |
| `hnm_profitcenter` |  | |  |  | `CHAR(30)` |  |
| `hno_profitcenter` |  | |  |  | `CHAR(32)` |  |
| `hio_profitcenter` |  | |  |  | `CHAR(30)` |  |
| `tra_valuationarea` |  | |  |  | `CHAR(4)` |  |
| `sva_valuationarea` |  | |  |  | `CHAR(1)` |  |
| `tra_00003` |  | |  |  | `CHAR(10)` |  |
| `sva_00003` |  | |  |  | `CHAR(1)` |  |
| `tra_wbselement` |  | |  |  | `CHAR(24)` |  |
| `sva_wbselement` |  | |  |  | `CHAR(1)` |  |
| `tra_semantictag` |  | |  |  | `CHAR(10)` |  |
| `sva_semantictag` |  | |  |  | `CHAR(1)` |  |
| `tra_00004` |  | |  |  | `CHAR(24)` |  |
| `sva_00004` |  | |  |  | `CHAR(1)` |  |
| `svh_00004` |  | |  |  | `CHAR(1)` |  |
| `hnm_00004` |  | |  |  | `CHAR(30)` |  |
| `hno_00004` |  | |  |  | `CHAR(32)` |  |
| `hio_00004` |  | |  |  | `CHAR(30)` |  |
| `tra_00005` |  | |  |  | `CUKY(5)` |  |
| `sva_00005` |  | |  |  | `CHAR(1)` |  |
| `tra_00006` |  | |  |  | `CHAR(4)` |  |
| `sva_00006` |  | |  |  | `CHAR(1)` |  |
| `tra_00007` |  | |  |  | `NUMC(6)` |  |
| `sva_00007` |  | |  |  | `CHAR(1)` |  |
| `tra_00008` |  | |  |  | `CHAR(2)` |  |
| `sva_00008` |  | |  |  | `CHAR(1)` |  |
| `tra_00009` |  | |  |  | `DATS(8)` |  |
| `sva_00009` |  | |  |  | `CHAR(1)` |  |
| `svh_00009` |  | |  |  | `CHAR(1)` |  |
| `hnm_00009` |  | |  |  | `CHAR(30)` |  |
| `hno_00009` |  | |  |  | `CHAR(32)` |  |
| `hio_00009` |  | |  |  | `CHAR(30)` |  |
| `tra_salesdistrict` |  | |  |  | `CHAR(6)` |  |
| `sva_salesdistrict` |  | |  |  | `CHAR(1)` |  |
| `svh_salesdistrict` |  | |  |  | `CHAR(1)` |  |
| `hnm_salesdistrict` |  | |  |  | `CHAR(30)` |  |
| `hno_salesdistrict` |  | |  |  | `CHAR(32)` |  |
| `hio_salesdistrict` |  | |  |  | `CHAR(30)` |  |
| `tra_c1` |  | |  |  | `CHAR(10)` |  |
| `sva_c1` |  | |  |  | `CHAR(1)` |  |
| `tra_00010` |  | |  |  | `NUMC(8)` |  |
| `sva_00010` |  | |  |  | `CHAR(1)` |  |
| `tra_salesorder` |  | |  |  | `CHAR(10)` |  |
| `sva_salesorder` |  | |  |  | `CHAR(1)` |  |
| `tra_costcenter` |  | |  |  | `CHAR(10)` |  |
| `sva_costcenter` |  | |  |  | `CHAR(1)` |  |
| `svh_costcenter` |  | |  |  | `CHAR(1)` |  |
| `hnm_costcenter` |  | |  |  | `CHAR(30)` |  |
| `hno_costcenter` |  | |  |  | `CHAR(32)` |  |
| `hio_costcenter` |  | |  |  | `CHAR(30)` |  |
| `tra_00011` |  | |  |  | `CHAR(24)` |  |
| `sva_00011` |  | |  |  | `CHAR(1)` |  |
| `tra_product` |  | |  |  | `CHAR(40)` |  |
| `sva_product` |  | |  |  | `CHAR(1)` |  |
| `svh_product` |  | |  |  | `CHAR(1)` |  |
| `hnm_product` |  | |  |  | `CHAR(30)` |  |
| `hno_product` |  | |  |  | `CHAR(32)` |  |
| `hio_product` |  | |  |  | `CHAR(30)` |  |
| `tra_00012` |  | |  |  | `CHAR(12)` |  |
| `sva_00012` |  | |  |  | `CHAR(1)` |  |
| `tra_currency` |  | |  |  | `CUKY(5)` |  |
| `sva_currency` |  | |  |  | `CHAR(1)` |  |
| `tra_glaccount` |  | |  |  | `CHAR(10)` |  |
| `sva_glaccount` |  | |  |  | `CHAR(1)` |  |
| `svh_glaccount` |  | |  |  | `CHAR(1)` |  |
| `hnm_glaccount` |  | |  |  | `CHAR(30)` |  |
| `hno_glaccount` |  | |  |  | `CHAR(32)` |  |
| `hio_glaccount` |  | |  |  | `CHAR(30)` |  |
| `tra_sourceledger` |  | |  |  | `CHAR(2)` |  |
| `sva_sourceledger` |  | |  |  | `CHAR(1)` |  |
| `tra_functionalarea` |  | |  |  | `CHAR(16)` |  |
| `sva_functionalarea` |  | |  |  | `CHAR(1)` |  |
| `svh_functionalarea` |  | |  |  | `CHAR(1)` |  |
| `hnm_functionalarea` |  | |  |  | `CHAR(30)` |  |
| `hno_functionalarea` |  | |  |  | `CHAR(32)` |  |
| `hio_functionalarea` |  | |  |  | `CHAR(30)` |  |
| `tra_00013` |  | |  |  | `NUMC(5)` |  |
| `sva_00013` |  | |  |  | `CHAR(1)` |  |
| `tra_00014` |  | |  |  | `CHAR(1)` |  |
| `sva_00014` |  | |  |  | `CHAR(1)` |  |
| `tra_segment` |  | |  |  | `CHAR(10)` |  |
| `sva_segment` |  | |  |  | `CHAR(1)` |  |
| `tra_billtoparty` |  | |  |  | `CHAR(10)` |  |
| `sva_billtoparty` |  | |  |  | `CHAR(1)` |  |
| `svh_billtoparty` |  | |  |  | `CHAR(1)` |  |
| `hnm_billtoparty` |  | |  |  | `CHAR(30)` |  |
| `hno_billtoparty` |  | |  |  | `CHAR(32)` |  |
| `hio_billtoparty` |  | |  |  | `CHAR(30)` |  |
| `tra_00015` |  | |  |  | `CHAR(4)` |  |
| `sva_00015` |  | |  |  | `CHAR(1)` |  |
| `svh_00015` |  | |  |  | `CHAR(1)` |  |
| `hnm_00015` |  | |  |  | `CHAR(30)` |  |
| `hno_00015` |  | |  |  | `CHAR(32)` |  |
| `hio_00015` |  | |  |  | `CHAR(30)` |  |
| `tra_assetclass` |  | |  |  | `CHAR(8)` |  |
| `sva_assetclass` |  | |  |  | `CHAR(1)` |  |
| `tra_currencyfield` |  | |  |  | `CHAR(4)` |  |
| `sva_currencyfield` |  | |  |  | `CHAR(1)` |  |
| `tra_customergroup` |  | |  |  | `CHAR(2)` |  |
| `sva_customergroup` |  | |  |  | `CHAR(1)` |  |
| `svh_customergroup` |  | |  |  | `CHAR(1)` |  |
| `hnm_customergroup` |  | |  |  | `CHAR(30)` |  |
| `hno_customergroup` |  | |  |  | `CHAR(32)` |  |
| `hio_customergroup` |  | |  |  | `CHAR(30)` |  |
| `tra_00016` |  | |  |  | `CHAR(2)` |  |
| `sva_00016` |  | |  |  | `CHAR(1)` |  |
| `svh_00016` |  | |  |  | `CHAR(1)` |  |
| `hnm_00016` |  | |  |  | `CHAR(30)` |  |
| `hno_00016` |  | |  |  | `CHAR(32)` |  |
| `hio_00016` |  | |  |  | `CHAR(30)` |  |
| `tra_00017` |  | |  |  | `CHAR(2)` |  |
| `sva_00017` |  | |  |  | `CHAR(1)` |  |
| `svh_00017` |  | |  |  | `CHAR(1)` |  |
| `hnm_00017` |  | |  |  | `CHAR(30)` |  |
| `hno_00017` |  | |  |  | `CHAR(32)` |  |
| `hio_00017` |  | |  |  | `CHAR(30)` |  |
| `tra_00018` |  | |  |  | `NUMC(6)` |  |
| `sva_00018` |  | |  |  | `CHAR(1)` |  |
| `tra_00019` |  | |  |  | `CHAR(10)` |  |
| `sva_00019` |  | |  |  | `CHAR(1)` |  |
| `tra_globalcurrency` |  | |  |  | `CUKY(5)` |  |
| `sva_globalcurrency` |  | |  |  | `CHAR(1)` |  |
| `tra_companycode` |  | |  |  | `CHAR(4)` |  |
| `sva_companycode` |  | |  |  | `CHAR(1)` |  |
| `svh_companycode` |  | |  |  | `CHAR(1)` |  |
| `hnm_companycode` |  | |  |  | `CHAR(30)` |  |
| `hno_companycode` |  | |  |  | `CHAR(32)` |  |
| `hio_companycode` |  | |  |  | `CHAR(30)` |  |
| `tra_shiptoparty` |  | |  |  | `CHAR(10)` |  |
| `sva_shiptoparty` |  | |  |  | `CHAR(1)` |  |
| `svh_shiptoparty` |  | |  |  | `CHAR(1)` |  |
| `hnm_shiptoparty` |  | |  |  | `CHAR(30)` |  |
| `hno_shiptoparty` |  | |  |  | `CHAR(32)` |  |
| `hio_shiptoparty` |  | |  |  | `CHAR(30)` |  |
| `tra_00020` |  | |  |  | `CHAR(10)` |  |
| `sva_00020` |  | |  |  | `CHAR(1)` |  |
| `tra_00021` |  | |  |  | `CHAR(4)` |  |
| `sva_00021` |  | |  |  | `CHAR(1)` |  |
| `tra_00022` |  | |  |  | `CHAR(9)` |  |
| `sva_00022` |  | |  |  | `CHAR(1)` |  |
| `tra_00023` |  | |  |  | `CHAR(2)` |  |
| `sva_00023` |  | |  |  | `CHAR(1)` |  |
| `tra_equipment` |  | |  |  | `CHAR(18)` |  |
| `sva_equipment` |  | |  |  | `CHAR(1)` |  |
| `tra_supplier` |  | |  |  | `CHAR(10)` |  |
| `sva_supplier` |  | |  |  | `CHAR(1)` |  |
| `tra_soldproduct` |  | |  |  | `CHAR(40)` |  |
| `sva_soldproduct` |  | |  |  | `CHAR(1)` |  |
| `svh_soldproduct` |  | |  |  | `CHAR(1)` |  |
| `hnm_soldproduct` |  | |  |  | `CHAR(30)` |  |
| `hno_soldproduct` |  | |  |  | `CHAR(32)` |  |
| `hio_soldproduct` |  | |  |  | `CHAR(30)` |  |
| `tra_00024` |  | |  |  | `CHAR(6)` |  |
| `sva_00024` |  | |  |  | `CHAR(1)` |  |
| `svh_00024` |  | |  |  | `CHAR(1)` |  |
| `hnm_00024` |  | |  |  | `CHAR(30)` |  |
| `hno_00024` |  | |  |  | `CHAR(32)` |  |
| `hio_00024` |  | |  |  | `CHAR(30)` |  |
| `tra_00025` |  | |  |  | `NUMC(7)` |  |
| `sva_00025` |  | |  |  | `CHAR(1)` |  |
| `svh_00025` |  | |  |  | `CHAR(1)` |  |
| `hnm_00025` |  | |  |  | `CHAR(30)` |  |
| `hno_00025` |  | |  |  | `CHAR(32)` |  |
| `hio_00025` |  | |  |  | `CHAR(30)` |  |
| `tra_00026` |  | |  |  | `CHAR(20)` |  |
| `sva_00026` |  | |  |  | `CHAR(1)` |  |
| `tra_00027` |  | |  |  | `NUMC(5)` |  |
| `sva_00027` |  | |  |  | `CHAR(1)` |  |
| `svh_00027` |  | |  |  | `CHAR(1)` |  |
| `hnm_00027` |  | |  |  | `CHAR(30)` |  |
| `hno_00027` |  | |  |  | `CHAR(32)` |  |
| `hio_00027` |  | |  |  | `CHAR(30)` |  |
| `tra_00028` |  | |  |  | `CHAR(4)` |  |
| `sva_00028` |  | |  |  | `CHAR(1)` |  |
| `tra_00029` |  | |  |  | `CHAR(5)` |  |
| `sva_00029` |  | |  |  | `CHAR(1)` |  |
| `tra_ledger` |  | |  |  | `CHAR(2)` |  |
| `sva_ledger` |  | |  |  | `CHAR(1)` |  |
| `tra_00030` |  | |  |  | `CHAR(2)` |  |
| `sva_00030` |  | |  |  | `CHAR(1)` |  |
| `tra_00031` |  | |  |  | `CHAR(4)` |  |
| `sva_00031` |  | |  |  | `CHAR(1)` |  |
| `tra_00032` |  | |  |  | `CHAR(3)` |  |
| `sva_00032` |  | |  |  | `CHAR(1)` |  |
| `svh_00032` |  | |  |  | `CHAR(1)` |  |
| `hnm_00032` |  | |  |  | `CHAR(30)` |  |
| `hno_00032` |  | |  |  | `CHAR(32)` |  |
| `hio_00032` |  | |  |  | `CHAR(30)` |  |
| `tra_fiscalquarter` |  | |  |  | `NUMC(1)` |  |
| `sva_fiscalquarter` |  | |  |  | `CHAR(1)` |  |
| `tra_salesorderitem` |  | |  |  | `NUMC(6)` |  |
| `sva_salesorderitem` |  | |  |  | `CHAR(1)` |  |
| `tra_00033` |  | |  |  | `CHAR(4)` |  |
| `sva_00033` |  | |  |  | `CHAR(1)` |  |
| `svh_00033` |  | |  |  | `CHAR(1)` |  |
| `hnm_00033` |  | |  |  | `CHAR(30)` |  |
| `hno_00033` |  | |  |  | `CHAR(32)` |  |
| `hio_00033` |  | |  |  | `CHAR(30)` |  |
| `tra_partnercompany` |  | |  |  | `CHAR(6)` |  |
| `sva_partnercompany` |  | |  |  | `CHAR(1)` |  |
| `tra_00034` |  | |  |  | `CHAR(4)` |  |
| `sva_00034` |  | |  |  | `CHAR(1)` |  |
| `tra_00035` |  | |  |  | `NUMC(4)` |  |
| `sva_00035` |  | |  |  | `CHAR(1)` |  |
| `tra_00036` |  | |  |  | `CHAR(42)` |  |
| `sva_00036` |  | |  |  | `CHAR(1)` |  |
| `tra_00037` |  | |  |  | `CHAR(4)` |  |
| `sva_00037` |  | |  |  | `CHAR(1)` |  |
| `svh_00037` |  | |  |  | `CHAR(1)` |  |
| `hnm_00037` |  | |  |  | `CHAR(30)` |  |
| `hno_00037` |  | |  |  | `CHAR(32)` |  |
| `hio_00037` |  | |  |  | `CHAR(30)` |  |
| `tra_salesdocument` |  | |  |  | `CHAR(10)` |  |
| `sva_salesdocument` |  | |  |  | `CHAR(1)` |  |
| `tra_orderid` |  | |  |  | `CHAR(12)` |  |
| `sva_orderid` |  | |  |  | `CHAR(1)` |  |
| `svh_orderid` |  | |  |  | `CHAR(1)` |  |
| `hnm_orderid` |  | |  |  | `CHAR(30)` |  |
| `hno_orderid` |  | |  |  | `CHAR(32)` |  |
| `hio_orderid` |  | |  |  | `CHAR(30)` |  |
| `tra_00038` |  | |  |  | `CUKY(5)` |  |
| `sva_00038` |  | |  |  | `CHAR(1)` |  |
| `tra_baseunit` |  | |  |  | `UNIT(3)` |  |
| `sva_baseunit` |  | |  |  | `CHAR(1)` |  |
| `tra_00039` |  | |  |  | `CHAR(6)` |  |
| `sva_00039` |  | |  |  | `CHAR(1)` |  |
| `doctype` |  | |  |  | `CHAR(1)` |  |
| `owner` |  | |  |  | `CHAR(12)` |  |
| `infoprov` |  | |  |  | `CHAR(30)` |  |
| `sva_infoprov` |  | |  |  | `CHAR(1)` |  |
| `kyfnm` |  | |  |  | `CHAR(30)` |  |
| `docstat` |  | |  |  | `CHAR(1)` |  |
| `session_id` |  | |  |  | `CHAR(30)` |  |
| `timestamp` |  | |  |  | `DEC(15)` |  |
| `document` |  | |  |  |  |  |
| `seldr` |  | |  |  |  |  |
| `docprop` |  | |  |  |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Company Margin Cube'
@VDM.viewType: #BASIC
@ObjectModel.modelingPattern: #ANALYTICAL_DOCUMENT_STORE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DOCUMENT_STORE ]
@Analytics.dataCategory: #DOCSTORE
@Analytics.document.storageForEntity: [ 'I_COMPANYMARGINCUBE_2' ]
@Analytics.document.serviceClassName: 'CL_CELL_COMMENT_GENERIC_HDLR'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'DCU',
  quota: {
    maximumFields: 250,
    maximumBytes: 3000
  },
  dataSources: ['_persistence']
}
define view entity I_CompanyMarginCubeDSt
  as select from icompanymadsttab as _persistence
{
  @Analytics.document: {
    type: #DOC, 
    semantics: #ID
  }
  key docid,
  @Analytics.document: {
    type: #DOC, 
    semantics: #VERSION
  }
  key version,
  @Analytics.document: {
    type: #DOC, 
    semantics: #TAG
  }
  doctag,
  @Analytics.document: {
    type: #DOC, 
    semantics: #QPROV
  }
  docqprov,
  @Analytics.document: {
    type: #TRA, 
    reference: 'BillableControl'
  }
  tra_00001,
  @Analytics.document: {
    type: #SVA, 
    reference: 'BillableControl'
  }
  sva_00001,
  @Analytics.document: {
    type: #TRA, 
    reference: 'ProviderContractItem'
  }
  tra_00002,
  @Analytics.document: {
    type: #SVA, 
    reference: 'ProviderContractItem'
  }
  sva_00002,
  @Analytics.document: {
    type: #TRA, 
    reference: 'Plant'
  }
  tra_plant,
  @Analytics.document: {
    type: #SVA, 
    reference: 'Plant'
  }
  sva_plant,
  @Analytics.document: {
    type: #SVH, 
    reference: 'Plant'
  }
  svh_plant,
  @Analytics.document: {
    type: #HNM, 
    reference: 'Plant'
  }
  hnm_plant,
  @Analytics.document: {
    type: #HNO, 
    reference: 'Plant'
  }
  hno_plant,
  @Analytics.document: {
    type: #HIO, 
    reference: 'Plant'
  }
  hio_plant,
  @Analytics.document: {
    type: #TRA, 
    reference: 'Customer'
  }
  tra_customer,
  @Analytics.document: {
    type: #SVA, 
    reference: 'Customer'
  }
  sva_customer,
  @Analytics.document: {
    type: #SVH, 
    reference: 'Customer'
  }
  svh_customer,
  @Analytics.document: {
    type: #HNM, 
    reference: 'Customer'
  }
  hnm_customer,
  @Analytics.document: {
    type: #HNO, 
    reference: 'Customer'
  }
  hno_customer,
  @Analytics.document: {
    type: #HIO, 
    reference: 'Customer'
  }
  hio_customer,
  @Analytics.document: {
    type: #TRA, 
    reference: 'FiscalPeriod'
  }
  tra_fiscalperiod,
  @Analytics.document: {
    type: #SVA, 
    reference: 'FiscalPeriod'
  }
  sva_fiscalperiod,
  @Analytics.document: {
    type: #SVH, 
    reference: 'FiscalPeriod'
  }
  svh_fiscalperiod,
  @Analytics.document: {
    type: #HNM, 
    reference: 'FiscalPeriod'
  }
  hnm_fiscalperiod,
  @Analytics.document: {
    type: #HNO, 
    reference: 'FiscalPeriod'
  }
  hno_fiscalperiod,
  @Analytics.document: {
    type: #HIO, 
    reference: 'FiscalPeriod'
  }
  hio_fiscalperiod,
  @Analytics.document: {
    type: #TRA, 
    reference: 'PostingDate'
  }
  tra_postingdate,
  @Analytics.document: {
    type: #SVA, 
    reference: 'PostingDate'
  }
  sva_postingdate,
  @Analytics.document: {
    type: #SVH, 
    reference: 'PostingDate'
  }
  svh_postingdate,
  @Analytics.document: {
    type: #HNM, 
    reference: 'PostingDate'
  }
  hnm_postingdate,
  @Analytics.document: {
    type: #HNO, 
    reference: 'PostingDate'
  }
  hno_postingdate,
  @Analytics.document: {
    type: #HIO, 
    reference: 'PostingDate'
  }
  hio_postingdate,
  @Analytics.document: {
    type: #TRA, 
    reference: 'FiscalYear'
  }
  tra_fiscalyear,
  @Analytics.document: {
    type: #SVA, 
    reference: 'FiscalYear'
  }
  sva_fiscalyear,
  @Analytics.document: {
    type: #TRA, 
    reference: 'ProfitCenter'
  }
  tra_profitcenter,
  @Analytics.document: {
    type: #SVA, 
    reference: 'ProfitCenter'
  }
  sva_profitcenter,
  @Analytics.document: {
    type: #SVH, 
    reference: 'ProfitCenter'
  }
  svh_profitcenter,
  @Analytics.document: {
    type: #HNM, 
    reference: 'ProfitCenter'
  }
  hnm_profitcenter,
  @Analytics.document: {
    type: #HNO, 
    reference: 'ProfitCenter'
  }
  hno_profitcenter,
  @Analytics.document: {
    type: #HIO, 
    reference: 'ProfitCenter'
  }
  hio_profitcenter,
  @Analytics.document: {
    type: #TRA, 
    reference: 'ValuationArea'
  }
  tra_valuationarea,
  @Analytics.document: {
    type: #SVA, 
    reference: 'ValuationArea'
  }
  sva_valuationarea,
  @Analytics.document: {
    type: #TRA, 
    reference: 'ServiceDocument'
  }
  tra_00003,
  @Analytics.document: {
    type: #SVA, 
    reference: 'ServiceDocument'
  }
  sva_00003,
  @Analytics.document: {
    type: #TRA, 
    reference: 'WBSElement'
  }
  tra_wbselement,
  @Analytics.document: {
    type: #SVA, 
    reference: 'WBSElement'
  }
  sva_wbselement,
  @Analytics.document: {
    type: #TRA, 
    reference: 'SemanticTag'
  }
  tra_semantictag,
  @Analytics.document: {
    type: #SVA, 
    reference: 'SemanticTag'
  }
  sva_semantictag,
  @Analytics.document: {
    type: #TRA, 
    reference: 'WBSElementExternalID'
  }
  tra_00004,
  @Analytics.document: {
    type: #SVA, 
    reference: 'WBSElementExternalID'
  }
  sva_00004,
  @Analytics.document: {
    type: #SVH, 
    reference: 'WBSElementExternalID'
  }
  svh_00004,
  @Analytics.document: {
    type: #HNM, 
    reference: 'WBSElementExternalID'
  }
  hnm_00004,
  @Analytics.document: {
    type: #HNO, 
    reference: 'WBSElementExternalID'
  }
  hno_00004,
  @Analytics.document: {
    type: #HIO, 
    reference: 'WBSElementExternalID'
  }
  hio_00004,
  @Analytics.document: {
    type: #TRA, 
    reference: 'FunctionalCurrency'
  }
  tra_00005,
  @Analytics.document: {
    type: #SVA, 
    reference: 'FunctionalCurrency'
  }
  sva_00005,
  @Analytics.document: {
    type: #TRA, 
    reference: 'ChartOfAccounts'
  }
  tra_00006,
  @Analytics.document: {
    type: #SVA, 
    reference: 'ChartOfAccounts'
  }
  sva_00006,
  @Analytics.document: {
    type: #TRA, 
    reference: 'BusinessSolutionOrderItem'
  }
  tra_00007,
  @Analytics.document: {
    type: #SVA, 
    reference: 'BusinessSolutionOrderItem'
  }
  sva_00007,
  @Analytics.document: {
    type: #TRA, 
    reference: 'AccountAssignmentType'
  }
  tra_00008,
  @Analytics.document: {
    type: #SVA, 
    reference: 'AccountAssignmentType'
  }
  sva_00008,
  @Analytics.document: {
    type: #TRA, 
    reference: 'ServicesRenderedDate'
  }
  tra_00009,
  @Analytics.document: {
    type: #SVA, 
    reference: 'ServicesRenderedDate'
  }
  sva_00009,
  @Analytics.document: {
    type: #SVH, 
    reference: 'ServicesRenderedDate'
  }
  svh_00009,
  @Analytics.document: {
    type: #HNM, 
    reference: 'ServicesRenderedDate'
  }
  hnm_00009,
  @Analytics.document: {
    type: #HNO, 
    reference: 'ServicesRenderedDate'
  }
  hno_00009,
  @Analytics.document: {
    type: #HIO, 
    reference: 'ServicesRenderedDate'
  }
  hio_00009,
  @Analytics.document: {
    type: #TRA, 
    reference: 'SalesDistrict'
  }
  tra_salesdistrict,
  @Analytics.document: {
    type: #SVA, 
    reference: 'SalesDistrict'
  }
  sva_salesdistrict,
  @Analytics.document: {
    type: #SVH, 
    reference: 'SalesDistrict'
  }
  svh_salesdistrict,
  @Analytics.document: {
    type: #HNM, 
    reference: 'SalesDistrict'
  }
  hnm_salesdistrict,
  @Analytics.document: {
    type: #HNO, 
    reference: 'SalesDistrict'
  }
  hno_salesdistrict,
  @Analytics.document: {
    type: #HIO, 
    reference: 'SalesDistrict'
  }
  hio_salesdistrict,
  @Analytics.document: {
    type: #TRA, 
    reference: '-C1'
  }
  tra_c1,
  @Analytics.document: {
    type: #SVA, 
    reference: '-C1'
  }
  sva_c1,
  @Analytics.document: {
    type: #TRA, 
    reference: 'PersonnelNumber'
  }
  tra_00010,
  @Analytics.document: {
    type: #SVA, 
    reference: 'PersonnelNumber'
  }
  sva_00010,
  @Analytics.document: {
    type: #TRA, 
    reference: 'SalesOrder'
  }
  tra_salesorder,
  @Analytics.document: {
    type: #SVA, 
    reference: 'SalesOrder'
  }
  sva_salesorder,
  @Analytics.document: {
    type: #TRA, 
    reference: 'CostCenter'
  }
  tra_costcenter,
  @Analytics.document: {
    type: #SVA, 
    reference: 'CostCenter'
  }
  sva_costcenter,
  @Analytics.document: {
    type: #SVH, 
    reference: 'CostCenter'
  }
  svh_costcenter,
  @Analytics.document: {
    type: #HNM, 
    reference: 'CostCenter'
  }
  hnm_costcenter,
  @Analytics.document: {
    type: #HNO, 
    reference: 'CostCenter'
  }
  hno_costcenter,
  @Analytics.document: {
    type: #HIO, 
    reference: 'CostCenter'
  }
  hio_costcenter,
  @Analytics.document: {
    type: #TRA, 
    reference: 'ProjectExternalID'
  }
  tra_00011,
  @Analytics.document: {
    type: #SVA, 
    reference: 'ProjectExternalID'
  }
  sva_00011,
  @Analytics.document: {
    type: #TRA, 
    reference: 'Product'
  }
  tra_product,
  @Analytics.document: {
    type: #SVA, 
    reference: 'Product'
  }
  sva_product,
  @Analytics.document: {
    type: #SVH, 
    reference: 'Product'
  }
  svh_product,
  @Analytics.document: {
    type: #HNM, 
    reference: 'Product'
  }
  hnm_product,
  @Analytics.document: {
    type: #HNO, 
    reference: 'Product'
  }
  hno_product,
  @Analytics.document: {
    type: #HIO, 
    reference: 'Product'
  }
  hio_product,
  @Analytics.document: {
    type: #TRA, 
    reference: 'AccountingDocCreatedByUser'
  }
  tra_00012,
  @Analytics.document: {
    type: #SVA, 
    reference: 'AccountingDocCreatedByUser'
  }
  sva_00012,
  @Analytics.document: {
    type: #TRA, 
    reference: 'Currency'
  }
  tra_currency,
  @Analytics.document: {
    type: #SVA, 
    reference: 'Currency'
  }
  sva_currency,
  @Analytics.document: {
    type: #TRA, 
    reference: 'GLAccount'
  }
  tra_glaccount,
  @Analytics.document: {
    type: #SVA, 
    reference: 'GLAccount'
  }
  sva_glaccount,
  @Analytics.document: {
    type: #SVH, 
    reference: 'GLAccount'
  }
  svh_glaccount,
  @Analytics.document: {
    type: #HNM, 
    reference: 'GLAccount'
  }
  hnm_glaccount,
  @Analytics.document: {
    type: #HNO, 
    reference: 'GLAccount'
  }
  hno_glaccount,
  @Analytics.document: {
    type: #HIO, 
    reference: 'GLAccount'
  }
  hio_glaccount,
  @Analytics.document: {
    type: #TRA, 
    reference: 'SourceLedger'
  }
  tra_sourceledger,
  @Analytics.document: {
    type: #SVA, 
    reference: 'SourceLedger'
  }
  sva_sourceledger,
  @Analytics.document: {
    type: #TRA, 
    reference: 'FunctionalArea'
  }
  tra_functionalarea,
  @Analytics.document: {
    type: #SVA, 
    reference: 'FunctionalArea'
  }
  sva_functionalarea,
  @Analytics.document: {
    type: #SVH, 
    reference: 'FunctionalArea'
  }
  svh_functionalarea,
  @Analytics.document: {
    type: #HNM, 
    reference: 'FunctionalArea'
  }
  hnm_functionalarea,
  @Analytics.document: {
    type: #HNO, 
    reference: 'FunctionalArea'
  }
  hno_functionalarea,
  @Analytics.document: {
    type: #HIO, 
    reference: 'FunctionalArea'
  }
  hio_functionalarea,
  @Analytics.document: {
    type: #TRA, 
    reference: 'SubLedgerAcctLineItemType'
  }
  tra_00013,
  @Analytics.document: {
    type: #SVA, 
    reference: 'SubLedgerAcctLineItemType'
  }
  sva_00013,
  @Analytics.document: {
    type: #TRA, 
    reference: 'FinancialAccountType'
  }
  tra_00014,
  @Analytics.document: {
    type: #SVA, 
    reference: 'FinancialAccountType'
  }
  sva_00014,
  @Analytics.document: {
    type: #TRA, 
    reference: 'Segment'
  }
  tra_segment,
  @Analytics.document: {
    type: #SVA, 
    reference: 'Segment'
  }
  sva_segment,
  @Analytics.document: {
    type: #TRA, 
    reference: 'BillToParty'
  }
  tra_billtoparty,
  @Analytics.document: {
    type: #SVA, 
    reference: 'BillToParty'
  }
  sva_billtoparty,
  @Analytics.document: {
    type: #SVH, 
    reference: 'BillToParty'
  }
  svh_billtoparty,
  @Analytics.document: {
    type: #HNM, 
    reference: 'BillToParty'
  }
  hnm_billtoparty,
  @Analytics.document: {
    type: #HNO, 
    reference: 'BillToParty'
  }
  hno_billtoparty,
  @Analytics.document: {
    type: #HIO, 
    reference: 'BillToParty'
  }
  hio_billtoparty,
  @Analytics.document: {
    type: #TRA, 
    reference: 'SalesOrganization'
  }
  tra_00015,
  @Analytics.document: {
    type: #SVA, 
    reference: 'SalesOrganization'
  }
  sva_00015,
  @Analytics.document: {
    type: #SVH, 
    reference: 'SalesOrganization'
  }
  svh_00015,
  @Analytics.document: {
    type: #HNM, 
    reference: 'SalesOrganization'
  }
  hnm_00015,
  @Analytics.document: {
    type: #HNO, 
    reference: 'SalesOrganization'
  }
  hno_00015,
  @Analytics.document: {
    type: #HIO, 
    reference: 'SalesOrganization'
  }
  hio_00015,
  @Analytics.document: {
    type: #TRA, 
    reference: 'AssetClass'
  }
  tra_assetclass,
  @Analytics.document: {
    type: #SVA, 
    reference: 'AssetClass'
  }
  sva_assetclass,
  @Analytics.document: {
    type: #TRA, 
    reference: 'CurrencyField'
  }
  tra_currencyfield,
  @Analytics.document: {
    type: #SVA, 
    reference: 'CurrencyField'
  }
  sva_currencyfield,
  @Analytics.document: {
    type: #TRA, 
    reference: 'CustomerGroup'
  }
  tra_customergroup,
  @Analytics.document: {
    type: #SVA, 
    reference: 'CustomerGroup'
  }
  sva_customergroup,
  @Analytics.document: {
    type: #SVH, 
    reference: 'CustomerGroup'
  }
  svh_customergroup,
  @Analytics.document: {
    type: #HNM, 
    reference: 'CustomerGroup'
  }
  hnm_customergroup,
  @Analytics.document: {
    type: #HNO, 
    reference: 'CustomerGroup'
  }
  hno_customergroup,
  @Analytics.document: {
    type: #HIO, 
    reference: 'CustomerGroup'
  }
  hio_customergroup,
  @Analytics.document: {
    type: #TRA, 
    reference: 'DistributionChannel'
  }
  tra_00016,
  @Analytics.document: {
    type: #SVA, 
    reference: 'DistributionChannel'
  }
  sva_00016,
  @Analytics.document: {
    type: #SVH, 
    reference: 'DistributionChannel'
  }
  svh_00016,
  @Analytics.document: {
    type: #HNM, 
    reference: 'DistributionChannel'
  }
  hnm_00016,
  @Analytics.document: {
    type: #HNO, 
    reference: 'DistributionChannel'
  }
  hno_00016,
  @Analytics.document: {
    type: #HIO, 
    reference: 'DistributionChannel'
  }
  hio_00016,
  @Analytics.document: {
    type: #TRA, 
    reference: 'OrganizationDivision'
  }
  tra_00017,
  @Analytics.document: {
    type: #SVA, 
    reference: 'OrganizationDivision'
  }
  sva_00017,
  @Analytics.document: {
    type: #SVH, 
    reference: 'OrganizationDivision'
  }
  svh_00017,
  @Analytics.document: {
    type: #HNM, 
    reference: 'OrganizationDivision'
  }
  hnm_00017,
  @Analytics.document: {
    type: #HNO, 
    reference: 'OrganizationDivision'
  }
  hno_00017,
  @Analytics.document: {
    type: #HIO, 
    reference: 'OrganizationDivision'
  }
  hio_00017,
  @Analytics.document: {
    type: #TRA, 
    reference: 'ServiceDocumentItem'
  }
  tra_00018,
  @Analytics.document: {
    type: #SVA, 
    reference: 'ServiceDocumentItem'
  }
  sva_00018,
  @Analytics.document: {
    type: #TRA, 
    reference: 'BusinessSolutionOrder'
  }
  tra_00019,
  @Analytics.document: {
    type: #SVA, 
    reference: 'BusinessSolutionOrder'
  }
  sva_00019,
  @Analytics.document: {
    type: #TRA, 
    reference: 'GlobalCurrency'
  }
  tra_globalcurrency,
  @Analytics.document: {
    type: #SVA, 
    reference: 'GlobalCurrency'
  }
  sva_globalcurrency,
  @Analytics.document: {
    type: #TRA, 
    reference: 'CompanyCode'
  }
  tra_companycode,
  @Analytics.document: {
    type: #SVA, 
    reference: 'CompanyCode'
  }
  sva_companycode,
  @Analytics.document: {
    type: #SVH, 
    reference: 'CompanyCode'
  }
  svh_companycode,
  @Analytics.document: {
    type: #HNM, 
    reference: 'CompanyCode'
  }
  hnm_companycode,
  @Analytics.document: {
    type: #HNO, 
    reference: 'CompanyCode'
  }
  hno_companycode,
  @Analytics.document: {
    type: #HIO, 
    reference: 'CompanyCode'
  }
  hio_companycode,
  @Analytics.document: {
    type: #TRA, 
    reference: 'ShipToParty'
  }
  tra_shiptoparty,
  @Analytics.document: {
    type: #SVA, 
    reference: 'ShipToParty'
  }
  sva_shiptoparty,
  @Analytics.document: {
    type: #SVH, 
    reference: 'ShipToParty'
  }
  svh_shiptoparty,
  @Analytics.document: {
    type: #HNM, 
    reference: 'ShipToParty'
  }
  hnm_shiptoparty,
  @Analytics.document: {
    type: #HNO, 
    reference: 'ShipToParty'
  }
  hno_shiptoparty,
  @Analytics.document: {
    type: #HIO, 
    reference: 'ShipToParty'
  }
  hio_shiptoparty,
  @Analytics.document: {
    type: #TRA, 
    reference: 'AccountingDocument'
  }
  tra_00020,
  @Analytics.document: {
    type: #SVA, 
    reference: 'AccountingDocument'
  }
  sva_00020,
  @Analytics.document: {
    type: #TRA, 
    reference: 'ControllingArea'
  }
  tra_00021,
  @Analytics.document: {
    type: #SVA, 
    reference: 'ControllingArea'
  }
  sva_00021,
  @Analytics.document: {
    type: #TRA, 
    reference: 'SoldProductGroup'
  }
  tra_00022,
  @Analytics.document: {
    type: #SVA, 
    reference: 'SoldProductGroup'
  }
  sva_00022,
  @Analytics.document: {
    type: #TRA, 
    reference: 'AccountingDocumentType'
  }
  tra_00023,
  @Analytics.document: {
    type: #SVA, 
    reference: 'AccountingDocumentType'
  }
  sva_00023,
  @Analytics.document: {
    type: #TRA, 
    reference: 'Equipment'
  }
  tra_equipment,
  @Analytics.document: {
    type: #SVA, 
    reference: 'Equipment'
  }
  sva_equipment,
  @Analytics.document: {
    type: #TRA, 
    reference: 'Supplier'
  }
  tra_supplier,
  @Analytics.document: {
    type: #SVA, 
    reference: 'Supplier'
  }
  sva_supplier,
  @Analytics.document: {
    type: #TRA, 
    reference: 'SoldProduct'
  }
  tra_soldproduct,
  @Analytics.document: {
    type: #SVA, 
    reference: 'SoldProduct'
  }
  sva_soldproduct,
  @Analytics.document: {
    type: #SVH, 
    reference: 'SoldProduct'
  }
  svh_soldproduct,
  @Analytics.document: {
    type: #HNM, 
    reference: 'SoldProduct'
  }
  hnm_soldproduct,
  @Analytics.document: {
    type: #HNO, 
    reference: 'SoldProduct'
  }
  hno_soldproduct,
  @Analytics.document: {
    type: #HIO, 
    reference: 'SoldProduct'
  }
  hio_soldproduct,
  @Analytics.document: {
    type: #TRA, 
    reference: 'PartnerCostCtrActivityType'
  }
  tra_00024,
  @Analytics.document: {
    type: #SVA, 
    reference: 'PartnerCostCtrActivityType'
  }
  sva_00024,
  @Analytics.document: {
    type: #SVH, 
    reference: 'PartnerCostCtrActivityType'
  }
  svh_00024,
  @Analytics.document: {
    type: #HNM, 
    reference: 'PartnerCostCtrActivityType'
  }
  hnm_00024,
  @Analytics.document: {
    type: #HNO, 
    reference: 'PartnerCostCtrActivityType'
  }
  hno_00024,
  @Analytics.document: {
    type: #HIO, 
    reference: 'PartnerCostCtrActivityType'
  }
  hio_00024,
  @Analytics.document: {
    type: #TRA, 
    reference: 'FiscalYearPeriod'
  }
  tra_00025,
  @Analytics.document: {
    type: #SVA, 
    reference: 'FiscalYearPeriod'
  }
  sva_00025,
  @Analytics.document: {
    type: #SVH, 
    reference: 'FiscalYearPeriod'
  }
  svh_00025,
  @Analytics.document: {
    type: #HNM, 
    reference: 'FiscalYearPeriod'
  }
  hnm_00025,
  @Analytics.document: {
    type: #HNO, 
    reference: 'FiscalYearPeriod'
  }
  hno_00025,
  @Analytics.document: {
    type: #HIO, 
    reference: 'FiscalYearPeriod'
  }
  hio_00025,
  @Analytics.document: {
    type: #TRA, 
    reference: 'ProviderContract'
  }
  tra_00026,
  @Analytics.document: {
    type: #SVA, 
    reference: 'ProviderContract'
  }
  sva_00026,
  @Analytics.document: {
    type: #TRA, 
    reference: 'FiscalYearQuarter'
  }
  tra_00027,
  @Analytics.document: {
    type: #SVA, 
    reference: 'FiscalYearQuarter'
  }
  sva_00027,
  @Analytics.document: {
    type: #SVH, 
    reference: 'FiscalYearQuarter'
  }
  svh_00027,
  @Analytics.document: {
    type: #HNM, 
    reference: 'FiscalYearQuarter'
  }
  hnm_00027,
  @Analytics.document: {
    type: #HNO, 
    reference: 'FiscalYearQuarter'
  }
  hno_00027,
  @Analytics.document: {
    type: #HIO, 
    reference: 'FiscalYearQuarter'
  }
  hio_00027,
  @Analytics.document: {
    type: #TRA, 
    reference: 'PartnerCompanyCode'
  }
  tra_00028,
  @Analytics.document: {
    type: #SVA, 
    reference: 'PartnerCompanyCode'
  }
  sva_00028,
  @Analytics.document: {
    type: #TRA, 
    reference: 'ReferenceDocumentType'
  }
  tra_00029,
  @Analytics.document: {
    type: #SVA, 
    reference: 'ReferenceDocumentType'
  }
  sva_00029,
  @Analytics.document: {
    type: #TRA, 
    reference: 'Ledger'
  }
  tra_ledger,
  @Analytics.document: {
    type: #SVA, 
    reference: 'Ledger'
  }
  sva_ledger,
  @Analytics.document: {
    type: #TRA, 
    reference: 'FiscalYearVariant'
  }
  tra_00030,
  @Analytics.document: {
    type: #SVA, 
    reference: 'FiscalYearVariant'
  }
  sva_00030,
  @Analytics.document: {
    type: #TRA, 
    reference: 'ServiceDocumentType'
  }
  tra_00031,
  @Analytics.document: {
    type: #SVA, 
    reference: 'ServiceDocumentType'
  }
  sva_00031,
  @Analytics.document: {
    type: #TRA, 
    reference: 'CustomerSupplierCountry'
  }
  tra_00032,
  @Analytics.document: {
    type: #SVA, 
    reference: 'CustomerSupplierCountry'
  }
  sva_00032,
  @Analytics.document: {
    type: #SVH, 
    reference: 'CustomerSupplierCountry'
  }
  svh_00032,
  @Analytics.document: {
    type: #HNM, 
    reference: 'CustomerSupplierCountry'
  }
  hnm_00032,
  @Analytics.document: {
    type: #HNO, 
    reference: 'CustomerSupplierCountry'
  }
  hno_00032,
  @Analytics.document: {
    type: #HIO, 
    reference: 'CustomerSupplierCountry'
  }
  hio_00032,
  @Analytics.document: {
    type: #TRA, 
    reference: 'FiscalQuarter'
  }
  tra_fiscalquarter,
  @Analytics.document: {
    type: #SVA, 
    reference: 'FiscalQuarter'
  }
  sva_fiscalquarter,
  @Analytics.document: {
    type: #TRA, 
    reference: 'SalesOrderItem'
  }
  tra_salesorderitem,
  @Analytics.document: {
    type: #SVA, 
    reference: 'SalesOrderItem'
  }
  sva_salesorderitem,
  @Analytics.document: {
    type: #TRA, 
    reference: 'BusinessTransactionType'
  }
  tra_00033,
  @Analytics.document: {
    type: #SVA, 
    reference: 'BusinessTransactionType'
  }
  sva_00033,
  @Analytics.document: {
    type: #SVH, 
    reference: 'BusinessTransactionType'
  }
  svh_00033,
  @Analytics.document: {
    type: #HNM, 
    reference: 'BusinessTransactionType'
  }
  hnm_00033,
  @Analytics.document: {
    type: #HNO, 
    reference: 'BusinessTransactionType'
  }
  hno_00033,
  @Analytics.document: {
    type: #HIO, 
    reference: 'BusinessTransactionType'
  }
  hio_00033,
  @Analytics.document: {
    type: #TRA, 
    reference: 'PartnerCompany'
  }
  tra_partnercompany,
  @Analytics.document: {
    type: #SVA, 
    reference: 'PartnerCompany'
  }
  sva_partnercompany,
  @Analytics.document: {
    type: #TRA, 
    reference: 'TimeSheetOvertimeCategory'
  }
  tra_00034,
  @Analytics.document: {
    type: #SVA, 
    reference: 'TimeSheetOvertimeCategory'
  }
  sva_00034,
  @Analytics.document: {
    type: #TRA, 
    reference: 'LedgerFiscalYear'
  }
  tra_00035,
  @Analytics.document: {
    type: #SVA, 
    reference: 'LedgerFiscalYear'
  }
  sva_00035,
  @Analytics.document: {
    type: #TRA, 
    reference: 'GLAccountHierarchy'
  }
  tra_00036,
  @Analytics.document: {
    type: #SVA, 
    reference: 'GLAccountHierarchy'
  }
  sva_00036,
  @Analytics.document: {
    type: #TRA, 
    reference: 'CustomerSupplierIndustry'
  }
  tra_00037,
  @Analytics.document: {
    type: #SVA, 
    reference: 'CustomerSupplierIndustry'
  }
  sva_00037,
  @Analytics.document: {
    type: #SVH, 
    reference: 'CustomerSupplierIndustry'
  }
  svh_00037,
  @Analytics.document: {
    type: #HNM, 
    reference: 'CustomerSupplierIndustry'
  }
  hnm_00037,
  @Analytics.document: {
    type: #HNO, 
    reference: 'CustomerSupplierIndustry'
  }
  hno_00037,
  @Analytics.document: {
    type: #HIO, 
    reference: 'CustomerSupplierIndustry'
  }
  hio_00037,
  @Analytics.document: {
    type: #TRA, 
    reference: 'SalesDocument'
  }
  tra_salesdocument,
  @Analytics.document: {
    type: #SVA, 
    reference: 'SalesDocument'
  }
  sva_salesdocument,
  @Analytics.document: {
    type: #TRA, 
    reference: 'OrderID'
  }
  tra_orderid,
  @Analytics.document: {
    type: #SVA, 
    reference: 'OrderID'
  }
  sva_orderid,
  @Analytics.document: {
    type: #SVH, 
    reference: 'OrderID'
  }
  svh_orderid,
  @Analytics.document: {
    type: #HNM, 
    reference: 'OrderID'
  }
  hnm_orderid,
  @Analytics.document: {
    type: #HNO, 
    reference: 'OrderID'
  }
  hno_orderid,
  @Analytics.document: {
    type: #HIO, 
    reference: 'OrderID'
  }
  hio_orderid,
  @Analytics.document: {
    type: #TRA, 
    reference: 'CompanyCodeCurrency'
  }
  tra_00038,
  @Analytics.document: {
    type: #SVA, 
    reference: 'CompanyCodeCurrency'
  }
  sva_00038,
  @Analytics.document: {
    type: #TRA, 
    reference: 'BaseUnit'
  }
  tra_baseunit,
  @Analytics.document: {
    type: #SVA, 
    reference: 'BaseUnit'
  }
  sva_baseunit,
  @Analytics.document: {
    type: #TRA, 
    reference: 'LedgerGLLineItem'
  }
  tra_00039,
  @Analytics.document: {
    type: #SVA, 
    reference: 'LedgerGLLineItem'
  }
  sva_00039,
  @Analytics.document: {
    type: #DOC, 
    semantics: #TYPE
  }
  doctype,
  @Analytics.document: {
    type: #DOC, 
    semantics: #OWNER
  }
  owner,
  @Analytics.document: {
    type: #DOC, 
    semantics: #INFOPROV
  }
  infoprov,
  @Analytics.document: {
    type: #DOC, 
    semantics: #SVA_INFOPROV
  }
  sva_infoprov,
  @Analytics.document: {
    type: #DOC, 
    semantics: #KYFNM
  }
  kyfnm,
  @Analytics.document: {
    type: #DOC, 
    semantics: #STATUS
  }
  docstat,
  @Analytics.document: {
    type: #DOC, 
    semantics: #SESSION_ID
  }
  session_id,
  @Analytics.document: {
    type: #DOC, 
    semantics: #TIMESTAMP
  }
  timestamp,
  @Analytics.document: {
    type: #DOC, 
    semantics: #DOCUMENT
  }
  document,
  @Analytics.document: {
    type: #DOC, 
    semantics: #SELECTIONS
  }
  seldr,
  @Analytics.document: {
    type: #DOC, 
    semantics: #PROPERTY
  }
  docprop
}
```
