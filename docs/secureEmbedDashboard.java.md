# `secureEmbedDashboard` Submodule <a name="`secureEmbedDashboard` Submodule" id="@cdktn/provider-datadog.secureEmbedDashboard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecureEmbedDashboard <a name="SecureEmbedDashboard" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/secure_embed_dashboard datadog_secure_embed_dashboard}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer"></a>

```java
import io.cdktn.providers.datadog.secure_embed_dashboard.SecureEmbedDashboard;

SecureEmbedDashboard.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dashboardId(java.lang.String)
    .title(java.lang.String)
//  .globalTimeLiveSpan(java.lang.String)
//  .globalTimeSelectable(java.lang.Boolean|IResolvable)
//  .selectableTemplateVars(IResolvable|java.util.List<SecureEmbedDashboardSelectableTemplateVars>)
//  .status(java.lang.String)
//  .viewingPreferencesHighDensity(java.lang.Boolean|IResolvable)
//  .viewingPreferencesTheme(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.dashboardId">dashboardId</a></code> | <code>java.lang.String</code> | The ID of the dashboard to create a secure embed for. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.title">title</a></code> | <code>java.lang.String</code> | Title of the secure embed share. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.globalTimeLiveSpan">globalTimeLiveSpan</a></code> | <code>java.lang.String</code> | The live span for the global time, e.g. `1h`, `4h`, `1d`, `2d`, `1w`. Defaults to `"1h"`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.globalTimeSelectable">globalTimeSelectable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether viewers can change the global time range. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.selectableTemplateVars">selectableTemplateVars</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>></code> | selectable_template_vars block. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Status of the secure embed. Valid values are `active` and `paused`. Defaults to `"active"`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.viewingPreferencesHighDensity">viewingPreferencesHighDensity</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to display the dashboard in high density mode. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.viewingPreferencesTheme">viewingPreferencesTheme</a></code> | <code>java.lang.String</code> | Display theme for the embedded dashboard. Valid values are `system`, `dark`, `light`. Defaults to `"system"`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.dashboardId"></a>

- *Type:* java.lang.String

The ID of the dashboard to create a secure embed for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/secure_embed_dashboard#dashboard_id SecureEmbedDashboard#dashboard_id}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.title"></a>

- *Type:* java.lang.String

Title of the secure embed share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/secure_embed_dashboard#title SecureEmbedDashboard#title}

---

##### `globalTimeLiveSpan`<sup>Optional</sup> <a name="globalTimeLiveSpan" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.globalTimeLiveSpan"></a>

- *Type:* java.lang.String

The live span for the global time, e.g. `1h`, `4h`, `1d`, `2d`, `1w`. Defaults to `"1h"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/secure_embed_dashboard#global_time_live_span SecureEmbedDashboard#global_time_live_span}

---

##### `globalTimeSelectable`<sup>Optional</sup> <a name="globalTimeSelectable" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.globalTimeSelectable"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether viewers can change the global time range. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/secure_embed_dashboard#global_time_selectable SecureEmbedDashboard#global_time_selectable}

---

##### `selectableTemplateVars`<sup>Optional</sup> <a name="selectableTemplateVars" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.selectableTemplateVars"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>>

selectable_template_vars block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/secure_embed_dashboard#selectable_template_vars SecureEmbedDashboard#selectable_template_vars}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Status of the secure embed. Valid values are `active` and `paused`. Defaults to `"active"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/secure_embed_dashboard#status SecureEmbedDashboard#status}

---

##### `viewingPreferencesHighDensity`<sup>Optional</sup> <a name="viewingPreferencesHighDensity" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.viewingPreferencesHighDensity"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to display the dashboard in high density mode. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/secure_embed_dashboard#viewing_preferences_high_density SecureEmbedDashboard#viewing_preferences_high_density}

---

##### `viewingPreferencesTheme`<sup>Optional</sup> <a name="viewingPreferencesTheme" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.viewingPreferencesTheme"></a>

- *Type:* java.lang.String

Display theme for the embedded dashboard. Valid values are `system`, `dark`, `light`. Defaults to `"system"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/secure_embed_dashboard#viewing_preferences_theme SecureEmbedDashboard#viewing_preferences_theme}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.putSelectableTemplateVars">putSelectableTemplateVars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetGlobalTimeLiveSpan">resetGlobalTimeLiveSpan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetGlobalTimeSelectable">resetGlobalTimeSelectable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetSelectableTemplateVars">resetSelectableTemplateVars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetViewingPreferencesHighDensity">resetViewingPreferencesHighDensity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetViewingPreferencesTheme">resetViewingPreferencesTheme</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSelectableTemplateVars` <a name="putSelectableTemplateVars" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.putSelectableTemplateVars"></a>

