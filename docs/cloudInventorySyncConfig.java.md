# `cloudInventorySyncConfig` Submodule <a name="`cloudInventorySyncConfig` Submodule" id="@cdktn/provider-datadog.cloudInventorySyncConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudInventorySyncConfig <a name="CloudInventorySyncConfig" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/cloud_inventory_sync_config datadog_cloud_inventory_sync_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.cloud_inventory_sync_config.CloudInventorySyncConfig;

CloudInventorySyncConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cloudProvider(java.lang.String)
//  .aws(CloudInventorySyncConfigAws)
//  .azure(CloudInventorySyncConfigAzure)
//  .gcp(CloudInventorySyncConfigGcp)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.cloudProvider">cloudProvider</a></code> | <code>java.lang.String</code> | The cloud provider type. Valid values are `aws`, `azure`, `gcp`. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.aws">aws</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws">CloudInventorySyncConfigAws</a></code> | aws block. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.azure">azure</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure">CloudInventorySyncConfigAzure</a></code> | azure block. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.gcp">gcp</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp">CloudInventorySyncConfigGcp</a></code> | gcp block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.cloudProvider"></a>

- *Type:* java.lang.String

The cloud provider type. Valid values are `aws`, `azure`, `gcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/cloud_inventory_sync_config#cloud_provider CloudInventorySyncConfig#cloud_provider}

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.aws"></a>

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws">CloudInventorySyncConfigAws</a>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/cloud_inventory_sync_config#aws CloudInventorySyncConfig#aws}

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.azure"></a>

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure">CloudInventorySyncConfigAzure</a>

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/cloud_inventory_sync_config#azure CloudInventorySyncConfig#azure}

---

##### `gcp`<sup>Optional</sup> <a name="gcp" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.gcp"></a>

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp">CloudInventorySyncConfigGcp</a>

gcp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/cloud_inventory_sync_config#gcp CloudInventorySyncConfig#gcp}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAws">putAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAzure">putAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putGcp">putGcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetAws">resetAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetAzure">resetAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetGcp">resetGcp</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAws` <a name="putAws" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAws"></a>

