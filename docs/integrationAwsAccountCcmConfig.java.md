# `integrationAwsAccountCcmConfig` Submodule <a name="`integrationAwsAccountCcmConfig` Submodule" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAwsAccountCcmConfig <a name="IntegrationAwsAccountCcmConfig" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/integration_aws_account_ccm_config datadog_integration_aws_account_ccm_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_aws_account_ccm_config.IntegrationAwsAccountCcmConfig;

IntegrationAwsAccountCcmConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .awsAccountConfigId(java.lang.String)
//  .ccmConfig(IntegrationAwsAccountCcmConfigCcmConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.awsAccountConfigId">awsAccountConfigId</a></code> | <code>java.lang.String</code> | Unique Datadog ID of the AWS Account Integration Config. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.ccmConfig">ccmConfig</a></code> | <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig">IntegrationAwsAccountCcmConfigCcmConfig</a></code> | ccm_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `awsAccountConfigId`<sup>Required</sup> <a name="awsAccountConfigId" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.awsAccountConfigId"></a>

- *Type:* java.lang.String

Unique Datadog ID of the AWS Account Integration Config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/integration_aws_account_ccm_config#aws_account_config_id IntegrationAwsAccountCcmConfig#aws_account_config_id}

---

##### `ccmConfig`<sup>Optional</sup> <a name="ccmConfig" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.ccmConfig"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig">IntegrationAwsAccountCcmConfigCcmConfig</a>

ccm_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/integration_aws_account_ccm_config#ccm_config IntegrationAwsAccountCcmConfig#ccm_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.putCcmConfig">putCcmConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.resetCcmConfig">resetCcmConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCcmConfig` <a name="putCcmConfig" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.putCcmConfig"></a>

```java
public void putCcmConfig(IntegrationAwsAccountCcmConfigCcmConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.putCcmConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig">IntegrationAwsAccountCcmConfigCcmConfig</a>

---

##### `resetCcmConfig` <a name="resetCcmConfig" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.resetCcmConfig"></a>

```java
public void resetCcmConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IntegrationAwsAccountCcmConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isConstruct"></a>

```java
import io.cdktn.providers.datadog.integration_aws_account_ccm_config.IntegrationAwsAccountCcmConfig;

IntegrationAwsAccountCcmConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.integration_aws_account_ccm_config.IntegrationAwsAccountCcmConfig;

IntegrationAwsAccountCcmConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.integration_aws_account_ccm_config.IntegrationAwsAccountCcmConfig;

IntegrationAwsAccountCcmConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.integration_aws_account_ccm_config.IntegrationAwsAccountCcmConfig;

IntegrationAwsAccountCcmConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IntegrationAwsAccountCcmConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IntegrationAwsAccountCcmConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IntegrationAwsAccountCcmConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IntegrationAwsAccountCcmConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/integration_aws_account_ccm_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IntegrationAwsAccountCcmConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.ccmConfig">ccmConfig</a></code> | <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference">IntegrationAwsAccountCcmConfigCcmConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.awsAccountConfigIdInput">awsAccountConfigIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.ccmConfigInput">ccmConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig">IntegrationAwsAccountCcmConfigCcmConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.awsAccountConfigId">awsAccountConfigId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ccmConfig`<sup>Required</sup> <a name="ccmConfig" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.ccmConfig"></a>

```java
public IntegrationAwsAccountCcmConfigCcmConfigOutputReference getCcmConfig();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference">IntegrationAwsAccountCcmConfigCcmConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `awsAccountConfigIdInput`<sup>Optional</sup> <a name="awsAccountConfigIdInput" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.awsAccountConfigIdInput"></a>

```java
public java.lang.String getAwsAccountConfigIdInput();
```

- *Type:* java.lang.String

---

##### `ccmConfigInput`<sup>Optional</sup> <a name="ccmConfigInput" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.ccmConfigInput"></a>

```java
public IResolvable|IntegrationAwsAccountCcmConfigCcmConfig getCcmConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig">IntegrationAwsAccountCcmConfigCcmConfig</a>

---

##### `awsAccountConfigId`<sup>Required</sup> <a name="awsAccountConfigId" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.awsAccountConfigId"></a>

