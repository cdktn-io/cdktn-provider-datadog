# `dataDatadogOrgGroupMemberships` Submodule <a name="`dataDatadogOrgGroupMemberships` Submodule" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogOrgGroupMemberships <a name="DataDatadogOrgGroupMemberships" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/data-sources/org_group_memberships datadog_org_group_memberships}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_org_group_memberships.DataDatadogOrgGroupMemberships;

DataDatadogOrgGroupMemberships.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .orgGroupId(java.lang.String)
//  .orgUuid(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.orgGroupId">orgGroupId</a></code> | <code>java.lang.String</code> | Filter memberships to those within the given org group. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.orgUuid">orgUuid</a></code> | <code>java.lang.String</code> | Filter memberships to those for the given organization. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `orgGroupId`<sup>Optional</sup> <a name="orgGroupId" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.orgGroupId"></a>

- *Type:* java.lang.String

Filter memberships to those within the given org group.

At least one filter (`org_group_id` or `org_uuid`) is required. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/data-sources/org_group_memberships#org_group_id DataDatadogOrgGroupMemberships#org_group_id}

---

##### `orgUuid`<sup>Optional</sup> <a name="orgUuid" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.orgUuid"></a>

- *Type:* java.lang.String

Filter memberships to those for the given organization.

At least one filter (`org_group_id` or `org_uuid`) is required. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/data-sources/org_group_memberships#org_uuid DataDatadogOrgGroupMemberships#org_uuid}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.resetOrgGroupId">resetOrgGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.resetOrgUuid">resetOrgUuid</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetOrgGroupId` <a name="resetOrgGroupId" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.resetOrgGroupId"></a>

```java
public void resetOrgGroupId()
```

##### `resetOrgUuid` <a name="resetOrgUuid" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.resetOrgUuid"></a>

```java
public void resetOrgUuid()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogOrgGroupMemberships resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.isConstruct"></a>

```java
import io.cdktn.providers.datadog.data_datadog_org_group_memberships.DataDatadogOrgGroupMemberships;

DataDatadogOrgGroupMemberships.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.data_datadog_org_group_memberships.DataDatadogOrgGroupMemberships;

DataDatadogOrgGroupMemberships.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.isTerraformDataSource"></a>

```java
import io.cdktn.providers.datadog.data_datadog_org_group_memberships.DataDatadogOrgGroupMemberships;

DataDatadogOrgGroupMemberships.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.data_datadog_org_group_memberships.DataDatadogOrgGroupMemberships;

DataDatadogOrgGroupMemberships.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatadogOrgGroupMemberships.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatadogOrgGroupMemberships resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatadogOrgGroupMemberships to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatadogOrgGroupMemberships that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/data-sources/org_group_memberships#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogOrgGroupMemberships to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.memberships">memberships</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList">DataDatadogOrgGroupMembershipsMembershipsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.orgGroupIdInput">orgGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.orgUuidInput">orgUuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.orgGroupId">orgGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.orgUuid">orgUuid</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `memberships`<sup>Required</sup> <a name="memberships" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.memberships"></a>

```java
public DataDatadogOrgGroupMembershipsMembershipsList getMemberships();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList">DataDatadogOrgGroupMembershipsMembershipsList</a>

---

##### `orgGroupIdInput`<sup>Optional</sup> <a name="orgGroupIdInput" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.orgGroupIdInput"></a>

```java
public java.lang.String getOrgGroupIdInput();
```

- *Type:* java.lang.String

---

##### `orgUuidInput`<sup>Optional</sup> <a name="orgUuidInput" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.orgUuidInput"></a>

```java
public java.lang.String getOrgUuidInput();
```

- *Type:* java.lang.String

---

##### `orgGroupId`<sup>Required</sup> <a name="orgGroupId" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.orgGroupId"></a>

```java
public java.lang.String getOrgGroupId();
```

- *Type:* java.lang.String

---

##### `orgUuid`<sup>Required</sup> <a name="orgUuid" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.orgUuid"></a>

```java
public java.lang.String getOrgUuid();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogOrgGroupMembershipsConfig <a name="DataDatadogOrgGroupMembershipsConfig" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_org_group_memberships.DataDatadogOrgGroupMembershipsConfig;

DataDatadogOrgGroupMembershipsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .orgGroupId(java.lang.String)
//  .orgUuid(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.orgGroupId">orgGroupId</a></code> | <code>java.lang.String</code> | Filter memberships to those within the given org group. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.orgUuid">orgUuid</a></code> | <code>java.lang.String</code> | Filter memberships to those for the given organization. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `orgGroupId`<sup>Optional</sup> <a name="orgGroupId" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.orgGroupId"></a>

```java
public java.lang.String getOrgGroupId();
```

- *Type:* java.lang.String

Filter memberships to those within the given org group.

At least one filter (`org_group_id` or `org_uuid`) is required. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/data-sources/org_group_memberships#org_group_id DataDatadogOrgGroupMemberships#org_group_id}

---

##### `orgUuid`<sup>Optional</sup> <a name="orgUuid" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.orgUuid"></a>

```java
public java.lang.String getOrgUuid();
```

- *Type:* java.lang.String

Filter memberships to those for the given organization.

At least one filter (`org_group_id` or `org_uuid`) is required. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/data-sources/org_group_memberships#org_uuid DataDatadogOrgGroupMemberships#org_uuid}

---

### DataDatadogOrgGroupMembershipsMemberships <a name="DataDatadogOrgGroupMembershipsMemberships" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMemberships"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMemberships.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_org_group_memberships.DataDatadogOrgGroupMembershipsMemberships;

DataDatadogOrgGroupMembershipsMemberships.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogOrgGroupMembershipsMembershipsList <a name="DataDatadogOrgGroupMembershipsMembershipsList" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_org_group_memberships.DataDatadogOrgGroupMembershipsMembershipsList;

new DataDatadogOrgGroupMembershipsMembershipsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.get"></a>

```java
public DataDatadogOrgGroupMembershipsMembershipsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDatadogOrgGroupMembershipsMembershipsOutputReference <a name="DataDatadogOrgGroupMembershipsMembershipsOutputReference" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_org_group_memberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference;

new DataDatadogOrgGroupMembershipsMembershipsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.orgGroupId">orgGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.orgName">orgName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.orgSite">orgSite</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.orgUuid">orgUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMemberships">DataDatadogOrgGroupMembershipsMemberships</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `orgGroupId`<sup>Required</sup> <a name="orgGroupId" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.orgGroupId"></a>

```java
public java.lang.String getOrgGroupId();
```

- *Type:* java.lang.String

---

##### `orgName`<sup>Required</sup> <a name="orgName" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.orgName"></a>

```java
public java.lang.String getOrgName();
```

- *Type:* java.lang.String

---

##### `orgSite`<sup>Required</sup> <a name="orgSite" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.orgSite"></a>

```java
public java.lang.String getOrgSite();
```

- *Type:* java.lang.String

---

##### `orgUuid`<sup>Required</sup> <a name="orgUuid" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.orgUuid"></a>

```java
public java.lang.String getOrgUuid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.internalValue"></a>

```java
public DataDatadogOrgGroupMembershipsMemberships getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMemberships">DataDatadogOrgGroupMembershipsMemberships</a>

---



