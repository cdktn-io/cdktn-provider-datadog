# `onCallTeamRoutingRules` Submodule <a name="`onCallTeamRoutingRules` Submodule" id="@cdktn/provider-datadog.onCallTeamRoutingRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OnCallTeamRoutingRules <a name="OnCallTeamRoutingRules" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules datadog_on_call_team_routing_rules}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_team_routing_rules.OnCallTeamRoutingRules;

OnCallTeamRoutingRules.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .id(java.lang.String)
//  .rule(IResolvable|java.util.List<OnCallTeamRoutingRulesRule>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | ID of the team to associate the routing rules with. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.rule">rule</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule">OnCallTeamRoutingRulesRule</a>></code> | rule block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.id"></a>

- *Type:* java.lang.String

ID of the team to associate the routing rules with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#id OnCallTeamRoutingRules#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.rule"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule">OnCallTeamRoutingRulesRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#rule OnCallTeamRoutingRules#rule}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.resetRule">resetRule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRule` <a name="putRule" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.putRule"></a>

```java
public void putRule(IResolvable|java.util.List<OnCallTeamRoutingRulesRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.putRule.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule">OnCallTeamRoutingRulesRule</a>>

---

##### `resetRule` <a name="resetRule" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.resetRule"></a>

```java
public void resetRule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OnCallTeamRoutingRules resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isConstruct"></a>

```java
import io.cdktn.providers.datadog.on_call_team_routing_rules.OnCallTeamRoutingRules;

OnCallTeamRoutingRules.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.on_call_team_routing_rules.OnCallTeamRoutingRules;

OnCallTeamRoutingRules.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.on_call_team_routing_rules.OnCallTeamRoutingRules;

OnCallTeamRoutingRules.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.on_call_team_routing_rules.OnCallTeamRoutingRules;

OnCallTeamRoutingRules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OnCallTeamRoutingRules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OnCallTeamRoutingRules resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OnCallTeamRoutingRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OnCallTeamRoutingRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OnCallTeamRoutingRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList">OnCallTeamRoutingRulesRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.ruleInput">ruleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule">OnCallTeamRoutingRulesRule</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.rule"></a>

```java
public OnCallTeamRoutingRulesRuleList getRule();
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList">OnCallTeamRoutingRulesRuleList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.ruleInput"></a>

```java
public IResolvable|java.util.List<OnCallTeamRoutingRulesRule> getRuleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule">OnCallTeamRoutingRulesRule</a>>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OnCallTeamRoutingRulesConfig <a name="OnCallTeamRoutingRulesConfig" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_team_routing_rules.OnCallTeamRoutingRulesConfig;

OnCallTeamRoutingRulesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .id(java.lang.String)
//  .rule(IResolvable|java.util.List<OnCallTeamRoutingRulesRule>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.id">id</a></code> | <code>java.lang.String</code> | ID of the team to associate the routing rules with. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.rule">rule</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule">OnCallTeamRoutingRulesRule</a>></code> | rule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

ID of the team to associate the routing rules with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#id OnCallTeamRoutingRules#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.rule"></a>

```java
public IResolvable|java.util.List<OnCallTeamRoutingRulesRule> getRule();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule">OnCallTeamRoutingRulesRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#rule OnCallTeamRoutingRules#rule}

---

### OnCallTeamRoutingRulesRule <a name="OnCallTeamRoutingRulesRule" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_team_routing_rules.OnCallTeamRoutingRulesRule;

OnCallTeamRoutingRulesRule.builder()
//  .action(IResolvable|java.util.List<OnCallTeamRoutingRulesRuleAction>)
//  .escalationPolicy(java.lang.String)
//  .query(java.lang.String)
//  .timeRestrictions(OnCallTeamRoutingRulesRuleTimeRestrictions)
//  .urgency(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.action">action</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction">OnCallTeamRoutingRulesRuleAction</a>></code> | action block. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.escalationPolicy">escalationPolicy</a></code> | <code>java.lang.String</code> | ID of the policy to be applied when this routing rule matches. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.query">query</a></code> | <code>java.lang.String</code> | Defines the query or condition that triggers this routing rule. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.timeRestrictions">timeRestrictions</a></code> | <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions">OnCallTeamRoutingRulesRuleTimeRestrictions</a></code> | time_restrictions block. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.urgency">urgency</a></code> | <code>java.lang.String</code> | Defines the urgency for pages created via this rule. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.action"></a>

```java
public IResolvable|java.util.List<OnCallTeamRoutingRulesRuleAction> getAction();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction">OnCallTeamRoutingRulesRuleAction</a>>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#action OnCallTeamRoutingRules#action}

---

##### `escalationPolicy`<sup>Optional</sup> <a name="escalationPolicy" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.escalationPolicy"></a>

```java
public java.lang.String getEscalationPolicy();
```

- *Type:* java.lang.String

ID of the policy to be applied when this routing rule matches.

The last rule must define an escalation policy, either via this attribute or via an `escalation_policy` action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#escalation_policy OnCallTeamRoutingRules#escalation_policy}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

Defines the query or condition that triggers this routing rule.

Must not be set on the last rule, which acts as a catch-all rule. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#query OnCallTeamRoutingRules#query}

---

##### `timeRestrictions`<sup>Optional</sup> <a name="timeRestrictions" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.timeRestrictions"></a>

```java
public OnCallTeamRoutingRulesRuleTimeRestrictions getTimeRestrictions();
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions">OnCallTeamRoutingRulesRuleTimeRestrictions</a>

