# `statusPage` Submodule <a name="`statusPage` Submodule" id="@cdktn/provider-datadog.statusPage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StatusPage <a name="StatusPage" id="@cdktn/provider-datadog.statusPage.StatusPage"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page datadog_status_page}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer"></a>

```java
import io.cdktn.providers.datadog.status_page.StatusPage;

StatusPage.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domainPrefix(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
    .visualizationType(java.lang.String)
//  .companyLogo(java.lang.String)
//  .emailHeaderImage(java.lang.String)
//  .favicon(java.lang.String)
//  .slackAppIcon(java.lang.String)
//  .slackSubscriptionsEnabled(java.lang.Boolean|IResolvable)
//  .subscriptionsEnabled(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.domainPrefix">domainPrefix</a></code> | <code>java.lang.String</code> | The subdomain prefix used to build the status page's URL. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the status page. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of the status page. Valid values are: public, internal. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.visualizationType">visualizationType</a></code> | <code>java.lang.String</code> | How component statuses are visualized on the page. Valid values are: bars_and_uptime_percentage, bars_only, component_name_only. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.companyLogo">companyLogo</a></code> | <code>java.lang.String</code> | The company logo displayed on the status page. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.emailHeaderImage">emailHeaderImage</a></code> | <code>java.lang.String</code> | The header image included in subscriber emails. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.favicon">favicon</a></code> | <code>java.lang.String</code> | The favicon displayed for the status page. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.slackAppIcon">slackAppIcon</a></code> | <code>java.lang.String</code> | The icon used for the status page's Slack app integration. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.slackSubscriptionsEnabled">slackSubscriptionsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether Slack subscriber notifications are enabled for the status page. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.subscriptionsEnabled">subscriptionsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether subscriber notifications are enabled for the status page. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domainPrefix`<sup>Required</sup> <a name="domainPrefix" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.domainPrefix"></a>

- *Type:* java.lang.String

The subdomain prefix used to build the status page's URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#domain_prefix StatusPage#domain_prefix}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the status page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#name StatusPage#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of the status page. Valid values are: public, internal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#type StatusPage#type}

---

##### `visualizationType`<sup>Required</sup> <a name="visualizationType" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.visualizationType"></a>

- *Type:* java.lang.String

How component statuses are visualized on the page. Valid values are: bars_and_uptime_percentage, bars_only, component_name_only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#visualization_type StatusPage#visualization_type}

---

##### `companyLogo`<sup>Optional</sup> <a name="companyLogo" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.companyLogo"></a>

- *Type:* java.lang.String

The company logo displayed on the status page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#company_logo StatusPage#company_logo}

---

##### `emailHeaderImage`<sup>Optional</sup> <a name="emailHeaderImage" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.emailHeaderImage"></a>

- *Type:* java.lang.String

The header image included in subscriber emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#email_header_image StatusPage#email_header_image}

---

##### `favicon`<sup>Optional</sup> <a name="favicon" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.favicon"></a>

- *Type:* java.lang.String

The favicon displayed for the status page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#favicon StatusPage#favicon}

---

##### `slackAppIcon`<sup>Optional</sup> <a name="slackAppIcon" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.slackAppIcon"></a>

- *Type:* java.lang.String

The icon used for the status page's Slack app integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#slack_app_icon StatusPage#slack_app_icon}

---

##### `slackSubscriptionsEnabled`<sup>Optional</sup> <a name="slackSubscriptionsEnabled" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.slackSubscriptionsEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether Slack subscriber notifications are enabled for the status page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#slack_subscriptions_enabled StatusPage#slack_subscriptions_enabled}

---

