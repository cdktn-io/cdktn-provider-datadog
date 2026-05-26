# `integrationAwsEventBridge` Submodule <a name="`integrationAwsEventBridge` Submodule" id="@cdktn/provider-datadog.integrationAwsEventBridge"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAwsEventBridge <a name="IntegrationAwsEventBridge" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_aws_event_bridge datadog_integration_aws_event_bridge}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_aws_event_bridge.IntegrationAwsEventBridge;

IntegrationAwsEventBridge.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .eventGeneratorName(java.lang.String)
    .region(java.lang.String)
//  .createEventBus(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Your AWS Account ID without dashes. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.eventGeneratorName">eventGeneratorName</a></code> | <code>java.lang.String</code> | The given part of the event source name, which is then combined with an assigned suffix to form the full name. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The event source's [AWS region](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.createEventBus">createEventBus</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | True if Datadog should create the event bus in addition to the event source. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Your AWS Account ID without dashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_aws_event_bridge#account_id IntegrationAwsEventBridge#account_id}

---

##### `eventGeneratorName`<sup>Required</sup> <a name="eventGeneratorName" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.eventGeneratorName"></a>

- *Type:* java.lang.String

The given part of the event source name, which is then combined with an assigned suffix to form the full name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_aws_event_bridge#event_generator_name IntegrationAwsEventBridge#event_generator_name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The event source's [AWS region](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_aws_event_bridge#region IntegrationAwsEventBridge#region}

---

##### `createEventBus`<sup>Optional</sup> <a name="createEventBus" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.Initializer.parameter.createEventBus"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

True if Datadog should create the event bus in addition to the event source.

Requires the `events:CreateEventBus` permission. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_aws_event_bridge#create_event_bus IntegrationAwsEventBridge#create_event_bus}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.resetCreateEventBus">resetCreateEventBus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCreateEventBus` <a name="resetCreateEventBus" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.resetCreateEventBus"></a>

```java
public void resetCreateEventBus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IntegrationAwsEventBridge resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.isConstruct"></a>

```java
import io.cdktn.providers.datadog.integration_aws_event_bridge.IntegrationAwsEventBridge;

IntegrationAwsEventBridge.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.integration_aws_event_bridge.IntegrationAwsEventBridge;

IntegrationAwsEventBridge.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.integration_aws_event_bridge.IntegrationAwsEventBridge;

IntegrationAwsEventBridge.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.integration_aws_event_bridge.IntegrationAwsEventBridge;

IntegrationAwsEventBridge.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IntegrationAwsEventBridge.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IntegrationAwsEventBridge resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IntegrationAwsEventBridge to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IntegrationAwsEventBridge that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_aws_event_bridge#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IntegrationAwsEventBridge to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.createEventBusInput">createEventBusInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.eventGeneratorNameInput">eventGeneratorNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.createEventBus">createEventBus</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.eventGeneratorName">eventGeneratorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `createEventBusInput`<sup>Optional</sup> <a name="createEventBusInput" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.createEventBusInput"></a>

```java
public java.lang.Boolean|IResolvable getCreateEventBusInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventGeneratorNameInput`<sup>Optional</sup> <a name="eventGeneratorNameInput" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.eventGeneratorNameInput"></a>

```java
public java.lang.String getEventGeneratorNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `createEventBus`<sup>Required</sup> <a name="createEventBus" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.createEventBus"></a>

```java
public java.lang.Boolean|IResolvable getCreateEventBus();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventGeneratorName`<sup>Required</sup> <a name="eventGeneratorName" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.eventGeneratorName"></a>

```java
public java.lang.String getEventGeneratorName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridge.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsEventBridgeConfig <a name="IntegrationAwsEventBridgeConfig" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_aws_event_bridge.IntegrationAwsEventBridgeConfig;

IntegrationAwsEventBridgeConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .eventGeneratorName(java.lang.String)
    .region(java.lang.String)
//  .createEventBus(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Your AWS Account ID without dashes. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.eventGeneratorName">eventGeneratorName</a></code> | <code>java.lang.String</code> | The given part of the event source name, which is then combined with an assigned suffix to form the full name. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.region">region</a></code> | <code>java.lang.String</code> | The event source's [AWS region](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). |
| <code><a href="#@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.createEventBus">createEventBus</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | True if Datadog should create the event bus in addition to the event source. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Your AWS Account ID without dashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_aws_event_bridge#account_id IntegrationAwsEventBridge#account_id}

---

##### `eventGeneratorName`<sup>Required</sup> <a name="eventGeneratorName" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.eventGeneratorName"></a>

```java
public java.lang.String getEventGeneratorName();
```

- *Type:* java.lang.String

The given part of the event source name, which is then combined with an assigned suffix to form the full name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_aws_event_bridge#event_generator_name IntegrationAwsEventBridge#event_generator_name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The event source's [AWS region](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_aws_event_bridge#region IntegrationAwsEventBridge#region}

---

##### `createEventBus`<sup>Optional</sup> <a name="createEventBus" id="@cdktn/provider-datadog.integrationAwsEventBridge.IntegrationAwsEventBridgeConfig.property.createEventBus"></a>

```java
public java.lang.Boolean|IResolvable getCreateEventBus();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

True if Datadog should create the event bus in addition to the event source.

Requires the `events:CreateEventBus` permission. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_aws_event_bridge#create_event_bus IntegrationAwsEventBridge#create_event_bus}

---



