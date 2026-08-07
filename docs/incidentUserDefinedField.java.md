# `incidentUserDefinedField` Submodule <a name="`incidentUserDefinedField` Submodule" id="@cdktn/provider-datadog.incidentUserDefinedField"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IncidentUserDefinedField <a name="IncidentUserDefinedField" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field datadog_incident_user_defined_field}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer"></a>

```java
import io.cdktn.providers.datadog.incident_user_defined_field.IncidentUserDefinedField;

IncidentUserDefinedField.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .incidentType(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
//  .category(java.lang.String)
//  .defaultValue(java.lang.String)
//  .displayName(java.lang.String)
//  .ordinal(java.lang.String)
//  .required(java.lang.Boolean|IResolvable)
//  .tagKey(java.lang.String)
//  .validValue(IResolvable|java.util.List<IncidentUserDefinedFieldValidValue>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.incidentType">incidentType</a></code> | <code>java.lang.String</code> | The ID of the incident type this field is associated with. Changing the incident type forces a new resource. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The unique identifier of the field. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The data type of the field. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.category">category</a></code> | <code>java.lang.String</code> | The section in which the field appears: `what_happened` or `why_it_happened`. When unset, the field appears in the Attributes section. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | The default value for the field. Must be one of the valid values when `valid_values` is set. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The human-readable name shown in the UI. Defaults to a formatted version of the name if not provided. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.ordinal">ordinal</a></code> | <code>java.lang.String</code> | A decimal string representing the field's display order in the UI. Assigned by the server when not provided. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.required">required</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, users must fill out this field on incidents. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.tagKey">tagKey</a></code> | <code>java.lang.String</code> | For metric tag-type fields only, the metric tag key that powers the autocomplete options. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.validValue">validValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>></code> | valid_value block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `incidentType`<sup>Required</sup> <a name="incidentType" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.incidentType"></a>

- *Type:* java.lang.String

The ID of the incident type this field is associated with. Changing the incident type forces a new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#incident_type IncidentUserDefinedField#incident_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The unique identifier of the field.

Must start with a letter or digit and contain only letters, digits, underscores, or periods. Changing the name forces a new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#name IncidentUserDefinedField#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The data type of the field.

Changing the type forces a new resource. Valid values are `dropdown`, `multiselect`, `textbox`, `textarray`, `metrictag`, `autocomplete`, `number`, `datetime`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#type IncidentUserDefinedField#type}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.category"></a>

- *Type:* java.lang.String

The section in which the field appears: `what_happened` or `why_it_happened`. When unset, the field appears in the Attributes section.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#category IncidentUserDefinedField#category}

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.defaultValue"></a>

- *Type:* java.lang.String

The default value for the field. Must be one of the valid values when `valid_values` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#default_value IncidentUserDefinedField#default_value}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The human-readable name shown in the UI. Defaults to a formatted version of the name if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#display_name IncidentUserDefinedField#display_name}

---

##### `ordinal`<sup>Optional</sup> <a name="ordinal" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.ordinal"></a>

- *Type:* java.lang.String

A decimal string representing the field's display order in the UI. Assigned by the server when not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#ordinal IncidentUserDefinedField#ordinal}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.required"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, users must fill out this field on incidents. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#required IncidentUserDefinedField#required}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.tagKey"></a>

- *Type:* java.lang.String

For metric tag-type fields only, the metric tag key that powers the autocomplete options.

Changing the tag key forces a new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#tag_key IncidentUserDefinedField#tag_key}

---

##### `validValue`<sup>Optional</sup> <a name="validValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.validValue"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>>

valid_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#valid_value IncidentUserDefinedField#valid_value}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.putValidValue">putValidValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetCategory">resetCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetOrdinal">resetOrdinal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetValidValue">resetValidValue</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putValidValue` <a name="putValidValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.putValidValue"></a>

