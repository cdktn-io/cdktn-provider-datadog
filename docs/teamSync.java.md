# `teamSync` Submodule <a name="`teamSync` Submodule" id="@cdktn/provider-datadog.teamSync"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamSync <a name="TeamSync" id="@cdktn/provider-datadog.teamSync.TeamSync"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/team_sync datadog_team_sync}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.teamSync.TeamSync.Initializer"></a>

```java
import io.cdktn.providers.datadog.team_sync.TeamSync;

TeamSync.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .source(java.lang.String)
    .type(java.lang.String)
//  .frequency(java.lang.String)
//  .selectionState(IResolvable|java.util.List<TeamSyncSelectionState>)
//  .syncMembership(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.source">source</a></code> | <code>java.lang.String</code> | The external source platform for team synchronization. Valid values are `github`. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of synchronization operation. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.frequency">frequency</a></code> | <code>java.lang.String</code> | How often the sync process should run. Valid values are `once`, `continuously`, `paused`. Defaults to `"once"`. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.selectionState">selectionState</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState">TeamSyncSelectionState</a>></code> | selection_state block. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.syncMembership">syncMembership</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to sync members from the external team to the Datadog team. Defaults to `false`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.source"></a>

- *Type:* java.lang.String

The external source platform for team synchronization. Valid values are `github`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/team_sync#source TeamSync#source}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of synchronization operation.

`link` connects teams by matching names. `provision` creates new teams when no match is found. Valid values are `link`, `provision`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/team_sync#type TeamSync#type}

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.frequency"></a>

- *Type:* java.lang.String

How often the sync process should run. Valid values are `once`, `continuously`, `paused`. Defaults to `"once"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/team_sync#frequency TeamSync#frequency}

---

##### `selectionState`<sup>Optional</sup> <a name="selectionState" id="@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.selectionState"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState">TeamSyncSelectionState</a>>

selection_state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/team_sync#selection_state TeamSync#selection_state}

---

##### `syncMembership`<sup>Optional</sup> <a name="syncMembership" id="@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.syncMembership"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to sync members from the external team to the Datadog team. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/team_sync#sync_membership TeamSync#sync_membership}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.putSelectionState">putSelectionState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.resetSelectionState">resetSelectionState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.resetSyncMembership">resetSyncMembership</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.teamSync.TeamSync.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.teamSync.TeamSync.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.teamSync.TeamSync.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.teamSync.TeamSync.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.teamSync.TeamSync.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.teamSync.TeamSync.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.teamSync.TeamSync.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.teamSync.TeamSync.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.teamSync.TeamSync.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.teamSync.TeamSync.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.teamSync.TeamSync.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.teamSync.TeamSync.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.teamSync.TeamSync.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.teamSync.TeamSync.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.teamSync.TeamSync.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.teamSync.TeamSync.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.teamSync.TeamSync.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.teamSync.TeamSync.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSync.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.teamSync.TeamSync.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.teamSync.TeamSync.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.teamSync.TeamSync.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.teamSync.TeamSync.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.teamSync.TeamSync.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.teamSync.TeamSync.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.teamSync.TeamSync.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSelectionState` <a name="putSelectionState" id="@cdktn/provider-datadog.teamSync.TeamSync.putSelectionState"></a>

```java
public void putSelectionState(IResolvable|java.util.List<TeamSyncSelectionState> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.teamSync.TeamSync.putSelectionState.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState">TeamSyncSelectionState</a>>

---

##### `resetFrequency` <a name="resetFrequency" id="@cdktn/provider-datadog.teamSync.TeamSync.resetFrequency"></a>

```java
public void resetFrequency()
```

##### `resetSelectionState` <a name="resetSelectionState" id="@cdktn/provider-datadog.teamSync.TeamSync.resetSelectionState"></a>

```java
public void resetSelectionState()
```

##### `resetSyncMembership` <a name="resetSyncMembership" id="@cdktn/provider-datadog.teamSync.TeamSync.resetSyncMembership"></a>

```java
public void resetSyncMembership()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TeamSync resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.teamSync.TeamSync.isConstruct"></a>