```java
public void putAws(CloudInventorySyncConfigAws value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAws.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws">CloudInventorySyncConfigAws</a>

---

##### `putAzure` <a name="putAzure" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAzure"></a>

```java
public void putAzure(CloudInventorySyncConfigAzure value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAzure.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure">CloudInventorySyncConfigAzure</a>

---

##### `putGcp` <a name="putGcp" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putGcp"></a>

```java
public void putGcp(CloudInventorySyncConfigGcp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putGcp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp">CloudInventorySyncConfigGcp</a>

---

##### `resetAws` <a name="resetAws" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetAws"></a>

```java
public void resetAws()
```

##### `resetAzure` <a name="resetAzure" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetAzure"></a>

```java
public void resetAzure()
```

##### `resetGcp` <a name="resetGcp" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetGcp"></a>

```java
public void resetGcp()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudInventorySyncConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isConstruct"></a>

```java
import io.cdktn.providers.datadog.cloud_inventory_sync_config.CloudInventorySyncConfig;

CloudInventorySyncConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.cloud_inventory_sync_config.CloudInventorySyncConfig;

CloudInventorySyncConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.cloud_inventory_sync_config.CloudInventorySyncConfig;

CloudInventorySyncConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.cloud_inventory_sync_config.CloudInventorySyncConfig;

CloudInventorySyncConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudInventorySyncConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudInventorySyncConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudInventorySyncConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudInventorySyncConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/cloud_inventory_sync_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudInventorySyncConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.aws">aws</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference">CloudInventorySyncConfigAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.azure">azure</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference">CloudInventorySyncConfigAzureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.gcp">gcp</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference">CloudInventorySyncConfigGcpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.awsInput">awsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws">CloudInventorySyncConfigAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.azureInput">azureInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure">CloudInventorySyncConfigAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.cloudProviderInput">cloudProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.gcpInput">gcpInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp">CloudInventorySyncConfigGcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.cloudProvider">cloudProvider</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.aws"></a>

```java
public CloudInventorySyncConfigAwsOutputReference getAws();
```

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference">CloudInventorySyncConfigAwsOutputReference</a>

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.azure"></a>

```java
public CloudInventorySyncConfigAzureOutputReference getAzure();
```

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference">CloudInventorySyncConfigAzureOutputReference</a>

---

##### `gcp`<sup>Required</sup> <a name="gcp" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.gcp"></a>

```java
public CloudInventorySyncConfigGcpOutputReference getGcp();
```

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference">CloudInventorySyncConfigGcpOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `awsInput`<sup>Optional</sup> <a name="awsInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.awsInput"></a>

```java
public IResolvable|CloudInventorySyncConfigAws getAwsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws">CloudInventorySyncConfigAws</a>

---

##### `azureInput`<sup>Optional</sup> <a name="azureInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.azureInput"></a>

```java
public IResolvable|CloudInventorySyncConfigAzure getAzureInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure">CloudInventorySyncConfigAzure</a>

---

##### `cloudProviderInput`<sup>Optional</sup> <a name="cloudProviderInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.cloudProviderInput"></a>

```java
public java.lang.String getCloudProviderInput();
```

- *Type:* java.lang.String

---

##### `gcpInput`<sup>Optional</sup> <a name="gcpInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.gcpInput"></a>

```java
public IResolvable|CloudInventorySyncConfigGcp getGcpInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp">CloudInventorySyncConfigGcp</a>

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.cloudProvider"></a>

```java
public java.lang.String getCloudProvider();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudInventorySyncConfigAws <a name="CloudInventorySyncConfigAws" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.Initializer"></a>

```java
import io.cdktn.providers.datadog.cloud_inventory_sync_config.CloudInventorySyncConfigAws;

CloudInventorySyncConfigAws.builder()
//  .awsAccountId(java.lang.String)
//  .destinationBucketName(java.lang.String)
//  .destinationBucketRegion(java.lang.String)
//  .destinationPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | AWS Account ID of the account holding the bucket. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.destinationBucketName">destinationBucketName</a></code> | <code>java.lang.String</code> | Name of the S3 bucket holding the inventory files. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.destinationBucketRegion">destinationBucketRegion</a></code> | <code>java.lang.String</code> | AWS Region of the bucket holding the inventory files. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.destinationPrefix">destinationPrefix</a></code> | <code>java.lang.String</code> | Prefix path within the bucket for inventory files. |

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

AWS Account ID of the account holding the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/cloud_inventory_sync_config#aws_account_id CloudInventorySyncConfig#aws_account_id}

---

##### `destinationBucketName`<sup>Optional</sup> <a name="destinationBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.destinationBucketName"></a>

```java
public java.lang.String getDestinationBucketName();
```

- *Type:* java.lang.String

Name of the S3 bucket holding the inventory files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/cloud_inventory_sync_config#destination_bucket_name CloudInventorySyncConfig#destination_bucket_name}

---

##### `destinationBucketRegion`<sup>Optional</sup> <a name="destinationBucketRegion" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.destinationBucketRegion"></a>

```java
public java.lang.String getDestinationBucketRegion();
```

- *Type:* java.lang.String

AWS Region of the bucket holding the inventory files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/cloud_inventory_sync_config#destination_bucket_region CloudInventorySyncConfig#destination_bucket_region}

---

##### `destinationPrefix`<sup>Optional</sup> <a name="destinationPrefix" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.destinationPrefix"></a>

```java
public java.lang.String getDestinationPrefix();
```

- *Type:* java.lang.String

Prefix path within the bucket for inventory files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/cloud_inventory_sync_config#destination_prefix CloudInventorySyncConfig#destination_prefix}

---

### CloudInventorySyncConfigAzure <a name="CloudInventorySyncConfigAzure" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.Initializer"></a>

```java
import io.cdktn.providers.datadog.cloud_inventory_sync_config.CloudInventorySyncConfigAzure;

CloudInventorySyncConfigAzure.builder()
//  .clientId(java.lang.String)
//  .container(java.lang.String)
//  .resourceGroup(java.lang.String)
//  .storageAccount(java.lang.String)
//  .subscriptionId(java.lang.String)
//  .tenantId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Azure Client ID. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.container">container</a></code> | <code>java.lang.String</code> | Azure Storage Container name. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.resourceGroup">resourceGroup</a></code> | <code>java.lang.String</code> | Azure Resource Group name. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.storageAccount">storageAccount</a></code> | <code>java.lang.String</code> | Azure Storage Account name. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Azure Subscription ID. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Azure Tenant ID. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Azure Client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/cloud_inventory_sync_config#client_id CloudInventorySyncConfig#client_id}

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.container"></a>

```java
public java.lang.String getContainer();
```

- *Type:* java.lang.String

Azure Storage Container name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/cloud_inventory_sync_config#container CloudInventorySyncConfig#container}

---

##### `resourceGroup`<sup>Optional</sup> <a name="resourceGroup" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.resourceGroup"></a>

```java
public java.lang.String getResourceGroup();
```

- *Type:* java.lang.String

Azure Resource Group name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/cloud_inventory_sync_config#resource_group CloudInventorySyncConfig#resource_group}

---

##### `storageAccount`<sup>Optional</sup> <a name="storageAccount" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.storageAccount"></a>

```java
public java.lang.String getStorageAccount();
```

- *Type:* java.lang.String

Azure Storage Account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/cloud_inventory_sync_config#storage_account CloudInventorySyncConfig#storage_account}

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

Azure Subscription ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/cloud_inventory_sync_config#subscription_id CloudInventorySyncConfig#subscription_id}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Azure Tenant ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/cloud_inventory_sync_config#tenant_id CloudInventorySyncConfig#tenant_id}

---

### CloudInventorySyncConfigConfig <a name="CloudInventorySyncConfigConfig" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.cloud_inventory_sync_config.CloudInventorySyncConfigConfig;

CloudInventorySyncConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cloudProvider(java.lang.String)
//  .aws(CloudInventorySyncConfigAws)
//  .azure(CloudInventorySyncConfigAzure)
//  .gcp(CloudInventorySyncConfigGcp)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.cloudProvider">cloudProvider</a></code> | <code>java.lang.String</code> | The cloud provider type. Valid values are `aws`, `azure`, `gcp`. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.aws">aws</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws">CloudInventorySyncConfigAws</a></code> | aws block. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.azure">azure</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure">CloudInventorySyncConfigAzure</a></code> | azure block. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.gcp">gcp</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp">CloudInventorySyncConfigGcp</a></code> | gcp block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.cloudProvider"></a>

```java
public java.lang.String getCloudProvider();
```

- *Type:* java.lang.String

The cloud provider type. Valid values are `aws`, `azure`, `gcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/cloud_inventory_sync_config#cloud_provider CloudInventorySyncConfig#cloud_provider}

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.aws"></a>

```java
public CloudInventorySyncConfigAws getAws();
```

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws">CloudInventorySyncConfigAws</a>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/cloud_inventory_sync_config#aws CloudInventorySyncConfig#aws}

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.azure"></a>

```java
public CloudInventorySyncConfigAzure getAzure();
```

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure">CloudInventorySyncConfigAzure</a>

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/cloud_inventory_sync_config#azure CloudInventorySyncConfig#azure}

---

##### `gcp`<sup>Optional</sup> <a name="gcp" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.gcp"></a>

```java
public CloudInventorySyncConfigGcp getGcp();
```

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp">CloudInventorySyncConfigGcp</a>

gcp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/cloud_inventory_sync_config#gcp CloudInventorySyncConfig#gcp}

---

### CloudInventorySyncConfigGcp <a name="CloudInventorySyncConfigGcp" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.Initializer"></a>

```java
import io.cdktn.providers.datadog.cloud_inventory_sync_config.CloudInventorySyncConfigGcp;

CloudInventorySyncConfigGcp.builder()
//  .destinationBucketName(java.lang.String)
//  .projectId(java.lang.String)
//  .serviceAccountEmail(java.lang.String)
//  .sourceBucketName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.destinationBucketName">destinationBucketName</a></code> | <code>java.lang.String</code> | Name of the GCS bucket holding the inventory files. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.projectId">projectId</a></code> | <code>java.lang.String</code> | GCP Project ID of the project holding the bucket. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | Service account email used for reading the bucket. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.sourceBucketName">sourceBucketName</a></code> | <code>java.lang.String</code> | Name of the source bucket the inventory report is generated for. |

---

##### `destinationBucketName`<sup>Optional</sup> <a name="destinationBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.destinationBucketName"></a>

```java
public java.lang.String getDestinationBucketName();
```

- *Type:* java.lang.String

Name of the GCS bucket holding the inventory files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/cloud_inventory_sync_config#destination_bucket_name CloudInventorySyncConfig#destination_bucket_name}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

GCP Project ID of the project holding the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/cloud_inventory_sync_config#project_id CloudInventorySyncConfig#project_id}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

Service account email used for reading the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/cloud_inventory_sync_config#service_account_email CloudInventorySyncConfig#service_account_email}

---

##### `sourceBucketName`<sup>Optional</sup> <a name="sourceBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.sourceBucketName"></a>

```java
public java.lang.String getSourceBucketName();
```

- *Type:* java.lang.String

Name of the source bucket the inventory report is generated for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/cloud_inventory_sync_config#source_bucket_name CloudInventorySyncConfig#source_bucket_name}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudInventorySyncConfigAwsOutputReference <a name="CloudInventorySyncConfigAwsOutputReference" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.cloud_inventory_sync_config.CloudInventorySyncConfigAwsOutputReference;

new CloudInventorySyncConfigAwsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetDestinationBucketName">resetDestinationBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetDestinationBucketRegion">resetDestinationBucketRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetDestinationPrefix">resetDestinationPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetAwsAccountId"></a>

```java
public void resetAwsAccountId()
```

##### `resetDestinationBucketName` <a name="resetDestinationBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetDestinationBucketName"></a>

```java
public void resetDestinationBucketName()
```

##### `resetDestinationBucketRegion` <a name="resetDestinationBucketRegion" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetDestinationBucketRegion"></a>

```java
public void resetDestinationBucketRegion()
```

##### `resetDestinationPrefix` <a name="resetDestinationPrefix" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetDestinationPrefix"></a>

```java
public void resetDestinationPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketNameInput">destinationBucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketRegionInput">destinationBucketRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationPrefixInput">destinationPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketName">destinationBucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketRegion">destinationBucketRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationPrefix">destinationPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws">CloudInventorySyncConfigAws</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.awsAccountIdInput"></a>

```java
public java.lang.String getAwsAccountIdInput();
```

- *Type:* java.lang.String

---

##### `destinationBucketNameInput`<sup>Optional</sup> <a name="destinationBucketNameInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketNameInput"></a>

```java
public java.lang.String getDestinationBucketNameInput();
```

- *Type:* java.lang.String

---

##### `destinationBucketRegionInput`<sup>Optional</sup> <a name="destinationBucketRegionInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketRegionInput"></a>

```java
public java.lang.String getDestinationBucketRegionInput();
```

- *Type:* java.lang.String

---

##### `destinationPrefixInput`<sup>Optional</sup> <a name="destinationPrefixInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationPrefixInput"></a>

```java
public java.lang.String getDestinationPrefixInput();
```

- *Type:* java.lang.String

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

---

##### `destinationBucketName`<sup>Required</sup> <a name="destinationBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketName"></a>

```java
public java.lang.String getDestinationBucketName();
```

- *Type:* java.lang.String

---

##### `destinationBucketRegion`<sup>Required</sup> <a name="destinationBucketRegion" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketRegion"></a>

```java
public java.lang.String getDestinationBucketRegion();
```

- *Type:* java.lang.String

---

##### `destinationPrefix`<sup>Required</sup> <a name="destinationPrefix" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationPrefix"></a>

```java
public java.lang.String getDestinationPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudInventorySyncConfigAws getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws">CloudInventorySyncConfigAws</a>

---


### CloudInventorySyncConfigAzureOutputReference <a name="CloudInventorySyncConfigAzureOutputReference" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.cloud_inventory_sync_config.CloudInventorySyncConfigAzureOutputReference;

new CloudInventorySyncConfigAzureOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetContainer">resetContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetResourceGroup">resetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetStorageAccount">resetStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetTenantId">resetTenantId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetContainer` <a name="resetContainer" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetContainer"></a>

```java
public void resetContainer()
```

##### `resetResourceGroup` <a name="resetResourceGroup" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetResourceGroup"></a>

```java
public void resetResourceGroup()
```

##### `resetStorageAccount` <a name="resetStorageAccount" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetStorageAccount"></a>

```java
public void resetStorageAccount()
```

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetSubscriptionId"></a>

```java
public void resetSubscriptionId()
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetTenantId"></a>

```java
public void resetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.containerInput">containerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.resourceGroupInput">resourceGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.storageAccountInput">storageAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.container">container</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.resourceGroup">resourceGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.storageAccount">storageAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure">CloudInventorySyncConfigAzure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.containerInput"></a>

```java
public java.lang.String getContainerInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupInput`<sup>Optional</sup> <a name="resourceGroupInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.resourceGroupInput"></a>

```java
public java.lang.String getResourceGroupInput();
```

- *Type:* java.lang.String

---

##### `storageAccountInput`<sup>Optional</sup> <a name="storageAccountInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.storageAccountInput"></a>

```java
public java.lang.String getStorageAccountInput();
```

- *Type:* java.lang.String

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.subscriptionIdInput"></a>

```java
public java.lang.String getSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.container"></a>

```java
public java.lang.String getContainer();
```

- *Type:* java.lang.String

---

##### `resourceGroup`<sup>Required</sup> <a name="resourceGroup" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.resourceGroup"></a>

```java
public java.lang.String getResourceGroup();
```

- *Type:* java.lang.String

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.storageAccount"></a>

```java
public java.lang.String getStorageAccount();
```

- *Type:* java.lang.String

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudInventorySyncConfigAzure getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure">CloudInventorySyncConfigAzure</a>

---


### CloudInventorySyncConfigGcpOutputReference <a name="CloudInventorySyncConfigGcpOutputReference" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.cloud_inventory_sync_config.CloudInventorySyncConfigGcpOutputReference;

new CloudInventorySyncConfigGcpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetDestinationBucketName">resetDestinationBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetSourceBucketName">resetSourceBucketName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationBucketName` <a name="resetDestinationBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetDestinationBucketName"></a>

```java
public void resetDestinationBucketName()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetServiceAccountEmail"></a>

```java
public void resetServiceAccountEmail()
```

##### `resetSourceBucketName` <a name="resetSourceBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetSourceBucketName"></a>

```java
public void resetSourceBucketName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.destinationBucketNameInput">destinationBucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.sourceBucketNameInput">sourceBucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.destinationBucketName">destinationBucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.sourceBucketName">sourceBucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp">CloudInventorySyncConfigGcp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationBucketNameInput`<sup>Optional</sup> <a name="destinationBucketNameInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.destinationBucketNameInput"></a>

```java
public java.lang.String getDestinationBucketNameInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.serviceAccountEmailInput"></a>

```java
public java.lang.String getServiceAccountEmailInput();
```

- *Type:* java.lang.String

---

##### `sourceBucketNameInput`<sup>Optional</sup> <a name="sourceBucketNameInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.sourceBucketNameInput"></a>

```java
public java.lang.String getSourceBucketNameInput();
```

- *Type:* java.lang.String

---

##### `destinationBucketName`<sup>Required</sup> <a name="destinationBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.destinationBucketName"></a>

```java
public java.lang.String getDestinationBucketName();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

##### `sourceBucketName`<sup>Required</sup> <a name="sourceBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.sourceBucketName"></a>

```java
public java.lang.String getSourceBucketName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudInventorySyncConfigGcp getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp">CloudInventorySyncConfigGcp</a>

---