time_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#time_restrictions OnCallTeamRoutingRules#time_restrictions}

---

##### `urgency`<sup>Optional</sup> <a name="urgency" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.urgency"></a>

```java
public java.lang.String getUrgency();
```

- *Type:* java.lang.String

Defines the urgency for pages created via this rule.

Only valid if `escalation_policy` is set. Valid values are `high`, `low`, `dynamic`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#urgency OnCallTeamRoutingRules#urgency}

---

### OnCallTeamRoutingRulesRuleAction <a name="OnCallTeamRoutingRulesRuleAction" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_team_routing_rules.OnCallTeamRoutingRulesRuleAction;

OnCallTeamRoutingRulesRuleAction.builder()
//  .escalationPolicy(OnCallTeamRoutingRulesRuleActionEscalationPolicy)
//  .sendSlackMessage(OnCallTeamRoutingRulesRuleActionSendSlackMessage)
//  .sendTeamsMessage(OnCallTeamRoutingRulesRuleActionSendTeamsMessage)
//  .triggerWorkflowAutomation(OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction.property.escalationPolicy">escalationPolicy</a></code> | <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicy">OnCallTeamRoutingRulesRuleActionEscalationPolicy</a></code> | escalation_policy block. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction.property.sendSlackMessage">sendSlackMessage</a></code> | <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage">OnCallTeamRoutingRulesRuleActionSendSlackMessage</a></code> | send_slack_message block. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction.property.sendTeamsMessage">sendTeamsMessage</a></code> | <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage">OnCallTeamRoutingRulesRuleActionSendTeamsMessage</a></code> | send_teams_message block. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction.property.triggerWorkflowAutomation">triggerWorkflowAutomation</a></code> | <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation">OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation</a></code> | trigger_workflow_automation block. |

---

##### `escalationPolicy`<sup>Optional</sup> <a name="escalationPolicy" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction.property.escalationPolicy"></a>

```java
public OnCallTeamRoutingRulesRuleActionEscalationPolicy getEscalationPolicy();
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicy">OnCallTeamRoutingRulesRuleActionEscalationPolicy</a>

escalation_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#escalation_policy OnCallTeamRoutingRules#escalation_policy}

---

##### `sendSlackMessage`<sup>Optional</sup> <a name="sendSlackMessage" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction.property.sendSlackMessage"></a>

```java
public OnCallTeamRoutingRulesRuleActionSendSlackMessage getSendSlackMessage();
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage">OnCallTeamRoutingRulesRuleActionSendSlackMessage</a>

send_slack_message block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#send_slack_message OnCallTeamRoutingRules#send_slack_message}

---

##### `sendTeamsMessage`<sup>Optional</sup> <a name="sendTeamsMessage" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction.property.sendTeamsMessage"></a>

```java
public OnCallTeamRoutingRulesRuleActionSendTeamsMessage getSendTeamsMessage();
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage">OnCallTeamRoutingRulesRuleActionSendTeamsMessage</a>

send_teams_message block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#send_teams_message OnCallTeamRoutingRules#send_teams_message}

---

##### `triggerWorkflowAutomation`<sup>Optional</sup> <a name="triggerWorkflowAutomation" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction.property.triggerWorkflowAutomation"></a>

```java
public OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation getTriggerWorkflowAutomation();
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation">OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation</a>

trigger_workflow_automation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#trigger_workflow_automation OnCallTeamRoutingRules#trigger_workflow_automation}

---

### OnCallTeamRoutingRulesRuleActionEscalationPolicy <a name="OnCallTeamRoutingRulesRuleActionEscalationPolicy" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicy.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_team_routing_rules.OnCallTeamRoutingRulesRuleActionEscalationPolicy;

OnCallTeamRoutingRulesRuleActionEscalationPolicy.builder()
//  .ackTimeoutMinutes(java.lang.Number)
//  .policyId(java.lang.String)
//  .supportHours(OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHours)
//  .urgency(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicy.property.ackTimeoutMinutes">ackTimeoutMinutes</a></code> | <code>java.lang.Number</code> | Number of minutes before an acknowledged page is re-triggered. Value must be between 30 and 4320. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicy.property.policyId">policyId</a></code> | <code>java.lang.String</code> | Escalation policy ID. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicy.property.supportHours">supportHours</a></code> | <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHours">OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHours</a></code> | support_hours block. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicy.property.urgency">urgency</a></code> | <code>java.lang.String</code> | Urgency for pages created via this action. Valid values are `high`, `low`, `dynamic`. |

---

##### `ackTimeoutMinutes`<sup>Optional</sup> <a name="ackTimeoutMinutes" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicy.property.ackTimeoutMinutes"></a>