```java
public void putSelectableTemplateVars(IResolvable|java.util.List<SecureEmbedDashboardSelectableTemplateVars> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.putSelectableTemplateVars.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>>

---

##### `resetGlobalTimeLiveSpan` <a name="resetGlobalTimeLiveSpan" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetGlobalTimeLiveSpan"></a>

```java
public void resetGlobalTimeLiveSpan()
```

##### `resetGlobalTimeSelectable` <a name="resetGlobalTimeSelectable" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetGlobalTimeSelectable"></a>

```java
public void resetGlobalTimeSelectable()
```

##### `resetSelectableTemplateVars` <a name="resetSelectableTemplateVars" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetSelectableTemplateVars"></a>

```java
public void resetSelectableTemplateVars()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetViewingPreferencesHighDensity` <a name="resetViewingPreferencesHighDensity" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetViewingPreferencesHighDensity"></a>

```java
public void resetViewingPreferencesHighDensity()
```

##### `resetViewingPreferencesTheme` <a name="resetViewingPreferencesTheme" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetViewingPreferencesTheme"></a>

```java
public void resetViewingPreferencesTheme()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecureEmbedDashboard resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isConstruct"></a>

```java
import io.cdktn.providers.datadog.secure_embed_dashboard.SecureEmbedDashboard;

SecureEmbedDashboard.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.secure_embed_dashboard.SecureEmbedDashboard;

SecureEmbedDashboard.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.secure_embed_dashboard.SecureEmbedDashboard;

SecureEmbedDashboard.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.secure_embed_dashboard.SecureEmbedDashboard;

SecureEmbedDashboard.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecureEmbedDashboard.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SecureEmbedDashboard resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecureEmbedDashboard to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecureEmbedDashboard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/secure_embed_dashboard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SecureEmbedDashboard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.credential">credential</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.selectableTemplateVars">selectableTemplateVars</a></code> | <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList">SecureEmbedDashboardSelectableTemplateVarsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.dashboardIdInput">dashboardIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeLiveSpanInput">globalTimeLiveSpanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeSelectableInput">globalTimeSelectableInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.selectableTemplateVarsInput">selectableTemplateVarsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesHighDensityInput">viewingPreferencesHighDensityInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesThemeInput">viewingPreferencesThemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.dashboardId">dashboardId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeLiveSpan">globalTimeLiveSpan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeSelectable">globalTimeSelectable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesHighDensity">viewingPreferencesHighDensity</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesTheme">viewingPreferencesTheme</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `credential`<sup>Required</sup> <a name="credential" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.credential"></a>

```java
public java.lang.String getCredential();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `selectableTemplateVars`<sup>Required</sup> <a name="selectableTemplateVars" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.selectableTemplateVars"></a>

```java
public SecureEmbedDashboardSelectableTemplateVarsList getSelectableTemplateVars();
```

- *Type:* <a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList">SecureEmbedDashboardSelectableTemplateVarsList</a>

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `dashboardIdInput`<sup>Optional</sup> <a name="dashboardIdInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.dashboardIdInput"></a>

```java
public java.lang.String getDashboardIdInput();
```

- *Type:* java.lang.String

---

##### `globalTimeLiveSpanInput`<sup>Optional</sup> <a name="globalTimeLiveSpanInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeLiveSpanInput"></a>

```java
public java.lang.String getGlobalTimeLiveSpanInput();
```

- *Type:* java.lang.String

---

##### `globalTimeSelectableInput`<sup>Optional</sup> <a name="globalTimeSelectableInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeSelectableInput"></a>

```java
public java.lang.Boolean|IResolvable getGlobalTimeSelectableInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `selectableTemplateVarsInput`<sup>Optional</sup> <a name="selectableTemplateVarsInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.selectableTemplateVarsInput"></a>

```java
public IResolvable|java.util.List<SecureEmbedDashboardSelectableTemplateVars> getSelectableTemplateVarsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `viewingPreferencesHighDensityInput`<sup>Optional</sup> <a name="viewingPreferencesHighDensityInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesHighDensityInput"></a>