```java
public void putValidValue(IResolvable|java.util.List<IncidentUserDefinedFieldValidValue> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.putValidValue.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>>

---

##### `resetCategory` <a name="resetCategory" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetCategory"></a>

```java
public void resetCategory()
```

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetDefaultValue"></a>

```java
public void resetDefaultValue()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetOrdinal` <a name="resetOrdinal" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetOrdinal"></a>

```java
public void resetOrdinal()
```

##### `resetRequired` <a name="resetRequired" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetRequired"></a>

```java
public void resetRequired()
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetTagKey"></a>

```java
public void resetTagKey()
```

##### `resetValidValue` <a name="resetValidValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetValidValue"></a>

```java
public void resetValidValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IncidentUserDefinedField resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isConstruct"></a>

```java
import io.cdktn.providers.datadog.incident_user_defined_field.IncidentUserDefinedField;

IncidentUserDefinedField.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.incident_user_defined_field.IncidentUserDefinedField;

IncidentUserDefinedField.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.incident_user_defined_field.IncidentUserDefinedField;

IncidentUserDefinedField.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.incident_user_defined_field.IncidentUserDefinedField;

IncidentUserDefinedField.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IncidentUserDefinedField.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IncidentUserDefinedField resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IncidentUserDefinedField to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IncidentUserDefinedField that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IncidentUserDefinedField to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.deleted">deleted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference">IncidentUserDefinedFieldMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.modified">modified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.reserved">reserved</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.validValue">validValue</a></code> | <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList">IncidentUserDefinedFieldValidValueList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.categoryInput">categoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.defaultValueInput">defaultValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.incidentTypeInput">incidentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.ordinalInput">ordinalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.requiredInput">requiredInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.validValueInput">validValueInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.incidentType">incidentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.ordinal">ordinal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.required">required</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `deleted`<sup>Required</sup> <a name="deleted" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.deleted"></a>

```java
public java.lang.String getDeleted();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.metadata"></a>

```java
public IncidentUserDefinedFieldMetadataOutputReference getMetadata();
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference">IncidentUserDefinedFieldMetadataOutputReference</a>

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.modified"></a>

```java
public java.lang.String getModified();
```

- *Type:* java.lang.String

---

##### `reserved`<sup>Required</sup> <a name="reserved" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.reserved"></a>

```java
public IResolvable getReserved();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `validValue`<sup>Required</sup> <a name="validValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.validValue"></a>

```java
public IncidentUserDefinedFieldValidValueList getValidValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList">IncidentUserDefinedFieldValidValueList</a>

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.categoryInput"></a>

```java
public java.lang.String getCategoryInput();
```

- *Type:* java.lang.String

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.defaultValueInput"></a>

```java
public java.lang.String getDefaultValueInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `incidentTypeInput`<sup>Optional</sup> <a name="incidentTypeInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.incidentTypeInput"></a>

```java
public java.lang.String getIncidentTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ordinalInput`<sup>Optional</sup> <a name="ordinalInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.ordinalInput"></a>

```java
public java.lang.String getOrdinalInput();
```

- *Type:* java.lang.String

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.requiredInput"></a>

```java
public java.lang.Boolean|IResolvable getRequiredInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `validValueInput`<sup>Optional</sup> <a name="validValueInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.validValueInput"></a>

```java
public IResolvable|java.util.List<IncidentUserDefinedFieldValidValue> getValidValueInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>>

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.defaultValue"></a>

```java
public java.lang.String getDefaultValue();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `incidentType`<sup>Required</sup> <a name="incidentType" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.incidentType"></a>

```java
public java.lang.String getIncidentType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ordinal`<sup>Required</sup> <a name="ordinal" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.ordinal"></a>

```java
public java.lang.String getOrdinal();
```

- *Type:* java.lang.String

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.required"></a>

