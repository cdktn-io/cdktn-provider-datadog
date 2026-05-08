# `onCallUserNotificationRule` Submodule <a name="`onCallUserNotificationRule` Submodule" id="@cdktn/provider-datadog.onCallUserNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OnCallUserNotificationRule <a name="OnCallUserNotificationRule" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_rule datadog_on_call_user_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_user_notification_rule.OnCallUserNotificationRule;

OnCallUserNotificationRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .category(java.lang.String)
    .channelId(java.lang.String)
    .delayMinutes(java.lang.Number)
    .userId(java.lang.String)
//  .phone(OnCallUserNotificationRulePhone)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.category">category</a></code> | <code>java.lang.String</code> | Notification category to associate the rule with. Valid values are `high_urgency`, `low_urgency`. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.channelId">channelId</a></code> | <code>java.lang.String</code> | ID of the notification channel to associate the notification rule with. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.delayMinutes">delayMinutes</a></code> | <code>java.lang.Number</code> | Number of minutes to elapse before this rule is evaluated.  `0` indicates immediate evaluation. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.userId">userId</a></code> | <code>java.lang.String</code> | ID of the user to associate the notification rule with. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.phone">phone</a></code> | <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone">OnCallUserNotificationRulePhone</a></code> | phone block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.category"></a>

- *Type:* java.lang.String

Notification category to associate the rule with. Valid values are `high_urgency`, `low_urgency`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_rule#category OnCallUserNotificationRule#category}

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.channelId"></a>

- *Type:* java.lang.String

ID of the notification channel to associate the notification rule with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_rule#channel_id OnCallUserNotificationRule#channel_id}

---

##### `delayMinutes`<sup>Required</sup> <a name="delayMinutes" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.delayMinutes"></a>

- *Type:* java.lang.Number

Number of minutes to elapse before this rule is evaluated.  `0` indicates immediate evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_rule#delay_minutes OnCallUserNotificationRule#delay_minutes}

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.userId"></a>

- *Type:* java.lang.String

ID of the user to associate the notification rule with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_rule#user_id OnCallUserNotificationRule#user_id}

---

##### `phone`<sup>Optional</sup> <a name="phone" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.phone"></a>

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone">OnCallUserNotificationRulePhone</a>

phone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_rule#phone OnCallUserNotificationRule#phone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.putPhone">putPhone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.resetPhone">resetPhone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPhone` <a name="putPhone" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.putPhone"></a>

```java
public void putPhone(OnCallUserNotificationRulePhone value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.putPhone.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone">OnCallUserNotificationRulePhone</a>

---

##### `resetPhone` <a name="resetPhone" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.resetPhone"></a>

```java
public void resetPhone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OnCallUserNotificationRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isConstruct"></a>

```java
import io.cdktn.providers.datadog.on_call_user_notification_rule.OnCallUserNotificationRule;

OnCallUserNotificationRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.on_call_user_notification_rule.OnCallUserNotificationRule;

OnCallUserNotificationRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.on_call_user_notification_rule.OnCallUserNotificationRule;

OnCallUserNotificationRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.on_call_user_notification_rule.OnCallUserNotificationRule;

OnCallUserNotificationRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OnCallUserNotificationRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OnCallUserNotificationRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OnCallUserNotificationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OnCallUserNotificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OnCallUserNotificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.phone">phone</a></code> | <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference">OnCallUserNotificationRulePhoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.categoryInput">categoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.channelIdInput">channelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.delayMinutesInput">delayMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.phoneInput">phoneInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone">OnCallUserNotificationRulePhone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.userIdInput">userIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.channelId">channelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.delayMinutes">delayMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `phone`<sup>Required</sup> <a name="phone" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.phone"></a>

```java
public OnCallUserNotificationRulePhoneOutputReference getPhone();
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference">OnCallUserNotificationRulePhoneOutputReference</a>

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.categoryInput"></a>

```java
public java.lang.String getCategoryInput();
```

- *Type:* java.lang.String

---

##### `channelIdInput`<sup>Optional</sup> <a name="channelIdInput" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.channelIdInput"></a>

```java
public java.lang.String getChannelIdInput();
```

- *Type:* java.lang.String