```java
public java.lang.Number getAckTimeoutMinutes();
```

- *Type:* java.lang.Number

Number of minutes before an acknowledged page is re-triggered. Value must be between 30 and 4320.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#ack_timeout_minutes OnCallTeamRoutingRules#ack_timeout_minutes}

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicy.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

Escalation policy ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#policy_id OnCallTeamRoutingRules#policy_id}

---

##### `supportHours`<sup>Optional</sup> <a name="supportHours" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicy.property.supportHours"></a>

```java
public OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHours getSupportHours();
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHours">OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHours</a>

support_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#support_hours OnCallTeamRoutingRules#support_hours}

---

##### `urgency`<sup>Optional</sup> <a name="urgency" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicy.property.urgency"></a>

```java
public java.lang.String getUrgency();
```

- *Type:* java.lang.String

Urgency for pages created via this action. Valid values are `high`, `low`, `dynamic`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#urgency OnCallTeamRoutingRules#urgency}

---

### OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHours <a name="OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHours" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHours"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHours.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_team_routing_rules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHours;

OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHours.builder()
//  .restriction(IResolvable|java.util.List<OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction>)
//  .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHours.property.restriction">restriction</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction">OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction</a>></code> | restriction block. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHours.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Specifies the time zone applicable to the restrictions, e.g. `America/New_York`. |

---

##### `restriction`<sup>Optional</sup> <a name="restriction" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHours.property.restriction"></a>

```java
public IResolvable|java.util.List<OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction> getRestriction();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction">OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction</a>>

restriction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#restriction OnCallTeamRoutingRules#restriction}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHours.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Specifies the time zone applicable to the restrictions, e.g. `America/New_York`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#time_zone OnCallTeamRoutingRules#time_zone}

---

### OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction <a name="OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_team_routing_rules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction;

OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction.builder()
//  .endDay(java.lang.String)
//  .endTime(java.lang.String)
//  .startDay(java.lang.String)
//  .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction.property.endDay">endDay</a></code> | <code>java.lang.String</code> | The weekday when the restriction period ends. Valid values are `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction.property.endTime">endTime</a></code> | <code>java.lang.String</code> | The time of day when the restriction ends (hh:mm:ss). |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction.property.startDay">startDay</a></code> | <code>java.lang.String</code> | The weekday when the restriction period starts. Valid values are `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction.property.startTime">startTime</a></code> | <code>java.lang.String</code> | The time of day when the restriction begins (hh:mm:ss). |

---

##### `endDay`<sup>Optional</sup> <a name="endDay" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction.property.endDay"></a>

```java
public java.lang.String getEndDay();
```

- *Type:* java.lang.String

The weekday when the restriction period ends. Valid values are `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#end_day OnCallTeamRoutingRules#end_day}

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

The time of day when the restriction ends (hh:mm:ss).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#end_time OnCallTeamRoutingRules#end_time}

---

##### `startDay`<sup>Optional</sup> <a name="startDay" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction.property.startDay"></a>

```java
public java.lang.String getStartDay();
```

- *Type:* java.lang.String

The weekday when the restriction period starts. Valid values are `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#start_day OnCallTeamRoutingRules#start_day}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

The time of day when the restriction begins (hh:mm:ss).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#start_time OnCallTeamRoutingRules#start_time}

---

### OnCallTeamRoutingRulesRuleActionSendSlackMessage <a name="OnCallTeamRoutingRulesRuleActionSendSlackMessage" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_team_routing_rules.OnCallTeamRoutingRulesRuleActionSendSlackMessage;

OnCallTeamRoutingRulesRuleActionSendSlackMessage.builder()
//  .channel(java.lang.String)
//  .workspace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage.property.channel">channel</a></code> | <code>java.lang.String</code> | Slack channel ID. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage.property.workspace">workspace</a></code> | <code>java.lang.String</code> | Slack workspace ID. |

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

Slack channel ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#channel OnCallTeamRoutingRules#channel}

---

##### `workspace`<sup>Optional</sup> <a name="workspace" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage.property.workspace"></a>

```java
public java.lang.String getWorkspace();
```

- *Type:* java.lang.String

Slack workspace ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#workspace OnCallTeamRoutingRules#workspace}

---

### OnCallTeamRoutingRulesRuleActionSendTeamsMessage <a name="OnCallTeamRoutingRulesRuleActionSendTeamsMessage" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_team_routing_rules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage;

OnCallTeamRoutingRulesRuleActionSendTeamsMessage.builder()
//  .channel(java.lang.String)
//  .team(java.lang.String)
//  .tenant(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage.property.channel">channel</a></code> | <code>java.lang.String</code> | Teams channel ID. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage.property.team">team</a></code> | <code>java.lang.String</code> | Teams team ID. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage.property.tenant">tenant</a></code> | <code>java.lang.String</code> | Teams tenant ID. |

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

Teams channel ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#channel OnCallTeamRoutingRules#channel}

---

