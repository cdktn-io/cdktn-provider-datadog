# `orgGroupPolicyOverride` Submodule <a name="`orgGroupPolicyOverride` Submodule" id="@cdktn/provider-datadog.orgGroupPolicyOverride"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrgGroupPolicyOverride <a name="OrgGroupPolicyOverride" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/org_group_policy_override datadog_org_group_policy_override}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer"></a>

```java
import io.cdktn.providers.datadog.org_group_policy_override.OrgGroupPolicyOverride;

OrgGroupPolicyOverride.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .orgGroupId(java.lang.String)
    .orgSite(java.lang.String)
    .orgUuid(java.lang.String)
    .policyId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.orgGroupId">orgGroupId</a></code> | <code>java.lang.String</code> | The UUID of the org group that owns the policy. Must be a valid UUID. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.orgSite">orgSite</a></code> | <code>java.lang.String</code> | The short site name of the organization (e.g., `us1`, `eu1`, `us1-fed`). Part of the override's server-side identity; changing it replaces the resource. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.orgUuid">orgUuid</a></code> | <code>java.lang.String</code> | The UUID of the organization being exempted from the policy. Must be a valid UUID. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.policyId">policyId</a></code> | <code>java.lang.String</code> | The UUID of the org group policy the override applies to. Must be a valid UUID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `orgGroupId`<sup>Required</sup> <a name="orgGroupId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.orgGroupId"></a>

- *Type:* java.lang.String

The UUID of the org group that owns the policy. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/org_group_policy_override#org_group_id OrgGroupPolicyOverride#org_group_id}

---

##### `orgSite`<sup>Required</sup> <a name="orgSite" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.orgSite"></a>

- *Type:* java.lang.String

The short site name of the organization (e.g., `us1`, `eu1`, `us1-fed`). Part of the override's server-side identity; changing it replaces the resource. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/org_group_policy_override#org_site OrgGroupPolicyOverride#org_site}

---

##### `orgUuid`<sup>Required</sup> <a name="orgUuid" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.orgUuid"></a>

- *Type:* java.lang.String

The UUID of the organization being exempted from the policy. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/org_group_policy_override#org_uuid OrgGroupPolicyOverride#org_uuid}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.policyId"></a>

- *Type:* java.lang.String

The UUID of the org group policy the override applies to. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/org_group_policy_override#policy_id OrgGroupPolicyOverride#policy_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OrgGroupPolicyOverride resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.isConstruct"></a>

```java
import io.cdktn.providers.datadog.org_group_policy_override.OrgGroupPolicyOverride;

OrgGroupPolicyOverride.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.org_group_policy_override.OrgGroupPolicyOverride;

OrgGroupPolicyOverride.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.org_group_policy_override.OrgGroupPolicyOverride;

OrgGroupPolicyOverride.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.org_group_policy_override.OrgGroupPolicyOverride;

OrgGroupPolicyOverride.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OrgGroupPolicyOverride.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OrgGroupPolicyOverride resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OrgGroupPolicyOverride to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OrgGroupPolicyOverride that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/org_group_policy_override#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OrgGroupPolicyOverride to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgGroupIdInput">orgGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgSiteInput">orgSiteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgUuidInput">orgUuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgGroupId">orgGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgSite">orgSite</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgUuid">orgUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `orgGroupIdInput`<sup>Optional</sup> <a name="orgGroupIdInput" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgGroupIdInput"></a>

```java
public java.lang.String getOrgGroupIdInput();
```

- *Type:* java.lang.String

---

##### `orgSiteInput`<sup>Optional</sup> <a name="orgSiteInput" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgSiteInput"></a>

```java
public java.lang.String getOrgSiteInput();
```

- *Type:* java.lang.String

---

##### `orgUuidInput`<sup>Optional</sup> <a name="orgUuidInput" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgUuidInput"></a>

```java
public java.lang.String getOrgUuidInput();
```

- *Type:* java.lang.String

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.policyIdInput"></a>

```java
public java.lang.String getPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `orgGroupId`<sup>Required</sup> <a name="orgGroupId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgGroupId"></a>

```java
public java.lang.String getOrgGroupId();
```

- *Type:* java.lang.String

---

##### `orgSite`<sup>Required</sup> <a name="orgSite" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgSite"></a>

```java
public java.lang.String getOrgSite();
```

- *Type:* java.lang.String

---

##### `orgUuid`<sup>Required</sup> <a name="orgUuid" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgUuid"></a>

```java
public java.lang.String getOrgUuid();
```

- *Type:* java.lang.String

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OrgGroupPolicyOverrideConfig <a name="OrgGroupPolicyOverrideConfig" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.org_group_policy_override.OrgGroupPolicyOverrideConfig;

OrgGroupPolicyOverrideConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .orgGroupId(java.lang.String)
    .orgSite(java.lang.String)
    .orgUuid(java.lang.String)
    .policyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.orgGroupId">orgGroupId</a></code> | <code>java.lang.String</code> | The UUID of the org group that owns the policy. Must be a valid UUID. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.orgSite">orgSite</a></code> | <code>java.lang.String</code> | The short site name of the organization (e.g., `us1`, `eu1`, `us1-fed`). Part of the override's server-side identity; changing it replaces the resource. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.orgUuid">orgUuid</a></code> | <code>java.lang.String</code> | The UUID of the organization being exempted from the policy. Must be a valid UUID. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.policyId">policyId</a></code> | <code>java.lang.String</code> | The UUID of the org group policy the override applies to. Must be a valid UUID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `orgGroupId`<sup>Required</sup> <a name="orgGroupId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.orgGroupId"></a>

```java
public java.lang.String getOrgGroupId();
```

- *Type:* java.lang.String

The UUID of the org group that owns the policy. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/org_group_policy_override#org_group_id OrgGroupPolicyOverride#org_group_id}

---

##### `orgSite`<sup>Required</sup> <a name="orgSite" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.orgSite"></a>

```java
public java.lang.String getOrgSite();
```

- *Type:* java.lang.String

The short site name of the organization (e.g., `us1`, `eu1`, `us1-fed`). Part of the override's server-side identity; changing it replaces the resource. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/org_group_policy_override#org_site OrgGroupPolicyOverride#org_site}

---

##### `orgUuid`<sup>Required</sup> <a name="orgUuid" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.orgUuid"></a>

```java
public java.lang.String getOrgUuid();
```

- *Type:* java.lang.String

The UUID of the organization being exempted from the policy. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/org_group_policy_override#org_uuid OrgGroupPolicyOverride#org_uuid}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

The UUID of the org group policy the override applies to. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/org_group_policy_override#policy_id OrgGroupPolicyOverride#policy_id}

---



