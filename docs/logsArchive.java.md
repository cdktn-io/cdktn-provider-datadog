# `logsArchive` Submodule <a name="`logsArchive` Submodule" id="@cdktn/provider-datadog.logsArchive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsArchive <a name="LogsArchive" id="@cdktn/provider-datadog.logsArchive.LogsArchive"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive datadog_logs_archive}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_archive.LogsArchive;

LogsArchive.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .query(java.lang.String)
//  .azureArchive(LogsArchiveAzureArchive)
//  .compressionMethod(java.lang.String)
//  .gcsArchive(LogsArchiveGcsArchive)
//  .id(java.lang.String)
//  .includeTags(java.lang.Boolean|IResolvable)
//  .lookupAttributes(java.util.List<java.lang.String>)
//  .partitioningAttributes(java.util.List<java.lang.String>)
//  .rehydrationMaxScanSizeInGb(java.lang.Number)
//  .rehydrationTags(java.util.List<java.lang.String>)
//  .s3Archive(LogsArchiveS3Archive)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Your archive name. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.query">query</a></code> | <code>java.lang.String</code> | The archive query/filter. Logs matching this query are included in the archive. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.azureArchive">azureArchive</a></code> | <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchive">LogsArchiveAzureArchive</a></code> | azure_archive block. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.compressionMethod">compressionMethod</a></code> | <code>java.lang.String</code> | The compression method for the archive. Valid values are `GZIP`, `ZSTD`. Defaults to `"GZIP"`. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.gcsArchive">gcsArchive</a></code> | <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchive">LogsArchiveGcsArchive</a></code> | gcs_archive block. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#id LogsArchive#id}. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.includeTags">includeTags</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | To store the tags in the archive, set the value `true`. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.lookupAttributes">lookupAttributes</a></code> | <code>java.util.List<java.lang.String></code> | An array of attributes to use as lookup keys for the archive. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.partitioningAttributes">partitioningAttributes</a></code> | <code>java.util.List<java.lang.String></code> | An array of attributes to use as partition keys for the archive. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.rehydrationMaxScanSizeInGb">rehydrationMaxScanSizeInGb</a></code> | <code>java.lang.Number</code> | To limit the rehydration scan size for the archive, set a value in GB. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.rehydrationTags">rehydrationTags</a></code> | <code>java.util.List<java.lang.String></code> | An array of tags to add to rehydrated logs from an archive. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.s3Archive">s3Archive</a></code> | <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3Archive">LogsArchiveS3Archive</a></code> | s3_archive block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Your archive name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#name LogsArchive#name}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.query"></a>

- *Type:* java.lang.String

The archive query/filter. Logs matching this query are included in the archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#query LogsArchive#query}

---

##### `azureArchive`<sup>Optional</sup> <a name="azureArchive" id="@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.azureArchive"></a>

- *Type:* <a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchive">LogsArchiveAzureArchive</a>

azure_archive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#azure_archive LogsArchive#azure_archive}

---

##### `compressionMethod`<sup>Optional</sup> <a name="compressionMethod" id="@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.compressionMethod"></a>

- *Type:* java.lang.String

The compression method for the archive. Valid values are `GZIP`, `ZSTD`. Defaults to `"GZIP"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#compression_method LogsArchive#compression_method}

---

##### `gcsArchive`<sup>Optional</sup> <a name="gcsArchive" id="@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.gcsArchive"></a>

- *Type:* <a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchive">LogsArchiveGcsArchive</a>

gcs_archive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#gcs_archive LogsArchive#gcs_archive}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#id LogsArchive#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeTags`<sup>Optional</sup> <a name="includeTags" id="@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.includeTags"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

To store the tags in the archive, set the value `true`.

If it is set to `false`, the tags will be dropped when the logs are sent to the archive. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#include_tags LogsArchive#include_tags}

---

##### `lookupAttributes`<sup>Optional</sup> <a name="lookupAttributes" id="@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.lookupAttributes"></a>

