# `onCallUserNotificationChannel` Submodule <a name="`onCallUserNotificationChannel` Submodule" id="@cdktn/provider-datadog.onCallUserNotificationChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OnCallUserNotificationChannel <a name="OnCallUserNotificationChannel" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/on_call_user_notification_channel datadog_on_call_user_notification_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_user_notification_channel.OnCallUserNotificationChannel;

OnCallUserNotificationChannel.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .userId(java.lang.String)
//  .email(OnCallUserNotificationChannelEmail)
//  .phone(OnCallUserNotificationChannelPhone)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.userId">userId</a></code> | <code>java.lang.String</code> | ID of the user to associate the notification channel with. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.email">email</a></code> | <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail">OnCallUserNotificationChannelEmail</a></code> | email block. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.phone">phone</a></code> | <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone">OnCallUserNotificationChannelPhone</a></code> | phone block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.userId"></a>

- *Type:* java.lang.String

ID of the user to associate the notification channel with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/on_call_user_notification_channel#user_id OnCallUserNotificationChannel#user_id}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.email"></a>

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail">OnCallUserNotificationChannelEmail</a>

email block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/on_call_user_notification_channel#email OnCallUserNotificationChannel#email}

---

##### `phone`<sup>Optional</sup> <a name="phone" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.phone"></a>

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone">OnCallUserNotificationChannelPhone</a>

phone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/on_call_user_notification_channel#phone OnCallUserNotificationChannel#phone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.putEmail">putEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.putPhone">putPhone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.resetPhone">resetPhone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEmail` <a name="putEmail" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.putEmail"></a>