```java
public java.lang.Boolean|IResolvable getViewingPreferencesHighDensityInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `viewingPreferencesThemeInput`<sup>Optional</sup> <a name="viewingPreferencesThemeInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesThemeInput"></a>

```java
public java.lang.String getViewingPreferencesThemeInput();
```

- *Type:* java.lang.String

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.dashboardId"></a>

```java
public java.lang.String getDashboardId();
```

- *Type:* java.lang.String

---

##### `globalTimeLiveSpan`<sup>Required</sup> <a name="globalTimeLiveSpan" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeLiveSpan"></a>

```java
public java.lang.String getGlobalTimeLiveSpan();
```

- *Type:* java.lang.String

---

##### `globalTimeSelectable`<sup>Required</sup> <a name="globalTimeSelectable" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeSelectable"></a>

```java
public java.lang.Boolean|IResolvable getGlobalTimeSelectable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `viewingPreferencesHighDensity`<sup>Required</sup> <a name="viewingPreferencesHighDensity" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesHighDensity"></a>

```java
public java.lang.Boolean|IResolvable getViewingPreferencesHighDensity();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `viewingPreferencesTheme`<sup>Required</sup> <a name="viewingPreferencesTheme" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesTheme"></a>

```java
public java.lang.String getViewingPreferencesTheme();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecureEmbedDashboardConfig <a name="SecureEmbedDashboardConfig" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.secure_embed_dashboard.SecureEmbedDashboardConfig;

SecureEmbedDashboardConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dashboardId(java.lang.String)
    .title(java.lang.String)
//  .globalTimeLiveSpan(java.lang.String)
//  .globalTimeSelectable(java.lang.Boolean|IResolvable)
//  .selectableTemplateVars(IResolvable|java.util.List<SecureEmbedDashboardSelectableTemplateVars>)
//  .status(java.lang.String)
//  .viewingPreferencesHighDensity(java.lang.Boolean|IResolvable)
//  .viewingPreferencesTheme(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.dashboardId">dashboardId</a></code> | <code>java.lang.String</code> | The ID of the dashboard to create a secure embed for. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.title">title</a></code> | <code>java.lang.String</code> | Title of the secure embed share. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.globalTimeLiveSpan">globalTimeLiveSpan</a></code> | <code>java.lang.String</code> | The live span for the global time, e.g. `1h`, `4h`, `1d`, `2d`, `1w`. Defaults to `"1h"`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.globalTimeSelectable">globalTimeSelectable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether viewers can change the global time range. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.selectableTemplateVars">selectableTemplateVars</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>></code> | selectable_template_vars block. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.status">status</a></code> | <code>java.lang.String</code> | Status of the secure embed. Valid values are `active` and `paused`. Defaults to `"active"`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.viewingPreferencesHighDensity">viewingPreferencesHighDensity</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to display the dashboard in high density mode. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.viewingPreferencesTheme">viewingPreferencesTheme</a></code> | <code>java.lang.String</code> | Display theme for the embedded dashboard. Valid values are `system`, `dark`, `light`. Defaults to `"system"`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.dashboardId"></a>

```java
public java.lang.String getDashboardId();
```

- *Type:* java.lang.String

The ID of the dashboard to create a secure embed for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/secure_embed_dashboard#dashboard_id SecureEmbedDashboard#dashboard_id}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Title of the secure embed share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/secure_embed_dashboard#title SecureEmbedDashboard#title}

---

##### `globalTimeLiveSpan`<sup>Optional</sup> <a name="globalTimeLiveSpan" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.globalTimeLiveSpan"></a>

```java
public java.lang.String getGlobalTimeLiveSpan();
```

- *Type:* java.lang.String

The live span for the global time, e.g. `1h`, `4h`, `1d`, `2d`, `1w`. Defaults to `"1h"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/secure_embed_dashboard#global_time_live_span SecureEmbedDashboard#global_time_live_span}

---

##### `globalTimeSelectable`<sup>Optional</sup> <a name="globalTimeSelectable" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.globalTimeSelectable"></a>

```java
public java.lang.Boolean|IResolvable getGlobalTimeSelectable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether viewers can change the global time range. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/secure_embed_dashboard#global_time_selectable SecureEmbedDashboard#global_time_selectable}

---

##### `selectableTemplateVars`<sup>Optional</sup> <a name="selectableTemplateVars" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.selectableTemplateVars"></a>

```java
public IResolvable|java.util.List<SecureEmbedDashboardSelectableTemplateVars> getSelectableTemplateVars();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>>

selectable_template_vars block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/secure_embed_dashboard#selectable_template_vars SecureEmbedDashboard#selectable_template_vars}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Status of the secure embed. Valid values are `active` and `paused`. Defaults to `"active"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/secure_embed_dashboard#status SecureEmbedDashboard#status}

---

##### `viewingPreferencesHighDensity`<sup>Optional</sup> <a name="viewingPreferencesHighDensity" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.viewingPreferencesHighDensity"></a>

