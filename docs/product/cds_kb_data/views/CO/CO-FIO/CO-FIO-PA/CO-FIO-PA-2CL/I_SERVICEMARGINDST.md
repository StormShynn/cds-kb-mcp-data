---
name: I_SERVICEMARGINDST
description: "Service Margin Document Store"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SERVICEMARGINDST')/$value
semantic_en: "Service Margin Document Store"
tags:
  - CO
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - document
  - interface-view
  - lob:controlling
  - lob:finance
  - metadata-only
---
# I_SERVICEMARGINDST

**Service Margin Document Store**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SERVICEMARGINDST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `docid` |  | |  |  | `NUMC(16)` |  |
| `version` |  | |  |  | `NUMC(6)` |  |
| `doctag` |  | |  |  | `CHAR(60)` |  |
| `docqprov` |  | |  |  | `CHAR(30)` |  |
| `tra_product` |  | |  |  | `CHAR(40)` |  |
| `sva_product` |  | |  |  | `CHAR(1)` |  |
| `svh_product` |  | |  |  | `CHAR(1)` |  |
| `hnm_product` |  | |  |  | `CHAR(30)` |  |
| `hno_product` |  | |  |  | `CHAR(32)` |  |
| `hio_product` |  | |  |  | `CHAR(30)` |  |
| `tra_00001` |  | |  |  | `CHAR(10)` |  |
| `sva_00001` |  | |  |  | `CHAR(1)` |  |
| `tra_00002` |  | |  |  | `CHAR(4)` |  |
| `sva_00002` |  | |  |  | `CHAR(1)` |  |
| `tra_equipment` |  | |  |  | `CHAR(18)` |  |
| `sva_equipment` |  | |  |  | `CHAR(1)` |  |
| `tra_00003` |  | |  |  | `CHAR(2)` |  |
| `sva_00003` |  | |  |  | `CHAR(1)` |  |
| `svh_00003` |  | |  |  | `CHAR(1)` |  |
| `hnm_00003` |  | |  |  | `CHAR(30)` |  |
| `hno_00003` |  | |  |  | `CHAR(32)` |  |
| `hio_00003` |  | |  |  | `CHAR(30)` |  |
| `tra_shiptoparty` |  | |  |  | `CHAR(10)` |  |
| `sva_shiptoparty` |  | |  |  | `CHAR(1)` |  |
| `svh_shiptoparty` |  | |  |  | `CHAR(1)` |  |
| `hnm_shiptoparty` |  | |  |  | `CHAR(30)` |  |
| `hno_shiptoparty` |  | |  |  | `CHAR(32)` |  |
| `hio_shiptoparty` |  | |  |  | `CHAR(30)` |  |
| `tra_00004` |  | |  |  | `NUMC(4)` |  |
| `sva_00004` |  | |  |  | `CHAR(1)` |  |
| `tra_00005` |  | |  |  | `NUMC(8)` |  |
| `sva_00005` |  | |  |  | `CHAR(1)` |  |
| `tra_00006` |  | |  |  | `CHAR(2)` |  |
| `sva_00006` |  | |  |  | `CHAR(1)` |  |
| `tra_00007` |  | |  |  | `CHAR(2)` |  |
| `sva_00007` |  | |  |  | `CHAR(1)` |  |
| `tra_00008` |  | |  |  | `CHAR(3)` |  |
| `sva_00008` |  | |  |  | `CHAR(1)` |  |
| `svh_00008` |  | |  |  | `CHAR(1)` |  |
| `hnm_00008` |  | |  |  | `CHAR(30)` |  |
| `hno_00008` |  | |  |  | `CHAR(32)` |  |
| `hio_00008` |  | |  |  | `CHAR(30)` |  |
| `tra_costcenter` |  | |  |  | `CHAR(10)` |  |
| `sva_costcenter` |  | |  |  | `CHAR(1)` |  |
| `svh_costcenter` |  | |  |  | `CHAR(1)` |  |
| `hnm_costcenter` |  | |  |  | `CHAR(30)` |  |
| `hno_costcenter` |  | |  |  | `CHAR(32)` |  |
| `hio_costcenter` |  | |  |  | `CHAR(30)` |  |
| `tra_valuationarea` |  | |  |  | `CHAR(4)` |  |
| `sva_valuationarea` |  | |  |  | `CHAR(1)` |  |
| `tra_c1` |  | |  |  | `CHAR(10)` |  |
| `sva_c1` |  | |  |  | `CHAR(1)` |  |
| `tra_plant` |  | |  |  | `CHAR(4)` |  |
| `sva_plant` |  | |  |  | `CHAR(1)` |  |
| `svh_plant` |  | |  |  | `CHAR(1)` |  |
| `hnm_plant` |  | |  |  | `CHAR(30)` |  |
| `hno_plant` |  | |  |  | `CHAR(32)` |  |
| `hio_plant` |  | |  |  | `CHAR(30)` |  |
| `tra_semantictag` |  | |  |  | `CHAR(10)` |  |
| `sva_semantictag` |  | |  |  | `CHAR(1)` |  |
| `tra_00009` |  | |  |  | `CHAR(42)` |  |
| `sva_00009` |  | |  |  | `CHAR(1)` |  |
| `tra_00010` |  | |  |  | `NUMC(6)` |  |
| `sva_00010` |  | |  |  | `CHAR(1)` |  |
| `tra_assetclass` |  | |  |  | `CHAR(8)` |  |
| `sva_assetclass` |  | |  |  | `CHAR(1)` |  |
| `tra_soldproduct` |  | |  |  | `CHAR(40)` |  |
| `sva_soldproduct` |  | |  |  | `CHAR(1)` |  |
| `svh_soldproduct` |  | |  |  | `CHAR(1)` |  |
| `hnm_soldproduct` |  | |  |  | `CHAR(30)` |  |
| `hno_soldproduct` |  | |  |  | `CHAR(32)` |  |
| `hio_soldproduct` |  | |  |  | `CHAR(30)` |  |
| `tra_billtoparty` |  | |  |  | `CHAR(10)` |  |
| `sva_billtoparty` |  | |  |  | `CHAR(1)` |  |
| `svh_billtoparty` |  | |  |  | `CHAR(1)` |  |
| `hnm_billtoparty` |  | |  |  | `CHAR(30)` |  |
| `hno_billtoparty` |  | |  |  | `CHAR(32)` |  |
| `hio_billtoparty` |  | |  |  | `CHAR(30)` |  |
| `tra_00011` |  | |  |  | `CHAR(4)` |  |
| `sva_00011` |  | |  |  | `CHAR(1)` |  |
| `tra_00012` |  | |  |  | `CHAR(6)` |  |
| `sva_00012` |  | |  |  | `CHAR(1)` |  |
| `svh_00012` |  | |  |  | `CHAR(1)` |  |
| `hnm_00012` |  | |  |  | `CHAR(30)` |  |
| `hno_00012` |  | |  |  | `CHAR(32)` |  |
| `hio_00012` |  | |  |  | `CHAR(30)` |  |
| `tra_00013` |  | |  |  | `CHAR(4)` |  |
| `sva_00013` |  | |  |  | `CHAR(1)` |  |
| `tra_sourceledger` |  | |  |  | `CHAR(2)` |  |
| `sva_sourceledger` |  | |  |  | `CHAR(1)` |  |
| `tra_salesorder` |  | |  |  | `CHAR(10)` |  |
| `sva_salesorder` |  | |  |  | `CHAR(1)` |  |
| `tra_00014` |  | |  |  | `NUMC(6)` |  |
| `sva_00014` |  | |  |  | `CHAR(1)` |  |
| `tra_00015` |  | |  |  | `CHAR(2)` |  |
| `sva_00015` |  | |  |  | `CHAR(1)` |  |
| `tra_globalcurrency` |  | |  |  | `CUKY(5)` |  |
| `sva_globalcurrency` |  | |  |  | `CHAR(1)` |  |
| `tra_00016` |  | |  |  | `CHAR(4)` |  |
| `sva_00016` |  | |  |  | `CHAR(1)` |  |
| `svh_00016` |  | |  |  | `CHAR(1)` |  |
| `hnm_00016` |  | |  |  | `CHAR(30)` |  |
| `hno_00016` |  | |  |  | `CHAR(32)` |  |
| `hio_00016` |  | |  |  | `CHAR(30)` |  |
| `tra_orderid` |  | |  |  | `CHAR(12)` |  |
| `sva_orderid` |  | |  |  | `CHAR(1)` |  |
| `svh_orderid` |  | |  |  | `CHAR(1)` |  |
| `hnm_orderid` |  | |  |  | `CHAR(30)` |  |
| `hno_orderid` |  | |  |  | `CHAR(32)` |  |
| `hio_orderid` |  | |  |  | `CHAR(30)` |  |
| `tra_00017` |  | |  |  | `CHAR(6)` |  |
| `sva_00017` |  | |  |  | `CHAR(1)` |  |
| `tra_00018` |  | |  |  | `NUMC(6)` |  |
| `sva_00018` |  | |  |  | `CHAR(1)` |  |
| `tra_baseunit` |  | |  |  | `UNIT(3)` |  |
| `sva_baseunit` |  | |  |  | `CHAR(1)` |  |
| `tra_00019` |  | |  |  | `CHAR(24)` |  |
| `sva_00019` |  | |  |  | `CHAR(1)` |  |
| `tra_00020` |  | |  |  | `CHAR(4)` |  |
| `sva_00020` |  | |  |  | `CHAR(1)` |  |
| `svh_00020` |  | |  |  | `CHAR(1)` |  |
| `hnm_00020` |  | |  |  | `CHAR(30)` |  |
| `hno_00020` |  | |  |  | `CHAR(32)` |  |
| `hio_00020` |  | |  |  | `CHAR(30)` |  |
| `tra_salesdistrict` |  | |  |  | `CHAR(6)` |  |
| `sva_salesdistrict` |  | |  |  | `CHAR(1)` |  |
| `svh_salesdistrict` |  | |  |  | `CHAR(1)` |  |
| `hnm_salesdistrict` |  | |  |  | `CHAR(30)` |  |
| `hno_salesdistrict` |  | |  |  | `CHAR(32)` |  |
| `hio_salesdistrict` |  | |  |  | `CHAR(30)` |  |
| `tra_00021` |  | |  |  | `NUMC(7)` |  |
| `sva_00021` |  | |  |  | `CHAR(1)` |  |
| `svh_00021` |  | |  |  | `CHAR(1)` |  |
| `hnm_00021` |  | |  |  | `CHAR(30)` |  |
| `hno_00021` |  | |  |  | `CHAR(32)` |  |
| `hio_00021` |  | |  |  | `CHAR(30)` |  |
| `tra_salesdocument` |  | |  |  | `CHAR(10)` |  |
| `sva_salesdocument` |  | |  |  | `CHAR(1)` |  |
| `tra_fiscalyear` |  | |  |  | `NUMC(4)` |  |
| `sva_fiscalyear` |  | |  |  | `CHAR(1)` |  |
| `tra_glaccount` |  | |  |  | `CHAR(10)` |  |
| `sva_glaccount` |  | |  |  | `CHAR(1)` |  |
| `svh_glaccount` |  | |  |  | `CHAR(1)` |  |
| `hnm_glaccount` |  | |  |  | `CHAR(30)` |  |
| `hno_glaccount` |  | |  |  | `CHAR(32)` |  |
| `hio_glaccount` |  | |  |  | `CHAR(30)` |  |
| `tra_supplier` |  | |  |  | `CHAR(10)` |  |
| `sva_supplier` |  | |  |  | `CHAR(1)` |  |
| `tra_salesorderitem` |  | |  |  | `NUMC(6)` |  |
| `sva_salesorderitem` |  | |  |  | `CHAR(1)` |  |
| `tra_00022` |  | |  |  | `CHAR(6)` |  |
| `sva_00022` |  | |  |  | `CHAR(1)` |  |
| `tra_customer` |  | |  |  | `CHAR(10)` |  |
| `sva_customer` |  | |  |  | `CHAR(1)` |  |
| `svh_customer` |  | |  |  | `CHAR(1)` |  |
| `hnm_customer` |  | |  |  | `CHAR(30)` |  |
| `hno_customer` |  | |  |  | `CHAR(32)` |  |
| `hio_customer` |  | |  |  | `CHAR(30)` |  |
| `tra_00023` |  | |  |  | `CHAR(2)` |  |
| `sva_00023` |  | |  |  | `CHAR(1)` |  |
| `tra_profitcenter` |  | |  |  | `CHAR(10)` |  |
| `sva_profitcenter` |  | |  |  | `CHAR(1)` |  |
| `svh_profitcenter` |  | |  |  | `CHAR(1)` |  |
| `hnm_profitcenter` |  | |  |  | `CHAR(30)` |  |
| `hno_profitcenter` |  | |  |  | `CHAR(32)` |  |
| `hio_profitcenter` |  | |  |  | `CHAR(30)` |  |
| `tra_00024` |  | |  |  | `CHAR(20)` |  |
| `sva_00024` |  | |  |  | `CHAR(1)` |  |
| `tra_00025` |  | |  |  | `CHAR(10)` |  |
| `sva_00025` |  | |  |  | `CHAR(1)` |  |
| `tra_fiscalperiod` |  | |  |  | `NUMC(3)` |  |
| `sva_fiscalperiod` |  | |  |  | `CHAR(1)` |  |
| `svh_fiscalperiod` |  | |  |  | `CHAR(1)` |  |
| `hnm_fiscalperiod` |  | |  |  | `CHAR(30)` |  |
| `hno_fiscalperiod` |  | |  |  | `CHAR(32)` |  |
| `hio_fiscalperiod` |  | |  |  | `CHAR(30)` |  |
| `tra_00026` |  | |  |  | `CHAR(4)` |  |
| `sva_00026` |  | |  |  | `CHAR(1)` |  |
| `svh_00026` |  | |  |  | `CHAR(1)` |  |
| `hnm_00026` |  | |  |  | `CHAR(30)` |  |
| `hno_00026` |  | |  |  | `CHAR(32)` |  |
| `hio_00026` |  | |  |  | `CHAR(30)` |  |
| `tra_00027` |  | |  |  | `CHAR(24)` |  |
| `sva_00027` |  | |  |  | `CHAR(1)` |  |
| `svh_00027` |  | |  |  | `CHAR(1)` |  |
| `hnm_00027` |  | |  |  | `CHAR(30)` |  |
| `hno_00027` |  | |  |  | `CHAR(32)` |  |
| `hio_00027` |  | |  |  | `CHAR(30)` |  |
| `tra_segment` |  | |  |  | `CHAR(10)` |  |
| `sva_segment` |  | |  |  | `CHAR(1)` |  |
| `tra_00028` |  | |  |  | `CHAR(2)` |  |
| `sva_00028` |  | |  |  | `CHAR(1)` |  |
| `tra_functionalarea` |  | |  |  | `CHAR(16)` |  |
| `sva_functionalarea` |  | |  |  | `CHAR(1)` |  |
| `svh_functionalarea` |  | |  |  | `CHAR(1)` |  |
| `hnm_functionalarea` |  | |  |  | `CHAR(30)` |  |
| `hno_functionalarea` |  | |  |  | `CHAR(32)` |  |
| `hio_functionalarea` |  | |  |  | `CHAR(30)` |  |
| `tra_wbselement` |  | |  |  | `CHAR(24)` |  |
| `sva_wbselement` |  | |  |  | `CHAR(1)` |  |
| `tra_00029` |  | |  |  | `CHAR(1)` |  |
| `sva_00029` |  | |  |  | `CHAR(1)` |  |
| `tra_00030` |  | |  |  | `CHAR(4)` |  |
| `sva_00030` |  | |  |  | `CHAR(1)` |  |
| `tra_00031` |  | |  |  | `CUKY(5)` |  |
| `sva_00031` |  | |  |  | `CHAR(1)` |  |
| `tra_00032` |  | |  |  | `CHAR(10)` |  |
| `sva_00032` |  | |  |  | `CHAR(1)` |  |
| `tra_postingdate` |  | |  |  | `DATS(8)` |  |
| `sva_postingdate` |  | |  |  | `CHAR(1)` |  |
| `svh_postingdate` |  | |  |  | `CHAR(1)` |  |
| `hnm_postingdate` |  | |  |  | `CHAR(30)` |  |
| `hno_postingdate` |  | |  |  | `CHAR(32)` |  |
| `hio_postingdate` |  | |  |  | `CHAR(30)` |  |
| `tra_00033` |  | |  |  | `CHAR(10)` |  |
| `sva_00033` |  | |  |  | `CHAR(1)` |  |
| `tra_00034` |  | |  |  | `NUMC(6)` |  |
| `sva_00034` |  | |  |  | `CHAR(1)` |  |
| `tra_companycode` |  | |  |  | `CHAR(4)` |  |
| `sva_companycode` |  | |  |  | `CHAR(1)` |  |
| `svh_companycode` |  | |  |  | `CHAR(1)` |  |
| `hnm_companycode` |  | |  |  | `CHAR(30)` |  |
| `hno_companycode` |  | |  |  | `CHAR(32)` |  |
| `hio_companycode` |  | |  |  | `CHAR(30)` |  |
| `tra_ledger` |  | |  |  | `CHAR(2)` |  |
| `sva_ledger` |  | |  |  | `CHAR(1)` |  |
| `tra_00035` |  | |  |  | `CHAR(4)` |  |
| `sva_00035` |  | |  |  | `CHAR(1)` |  |
| `tra_customergroup` |  | |  |  | `CHAR(2)` |  |
| `sva_customergroup` |  | |  |  | `CHAR(1)` |  |
| `svh_customergroup` |  | |  |  | `CHAR(1)` |  |
| `hnm_customergroup` |  | |  |  | `CHAR(30)` |  |
| `hno_customergroup` |  | |  |  | `CHAR(32)` |  |
| `hio_customergroup` |  | |  |  | `CHAR(30)` |  |
| `tra_00036` |  | |  |  | `DATS(8)` |  |
| `sva_00036` |  | |  |  | `CHAR(1)` |  |
| `svh_00036` |  | |  |  | `CHAR(1)` |  |
| `hnm_00036` |  | |  |  | `CHAR(30)` |  |
| `hno_00036` |  | |  |  | `CHAR(32)` |  |
| `hio_00036` |  | |  |  | `CHAR(30)` |  |
| `tra_00037` |  | |  |  | `CHAR(9)` |  |
| `sva_00037` |  | |  |  | `CHAR(1)` |  |
| `doctype` |  | |  |  | `CHAR(1)` |  |
| `owner` |  | |  |  | `CHAR(12)` |  |
| `infoprov` |  | |  |  | `CHAR(30)` |  |
| `sva_infoprov` |  | |  |  | `CHAR(1)` |  |
| `kyfnm` |  | |  |  | `CHAR(30)` |  |
| `docstat` |  | |  |  | `CHAR(1)` |  |
| `session_id` |  | |  |  | `CHAR(30)` |  |
| `timestamp` |  | |  |  | `DEC(15)` |  |