```java
public java.lang.Boolean|IResolvable getRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IncidentUserDefinedFieldConfig <a name="IncidentUserDefinedFieldConfig" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.incident_user_defined_field.IncidentUserDefinedFieldConfig;

IncidentUserDefinedFieldConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .incidentType(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
//  .category(java.lang.String)
//  .defaultValue(java.lang.String)
//  .displayName(java.lang.String)
//  .ordinal(java.lang.String)
//  .required(java.lang.Boolean|IResolvable)
//  .tagKey(java.lang.String)
//  .validValue(IResolvable|java.util.List<IncidentUserDefinedFieldValidValue>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.incidentType">incidentType</a></code> | <code>java.lang.String</code> | The ID of the incident type this field is associated with. Changing the incident type forces a new resource. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.name">name</a></code> | <code>java.lang.String</code> | The unique identifier of the field. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.type">type</a></code> | <code>java.lang.String</code> | The data type of the field. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.category">category</a></code> | <code>java.lang.String</code> | The section in which the field appears: `what_happened` or `why_it_happened`. When unset, the field appears in the Attributes section. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | The default value for the field. Must be one of the valid values when `valid_values` is set. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The human-readable name shown in the UI. Defaults to a formatted version of the name if not provided. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.ordinal">ordinal</a></code> | <code>java.lang.String</code> | A decimal string representing the field's display order in the UI. Assigned by the server when not provided. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.required">required</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, users must fill out this field on incidents. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | For metric tag-type fields only, the metric tag key that powers the autocomplete options. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.validValue">validValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>></code> | valid_value block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `incidentType`<sup>Required</sup> <a name="incidentType" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.incidentType"></a>

```java
public java.lang.String getIncidentType();
```

- *Type:* java.lang.String

The ID of the incident type this field is associated with. Changing the incident type forces a new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#incident_type IncidentUserDefinedField#incident_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The unique identifier of the field.

Must start with a letter or digit and contain only letters, digits, underscores, or periods. Changing the name forces a new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#name IncidentUserDefinedField#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The data type of the field.

Changing the type forces a new resource. Valid values are `dropdown`, `multiselect`, `textbox`, `textarray`, `metrictag`, `autocomplete`, `number`, `datetime`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#type IncidentUserDefinedField#type}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

The section in which the field appears: `what_happened` or `why_it_happened`. When unset, the field appears in the Attributes section.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#category IncidentUserDefinedField#category}

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.defaultValue"></a>

```java
public java.lang.String getDefaultValue();
```

- *Type:* java.lang.String

The default value for the field. Must be one of the valid values when `valid_values` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#default_value IncidentUserDefinedField#default_value}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The human-readable name shown in the UI. Defaults to a formatted version of the name if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#display_name IncidentUserDefinedField#display_name}

---

##### `ordinal`<sup>Optional</sup> <a name="ordinal" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.ordinal"></a>

```java
public java.lang.String getOrdinal();
```

- *Type:* java.lang.String

A decimal string representing the field's display order in the UI. Assigned by the server when not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#ordinal IncidentUserDefinedField#ordinal}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.required"></a>

```java
public java.lang.Boolean|IResolvable getRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, users must fill out this field on incidents. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#required IncidentUserDefinedField#required}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

For metric tag-type fields only, the metric tag key that powers the autocomplete options.

Changing the tag key forces a new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#tag_key IncidentUserDefinedField#tag_key}

---

##### `validValue`<sup>Optional</sup> <a name="validValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.validValue"></a>

```java
public IResolvable|java.util.List<IncidentUserDefinedFieldValidValue> getValidValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>>

valid_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#valid_value IncidentUserDefinedField#valid_value}

---

### IncidentUserDefinedFieldMetadata <a name="IncidentUserDefinedFieldMetadata" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadata.Initializer"></a>

```java
import io.cdktn.providers.datadog.incident_user_defined_field.IncidentUserDefinedFieldMetadata;

IncidentUserDefinedFieldMetadata.builder()
    .build();
```


### IncidentUserDefinedFieldValidValue <a name="IncidentUserDefinedFieldValidValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.Initializer"></a>

```java
import io.cdktn.providers.datadog.incident_user_defined_field.IncidentUserDefinedFieldValidValue;