```java
public void putEmail(OnCallUserNotificationChannelEmail value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.putEmail.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail">OnCallUserNotificationChannelEmail</a>

---

##### `putPhone` <a name="putPhone" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.putPhone"></a>

```java
public void putPhone(OnCallUserNotificationChannelPhone value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.putPhone.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone">OnCallUserNotificationChannelPhone</a>

---

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetPhone` <a name="resetPhone" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.resetPhone"></a>

```java
public void resetPhone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OnCallUserNotificationChannel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isConstruct"></a>

```java
import io.cdktn.providers.datadog.on_call_user_notification_channel.OnCallUserNotificationChannel;

OnCallUserNotificationChannel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.on_call_user_notification_channel.OnCallUserNotificationChannel;

OnCallUserNotificationChannel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.on_call_user_notification_channel.OnCallUserNotificationChannel;

OnCallUserNotificationChannel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.on_call_user_notification_channel.OnCallUserNotificationChannel;

OnCallUserNotificationChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OnCallUserNotificationChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OnCallUserNotificationChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OnCallUserNotificationChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OnCallUserNotificationChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/on_call_user_notification_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OnCallUserNotificationChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.email">email</a></code> | <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference">OnCallUserNotificationChannelEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.phone">phone</a></code> | <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference">OnCallUserNotificationChannelPhoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.emailInput">emailInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail">OnCallUserNotificationChannelEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.phoneInput">phoneInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone">OnCallUserNotificationChannelPhone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.userIdInput">userIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.email"></a>

```java
public OnCallUserNotificationChannelEmailOutputReference getEmail();
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference">OnCallUserNotificationChannelEmailOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `phone`<sup>Required</sup> <a name="phone" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.phone"></a>

```java
public OnCallUserNotificationChannelPhoneOutputReference getPhone();
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference">OnCallUserNotificationChannelPhoneOutputReference</a>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.emailInput"></a>

```java
public IResolvable|OnCallUserNotificationChannelEmail getEmailInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail">OnCallUserNotificationChannelEmail</a>

---

##### `phoneInput`<sup>Optional</sup> <a name="phoneInput" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.phoneInput"></a>

```java
public IResolvable|OnCallUserNotificationChannelPhone getPhoneInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone">OnCallUserNotificationChannelPhone</a>

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.userIdInput"></a>

```java
public java.lang.String getUserIdInput();
```

- *Type:* java.lang.String

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OnCallUserNotificationChannelConfig <a name="OnCallUserNotificationChannelConfig" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_user_notification_channel.OnCallUserNotificationChannelConfig;

OnCallUserNotificationChannelConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .userId(java.lang.String)
//  .email(OnCallUserNotificationChannelEmail)
//  .phone(OnCallUserNotificationChannelPhone)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.userId">userId</a></code> | <code>java.lang.String</code> | ID of the user to associate the notification channel with. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.email">email</a></code> | <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail">OnCallUserNotificationChannelEmail</a></code> | email block. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.phone">phone</a></code> | <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone">OnCallUserNotificationChannelPhone</a></code> | phone block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

ID of the user to associate the notification channel with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/on_call_user_notification_channel#user_id OnCallUserNotificationChannel#user_id}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.email"></a>

```java
public OnCallUserNotificationChannelEmail getEmail();
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail">OnCallUserNotificationChannelEmail</a>

email block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/on_call_user_notification_channel#email OnCallUserNotificationChannel#email}

---

##### `phone`<sup>Optional</sup> <a name="phone" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.phone"></a>

```java
public OnCallUserNotificationChannelPhone getPhone();
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone">OnCallUserNotificationChannelPhone</a>

phone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/on_call_user_notification_channel#phone OnCallUserNotificationChannel#phone}

---

### OnCallUserNotificationChannelEmail <a name="OnCallUserNotificationChannelEmail" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_user_notification_channel.OnCallUserNotificationChannelEmail;

OnCallUserNotificationChannelEmail.builder()
//  .address(java.lang.String)
//  .formats(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail.property.address">address</a></code> | <code>java.lang.String</code> | The e-mail address to be notified. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail.property.formats">formats</a></code> | <code>java.util.List<java.lang.String></code> | Preferred content formats for notifications. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

The e-mail address to be notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/on_call_user_notification_channel#address OnCallUserNotificationChannel#address}

---

##### `formats`<sup>Optional</sup> <a name="formats" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail.property.formats"></a>

```java
public java.util.List<java.lang.String> getFormats();
```

- *Type:* java.util.List<java.lang.String>

Preferred content formats for notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/on_call_user_notification_channel#formats OnCallUserNotificationChannel#formats}

---

### OnCallUserNotificationChannelPhone <a name="OnCallUserNotificationChannelPhone" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_user_notification_channel.OnCallUserNotificationChannelPhone;

OnCallUserNotificationChannelPhone.builder()
//  .number(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone.property.number">number</a></code> | <code>java.lang.String</code> | The E-164 formatted phone number (for example, +3371234567). |

---

##### `number`<sup>Optional</sup> <a name="number" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone.property.number"></a>

```java
public java.lang.String getNumber();
```

- *Type:* java.lang.String

The E-164 formatted phone number (for example, +3371234567).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/on_call_user_notification_channel#number OnCallUserNotificationChannel#number}

---

## Classes <a name="Classes" id="Classes"></a>

### OnCallUserNotificationChannelEmailOutputReference <a name="OnCallUserNotificationChannelEmailOutputReference" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_user_notification_channel.OnCallUserNotificationChannelEmailOutputReference;

new OnCallUserNotificationChannelEmailOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.resetFormats">resetFormats</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.resetAddress"></a>

```java
public void resetAddress()
```

##### `resetFormats` <a name="resetFormats" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.resetFormats"></a>

```java
public void resetFormats()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.formatsInput">formatsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.formats">formats</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail">OnCallUserNotificationChannelEmail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `formatsInput`<sup>Optional</sup> <a name="formatsInput" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.formatsInput"></a>

```java
public java.util.List<java.lang.String> getFormatsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `formats`<sup>Required</sup> <a name="formats" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.formats"></a>

```java
public java.util.List<java.lang.String> getFormats();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.internalValue"></a>

```java
public IResolvable|OnCallUserNotificationChannelEmail getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail">OnCallUserNotificationChannelEmail</a>

---


### OnCallUserNotificationChannelPhoneOutputReference <a name="OnCallUserNotificationChannelPhoneOutputReference" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.on_call_user_notification_channel.OnCallUserNotificationChannelPhoneOutputReference;

new OnCallUserNotificationChannelPhoneOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.resetNumber">resetNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNumber` <a name="resetNumber" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.resetNumber"></a>

```java
public void resetNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.numberInput">numberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.number">number</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone">OnCallUserNotificationChannelPhone</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `numberInput`<sup>Optional</sup> <a name="numberInput" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.numberInput"></a>

```java
public java.lang.String getNumberInput();
```

- *Type:* java.lang.String

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.number"></a>

```java
public java.lang.String getNumber();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.internalValue"></a>

```java
public IResolvable|OnCallUserNotificationChannelPhone getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone">OnCallUserNotificationChannelPhone</a>

---



