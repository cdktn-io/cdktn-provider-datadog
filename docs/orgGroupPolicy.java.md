# `orgGroupPolicy` Submodule <a name="`orgGroupPolicy` Submodule" id="@cdktn/provider-datadog.orgGroupPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrgGroupPolicy <a name="OrgGroupPolicy" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/org_group_policy datadog_org_group_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer"></a>

```java
import io.cdktn.providers.datadog.org_group_policy.OrgGroupPolicy;

OrgGroupPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .content(java.lang.String)
    .orgGroupId(java.lang.String)
    .policyName(java.lang.String)
//  .enforcementTier(java.lang.String)
//  .policyType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.content">content</a></code> | <code>java.lang.String</code> | The policy content as a JSON-encoded string. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.orgGroupId">orgGroupId</a></code> | <code>java.lang.String</code> | The UUID of the org group this policy belongs to. Must be a valid UUID. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.policyName">policyName</a></code> | <code>java.lang.String</code> | The name of the policy. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.enforcementTier">enforcementTier</a></code> | <code>java.lang.String</code> | The enforcement tier of the policy. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.policyType">policyType</a></code> | <code>java.lang.String</code> | The type of the policy. Valid values are `org_config`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.content"></a>

- *Type:* java.lang.String

The policy content as a JSON-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/org_group_policy#content OrgGroupPolicy#content}

---

##### `orgGroupId`<sup>Required</sup> <a name="orgGroupId" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.orgGroupId"></a>

- *Type:* java.lang.String

The UUID of the org group this policy belongs to. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/org_group_policy#org_group_id OrgGroupPolicy#org_group_id}

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.policyName"></a>

- *Type:* java.lang.String

The name of the policy. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/org_group_policy#policy_name OrgGroupPolicy#policy_name}

---

##### `enforcementTier`<sup>Optional</sup> <a name="enforcementTier" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.enforcementTier"></a>

- *Type:* java.lang.String

The enforcement tier of the policy.

`DEFAULT` means the policy is set but member orgs may mutate it. `ENFORCE` means the policy is strictly controlled and mutations are blocked for affected orgs. `DELEGATE` means each member org controls its own value. Valid values are `DEFAULT`, `ENFORCE`, `DELEGATE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/org_group_policy#enforcement_tier OrgGroupPolicy#enforcement_tier}

---

##### `policyType`<sup>Optional</sup> <a name="policyType" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.policyType"></a>

- *Type:* java.lang.String

The type of the policy. Valid values are `org_config`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/org_group_policy#policy_type OrgGroupPolicy#policy_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.resetEnforcementTier">resetEnforcementTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.resetPolicyType">resetPolicyType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEnforcementTier` <a name="resetEnforcementTier" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.resetEnforcementTier"></a>

```java
public void resetEnforcementTier()
```

##### `resetPolicyType` <a name="resetPolicyType" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.resetPolicyType"></a>

```java
public void resetPolicyType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OrgGroupPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.isConstruct"></a>

```java
import io.cdktn.providers.datadog.org_group_policy.OrgGroupPolicy;

OrgGroupPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.org_group_policy.OrgGroupPolicy;

OrgGroupPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.org_group_policy.OrgGroupPolicy;

OrgGroupPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.org_group_policy.OrgGroupPolicy;

OrgGroupPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OrgGroupPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OrgGroupPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OrgGroupPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OrgGroupPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/org_group_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OrgGroupPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.enforcementTierInput">enforcementTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.orgGroupIdInput">orgGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.policyNameInput">policyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.policyTypeInput">policyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.enforcementTier">enforcementTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.orgGroupId">orgGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.policyType">policyType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `enforcementTierInput`<sup>Optional</sup> <a name="enforcementTierInput" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.enforcementTierInput"></a>

```java
public java.lang.String getEnforcementTierInput();
```

- *Type:* java.lang.String

---

##### `orgGroupIdInput`<sup>Optional</sup> <a name="orgGroupIdInput" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.orgGroupIdInput"></a>

```java
public java.lang.String getOrgGroupIdInput();
```

- *Type:* java.lang.String

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.policyNameInput"></a>

```java
public java.lang.String getPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `policyTypeInput`<sup>Optional</sup> <a name="policyTypeInput" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.policyTypeInput"></a>

```java
public java.lang.String getPolicyTypeInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `enforcementTier`<sup>Required</sup> <a name="enforcementTier" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.enforcementTier"></a>

```java
public java.lang.String getEnforcementTier();
```

- *Type:* java.lang.String

---

##### `orgGroupId`<sup>Required</sup> <a name="orgGroupId" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.orgGroupId"></a>

```java
public java.lang.String getOrgGroupId();
```

- *Type:* java.lang.String

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OrgGroupPolicyConfig <a name="OrgGroupPolicyConfig" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.org_group_policy.OrgGroupPolicyConfig;

OrgGroupPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .content(java.lang.String)
    .orgGroupId(java.lang.String)
    .policyName(java.lang.String)
//  .enforcementTier(java.lang.String)
//  .policyType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.content">content</a></code> | <code>java.lang.String</code> | The policy content as a JSON-encoded string. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.orgGroupId">orgGroupId</a></code> | <code>java.lang.String</code> | The UUID of the org group this policy belongs to. Must be a valid UUID. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.policyName">policyName</a></code> | <code>java.lang.String</code> | The name of the policy. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.enforcementTier">enforcementTier</a></code> | <code>java.lang.String</code> | The enforcement tier of the policy. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.policyType">policyType</a></code> | <code>java.lang.String</code> | The type of the policy. Valid values are `org_config`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

The policy content as a JSON-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/org_group_policy#content OrgGroupPolicy#content}

---

##### `orgGroupId`<sup>Required</sup> <a name="orgGroupId" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.orgGroupId"></a>

```java
public java.lang.String getOrgGroupId();
```

- *Type:* java.lang.String

The UUID of the org group this policy belongs to. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/org_group_policy#org_group_id OrgGroupPolicy#org_group_id}

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

The name of the policy. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/org_group_policy#policy_name OrgGroupPolicy#policy_name}

---

##### `enforcementTier`<sup>Optional</sup> <a name="enforcementTier" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.enforcementTier"></a>

```java
public java.lang.String getEnforcementTier();
```

- *Type:* java.lang.String

The enforcement tier of the policy.

`DEFAULT` means the policy is set but member orgs may mutate it. `ENFORCE` means the policy is strictly controlled and mutations are blocked for affected orgs. `DELEGATE` means each member org controls its own value. Valid values are `DEFAULT`, `ENFORCE`, `DELEGATE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/org_group_policy#enforcement_tier OrgGroupPolicy#enforcement_tier}

---

##### `policyType`<sup>Optional</sup> <a name="policyType" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

The type of the policy. Valid values are `org_config`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/org_group_policy#policy_type OrgGroupPolicy#policy_type}

---