IncidentUserDefinedFieldValidValue.builder()
    .displayName(java.lang.String)
    .value(java.lang.String)
//  .description(java.lang.String)
//  .shortDescription(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The human-readable display name for this value. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.value">value</a></code> | <code>java.lang.String</code> | The identifier that is stored when this option is selected. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.description">description</a></code> | <code>java.lang.String</code> | A detailed description of the valid value. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.shortDescription">shortDescription</a></code> | <code>java.lang.String</code> | A short description of the valid value. |

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The human-readable display name for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#display_name IncidentUserDefinedField#display_name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The identifier that is stored when this option is selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#value IncidentUserDefinedField#value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A detailed description of the valid value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#description IncidentUserDefinedField#description}

---

##### `shortDescription`<sup>Optional</sup> <a name="shortDescription" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.shortDescription"></a>

```java
public java.lang.String getShortDescription();
```

- *Type:* java.lang.String

A short description of the valid value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#short_description IncidentUserDefinedField#short_description}

---

## Classes <a name="Classes" id="Classes"></a>

### IncidentUserDefinedFieldMetadataOutputReference <a name="IncidentUserDefinedFieldMetadataOutputReference" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.incident_user_defined_field.IncidentUserDefinedFieldMetadataOutputReference;

new IncidentUserDefinedFieldMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchLimitParam">searchLimitParam</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchParams">searchParams</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchQueryParam">searchQueryParam</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchResultPath">searchResultPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchUrl">searchUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadata">IncidentUserDefinedFieldMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `searchLimitParam`<sup>Required</sup> <a name="searchLimitParam" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchLimitParam"></a>

```java
public java.lang.String getSearchLimitParam();
```

- *Type:* java.lang.String

---

##### `searchParams`<sup>Required</sup> <a name="searchParams" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchParams"></a>

```java
public StringMap getSearchParams();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `searchQueryParam`<sup>Required</sup> <a name="searchQueryParam" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchQueryParam"></a>

```java
public java.lang.String getSearchQueryParam();
```

- *Type:* java.lang.String

---

##### `searchResultPath`<sup>Required</sup> <a name="searchResultPath" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchResultPath"></a>

```java
public java.lang.String getSearchResultPath();
```

- *Type:* java.lang.String

---

##### `searchUrl`<sup>Required</sup> <a name="searchUrl" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchUrl"></a>

```java
public java.lang.String getSearchUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.internalValue"></a>

```java
public IncidentUserDefinedFieldMetadata getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadata">IncidentUserDefinedFieldMetadata</a>

---


### IncidentUserDefinedFieldValidValueList <a name="IncidentUserDefinedFieldValidValueList" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.Initializer"></a>

```java
import io.cdktn.providers.datadog.incident_user_defined_field.IncidentUserDefinedFieldValidValueList;

new IncidentUserDefinedFieldValidValueList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.get"></a>

```java
public IncidentUserDefinedFieldValidValueOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IncidentUserDefinedFieldValidValue> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>>

---


### IncidentUserDefinedFieldValidValueOutputReference <a name="IncidentUserDefinedFieldValidValueOutputReference" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.incident_user_defined_field.IncidentUserDefinedFieldValidValueOutputReference;

new IncidentUserDefinedFieldValidValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.resetShortDescription">resetShortDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetShortDescription` <a name="resetShortDescription" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.resetShortDescription"></a>

```java
public void resetShortDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.shortDescriptionInput">shortDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.shortDescription">shortDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `shortDescriptionInput`<sup>Optional</sup> <a name="shortDescriptionInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.shortDescriptionInput"></a>

```java
public java.lang.String getShortDescriptionInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `shortDescription`<sup>Required</sup> <a name="shortDescription" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.shortDescription"></a>

```java
public java.lang.String getShortDescription();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.internalValue"></a>

```java
public IResolvable|IncidentUserDefinedFieldValidValue getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>

---



