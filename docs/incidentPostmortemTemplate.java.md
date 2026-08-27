# `incidentPostmortemTemplate` Submodule <a name="`incidentPostmortemTemplate` Submodule" id="@cdktn/provider-datadog.incidentPostmortemTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IncidentPostmortemTemplate <a name="IncidentPostmortemTemplate" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template datadog_incident_postmortem_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer"></a>

```java
import io.cdktn.providers.datadog.incident_postmortem_template.IncidentPostmortemTemplate;

IncidentPostmortemTemplate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .incidentType(java.lang.String)
    .name(java.lang.String)
//  .confluencePostmortemSettings(IncidentPostmortemTemplateConfluencePostmortemSettings)
//  .content(java.lang.String)
//  .googleDocsPostmortemSettings(IncidentPostmortemTemplateGoogleDocsPostmortemSettings)
//  .isDefault(java.lang.Boolean|IResolvable)
//  .location(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.incidentType">incidentType</a></code> | <code>java.lang.String</code> | The ID of the incident type this template is associated with. Immutable after creation. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the template. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.confluencePostmortemSettings">confluencePostmortemSettings</a></code> | <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings">IncidentPostmortemTemplateConfluencePostmortemSettings</a></code> | confluence_postmortem_settings block. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.content">content</a></code> | <code>java.lang.String</code> | The templated content of the postmortem, supporting Markdown and incident template variables. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.googleDocsPostmortemSettings">googleDocsPostmortemSettings</a></code> | <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings">IncidentPostmortemTemplateGoogleDocsPostmortemSettings</a></code> | google_docs_postmortem_settings block. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.isDefault">isDefault</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether this template is a default for its incident type. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location where the postmortem is created and stored. Valid values are: datadog_notebooks, confluence, google_docs. Defaults to datadog_notebooks. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `incidentType`<sup>Required</sup> <a name="incidentType" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.incidentType"></a>

- *Type:* java.lang.String

The ID of the incident type this template is associated with. Immutable after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#incident_type IncidentPostmortemTemplate#incident_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#name IncidentPostmortemTemplate#name}

---

##### `confluencePostmortemSettings`<sup>Optional</sup> <a name="confluencePostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.confluencePostmortemSettings"></a>

- *Type:* <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings">IncidentPostmortemTemplateConfluencePostmortemSettings</a>

confluence_postmortem_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#confluence_postmortem_settings IncidentPostmortemTemplate#confluence_postmortem_settings}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.content"></a>

- *Type:* java.lang.String

The templated content of the postmortem, supporting Markdown and incident template variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#content IncidentPostmortemTemplate#content}

---

##### `googleDocsPostmortemSettings`<sup>Optional</sup> <a name="googleDocsPostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.googleDocsPostmortemSettings"></a>

- *Type:* <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings">IncidentPostmortemTemplateGoogleDocsPostmortemSettings</a>

google_docs_postmortem_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#google_docs_postmortem_settings IncidentPostmortemTemplate#google_docs_postmortem_settings}

---

##### `isDefault`<sup>Optional</sup> <a name="isDefault" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.isDefault"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether this template is a default for its incident type.

The API stores a timestamp; the effective default for an incident type is the template with the most recent default timestamp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#is_default IncidentPostmortemTemplate#is_default}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location where the postmortem is created and stored. Valid values are: datadog_notebooks, confluence, google_docs. Defaults to datadog_notebooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#location IncidentPostmortemTemplate#location}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.putConfluencePostmortemSettings">putConfluencePostmortemSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.putGoogleDocsPostmortemSettings">putGoogleDocsPostmortemSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetConfluencePostmortemSettings">resetConfluencePostmortemSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetGoogleDocsPostmortemSettings">resetGoogleDocsPostmortemSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetIsDefault">resetIsDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetLocation">resetLocation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfluencePostmortemSettings` <a name="putConfluencePostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.putConfluencePostmortemSettings"></a>

