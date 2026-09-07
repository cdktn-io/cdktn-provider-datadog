# `statusPageMaintenanceTemplate` Submodule <a name="`statusPageMaintenanceTemplate` Submodule" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StatusPageMaintenanceTemplate <a name="StatusPageMaintenanceTemplate" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template datadog_status_page_maintenance_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer"></a>

```java
import io.cdktn.providers.datadog.status_page_maintenance_template.StatusPageMaintenanceTemplate;

StatusPageMaintenanceTemplate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .pageId(java.lang.String)
//  .completedDescription(java.lang.String)
//  .componentIds(java.util.List<java.lang.String>)
//  .inProgressDescription(java.lang.String)
//  .maintenanceTitle(java.lang.String)
//  .scheduledDescription(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the maintenance template. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.pageId">pageId</a></code> | <code>java.lang.String</code> | The ID of the status page this maintenance template belongs to. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.completedDescription">completedDescription</a></code> | <code>java.lang.String</code> | The pre-filled description shown once the maintenance is completed. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.componentIds">componentIds</a></code> | <code>java.util.List<java.lang.String></code> | The IDs of the components affected by a maintenance created from this template. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.inProgressDescription">inProgressDescription</a></code> | <code>java.lang.String</code> | The pre-filled description shown while the maintenance is in progress. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.maintenanceTitle">maintenanceTitle</a></code> | <code>java.lang.String</code> | The title used for a maintenance created from this template. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.scheduledDescription">scheduledDescription</a></code> | <code>java.lang.String</code> | The pre-filled description shown while the maintenance is scheduled. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the maintenance template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#name StatusPageMaintenanceTemplate#name}

---

##### `pageId`<sup>Required</sup> <a name="pageId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.pageId"></a>

- *Type:* java.lang.String

The ID of the status page this maintenance template belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#page_id StatusPageMaintenanceTemplate#page_id}

---

##### `completedDescription`<sup>Optional</sup> <a name="completedDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.completedDescription"></a>

- *Type:* java.lang.String

The pre-filled description shown once the maintenance is completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#completed_description StatusPageMaintenanceTemplate#completed_description}

---

##### `componentIds`<sup>Optional</sup> <a name="componentIds" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.componentIds"></a>

- *Type:* java.util.List<java.lang.String>

The IDs of the components affected by a maintenance created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#component_ids StatusPageMaintenanceTemplate#component_ids}

---

##### `inProgressDescription`<sup>Optional</sup> <a name="inProgressDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.inProgressDescription"></a>

- *Type:* java.lang.String

The pre-filled description shown while the maintenance is in progress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#in_progress_description StatusPageMaintenanceTemplate#in_progress_description}

---

##### `maintenanceTitle`<sup>Optional</sup> <a name="maintenanceTitle" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.maintenanceTitle"></a>

- *Type:* java.lang.String

The title used for a maintenance created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#maintenance_title StatusPageMaintenanceTemplate#maintenance_title}

---

##### `scheduledDescription`<sup>Optional</sup> <a name="scheduledDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.Initializer.parameter.scheduledDescription"></a>

- *Type:* java.lang.String

The pre-filled description shown while the maintenance is scheduled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#scheduled_description StatusPageMaintenanceTemplate#scheduled_description}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetCompletedDescription">resetCompletedDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetComponentIds">resetComponentIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetInProgressDescription">resetInProgressDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetMaintenanceTitle">resetMaintenanceTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetScheduledDescription">resetScheduledDescription</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCompletedDescription` <a name="resetCompletedDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetCompletedDescription"></a>

```java
public void resetCompletedDescription()
```

##### `resetComponentIds` <a name="resetComponentIds" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetComponentIds"></a>

```java
public void resetComponentIds()
```

##### `resetInProgressDescription` <a name="resetInProgressDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetInProgressDescription"></a>

```java
public void resetInProgressDescription()
```

##### `resetMaintenanceTitle` <a name="resetMaintenanceTitle" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetMaintenanceTitle"></a>

```java
public void resetMaintenanceTitle()
```

##### `resetScheduledDescription` <a name="resetScheduledDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.resetScheduledDescription"></a>

```java
public void resetScheduledDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StatusPageMaintenanceTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isConstruct"></a>

```java
import io.cdktn.providers.datadog.status_page_maintenance_template.StatusPageMaintenanceTemplate;

StatusPageMaintenanceTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.status_page_maintenance_template.StatusPageMaintenanceTemplate;

StatusPageMaintenanceTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.status_page_maintenance_template.StatusPageMaintenanceTemplate;

StatusPageMaintenanceTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.status_page_maintenance_template.StatusPageMaintenanceTemplate;

StatusPageMaintenanceTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StatusPageMaintenanceTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a StatusPageMaintenanceTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StatusPageMaintenanceTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StatusPageMaintenanceTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the StatusPageMaintenanceTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.completedDescriptionInput">completedDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.componentIdsInput">componentIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.inProgressDescriptionInput">inProgressDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.maintenanceTitleInput">maintenanceTitleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.pageIdInput">pageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.scheduledDescriptionInput">scheduledDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.completedDescription">completedDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.componentIds">componentIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.inProgressDescription">inProgressDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.maintenanceTitle">maintenanceTitle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.pageId">pageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.scheduledDescription">scheduledDescription</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.modifiedAt"></a>

```java
public java.lang.String getModifiedAt();
```

- *Type:* java.lang.String

---

##### `completedDescriptionInput`<sup>Optional</sup> <a name="completedDescriptionInput" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.completedDescriptionInput"></a>

```java
public java.lang.String getCompletedDescriptionInput();
```

