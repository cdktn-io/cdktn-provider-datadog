# `securityMonitoringRuleJson` Submodule <a name="`securityMonitoringRuleJson` Submodule" id="@cdktn/provider-datadog.securityMonitoringRuleJson"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityMonitoringRuleJson <a name="SecurityMonitoringRuleJson" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/security_monitoring_rule_json datadog_security_monitoring_rule_json}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.Initializer"></a>

```java
import io.cdktn.providers.datadog.security_monitoring_rule_json.SecurityMonitoringRuleJson;

SecurityMonitoringRuleJson.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .json(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.Initializer.parameter.json">json</a></code> | <code>java.lang.String</code> | The JSON definition of the Security Monitoring Rule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.Initializer.parameter.json"></a>

- *Type:* java.lang.String

The JSON definition of the Security Monitoring Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/security_monitoring_rule_json#json SecurityMonitoringRuleJson#json}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityMonitoringRuleJson resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.isConstruct"></a>

```java
import io.cdktn.providers.datadog.security_monitoring_rule_json.SecurityMonitoringRuleJson;

SecurityMonitoringRuleJson.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.security_monitoring_rule_json.SecurityMonitoringRuleJson;

SecurityMonitoringRuleJson.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.security_monitoring_rule_json.SecurityMonitoringRuleJson;

SecurityMonitoringRuleJson.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.security_monitoring_rule_json.SecurityMonitoringRuleJson;

SecurityMonitoringRuleJson.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecurityMonitoringRuleJson.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SecurityMonitoringRuleJson resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecurityMonitoringRuleJson to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecurityMonitoringRuleJson that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/security_monitoring_rule_json#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SecurityMonitoringRuleJson to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.jsonInput">jsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.json">json</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `jsonInput`<sup>Optional</sup> <a name="jsonInput" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.jsonInput"></a>

```java
public java.lang.String getJsonInput();
```

- *Type:* java.lang.String

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.json"></a>

```java
public java.lang.String getJson();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJson.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityMonitoringRuleJsonConfig <a name="SecurityMonitoringRuleJsonConfig" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJsonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJsonConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.security_monitoring_rule_json.SecurityMonitoringRuleJsonConfig;

SecurityMonitoringRuleJsonConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .json(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJsonConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJsonConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJsonConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJsonConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJsonConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJsonConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJsonConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJsonConfig.property.json">json</a></code> | <code>java.lang.String</code> | The JSON definition of the Security Monitoring Rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJsonConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJsonConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJsonConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJsonConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJsonConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJsonConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJsonConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktn/provider-datadog.securityMonitoringRuleJson.SecurityMonitoringRuleJsonConfig.property.json"></a>

```java
public java.lang.String getJson();
```

- *Type:* java.lang.String

The JSON definition of the Security Monitoring Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/security_monitoring_rule_json#json SecurityMonitoringRuleJson#json}

---



