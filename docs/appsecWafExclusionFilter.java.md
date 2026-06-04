# `appsecWafExclusionFilter` Submodule <a name="`appsecWafExclusionFilter` Submodule" id="@cdktn/provider-datadog.appsecWafExclusionFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsecWafExclusionFilter <a name="AppsecWafExclusionFilter" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/appsec_waf_exclusion_filter datadog_appsec_waf_exclusion_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer"></a>

```java
import io.cdktn.providers.datadog.appsec_waf_exclusion_filter.AppsecWafExclusionFilter;

AppsecWafExclusionFilter.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .description(java.lang.String)
    .enabled(java.lang.Boolean|IResolvable)
//  .eventQuery(java.lang.String)
//  .ipList(java.util.List<java.lang.String>)
//  .onMatch(java.lang.String)
//  .parameters(java.util.List<java.lang.String>)
//  .pathGlob(java.lang.String)
//  .rulesTarget(IResolvable|java.util.List<AppsecWafExclusionFilterRulesTarget>)
//  .scope(IResolvable|java.util.List<AppsecWafExclusionFilterScope>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description for the exclusion filter. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the exclusion filter is enabled. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.eventQuery">eventQuery</a></code> | <code>java.lang.String</code> | The event query matched by the legacy exclusion filter. Cannot be created nor updated. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.ipList">ipList</a></code> | <code>java.util.List<java.lang.String></code> | The client IP addresses matched by the exclusion filter (CIDR notation is supported). |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.onMatch">onMatch</a></code> | <code>java.lang.String</code> | The action taken when the exclusion filter matches. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.parameters">parameters</a></code> | <code>java.util.List<java.lang.String></code> | A list of parameters matched by the exclusion filter in the HTTP query string and HTTP request body. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.pathGlob">pathGlob</a></code> | <code>java.lang.String</code> | The HTTP path glob expression matched by the exclusion filter. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.rulesTarget">rulesTarget</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>></code> | rules_target block. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.scope">scope</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>></code> | scope block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description for the exclusion filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/appsec_waf_exclusion_filter#description AppsecWafExclusionFilter#description}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the exclusion filter is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/appsec_waf_exclusion_filter#enabled AppsecWafExclusionFilter#enabled}

---

##### `eventQuery`<sup>Optional</sup> <a name="eventQuery" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.eventQuery"></a>

- *Type:* java.lang.String

The event query matched by the legacy exclusion filter. Cannot be created nor updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/appsec_waf_exclusion_filter#event_query AppsecWafExclusionFilter#event_query}

---

##### `ipList`<sup>Optional</sup> <a name="ipList" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.ipList"></a>

- *Type:* java.util.List<java.lang.String>

The client IP addresses matched by the exclusion filter (CIDR notation is supported).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/appsec_waf_exclusion_filter#ip_list AppsecWafExclusionFilter#ip_list}

---

##### `onMatch`<sup>Optional</sup> <a name="onMatch" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.onMatch"></a>

- *Type:* java.lang.String

The action taken when the exclusion filter matches.

When set to `monitor`, security traces are emitted but the requests are not blocked. By default, security traces are not emitted and the requests are not blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/appsec_waf_exclusion_filter#on_match AppsecWafExclusionFilter#on_match}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.parameters"></a>

- *Type:* java.util.List<java.lang.String>

A list of parameters matched by the exclusion filter in the HTTP query string and HTTP request body.

Nested parameters can be matched by joining fields with a dot character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/appsec_waf_exclusion_filter#parameters AppsecWafExclusionFilter#parameters}

---

##### `pathGlob`<sup>Optional</sup> <a name="pathGlob" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.pathGlob"></a>

- *Type:* java.lang.String

The HTTP path glob expression matched by the exclusion filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/appsec_waf_exclusion_filter#path_glob AppsecWafExclusionFilter#path_glob}

---

##### `rulesTarget`<sup>Optional</sup> <a name="rulesTarget" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.rulesTarget"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>>

rules_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/appsec_waf_exclusion_filter#rules_target AppsecWafExclusionFilter#rules_target}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.Initializer.parameter.scope"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/appsec_waf_exclusion_filter#scope AppsecWafExclusionFilter#scope}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.putRulesTarget">putRulesTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.putScope">putScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetEventQuery">resetEventQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetIpList">resetIpList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetOnMatch">resetOnMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetPathGlob">resetPathGlob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetRulesTarget">resetRulesTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetScope">resetScope</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRulesTarget` <a name="putRulesTarget" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.putRulesTarget"></a>

