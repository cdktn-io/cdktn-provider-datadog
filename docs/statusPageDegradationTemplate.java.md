# `statusPageDegradationTemplate` Submodule <a name="`statusPageDegradationTemplate` Submodule" id="@cdktn/provider-datadog.statusPageDegradationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StatusPageDegradationTemplate <a name="StatusPageDegradationTemplate" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template datadog_status_page_degradation_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer"></a>

```java
import io.cdktn.providers.datadog.status_page_degradation_template.StatusPageDegradationTemplate;

StatusPageDegradationTemplate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .pageId(java.lang.String)
//  .componentsAffected(IResolvable|java.util.List<StatusPageDegradationTemplateComponentsAffected>)
//  .degradationTitle(java.lang.String)
//  .updates(IResolvable|java.util.List<StatusPageDegradationTemplateUpdates>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the degradation template. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.pageId">pageId</a></code> | <code>java.lang.String</code> | The ID of the status page this degradation template belongs to. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.componentsAffected">componentsAffected</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>></code> | The components affected by a degradation created from this template. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.degradationTitle">degradationTitle</a></code> | <code>java.lang.String</code> | The title used for a degradation created from this template. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.updates">updates</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>></code> | The pre-filled updates for a degradation created from this template. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the degradation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#name StatusPageDegradationTemplate#name}

---

##### `pageId`<sup>Required</sup> <a name="pageId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.pageId"></a>

- *Type:* java.lang.String

The ID of the status page this degradation template belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#page_id StatusPageDegradationTemplate#page_id}

---

##### `componentsAffected`<sup>Optional</sup> <a name="componentsAffected" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.componentsAffected"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>>

The components affected by a degradation created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#components_affected StatusPageDegradationTemplate#components_affected}

---

##### `degradationTitle`<sup>Optional</sup> <a name="degradationTitle" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.degradationTitle"></a>

- *Type:* java.lang.String

The title used for a degradation created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#degradation_title StatusPageDegradationTemplate#degradation_title}

---

##### `updates`<sup>Optional</sup> <a name="updates" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.updates"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>>

The pre-filled updates for a degradation created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#updates StatusPageDegradationTemplate#updates}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.putComponentsAffected">putComponentsAffected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.putUpdates">putUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetComponentsAffected">resetComponentsAffected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetDegradationTitle">resetDegradationTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetUpdates">resetUpdates</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putComponentsAffected` <a name="putComponentsAffected" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.putComponentsAffected"></a>