##### `subscriptionsEnabled`<sup>Optional</sup> <a name="subscriptionsEnabled" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.subscriptionsEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether subscriber notifications are enabled for the status page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#subscriptions_enabled StatusPage#subscriptions_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.resetCompanyLogo">resetCompanyLogo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.resetEmailHeaderImage">resetEmailHeaderImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.resetFavicon">resetFavicon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.resetSlackAppIcon">resetSlackAppIcon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.resetSlackSubscriptionsEnabled">resetSlackSubscriptionsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.resetSubscriptionsEnabled">resetSubscriptionsEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.statusPage.StatusPage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.statusPage.StatusPage.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.statusPage.StatusPage.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.statusPage.StatusPage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.statusPage.StatusPage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.statusPage.StatusPage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.statusPage.StatusPage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.statusPage.StatusPage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.statusPage.StatusPage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.statusPage.StatusPage.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.statusPage.StatusPage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.statusPage.StatusPage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.statusPage.StatusPage.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.statusPage.StatusPage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.statusPage.StatusPage.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.statusPage.StatusPage.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPage.StatusPage.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPage.StatusPage.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPage.StatusPage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.statusPage.StatusPage.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPage.StatusPage.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.statusPage.StatusPage.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.statusPage.StatusPage.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.statusPage.StatusPage.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.statusPage.StatusPage.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPage.StatusPage.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCompanyLogo` <a name="resetCompanyLogo" id="@cdktn/provider-datadog.statusPage.StatusPage.resetCompanyLogo"></a>

```java
public void resetCompanyLogo()
```

##### `resetEmailHeaderImage` <a name="resetEmailHeaderImage" id="@cdktn/provider-datadog.statusPage.StatusPage.resetEmailHeaderImage"></a>

```java
public void resetEmailHeaderImage()
```

##### `resetFavicon` <a name="resetFavicon" id="@cdktn/provider-datadog.statusPage.StatusPage.resetFavicon"></a>

```java
public void resetFavicon()
```

##### `resetSlackAppIcon` <a name="resetSlackAppIcon" id="@cdktn/provider-datadog.statusPage.StatusPage.resetSlackAppIcon"></a>

```java
public void resetSlackAppIcon()
```

##### `resetSlackSubscriptionsEnabled` <a name="resetSlackSubscriptionsEnabled" id="@cdktn/provider-datadog.statusPage.StatusPage.resetSlackSubscriptionsEnabled"></a>

```java
public void resetSlackSubscriptionsEnabled()
```

##### `resetSubscriptionsEnabled` <a name="resetSubscriptionsEnabled" id="@cdktn/provider-datadog.statusPage.StatusPage.resetSubscriptionsEnabled"></a>

```java
public void resetSubscriptionsEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StatusPage resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.statusPage.StatusPage.isConstruct"></a>

```java
import io.cdktn.providers.datadog.status_page.StatusPage;

StatusPage.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPage.StatusPage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.statusPage.StatusPage.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.status_page.StatusPage;

StatusPage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPage.StatusPage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.statusPage.StatusPage.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.status_page.StatusPage;

StatusPage.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPage.StatusPage.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.statusPage.StatusPage.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.status_page.StatusPage;

StatusPage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StatusPage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a StatusPage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.statusPage.StatusPage.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.statusPage.StatusPage.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StatusPage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.statusPage.StatusPage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StatusPage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPage.StatusPage.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the StatusPage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.customDomain">customDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.customDomainEnabled">customDomainEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.pageUrl">pageUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.companyLogoInput">companyLogoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.domainPrefixInput">domainPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.emailHeaderImageInput">emailHeaderImageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.faviconInput">faviconInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.slackAppIconInput">slackAppIconInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.slackSubscriptionsEnabledInput">slackSubscriptionsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.subscriptionsEnabledInput">subscriptionsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.visualizationTypeInput">visualizationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.companyLogo">companyLogo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.domainPrefix">domainPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.emailHeaderImage">emailHeaderImage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.favicon">favicon</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.slackAppIcon">slackAppIcon</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.slackSubscriptionsEnabled">slackSubscriptionsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.subscriptionsEnabled">subscriptionsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.visualizationType">visualizationType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.statusPage.StatusPage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.statusPage.StatusPage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.statusPage.StatusPage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.statusPage.StatusPage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.statusPage.StatusPage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.statusPage.StatusPage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.statusPage.StatusPage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.statusPage.StatusPage.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.statusPage.StatusPage.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.statusPage.StatusPage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.statusPage.StatusPage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.statusPage.StatusPage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPage.StatusPage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.statusPage.StatusPage.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-datadog.statusPage.StatusPage.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `customDomain`<sup>Required</sup> <a name="customDomain" id="@cdktn/provider-datadog.statusPage.StatusPage.property.customDomain"></a>

```java
public java.lang.String getCustomDomain();
```