##### `team`<sup>Optional</sup> <a name="team" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage.property.team"></a>

```java
public java.lang.String getTeam();
```

- *Type:* java.lang.String

Teams team ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#team OnCallTeamRoutingRules#team}

---

##### `tenant`<sup>Optional</sup> <a name="tenant" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage.property.tenant"></a>

```java
public java.lang.String getTenant();
```

- *Type:* java.lang.String

Teams tenant ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#tenant OnCallTeamRoutingRules#tenant}

---

### OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation <a name="OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_team_routing_rules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation;

OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation.builder()
//  .handle(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation.property.handle">handle</a></code> | <code>java.lang.String</code> | The handle of the Workflow Automation to trigger. |

---

##### `handle`<sup>Optional</sup> <a name="handle" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation.property.handle"></a>

```java
public java.lang.String getHandle();
```

- *Type:* java.lang.String

The handle of the Workflow Automation to trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#handle OnCallTeamRoutingRules#handle}

---

### OnCallTeamRoutingRulesRuleTimeRestrictions <a name="OnCallTeamRoutingRulesRuleTimeRestrictions" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_team_routing_rules.OnCallTeamRoutingRulesRuleTimeRestrictions;

OnCallTeamRoutingRulesRuleTimeRestrictions.builder()
//  .restriction(IResolvable|java.util.List<OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction>)
//  .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions.property.restriction">restriction</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction">OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction</a>></code> | restriction block. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Specifies the time zone applicable to the restrictions, e.g. `America/New_York`. |

---

##### `restriction`<sup>Optional</sup> <a name="restriction" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions.property.restriction"></a>

```java
public IResolvable|java.util.List<OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction> getRestriction();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction">OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction</a>>

restriction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#restriction OnCallTeamRoutingRules#restriction}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Specifies the time zone applicable to the restrictions, e.g. `America/New_York`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#time_zone OnCallTeamRoutingRules#time_zone}

---

### OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction <a name="OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_team_routing_rules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction;

OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.builder()
//  .endDay(java.lang.String)
//  .endTime(java.lang.String)
//  .startDay(java.lang.String)
//  .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.property.endDay">endDay</a></code> | <code>java.lang.String</code> | The weekday when the restriction period ends. Valid values are `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.property.endTime">endTime</a></code> | <code>java.lang.String</code> | The time of day when the restriction ends (hh:mm:ss). |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.property.startDay">startDay</a></code> | <code>java.lang.String</code> | The weekday when the restriction period starts. Valid values are `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.property.startTime">startTime</a></code> | <code>java.lang.String</code> | The time of day when the restriction begins (hh:mm:ss). |

---

##### `endDay`<sup>Optional</sup> <a name="endDay" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.property.endDay"></a>

```java
public java.lang.String getEndDay();
```

- *Type:* java.lang.String

The weekday when the restriction period ends. Valid values are `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#end_day OnCallTeamRoutingRules#end_day}

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

The time of day when the restriction ends (hh:mm:ss).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#end_time OnCallTeamRoutingRules#end_time}

---

##### `startDay`<sup>Optional</sup> <a name="startDay" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.property.startDay"></a>

```java
public java.lang.String getStartDay();
```

- *Type:* java.lang.String

The weekday when the restriction period starts. Valid values are `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#start_day OnCallTeamRoutingRules#start_day}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

The time of day when the restriction begins (hh:mm:ss).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_team_routing_rules#start_time OnCallTeamRoutingRules#start_time}

---

## Classes <a name="Classes" id="Classes"></a>

### OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference <a name="OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_team_routing_rules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference;

new OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.putSupportHours">putSupportHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.resetAckTimeoutMinutes">resetAckTimeoutMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.resetPolicyId">resetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.resetSupportHours">resetSupportHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.resetUrgency">resetUrgency</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSupportHours` <a name="putSupportHours" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.putSupportHours"></a>

```java
public void putSupportHours(OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHours value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.putSupportHours.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHours">OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHours</a>

---

##### `resetAckTimeoutMinutes` <a name="resetAckTimeoutMinutes" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.resetAckTimeoutMinutes"></a>

```java
public void resetAckTimeoutMinutes()
```

##### `resetPolicyId` <a name="resetPolicyId" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.resetPolicyId"></a>

```java
public void resetPolicyId()
```

##### `resetSupportHours` <a name="resetSupportHours" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.resetSupportHours"></a>

```java
public void resetSupportHours()
```

##### `resetUrgency` <a name="resetUrgency" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.resetUrgency"></a>

```java
public void resetUrgency()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.property.supportHours">supportHours</a></code> | <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference">OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.property.ackTimeoutMinutesInput">ackTimeoutMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.property.supportHoursInput">supportHoursInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHours">OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.property.urgencyInput">urgencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.property.ackTimeoutMinutes">ackTimeoutMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.property.urgency">urgency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicy">OnCallTeamRoutingRulesRuleActionEscalationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `supportHours`<sup>Required</sup> <a name="supportHours" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.property.supportHours"></a>