```java
public void putConfluencePostmortemSettings(IncidentPostmortemTemplateConfluencePostmortemSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.putConfluencePostmortemSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings">IncidentPostmortemTemplateConfluencePostmortemSettings</a>

---

##### `putGoogleDocsPostmortemSettings` <a name="putGoogleDocsPostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.putGoogleDocsPostmortemSettings"></a>

```java
public void putGoogleDocsPostmortemSettings(IncidentPostmortemTemplateGoogleDocsPostmortemSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.putGoogleDocsPostmortemSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings">IncidentPostmortemTemplateGoogleDocsPostmortemSettings</a>

---

##### `resetConfluencePostmortemSettings` <a name="resetConfluencePostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetConfluencePostmortemSettings"></a>

```java
public void resetConfluencePostmortemSettings()
```

##### `resetContent` <a name="resetContent" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetContent"></a>

```java
public void resetContent()
```

##### `resetGoogleDocsPostmortemSettings` <a name="resetGoogleDocsPostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetGoogleDocsPostmortemSettings"></a>

```java
public void resetGoogleDocsPostmortemSettings()
```

##### `resetIsDefault` <a name="resetIsDefault" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetIsDefault"></a>

```java
public void resetIsDefault()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetLocation"></a>

```java
public void resetLocation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IncidentPostmortemTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isConstruct"></a>

```java
import io.cdktn.providers.datadog.incident_postmortem_template.IncidentPostmortemTemplate;

IncidentPostmortemTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.incident_postmortem_template.IncidentPostmortemTemplate;

IncidentPostmortemTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.incident_postmortem_template.IncidentPostmortemTemplate;

IncidentPostmortemTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.incident_postmortem_template.IncidentPostmortemTemplate;

IncidentPostmortemTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IncidentPostmortemTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IncidentPostmortemTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IncidentPostmortemTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IncidentPostmortemTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IncidentPostmortemTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.confluencePostmortemSettings">confluencePostmortemSettings</a></code> | <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference">IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.googleDocsPostmortemSettings">googleDocsPostmortemSettings</a></code> | <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference">IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.lastModifiedByUser">lastModifiedByUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.modified">modified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.confluencePostmortemSettingsInput">confluencePostmortemSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings">IncidentPostmortemTemplateConfluencePostmortemSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.googleDocsPostmortemSettingsInput">googleDocsPostmortemSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings">IncidentPostmortemTemplateGoogleDocsPostmortemSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.incidentTypeInput">incidentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.isDefaultInput">isDefaultInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.incidentType">incidentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.isDefault">isDefault</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `confluencePostmortemSettings`<sup>Required</sup> <a name="confluencePostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.confluencePostmortemSettings"></a>

```java
public IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference getConfluencePostmortemSettings();
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference">IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference</a>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `googleDocsPostmortemSettings`<sup>Required</sup> <a name="googleDocsPostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.googleDocsPostmortemSettings"></a>

```java
public IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference getGoogleDocsPostmortemSettings();
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference">IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModifiedByUser`<sup>Required</sup> <a name="lastModifiedByUser" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.lastModifiedByUser"></a>

```java
public java.lang.String getLastModifiedByUser();
```

- *Type:* java.lang.String

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.modified"></a>

```java
public java.lang.String getModified();
```

- *Type:* java.lang.String

---

##### `confluencePostmortemSettingsInput`<sup>Optional</sup> <a name="confluencePostmortemSettingsInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.confluencePostmortemSettingsInput"></a>

```java
public IResolvable|IncidentPostmortemTemplateConfluencePostmortemSettings getConfluencePostmortemSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings">IncidentPostmortemTemplateConfluencePostmortemSettings</a>

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `googleDocsPostmortemSettingsInput`<sup>Optional</sup> <a name="googleDocsPostmortemSettingsInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.googleDocsPostmortemSettingsInput"></a>

```java
public IResolvable|IncidentPostmortemTemplateGoogleDocsPostmortemSettings getGoogleDocsPostmortemSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings">IncidentPostmortemTemplateGoogleDocsPostmortemSettings</a>

---

##### `incidentTypeInput`<sup>Optional</sup> <a name="incidentTypeInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.incidentTypeInput"></a>

```java
public java.lang.String getIncidentTypeInput();
```

- *Type:* java.lang.String

---

##### `isDefaultInput`<sup>Optional</sup> <a name="isDefaultInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.isDefaultInput"></a>

```java
public java.lang.Boolean|IResolvable getIsDefaultInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `incidentType`<sup>Required</sup> <a name="incidentType" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.incidentType"></a>

```java
public java.lang.String getIncidentType();
```

- *Type:* java.lang.String

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.isDefault"></a>

```java
public java.lang.Boolean|IResolvable getIsDefault();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IncidentPostmortemTemplateConfig <a name="IncidentPostmortemTemplateConfig" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.incident_postmortem_template.IncidentPostmortemTemplateConfig;

IncidentPostmortemTemplateConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .incidentType(java.lang.String)
    .name(java.lang.String)
//  .confluencePostmortemSettings(IncidentPostmortemTemplateConfluencePostmortemSettings)
//  .content(java.lang.String)
//  .googleDocsPostmortemSettings(IncidentPostmortemTemplateGoogleDocsPostmortemSettings)
//  .isDefault(java.lang.Boolean|IResolvable)
//  .location(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.incidentType">incidentType</a></code> | <code>java.lang.String</code> | The ID of the incident type this template is associated with. Immutable after creation. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the template. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.confluencePostmortemSettings">confluencePostmortemSettings</a></code> | <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings">IncidentPostmortemTemplateConfluencePostmortemSettings</a></code> | confluence_postmortem_settings block. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.content">content</a></code> | <code>java.lang.String</code> | The templated content of the postmortem, supporting Markdown and incident template variables. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.googleDocsPostmortemSettings">googleDocsPostmortemSettings</a></code> | <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings">IncidentPostmortemTemplateGoogleDocsPostmortemSettings</a></code> | google_docs_postmortem_settings block. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.isDefault">isDefault</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether this template is a default for its incident type. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location where the postmortem is created and stored. Valid values are: datadog_notebooks, confluence, google_docs. Defaults to datadog_notebooks. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `incidentType`<sup>Required</sup> <a name="incidentType" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.incidentType"></a>

```java
public java.lang.String getIncidentType();
```

- *Type:* java.lang.String

The ID of the incident type this template is associated with. Immutable after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#incident_type IncidentPostmortemTemplate#incident_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#name IncidentPostmortemTemplate#name}

---

##### `confluencePostmortemSettings`<sup>Optional</sup> <a name="confluencePostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.confluencePostmortemSettings"></a>

```java
public IncidentPostmortemTemplateConfluencePostmortemSettings getConfluencePostmortemSettings();
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings">IncidentPostmortemTemplateConfluencePostmortemSettings</a>

confluence_postmortem_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#confluence_postmortem_settings IncidentPostmortemTemplate#confluence_postmortem_settings}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

The templated content of the postmortem, supporting Markdown and incident template variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#content IncidentPostmortemTemplate#content}

---

##### `googleDocsPostmortemSettings`<sup>Optional</sup> <a name="googleDocsPostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.googleDocsPostmortemSettings"></a>

```java
public IncidentPostmortemTemplateGoogleDocsPostmortemSettings getGoogleDocsPostmortemSettings();
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings">IncidentPostmortemTemplateGoogleDocsPostmortemSettings</a>

google_docs_postmortem_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#google_docs_postmortem_settings IncidentPostmortemTemplate#google_docs_postmortem_settings}

---

##### `isDefault`<sup>Optional</sup> <a name="isDefault" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.isDefault"></a>

```java
public java.lang.Boolean|IResolvable getIsDefault();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether this template is a default for its incident type.

The API stores a timestamp; the effective default for an incident type is the template with the most recent default timestamp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#is_default IncidentPostmortemTemplate#is_default}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location where the postmortem is created and stored. Valid values are: datadog_notebooks, confluence, google_docs. Defaults to datadog_notebooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#location IncidentPostmortemTemplate#location}

---

### IncidentPostmortemTemplateConfluencePostmortemSettings <a name="IncidentPostmortemTemplateConfluencePostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings.Initializer"></a>

```java
import io.cdktn.providers.datadog.incident_postmortem_template.IncidentPostmortemTemplateConfluencePostmortemSettings;

IncidentPostmortemTemplateConfluencePostmortemSettings.builder()
//  .accountId(java.lang.String)
//  .parentId(java.lang.String)
//  .spaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The ID of the Confluence account, a Datadog connected-account UUID (e.g. `3f9b1c2a-8d4e-4a11-9c2f-0b7e5d6a1f23`). |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings.property.parentId">parentId</a></code> | <code>java.lang.String</code> | The ID of the parent Confluence page under which postmortems are created: a numeric page ID (e.g. `393217`), not a page path. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings.property.spaceId">spaceId</a></code> | <code>java.lang.String</code> | The Confluence space key (e.g. `ENG`), not a numeric space ID. |

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The ID of the Confluence account, a Datadog connected-account UUID (e.g. `3f9b1c2a-8d4e-4a11-9c2f-0b7e5d6a1f23`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#account_id IncidentPostmortemTemplate#account_id}

---

##### `parentId`<sup>Optional</sup> <a name="parentId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings.property.parentId"></a>

```java
public java.lang.String getParentId();
```

- *Type:* java.lang.String

The ID of the parent Confluence page under which postmortems are created: a numeric page ID (e.g. `393217`), not a page path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#parent_id IncidentPostmortemTemplate#parent_id}

---

##### `spaceId`<sup>Optional</sup> <a name="spaceId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings.property.spaceId"></a>

```java
public java.lang.String getSpaceId();
```

- *Type:* java.lang.String

The Confluence space key (e.g. `ENG`), not a numeric space ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#space_id IncidentPostmortemTemplate#space_id}

---

### IncidentPostmortemTemplateGoogleDocsPostmortemSettings <a name="IncidentPostmortemTemplateGoogleDocsPostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings.Initializer"></a>

```java
import io.cdktn.providers.datadog.incident_postmortem_template.IncidentPostmortemTemplateGoogleDocsPostmortemSettings;

IncidentPostmortemTemplateGoogleDocsPostmortemSettings.builder()
//  .accountId(java.lang.String)
//  .parentFolderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The ID of the Google Drive account, a Datadog connected-account UUID (e.g. `a1b2c3d4-e5f6-4789-8abc-1234567890ab`). |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings.property.parentFolderId">parentFolderId</a></code> | <code>java.lang.String</code> | The Google Drive folder ID where postmortems are created, taken from the folder URL (e.g. `1eCqLAKQqRHt49J2aqQLGUcnPMzGHkt2B`). |

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The ID of the Google Drive account, a Datadog connected-account UUID (e.g. `a1b2c3d4-e5f6-4789-8abc-1234567890ab`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#account_id IncidentPostmortemTemplate#account_id}

---

##### `parentFolderId`<sup>Optional</sup> <a name="parentFolderId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings.property.parentFolderId"></a>

```java
public java.lang.String getParentFolderId();
```

- *Type:* java.lang.String

The Google Drive folder ID where postmortems are created, taken from the folder URL (e.g. `1eCqLAKQqRHt49J2aqQLGUcnPMzGHkt2B`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#parent_folder_id IncidentPostmortemTemplate#parent_folder_id}

---

## Classes <a name="Classes" id="Classes"></a>

### IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference <a name="IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.incident_postmortem_template.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference;

new IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resetParentId">resetParentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resetSpaceId">resetSpaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetParentId` <a name="resetParentId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resetParentId"></a>

```java
public void resetParentId()
```

##### `resetSpaceId` <a name="resetSpaceId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resetSpaceId"></a>

```java
public void resetSpaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.parentIdInput">parentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.spaceIdInput">spaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.parentId">parentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.spaceId">spaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings">IncidentPostmortemTemplateConfluencePostmortemSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `parentIdInput`<sup>Optional</sup> <a name="parentIdInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.parentIdInput"></a>

```java
public java.lang.String getParentIdInput();
```

- *Type:* java.lang.String

---

##### `spaceIdInput`<sup>Optional</sup> <a name="spaceIdInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.spaceIdInput"></a>

```java
public java.lang.String getSpaceIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.parentId"></a>

```java
public java.lang.String getParentId();
```

- *Type:* java.lang.String

---

##### `spaceId`<sup>Required</sup> <a name="spaceId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.spaceId"></a>

```java
public java.lang.String getSpaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|IncidentPostmortemTemplateConfluencePostmortemSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings">IncidentPostmortemTemplateConfluencePostmortemSettings</a>

---


### IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference <a name="IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.incident_postmortem_template.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference;

new IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.resetParentFolderId">resetParentFolderId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetParentFolderId` <a name="resetParentFolderId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.resetParentFolderId"></a>

```java
public void resetParentFolderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.parentFolderIdInput">parentFolderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.parentFolderId">parentFolderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings">IncidentPostmortemTemplateGoogleDocsPostmortemSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `parentFolderIdInput`<sup>Optional</sup> <a name="parentFolderIdInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.parentFolderIdInput"></a>

```java
public java.lang.String getParentFolderIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `parentFolderId`<sup>Required</sup> <a name="parentFolderId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.parentFolderId"></a>

```java
public java.lang.String getParentFolderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|IncidentPostmortemTemplateGoogleDocsPostmortemSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings">IncidentPostmortemTemplateGoogleDocsPostmortemSettings</a>

---



