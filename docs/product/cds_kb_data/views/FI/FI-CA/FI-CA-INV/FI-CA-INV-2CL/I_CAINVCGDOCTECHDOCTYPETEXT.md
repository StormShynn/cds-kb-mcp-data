---
name: I_CAINVCGDOCTECHDOCTYPETEXT
description: "Cainvcgdoctechdoctypetext"
app_component: FI-CA-INV-2CL
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
  - FI
  - FI-CA
  - FI-CA-INV
  - interface-view
  - text-view
  - text
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CAINVCGDOCTECHDOCTYPETEXT

**Cainvcgdoctechdoctypetext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
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
| `CAInvcgTechnicalDocumentType` | ✓ | |  | `cast ( substring( dd07t.domvalue_l,1,1 ) as techdoctype_kk preserving type )` | `CHAR(1)` | Type of Technical Billing/Invoicing Document |
| `Language` | ✓ | |  | `cast ( ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `CAInvcgDocTechDocTypeText` |  | |  | `cast ( ddtext as techdoctype_txt_gfn_kk preserving type )` | `CHAR(60)` | Text for Type of Technical Billing/Invoicing Document |
| `_CAInvcgDocTechDocType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgDocTechDocType` | `I_CAInvcgDocTechDocType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Art des technischen Belegs (Texte)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CAInvcgTechnicalDocumentType',
  sapObjectNodeType.name: 'ContrAcctgInvcgTechDocTypeText',
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #LANGUAGE_DEPENDENT_TEXT,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC

define view entity I_CAInvcgDocTechDocTypeText
  as select from dd07t
  association [1..1] to I_CAInvcgDocTechDocType as _CAInvcgDocTechDocType on $projection.CAInvcgTechnicalDocumentType = _CAInvcgDocTechDocType.CAInvcgTechnicalDocumentType
  association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CAInvcgDocTechDocType'
  key cast ( substring( dd07t.domvalue_l,1,1 ) as techdoctype_kk preserving type ) as CAInvcgTechnicalDocumentType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast ( ddlanguage as spras preserving type )                                 as Language,
      @Semantics.text
      cast ( ddtext as techdoctype_txt_gfn_kk preserving type )                    as CAInvcgDocTechDocTypeText,

      _CAInvcgDocTechDocType,
      _Language
}
where
      domname  = 'TECHDOCTYPE_KK'
  and as4local = 'A'
```
