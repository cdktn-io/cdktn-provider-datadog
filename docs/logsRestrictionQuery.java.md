# `logsRestrictionQuery` Submodule <a name="`logsRestrictionQuery` Submodule" id="@cdktn/provider-datadog.logsRestrictionQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsRestrictionQuery <a name="LogsRestrictionQuery" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/logs_restriction_query datadog_logs_restriction_query}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_restriction_query.LogsRestrictionQuery;

LogsRestrictionQuery.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .restrictionQuery(java.lang.String)
//  .roleIds(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.Initializer.parameter.restrictionQuery">restrictionQuery</a></code> | <code>java.lang.String</code> | The query that defines the restriction. Only the content matching the query can be returned. |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.Initializer.parameter.roleIds">roleIds</a></code> | <code>java.util.List<java.lang.String></code> | An array of role IDs that have access to this restriction query. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `restrictionQuery`<sup>Required</sup> <a name="restrictionQuery" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.Initializer.parameter.restrictionQuery"></a>

- *Type:* java.lang.String

The query that defines the restriction. Only the content matching the query can be returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/logs_restriction_query#restriction_query LogsRestrictionQuery#restriction_query}

---

##### `roleIds`<sup>Optional</sup> <a name="roleIds" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.Initializer.parameter.roleIds"></a>

- *Type:* java.util.List<java.lang.String>

An array of role IDs that have access to this restriction query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/logs_restriction_query#role_ids LogsRestrictionQuery#role_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.resetRoleIds">resetRoleIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetRoleIds` <a name="resetRoleIds" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.resetRoleIds"></a>

```java
public void resetRoleIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LogsRestrictionQuery resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.isConstruct"></a>

```java
import io.cdktn.providers.datadog.logs_restriction_query.LogsRestrictionQuery;

LogsRestrictionQuery.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.logs_restriction_query.LogsRestrictionQuery;

LogsRestrictionQuery.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.logs_restriction_query.LogsRestrictionQuery;

LogsRestrictionQuery.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.logs_restriction_query.LogsRestrictionQuery;

LogsRestrictionQuery.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LogsRestrictionQuery.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LogsRestrictionQuery resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LogsRestrictionQuery to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LogsRestrictionQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/logs_restriction_query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LogsRestrictionQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.restrictionQueryInput">restrictionQueryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.roleIdsInput">roleIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.restrictionQuery">restrictionQuery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.roleIds">roleIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.modifiedAt"></a>

```java
public java.lang.String getModifiedAt();
```

- *Type:* java.lang.String

---

##### `restrictionQueryInput`<sup>Optional</sup> <a name="restrictionQueryInput" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.restrictionQueryInput"></a>

```java
public java.lang.String getRestrictionQueryInput();
```

- *Type:* java.lang.String

---

##### `roleIdsInput`<sup>Optional</sup> <a name="roleIdsInput" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.roleIdsInput"></a>

```java
public java.util.List<java.lang.String> getRoleIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `restrictionQuery`<sup>Required</sup> <a name="restrictionQuery" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.restrictionQuery"></a>

```java
public java.lang.String getRestrictionQuery();
```

- *Type:* java.lang.String

---

##### `roleIds`<sup>Required</sup> <a name="roleIds" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.roleIds"></a>

```java
public java.util.List<java.lang.String> getRoleIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQuery.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LogsRestrictionQueryConfig <a name="LogsRestrictionQueryConfig" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQueryConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_restriction_query.LogsRestrictionQueryConfig;

LogsRestrictionQueryConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .restrictionQuery(java.lang.String)
//  .roleIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQueryConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQueryConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQueryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQueryConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQueryConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQueryConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQueryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQueryConfig.property.restrictionQuery">restrictionQuery</a></code> | <code>java.lang.String</code> | The query that defines the restriction. Only the content matching the query can be returned. |
| <code><a href="#@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQueryConfig.property.roleIds">roleIds</a></code> | <code>java.util.List<java.lang.String></code> | An array of role IDs that have access to this restriction query. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQueryConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQueryConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQueryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQueryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQueryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQueryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQueryConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `restrictionQuery`<sup>Required</sup> <a name="restrictionQuery" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQueryConfig.property.restrictionQuery"></a>

```java
public java.lang.String getRestrictionQuery();
```

- *Type:* java.lang.String

The query that defines the restriction. Only the content matching the query can be returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/logs_restriction_query#restriction_query LogsRestrictionQuery#restriction_query}

---

##### `roleIds`<sup>Optional</sup> <a name="roleIds" id="@cdktn/provider-datadog.logsRestrictionQuery.LogsRestrictionQueryConfig.property.roleIds"></a>

```java
public java.util.List<java.lang.String> getRoleIds();
```

- *Type:* java.util.List<java.lang.String>

An array of role IDs that have access to this restriction query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/logs_restriction_query#role_ids LogsRestrictionQuery#role_ids}

---