```java
public OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference getSupportHours();
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference">OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference</a>

---

##### `ackTimeoutMinutesInput`<sup>Optional</sup> <a name="ackTimeoutMinutesInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.property.ackTimeoutMinutesInput"></a>

```java
public java.lang.Number getAckTimeoutMinutesInput();
```

- *Type:* java.lang.Number

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.property.policyIdInput"></a>

```java
public java.lang.String getPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `supportHoursInput`<sup>Optional</sup> <a name="supportHoursInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.property.supportHoursInput"></a>

```java
public IResolvable|OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHours getSupportHoursInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHours">OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHours</a>

---

##### `urgencyInput`<sup>Optional</sup> <a name="urgencyInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.property.urgencyInput"></a>

```java
public java.lang.String getUrgencyInput();
```

- *Type:* java.lang.String

---

##### `ackTimeoutMinutes`<sup>Required</sup> <a name="ackTimeoutMinutes" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.property.ackTimeoutMinutes"></a>

```java
public java.lang.Number getAckTimeoutMinutes();
```

- *Type:* java.lang.Number

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `urgency`<sup>Required</sup> <a name="urgency" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.property.urgency"></a>

```java
public java.lang.String getUrgency();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|OnCallTeamRoutingRulesRuleActionEscalationPolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicy">OnCallTeamRoutingRulesRuleActionEscalationPolicy</a>

---


### OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference <a name="OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_team_routing_rules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference;

new OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.putRestriction">putRestriction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.resetRestriction">resetRestriction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRestriction` <a name="putRestriction" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.putRestriction"></a>

```java
public void putRestriction(IResolvable|java.util.List<OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.putRestriction.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction">OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction</a>>

---

##### `resetRestriction` <a name="resetRestriction" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.resetRestriction"></a>

```java
public void resetRestriction()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.resetTimeZone"></a>

```java
public void resetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.property.restriction">restriction</a></code> | <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList">OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.property.restrictionInput">restrictionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction">OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHours">OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHours</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `restriction`<sup>Required</sup> <a name="restriction" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.property.restriction"></a>

```java
public OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList getRestriction();
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList">OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList</a>

---

##### `restrictionInput`<sup>Optional</sup> <a name="restrictionInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.property.restrictionInput"></a>

```java
public IResolvable|java.util.List<OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction> getRestrictionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction">OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction</a>>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursOutputReference.property.internalValue"></a>

```java
public IResolvable|OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHours getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHours">OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHours</a>

---


### OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList <a name="OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_team_routing_rules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList;

new OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList.get"></a>

```java
public OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction">OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction">OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction</a>>

---


### OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference <a name="OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_team_routing_rules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference;

new OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.resetEndDay">resetEndDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.resetStartDay">resetStartDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndDay` <a name="resetEndDay" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.resetEndDay"></a>

```java
public void resetEndDay()
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetStartDay` <a name="resetStartDay" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.resetStartDay"></a>

```java
public void resetStartDay()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.property.endDayInput">endDayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.property.startDayInput">startDayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.property.endDay">endDay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.property.startDay">startDay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction">OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endDayInput`<sup>Optional</sup> <a name="endDayInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.property.endDayInput"></a>

```java
public java.lang.String getEndDayInput();
```

- *Type:* java.lang.String

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `startDayInput`<sup>Optional</sup> <a name="startDayInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.property.startDayInput"></a>

```java
public java.lang.String getStartDayInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `endDay`<sup>Required</sup> <a name="endDay" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.property.endDay"></a>

```java
public java.lang.String getEndDay();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startDay`<sup>Required</sup> <a name="startDay" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.property.startDay"></a>

```java
public java.lang.String getStartDay();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestrictionOutputReference.property.internalValue"></a>

```java
public IResolvable|OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction">OnCallTeamRoutingRulesRuleActionEscalationPolicySupportHoursRestriction</a>

---


### OnCallTeamRoutingRulesRuleActionList <a name="OnCallTeamRoutingRulesRuleActionList" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_team_routing_rules.OnCallTeamRoutingRulesRuleActionList;

new OnCallTeamRoutingRulesRuleActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.get"></a>

```java
public OnCallTeamRoutingRulesRuleActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction">OnCallTeamRoutingRulesRuleAction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OnCallTeamRoutingRulesRuleAction> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction">OnCallTeamRoutingRulesRuleAction</a>>

---


### OnCallTeamRoutingRulesRuleActionOutputReference <a name="OnCallTeamRoutingRulesRuleActionOutputReference" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_team_routing_rules.OnCallTeamRoutingRulesRuleActionOutputReference;

new OnCallTeamRoutingRulesRuleActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putEscalationPolicy">putEscalationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putSendSlackMessage">putSendSlackMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putSendTeamsMessage">putSendTeamsMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putTriggerWorkflowAutomation">putTriggerWorkflowAutomation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.resetEscalationPolicy">resetEscalationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.resetSendSlackMessage">resetSendSlackMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.resetSendTeamsMessage">resetSendTeamsMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.resetTriggerWorkflowAutomation">resetTriggerWorkflowAutomation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEscalationPolicy` <a name="putEscalationPolicy" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putEscalationPolicy"></a>

```java
public void putEscalationPolicy(OnCallTeamRoutingRulesRuleActionEscalationPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putEscalationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicy">OnCallTeamRoutingRulesRuleActionEscalationPolicy</a>

---

##### `putSendSlackMessage` <a name="putSendSlackMessage" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putSendSlackMessage"></a>

```java
public void putSendSlackMessage(OnCallTeamRoutingRulesRuleActionSendSlackMessage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putSendSlackMessage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage">OnCallTeamRoutingRulesRuleActionSendSlackMessage</a>

---

##### `putSendTeamsMessage` <a name="putSendTeamsMessage" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putSendTeamsMessage"></a>

```java
public void putSendTeamsMessage(OnCallTeamRoutingRulesRuleActionSendTeamsMessage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putSendTeamsMessage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage">OnCallTeamRoutingRulesRuleActionSendTeamsMessage</a>

---

##### `putTriggerWorkflowAutomation` <a name="putTriggerWorkflowAutomation" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putTriggerWorkflowAutomation"></a>

```java
public void putTriggerWorkflowAutomation(OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putTriggerWorkflowAutomation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation">OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation</a>

---

##### `resetEscalationPolicy` <a name="resetEscalationPolicy" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.resetEscalationPolicy"></a>

```java
public void resetEscalationPolicy()
```

##### `resetSendSlackMessage` <a name="resetSendSlackMessage" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.resetSendSlackMessage"></a>

```java
public void resetSendSlackMessage()
```

##### `resetSendTeamsMessage` <a name="resetSendTeamsMessage" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.resetSendTeamsMessage"></a>

```java
public void resetSendTeamsMessage()
```

##### `resetTriggerWorkflowAutomation` <a name="resetTriggerWorkflowAutomation" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.resetTriggerWorkflowAutomation"></a>

```java
public void resetTriggerWorkflowAutomation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.escalationPolicy">escalationPolicy</a></code> | <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference">OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.sendSlackMessage">sendSlackMessage</a></code> | <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference">OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.sendTeamsMessage">sendTeamsMessage</a></code> | <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference">OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.triggerWorkflowAutomation">triggerWorkflowAutomation</a></code> | <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference">OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.escalationPolicyInput">escalationPolicyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicy">OnCallTeamRoutingRulesRuleActionEscalationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.sendSlackMessageInput">sendSlackMessageInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage">OnCallTeamRoutingRulesRuleActionSendSlackMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.sendTeamsMessageInput">sendTeamsMessageInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage">OnCallTeamRoutingRulesRuleActionSendTeamsMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.triggerWorkflowAutomationInput">triggerWorkflowAutomationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation">OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction">OnCallTeamRoutingRulesRuleAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `escalationPolicy`<sup>Required</sup> <a name="escalationPolicy" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.escalationPolicy"></a>

```java
public OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference getEscalationPolicy();
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference">OnCallTeamRoutingRulesRuleActionEscalationPolicyOutputReference</a>

---

##### `sendSlackMessage`<sup>Required</sup> <a name="sendSlackMessage" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.sendSlackMessage"></a>

```java
public OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference getSendSlackMessage();
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference">OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference</a>

---

##### `sendTeamsMessage`<sup>Required</sup> <a name="sendTeamsMessage" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.sendTeamsMessage"></a>

```java
public OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference getSendTeamsMessage();
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference">OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference</a>

---

##### `triggerWorkflowAutomation`<sup>Required</sup> <a name="triggerWorkflowAutomation" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.triggerWorkflowAutomation"></a>

```java
public OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference getTriggerWorkflowAutomation();
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference">OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference</a>

---

##### `escalationPolicyInput`<sup>Optional</sup> <a name="escalationPolicyInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.escalationPolicyInput"></a>

```java
public IResolvable|OnCallTeamRoutingRulesRuleActionEscalationPolicy getEscalationPolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionEscalationPolicy">OnCallTeamRoutingRulesRuleActionEscalationPolicy</a>

---

##### `sendSlackMessageInput`<sup>Optional</sup> <a name="sendSlackMessageInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.sendSlackMessageInput"></a>

```java
public IResolvable|OnCallTeamRoutingRulesRuleActionSendSlackMessage getSendSlackMessageInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage">OnCallTeamRoutingRulesRuleActionSendSlackMessage</a>

---

##### `sendTeamsMessageInput`<sup>Optional</sup> <a name="sendTeamsMessageInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.sendTeamsMessageInput"></a>

```java
public IResolvable|OnCallTeamRoutingRulesRuleActionSendTeamsMessage getSendTeamsMessageInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage">OnCallTeamRoutingRulesRuleActionSendTeamsMessage</a>

---

##### `triggerWorkflowAutomationInput`<sup>Optional</sup> <a name="triggerWorkflowAutomationInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.triggerWorkflowAutomationInput"></a>

```java
public IResolvable|OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation getTriggerWorkflowAutomationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation">OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.internalValue"></a>

```java
public IResolvable|OnCallTeamRoutingRulesRuleAction getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction">OnCallTeamRoutingRulesRuleAction</a>

---


### OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference <a name="OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_team_routing_rules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference;

new OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.resetChannel">resetChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.resetWorkspace">resetWorkspace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChannel` <a name="resetChannel" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.resetChannel"></a>

```java
public void resetChannel()
```

##### `resetWorkspace` <a name="resetWorkspace" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.resetWorkspace"></a>

```java
public void resetWorkspace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.channelInput">channelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.workspaceInput">workspaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.channel">channel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.workspace">workspace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage">OnCallTeamRoutingRulesRuleActionSendSlackMessage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.channelInput"></a>

```java
public java.lang.String getChannelInput();
```

- *Type:* java.lang.String

---

##### `workspaceInput`<sup>Optional</sup> <a name="workspaceInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.workspaceInput"></a>

```java
public java.lang.String getWorkspaceInput();
```

- *Type:* java.lang.String

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.workspace"></a>

```java
public java.lang.String getWorkspace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.internalValue"></a>

```java
public IResolvable|OnCallTeamRoutingRulesRuleActionSendSlackMessage getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage">OnCallTeamRoutingRulesRuleActionSendSlackMessage</a>

---


### OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference <a name="OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_team_routing_rules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference;

new OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resetChannel">resetChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resetTeam">resetTeam</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resetTenant">resetTenant</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChannel` <a name="resetChannel" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resetChannel"></a>

```java
public void resetChannel()
```

##### `resetTeam` <a name="resetTeam" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resetTeam"></a>

```java
public void resetTeam()
```

##### `resetTenant` <a name="resetTenant" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resetTenant"></a>

```java
public void resetTenant()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.channelInput">channelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.teamInput">teamInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.tenantInput">tenantInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.channel">channel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.team">team</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.tenant">tenant</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage">OnCallTeamRoutingRulesRuleActionSendTeamsMessage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.channelInput"></a>

```java
public java.lang.String getChannelInput();
```

- *Type:* java.lang.String

---

##### `teamInput`<sup>Optional</sup> <a name="teamInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.teamInput"></a>

```java
public java.lang.String getTeamInput();
```

- *Type:* java.lang.String

---

##### `tenantInput`<sup>Optional</sup> <a name="tenantInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.tenantInput"></a>

```java
public java.lang.String getTenantInput();
```

- *Type:* java.lang.String

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

---

##### `team`<sup>Required</sup> <a name="team" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.team"></a>

```java
public java.lang.String getTeam();
```

- *Type:* java.lang.String

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.tenant"></a>

```java
public java.lang.String getTenant();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.internalValue"></a>

```java
public IResolvable|OnCallTeamRoutingRulesRuleActionSendTeamsMessage getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage">OnCallTeamRoutingRulesRuleActionSendTeamsMessage</a>

---


### OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference <a name="OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_team_routing_rules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference;

new OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.resetHandle">resetHandle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHandle` <a name="resetHandle" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.resetHandle"></a>

```java
public void resetHandle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.property.handleInput">handleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.property.handle">handle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation">OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `handleInput`<sup>Optional</sup> <a name="handleInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.property.handleInput"></a>

```java
public java.lang.String getHandleInput();
```

- *Type:* java.lang.String

---

##### `handle`<sup>Required</sup> <a name="handle" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.property.handle"></a>

```java
public java.lang.String getHandle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.property.internalValue"></a>

```java
public IResolvable|OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation">OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation</a>

---


### OnCallTeamRoutingRulesRuleList <a name="OnCallTeamRoutingRulesRuleList" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_team_routing_rules.OnCallTeamRoutingRulesRuleList;

new OnCallTeamRoutingRulesRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.get"></a>

```java
public OnCallTeamRoutingRulesRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule">OnCallTeamRoutingRulesRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OnCallTeamRoutingRulesRule> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule">OnCallTeamRoutingRulesRule</a>>

---


### OnCallTeamRoutingRulesRuleOutputReference <a name="OnCallTeamRoutingRulesRuleOutputReference" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_team_routing_rules.OnCallTeamRoutingRulesRuleOutputReference;

new OnCallTeamRoutingRulesRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.putTimeRestrictions">putTimeRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetEscalationPolicy">resetEscalationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetTimeRestrictions">resetTimeRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetUrgency">resetUrgency</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.putAction"></a>

```java
public void putAction(IResolvable|java.util.List<OnCallTeamRoutingRulesRuleAction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.putAction.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction">OnCallTeamRoutingRulesRuleAction</a>>

---

##### `putTimeRestrictions` <a name="putTimeRestrictions" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.putTimeRestrictions"></a>

```java
public void putTimeRestrictions(OnCallTeamRoutingRulesRuleTimeRestrictions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.putTimeRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions">OnCallTeamRoutingRulesRuleTimeRestrictions</a>

---

##### `resetAction` <a name="resetAction" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetEscalationPolicy` <a name="resetEscalationPolicy" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetEscalationPolicy"></a>

```java
public void resetEscalationPolicy()
```

##### `resetQuery` <a name="resetQuery" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetQuery"></a>

```java
public void resetQuery()
```

##### `resetTimeRestrictions` <a name="resetTimeRestrictions" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetTimeRestrictions"></a>

```java
public void resetTimeRestrictions()
```

##### `resetUrgency` <a name="resetUrgency" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetUrgency"></a>

```java
public void resetUrgency()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.action">action</a></code> | <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList">OnCallTeamRoutingRulesRuleActionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.timeRestrictions">timeRestrictions</a></code> | <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference">OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.actionInput">actionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction">OnCallTeamRoutingRulesRuleAction</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.escalationPolicyInput">escalationPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.timeRestrictionsInput">timeRestrictionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions">OnCallTeamRoutingRulesRuleTimeRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.urgencyInput">urgencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.escalationPolicy">escalationPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.urgency">urgency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule">OnCallTeamRoutingRulesRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.action"></a>

```java
public OnCallTeamRoutingRulesRuleActionList getAction();
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList">OnCallTeamRoutingRulesRuleActionList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `timeRestrictions`<sup>Required</sup> <a name="timeRestrictions" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.timeRestrictions"></a>

```java
public OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference getTimeRestrictions();
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference">OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.actionInput"></a>

```java
public IResolvable|java.util.List<OnCallTeamRoutingRulesRuleAction> getActionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction">OnCallTeamRoutingRulesRuleAction</a>>

---

##### `escalationPolicyInput`<sup>Optional</sup> <a name="escalationPolicyInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.escalationPolicyInput"></a>

```java
public java.lang.String getEscalationPolicyInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `timeRestrictionsInput`<sup>Optional</sup> <a name="timeRestrictionsInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.timeRestrictionsInput"></a>

```java
public IResolvable|OnCallTeamRoutingRulesRuleTimeRestrictions getTimeRestrictionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions">OnCallTeamRoutingRulesRuleTimeRestrictions</a>

---

##### `urgencyInput`<sup>Optional</sup> <a name="urgencyInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.urgencyInput"></a>

```java
public java.lang.String getUrgencyInput();
```

- *Type:* java.lang.String

---

##### `escalationPolicy`<sup>Required</sup> <a name="escalationPolicy" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.escalationPolicy"></a>

```java
public java.lang.String getEscalationPolicy();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `urgency`<sup>Required</sup> <a name="urgency" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.urgency"></a>

```java
public java.lang.String getUrgency();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|OnCallTeamRoutingRulesRule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule">OnCallTeamRoutingRulesRule</a>

---


### OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference <a name="OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_team_routing_rules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference;

new OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.putRestriction">putRestriction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.resetRestriction">resetRestriction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRestriction` <a name="putRestriction" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.putRestriction"></a>

```java
public void putRestriction(IResolvable|java.util.List<OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.putRestriction.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction">OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction</a>>

---

##### `resetRestriction` <a name="resetRestriction" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.resetRestriction"></a>

```java
public void resetRestriction()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.resetTimeZone"></a>

```java
public void resetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.restriction">restriction</a></code> | <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList">OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.restrictionInput">restrictionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction">OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions">OnCallTeamRoutingRulesRuleTimeRestrictions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `restriction`<sup>Required</sup> <a name="restriction" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.restriction"></a>

```java
public OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList getRestriction();
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList">OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList</a>

---

##### `restrictionInput`<sup>Optional</sup> <a name="restrictionInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.restrictionInput"></a>

```java
public IResolvable|java.util.List<OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction> getRestrictionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction">OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction</a>>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OnCallTeamRoutingRulesRuleTimeRestrictions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions">OnCallTeamRoutingRulesRuleTimeRestrictions</a>

---


### OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList <a name="OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_team_routing_rules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList;

new OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.get"></a>

```java
public OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction">OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction">OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction</a>>

---


### OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference <a name="OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_team_routing_rules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference;

new OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resetEndDay">resetEndDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resetStartDay">resetStartDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndDay` <a name="resetEndDay" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resetEndDay"></a>

```java
public void resetEndDay()
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetStartDay` <a name="resetStartDay" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resetStartDay"></a>

```java
public void resetStartDay()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.endDayInput">endDayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.startDayInput">startDayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.endDay">endDay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.startDay">startDay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction">OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endDayInput`<sup>Optional</sup> <a name="endDayInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.endDayInput"></a>

```java
public java.lang.String getEndDayInput();
```

- *Type:* java.lang.String

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `startDayInput`<sup>Optional</sup> <a name="startDayInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.startDayInput"></a>

```java
public java.lang.String getStartDayInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `endDay`<sup>Required</sup> <a name="endDay" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.endDay"></a>

```java
public java.lang.String getEndDay();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startDay`<sup>Required</sup> <a name="startDay" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.startDay"></a>

```java
public java.lang.String getStartDay();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.internalValue"></a>

```java
public IResolvable|OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction">OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction</a>

---



