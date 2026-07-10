# `securityMonitoringCriticalAsset` Submodule <a name="`securityMonitoringCriticalAsset` Submodule" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityMonitoringCriticalAsset <a name="SecurityMonitoringCriticalAsset" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_monitoring_critical_asset datadog_security_monitoring_critical_asset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer"></a>

```java
import io.cdktn.providers.datadog.security_monitoring_critical_asset.SecurityMonitoringCriticalAsset;

SecurityMonitoringCriticalAsset.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .query(java.lang.String)
    .ruleQuery(java.lang.String)
    .severity(java.lang.String)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.query">query</a></code> | <code>java.lang.String</code> | The query used to match a critical asset and the associated signals. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.ruleQuery">ruleQuery</a></code> | <code>java.lang.String</code> | The rule query to filter which detection rules this critical asset applies to. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.severity">severity</a></code> | <code>java.lang.String</code> | The severity change applied to signals matching this critical asset. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the critical asset. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the critical asset is enabled. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A list of tags associated with the critical asset. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.query"></a>

- *Type:* java.lang.String

The query used to match a critical asset and the associated signals.

Uses the same syntax as the search bar in the Security Signals Explorer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_monitoring_critical_asset#query SecurityMonitoringCriticalAsset#query}

---

##### `ruleQuery`<sup>Required</sup> <a name="ruleQuery" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.ruleQuery"></a>

- *Type:* java.lang.String

The rule query to filter which detection rules this critical asset applies to.

Uses the same syntax as the search bar for detection rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_monitoring_critical_asset#rule_query SecurityMonitoringCriticalAsset#rule_query}

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.severity"></a>

- *Type:* java.lang.String

The severity change applied to signals matching this critical asset.

Valid values are `critical`, `high`, `medium`, `low`, `info`, `no-op`, `increase`, `decrease`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_monitoring_critical_asset#severity SecurityMonitoringCriticalAsset#severity}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the critical asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_monitoring_critical_asset#description SecurityMonitoringCriticalAsset#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the critical asset is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_monitoring_critical_asset#enabled SecurityMonitoringCriticalAsset#enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

A list of tags associated with the critical asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_monitoring_critical_asset#tags SecurityMonitoringCriticalAsset#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityMonitoringCriticalAsset resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isConstruct"></a>

```java
import io.cdktn.providers.datadog.security_monitoring_critical_asset.SecurityMonitoringCriticalAsset;

SecurityMonitoringCriticalAsset.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.security_monitoring_critical_asset.SecurityMonitoringCriticalAsset;

SecurityMonitoringCriticalAsset.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.security_monitoring_critical_asset.SecurityMonitoringCriticalAsset;

SecurityMonitoringCriticalAsset.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.security_monitoring_critical_asset.SecurityMonitoringCriticalAsset;

SecurityMonitoringCriticalAsset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecurityMonitoringCriticalAsset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SecurityMonitoringCriticalAsset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecurityMonitoringCriticalAsset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecurityMonitoringCriticalAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_monitoring_critical_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SecurityMonitoringCriticalAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.ruleQueryInput">ruleQueryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.severityInput">severityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.ruleQuery">ruleQuery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `ruleQueryInput`<sup>Optional</sup> <a name="ruleQueryInput" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.ruleQueryInput"></a>

```java
public java.lang.String getRuleQueryInput();
```

- *Type:* java.lang.String

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.severityInput"></a>

```java
public java.lang.String getSeverityInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `ruleQuery`<sup>Required</sup> <a name="ruleQuery" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.ruleQuery"></a>

```java
public java.lang.String getRuleQuery();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityMonitoringCriticalAssetConfig <a name="SecurityMonitoringCriticalAssetConfig" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.security_monitoring_critical_asset.SecurityMonitoringCriticalAssetConfig;

SecurityMonitoringCriticalAssetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .query(java.lang.String)
    .ruleQuery(java.lang.String)
    .severity(java.lang.String)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.query">query</a></code> | <code>java.lang.String</code> | The query used to match a critical asset and the associated signals. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.ruleQuery">ruleQuery</a></code> | <code>java.lang.String</code> | The rule query to filter which detection rules this critical asset applies to. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.severity">severity</a></code> | <code>java.lang.String</code> | The severity change applied to signals matching this critical asset. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the critical asset. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the critical asset is enabled. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A list of tags associated with the critical asset. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

The query used to match a critical asset and the associated signals.

Uses the same syntax as the search bar in the Security Signals Explorer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_monitoring_critical_asset#query SecurityMonitoringCriticalAsset#query}

---

##### `ruleQuery`<sup>Required</sup> <a name="ruleQuery" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.ruleQuery"></a>

```java
public java.lang.String getRuleQuery();
```

- *Type:* java.lang.String

The rule query to filter which detection rules this critical asset applies to.

Uses the same syntax as the search bar for detection rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_monitoring_critical_asset#rule_query SecurityMonitoringCriticalAsset#rule_query}

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

The severity change applied to signals matching this critical asset.

Valid values are `critical`, `high`, `medium`, `low`, `info`, `no-op`, `increase`, `decrease`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_monitoring_critical_asset#severity SecurityMonitoringCriticalAsset#severity}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the critical asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_monitoring_critical_asset#description SecurityMonitoringCriticalAsset#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the critical asset is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_monitoring_critical_asset#enabled SecurityMonitoringCriticalAsset#enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

A list of tags associated with the critical asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_monitoring_critical_asset#tags SecurityMonitoringCriticalAsset#tags}

---