```java
public java.lang.String getAwsAccountConfigId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsAccountCcmConfigCcmConfig <a name="IntegrationAwsAccountCcmConfigCcmConfig" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_aws_account_ccm_config.IntegrationAwsAccountCcmConfigCcmConfig;

IntegrationAwsAccountCcmConfigCcmConfig.builder()
//  .dataExportConfigs(IResolvable|java.util.List<IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig.property.dataExportConfigs">dataExportConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs</a>></code> | data_export_configs block. |

---

##### `dataExportConfigs`<sup>Optional</sup> <a name="dataExportConfigs" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig.property.dataExportConfigs"></a>

```java
public IResolvable|java.util.List<IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs> getDataExportConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs</a>>

data_export_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/integration_aws_account_ccm_config#data_export_configs IntegrationAwsAccountCcmConfig#data_export_configs}

---

### IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs <a name="IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_aws_account_ccm_config.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs;

IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.builder()
//  .bucketName(java.lang.String)
//  .bucketRegion(java.lang.String)
//  .reportName(java.lang.String)
//  .reportPrefix(java.lang.String)
//  .reportType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Name of the S3 bucket where the Cost and Usage Report is stored. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.bucketRegion">bucketRegion</a></code> | <code>java.lang.String</code> | AWS region of the S3 bucket. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.reportName">reportName</a></code> | <code>java.lang.String</code> | Name of the Cost and Usage Report. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.reportPrefix">reportPrefix</a></code> | <code>java.lang.String</code> | S3 prefix where the Cost and Usage Report is stored. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.reportType">reportType</a></code> | <code>java.lang.String</code> | Type of the Cost and Usage Report. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

Name of the S3 bucket where the Cost and Usage Report is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/integration_aws_account_ccm_config#bucket_name IntegrationAwsAccountCcmConfig#bucket_name}

---

##### `bucketRegion`<sup>Optional</sup> <a name="bucketRegion" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.bucketRegion"></a>

```java
public java.lang.String getBucketRegion();
```

- *Type:* java.lang.String

AWS region of the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/integration_aws_account_ccm_config#bucket_region IntegrationAwsAccountCcmConfig#bucket_region}

---

##### `reportName`<sup>Optional</sup> <a name="reportName" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.reportName"></a>

```java
public java.lang.String getReportName();
```

- *Type:* java.lang.String

Name of the Cost and Usage Report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/integration_aws_account_ccm_config#report_name IntegrationAwsAccountCcmConfig#report_name}

---

##### `reportPrefix`<sup>Optional</sup> <a name="reportPrefix" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.reportPrefix"></a>

```java
public java.lang.String getReportPrefix();
```

- *Type:* java.lang.String

S3 prefix where the Cost and Usage Report is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/integration_aws_account_ccm_config#report_prefix IntegrationAwsAccountCcmConfig#report_prefix}

---

##### `reportType`<sup>Optional</sup> <a name="reportType" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.reportType"></a>

```java
public java.lang.String getReportType();
```

- *Type:* java.lang.String

Type of the Cost and Usage Report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/integration_aws_account_ccm_config#report_type IntegrationAwsAccountCcmConfig#report_type}

---

### IntegrationAwsAccountCcmConfigConfig <a name="IntegrationAwsAccountCcmConfigConfig" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_aws_account_ccm_config.IntegrationAwsAccountCcmConfigConfig;

IntegrationAwsAccountCcmConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .awsAccountConfigId(java.lang.String)
//  .ccmConfig(IntegrationAwsAccountCcmConfigCcmConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.awsAccountConfigId">awsAccountConfigId</a></code> | <code>java.lang.String</code> | Unique Datadog ID of the AWS Account Integration Config. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.ccmConfig">ccmConfig</a></code> | <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig">IntegrationAwsAccountCcmConfigCcmConfig</a></code> | ccm_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `awsAccountConfigId`<sup>Required</sup> <a name="awsAccountConfigId" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.awsAccountConfigId"></a>

```java
public java.lang.String getAwsAccountConfigId();
```

- *Type:* java.lang.String

Unique Datadog ID of the AWS Account Integration Config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/integration_aws_account_ccm_config#aws_account_config_id IntegrationAwsAccountCcmConfig#aws_account_config_id}

---

##### `ccmConfig`<sup>Optional</sup> <a name="ccmConfig" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.ccmConfig"></a>