- *Type:* java.lang.String

---

##### `componentIdsInput`<sup>Optional</sup> <a name="componentIdsInput" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.componentIdsInput"></a>

```java
public java.util.List<java.lang.String> getComponentIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `inProgressDescriptionInput`<sup>Optional</sup> <a name="inProgressDescriptionInput" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.inProgressDescriptionInput"></a>

```java
public java.lang.String getInProgressDescriptionInput();
```

- *Type:* java.lang.String

---

##### `maintenanceTitleInput`<sup>Optional</sup> <a name="maintenanceTitleInput" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.maintenanceTitleInput"></a>

```java
public java.lang.String getMaintenanceTitleInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pageIdInput`<sup>Optional</sup> <a name="pageIdInput" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.pageIdInput"></a>

```java
public java.lang.String getPageIdInput();
```

- *Type:* java.lang.String

---

##### `scheduledDescriptionInput`<sup>Optional</sup> <a name="scheduledDescriptionInput" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.scheduledDescriptionInput"></a>

```java
public java.lang.String getScheduledDescriptionInput();
```

- *Type:* java.lang.String

---

##### `completedDescription`<sup>Required</sup> <a name="completedDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.completedDescription"></a>

```java
public java.lang.String getCompletedDescription();
```

- *Type:* java.lang.String

---

##### `componentIds`<sup>Required</sup> <a name="componentIds" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.componentIds"></a>

```java
public java.util.List<java.lang.String> getComponentIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `inProgressDescription`<sup>Required</sup> <a name="inProgressDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.inProgressDescription"></a>

```java
public java.lang.String getInProgressDescription();
```

- *Type:* java.lang.String

---

##### `maintenanceTitle`<sup>Required</sup> <a name="maintenanceTitle" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.maintenanceTitle"></a>

```java
public java.lang.String getMaintenanceTitle();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pageId`<sup>Required</sup> <a name="pageId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.pageId"></a>

```java
public java.lang.String getPageId();
```

- *Type:* java.lang.String

---

##### `scheduledDescription`<sup>Required</sup> <a name="scheduledDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.scheduledDescription"></a>

```java
public java.lang.String getScheduledDescription();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StatusPageMaintenanceTemplateConfig <a name="StatusPageMaintenanceTemplateConfig" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.status_page_maintenance_template.StatusPageMaintenanceTemplateConfig;

StatusPageMaintenanceTemplateConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .pageId(java.lang.String)
//  .completedDescription(java.lang.String)
//  .componentIds(java.util.List<java.lang.String>)
//  .inProgressDescription(java.lang.String)
//  .maintenanceTitle(java.lang.String)
//  .scheduledDescription(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the maintenance template. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.pageId">pageId</a></code> | <code>java.lang.String</code> | The ID of the status page this maintenance template belongs to. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.completedDescription">completedDescription</a></code> | <code>java.lang.String</code> | The pre-filled description shown once the maintenance is completed. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.componentIds">componentIds</a></code> | <code>java.util.List<java.lang.String></code> | The IDs of the components affected by a maintenance created from this template. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.inProgressDescription">inProgressDescription</a></code> | <code>java.lang.String</code> | The pre-filled description shown while the maintenance is in progress. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.maintenanceTitle">maintenanceTitle</a></code> | <code>java.lang.String</code> | The title used for a maintenance created from this template. |
| <code><a href="#@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.scheduledDescription">scheduledDescription</a></code> | <code>java.lang.String</code> | The pre-filled description shown while the maintenance is scheduled. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the maintenance template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#name StatusPageMaintenanceTemplate#name}

---

##### `pageId`<sup>Required</sup> <a name="pageId" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.pageId"></a>

```java
public java.lang.String getPageId();
```

- *Type:* java.lang.String

The ID of the status page this maintenance template belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#page_id StatusPageMaintenanceTemplate#page_id}

---

##### `completedDescription`<sup>Optional</sup> <a name="completedDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.completedDescription"></a>

```java
public java.lang.String getCompletedDescription();
```

- *Type:* java.lang.String

The pre-filled description shown once the maintenance is completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#completed_description StatusPageMaintenanceTemplate#completed_description}

---

##### `componentIds`<sup>Optional</sup> <a name="componentIds" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.componentIds"></a>

```java
public java.util.List<java.lang.String> getComponentIds();
```

- *Type:* java.util.List<java.lang.String>

The IDs of the components affected by a maintenance created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#component_ids StatusPageMaintenanceTemplate#component_ids}

---

##### `inProgressDescription`<sup>Optional</sup> <a name="inProgressDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.inProgressDescription"></a>

```java
public java.lang.String getInProgressDescription();
```

- *Type:* java.lang.String

The pre-filled description shown while the maintenance is in progress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#in_progress_description StatusPageMaintenanceTemplate#in_progress_description}

---

##### `maintenanceTitle`<sup>Optional</sup> <a name="maintenanceTitle" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.maintenanceTitle"></a>

```java
public java.lang.String getMaintenanceTitle();
```

- *Type:* java.lang.String

The title used for a maintenance created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#maintenance_title StatusPageMaintenanceTemplate#maintenance_title}

---

##### `scheduledDescription`<sup>Optional</sup> <a name="scheduledDescription" id="@cdktn/provider-datadog.statusPageMaintenanceTemplate.StatusPageMaintenanceTemplateConfig.property.scheduledDescription"></a>

```java
public java.lang.String getScheduledDescription();
```

- *Type:* java.lang.String

The pre-filled description shown while the maintenance is scheduled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#scheduled_description StatusPageMaintenanceTemplate#scheduled_description}

---