```java
import io.cdktn.providers.datadog.team_sync.TeamSync;

TeamSync.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.teamSync.TeamSync.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.teamSync.TeamSync.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.team_sync.TeamSync;

TeamSync.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.teamSync.TeamSync.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.teamSync.TeamSync.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.team_sync.TeamSync;

TeamSync.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.teamSync.TeamSync.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.teamSync.TeamSync.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.team_sync.TeamSync;

TeamSync.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TeamSync.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a TeamSync resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.teamSync.TeamSync.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.teamSync.TeamSync.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TeamSync to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.teamSync.TeamSync.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TeamSync that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/team_sync#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.teamSync.TeamSync.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the TeamSync to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.selectionState">selectionState</a></code> | <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList">TeamSyncSelectionStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.frequencyInput">frequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.selectionStateInput">selectionStateInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState">TeamSyncSelectionState</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.syncMembershipInput">syncMembershipInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.frequency">frequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.syncMembership">syncMembership</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.teamSync.TeamSync.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.teamSync.TeamSync.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.teamSync.TeamSync.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.teamSync.TeamSync.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.teamSync.TeamSync.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.teamSync.TeamSync.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.teamSync.TeamSync.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.teamSync.TeamSync.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.teamSync.TeamSync.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.teamSync.TeamSync.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.teamSync.TeamSync.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.teamSync.TeamSync.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.teamSync.TeamSync.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.teamSync.TeamSync.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.teamSync.TeamSync.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `selectionState`<sup>Required</sup> <a name="selectionState" id="@cdktn/provider-datadog.teamSync.TeamSync.property.selectionState"></a>

```java
public TeamSyncSelectionStateList getSelectionState();
```

- *Type:* <a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList">TeamSyncSelectionStateList</a>

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktn/provider-datadog.teamSync.TeamSync.property.frequencyInput"></a>

```java
public java.lang.String getFrequencyInput();
```

- *Type:* java.lang.String

---

##### `selectionStateInput`<sup>Optional</sup> <a name="selectionStateInput" id="@cdktn/provider-datadog.teamSync.TeamSync.property.selectionStateInput"></a>

```java
public IResolvable|java.util.List<TeamSyncSelectionState> getSelectionStateInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState">TeamSyncSelectionState</a>>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-datadog.teamSync.TeamSync.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `syncMembershipInput`<sup>Optional</sup> <a name="syncMembershipInput" id="@cdktn/provider-datadog.teamSync.TeamSync.property.syncMembershipInput"></a>

```java
public java.lang.Boolean|IResolvable getSyncMembershipInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-datadog.teamSync.TeamSync.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktn/provider-datadog.teamSync.TeamSync.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-datadog.teamSync.TeamSync.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `syncMembership`<sup>Required</sup> <a name="syncMembership" id="@cdktn/provider-datadog.teamSync.TeamSync.property.syncMembership"></a>

```java
public java.lang.Boolean|IResolvable getSyncMembership();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.teamSync.TeamSync.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.teamSync.TeamSync.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TeamSyncConfig <a name="TeamSyncConfig" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.team_sync.TeamSyncConfig;

TeamSyncConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .source(java.lang.String)
    .type(java.lang.String)
//  .frequency(java.lang.String)
//  .selectionState(IResolvable|java.util.List<TeamSyncSelectionState>)
//  .syncMembership(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.source">source</a></code> | <code>java.lang.String</code> | The external source platform for team synchronization. Valid values are `github`. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of synchronization operation. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.frequency">frequency</a></code> | <code>java.lang.String</code> | How often the sync process should run. Valid values are `once`, `continuously`, `paused`. Defaults to `"once"`. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.selectionState">selectionState</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState">TeamSyncSelectionState</a>></code> | selection_state block. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.syncMembership">syncMembership</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to sync members from the external team to the Datadog team. Defaults to `false`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

The external source platform for team synchronization. Valid values are `github`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/team_sync#source TeamSync#source}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of synchronization operation.

`link` connects teams by matching names. `provision` creates new teams when no match is found. Valid values are `link`, `provision`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/team_sync#type TeamSync#type}

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

How often the sync process should run. Valid values are `once`, `continuously`, `paused`. Defaults to `"once"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/team_sync#frequency TeamSync#frequency}

---

##### `selectionState`<sup>Optional</sup> <a name="selectionState" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.selectionState"></a>

```java
public IResolvable|java.util.List<TeamSyncSelectionState> getSelectionState();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState">TeamSyncSelectionState</a>>

selection_state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/team_sync#selection_state TeamSync#selection_state}

---

##### `syncMembership`<sup>Optional</sup> <a name="syncMembership" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.syncMembership"></a>

```java
public java.lang.Boolean|IResolvable getSyncMembership();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to sync members from the external team to the Datadog team. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/team_sync#sync_membership TeamSync#sync_membership}

---

### TeamSyncSelectionState <a name="TeamSyncSelectionState" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionState.Initializer"></a>

```java
import io.cdktn.providers.datadog.team_sync.TeamSyncSelectionState;

