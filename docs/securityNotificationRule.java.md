# `securityNotificationRule` Submodule <a name="`securityNotificationRule` Submodule" id="@cdktn/provider-datadog.securityNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityNotificationRule <a name="SecurityNotificationRule" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/security_notification_rule datadog_security_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer"></a>

```java
import io.cdktn.providers.datadog.security_notification_rule.SecurityNotificationRule;

SecurityNotificationRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .targets(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean|IResolvable)
//  .selectors(SecurityNotificationRuleSelectors)
//  .timeAggregation(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the rule (must be unique). |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.targets">targets</a></code> | <code>java.util.List<java.lang.String></code> | The list of handle targets for the notifications. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the rule is enabled. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.selectors">selectors</a></code> | <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors">SecurityNotificationRuleSelectors</a></code> | selectors block. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.timeAggregation">timeAggregation</a></code> | <code>java.lang.Number</code> | Specifies the time period, in seconds, used to aggregate the notification. Defaults to `0`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the rule (must be unique).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/security_notification_rule#name SecurityNotificationRule#name}

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.targets"></a>

- *Type:* java.util.List<java.lang.String>

The list of handle targets for the notifications.

A target must be prefixed with an

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/security_notification_rule#enabled SecurityNotificationRule#enabled}

---

##### `selectors`<sup>Optional</sup> <a name="selectors" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.selectors"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors">SecurityNotificationRuleSelectors</a>

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/security_notification_rule#selectors SecurityNotificationRule#selectors}

---

##### `timeAggregation`<sup>Optional</sup> <a name="timeAggregation" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.timeAggregation"></a>

- *Type:* java.lang.Number

Specifies the time period, in seconds, used to aggregate the notification. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/security_notification_rule#time_aggregation SecurityNotificationRule#time_aggregation}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.putSelectors">putSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.resetSelectors">resetSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.resetTimeAggregation">resetTimeAggregation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSelectors` <a name="putSelectors" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.putSelectors"></a>

```java
public void putSelectors(SecurityNotificationRuleSelectors value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.putSelectors.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors">SecurityNotificationRuleSelectors</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetSelectors` <a name="resetSelectors" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.resetSelectors"></a>

```java
public void resetSelectors()
```

##### `resetTimeAggregation` <a name="resetTimeAggregation" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.resetTimeAggregation"></a>

```java
public void resetTimeAggregation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityNotificationRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.isConstruct"></a>

```java
import io.cdktn.providers.datadog.security_notification_rule.SecurityNotificationRule;

SecurityNotificationRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.security_notification_rule.SecurityNotificationRule;

SecurityNotificationRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.security_notification_rule.SecurityNotificationRule;

SecurityNotificationRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.security_notification_rule.SecurityNotificationRule;

SecurityNotificationRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecurityNotificationRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SecurityNotificationRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecurityNotificationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecurityNotificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/security_notification_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SecurityNotificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.createdAt">createdAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.createdByHandle">createdByHandle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.createdByName">createdByName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.modifiedByHandle">modifiedByHandle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.modifiedByName">modifiedByName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.selectors">selectors</a></code> | <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference">SecurityNotificationRuleSelectorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.selectorsInput">selectorsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors">SecurityNotificationRuleSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.targetsInput">targetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.timeAggregationInput">timeAggregationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.targets">targets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.timeAggregation">timeAggregation</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.createdAt"></a>

```java
public java.lang.Number getCreatedAt();
```

- *Type:* java.lang.Number

---

##### `createdByHandle`<sup>Required</sup> <a name="createdByHandle" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.createdByHandle"></a>

```java
public java.lang.String getCreatedByHandle();
```

- *Type:* java.lang.String

---

##### `createdByName`<sup>Required</sup> <a name="createdByName" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.createdByName"></a>

```java
public java.lang.String getCreatedByName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.modifiedAt"></a>

```java
public java.lang.Number getModifiedAt();
```

- *Type:* java.lang.Number

---

##### `modifiedByHandle`<sup>Required</sup> <a name="modifiedByHandle" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.modifiedByHandle"></a>

```java
public java.lang.String getModifiedByHandle();
```

- *Type:* java.lang.String

---

##### `modifiedByName`<sup>Required</sup> <a name="modifiedByName" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.modifiedByName"></a>

```java
public java.lang.String getModifiedByName();
```

- *Type:* java.lang.String

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.selectors"></a>

```java
public SecurityNotificationRuleSelectorsOutputReference getSelectors();
```

- *Type:* <a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference">SecurityNotificationRuleSelectorsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `selectorsInput`<sup>Optional</sup> <a name="selectorsInput" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.selectorsInput"></a>

```java
public IResolvable|SecurityNotificationRuleSelectors getSelectorsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors">SecurityNotificationRuleSelectors</a>

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.targetsInput"></a>

```java
public java.util.List<java.lang.String> getTargetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeAggregationInput`<sup>Optional</sup> <a name="timeAggregationInput" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.timeAggregationInput"></a>

```java
public java.lang.Number getTimeAggregationInput();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.targets"></a>

```java
public java.util.List<java.lang.String> getTargets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeAggregation`<sup>Required</sup> <a name="timeAggregation" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.timeAggregation"></a>

```java
public java.lang.Number getTimeAggregation();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityNotificationRuleConfig <a name="SecurityNotificationRuleConfig" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.security_notification_rule.SecurityNotificationRuleConfig;

SecurityNotificationRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .targets(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean|IResolvable)
//  .selectors(SecurityNotificationRuleSelectors)
//  .timeAggregation(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the rule (must be unique). |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.targets">targets</a></code> | <code>java.util.List<java.lang.String></code> | The list of handle targets for the notifications. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the rule is enabled. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.selectors">selectors</a></code> | <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors">SecurityNotificationRuleSelectors</a></code> | selectors block. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.timeAggregation">timeAggregation</a></code> | <code>java.lang.Number</code> | Specifies the time period, in seconds, used to aggregate the notification. Defaults to `0`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the rule (must be unique).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/security_notification_rule#name SecurityNotificationRule#name}

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.targets"></a>

```java
public java.util.List<java.lang.String> getTargets();
```

- *Type:* java.util.List<java.lang.String>

The list of handle targets for the notifications.

A target must be prefixed with an

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/security_notification_rule#enabled SecurityNotificationRule#enabled}

---

##### `selectors`<sup>Optional</sup> <a name="selectors" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.selectors"></a>

```java
public SecurityNotificationRuleSelectors getSelectors();
```

- *Type:* <a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors">SecurityNotificationRuleSelectors</a>

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/security_notification_rule#selectors SecurityNotificationRule#selectors}

---

##### `timeAggregation`<sup>Optional</sup> <a name="timeAggregation" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.timeAggregation"></a>

```java
public java.lang.Number getTimeAggregation();
```

- *Type:* java.lang.Number

Specifies the time period, in seconds, used to aggregate the notification. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/security_notification_rule#time_aggregation SecurityNotificationRule#time_aggregation}

---

### SecurityNotificationRuleSelectors <a name="SecurityNotificationRuleSelectors" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.Initializer"></a>

```java
import io.cdktn.providers.datadog.security_notification_rule.SecurityNotificationRuleSelectors;

SecurityNotificationRuleSelectors.builder()
    .ruleTypes(java.util.List<java.lang.String>)
    .triggerSource(java.lang.String)
//  .query(java.lang.String)
//  .severities(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.property.ruleTypes">ruleTypes</a></code> | <code>java.util.List<java.lang.String></code> | Specifies security rule types for filtering signals and vulnerabilities that generate notifications. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.property.triggerSource">triggerSource</a></code> | <code>java.lang.String</code> | The type of security issues the rule applies to. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.property.query">query</a></code> | <code>java.lang.String</code> | Comprises one or several key:value pairs for filtering security issues based on tags and attributes. Defaults to `""`. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.property.severities">severities</a></code> | <code>java.util.List<java.lang.String></code> | The security rules severities to consider. |

---

##### `ruleTypes`<sup>Required</sup> <a name="ruleTypes" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.property.ruleTypes"></a>

```java
public java.util.List<java.lang.String> getRuleTypes();
```

- *Type:* java.util.List<java.lang.String>

Specifies security rule types for filtering signals and vulnerabilities that generate notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/security_notification_rule#rule_types SecurityNotificationRule#rule_types}

---

##### `triggerSource`<sup>Required</sup> <a name="triggerSource" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.property.triggerSource"></a>

```java
public java.lang.String getTriggerSource();
```

- *Type:* java.lang.String

The type of security issues the rule applies to.

Use `security_signals` for rules based on security signals and `security_findings` for those based on vulnerabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/security_notification_rule#trigger_source SecurityNotificationRule#trigger_source}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

Comprises one or several key:value pairs for filtering security issues based on tags and attributes. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/security_notification_rule#query SecurityNotificationRule#query}

---

##### `severities`<sup>Optional</sup> <a name="severities" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.property.severities"></a>

```java
public java.util.List<java.lang.String> getSeverities();
```

- *Type:* java.util.List<java.lang.String>

The security rules severities to consider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/security_notification_rule#severities SecurityNotificationRule#severities}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityNotificationRuleSelectorsOutputReference <a name="SecurityNotificationRuleSelectorsOutputReference" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.security_notification_rule.SecurityNotificationRuleSelectorsOutputReference;

new SecurityNotificationRuleSelectorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.resetSeverities">resetSeverities</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQuery` <a name="resetQuery" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.resetQuery"></a>

```java
public void resetQuery()
```

##### `resetSeverities` <a name="resetSeverities" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.resetSeverities"></a>

```java
public void resetSeverities()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.ruleTypesInput">ruleTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.severitiesInput">severitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.triggerSourceInput">triggerSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.ruleTypes">ruleTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.severities">severities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.triggerSource">triggerSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors">SecurityNotificationRuleSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `ruleTypesInput`<sup>Optional</sup> <a name="ruleTypesInput" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.ruleTypesInput"></a>

```java
public java.util.List<java.lang.String> getRuleTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `severitiesInput`<sup>Optional</sup> <a name="severitiesInput" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.severitiesInput"></a>

```java
public java.util.List<java.lang.String> getSeveritiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `triggerSourceInput`<sup>Optional</sup> <a name="triggerSourceInput" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.triggerSourceInput"></a>

```java
public java.lang.String getTriggerSourceInput();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `ruleTypes`<sup>Required</sup> <a name="ruleTypes" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.ruleTypes"></a>

```java
public java.util.List<java.lang.String> getRuleTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `severities`<sup>Required</sup> <a name="severities" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.severities"></a>

```java
public java.util.List<java.lang.String> getSeverities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `triggerSource`<sup>Required</sup> <a name="triggerSource" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.triggerSource"></a>

```java
public java.lang.String getTriggerSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityNotificationRuleSelectors getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors">SecurityNotificationRuleSelectors</a>

---