- *Type:* java.util.List<java.lang.String>

An array of attributes to use as lookup keys for the archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#lookup_attributes LogsArchive#lookup_attributes}

---

##### `partitioningAttributes`<sup>Optional</sup> <a name="partitioningAttributes" id="@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.partitioningAttributes"></a>

- *Type:* java.util.List<java.lang.String>

An array of attributes to use as partition keys for the archive.

The attribute used most frequently for querying should be first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#partitioning_attributes LogsArchive#partitioning_attributes}

---

##### `rehydrationMaxScanSizeInGb`<sup>Optional</sup> <a name="rehydrationMaxScanSizeInGb" id="@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.rehydrationMaxScanSizeInGb"></a>

- *Type:* java.lang.Number

To limit the rehydration scan size for the archive, set a value in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#rehydration_max_scan_size_in_gb LogsArchive#rehydration_max_scan_size_in_gb}

---

##### `rehydrationTags`<sup>Optional</sup> <a name="rehydrationTags" id="@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.rehydrationTags"></a>

- *Type:* java.util.List<java.lang.String>

An array of tags to add to rehydrated logs from an archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#rehydration_tags LogsArchive#rehydration_tags}

---

##### `s3Archive`<sup>Optional</sup> <a name="s3Archive" id="@cdktn/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.s3Archive"></a>

- *Type:* <a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3Archive">LogsArchiveS3Archive</a>

s3_archive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#s3_archive LogsArchive#s3_archive}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.putAzureArchive">putAzureArchive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.putGcsArchive">putGcsArchive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.putS3Archive">putS3Archive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.resetAzureArchive">resetAzureArchive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.resetCompressionMethod">resetCompressionMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.resetGcsArchive">resetGcsArchive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.resetIncludeTags">resetIncludeTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.resetLookupAttributes">resetLookupAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.resetPartitioningAttributes">resetPartitioningAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.resetRehydrationMaxScanSizeInGb">resetRehydrationMaxScanSizeInGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.resetRehydrationTags">resetRehydrationTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.resetS3Archive">resetS3Archive</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.logsArchive.LogsArchive.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.logsArchive.LogsArchive.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.logsArchive.LogsArchive.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.logsArchive.LogsArchive.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.logsArchive.LogsArchive.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.logsArchive.LogsArchive.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.logsArchive.LogsArchive.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.logsArchive.LogsArchive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.logsArchive.LogsArchive.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.logsArchive.LogsArchive.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.logsArchive.LogsArchive.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.logsArchive.LogsArchive.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.logsArchive.LogsArchive.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.logsArchive.LogsArchive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchive.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchive.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchive.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchive.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchive.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchive.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchive.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchive.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchive.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.logsArchive.LogsArchive.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.logsArchive.LogsArchive.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.logsArchive.LogsArchive.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.logsArchive.LogsArchive.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchive.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.logsArchive.LogsArchive.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.logsArchive.LogsArchive.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.logsArchive.LogsArchive.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.logsArchive.LogsArchive.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.logsArchive.LogsArchive.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.logsArchive.LogsArchive.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.logsArchive.LogsArchive.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAzureArchive` <a name="putAzureArchive" id="@cdktn/provider-datadog.logsArchive.LogsArchive.putAzureArchive"></a>

