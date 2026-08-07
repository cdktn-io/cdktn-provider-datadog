# `incidentType` Submodule <a name="`incidentType` Submodule" id="@cdktn/provider-datadog.incidentType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IncidentType <a name="IncidentType" id="@cdktn/provider-datadog.incidentType.IncidentType"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type datadog_incident_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer"></a>

```java
import io.cdktn.providers.datadog.incident_type.IncidentType;

IncidentType.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .configuration(IncidentTypeConfiguration)
//  .description(java.lang.String)
//  .isDefault(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the incident type. Must be between 1 and 50 characters. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration">IncidentTypeConfiguration</a></code> | The incident type's behavior settings. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the incident type. The description can have a maximum of 512 characters. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.isDefault">isDefault</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether this incident type is the default type. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the incident type. Must be between 1 and 50 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#name IncidentType#name}

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration">IncidentTypeConfiguration</a>

The incident type's behavior settings.

Any field left unset takes its server-side default. This block is applied in a separate call after the incident type is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#configuration IncidentType#configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the incident type. The description can have a maximum of 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#description IncidentType#description}

---

##### `isDefault`<sup>Optional</sup> <a name="isDefault" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.isDefault"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether this incident type is the default type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#is_default IncidentType#is_default}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.resetIsDefault">resetIsDefault</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.incidentType.IncidentType.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.incidentType.IncidentType.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.incidentType.IncidentType.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.incidentType.IncidentType.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.incidentType.IncidentType.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.incidentType.IncidentType.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.incidentType.IncidentType.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.incidentType.IncidentType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.incidentType.IncidentType.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.incidentType.IncidentType.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.incidentType.IncidentType.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.incidentType.IncidentType.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.incidentType.IncidentType.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.incidentType.IncidentType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.incidentType.IncidentType.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.incidentType.IncidentType.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentType.IncidentType.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentType.IncidentType.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.incidentType.IncidentType.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentType.IncidentType.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.incidentType.IncidentType.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.incidentType.IncidentType.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.incidentType.IncidentType.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.incidentType.IncidentType.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentType.IncidentType.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktn/provider-datadog.incidentType.IncidentType.putConfiguration"></a>

```java
public void putConfiguration(IncidentTypeConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.incidentType.IncidentType.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration">IncidentTypeConfiguration</a>

---

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktn/provider-datadog.incidentType.IncidentType.resetConfiguration"></a>

```java
public void resetConfiguration()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-datadog.incidentType.IncidentType.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetIsDefault` <a name="resetIsDefault" id="@cdktn/provider-datadog.incidentType.IncidentType.resetIsDefault"></a>

```java
public void resetIsDefault()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IncidentType resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.incidentType.IncidentType.isConstruct"></a>

```java
import io.cdktn.providers.datadog.incident_type.IncidentType;

IncidentType.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentType.IncidentType.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.incidentType.IncidentType.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.incident_type.IncidentType;

IncidentType.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentType.IncidentType.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.incidentType.IncidentType.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.incident_type.IncidentType;

IncidentType.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentType.IncidentType.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.incidentType.IncidentType.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.incident_type.IncidentType;

IncidentType.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IncidentType.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IncidentType resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.incidentType.IncidentType.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.incidentType.IncidentType.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IncidentType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.incidentType.IncidentType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IncidentType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentType.IncidentType.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IncidentType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference">IncidentTypeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.configurationInput">configurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration">IncidentTypeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.isDefaultInput">isDefaultInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.isDefault">isDefault</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.incidentType.IncidentType.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.incidentType.IncidentType.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.incidentType.IncidentType.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.incidentType.IncidentType.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.incidentType.IncidentType.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.incidentType.IncidentType.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.incidentType.IncidentType.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.incidentType.IncidentType.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.incidentType.IncidentType.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.incidentType.IncidentType.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.incidentType.IncidentType.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.incidentType.IncidentType.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentType.IncidentType.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.incidentType.IncidentType.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-datadog.incidentType.IncidentType.property.configuration"></a>

```java
public IncidentTypeConfigurationOutputReference getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference">IncidentTypeConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentType.IncidentType.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-datadog.incidentType.IncidentType.property.configurationInput"></a>

```java
public IResolvable|IncidentTypeConfiguration getConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration">IncidentTypeConfiguration</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-datadog.incidentType.IncidentType.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `isDefaultInput`<sup>Optional</sup> <a name="isDefaultInput" id="@cdktn/provider-datadog.incidentType.IncidentType.property.isDefaultInput"></a>

```java
public java.lang.Boolean|IResolvable getIsDefaultInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.incidentType.IncidentType.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.incidentType.IncidentType.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktn/provider-datadog.incidentType.IncidentType.property.isDefault"></a>

```java
public java.lang.Boolean|IResolvable getIsDefault();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.incidentType.IncidentType.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.incidentType.IncidentType.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IncidentTypeConfig <a name="IncidentTypeConfig" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.incident_type.IncidentTypeConfig;

IncidentTypeConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .configuration(IncidentTypeConfiguration)
//  .description(java.lang.String)
//  .isDefault(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the incident type. Must be between 1 and 50 characters. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration">IncidentTypeConfiguration</a></code> | The incident type's behavior settings. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the incident type. The description can have a maximum of 512 characters. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.isDefault">isDefault</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether this incident type is the default type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the incident type. Must be between 1 and 50 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#name IncidentType#name}

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.configuration"></a>

```java
public IncidentTypeConfiguration getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration">IncidentTypeConfiguration</a>

The incident type's behavior settings.

Any field left unset takes its server-side default. This block is applied in a separate call after the incident type is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#configuration IncidentType#configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the incident type. The description can have a maximum of 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#description IncidentType#description}

---

##### `isDefault`<sup>Optional</sup> <a name="isDefault" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.isDefault"></a>

```java
public java.lang.Boolean|IResolvable getIsDefault();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether this incident type is the default type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#is_default IncidentType#is_default}

---

### IncidentTypeConfiguration <a name="IncidentTypeConfiguration" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.Initializer"></a>

```java
import io.cdktn.providers.datadog.incident_type.IncidentTypeConfiguration;

IncidentTypeConfiguration.builder()
//  .allowIncidentDeletion(java.lang.Boolean|IResolvable)
//  .allowWorkflows(java.lang.Boolean|IResolvable)
//  .createMessage(java.lang.String)
//  .editableTimestamps(java.lang.Boolean|IResolvable)
//  .privateIncidents(java.lang.Boolean|IResolvable)
//  .privateIncidentsByDefault(java.lang.Boolean|IResolvable)
//  .slugSource(java.lang.String)
//  .testIncidents(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.allowIncidentDeletion">allowIncidentDeletion</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether incidents of this type can be deleted. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.allowWorkflows">allowWorkflows</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether users can manually run a workflow from an incident of this type. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.createMessage">createMessage</a></code> | <code>java.lang.String</code> | An optional message shown to users when they declare an incident of this type. Defaults to an empty string. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.editableTimestamps">editableTimestamps</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether responders can edit incident timestamps for incidents of this type. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.privateIncidents">privateIncidents</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether responders can create private incidents of this type. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.privateIncidentsByDefault">privateIncidentsByDefault</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the private toggle is enabled by default in the incident creation modal for this type. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.slugSource">slugSource</a></code> | <code>java.lang.String</code> | The source used to derive the incident slug. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.testIncidents">testIncidents</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether test incidents of this type can be created. Defaults to `true`. |

---

##### `allowIncidentDeletion`<sup>Optional</sup> <a name="allowIncidentDeletion" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.allowIncidentDeletion"></a>

```java
public java.lang.Boolean|IResolvable getAllowIncidentDeletion();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether incidents of this type can be deleted. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#allow_incident_deletion IncidentType#allow_incident_deletion}

---

##### `allowWorkflows`<sup>Optional</sup> <a name="allowWorkflows" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.allowWorkflows"></a>

```java
public java.lang.Boolean|IResolvable getAllowWorkflows();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether users can manually run a workflow from an incident of this type. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#allow_workflows IncidentType#allow_workflows}

---

##### `createMessage`<sup>Optional</sup> <a name="createMessage" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.createMessage"></a>

```java
public java.lang.String getCreateMessage();
```

- *Type:* java.lang.String

An optional message shown to users when they declare an incident of this type. Defaults to an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#create_message IncidentType#create_message}

---

##### `editableTimestamps`<sup>Optional</sup> <a name="editableTimestamps" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.editableTimestamps"></a>

```java
public java.lang.Boolean|IResolvable getEditableTimestamps();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether responders can edit incident timestamps for incidents of this type. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#editable_timestamps IncidentType#editable_timestamps}

---

##### `privateIncidents`<sup>Optional</sup> <a name="privateIncidents" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.privateIncidents"></a>

```java
public java.lang.Boolean|IResolvable getPrivateIncidents();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether responders can create private incidents of this type. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#private_incidents IncidentType#private_incidents}

---

##### `privateIncidentsByDefault`<sup>Optional</sup> <a name="privateIncidentsByDefault" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.privateIncidentsByDefault"></a>

```java
public java.lang.Boolean|IResolvable getPrivateIncidentsByDefault();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the private toggle is enabled by default in the incident creation modal for this type. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#private_incidents_by_default IncidentType#private_incidents_by_default}

---

##### `slugSource`<sup>Optional</sup> <a name="slugSource" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.slugSource"></a>

```java
public java.lang.String getSlugSource();
```

- *Type:* java.lang.String

The source used to derive the incident slug.

When set to `servicenow`, incidents display the ServiceNow record ID instead of the public ID. If no ServiceNow integration exists, the public ID is displayed. Defaults to `default`. Valid values are `default`, `servicenow`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#slug_source IncidentType#slug_source}

---

##### `testIncidents`<sup>Optional</sup> <a name="testIncidents" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.testIncidents"></a>

```java
public java.lang.Boolean|IResolvable getTestIncidents();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether test incidents of this type can be created. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#test_incidents IncidentType#test_incidents}

---

## Classes <a name="Classes" id="Classes"></a>

### IncidentTypeConfigurationOutputReference <a name="IncidentTypeConfigurationOutputReference" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.incident_type.IncidentTypeConfigurationOutputReference;

new IncidentTypeConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetAllowIncidentDeletion">resetAllowIncidentDeletion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetAllowWorkflows">resetAllowWorkflows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetCreateMessage">resetCreateMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetEditableTimestamps">resetEditableTimestamps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetPrivateIncidents">resetPrivateIncidents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetPrivateIncidentsByDefault">resetPrivateIncidentsByDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetSlugSource">resetSlugSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetTestIncidents">resetTestIncidents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowIncidentDeletion` <a name="resetAllowIncidentDeletion" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetAllowIncidentDeletion"></a>

```java
public void resetAllowIncidentDeletion()
```

##### `resetAllowWorkflows` <a name="resetAllowWorkflows" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetAllowWorkflows"></a>

```java
public void resetAllowWorkflows()
```

##### `resetCreateMessage` <a name="resetCreateMessage" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetCreateMessage"></a>

```java
public void resetCreateMessage()
```

##### `resetEditableTimestamps` <a name="resetEditableTimestamps" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetEditableTimestamps"></a>

```java
public void resetEditableTimestamps()
```

##### `resetPrivateIncidents` <a name="resetPrivateIncidents" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetPrivateIncidents"></a>

```java
public void resetPrivateIncidents()
```

##### `resetPrivateIncidentsByDefault` <a name="resetPrivateIncidentsByDefault" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetPrivateIncidentsByDefault"></a>

```java
public void resetPrivateIncidentsByDefault()
```

##### `resetSlugSource` <a name="resetSlugSource" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetSlugSource"></a>

```java
public void resetSlugSource()
```

##### `resetTestIncidents` <a name="resetTestIncidents" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetTestIncidents"></a>

```java
public void resetTestIncidents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.allowIncidentDeletionInput">allowIncidentDeletionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.allowWorkflowsInput">allowWorkflowsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.createMessageInput">createMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.editableTimestampsInput">editableTimestampsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.privateIncidentsByDefaultInput">privateIncidentsByDefaultInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.privateIncidentsInput">privateIncidentsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.slugSourceInput">slugSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.testIncidentsInput">testIncidentsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.allowIncidentDeletion">allowIncidentDeletion</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.allowWorkflows">allowWorkflows</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.createMessage">createMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.editableTimestamps">editableTimestamps</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.privateIncidents">privateIncidents</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.privateIncidentsByDefault">privateIncidentsByDefault</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.slugSource">slugSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.testIncidents">testIncidents</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration">IncidentTypeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowIncidentDeletionInput`<sup>Optional</sup> <a name="allowIncidentDeletionInput" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.allowIncidentDeletionInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowIncidentDeletionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowWorkflowsInput`<sup>Optional</sup> <a name="allowWorkflowsInput" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.allowWorkflowsInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowWorkflowsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `createMessageInput`<sup>Optional</sup> <a name="createMessageInput" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.createMessageInput"></a>

```java
public java.lang.String getCreateMessageInput();
```

- *Type:* java.lang.String

---

##### `editableTimestampsInput`<sup>Optional</sup> <a name="editableTimestampsInput" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.editableTimestampsInput"></a>

```java
public java.lang.Boolean|IResolvable getEditableTimestampsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `privateIncidentsByDefaultInput`<sup>Optional</sup> <a name="privateIncidentsByDefaultInput" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.privateIncidentsByDefaultInput"></a>

```java
public java.lang.Boolean|IResolvable getPrivateIncidentsByDefaultInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `privateIncidentsInput`<sup>Optional</sup> <a name="privateIncidentsInput" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.privateIncidentsInput"></a>

```java
public java.lang.Boolean|IResolvable getPrivateIncidentsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `slugSourceInput`<sup>Optional</sup> <a name="slugSourceInput" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.slugSourceInput"></a>

```java
public java.lang.String getSlugSourceInput();
```

- *Type:* java.lang.String

---

##### `testIncidentsInput`<sup>Optional</sup> <a name="testIncidentsInput" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.testIncidentsInput"></a>

```java
public java.lang.Boolean|IResolvable getTestIncidentsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowIncidentDeletion`<sup>Required</sup> <a name="allowIncidentDeletion" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.allowIncidentDeletion"></a>

```java
public java.lang.Boolean|IResolvable getAllowIncidentDeletion();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowWorkflows`<sup>Required</sup> <a name="allowWorkflows" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.allowWorkflows"></a>

```java
public java.lang.Boolean|IResolvable getAllowWorkflows();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `createMessage`<sup>Required</sup> <a name="createMessage" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.createMessage"></a>

```java
public java.lang.String getCreateMessage();
```

- *Type:* java.lang.String

---

##### `editableTimestamps`<sup>Required</sup> <a name="editableTimestamps" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.editableTimestamps"></a>

```java
public java.lang.Boolean|IResolvable getEditableTimestamps();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `privateIncidents`<sup>Required</sup> <a name="privateIncidents" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.privateIncidents"></a>

```java
public java.lang.Boolean|IResolvable getPrivateIncidents();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `privateIncidentsByDefault`<sup>Required</sup> <a name="privateIncidentsByDefault" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.privateIncidentsByDefault"></a>

```java
public java.lang.Boolean|IResolvable getPrivateIncidentsByDefault();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `slugSource`<sup>Required</sup> <a name="slugSource" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.slugSource"></a>

```java
public java.lang.String getSlugSource();
```

- *Type:* java.lang.String

---

##### `testIncidents`<sup>Required</sup> <a name="testIncidents" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.testIncidents"></a>

```java
public java.lang.Boolean|IResolvable getTestIncidents();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|IncidentTypeConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration">IncidentTypeConfiguration</a>

---



