# `cloudWorkloadSecurityAgentRule` Submodule <a name="`cloudWorkloadSecurityAgentRule` Submodule" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudWorkloadSecurityAgentRule <a name="CloudWorkloadSecurityAgentRule" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/cloud_workload_security_agent_rule datadog_cloud_workload_security_agent_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer"></a>

```java
import io.cdktn.providers.datadog.cloud_workload_security_agent_rule.CloudWorkloadSecurityAgentRule;

CloudWorkloadSecurityAgentRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .expression(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.expression">expression</a></code> | <code>java.lang.String</code> | The SECL expression of the Agent rule. |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the Agent rule. |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the Agent rule. Defaults to `""`. |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the Agent rule is enabled. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/cloud_workload_security_agent_rule#id CloudWorkloadSecurityAgentRule#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.expression"></a>

- *Type:* java.lang.String

The SECL expression of the Agent rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/cloud_workload_security_agent_rule#expression CloudWorkloadSecurityAgentRule#expression}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the Agent rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/cloud_workload_security_agent_rule#name CloudWorkloadSecurityAgentRule#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the Agent rule. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/cloud_workload_security_agent_rule#description CloudWorkloadSecurityAgentRule#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the Agent rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/cloud_workload_security_agent_rule#enabled CloudWorkloadSecurityAgentRule#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/cloud_workload_security_agent_rule#id CloudWorkloadSecurityAgentRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudWorkloadSecurityAgentRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isConstruct"></a>

```java
import io.cdktn.providers.datadog.cloud_workload_security_agent_rule.CloudWorkloadSecurityAgentRule;

CloudWorkloadSecurityAgentRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.cloud_workload_security_agent_rule.CloudWorkloadSecurityAgentRule;

CloudWorkloadSecurityAgentRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.cloud_workload_security_agent_rule.CloudWorkloadSecurityAgentRule;

CloudWorkloadSecurityAgentRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.cloud_workload_security_agent_rule.CloudWorkloadSecurityAgentRule;

CloudWorkloadSecurityAgentRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudWorkloadSecurityAgentRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudWorkloadSecurityAgentRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudWorkloadSecurityAgentRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudWorkloadSecurityAgentRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/cloud_workload_security_agent_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudWorkloadSecurityAgentRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudWorkloadSecurityAgentRuleConfig <a name="CloudWorkloadSecurityAgentRuleConfig" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.cloud_workload_security_agent_rule.CloudWorkloadSecurityAgentRuleConfig;

CloudWorkloadSecurityAgentRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .expression(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.expression">expression</a></code> | <code>java.lang.String</code> | The SECL expression of the Agent rule. |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Agent rule. |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the Agent rule. Defaults to `""`. |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the Agent rule is enabled. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/cloud_workload_security_agent_rule#id CloudWorkloadSecurityAgentRule#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

The SECL expression of the Agent rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/cloud_workload_security_agent_rule#expression CloudWorkloadSecurityAgentRule#expression}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Agent rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/cloud_workload_security_agent_rule#name CloudWorkloadSecurityAgentRule#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the Agent rule. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/cloud_workload_security_agent_rule#description CloudWorkloadSecurityAgentRule#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the Agent rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/cloud_workload_security_agent_rule#enabled CloudWorkloadSecurityAgentRule#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/cloud_workload_security_agent_rule#id CloudWorkloadSecurityAgentRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