```java
public java.lang.Boolean|IResolvable getViewingPreferencesHighDensity();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to display the dashboard in high density mode. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/secure_embed_dashboard#viewing_preferences_high_density SecureEmbedDashboard#viewing_preferences_high_density}

---

##### `viewingPreferencesTheme`<sup>Optional</sup> <a name="viewingPreferencesTheme" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.viewingPreferencesTheme"></a>

```java
public java.lang.String getViewingPreferencesTheme();
```

- *Type:* java.lang.String

Display theme for the embedded dashboard. Valid values are `system`, `dark`, `light`. Defaults to `"system"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/secure_embed_dashboard#viewing_preferences_theme SecureEmbedDashboard#viewing_preferences_theme}

---

### SecureEmbedDashboardSelectableTemplateVars <a name="SecureEmbedDashboardSelectableTemplateVars" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.Initializer"></a>

```java
import io.cdktn.providers.datadog.secure_embed_dashboard.SecureEmbedDashboardSelectableTemplateVars;

SecureEmbedDashboardSelectableTemplateVars.builder()
    .name(java.lang.String)
//  .defaultValues(java.util.List<java.lang.String>)
//  .prefix(java.lang.String)
//  .type(java.lang.String)
//  .visibleTags(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.name">name</a></code> | <code>java.lang.String</code> | The name of the template variable. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.defaultValues">defaultValues</a></code> | <code>java.util.List<java.lang.String></code> | The default values for this template variable. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.prefix">prefix</a></code> | <code>java.lang.String</code> | The tag prefix for this template variable. Defaults to `""`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.type">type</a></code> | <code>java.lang.String</code> | The type of the template variable. Defaults to `""`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.visibleTags">visibleTags</a></code> | <code>java.util.List<java.lang.String></code> | The visible tag values for this template variable. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the template variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/secure_embed_dashboard#name SecureEmbedDashboard#name}

---

##### `defaultValues`<sup>Optional</sup> <a name="defaultValues" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.defaultValues"></a>

```java
public java.util.List<java.lang.String> getDefaultValues();
```

- *Type:* java.util.List<java.lang.String>

The default values for this template variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/secure_embed_dashboard#default_values SecureEmbedDashboard#default_values}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

The tag prefix for this template variable. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/secure_embed_dashboard#prefix SecureEmbedDashboard#prefix}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the template variable. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/secure_embed_dashboard#type SecureEmbedDashboard#type}

---

##### `visibleTags`<sup>Optional</sup> <a name="visibleTags" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.visibleTags"></a>

```java
public java.util.List<java.lang.String> getVisibleTags();
```

- *Type:* java.util.List<java.lang.String>

The visible tag values for this template variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/resources/secure_embed_dashboard#visible_tags SecureEmbedDashboard#visible_tags}

---

## Classes <a name="Classes" id="Classes"></a>

### SecureEmbedDashboardSelectableTemplateVarsList <a name="SecureEmbedDashboardSelectableTemplateVarsList" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.Initializer"></a>

```java
import io.cdktn.providers.datadog.secure_embed_dashboard.SecureEmbedDashboardSelectableTemplateVarsList;

new SecureEmbedDashboardSelectableTemplateVarsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.get"></a>

```java
public SecureEmbedDashboardSelectableTemplateVarsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SecureEmbedDashboardSelectableTemplateVars> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>>

---


### SecureEmbedDashboardSelectableTemplateVarsOutputReference <a name="SecureEmbedDashboardSelectableTemplateVarsOutputReference" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.secure_embed_dashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference;

new SecureEmbedDashboardSelectableTemplateVarsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetDefaultValues">resetDefaultValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetVisibleTags">resetVisibleTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultValues` <a name="resetDefaultValues" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetDefaultValues"></a>

```java
public void resetDefaultValues()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetVisibleTags` <a name="resetVisibleTags" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetVisibleTags"></a>

```java
public void resetVisibleTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.defaultValuesInput">defaultValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.visibleTagsInput">visibleTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.defaultValues">defaultValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.visibleTags">visibleTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultValuesInput`<sup>Optional</sup> <a name="defaultValuesInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.defaultValuesInput"></a>

```java
public java.util.List<java.lang.String> getDefaultValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `visibleTagsInput`<sup>Optional</sup> <a name="visibleTagsInput" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.visibleTagsInput"></a>

```java
public java.util.List<java.lang.String> getVisibleTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultValues`<sup>Required</sup> <a name="defaultValues" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.defaultValues"></a>

```java
public java.util.List<java.lang.String> getDefaultValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `visibleTags`<sup>Required</sup> <a name="visibleTags" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.visibleTags"></a>

```java
public java.util.List<java.lang.String> getVisibleTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.internalValue"></a>

```java
public IResolvable|SecureEmbedDashboardSelectableTemplateVars getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>

---