```java
public void putComponentsAffected(IResolvable|java.util.List<StatusPageDegradationTemplateComponentsAffected> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.putComponentsAffected.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>>

---

##### `putUpdates` <a name="putUpdates" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.putUpdates"></a>

```java
public void putUpdates(IResolvable|java.util.List<StatusPageDegradationTemplateUpdates> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.putUpdates.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>>

---

##### `resetComponentsAffected` <a name="resetComponentsAffected" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetComponentsAffected"></a>

```java
public void resetComponentsAffected()
```

##### `resetDegradationTitle` <a name="resetDegradationTitle" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetDegradationTitle"></a>

```java
public void resetDegradationTitle()
```

##### `resetUpdates` <a name="resetUpdates" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetUpdates"></a>

```java
public void resetUpdates()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StatusPageDegradationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isConstruct"></a>

```java
import io.cdktn.providers.datadog.status_page_degradation_template.StatusPageDegradationTemplate;

StatusPageDegradationTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.status_page_degradation_template.StatusPageDegradationTemplate;

StatusPageDegradationTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.status_page_degradation_template.StatusPageDegradationTemplate;

StatusPageDegradationTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.status_page_degradation_template.StatusPageDegradationTemplate;

StatusPageDegradationTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StatusPageDegradationTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a StatusPageDegradationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StatusPageDegradationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StatusPageDegradationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the StatusPageDegradationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.componentsAffected">componentsAffected</a></code> | <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList">StatusPageDegradationTemplateComponentsAffectedList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.updates">updates</a></code> | <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList">StatusPageDegradationTemplateUpdatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.componentsAffectedInput">componentsAffectedInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.degradationTitleInput">degradationTitleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.pageIdInput">pageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.updatesInput">updatesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.degradationTitle">degradationTitle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.pageId">pageId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `componentsAffected`<sup>Required</sup> <a name="componentsAffected" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.componentsAffected"></a>

```java
public StatusPageDegradationTemplateComponentsAffectedList getComponentsAffected();
```

- *Type:* <a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList">StatusPageDegradationTemplateComponentsAffectedList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.modifiedAt"></a>

```java
public java.lang.String getModifiedAt();
```

- *Type:* java.lang.String

---

##### `updates`<sup>Required</sup> <a name="updates" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.updates"></a>

```java
public StatusPageDegradationTemplateUpdatesList getUpdates();
```

- *Type:* <a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList">StatusPageDegradationTemplateUpdatesList</a>

---

##### `componentsAffectedInput`<sup>Optional</sup> <a name="componentsAffectedInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.componentsAffectedInput"></a>

```java
public IResolvable|java.util.List<StatusPageDegradationTemplateComponentsAffected> getComponentsAffectedInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>>

---

##### `degradationTitleInput`<sup>Optional</sup> <a name="degradationTitleInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.degradationTitleInput"></a>

```java
public java.lang.String getDegradationTitleInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pageIdInput`<sup>Optional</sup> <a name="pageIdInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.pageIdInput"></a>

```java
public java.lang.String getPageIdInput();
```

- *Type:* java.lang.String

---

##### `updatesInput`<sup>Optional</sup> <a name="updatesInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.updatesInput"></a>

```java
public IResolvable|java.util.List<StatusPageDegradationTemplateUpdates> getUpdatesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>>

---

##### `degradationTitle`<sup>Required</sup> <a name="degradationTitle" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.degradationTitle"></a>

```java
public java.lang.String getDegradationTitle();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pageId`<sup>Required</sup> <a name="pageId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.pageId"></a>

```java
public java.lang.String getPageId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StatusPageDegradationTemplateComponentsAffected <a name="StatusPageDegradationTemplateComponentsAffected" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected.Initializer"></a>

```java
import io.cdktn.providers.datadog.status_page_degradation_template.StatusPageDegradationTemplateComponentsAffected;

StatusPageDegradationTemplateComponentsAffected.builder()
    .id(java.lang.String)
    .status(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected.property.id">id</a></code> | <code>java.lang.String</code> | The ID of the affected component. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected.property.status">status</a></code> | <code>java.lang.String</code> | The pre-filled status for this component. Valid values are: operational, degraded, partial_outage, major_outage. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected.property.name">name</a></code> | <code>java.lang.String</code> | The name of the affected component. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID of the affected component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#id StatusPageDegradationTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

The pre-filled status for this component. Valid values are: operational, degraded, partial_outage, major_outage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#status StatusPageDegradationTemplate#status}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the affected component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#name StatusPageDegradationTemplate#name}

---

### StatusPageDegradationTemplateConfig <a name="StatusPageDegradationTemplateConfig" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.status_page_degradation_template.StatusPageDegradationTemplateConfig;

StatusPageDegradationTemplateConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .pageId(java.lang.String)
//  .componentsAffected(IResolvable|java.util.List<StatusPageDegradationTemplateComponentsAffected>)
//  .degradationTitle(java.lang.String)
//  .updates(IResolvable|java.util.List<StatusPageDegradationTemplateUpdates>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the degradation template. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.pageId">pageId</a></code> | <code>java.lang.String</code> | The ID of the status page this degradation template belongs to. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.componentsAffected">componentsAffected</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>></code> | The components affected by a degradation created from this template. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.degradationTitle">degradationTitle</a></code> | <code>java.lang.String</code> | The title used for a degradation created from this template. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.updates">updates</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>></code> | The pre-filled updates for a degradation created from this template. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the degradation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#name StatusPageDegradationTemplate#name}

---

##### `pageId`<sup>Required</sup> <a name="pageId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.pageId"></a>

```java
public java.lang.String getPageId();
```

- *Type:* java.lang.String

The ID of the status page this degradation template belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#page_id StatusPageDegradationTemplate#page_id}

---

##### `componentsAffected`<sup>Optional</sup> <a name="componentsAffected" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.componentsAffected"></a>

```java
public IResolvable|java.util.List<StatusPageDegradationTemplateComponentsAffected> getComponentsAffected();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>>

The components affected by a degradation created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#components_affected StatusPageDegradationTemplate#components_affected}

---

##### `degradationTitle`<sup>Optional</sup> <a name="degradationTitle" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.degradationTitle"></a>

```java
public java.lang.String getDegradationTitle();
```

- *Type:* java.lang.String

The title used for a degradation created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#degradation_title StatusPageDegradationTemplate#degradation_title}

---

##### `updates`<sup>Optional</sup> <a name="updates" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.updates"></a>

```java
public IResolvable|java.util.List<StatusPageDegradationTemplateUpdates> getUpdates();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>>

The pre-filled updates for a degradation created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#updates StatusPageDegradationTemplate#updates}

---

### StatusPageDegradationTemplateUpdates <a name="StatusPageDegradationTemplateUpdates" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates.Initializer"></a>

```java
import io.cdktn.providers.datadog.status_page_degradation_template.StatusPageDegradationTemplateUpdates;

StatusPageDegradationTemplateUpdates.builder()
    .status(java.lang.String)
//  .message(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates.property.status">status</a></code> | <code>java.lang.String</code> | The pre-filled degradation status for this update. Valid values are: investigating, identified, monitoring, resolved. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates.property.message">message</a></code> | <code>java.lang.String</code> | The pre-filled message for this update. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

The pre-filled degradation status for this update. Valid values are: investigating, identified, monitoring, resolved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#status StatusPageDegradationTemplate#status}

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

The pre-filled message for this update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#message StatusPageDegradationTemplate#message}

---

## Classes <a name="Classes" id="Classes"></a>

### StatusPageDegradationTemplateComponentsAffectedList <a name="StatusPageDegradationTemplateComponentsAffectedList" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.Initializer"></a>

```java
import io.cdktn.providers.datadog.status_page_degradation_template.StatusPageDegradationTemplateComponentsAffectedList;

new StatusPageDegradationTemplateComponentsAffectedList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.get"></a>

```java
public StatusPageDegradationTemplateComponentsAffectedOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.property.internalValue"></a>

```java
public IResolvable|java.util.List<StatusPageDegradationTemplateComponentsAffected> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>>

---


### StatusPageDegradationTemplateComponentsAffectedOutputReference <a name="StatusPageDegradationTemplateComponentsAffectedOutputReference" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.status_page_degradation_template.StatusPageDegradationTemplateComponentsAffectedOutputReference;

new StatusPageDegradationTemplateComponentsAffectedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.internalValue"></a>

```java
public IResolvable|StatusPageDegradationTemplateComponentsAffected getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>

---


### StatusPageDegradationTemplateUpdatesList <a name="StatusPageDegradationTemplateUpdatesList" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.Initializer"></a>

```java
import io.cdktn.providers.datadog.status_page_degradation_template.StatusPageDegradationTemplateUpdatesList;

new StatusPageDegradationTemplateUpdatesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.get"></a>

```java
public StatusPageDegradationTemplateUpdatesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<StatusPageDegradationTemplateUpdates> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>>

---


### StatusPageDegradationTemplateUpdatesOutputReference <a name="StatusPageDegradationTemplateUpdatesOutputReference" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.status_page_degradation_template.StatusPageDegradationTemplateUpdatesOutputReference;

new StatusPageDegradationTemplateUpdatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.resetMessage">resetMessage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessage` <a name="resetMessage" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.resetMessage"></a>

```java
public void resetMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.messageInput">messageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.messageInput"></a>

```java
public java.lang.String getMessageInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.internalValue"></a>

```java
public IResolvable|StatusPageDegradationTemplateUpdates getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>

---