```java
public void putRulesTarget(IResolvable|java.util.List<AppsecWafExclusionFilterRulesTarget> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.putRulesTarget.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>>

---

##### `putScope` <a name="putScope" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.putScope"></a>

```java
public void putScope(IResolvable|java.util.List<AppsecWafExclusionFilterScope> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.putScope.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>>

---

##### `resetEventQuery` <a name="resetEventQuery" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetEventQuery"></a>

```java
public void resetEventQuery()
```

##### `resetIpList` <a name="resetIpList" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetIpList"></a>

```java
public void resetIpList()
```

##### `resetOnMatch` <a name="resetOnMatch" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetOnMatch"></a>

```java
public void resetOnMatch()
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetPathGlob` <a name="resetPathGlob" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetPathGlob"></a>

```java
public void resetPathGlob()
```

##### `resetRulesTarget` <a name="resetRulesTarget" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetRulesTarget"></a>

```java
public void resetRulesTarget()
```

##### `resetScope` <a name="resetScope" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.resetScope"></a>

```java
public void resetScope()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppsecWafExclusionFilter resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isConstruct"></a>

```java
import io.cdktn.providers.datadog.appsec_waf_exclusion_filter.AppsecWafExclusionFilter;

AppsecWafExclusionFilter.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.appsec_waf_exclusion_filter.AppsecWafExclusionFilter;

AppsecWafExclusionFilter.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.appsec_waf_exclusion_filter.AppsecWafExclusionFilter;

AppsecWafExclusionFilter.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.appsec_waf_exclusion_filter.AppsecWafExclusionFilter;

AppsecWafExclusionFilter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppsecWafExclusionFilter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AppsecWafExclusionFilter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppsecWafExclusionFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppsecWafExclusionFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/appsec_waf_exclusion_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AppsecWafExclusionFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.rulesTarget">rulesTarget</a></code> | <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList">AppsecWafExclusionFilterRulesTargetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList">AppsecWafExclusionFilterScopeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.eventQueryInput">eventQueryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.ipListInput">ipListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.onMatchInput">onMatchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.parametersInput">parametersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.pathGlobInput">pathGlobInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.rulesTargetInput">rulesTargetInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.scopeInput">scopeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.eventQuery">eventQuery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.ipList">ipList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.onMatch">onMatch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.parameters">parameters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.pathGlob">pathGlob</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `rulesTarget`<sup>Required</sup> <a name="rulesTarget" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.rulesTarget"></a>

```java
public AppsecWafExclusionFilterRulesTargetList getRulesTarget();
```

- *Type:* <a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList">AppsecWafExclusionFilterRulesTargetList</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.scope"></a>

```java
public AppsecWafExclusionFilterScopeList getScope();
```

- *Type:* <a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList">AppsecWafExclusionFilterScopeList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventQueryInput`<sup>Optional</sup> <a name="eventQueryInput" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.eventQueryInput"></a>

```java
public java.lang.String getEventQueryInput();
```

- *Type:* java.lang.String

---

##### `ipListInput`<sup>Optional</sup> <a name="ipListInput" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.ipListInput"></a>

```java
public java.util.List<java.lang.String> getIpListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `onMatchInput`<sup>Optional</sup> <a name="onMatchInput" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.onMatchInput"></a>

```java
public java.lang.String getOnMatchInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.parametersInput"></a>

```java
public java.util.List<java.lang.String> getParametersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pathGlobInput`<sup>Optional</sup> <a name="pathGlobInput" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.pathGlobInput"></a>

```java
public java.lang.String getPathGlobInput();
```

- *Type:* java.lang.String

---

##### `rulesTargetInput`<sup>Optional</sup> <a name="rulesTargetInput" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.rulesTargetInput"></a>

```java
public IResolvable|java.util.List<AppsecWafExclusionFilterRulesTarget> getRulesTargetInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>>

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.scopeInput"></a>

```java
public IResolvable|java.util.List<AppsecWafExclusionFilterScope> getScopeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventQuery`<sup>Required</sup> <a name="eventQuery" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.eventQuery"></a>

```java
public java.lang.String getEventQuery();
```

- *Type:* java.lang.String

---

##### `ipList`<sup>Required</sup> <a name="ipList" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.ipList"></a>

```java
public java.util.List<java.lang.String> getIpList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `onMatch`<sup>Required</sup> <a name="onMatch" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.onMatch"></a>

```java
public java.lang.String getOnMatch();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.parameters"></a>

```java
public java.util.List<java.lang.String> getParameters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pathGlob`<sup>Required</sup> <a name="pathGlob" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.pathGlob"></a>

```java
public java.lang.String getPathGlob();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilter.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppsecWafExclusionFilterConfig <a name="AppsecWafExclusionFilterConfig" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.appsec_waf_exclusion_filter.AppsecWafExclusionFilterConfig;

AppsecWafExclusionFilterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .description(java.lang.String)
    .enabled(java.lang.Boolean|IResolvable)
//  .eventQuery(java.lang.String)
//  .ipList(java.util.List<java.lang.String>)
//  .onMatch(java.lang.String)
//  .parameters(java.util.List<java.lang.String>)
//  .pathGlob(java.lang.String)
//  .rulesTarget(IResolvable|java.util.List<AppsecWafExclusionFilterRulesTarget>)
//  .scope(IResolvable|java.util.List<AppsecWafExclusionFilterScope>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description for the exclusion filter. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the exclusion filter is enabled. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.eventQuery">eventQuery</a></code> | <code>java.lang.String</code> | The event query matched by the legacy exclusion filter. Cannot be created nor updated. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.ipList">ipList</a></code> | <code>java.util.List<java.lang.String></code> | The client IP addresses matched by the exclusion filter (CIDR notation is supported). |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.onMatch">onMatch</a></code> | <code>java.lang.String</code> | The action taken when the exclusion filter matches. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.parameters">parameters</a></code> | <code>java.util.List<java.lang.String></code> | A list of parameters matched by the exclusion filter in the HTTP query string and HTTP request body. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.pathGlob">pathGlob</a></code> | <code>java.lang.String</code> | The HTTP path glob expression matched by the exclusion filter. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.rulesTarget">rulesTarget</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>></code> | rules_target block. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.scope">scope</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>></code> | scope block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description for the exclusion filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/appsec_waf_exclusion_filter#description AppsecWafExclusionFilter#description}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the exclusion filter is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/appsec_waf_exclusion_filter#enabled AppsecWafExclusionFilter#enabled}

---

##### `eventQuery`<sup>Optional</sup> <a name="eventQuery" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.eventQuery"></a>

```java
public java.lang.String getEventQuery();
```

- *Type:* java.lang.String

The event query matched by the legacy exclusion filter. Cannot be created nor updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/appsec_waf_exclusion_filter#event_query AppsecWafExclusionFilter#event_query}

---

##### `ipList`<sup>Optional</sup> <a name="ipList" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.ipList"></a>

```java
public java.util.List<java.lang.String> getIpList();
```

- *Type:* java.util.List<java.lang.String>

The client IP addresses matched by the exclusion filter (CIDR notation is supported).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/appsec_waf_exclusion_filter#ip_list AppsecWafExclusionFilter#ip_list}

---

##### `onMatch`<sup>Optional</sup> <a name="onMatch" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.onMatch"></a>

```java
public java.lang.String getOnMatch();
```

- *Type:* java.lang.String

The action taken when the exclusion filter matches.

When set to `monitor`, security traces are emitted but the requests are not blocked. By default, security traces are not emitted and the requests are not blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/appsec_waf_exclusion_filter#on_match AppsecWafExclusionFilter#on_match}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.parameters"></a>

```java
public java.util.List<java.lang.String> getParameters();
```

- *Type:* java.util.List<java.lang.String>

A list of parameters matched by the exclusion filter in the HTTP query string and HTTP request body.

Nested parameters can be matched by joining fields with a dot character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/appsec_waf_exclusion_filter#parameters AppsecWafExclusionFilter#parameters}

---

##### `pathGlob`<sup>Optional</sup> <a name="pathGlob" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.pathGlob"></a>

```java
public java.lang.String getPathGlob();
```

- *Type:* java.lang.String

The HTTP path glob expression matched by the exclusion filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/appsec_waf_exclusion_filter#path_glob AppsecWafExclusionFilter#path_glob}

---

##### `rulesTarget`<sup>Optional</sup> <a name="rulesTarget" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.rulesTarget"></a>

```java
public IResolvable|java.util.List<AppsecWafExclusionFilterRulesTarget> getRulesTarget();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>>

rules_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/appsec_waf_exclusion_filter#rules_target AppsecWafExclusionFilter#rules_target}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterConfig.property.scope"></a>

```java
public IResolvable|java.util.List<AppsecWafExclusionFilterScope> getScope();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/appsec_waf_exclusion_filter#scope AppsecWafExclusionFilter#scope}

---

### AppsecWafExclusionFilterRulesTarget <a name="AppsecWafExclusionFilterRulesTarget" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget.Initializer"></a>

```java
import io.cdktn.providers.datadog.appsec_waf_exclusion_filter.AppsecWafExclusionFilterRulesTarget;

AppsecWafExclusionFilterRulesTarget.builder()
//  .ruleId(java.lang.String)
//  .tags(AppsecWafExclusionFilterRulesTargetTags)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget.property.ruleId">ruleId</a></code> | <code>java.lang.String</code> | Target a single WAF rule based on its identifier. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags">AppsecWafExclusionFilterRulesTargetTags</a></code> | tags block. |

---

##### `ruleId`<sup>Optional</sup> <a name="ruleId" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget.property.ruleId"></a>

```java
public java.lang.String getRuleId();
```

- *Type:* java.lang.String

Target a single WAF rule based on its identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/appsec_waf_exclusion_filter#rule_id AppsecWafExclusionFilter#rule_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget.property.tags"></a>

```java
public AppsecWafExclusionFilterRulesTargetTags getTags();
```

- *Type:* <a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags">AppsecWafExclusionFilterRulesTargetTags</a>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/appsec_waf_exclusion_filter#tags AppsecWafExclusionFilter#tags}

---

### AppsecWafExclusionFilterRulesTargetTags <a name="AppsecWafExclusionFilterRulesTargetTags" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags.Initializer"></a>

```java
import io.cdktn.providers.datadog.appsec_waf_exclusion_filter.AppsecWafExclusionFilterRulesTargetTags;

AppsecWafExclusionFilterRulesTargetTags.builder()
//  .category(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags.property.category">category</a></code> | <code>java.lang.String</code> | The category of the targeted WAF rules. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags.property.type">type</a></code> | <code>java.lang.String</code> | The type of the targeted WAF rules. |

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

The category of the targeted WAF rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/appsec_waf_exclusion_filter#category AppsecWafExclusionFilter#category}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the targeted WAF rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/appsec_waf_exclusion_filter#type AppsecWafExclusionFilter#type}

---

### AppsecWafExclusionFilterScope <a name="AppsecWafExclusionFilterScope" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope.Initializer"></a>

```java
import io.cdktn.providers.datadog.appsec_waf_exclusion_filter.AppsecWafExclusionFilterScope;

AppsecWafExclusionFilterScope.builder()
//  .env(java.lang.String)
//  .service(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope.property.env">env</a></code> | <code>java.lang.String</code> | Deploy on this environment. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope.property.service">service</a></code> | <code>java.lang.String</code> | Deploy on this service. |

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope.property.env"></a>

```java
public java.lang.String getEnv();
```

- *Type:* java.lang.String

Deploy on this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/appsec_waf_exclusion_filter#env AppsecWafExclusionFilter#env}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Deploy on this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/appsec_waf_exclusion_filter#service AppsecWafExclusionFilter#service}

---

## Classes <a name="Classes" id="Classes"></a>

### AppsecWafExclusionFilterRulesTargetList <a name="AppsecWafExclusionFilterRulesTargetList" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.Initializer"></a>

```java
import io.cdktn.providers.datadog.appsec_waf_exclusion_filter.AppsecWafExclusionFilterRulesTargetList;

new AppsecWafExclusionFilterRulesTargetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.get"></a>

```java
public AppsecWafExclusionFilterRulesTargetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AppsecWafExclusionFilterRulesTarget> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>>

---


### AppsecWafExclusionFilterRulesTargetOutputReference <a name="AppsecWafExclusionFilterRulesTargetOutputReference" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.appsec_waf_exclusion_filter.AppsecWafExclusionFilterRulesTargetOutputReference;

new AppsecWafExclusionFilterRulesTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.resetRuleId">resetRuleId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.putTags"></a>

```java
public void putTags(AppsecWafExclusionFilterRulesTargetTags value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags">AppsecWafExclusionFilterRulesTargetTags</a>

---

##### `resetRuleId` <a name="resetRuleId" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.resetRuleId"></a>

```java
public void resetRuleId()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference">AppsecWafExclusionFilterRulesTargetTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.ruleIdInput">ruleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags">AppsecWafExclusionFilterRulesTargetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.ruleId">ruleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.tags"></a>

```java
public AppsecWafExclusionFilterRulesTargetTagsOutputReference getTags();
```

- *Type:* <a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference">AppsecWafExclusionFilterRulesTargetTagsOutputReference</a>

---

##### `ruleIdInput`<sup>Optional</sup> <a name="ruleIdInput" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.ruleIdInput"></a>

```java
public java.lang.String getRuleIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.tagsInput"></a>

```java
public IResolvable|AppsecWafExclusionFilterRulesTargetTags getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags">AppsecWafExclusionFilterRulesTargetTags</a>

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.ruleId"></a>

```java
public java.lang.String getRuleId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsecWafExclusionFilterRulesTarget getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTarget">AppsecWafExclusionFilterRulesTarget</a>

---


### AppsecWafExclusionFilterRulesTargetTagsOutputReference <a name="AppsecWafExclusionFilterRulesTargetTagsOutputReference" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.appsec_waf_exclusion_filter.AppsecWafExclusionFilterRulesTargetTagsOutputReference;

new AppsecWafExclusionFilterRulesTargetTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.resetCategory">resetCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCategory` <a name="resetCategory" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.resetCategory"></a>

```java
public void resetCategory()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.categoryInput">categoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags">AppsecWafExclusionFilterRulesTargetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.categoryInput"></a>

```java
public java.lang.String getCategoryInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsecWafExclusionFilterRulesTargetTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterRulesTargetTags">AppsecWafExclusionFilterRulesTargetTags</a>

---


### AppsecWafExclusionFilterScopeList <a name="AppsecWafExclusionFilterScopeList" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.Initializer"></a>

```java
import io.cdktn.providers.datadog.appsec_waf_exclusion_filter.AppsecWafExclusionFilterScopeList;

new AppsecWafExclusionFilterScopeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.get"></a>

```java
public AppsecWafExclusionFilterScopeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AppsecWafExclusionFilterScope> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>>

---


### AppsecWafExclusionFilterScopeOutputReference <a name="AppsecWafExclusionFilterScopeOutputReference" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.appsec_waf_exclusion_filter.AppsecWafExclusionFilterScopeOutputReference;

new AppsecWafExclusionFilterScopeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.resetService">resetService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnv` <a name="resetEnv" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.resetEnv"></a>

```java
public void resetEnv()
```

##### `resetService` <a name="resetService" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.resetService"></a>

```java
public void resetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.envInput">envInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.env">env</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.envInput"></a>

```java
public java.lang.String getEnvInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.env"></a>

```java
public java.lang.String getEnv();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScopeOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsecWafExclusionFilterScope getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.appsecWafExclusionFilter.AppsecWafExclusionFilterScope">AppsecWafExclusionFilterScope</a>

---



