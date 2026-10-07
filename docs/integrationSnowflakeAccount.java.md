# `integrationSnowflakeAccount` Submodule <a name="`integrationSnowflakeAccount` Submodule" id="@cdktn/provider-datadog.integrationSnowflakeAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationSnowflakeAccount <a name="IntegrationSnowflakeAccount" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account datadog_integration_snowflake_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccount;

IntegrationSnowflakeAccount.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .authentication(IntegrationSnowflakeAccountAuthentication)
    .name(java.lang.String)
    .settings(IntegrationSnowflakeAccountSettings)
//  .dataflows(IntegrationSnowflakeAccountDataflows)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication">IntegrationSnowflakeAccountAuthentication</a></code> | Authentication configured on the Snowflake integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Human-readable name of the Snowflake integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings">IntegrationSnowflakeAccountSettings</a></code> | Settings configured on the Snowflake integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.dataflows">dataflows</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows">IntegrationSnowflakeAccountDataflows</a></code> | Data Datadog collects from Snowflake, keyed by dataflow id. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.authentication"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication">IntegrationSnowflakeAccountAuthentication</a>

Authentication configured on the Snowflake integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#authentication IntegrationSnowflakeAccount#authentication}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Human-readable name of the Snowflake integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#name IntegrationSnowflakeAccount#name}

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.settings"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings">IntegrationSnowflakeAccountSettings</a>

Settings configured on the Snowflake integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

##### `dataflows`<sup>Optional</sup> <a name="dataflows" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.dataflows"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows">IntegrationSnowflakeAccountDataflows</a>

Data Datadog collects from Snowflake, keyed by dataflow id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#dataflows IntegrationSnowflakeAccount#dataflows}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putAuthentication">putAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putDataflows">putDataflows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.resetDataflows">resetDataflows</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthentication` <a name="putAuthentication" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putAuthentication"></a>