TeamSyncSelectionState.builder()
    .externalId(TeamSyncSelectionStateExternalId)
//  .operation(java.lang.String)
//  .scope(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState.property.externalId">externalId</a></code> | <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId">TeamSyncSelectionStateExternalId</a></code> | external_id block. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState.property.operation">operation</a></code> | <code>java.lang.String</code> | The operation to perform on the selected hierarchy. Valid values are `include`. Defaults to `"include"`. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState.property.scope">scope</a></code> | <code>java.lang.String</code> | The scope of the selection. Valid values are `subtree`. Defaults to `"subtree"`. |

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionState.property.externalId"></a>

```java
public TeamSyncSelectionStateExternalId getExternalId();
```

- *Type:* <a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId">TeamSyncSelectionStateExternalId</a>

external_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/team_sync#external_id TeamSync#external_id}

---

##### `operation`<sup>Optional</sup> <a name="operation" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionState.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

The operation to perform on the selected hierarchy. Valid values are `include`. Defaults to `"include"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/team_sync#operation TeamSync#operation}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionState.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

The scope of the selection. Valid values are `subtree`. Defaults to `"subtree"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/team_sync#scope TeamSync#scope}

---

### TeamSyncSelectionStateExternalId <a name="TeamSyncSelectionStateExternalId" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId.Initializer"></a>

```java
import io.cdktn.providers.datadog.team_sync.TeamSyncSelectionStateExternalId;

TeamSyncSelectionStateExternalId.builder()
    .type(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId.property.type">type</a></code> | <code>java.lang.String</code> | The type of external identifier. Valid values are `team`, `organization`. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId.property.value">value</a></code> | <code>java.lang.String</code> | The external identifier value from the source platform (e.g. a GitHub organization ID or team ID). |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of external identifier. Valid values are `team`, `organization`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/team_sync#type TeamSync#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The external identifier value from the source platform (e.g. a GitHub organization ID or team ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/team_sync#value TeamSync#value}

---

## Classes <a name="Classes" id="Classes"></a>

### TeamSyncSelectionStateExternalIdOutputReference <a name="TeamSyncSelectionStateExternalIdOutputReference" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.team_sync.TeamSyncSelectionStateExternalIdOutputReference;

new TeamSyncSelectionStateExternalIdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId">TeamSyncSelectionStateExternalId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.internalValue"></a>

```java
public IResolvable|TeamSyncSelectionStateExternalId getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId">TeamSyncSelectionStateExternalId</a>

---


### TeamSyncSelectionStateList <a name="TeamSyncSelectionStateList" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.Initializer"></a>

```java
import io.cdktn.providers.datadog.team_sync.TeamSyncSelectionStateList;

new TeamSyncSelectionStateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.get"></a>

```java
public TeamSyncSelectionStateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState">TeamSyncSelectionState</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.property.internalValue"></a>

```java
public IResolvable|java.util.List<TeamSyncSelectionState> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState">TeamSyncSelectionState</a>>

---


### TeamSyncSelectionStateOutputReference <a name="TeamSyncSelectionStateOutputReference" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.team_sync.TeamSyncSelectionStateOutputReference;

new TeamSyncSelectionStateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.putExternalId">putExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.resetOperation">resetOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExternalId` <a name="putExternalId" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.putExternalId"></a>

```java
public void putExternalId(TeamSyncSelectionStateExternalId value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.putExternalId.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId">TeamSyncSelectionStateExternalId</a>

---

##### `resetOperation` <a name="resetOperation" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.resetOperation"></a>

```java
public void resetOperation()
```

##### `resetScope` <a name="resetScope" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.resetScope"></a>

```java
public void resetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.externalId">externalId</a></code> | <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference">TeamSyncSelectionStateExternalIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId">TeamSyncSelectionStateExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.operationInput">operationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.operation">operation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState">TeamSyncSelectionState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.externalId"></a>

```java
public TeamSyncSelectionStateExternalIdOutputReference getExternalId();
```

- *Type:* <a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference">TeamSyncSelectionStateExternalIdOutputReference</a>

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.externalIdInput"></a>

```java
public IResolvable|TeamSyncSelectionStateExternalId getExternalIdInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId">TeamSyncSelectionStateExternalId</a>

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.operationInput"></a>

```java
public java.lang.String getOperationInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.internalValue"></a>

```java
public IResolvable|TeamSyncSelectionState getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState">TeamSyncSelectionState</a>

---