```java
public void putAzureArchive(LogsArchiveAzureArchive value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.logsArchive.LogsArchive.putAzureArchive.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchive">LogsArchiveAzureArchive</a>

---

##### `putGcsArchive` <a name="putGcsArchive" id="@cdktn/provider-datadog.logsArchive.LogsArchive.putGcsArchive"></a>

```java
public void putGcsArchive(LogsArchiveGcsArchive value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.logsArchive.LogsArchive.putGcsArchive.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchive">LogsArchiveGcsArchive</a>

---

##### `putS3Archive` <a name="putS3Archive" id="@cdktn/provider-datadog.logsArchive.LogsArchive.putS3Archive"></a>

```java
public void putS3Archive(LogsArchiveS3Archive value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.logsArchive.LogsArchive.putS3Archive.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3Archive">LogsArchiveS3Archive</a>

---

##### `resetAzureArchive` <a name="resetAzureArchive" id="@cdktn/provider-datadog.logsArchive.LogsArchive.resetAzureArchive"></a>

```java
public void resetAzureArchive()
```

##### `resetCompressionMethod` <a name="resetCompressionMethod" id="@cdktn/provider-datadog.logsArchive.LogsArchive.resetCompressionMethod"></a>

```java
public void resetCompressionMethod()
```

##### `resetGcsArchive` <a name="resetGcsArchive" id="@cdktn/provider-datadog.logsArchive.LogsArchive.resetGcsArchive"></a>

```java
public void resetGcsArchive()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-datadog.logsArchive.LogsArchive.resetId"></a>

```java
public void resetId()
```

##### `resetIncludeTags` <a name="resetIncludeTags" id="@cdktn/provider-datadog.logsArchive.LogsArchive.resetIncludeTags"></a>

```java
public void resetIncludeTags()
```

##### `resetLookupAttributes` <a name="resetLookupAttributes" id="@cdktn/provider-datadog.logsArchive.LogsArchive.resetLookupAttributes"></a>

```java
public void resetLookupAttributes()
```

##### `resetPartitioningAttributes` <a name="resetPartitioningAttributes" id="@cdktn/provider-datadog.logsArchive.LogsArchive.resetPartitioningAttributes"></a>

```java
public void resetPartitioningAttributes()
```

##### `resetRehydrationMaxScanSizeInGb` <a name="resetRehydrationMaxScanSizeInGb" id="@cdktn/provider-datadog.logsArchive.LogsArchive.resetRehydrationMaxScanSizeInGb"></a>

```java
public void resetRehydrationMaxScanSizeInGb()
```

##### `resetRehydrationTags` <a name="resetRehydrationTags" id="@cdktn/provider-datadog.logsArchive.LogsArchive.resetRehydrationTags"></a>

```java
public void resetRehydrationTags()
```

##### `resetS3Archive` <a name="resetS3Archive" id="@cdktn/provider-datadog.logsArchive.LogsArchive.resetS3Archive"></a>

```java
public void resetS3Archive()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LogsArchive resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.logsArchive.LogsArchive.isConstruct"></a>

```java
import io.cdktn.providers.datadog.logs_archive.LogsArchive;

LogsArchive.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.logsArchive.LogsArchive.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.logsArchive.LogsArchive.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.logs_archive.LogsArchive;

LogsArchive.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.logsArchive.LogsArchive.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.logsArchive.LogsArchive.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.logs_archive.LogsArchive;

LogsArchive.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.logsArchive.LogsArchive.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.logsArchive.LogsArchive.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.logs_archive.LogsArchive;

LogsArchive.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LogsArchive.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LogsArchive resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.logsArchive.LogsArchive.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.logsArchive.LogsArchive.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LogsArchive to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.logsArchive.LogsArchive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LogsArchive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.logsArchive.LogsArchive.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LogsArchive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.azureArchive">azureArchive</a></code> | <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference">LogsArchiveAzureArchiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.gcsArchive">gcsArchive</a></code> | <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference">LogsArchiveGcsArchiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.s3Archive">s3Archive</a></code> | <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference">LogsArchiveS3ArchiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.azureArchiveInput">azureArchiveInput</a></code> | <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchive">LogsArchiveAzureArchive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.compressionMethodInput">compressionMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.gcsArchiveInput">gcsArchiveInput</a></code> | <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchive">LogsArchiveGcsArchive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.includeTagsInput">includeTagsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.lookupAttributesInput">lookupAttributesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.partitioningAttributesInput">partitioningAttributesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.rehydrationMaxScanSizeInGbInput">rehydrationMaxScanSizeInGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.rehydrationTagsInput">rehydrationTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.s3ArchiveInput">s3ArchiveInput</a></code> | <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3Archive">LogsArchiveS3Archive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.compressionMethod">compressionMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.includeTags">includeTags</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.lookupAttributes">lookupAttributes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.partitioningAttributes">partitioningAttributes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.rehydrationMaxScanSizeInGb">rehydrationMaxScanSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.rehydrationTags">rehydrationTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `azureArchive`<sup>Required</sup> <a name="azureArchive" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.azureArchive"></a>

```java
public LogsArchiveAzureArchiveOutputReference getAzureArchive();
```

- *Type:* <a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference">LogsArchiveAzureArchiveOutputReference</a>

---

##### `gcsArchive`<sup>Required</sup> <a name="gcsArchive" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.gcsArchive"></a>

```java
public LogsArchiveGcsArchiveOutputReference getGcsArchive();
```

- *Type:* <a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference">LogsArchiveGcsArchiveOutputReference</a>

---

##### `s3Archive`<sup>Required</sup> <a name="s3Archive" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.s3Archive"></a>

```java
public LogsArchiveS3ArchiveOutputReference getS3Archive();
```

- *Type:* <a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference">LogsArchiveS3ArchiveOutputReference</a>

---

##### `azureArchiveInput`<sup>Optional</sup> <a name="azureArchiveInput" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.azureArchiveInput"></a>

```java
public LogsArchiveAzureArchive getAzureArchiveInput();
```

- *Type:* <a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchive">LogsArchiveAzureArchive</a>

---

##### `compressionMethodInput`<sup>Optional</sup> <a name="compressionMethodInput" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.compressionMethodInput"></a>

```java
public java.lang.String getCompressionMethodInput();
```

- *Type:* java.lang.String

---

##### `gcsArchiveInput`<sup>Optional</sup> <a name="gcsArchiveInput" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.gcsArchiveInput"></a>

```java
public LogsArchiveGcsArchive getGcsArchiveInput();
```

- *Type:* <a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchive">LogsArchiveGcsArchive</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includeTagsInput`<sup>Optional</sup> <a name="includeTagsInput" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.includeTagsInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeTagsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `lookupAttributesInput`<sup>Optional</sup> <a name="lookupAttributesInput" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.lookupAttributesInput"></a>

```java
public java.util.List<java.lang.String> getLookupAttributesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `partitioningAttributesInput`<sup>Optional</sup> <a name="partitioningAttributesInput" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.partitioningAttributesInput"></a>

```java
public java.util.List<java.lang.String> getPartitioningAttributesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `rehydrationMaxScanSizeInGbInput`<sup>Optional</sup> <a name="rehydrationMaxScanSizeInGbInput" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.rehydrationMaxScanSizeInGbInput"></a>

```java
public java.lang.Number getRehydrationMaxScanSizeInGbInput();
```

- *Type:* java.lang.Number

---

##### `rehydrationTagsInput`<sup>Optional</sup> <a name="rehydrationTagsInput" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.rehydrationTagsInput"></a>

```java
public java.util.List<java.lang.String> getRehydrationTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `s3ArchiveInput`<sup>Optional</sup> <a name="s3ArchiveInput" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.s3ArchiveInput"></a>

```java
public LogsArchiveS3Archive getS3ArchiveInput();
```

- *Type:* <a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3Archive">LogsArchiveS3Archive</a>

---

##### `compressionMethod`<sup>Required</sup> <a name="compressionMethod" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.compressionMethod"></a>

```java
public java.lang.String getCompressionMethod();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `includeTags`<sup>Required</sup> <a name="includeTags" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.includeTags"></a>

```java
public java.lang.Boolean|IResolvable getIncludeTags();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `lookupAttributes`<sup>Required</sup> <a name="lookupAttributes" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.lookupAttributes"></a>

```java
public java.util.List<java.lang.String> getLookupAttributes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `partitioningAttributes`<sup>Required</sup> <a name="partitioningAttributes" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.partitioningAttributes"></a>

```java
public java.util.List<java.lang.String> getPartitioningAttributes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `rehydrationMaxScanSizeInGb`<sup>Required</sup> <a name="rehydrationMaxScanSizeInGb" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.rehydrationMaxScanSizeInGb"></a>

```java
public java.lang.Number getRehydrationMaxScanSizeInGb();
```

- *Type:* java.lang.Number

---

##### `rehydrationTags`<sup>Required</sup> <a name="rehydrationTags" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.rehydrationTags"></a>

```java
public java.util.List<java.lang.String> getRehydrationTags();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchive.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.logsArchive.LogsArchive.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LogsArchiveAzureArchive <a name="LogsArchiveAzureArchive" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchive"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchive.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_archive.LogsArchiveAzureArchive;

LogsArchiveAzureArchive.builder()
    .clientId(java.lang.String)
    .container(java.lang.String)
    .storageAccount(java.lang.String)
    .tenantId(java.lang.String)
//  .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Your client id. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.container">container</a></code> | <code>java.lang.String</code> | The container where the archive is stored. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.storageAccount">storageAccount</a></code> | <code>java.lang.String</code> | The associated storage account. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Your tenant id. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.path">path</a></code> | <code>java.lang.String</code> | The path where the archive is stored. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Your client id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#client_id LogsArchive#client_id}

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.container"></a>

```java
public java.lang.String getContainer();
```

- *Type:* java.lang.String

The container where the archive is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#container LogsArchive#container}

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.storageAccount"></a>

```java
public java.lang.String getStorageAccount();
```

- *Type:* java.lang.String

The associated storage account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#storage_account LogsArchive#storage_account}

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Your tenant id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#tenant_id LogsArchive#tenant_id}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The path where the archive is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#path LogsArchive#path}

---

### LogsArchiveConfig <a name="LogsArchiveConfig" id="@cdktn/provider-datadog.logsArchive.LogsArchiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_archive.LogsArchiveConfig;

LogsArchiveConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .query(java.lang.String)
//  .azureArchive(LogsArchiveAzureArchive)
//  .compressionMethod(java.lang.String)
//  .gcsArchive(LogsArchiveGcsArchive)
//  .id(java.lang.String)
//  .includeTags(java.lang.Boolean|IResolvable)
//  .lookupAttributes(java.util.List<java.lang.String>)
//  .partitioningAttributes(java.util.List<java.lang.String>)
//  .rehydrationMaxScanSizeInGb(java.lang.Number)
//  .rehydrationTags(java.util.List<java.lang.String>)
//  .s3Archive(LogsArchiveS3Archive)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.name">name</a></code> | <code>java.lang.String</code> | Your archive name. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.query">query</a></code> | <code>java.lang.String</code> | The archive query/filter. Logs matching this query are included in the archive. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.azureArchive">azureArchive</a></code> | <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchive">LogsArchiveAzureArchive</a></code> | azure_archive block. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.compressionMethod">compressionMethod</a></code> | <code>java.lang.String</code> | The compression method for the archive. Valid values are `GZIP`, `ZSTD`. Defaults to `"GZIP"`. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.gcsArchive">gcsArchive</a></code> | <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchive">LogsArchiveGcsArchive</a></code> | gcs_archive block. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#id LogsArchive#id}. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.includeTags">includeTags</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | To store the tags in the archive, set the value `true`. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.lookupAttributes">lookupAttributes</a></code> | <code>java.util.List<java.lang.String></code> | An array of attributes to use as lookup keys for the archive. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.partitioningAttributes">partitioningAttributes</a></code> | <code>java.util.List<java.lang.String></code> | An array of attributes to use as partition keys for the archive. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.rehydrationMaxScanSizeInGb">rehydrationMaxScanSizeInGb</a></code> | <code>java.lang.Number</code> | To limit the rehydration scan size for the archive, set a value in GB. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.rehydrationTags">rehydrationTags</a></code> | <code>java.util.List<java.lang.String></code> | An array of tags to add to rehydrated logs from an archive. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.s3Archive">s3Archive</a></code> | <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3Archive">LogsArchiveS3Archive</a></code> | s3_archive block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Your archive name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#name LogsArchive#name}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

The archive query/filter. Logs matching this query are included in the archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#query LogsArchive#query}

---

##### `azureArchive`<sup>Optional</sup> <a name="azureArchive" id="@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.azureArchive"></a>

```java
public LogsArchiveAzureArchive getAzureArchive();
```

- *Type:* <a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchive">LogsArchiveAzureArchive</a>

azure_archive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#azure_archive LogsArchive#azure_archive}

---

##### `compressionMethod`<sup>Optional</sup> <a name="compressionMethod" id="@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.compressionMethod"></a>

```java
public java.lang.String getCompressionMethod();
```

- *Type:* java.lang.String

The compression method for the archive. Valid values are `GZIP`, `ZSTD`. Defaults to `"GZIP"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#compression_method LogsArchive#compression_method}

---

##### `gcsArchive`<sup>Optional</sup> <a name="gcsArchive" id="@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.gcsArchive"></a>

```java
public LogsArchiveGcsArchive getGcsArchive();
```

- *Type:* <a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchive">LogsArchiveGcsArchive</a>

gcs_archive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#gcs_archive LogsArchive#gcs_archive}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#id LogsArchive#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeTags`<sup>Optional</sup> <a name="includeTags" id="@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.includeTags"></a>

```java
public java.lang.Boolean|IResolvable getIncludeTags();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

To store the tags in the archive, set the value `true`.

If it is set to `false`, the tags will be dropped when the logs are sent to the archive. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#include_tags LogsArchive#include_tags}

---

##### `lookupAttributes`<sup>Optional</sup> <a name="lookupAttributes" id="@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.lookupAttributes"></a>

```java
public java.util.List<java.lang.String> getLookupAttributes();
```

- *Type:* java.util.List<java.lang.String>

An array of attributes to use as lookup keys for the archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#lookup_attributes LogsArchive#lookup_attributes}

---

##### `partitioningAttributes`<sup>Optional</sup> <a name="partitioningAttributes" id="@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.partitioningAttributes"></a>

```java
public java.util.List<java.lang.String> getPartitioningAttributes();
```

- *Type:* java.util.List<java.lang.String>

An array of attributes to use as partition keys for the archive.

The attribute used most frequently for querying should be first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#partitioning_attributes LogsArchive#partitioning_attributes}

---

##### `rehydrationMaxScanSizeInGb`<sup>Optional</sup> <a name="rehydrationMaxScanSizeInGb" id="@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.rehydrationMaxScanSizeInGb"></a>

```java
public java.lang.Number getRehydrationMaxScanSizeInGb();
```

- *Type:* java.lang.Number

To limit the rehydration scan size for the archive, set a value in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#rehydration_max_scan_size_in_gb LogsArchive#rehydration_max_scan_size_in_gb}

---

##### `rehydrationTags`<sup>Optional</sup> <a name="rehydrationTags" id="@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.rehydrationTags"></a>

```java
public java.util.List<java.lang.String> getRehydrationTags();
```

- *Type:* java.util.List<java.lang.String>

An array of tags to add to rehydrated logs from an archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#rehydration_tags LogsArchive#rehydration_tags}

---

##### `s3Archive`<sup>Optional</sup> <a name="s3Archive" id="@cdktn/provider-datadog.logsArchive.LogsArchiveConfig.property.s3Archive"></a>

```java
public LogsArchiveS3Archive getS3Archive();
```

- *Type:* <a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3Archive">LogsArchiveS3Archive</a>

s3_archive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#s3_archive LogsArchive#s3_archive}

---

### LogsArchiveGcsArchive <a name="LogsArchiveGcsArchive" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchive"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchive.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_archive.LogsArchiveGcsArchive;

LogsArchiveGcsArchive.builder()
    .bucket(java.lang.String)
    .clientEmail(java.lang.String)
//  .path(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchive.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Name of your GCS bucket. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchive.property.clientEmail">clientEmail</a></code> | <code>java.lang.String</code> | Your client email. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchive.property.path">path</a></code> | <code>java.lang.String</code> | Path where the archive is stored. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchive.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Your project id. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchive.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Name of your GCS bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#bucket LogsArchive#bucket}

---

##### `clientEmail`<sup>Required</sup> <a name="clientEmail" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchive.property.clientEmail"></a>

```java
public java.lang.String getClientEmail();
```

- *Type:* java.lang.String

Your client email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#client_email LogsArchive#client_email}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchive.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path where the archive is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#path LogsArchive#path}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchive.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Your project id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#project_id LogsArchive#project_id}

---

### LogsArchiveS3Archive <a name="LogsArchiveS3Archive" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3Archive"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3Archive.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_archive.LogsArchiveS3Archive;

LogsArchiveS3Archive.builder()
    .bucket(java.lang.String)
//  .accessKeyId(java.lang.String)
//  .accountId(java.lang.String)
//  .encryptionKey(java.lang.String)
//  .encryptionType(java.lang.String)
//  .path(java.lang.String)
//  .roleName(java.lang.String)
//  .storageClass(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3Archive.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Name of your s3 bucket. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3Archive.property.accessKeyId">accessKeyId</a></code> | <code>java.lang.String</code> | Your AWS access key id, used as an alternative to `account_id`/`role_name`. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3Archive.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Your AWS account id. Required with `role_name`; mutually exclusive with `access_key_id`. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3Archive.property.encryptionKey">encryptionKey</a></code> | <code>java.lang.String</code> | The AWS KMS encryption key. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3Archive.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | The type of encryption on your archive. Valid values are `NO_OVERRIDE`, `SSE_S3`, `SSE_KMS`. Defaults to `"NO_OVERRIDE"`. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3Archive.property.path">path</a></code> | <code>java.lang.String</code> | Path where the archive is stored. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3Archive.property.roleName">roleName</a></code> | <code>java.lang.String</code> | Your AWS role name. Required with `account_id`; mutually exclusive with `access_key_id`. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3Archive.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | The AWS S3 storage class used to upload the logs. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3Archive.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Name of your s3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#bucket LogsArchive#bucket}

---

##### `accessKeyId`<sup>Optional</sup> <a name="accessKeyId" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3Archive.property.accessKeyId"></a>

```java
public java.lang.String getAccessKeyId();
```

- *Type:* java.lang.String

Your AWS access key id, used as an alternative to `account_id`/`role_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#access_key_id LogsArchive#access_key_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3Archive.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Your AWS account id. Required with `role_name`; mutually exclusive with `access_key_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#account_id LogsArchive#account_id}

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3Archive.property.encryptionKey"></a>

```java
public java.lang.String getEncryptionKey();
```

- *Type:* java.lang.String

The AWS KMS encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#encryption_key LogsArchive#encryption_key}

---

##### `encryptionType`<sup>Optional</sup> <a name="encryptionType" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3Archive.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

The type of encryption on your archive. Valid values are `NO_OVERRIDE`, `SSE_S3`, `SSE_KMS`. Defaults to `"NO_OVERRIDE"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#encryption_type LogsArchive#encryption_type}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3Archive.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path where the archive is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#path LogsArchive#path}

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3Archive.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

Your AWS role name. Required with `account_id`; mutually exclusive with `access_key_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#role_name LogsArchive#role_name}

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3Archive.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

The AWS S3 storage class used to upload the logs.

Valid values are `STANDARD`, `STANDARD_IA`, `ONEZONE_IA`, `INTELLIGENT_TIERING`, `GLACIER_IR`. Defaults to `"STANDARD"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/logs_archive#storage_class LogsArchive#storage_class}

---

## Classes <a name="Classes" id="Classes"></a>

### LogsArchiveAzureArchiveOutputReference <a name="LogsArchiveAzureArchiveOutputReference" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_archive.LogsArchiveAzureArchiveOutputReference;

new LogsArchiveAzureArchiveOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.resetPath"></a>

```java
public void resetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.containerInput">containerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.storageAccountInput">storageAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.container">container</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.storageAccount">storageAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchive">LogsArchiveAzureArchive</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.containerInput"></a>

```java
public java.lang.String getContainerInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `storageAccountInput`<sup>Optional</sup> <a name="storageAccountInput" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.storageAccountInput"></a>

```java
public java.lang.String getStorageAccountInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.container"></a>

```java
public java.lang.String getContainer();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.storageAccount"></a>

```java
public java.lang.String getStorageAccount();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.internalValue"></a>

```java
public LogsArchiveAzureArchive getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveAzureArchive">LogsArchiveAzureArchive</a>

---


### LogsArchiveGcsArchiveOutputReference <a name="LogsArchiveGcsArchiveOutputReference" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_archive.LogsArchiveGcsArchiveOutputReference;

new LogsArchiveGcsArchiveOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.resetProjectId"></a>

```java
public void resetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.clientEmailInput">clientEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.clientEmail">clientEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchive">LogsArchiveGcsArchive</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `clientEmailInput`<sup>Optional</sup> <a name="clientEmailInput" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.clientEmailInput"></a>

```java
public java.lang.String getClientEmailInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `clientEmail`<sup>Required</sup> <a name="clientEmail" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.clientEmail"></a>

```java
public java.lang.String getClientEmail();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.internalValue"></a>

```java
public LogsArchiveGcsArchive getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveGcsArchive">LogsArchiveGcsArchive</a>

---


### LogsArchiveS3ArchiveOutputReference <a name="LogsArchiveS3ArchiveOutputReference" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_archive.LogsArchiveS3ArchiveOutputReference;

new LogsArchiveS3ArchiveOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resetAccessKeyId">resetAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resetEncryptionType">resetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resetRoleName">resetRoleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resetStorageClass">resetStorageClass</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessKeyId` <a name="resetAccessKeyId" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resetAccessKeyId"></a>

```java
public void resetAccessKeyId()
```

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resetEncryptionKey"></a>

```java
public void resetEncryptionKey()
```

##### `resetEncryptionType` <a name="resetEncryptionType" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resetEncryptionType"></a>

```java
public void resetEncryptionType()
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetRoleName` <a name="resetRoleName" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resetRoleName"></a>

```java
public void resetRoleName()
```

##### `resetStorageClass` <a name="resetStorageClass" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resetStorageClass"></a>

```java
public void resetStorageClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.accessKeyIdInput">accessKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.roleNameInput">roleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.storageClassInput">storageClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.accessKeyId">accessKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.encryptionKey">encryptionKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.roleName">roleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3Archive">LogsArchiveS3Archive</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessKeyIdInput`<sup>Optional</sup> <a name="accessKeyIdInput" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.accessKeyIdInput"></a>

```java
public java.lang.String getAccessKeyIdInput();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.encryptionKeyInput"></a>

```java
public java.lang.String getEncryptionKeyInput();
```

- *Type:* java.lang.String

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.encryptionTypeInput"></a>

```java
public java.lang.String getEncryptionTypeInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.roleNameInput"></a>

```java
public java.lang.String getRoleNameInput();
```

- *Type:* java.lang.String

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.storageClassInput"></a>

```java
public java.lang.String getStorageClassInput();
```

- *Type:* java.lang.String

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.accessKeyId"></a>

```java
public java.lang.String getAccessKeyId();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.encryptionKey"></a>

```java
public java.lang.String getEncryptionKey();
```

- *Type:* java.lang.String

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.internalValue"></a>

```java
public LogsArchiveS3Archive getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.logsArchive.LogsArchiveS3Archive">LogsArchiveS3Archive</a>

---