---

##### `delayMinutesInput`<sup>Optional</sup> <a name="delayMinutesInput" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.delayMinutesInput"></a>

```java
public java.lang.Number getDelayMinutesInput();
```

- *Type:* java.lang.Number

---

##### `phoneInput`<sup>Optional</sup> <a name="phoneInput" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.phoneInput"></a>

```java
public IResolvable|OnCallUserNotificationRulePhone getPhoneInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone">OnCallUserNotificationRulePhone</a>

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.userIdInput"></a>

```java
public java.lang.String getUserIdInput();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.channelId"></a>

```java
public java.lang.String getChannelId();
```

- *Type:* java.lang.String

---

##### `delayMinutes`<sup>Required</sup> <a name="delayMinutes" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.delayMinutes"></a>

```java
public java.lang.Number getDelayMinutes();
```

- *Type:* java.lang.Number

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OnCallUserNotificationRuleConfig <a name="OnCallUserNotificationRuleConfig" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_user_notification_rule.OnCallUserNotificationRuleConfig;

OnCallUserNotificationRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .category(java.lang.String)
    .channelId(java.lang.String)
    .delayMinutes(java.lang.Number)
    .userId(java.lang.String)
//  .phone(OnCallUserNotificationRulePhone)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.category">category</a></code> | <code>java.lang.String</code> | Notification category to associate the rule with. Valid values are `high_urgency`, `low_urgency`. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.channelId">channelId</a></code> | <code>java.lang.String</code> | ID of the notification channel to associate the notification rule with. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.delayMinutes">delayMinutes</a></code> | <code>java.lang.Number</code> | Number of minutes to elapse before this rule is evaluated.  `0` indicates immediate evaluation. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.userId">userId</a></code> | <code>java.lang.String</code> | ID of the user to associate the notification rule with. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.phone">phone</a></code> | <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone">OnCallUserNotificationRulePhone</a></code> | phone block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

Notification category to associate the rule with. Valid values are `high_urgency`, `low_urgency`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_rule#category OnCallUserNotificationRule#category}

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.channelId"></a>

```java
public java.lang.String getChannelId();
```

- *Type:* java.lang.String

ID of the notification channel to associate the notification rule with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_rule#channel_id OnCallUserNotificationRule#channel_id}

---

##### `delayMinutes`<sup>Required</sup> <a name="delayMinutes" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.delayMinutes"></a>

```java
public java.lang.Number getDelayMinutes();
```

- *Type:* java.lang.Number

Number of minutes to elapse before this rule is evaluated.  `0` indicates immediate evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_rule#delay_minutes OnCallUserNotificationRule#delay_minutes}

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

ID of the user to associate the notification rule with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_rule#user_id OnCallUserNotificationRule#user_id}

---

##### `phone`<sup>Optional</sup> <a name="phone" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.phone"></a>

```java
public OnCallUserNotificationRulePhone getPhone();
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone">OnCallUserNotificationRulePhone</a>

phone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_rule#phone OnCallUserNotificationRule#phone}

---

### OnCallUserNotificationRulePhone <a name="OnCallUserNotificationRulePhone" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_user_notification_rule.OnCallUserNotificationRulePhone;

OnCallUserNotificationRulePhone.builder()
//  .method(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone.property.method">method</a></code> | <code>java.lang.String</code> | Specifies the method in which a phone is used in a notification rule. Valid values are `sms`, `voice`. |

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

Specifies the method in which a phone is used in a notification rule. Valid values are `sms`, `voice`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_rule#method OnCallUserNotificationRule#method}

---

## Classes <a name="Classes" id="Classes"></a>

### OnCallUserNotificationRulePhoneOutputReference <a name="OnCallUserNotificationRulePhoneOutputReference" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_user_notification_rule.OnCallUserNotificationRulePhoneOutputReference;

new OnCallUserNotificationRulePhoneOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.resetMethod">resetMethod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMethod` <a name="resetMethod" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.resetMethod"></a>

```java
public void resetMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone">OnCallUserNotificationRulePhone</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.internalValue"></a>

```java
public IResolvable|OnCallUserNotificationRulePhone getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone">OnCallUserNotificationRulePhone</a>

---