```java
public IntegrationAwsAccountCcmConfigCcmConfig getCcmConfig();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig">IntegrationAwsAccountCcmConfigCcmConfig</a>

ccm_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/integration_aws_account_ccm_config#ccm_config IntegrationAwsAccountCcmConfig#ccm_config}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList <a name="IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_aws_account_ccm_config.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList;

new IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.get"></a>

```java
public IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs</a>>

---


### IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference <a name="IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_aws_account_ccm_config.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference;

new IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetBucketRegion">resetBucketRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetReportName">resetReportName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetReportPrefix">resetReportPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetReportType">resetReportType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetBucketName"></a>

```java
public void resetBucketName()
```

##### `resetBucketRegion` <a name="resetBucketRegion" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetBucketRegion"></a>

```java
public void resetBucketRegion()
```

##### `resetReportName` <a name="resetReportName" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetReportName"></a>

```java
public void resetReportName()
```

##### `resetReportPrefix` <a name="resetReportPrefix" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetReportPrefix"></a>

```java
public void resetReportPrefix()
```

##### `resetReportType` <a name="resetReportType" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetReportType"></a>

```java
public void resetReportType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.bucketRegionInput">bucketRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportNameInput">reportNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportPrefixInput">reportPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportTypeInput">reportTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.bucketRegion">bucketRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportName">reportName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportPrefix">reportPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportType">reportType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `bucketRegionInput`<sup>Optional</sup> <a name="bucketRegionInput" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.bucketRegionInput"></a>

```java
public java.lang.String getBucketRegionInput();
```

- *Type:* java.lang.String

---

##### `reportNameInput`<sup>Optional</sup> <a name="reportNameInput" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportNameInput"></a>

```java
public java.lang.String getReportNameInput();
```

- *Type:* java.lang.String

---

##### `reportPrefixInput`<sup>Optional</sup> <a name="reportPrefixInput" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportPrefixInput"></a>

```java
public java.lang.String getReportPrefixInput();
```

- *Type:* java.lang.String

---

##### `reportTypeInput`<sup>Optional</sup> <a name="reportTypeInput" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportTypeInput"></a>

```java
public java.lang.String getReportTypeInput();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `bucketRegion`<sup>Required</sup> <a name="bucketRegion" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.bucketRegion"></a>

```java
public java.lang.String getBucketRegion();
```

- *Type:* java.lang.String

---

##### `reportName`<sup>Required</sup> <a name="reportName" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportName"></a>

```java
public java.lang.String getReportName();
```

- *Type:* java.lang.String

---

##### `reportPrefix`<sup>Required</sup> <a name="reportPrefix" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportPrefix"></a>

```java
public java.lang.String getReportPrefix();
```

- *Type:* java.lang.String

---

##### `reportType`<sup>Required</sup> <a name="reportType" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportType"></a>

```java
public java.lang.String getReportType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs</a>

---


### IntegrationAwsAccountCcmConfigCcmConfigOutputReference <a name="IntegrationAwsAccountCcmConfigCcmConfigOutputReference" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_aws_account_ccm_config.IntegrationAwsAccountCcmConfigCcmConfigOutputReference;

new IntegrationAwsAccountCcmConfigCcmConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.putDataExportConfigs">putDataExportConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.resetDataExportConfigs">resetDataExportConfigs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataExportConfigs` <a name="putDataExportConfigs" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.putDataExportConfigs"></a>

```java
public void putDataExportConfigs(IResolvable|java.util.List<IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.putDataExportConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs</a>>

---

##### `resetDataExportConfigs` <a name="resetDataExportConfigs" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.resetDataExportConfigs"></a>

```java
public void resetDataExportConfigs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.dataExportConfigs">dataExportConfigs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.dataExportConfigsInput">dataExportConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig">IntegrationAwsAccountCcmConfigCcmConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataExportConfigs`<sup>Required</sup> <a name="dataExportConfigs" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.dataExportConfigs"></a>

```java
public IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList getDataExportConfigs();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList</a>

---

##### `dataExportConfigsInput`<sup>Optional</sup> <a name="dataExportConfigsInput" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.dataExportConfigsInput"></a>

```java
public IResolvable|java.util.List<IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs> getDataExportConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|IntegrationAwsAccountCcmConfigCcmConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig">IntegrationAwsAccountCcmConfigCcmConfig</a>

---