- *Type:* java.lang.String

---

##### `customDomainEnabled`<sup>Required</sup> <a name="customDomainEnabled" id="@cdktn/provider-datadog.statusPage.StatusPage.property.customDomainEnabled"></a>

```java
public IResolvable getCustomDomainEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.statusPage.StatusPage.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPage.StatusPage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-datadog.statusPage.StatusPage.property.modifiedAt"></a>

```java
public java.lang.String getModifiedAt();
```

- *Type:* java.lang.String

---

##### `pageUrl`<sup>Required</sup> <a name="pageUrl" id="@cdktn/provider-datadog.statusPage.StatusPage.property.pageUrl"></a>

```java
public java.lang.String getPageUrl();
```

- *Type:* java.lang.String

---

##### `companyLogoInput`<sup>Optional</sup> <a name="companyLogoInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.companyLogoInput"></a>

```java
public java.lang.String getCompanyLogoInput();
```

- *Type:* java.lang.String

---

##### `domainPrefixInput`<sup>Optional</sup> <a name="domainPrefixInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.domainPrefixInput"></a>

```java
public java.lang.String getDomainPrefixInput();
```

- *Type:* java.lang.String

---

##### `emailHeaderImageInput`<sup>Optional</sup> <a name="emailHeaderImageInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.emailHeaderImageInput"></a>

```java
public java.lang.String getEmailHeaderImageInput();
```

- *Type:* java.lang.String

---

##### `faviconInput`<sup>Optional</sup> <a name="faviconInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.faviconInput"></a>

```java
public java.lang.String getFaviconInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `slackAppIconInput`<sup>Optional</sup> <a name="slackAppIconInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.slackAppIconInput"></a>

```java
public java.lang.String getSlackAppIconInput();
```

- *Type:* java.lang.String

---

##### `slackSubscriptionsEnabledInput`<sup>Optional</sup> <a name="slackSubscriptionsEnabledInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.slackSubscriptionsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getSlackSubscriptionsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `subscriptionsEnabledInput`<sup>Optional</sup> <a name="subscriptionsEnabledInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.subscriptionsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getSubscriptionsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `visualizationTypeInput`<sup>Optional</sup> <a name="visualizationTypeInput" id="@cdktn/provider-datadog.statusPage.StatusPage.property.visualizationTypeInput"></a>

```java
public java.lang.String getVisualizationTypeInput();
```

- *Type:* java.lang.String

---

##### `companyLogo`<sup>Required</sup> <a name="companyLogo" id="@cdktn/provider-datadog.statusPage.StatusPage.property.companyLogo"></a>

```java
public java.lang.String getCompanyLogo();
```

- *Type:* java.lang.String

---

##### `domainPrefix`<sup>Required</sup> <a name="domainPrefix" id="@cdktn/provider-datadog.statusPage.StatusPage.property.domainPrefix"></a>

```java
public java.lang.String getDomainPrefix();
```

- *Type:* java.lang.String

---

##### `emailHeaderImage`<sup>Required</sup> <a name="emailHeaderImage" id="@cdktn/provider-datadog.statusPage.StatusPage.property.emailHeaderImage"></a>

```java
public java.lang.String getEmailHeaderImage();
```

- *Type:* java.lang.String

---

##### `favicon`<sup>Required</sup> <a name="favicon" id="@cdktn/provider-datadog.statusPage.StatusPage.property.favicon"></a>

```java
public java.lang.String getFavicon();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.statusPage.StatusPage.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `slackAppIcon`<sup>Required</sup> <a name="slackAppIcon" id="@cdktn/provider-datadog.statusPage.StatusPage.property.slackAppIcon"></a>

```java
public java.lang.String getSlackAppIcon();
```

- *Type:* java.lang.String

---

##### `slackSubscriptionsEnabled`<sup>Required</sup> <a name="slackSubscriptionsEnabled" id="@cdktn/provider-datadog.statusPage.StatusPage.property.slackSubscriptionsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSlackSubscriptionsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `subscriptionsEnabled`<sup>Required</sup> <a name="subscriptionsEnabled" id="@cdktn/provider-datadog.statusPage.StatusPage.property.subscriptionsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSubscriptionsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.statusPage.StatusPage.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `visualizationType`<sup>Required</sup> <a name="visualizationType" id="@cdktn/provider-datadog.statusPage.StatusPage.property.visualizationType"></a>

```java
public java.lang.String getVisualizationType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.statusPage.StatusPage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StatusPageConfig <a name="StatusPageConfig" id="@cdktn/provider-datadog.statusPage.StatusPageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.status_page.StatusPageConfig;

StatusPageConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domainPrefix(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
    .visualizationType(java.lang.String)
//  .companyLogo(java.lang.String)
//  .emailHeaderImage(java.lang.String)
//  .favicon(java.lang.String)
//  .slackAppIcon(java.lang.String)
//  .slackSubscriptionsEnabled(java.lang.Boolean|IResolvable)
//  .subscriptionsEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.domainPrefix">domainPrefix</a></code> | <code>java.lang.String</code> | The subdomain prefix used to build the status page's URL. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the status page. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of the status page. Valid values are: public, internal. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.visualizationType">visualizationType</a></code> | <code>java.lang.String</code> | How component statuses are visualized on the page. Valid values are: bars_and_uptime_percentage, bars_only, component_name_only. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.companyLogo">companyLogo</a></code> | <code>java.lang.String</code> | The company logo displayed on the status page. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.emailHeaderImage">emailHeaderImage</a></code> | <code>java.lang.String</code> | The header image included in subscriber emails. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.favicon">favicon</a></code> | <code>java.lang.String</code> | The favicon displayed for the status page. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.slackAppIcon">slackAppIcon</a></code> | <code>java.lang.String</code> | The icon used for the status page's Slack app integration. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.slackSubscriptionsEnabled">slackSubscriptionsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether Slack subscriber notifications are enabled for the status page. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.subscriptionsEnabled">subscriptionsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether subscriber notifications are enabled for the status page. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domainPrefix`<sup>Required</sup> <a name="domainPrefix" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.domainPrefix"></a>

```java
public java.lang.String getDomainPrefix();
```

- *Type:* java.lang.String

The subdomain prefix used to build the status page's URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#domain_prefix StatusPage#domain_prefix}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the status page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#name StatusPage#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the status page. Valid values are: public, internal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#type StatusPage#type}

---

##### `visualizationType`<sup>Required</sup> <a name="visualizationType" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.visualizationType"></a>

```java
public java.lang.String getVisualizationType();
```

- *Type:* java.lang.String

How component statuses are visualized on the page. Valid values are: bars_and_uptime_percentage, bars_only, component_name_only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#visualization_type StatusPage#visualization_type}

---

##### `companyLogo`<sup>Optional</sup> <a name="companyLogo" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.companyLogo"></a>

```java
public java.lang.String getCompanyLogo();
```

- *Type:* java.lang.String

The company logo displayed on the status page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#company_logo StatusPage#company_logo}

---

##### `emailHeaderImage`<sup>Optional</sup> <a name="emailHeaderImage" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.emailHeaderImage"></a>

```java
public java.lang.String getEmailHeaderImage();
```

- *Type:* java.lang.String

The header image included in subscriber emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#email_header_image StatusPage#email_header_image}

---

##### `favicon`<sup>Optional</sup> <a name="favicon" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.favicon"></a>

```java
public java.lang.String getFavicon();
```

- *Type:* java.lang.String

The favicon displayed for the status page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#favicon StatusPage#favicon}

---

##### `slackAppIcon`<sup>Optional</sup> <a name="slackAppIcon" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.slackAppIcon"></a>

```java
public java.lang.String getSlackAppIcon();
```

- *Type:* java.lang.String

The icon used for the status page's Slack app integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#slack_app_icon StatusPage#slack_app_icon}

---

##### `slackSubscriptionsEnabled`<sup>Optional</sup> <a name="slackSubscriptionsEnabled" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.slackSubscriptionsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSlackSubscriptionsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether Slack subscriber notifications are enabled for the status page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#slack_subscriptions_enabled StatusPage#slack_subscriptions_enabled}

---

##### `subscriptionsEnabled`<sup>Optional</sup> <a name="subscriptionsEnabled" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.subscriptionsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSubscriptionsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether subscriber notifications are enabled for the status page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#subscriptions_enabled StatusPage#subscriptions_enabled}

---