```java
public void putAuthentication(IntegrationSnowflakeAccountAuthentication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication">IntegrationSnowflakeAccountAuthentication</a>

---

##### `putDataflows` <a name="putDataflows" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putDataflows"></a>

```java
public void putDataflows(IntegrationSnowflakeAccountDataflows value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putDataflows.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows">IntegrationSnowflakeAccountDataflows</a>

---

##### `putSettings` <a name="putSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putSettings"></a>

```java
public void putSettings(IntegrationSnowflakeAccountSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings">IntegrationSnowflakeAccountSettings</a>

---

##### `resetDataflows` <a name="resetDataflows" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.resetDataflows"></a>

```java
public void resetDataflows()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IntegrationSnowflakeAccount resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isConstruct"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccount;

IntegrationSnowflakeAccount.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccount;

IntegrationSnowflakeAccount.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccount;

IntegrationSnowflakeAccount.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccount;

IntegrationSnowflakeAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IntegrationSnowflakeAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IntegrationSnowflakeAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IntegrationSnowflakeAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IntegrationSnowflakeAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IntegrationSnowflakeAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference">IntegrationSnowflakeAccountAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.dataflows">dataflows</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference">IntegrationSnowflakeAccountDataflowsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference">IntegrationSnowflakeAccountSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.authenticationInput">authenticationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication">IntegrationSnowflakeAccountAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.dataflowsInput">dataflowsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows">IntegrationSnowflakeAccountDataflows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.settingsInput">settingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings">IntegrationSnowflakeAccountSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.authentication"></a>

```java
public IntegrationSnowflakeAccountAuthenticationOutputReference getAuthentication();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference">IntegrationSnowflakeAccountAuthenticationOutputReference</a>

---

##### `dataflows`<sup>Required</sup> <a name="dataflows" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.dataflows"></a>

```java
public IntegrationSnowflakeAccountDataflowsOutputReference getDataflows();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference">IntegrationSnowflakeAccountDataflowsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.settings"></a>

```java
public IntegrationSnowflakeAccountSettingsOutputReference getSettings();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference">IntegrationSnowflakeAccountSettingsOutputReference</a>

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.authenticationInput"></a>

```java
public IResolvable|IntegrationSnowflakeAccountAuthentication getAuthenticationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication">IntegrationSnowflakeAccountAuthentication</a>

---

##### `dataflowsInput`<sup>Optional</sup> <a name="dataflowsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.dataflowsInput"></a>

```java
public IResolvable|IntegrationSnowflakeAccountDataflows getDataflowsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows">IntegrationSnowflakeAccountDataflows</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.settingsInput"></a>

```java
public IResolvable|IntegrationSnowflakeAccountSettings getSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings">IntegrationSnowflakeAccountSettings</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationSnowflakeAccountAuthentication <a name="IntegrationSnowflakeAccountAuthentication" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountAuthentication;

IntegrationSnowflakeAccountAuthentication.builder()
//  .snowflakeIntegrationAccountPrivateKeyAuth(IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication.property.snowflakeIntegrationAccountPrivateKeyAuth">snowflakeIntegrationAccountPrivateKeyAuth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth</a></code> | The RSA key pair authentication method configured on the account. |

---

##### `snowflakeIntegrationAccountPrivateKeyAuth`<sup>Optional</sup> <a name="snowflakeIntegrationAccountPrivateKeyAuth" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication.property.snowflakeIntegrationAccountPrivateKeyAuth"></a>

```java
public IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth getSnowflakeIntegrationAccountPrivateKeyAuth();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth</a>

The RSA key pair authentication method configured on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_integration_account_private_key_auth IntegrationSnowflakeAccount#snowflake_integration_account_private_key_auth}

---

### IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth <a name="IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth;

IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.builder()
    .privateKeyName(java.lang.String)
    .privateKeyWo(java.lang.String)
    .privateKeyWoVersion(java.lang.String)
//  .authType(java.lang.String)
//  .privateKeyPassphraseWo(java.lang.String)
//  .privateKeyPassphraseWoVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyName">privateKeyName</a></code> | <code>java.lang.String</code> | Name that distinguishes this private key from other keys in Datadog. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyWo">privateKeyWo</a></code> | <code>java.lang.String</code> | The private key, in PEM format. This write-only value is not stored in Terraform state. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyWoVersion">privateKeyWoVersion</a></code> | <code>java.lang.String</code> | Version trigger for private_key_wo rotation. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.authType">authType</a></code> | <code>java.lang.String</code> | The authentication method type. Valid values are `snowflake_private_key`. Defaults to `"snowflake_private_key"`. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyPassphraseWo">privateKeyPassphraseWo</a></code> | <code>java.lang.String</code> | Passphrase that decrypts the private key. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyPassphraseWoVersion">privateKeyPassphraseWoVersion</a></code> | <code>java.lang.String</code> | Version trigger for private_key_passphrase_wo rotation. String length must be at least 1. |

---

##### `privateKeyName`<sup>Required</sup> <a name="privateKeyName" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyName"></a>

```java
public java.lang.String getPrivateKeyName();
```

- *Type:* java.lang.String

Name that distinguishes this private key from other keys in Datadog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#private_key_name IntegrationSnowflakeAccount#private_key_name}

---

##### `privateKeyWo`<sup>Required</sup> <a name="privateKeyWo" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyWo"></a>

```java
public java.lang.String getPrivateKeyWo();
```

- *Type:* java.lang.String

The private key, in PEM format. This write-only value is not stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#private_key_wo IntegrationSnowflakeAccount#private_key_wo}

---

##### `privateKeyWoVersion`<sup>Required</sup> <a name="privateKeyWoVersion" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyWoVersion"></a>

```java
public java.lang.String getPrivateKeyWoVersion();
```

- *Type:* java.lang.String

Version trigger for private_key_wo rotation. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#private_key_wo_version IntegrationSnowflakeAccount#private_key_wo_version}

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

The authentication method type. Valid values are `snowflake_private_key`. Defaults to `"snowflake_private_key"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#auth_type IntegrationSnowflakeAccount#auth_type}

---

##### `privateKeyPassphraseWo`<sup>Optional</sup> <a name="privateKeyPassphraseWo" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyPassphraseWo"></a>

```java
public java.lang.String getPrivateKeyPassphraseWo();
```

- *Type:* java.lang.String

Passphrase that decrypts the private key.

Provide it only when the key is encrypted. This write-only value is not stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#private_key_passphrase_wo IntegrationSnowflakeAccount#private_key_passphrase_wo}

---

##### `privateKeyPassphraseWoVersion`<sup>Optional</sup> <a name="privateKeyPassphraseWoVersion" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyPassphraseWoVersion"></a>

```java
public java.lang.String getPrivateKeyPassphraseWoVersion();
```

- *Type:* java.lang.String

Version trigger for private_key_passphrase_wo rotation. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#private_key_passphrase_wo_version IntegrationSnowflakeAccount#private_key_passphrase_wo_version}

---

### IntegrationSnowflakeAccountConfig <a name="IntegrationSnowflakeAccountConfig" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountConfig;

IntegrationSnowflakeAccountConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .authentication(IntegrationSnowflakeAccountAuthentication)
    .name(java.lang.String)
    .settings(IntegrationSnowflakeAccountSettings)
//  .dataflows(IntegrationSnowflakeAccountDataflows)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication">IntegrationSnowflakeAccountAuthentication</a></code> | Authentication configured on the Snowflake integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.name">name</a></code> | <code>java.lang.String</code> | Human-readable name of the Snowflake integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings">IntegrationSnowflakeAccountSettings</a></code> | Settings configured on the Snowflake integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.dataflows">dataflows</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows">IntegrationSnowflakeAccountDataflows</a></code> | Data Datadog collects from Snowflake, keyed by dataflow id. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.authentication"></a>

```java
public IntegrationSnowflakeAccountAuthentication getAuthentication();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication">IntegrationSnowflakeAccountAuthentication</a>

Authentication configured on the Snowflake integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#authentication IntegrationSnowflakeAccount#authentication}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Human-readable name of the Snowflake integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#name IntegrationSnowflakeAccount#name}

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.settings"></a>

```java
public IntegrationSnowflakeAccountSettings getSettings();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings">IntegrationSnowflakeAccountSettings</a>

Settings configured on the Snowflake integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

##### `dataflows`<sup>Optional</sup> <a name="dataflows" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.dataflows"></a>

```java
public IntegrationSnowflakeAccountDataflows getDataflows();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows">IntegrationSnowflakeAccountDataflows</a>

Data Datadog collects from Snowflake, keyed by dataflow id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#dataflows IntegrationSnowflakeAccount#dataflows}

---

### IntegrationSnowflakeAccountDataflows <a name="IntegrationSnowflakeAccountDataflows" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountDataflows;

IntegrationSnowflakeAccountDataflows.builder()
//  .snowflakeAccountUsageMetrics(IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics)
//  .snowflakeCloudCostMetrics(IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics)
//  .snowflakeDataObservabilityQualityMonitoring(IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring)
//  .snowflakeEventTableLogs(IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs)
//  .snowflakeOrganizationUsageMetrics(IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics)
//  .snowflakeQueryHistoryLogs(IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs)
//  .snowflakeSecurityLogs(IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs)
//  .snowflakeTaskHistoryLogs(IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeAccountUsageMetrics">snowflakeAccountUsageMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics</a></code> | Account-level usage metrics read from the Snowflake `ACCOUNT_USAGE` schema, covering storage usage, credit consumption, and query activity. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeCloudCostMetrics">snowflakeCloudCostMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics</a></code> | Cost data aggregated from the Snowflake `ORGANIZATION_USAGE` schema. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeDataObservabilityQualityMonitoring">snowflakeDataObservabilityQualityMonitoring</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring</a></code> | Data Observability, which collects lineage and data quality information from your Snowflake databases so you can explore how data flows and detect and resolve quality issues. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeEventTableLogs">snowflakeEventTableLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs</a></code> | Records from your Snowflake event tables, used to monitor application behavior and identify issues. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeOrganizationUsageMetrics">snowflakeOrganizationUsageMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics</a></code> | Organization-level usage metrics read from the Snowflake `ORGANIZATION_USAGE` schema, covering the credit consumption of every account in the organization and the history of data transferred out of Snowflake. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeQueryHistoryLogs">snowflakeQueryHistoryLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs</a></code> | Per-query logs that let you identify long-running, poorly performing, and expensive queries. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeSecurityLogs">snowflakeSecurityLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs</a></code> | Security logs from the Snowflake `ACCOUNT_USAGE` schema, for analyzing the security of your Snowflake account and running threat detection with [Cloud SIEM](https://docs.datadoghq.com/security/cloud_siem/). |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeTaskHistoryLogs">snowflakeTaskHistoryLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs</a></code> | Execution logs for your scheduled Snowflake tasks, covering start time, end time, status, and any error message. |

---

##### `snowflakeAccountUsageMetrics`<sup>Optional</sup> <a name="snowflakeAccountUsageMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeAccountUsageMetrics"></a>

```java
public IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics getSnowflakeAccountUsageMetrics();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics</a>

Account-level usage metrics read from the Snowflake `ACCOUNT_USAGE` schema, covering storage usage, credit consumption, and query activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_account_usage_metrics IntegrationSnowflakeAccount#snowflake_account_usage_metrics}

---

##### `snowflakeCloudCostMetrics`<sup>Optional</sup> <a name="snowflakeCloudCostMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeCloudCostMetrics"></a>

```java
public IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics getSnowflakeCloudCostMetrics();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics</a>

Cost data aggregated from the Snowflake `ORGANIZATION_USAGE` schema.

Requires [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/) to be set up for your organization, and the ORGANIZATION_BILLING_VIEWER database role on the Snowflake role; without both this dataflow collects no data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_cloud_cost_metrics IntegrationSnowflakeAccount#snowflake_cloud_cost_metrics}

---

##### `snowflakeDataObservabilityQualityMonitoring`<sup>Optional</sup> <a name="snowflakeDataObservabilityQualityMonitoring" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeDataObservabilityQualityMonitoring"></a>

```java
public IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring getSnowflakeDataObservabilityQualityMonitoring();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring</a>

Data Observability, which collects lineage and data quality information from your Snowflake databases so you can explore how data flows and detect and resolve quality issues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_data_observability_quality_monitoring IntegrationSnowflakeAccount#snowflake_data_observability_quality_monitoring}

---

##### `snowflakeEventTableLogs`<sup>Optional</sup> <a name="snowflakeEventTableLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeEventTableLogs"></a>

```java
public IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs getSnowflakeEventTableLogs();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs</a>

Records from your Snowflake event tables, used to monitor application behavior and identify issues.

`enabled` turns the dataflow on and off as a whole, and the per-record-type toggles in `settings` select which kinds of record it collects while it is on. The Snowflake role needs usage granted on the database, the schema, and the event table itself; without those grants this dataflow collects no data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_event_table_logs IntegrationSnowflakeAccount#snowflake_event_table_logs}

---

##### `snowflakeOrganizationUsageMetrics`<sup>Optional</sup> <a name="snowflakeOrganizationUsageMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeOrganizationUsageMetrics"></a>

```java
public IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics getSnowflakeOrganizationUsageMetrics();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics</a>

Organization-level usage metrics read from the Snowflake `ORGANIZATION_USAGE` schema, covering the credit consumption of every account in the organization and the history of data transferred out of Snowflake.

Reading that schema requires the ORGADMIN role; without it this dataflow collects no data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_organization_usage_metrics IntegrationSnowflakeAccount#snowflake_organization_usage_metrics}

---

##### `snowflakeQueryHistoryLogs`<sup>Optional</sup> <a name="snowflakeQueryHistoryLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeQueryHistoryLogs"></a>

```java
public IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs getSnowflakeQueryHistoryLogs();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs</a>

Per-query logs that let you identify long-running, poorly performing, and expensive queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_query_history_logs IntegrationSnowflakeAccount#snowflake_query_history_logs}

---

##### `snowflakeSecurityLogs`<sup>Optional</sup> <a name="snowflakeSecurityLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeSecurityLogs"></a>

```java
public IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs getSnowflakeSecurityLogs();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs</a>

Security logs from the Snowflake `ACCOUNT_USAGE` schema, for analyzing the security of your Snowflake account and running threat detection with [Cloud SIEM](https://docs.datadoghq.com/security/cloud_siem/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_security_logs IntegrationSnowflakeAccount#snowflake_security_logs}

---

##### `snowflakeTaskHistoryLogs`<sup>Optional</sup> <a name="snowflakeTaskHistoryLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeTaskHistoryLogs"></a>

```java
public IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs getSnowflakeTaskHistoryLogs();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs</a>

Execution logs for your scheduled Snowflake tasks, covering start time, end time, status, and any error message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_task_history_logs IntegrationSnowflakeAccount#snowflake_task_history_logs}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics <a name="IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics;

IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .settings(IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings</a></code> | Settings of the account usage metrics dataflow. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics.property.settings"></a>

```java
public IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings getSettings();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings</a>

Settings of the account usage metrics dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings <a name="IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings;

IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings.builder()
//  .accountUsageMetricsAggregateLast24H(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings.property.accountUsageMetricsAggregateLast24H">accountUsageMetricsAggregateLast24H</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The period each metric aggregates over. |

---

##### `accountUsageMetricsAggregateLast24H`<sup>Optional</sup> <a name="accountUsageMetricsAggregateLast24H" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings.property.accountUsageMetricsAggregateLast24H"></a>

```java
public java.lang.Boolean|IResolvable getAccountUsageMetricsAggregateLast24H();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The period each metric aggregates over.

When `true`, metrics aggregate the past 24 hours on a rolling basis; when `false`, they aggregate the current day so far.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#account_usage_metrics_aggregate_last_24h IntegrationSnowflakeAccount#account_usage_metrics_aggregate_last_24h}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics <a name="IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics;

IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .settings(IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings</a></code> | Settings of the Cloud Cost Management dataflow. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics.property.settings"></a>

```java
public IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings getSettings();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings</a>

Settings of the Cloud Cost Management dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings <a name="IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings;

IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings.builder()
//  .queryTags(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings.property.queryTags">queryTags</a></code> | <code>java.lang.String</code> | Snowflake query tags ingested as a comma-separated list of tag names, so that cost data can be broken down by them in Cloud Cost Management. |

---

##### `queryTags`<sup>Optional</sup> <a name="queryTags" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings.property.queryTags"></a>

```java
public java.lang.String getQueryTags();
```

- *Type:* java.lang.String

Snowflake query tags ingested as a comma-separated list of tag names, so that cost data can be broken down by them in Cloud Cost Management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#query_tags IntegrationSnowflakeAccount#query_tags}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring <a name="IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring;

IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .settings(IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings</a></code> | Settings of the Data Observability dataflow. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring.property.settings"></a>

```java
public IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings getSettings();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings</a>

Settings of the Data Observability dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings <a name="IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings;

IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings.builder()
//  .doTableCrawlerCron(java.lang.String)
//  .syncSnowflakeSystemDatabase(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings.property.doTableCrawlerCron">doTableCrawlerCron</a></code> | <code>java.lang.String</code> | Cron expression setting how often Datadog crawls your Snowflake table metadata. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings.property.syncSnowflakeSystemDatabase">syncSnowflakeSystemDatabase</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether metadata from the Snowflake `SNOWFLAKE` system database is included in Data Observability alongside your own databases. |

---

##### `doTableCrawlerCron`<sup>Optional</sup> <a name="doTableCrawlerCron" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings.property.doTableCrawlerCron"></a>

```java
public java.lang.String getDoTableCrawlerCron();
```

- *Type:* java.lang.String

Cron expression setting how often Datadog crawls your Snowflake table metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#do_table_crawler_cron IntegrationSnowflakeAccount#do_table_crawler_cron}

---

##### `syncSnowflakeSystemDatabase`<sup>Optional</sup> <a name="syncSnowflakeSystemDatabase" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings.property.syncSnowflakeSystemDatabase"></a>

```java
public java.lang.Boolean|IResolvable getSyncSnowflakeSystemDatabase();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether metadata from the Snowflake `SNOWFLAKE` system database is included in Data Observability alongside your own databases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#sync_snowflake_system_database IntegrationSnowflakeAccount#sync_snowflake_system_database}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs <a name="IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs;

IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .settings(IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings</a></code> | Settings of the event table dataflow. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs.property.settings"></a>

```java
public IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings getSettings();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings</a>

Settings of the event table dataflow.

Each record type is collected independently so that you can control ingestion costs, and every record type is ingested into Datadog as logs tagged with its `record_type`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings <a name="IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings;

IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.builder()
//  .eventTableEventsEnabled(java.lang.Boolean|IResolvable)
//  .eventTableLogsEnabled(java.lang.Boolean|IResolvable)
//  .eventTableLogsIntervalMin(java.lang.Number)
//  .eventTableSpanEventsEnabled(java.lang.Boolean|IResolvable)
//  .eventTableSpansEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableEventsEnabled">eventTableEventsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether records with a `record_type` of `event` are collected. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableLogsEnabled">eventTableLogsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether records with a `record_type` of `log` are collected. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableLogsIntervalMin">eventTableLogsIntervalMin</a></code> | <code>java.lang.Number</code> | How often event table records are collected, in minutes. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableSpanEventsEnabled">eventTableSpanEventsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether records with a `record_type` of `span_event` are collected. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableSpansEnabled">eventTableSpansEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether records with a `record_type` of `span` are collected. |

---

##### `eventTableEventsEnabled`<sup>Optional</sup> <a name="eventTableEventsEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableEventsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getEventTableEventsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether records with a `record_type` of `event` are collected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#event_table_events_enabled IntegrationSnowflakeAccount#event_table_events_enabled}

---

##### `eventTableLogsEnabled`<sup>Optional</sup> <a name="eventTableLogsEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableLogsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getEventTableLogsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether records with a `record_type` of `log` are collected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#event_table_logs_enabled IntegrationSnowflakeAccount#event_table_logs_enabled}

---

##### `eventTableLogsIntervalMin`<sup>Optional</sup> <a name="eventTableLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableLogsIntervalMin"></a>

```java
public java.lang.Number getEventTableLogsIntervalMin();
```

- *Type:* java.lang.Number

How often event table records are collected, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#event_table_logs_interval_min IntegrationSnowflakeAccount#event_table_logs_interval_min}

---

##### `eventTableSpanEventsEnabled`<sup>Optional</sup> <a name="eventTableSpanEventsEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableSpanEventsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getEventTableSpanEventsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether records with a `record_type` of `span_event` are collected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#event_table_span_events_enabled IntegrationSnowflakeAccount#event_table_span_events_enabled}

---

##### `eventTableSpansEnabled`<sup>Optional</sup> <a name="eventTableSpansEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableSpansEnabled"></a>

```java
public java.lang.Boolean|IResolvable getEventTableSpansEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether records with a `record_type` of `span` are collected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#event_table_spans_enabled IntegrationSnowflakeAccount#event_table_spans_enabled}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics <a name="IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics;

IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .settings(IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings</a></code> | Settings of the organization usage metrics dataflow. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics.property.settings"></a>

```java
public IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings getSettings();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings</a>

Settings of the organization usage metrics dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings <a name="IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings;

IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings.builder()
//  .organizationUsageMetricsAggregateLast24H(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings.property.organizationUsageMetricsAggregateLast24H">organizationUsageMetricsAggregateLast24H</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The period each metric aggregates over. |

---

##### `organizationUsageMetricsAggregateLast24H`<sup>Optional</sup> <a name="organizationUsageMetricsAggregateLast24H" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings.property.organizationUsageMetricsAggregateLast24H"></a>

```java
public java.lang.Boolean|IResolvable getOrganizationUsageMetricsAggregateLast24H();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The period each metric aggregates over.

When `true`, metrics aggregate the past 24 hours on a rolling basis; when `false`, they aggregate the current day so far.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#organization_usage_metrics_aggregate_last_24h IntegrationSnowflakeAccount#organization_usage_metrics_aggregate_last_24h}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs <a name="IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs;

IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .settings(IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings</a></code> | Settings of the query history logs dataflow. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs.property.settings"></a>

```java
public IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings getSettings();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings</a>

Settings of the query history logs dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings <a name="IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings;

IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings.builder()
//  .joinQueryHistoryWithAccessHistoryEnabled(java.lang.Boolean|IResolvable)
//  .queryHistoryLogsIntervalMin(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings.property.joinQueryHistoryWithAccessHistoryEnabled">joinQueryHistoryWithAccessHistoryEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether query logs are joined with Snowflake access history, which adds the objects each query read and wrote so you can follow how data is used and where it came from. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings.property.queryHistoryLogsIntervalMin">queryHistoryLogsIntervalMin</a></code> | <code>java.lang.Number</code> | How often query history logs are collected, in minutes. |

---

##### `joinQueryHistoryWithAccessHistoryEnabled`<sup>Optional</sup> <a name="joinQueryHistoryWithAccessHistoryEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings.property.joinQueryHistoryWithAccessHistoryEnabled"></a>

```java
public java.lang.Boolean|IResolvable getJoinQueryHistoryWithAccessHistoryEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether query logs are joined with Snowflake access history, which adds the objects each query read and wrote so you can follow how data is used and where it came from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#join_query_history_with_access_history_enabled IntegrationSnowflakeAccount#join_query_history_with_access_history_enabled}

---

##### `queryHistoryLogsIntervalMin`<sup>Optional</sup> <a name="queryHistoryLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings.property.queryHistoryLogsIntervalMin"></a>

```java
public java.lang.Number getQueryHistoryLogsIntervalMin();
```

- *Type:* java.lang.Number

How often query history logs are collected, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#query_history_logs_interval_min IntegrationSnowflakeAccount#query_history_logs_interval_min}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs <a name="IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs;

IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .settings(IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings</a></code> | Settings of the security logs dataflow. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs.property.settings"></a>

```java
public IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings getSettings();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings</a>

Settings of the security logs dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings <a name="IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings;

IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings.builder()
//  .securityLogsIntervalMin(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings.property.securityLogsIntervalMin">securityLogsIntervalMin</a></code> | <code>java.lang.Number</code> | How often security logs are collected, in minutes. |

---

##### `securityLogsIntervalMin`<sup>Optional</sup> <a name="securityLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings.property.securityLogsIntervalMin"></a>

```java
public java.lang.Number getSecurityLogsIntervalMin();
```

- *Type:* java.lang.Number

How often security logs are collected, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#security_logs_interval_min IntegrationSnowflakeAccount#security_logs_interval_min}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs <a name="IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs;

IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .settings(IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings</a></code> | Settings of the task history logs dataflow. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs.property.settings"></a>

```java
public IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings getSettings();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings</a>

Settings of the task history logs dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings <a name="IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings;

IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings.builder()
//  .taskHistoryLogsIntervalMin(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings.property.taskHistoryLogsIntervalMin">taskHistoryLogsIntervalMin</a></code> | <code>java.lang.Number</code> | How often task history logs are collected, in minutes. |

---

##### `taskHistoryLogsIntervalMin`<sup>Optional</sup> <a name="taskHistoryLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings.property.taskHistoryLogsIntervalMin"></a>

```java
public java.lang.Number getTaskHistoryLogsIntervalMin();
```

- *Type:* java.lang.Number

How often task history logs are collected, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#task_history_logs_interval_min IntegrationSnowflakeAccount#task_history_logs_interval_min}

---

### IntegrationSnowflakeAccountSettings <a name="IntegrationSnowflakeAccountSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountSettings;

IntegrationSnowflakeAccountSettings.builder()
    .snowflakeAccountIdentifier(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings.property.snowflakeAccountIdentifier">snowflakeAccountIdentifier</a></code> | <code>java.lang.String</code> | Identifier of the Snowflake account being monitored. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings.property.username">username</a></code> | <code>java.lang.String</code> | Snowflake user Datadog authenticates as. |

---

##### `snowflakeAccountIdentifier`<sup>Required</sup> <a name="snowflakeAccountIdentifier" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings.property.snowflakeAccountIdentifier"></a>

```java
public java.lang.String getSnowflakeAccountIdentifier();
```

- *Type:* java.lang.String

Identifier of the Snowflake account being monitored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_account_identifier IntegrationSnowflakeAccount#snowflake_account_identifier}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Snowflake user Datadog authenticates as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#username IntegrationSnowflakeAccount#username}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationSnowflakeAccountAuthenticationOutputReference <a name="IntegrationSnowflakeAccountAuthenticationOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountAuthenticationOutputReference;

new IntegrationSnowflakeAccountAuthenticationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.putSnowflakeIntegrationAccountPrivateKeyAuth">putSnowflakeIntegrationAccountPrivateKeyAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.resetSnowflakeIntegrationAccountPrivateKeyAuth">resetSnowflakeIntegrationAccountPrivateKeyAuth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSnowflakeIntegrationAccountPrivateKeyAuth` <a name="putSnowflakeIntegrationAccountPrivateKeyAuth" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.putSnowflakeIntegrationAccountPrivateKeyAuth"></a>

```java
public void putSnowflakeIntegrationAccountPrivateKeyAuth(IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.putSnowflakeIntegrationAccountPrivateKeyAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth</a>

---

##### `resetSnowflakeIntegrationAccountPrivateKeyAuth` <a name="resetSnowflakeIntegrationAccountPrivateKeyAuth" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.resetSnowflakeIntegrationAccountPrivateKeyAuth"></a>

```java
public void resetSnowflakeIntegrationAccountPrivateKeyAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.snowflakeIntegrationAccountPrivateKeyAuth">snowflakeIntegrationAccountPrivateKeyAuth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.snowflakeIntegrationAccountPrivateKeyAuthInput">snowflakeIntegrationAccountPrivateKeyAuthInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication">IntegrationSnowflakeAccountAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `snowflakeIntegrationAccountPrivateKeyAuth`<sup>Required</sup> <a name="snowflakeIntegrationAccountPrivateKeyAuth" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.snowflakeIntegrationAccountPrivateKeyAuth"></a>

```java
public IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference getSnowflakeIntegrationAccountPrivateKeyAuth();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference</a>

---

##### `snowflakeIntegrationAccountPrivateKeyAuthInput`<sup>Optional</sup> <a name="snowflakeIntegrationAccountPrivateKeyAuthInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.snowflakeIntegrationAccountPrivateKeyAuthInput"></a>

```java
public IResolvable|IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth getSnowflakeIntegrationAccountPrivateKeyAuthInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.internalValue"></a>

```java
public IResolvable|IntegrationSnowflakeAccountAuthentication getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication">IntegrationSnowflakeAccountAuthentication</a>

---


### IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference <a name="IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference;

new IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resetAuthType">resetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resetPrivateKeyPassphraseWo">resetPrivateKeyPassphraseWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resetPrivateKeyPassphraseWoVersion">resetPrivateKeyPassphraseWoVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthType` <a name="resetAuthType" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resetAuthType"></a>

```java
public void resetAuthType()
```

##### `resetPrivateKeyPassphraseWo` <a name="resetPrivateKeyPassphraseWo" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resetPrivateKeyPassphraseWo"></a>

```java
public void resetPrivateKeyPassphraseWo()
```

##### `resetPrivateKeyPassphraseWoVersion` <a name="resetPrivateKeyPassphraseWoVersion" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resetPrivateKeyPassphraseWoVersion"></a>

```java
public void resetPrivateKeyPassphraseWoVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyNameInput">privateKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyPassphraseWoInput">privateKeyPassphraseWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyPassphraseWoVersionInput">privateKeyPassphraseWoVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyWoInput">privateKeyWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyWoVersionInput">privateKeyWoVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyName">privateKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyPassphraseWo">privateKeyPassphraseWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyPassphraseWoVersion">privateKeyPassphraseWoVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyWo">privateKeyWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyWoVersion">privateKeyWoVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `privateKeyNameInput`<sup>Optional</sup> <a name="privateKeyNameInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyNameInput"></a>

```java
public java.lang.String getPrivateKeyNameInput();
```

- *Type:* java.lang.String

---

##### `privateKeyPassphraseWoInput`<sup>Optional</sup> <a name="privateKeyPassphraseWoInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyPassphraseWoInput"></a>

```java
public java.lang.String getPrivateKeyPassphraseWoInput();
```

- *Type:* java.lang.String

---

##### `privateKeyPassphraseWoVersionInput`<sup>Optional</sup> <a name="privateKeyPassphraseWoVersionInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyPassphraseWoVersionInput"></a>

```java
public java.lang.String getPrivateKeyPassphraseWoVersionInput();
```

- *Type:* java.lang.String

---

##### `privateKeyWoInput`<sup>Optional</sup> <a name="privateKeyWoInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyWoInput"></a>

```java
public java.lang.String getPrivateKeyWoInput();
```

- *Type:* java.lang.String

---

##### `privateKeyWoVersionInput`<sup>Optional</sup> <a name="privateKeyWoVersionInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyWoVersionInput"></a>

```java
public java.lang.String getPrivateKeyWoVersionInput();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `privateKeyName`<sup>Required</sup> <a name="privateKeyName" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyName"></a>

```java
public java.lang.String getPrivateKeyName();
```

- *Type:* java.lang.String

---

##### ~~`privateKeyPassphraseWo`~~<sup>Required</sup> <a name="privateKeyPassphraseWo" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyPassphraseWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```java
public java.lang.String getPrivateKeyPassphraseWo();
```

- *Type:* java.lang.String

---

##### `privateKeyPassphraseWoVersion`<sup>Required</sup> <a name="privateKeyPassphraseWoVersion" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyPassphraseWoVersion"></a>

```java
public java.lang.String getPrivateKeyPassphraseWoVersion();
```

- *Type:* java.lang.String

---

##### ~~`privateKeyWo`~~<sup>Required</sup> <a name="privateKeyWo" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```java
public java.lang.String getPrivateKeyWo();
```

- *Type:* java.lang.String

---

##### `privateKeyWoVersion`<sup>Required</sup> <a name="privateKeyWoVersion" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyWoVersion"></a>

```java
public java.lang.String getPrivateKeyWoVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.internalValue"></a>

```java
public IResolvable|IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth</a>

---


### IntegrationSnowflakeAccountDataflowsOutputReference <a name="IntegrationSnowflakeAccountDataflowsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountDataflowsOutputReference;

new IntegrationSnowflakeAccountDataflowsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeAccountUsageMetrics">putSnowflakeAccountUsageMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeCloudCostMetrics">putSnowflakeCloudCostMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeDataObservabilityQualityMonitoring">putSnowflakeDataObservabilityQualityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeEventTableLogs">putSnowflakeEventTableLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeOrganizationUsageMetrics">putSnowflakeOrganizationUsageMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeQueryHistoryLogs">putSnowflakeQueryHistoryLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeSecurityLogs">putSnowflakeSecurityLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeTaskHistoryLogs">putSnowflakeTaskHistoryLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeAccountUsageMetrics">resetSnowflakeAccountUsageMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeCloudCostMetrics">resetSnowflakeCloudCostMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeDataObservabilityQualityMonitoring">resetSnowflakeDataObservabilityQualityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeEventTableLogs">resetSnowflakeEventTableLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeOrganizationUsageMetrics">resetSnowflakeOrganizationUsageMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeQueryHistoryLogs">resetSnowflakeQueryHistoryLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeSecurityLogs">resetSnowflakeSecurityLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeTaskHistoryLogs">resetSnowflakeTaskHistoryLogs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSnowflakeAccountUsageMetrics` <a name="putSnowflakeAccountUsageMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeAccountUsageMetrics"></a>

```java
public void putSnowflakeAccountUsageMetrics(IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeAccountUsageMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics</a>

---

##### `putSnowflakeCloudCostMetrics` <a name="putSnowflakeCloudCostMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeCloudCostMetrics"></a>

```java
public void putSnowflakeCloudCostMetrics(IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeCloudCostMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics</a>

---

##### `putSnowflakeDataObservabilityQualityMonitoring` <a name="putSnowflakeDataObservabilityQualityMonitoring" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeDataObservabilityQualityMonitoring"></a>

```java
public void putSnowflakeDataObservabilityQualityMonitoring(IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeDataObservabilityQualityMonitoring.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring</a>

---

##### `putSnowflakeEventTableLogs` <a name="putSnowflakeEventTableLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeEventTableLogs"></a>

```java
public void putSnowflakeEventTableLogs(IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeEventTableLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs</a>

---

##### `putSnowflakeOrganizationUsageMetrics` <a name="putSnowflakeOrganizationUsageMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeOrganizationUsageMetrics"></a>

```java
public void putSnowflakeOrganizationUsageMetrics(IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeOrganizationUsageMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics</a>

---

##### `putSnowflakeQueryHistoryLogs` <a name="putSnowflakeQueryHistoryLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeQueryHistoryLogs"></a>

```java
public void putSnowflakeQueryHistoryLogs(IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeQueryHistoryLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs</a>

---

##### `putSnowflakeSecurityLogs` <a name="putSnowflakeSecurityLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeSecurityLogs"></a>

```java
public void putSnowflakeSecurityLogs(IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeSecurityLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs</a>

---

##### `putSnowflakeTaskHistoryLogs` <a name="putSnowflakeTaskHistoryLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeTaskHistoryLogs"></a>

```java
public void putSnowflakeTaskHistoryLogs(IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeTaskHistoryLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs</a>

---

##### `resetSnowflakeAccountUsageMetrics` <a name="resetSnowflakeAccountUsageMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeAccountUsageMetrics"></a>

```java
public void resetSnowflakeAccountUsageMetrics()
```

##### `resetSnowflakeCloudCostMetrics` <a name="resetSnowflakeCloudCostMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeCloudCostMetrics"></a>

```java
public void resetSnowflakeCloudCostMetrics()
```

##### `resetSnowflakeDataObservabilityQualityMonitoring` <a name="resetSnowflakeDataObservabilityQualityMonitoring" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeDataObservabilityQualityMonitoring"></a>

```java
public void resetSnowflakeDataObservabilityQualityMonitoring()
```

##### `resetSnowflakeEventTableLogs` <a name="resetSnowflakeEventTableLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeEventTableLogs"></a>

```java
public void resetSnowflakeEventTableLogs()
```

##### `resetSnowflakeOrganizationUsageMetrics` <a name="resetSnowflakeOrganizationUsageMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeOrganizationUsageMetrics"></a>

```java
public void resetSnowflakeOrganizationUsageMetrics()
```

##### `resetSnowflakeQueryHistoryLogs` <a name="resetSnowflakeQueryHistoryLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeQueryHistoryLogs"></a>

```java
public void resetSnowflakeQueryHistoryLogs()
```

##### `resetSnowflakeSecurityLogs` <a name="resetSnowflakeSecurityLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeSecurityLogs"></a>

```java
public void resetSnowflakeSecurityLogs()
```

##### `resetSnowflakeTaskHistoryLogs` <a name="resetSnowflakeTaskHistoryLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeTaskHistoryLogs"></a>

```java
public void resetSnowflakeTaskHistoryLogs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeAccountUsageMetrics">snowflakeAccountUsageMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeCloudCostMetrics">snowflakeCloudCostMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeDataObservabilityQualityMonitoring">snowflakeDataObservabilityQualityMonitoring</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeEventTableLogs">snowflakeEventTableLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeOrganizationUsageMetrics">snowflakeOrganizationUsageMetrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeQueryHistoryLogs">snowflakeQueryHistoryLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeSecurityLogs">snowflakeSecurityLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeTaskHistoryLogs">snowflakeTaskHistoryLogs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeAccountUsageMetricsInput">snowflakeAccountUsageMetricsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeCloudCostMetricsInput">snowflakeCloudCostMetricsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeDataObservabilityQualityMonitoringInput">snowflakeDataObservabilityQualityMonitoringInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeEventTableLogsInput">snowflakeEventTableLogsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeOrganizationUsageMetricsInput">snowflakeOrganizationUsageMetricsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeQueryHistoryLogsInput">snowflakeQueryHistoryLogsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeSecurityLogsInput">snowflakeSecurityLogsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeTaskHistoryLogsInput">snowflakeTaskHistoryLogsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows">IntegrationSnowflakeAccountDataflows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `snowflakeAccountUsageMetrics`<sup>Required</sup> <a name="snowflakeAccountUsageMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeAccountUsageMetrics"></a>

```java
public IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference getSnowflakeAccountUsageMetrics();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference</a>

---

##### `snowflakeCloudCostMetrics`<sup>Required</sup> <a name="snowflakeCloudCostMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeCloudCostMetrics"></a>

```java
public IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference getSnowflakeCloudCostMetrics();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference</a>

---

##### `snowflakeDataObservabilityQualityMonitoring`<sup>Required</sup> <a name="snowflakeDataObservabilityQualityMonitoring" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeDataObservabilityQualityMonitoring"></a>

```java
public IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference getSnowflakeDataObservabilityQualityMonitoring();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference</a>

---

##### `snowflakeEventTableLogs`<sup>Required</sup> <a name="snowflakeEventTableLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeEventTableLogs"></a>

```java
public IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference getSnowflakeEventTableLogs();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference</a>

---

##### `snowflakeOrganizationUsageMetrics`<sup>Required</sup> <a name="snowflakeOrganizationUsageMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeOrganizationUsageMetrics"></a>

```java
public IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference getSnowflakeOrganizationUsageMetrics();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference</a>

---

##### `snowflakeQueryHistoryLogs`<sup>Required</sup> <a name="snowflakeQueryHistoryLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeQueryHistoryLogs"></a>

```java
public IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference getSnowflakeQueryHistoryLogs();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference</a>

---

##### `snowflakeSecurityLogs`<sup>Required</sup> <a name="snowflakeSecurityLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeSecurityLogs"></a>

```java
public IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference getSnowflakeSecurityLogs();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference</a>

---

##### `snowflakeTaskHistoryLogs`<sup>Required</sup> <a name="snowflakeTaskHistoryLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeTaskHistoryLogs"></a>

```java
public IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference getSnowflakeTaskHistoryLogs();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference</a>

---

##### `snowflakeAccountUsageMetricsInput`<sup>Optional</sup> <a name="snowflakeAccountUsageMetricsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeAccountUsageMetricsInput"></a>

```java
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics getSnowflakeAccountUsageMetricsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics</a>

---

##### `snowflakeCloudCostMetricsInput`<sup>Optional</sup> <a name="snowflakeCloudCostMetricsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeCloudCostMetricsInput"></a>

```java
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics getSnowflakeCloudCostMetricsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics</a>

---

##### `snowflakeDataObservabilityQualityMonitoringInput`<sup>Optional</sup> <a name="snowflakeDataObservabilityQualityMonitoringInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeDataObservabilityQualityMonitoringInput"></a>

```java
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring getSnowflakeDataObservabilityQualityMonitoringInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring</a>

---

##### `snowflakeEventTableLogsInput`<sup>Optional</sup> <a name="snowflakeEventTableLogsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeEventTableLogsInput"></a>

```java
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs getSnowflakeEventTableLogsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs</a>

---

##### `snowflakeOrganizationUsageMetricsInput`<sup>Optional</sup> <a name="snowflakeOrganizationUsageMetricsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeOrganizationUsageMetricsInput"></a>

```java
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics getSnowflakeOrganizationUsageMetricsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics</a>

---

##### `snowflakeQueryHistoryLogsInput`<sup>Optional</sup> <a name="snowflakeQueryHistoryLogsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeQueryHistoryLogsInput"></a>

```java
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs getSnowflakeQueryHistoryLogsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs</a>

---

##### `snowflakeSecurityLogsInput`<sup>Optional</sup> <a name="snowflakeSecurityLogsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeSecurityLogsInput"></a>

```java
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs getSnowflakeSecurityLogsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs</a>

---

##### `snowflakeTaskHistoryLogsInput`<sup>Optional</sup> <a name="snowflakeTaskHistoryLogsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeTaskHistoryLogsInput"></a>

```java
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs getSnowflakeTaskHistoryLogsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.internalValue"></a>

```java
public IResolvable|IntegrationSnowflakeAccountDataflows getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows">IntegrationSnowflakeAccountDataflows</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference;

new IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.resetSettings">resetSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSettings` <a name="putSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.putSettings"></a>

```java
public void putSettings(IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetSettings` <a name="resetSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.resetSettings"></a>

```java
public void resetSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.settingsInput">settingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.settings"></a>

```java
public IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference getSettings();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.settingsInput"></a>

```java
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings getSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.internalValue"></a>

```java
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference;

new IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.resetAccountUsageMetricsAggregateLast24H">resetAccountUsageMetricsAggregateLast24H</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountUsageMetricsAggregateLast24H` <a name="resetAccountUsageMetricsAggregateLast24H" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.resetAccountUsageMetricsAggregateLast24H"></a>

```java
public void resetAccountUsageMetricsAggregateLast24H()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.accountUsageMetricsAggregateLast24HInput">accountUsageMetricsAggregateLast24HInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.accountUsageMetricsAggregateLast24H">accountUsageMetricsAggregateLast24H</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountUsageMetricsAggregateLast24HInput`<sup>Optional</sup> <a name="accountUsageMetricsAggregateLast24HInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.accountUsageMetricsAggregateLast24HInput"></a>

```java
public java.lang.Boolean|IResolvable getAccountUsageMetricsAggregateLast24HInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `accountUsageMetricsAggregateLast24H`<sup>Required</sup> <a name="accountUsageMetricsAggregateLast24H" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.accountUsageMetricsAggregateLast24H"></a>

```java
public java.lang.Boolean|IResolvable getAccountUsageMetricsAggregateLast24H();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference;

new IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.resetSettings">resetSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSettings` <a name="putSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.putSettings"></a>

```java
public void putSettings(IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetSettings` <a name="resetSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.resetSettings"></a>

```java
public void resetSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.settingsInput">settingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.settings"></a>

```java
public IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference getSettings();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.settingsInput"></a>

```java
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings getSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.internalValue"></a>

```java
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference;

new IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.resetQueryTags">resetQueryTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQueryTags` <a name="resetQueryTags" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.resetQueryTags"></a>

```java
public void resetQueryTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.queryTagsInput">queryTagsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.queryTags">queryTags</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `queryTagsInput`<sup>Optional</sup> <a name="queryTagsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.queryTagsInput"></a>

```java
public java.lang.String getQueryTagsInput();
```

- *Type:* java.lang.String

---

##### `queryTags`<sup>Required</sup> <a name="queryTags" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.queryTags"></a>

```java
public java.lang.String getQueryTags();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference;

new IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.resetSettings">resetSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSettings` <a name="putSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.putSettings"></a>

```java
public void putSettings(IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetSettings` <a name="resetSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.resetSettings"></a>

```java
public void resetSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.settingsInput">settingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.settings"></a>

```java
public IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference getSettings();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.settingsInput"></a>

```java
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings getSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.internalValue"></a>

```java
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference;

new IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.resetDoTableCrawlerCron">resetDoTableCrawlerCron</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.resetSyncSnowflakeSystemDatabase">resetSyncSnowflakeSystemDatabase</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDoTableCrawlerCron` <a name="resetDoTableCrawlerCron" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.resetDoTableCrawlerCron"></a>

```java
public void resetDoTableCrawlerCron()
```

##### `resetSyncSnowflakeSystemDatabase` <a name="resetSyncSnowflakeSystemDatabase" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.resetSyncSnowflakeSystemDatabase"></a>

```java
public void resetSyncSnowflakeSystemDatabase()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.doTableCrawlerCronInput">doTableCrawlerCronInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.syncSnowflakeSystemDatabaseInput">syncSnowflakeSystemDatabaseInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.doTableCrawlerCron">doTableCrawlerCron</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.syncSnowflakeSystemDatabase">syncSnowflakeSystemDatabase</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `doTableCrawlerCronInput`<sup>Optional</sup> <a name="doTableCrawlerCronInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.doTableCrawlerCronInput"></a>

```java
public java.lang.String getDoTableCrawlerCronInput();
```

- *Type:* java.lang.String

---

##### `syncSnowflakeSystemDatabaseInput`<sup>Optional</sup> <a name="syncSnowflakeSystemDatabaseInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.syncSnowflakeSystemDatabaseInput"></a>

```java
public java.lang.Boolean|IResolvable getSyncSnowflakeSystemDatabaseInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `doTableCrawlerCron`<sup>Required</sup> <a name="doTableCrawlerCron" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.doTableCrawlerCron"></a>

```java
public java.lang.String getDoTableCrawlerCron();
```

- *Type:* java.lang.String

---

##### `syncSnowflakeSystemDatabase`<sup>Required</sup> <a name="syncSnowflakeSystemDatabase" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.syncSnowflakeSystemDatabase"></a>

```java
public java.lang.Boolean|IResolvable getSyncSnowflakeSystemDatabase();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference;

new IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.resetSettings">resetSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSettings` <a name="putSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.putSettings"></a>

```java
public void putSettings(IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetSettings` <a name="resetSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.resetSettings"></a>

```java
public void resetSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.settingsInput">settingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.settings"></a>

```java
public IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference getSettings();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.settingsInput"></a>

```java
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings getSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.internalValue"></a>

```java
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference;

new IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableEventsEnabled">resetEventTableEventsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableLogsEnabled">resetEventTableLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableLogsIntervalMin">resetEventTableLogsIntervalMin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableSpanEventsEnabled">resetEventTableSpanEventsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableSpansEnabled">resetEventTableSpansEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEventTableEventsEnabled` <a name="resetEventTableEventsEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableEventsEnabled"></a>

```java
public void resetEventTableEventsEnabled()
```

##### `resetEventTableLogsEnabled` <a name="resetEventTableLogsEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableLogsEnabled"></a>

```java
public void resetEventTableLogsEnabled()
```

##### `resetEventTableLogsIntervalMin` <a name="resetEventTableLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableLogsIntervalMin"></a>

```java
public void resetEventTableLogsIntervalMin()
```

##### `resetEventTableSpanEventsEnabled` <a name="resetEventTableSpanEventsEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableSpanEventsEnabled"></a>

```java
public void resetEventTableSpanEventsEnabled()
```

##### `resetEventTableSpansEnabled` <a name="resetEventTableSpansEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableSpansEnabled"></a>

```java
public void resetEventTableSpansEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableEventsEnabledInput">eventTableEventsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableLogsEnabledInput">eventTableLogsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableLogsIntervalMinInput">eventTableLogsIntervalMinInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableSpanEventsEnabledInput">eventTableSpanEventsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableSpansEnabledInput">eventTableSpansEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableEventsEnabled">eventTableEventsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableLogsEnabled">eventTableLogsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableLogsIntervalMin">eventTableLogsIntervalMin</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableSpanEventsEnabled">eventTableSpanEventsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableSpansEnabled">eventTableSpansEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventTableEventsEnabledInput`<sup>Optional</sup> <a name="eventTableEventsEnabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableEventsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEventTableEventsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventTableLogsEnabledInput`<sup>Optional</sup> <a name="eventTableLogsEnabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableLogsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEventTableLogsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventTableLogsIntervalMinInput`<sup>Optional</sup> <a name="eventTableLogsIntervalMinInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableLogsIntervalMinInput"></a>

```java
public java.lang.Number getEventTableLogsIntervalMinInput();
```

- *Type:* java.lang.Number

---

##### `eventTableSpanEventsEnabledInput`<sup>Optional</sup> <a name="eventTableSpanEventsEnabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableSpanEventsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEventTableSpanEventsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventTableSpansEnabledInput`<sup>Optional</sup> <a name="eventTableSpansEnabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableSpansEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEventTableSpansEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventTableEventsEnabled`<sup>Required</sup> <a name="eventTableEventsEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableEventsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getEventTableEventsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventTableLogsEnabled`<sup>Required</sup> <a name="eventTableLogsEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableLogsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getEventTableLogsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventTableLogsIntervalMin`<sup>Required</sup> <a name="eventTableLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableLogsIntervalMin"></a>

```java
public java.lang.Number getEventTableLogsIntervalMin();
```

- *Type:* java.lang.Number

---

##### `eventTableSpanEventsEnabled`<sup>Required</sup> <a name="eventTableSpanEventsEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableSpanEventsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getEventTableSpanEventsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventTableSpansEnabled`<sup>Required</sup> <a name="eventTableSpansEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableSpansEnabled"></a>

```java
public java.lang.Boolean|IResolvable getEventTableSpansEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference;

new IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.resetSettings">resetSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSettings` <a name="putSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.putSettings"></a>

```java
public void putSettings(IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetSettings` <a name="resetSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.resetSettings"></a>

```java
public void resetSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.settingsInput">settingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.settings"></a>

```java
public IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference getSettings();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.settingsInput"></a>

```java
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings getSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.internalValue"></a>

```java
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference;

new IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.resetOrganizationUsageMetricsAggregateLast24H">resetOrganizationUsageMetricsAggregateLast24H</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOrganizationUsageMetricsAggregateLast24H` <a name="resetOrganizationUsageMetricsAggregateLast24H" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.resetOrganizationUsageMetricsAggregateLast24H"></a>

```java
public void resetOrganizationUsageMetricsAggregateLast24H()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.organizationUsageMetricsAggregateLast24HInput">organizationUsageMetricsAggregateLast24HInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.organizationUsageMetricsAggregateLast24H">organizationUsageMetricsAggregateLast24H</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `organizationUsageMetricsAggregateLast24HInput`<sup>Optional</sup> <a name="organizationUsageMetricsAggregateLast24HInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.organizationUsageMetricsAggregateLast24HInput"></a>

```java
public java.lang.Boolean|IResolvable getOrganizationUsageMetricsAggregateLast24HInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `organizationUsageMetricsAggregateLast24H`<sup>Required</sup> <a name="organizationUsageMetricsAggregateLast24H" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.organizationUsageMetricsAggregateLast24H"></a>

```java
public java.lang.Boolean|IResolvable getOrganizationUsageMetricsAggregateLast24H();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference;

new IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.resetSettings">resetSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSettings` <a name="putSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.putSettings"></a>

```java
public void putSettings(IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetSettings` <a name="resetSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.resetSettings"></a>

```java
public void resetSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.settingsInput">settingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.settings"></a>

```java
public IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference getSettings();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.settingsInput"></a>

```java
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings getSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.internalValue"></a>

```java
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference;

new IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.resetJoinQueryHistoryWithAccessHistoryEnabled">resetJoinQueryHistoryWithAccessHistoryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.resetQueryHistoryLogsIntervalMin">resetQueryHistoryLogsIntervalMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJoinQueryHistoryWithAccessHistoryEnabled` <a name="resetJoinQueryHistoryWithAccessHistoryEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.resetJoinQueryHistoryWithAccessHistoryEnabled"></a>

```java
public void resetJoinQueryHistoryWithAccessHistoryEnabled()
```

##### `resetQueryHistoryLogsIntervalMin` <a name="resetQueryHistoryLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.resetQueryHistoryLogsIntervalMin"></a>

```java
public void resetQueryHistoryLogsIntervalMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.joinQueryHistoryWithAccessHistoryEnabledInput">joinQueryHistoryWithAccessHistoryEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.queryHistoryLogsIntervalMinInput">queryHistoryLogsIntervalMinInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.joinQueryHistoryWithAccessHistoryEnabled">joinQueryHistoryWithAccessHistoryEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.queryHistoryLogsIntervalMin">queryHistoryLogsIntervalMin</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `joinQueryHistoryWithAccessHistoryEnabledInput`<sup>Optional</sup> <a name="joinQueryHistoryWithAccessHistoryEnabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.joinQueryHistoryWithAccessHistoryEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getJoinQueryHistoryWithAccessHistoryEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `queryHistoryLogsIntervalMinInput`<sup>Optional</sup> <a name="queryHistoryLogsIntervalMinInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.queryHistoryLogsIntervalMinInput"></a>

```java
public java.lang.Number getQueryHistoryLogsIntervalMinInput();
```

- *Type:* java.lang.Number

---

##### `joinQueryHistoryWithAccessHistoryEnabled`<sup>Required</sup> <a name="joinQueryHistoryWithAccessHistoryEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.joinQueryHistoryWithAccessHistoryEnabled"></a>

```java
public java.lang.Boolean|IResolvable getJoinQueryHistoryWithAccessHistoryEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `queryHistoryLogsIntervalMin`<sup>Required</sup> <a name="queryHistoryLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.queryHistoryLogsIntervalMin"></a>

```java
public java.lang.Number getQueryHistoryLogsIntervalMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference;

new IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.resetSettings">resetSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSettings` <a name="putSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.putSettings"></a>

```java
public void putSettings(IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetSettings` <a name="resetSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.resetSettings"></a>

```java
public void resetSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.settingsInput">settingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.settings"></a>

```java
public IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference getSettings();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.settingsInput"></a>

```java
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings getSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.internalValue"></a>

```java
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference;

new IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.resetSecurityLogsIntervalMin">resetSecurityLogsIntervalMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityLogsIntervalMin` <a name="resetSecurityLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.resetSecurityLogsIntervalMin"></a>

```java
public void resetSecurityLogsIntervalMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.securityLogsIntervalMinInput">securityLogsIntervalMinInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.securityLogsIntervalMin">securityLogsIntervalMin</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityLogsIntervalMinInput`<sup>Optional</sup> <a name="securityLogsIntervalMinInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.securityLogsIntervalMinInput"></a>

```java
public java.lang.Number getSecurityLogsIntervalMinInput();
```

- *Type:* java.lang.Number

---

##### `securityLogsIntervalMin`<sup>Required</sup> <a name="securityLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.securityLogsIntervalMin"></a>

```java
public java.lang.Number getSecurityLogsIntervalMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference;

new IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.resetSettings">resetSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSettings` <a name="putSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.putSettings"></a>

```java
public void putSettings(IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetSettings` <a name="resetSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.resetSettings"></a>

```java
public void resetSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.settingsInput">settingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.settings"></a>

```java
public IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference getSettings();
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.settingsInput"></a>

```java
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings getSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.internalValue"></a>

```java
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference;

new IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.resetTaskHistoryLogsIntervalMin">resetTaskHistoryLogsIntervalMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTaskHistoryLogsIntervalMin` <a name="resetTaskHistoryLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.resetTaskHistoryLogsIntervalMin"></a>

```java
public void resetTaskHistoryLogsIntervalMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.taskHistoryLogsIntervalMinInput">taskHistoryLogsIntervalMinInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.taskHistoryLogsIntervalMin">taskHistoryLogsIntervalMin</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `taskHistoryLogsIntervalMinInput`<sup>Optional</sup> <a name="taskHistoryLogsIntervalMinInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.taskHistoryLogsIntervalMinInput"></a>

```java
public java.lang.Number getTaskHistoryLogsIntervalMinInput();
```

- *Type:* java.lang.Number

---

##### `taskHistoryLogsIntervalMin`<sup>Required</sup> <a name="taskHistoryLogsIntervalMin" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.taskHistoryLogsIntervalMin"></a>

```java
public java.lang.Number getTaskHistoryLogsIntervalMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings</a>

---


### IntegrationSnowflakeAccountSettingsOutputReference <a name="IntegrationSnowflakeAccountSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_snowflake_account.IntegrationSnowflakeAccountSettingsOutputReference;

new IntegrationSnowflakeAccountSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.snowflakeAccountIdentifierInput">snowflakeAccountIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.snowflakeAccountIdentifier">snowflakeAccountIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings">IntegrationSnowflakeAccountSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `snowflakeAccountIdentifierInput`<sup>Optional</sup> <a name="snowflakeAccountIdentifierInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.snowflakeAccountIdentifierInput"></a>

```java
public java.lang.String getSnowflakeAccountIdentifierInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `snowflakeAccountIdentifier`<sup>Required</sup> <a name="snowflakeAccountIdentifier" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.snowflakeAccountIdentifier"></a>

```java
public java.lang.String getSnowflakeAccountIdentifier();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|IntegrationSnowflakeAccountSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings">IntegrationSnowflakeAccountSettings</a>

---



