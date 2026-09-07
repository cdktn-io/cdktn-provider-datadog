# `tagRule` Submodule <a name="`tagRule` Submodule" id="@cdktn/provider-datadog.tagRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TagRule <a name="TagRule" id="@cdktn/provider-datadog.tagRule.TagRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule datadog_tag_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer"></a>

```java
import io.cdktn.providers.datadog.tag_rule.TagRule;

TagRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .ruleType(java.lang.String)
    .scope(java.lang.String)
    .source(java.lang.String)
    .tagKey(java.lang.String)
    .tagValuePatterns(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean|IResolvable)
//  .forceBlockingOnCreate(java.lang.Boolean|IResolvable)
//  .hardDelete(java.lang.Boolean|IResolvable)
//  .negated(java.lang.Boolean|IResolvable)
//  .required(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Human-readable name for the tag rule. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.ruleType">ruleType</a></code> | <code>java.lang.String</code> | How the rule is enforced. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.scope">scope</a></code> | <code>java.lang.String</code> | The scope the rule applies within. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.source">source</a></code> | <code>java.lang.String</code> | The telemetry source that the tag rule applies to. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.tagKey">tagKey</a></code> | <code>java.lang.String</code> | The tag key that the rule governs (for example, `service`). |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.tagValuePatterns">tagValuePatterns</a></code> | <code>java.util.List<java.lang.String></code> | One or more patterns that valid values for the tag key must match. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the rule is currently enforced. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.forceBlockingOnCreate">forceBlockingOnCreate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set to `true` to allow creating a rule with `rule_type` set to `blocking`. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.hardDelete">hardDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether destroying this resource permanently deletes the tag rule. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.negated">negated</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When `true`, the rule matches tag values that do NOT match any of the supplied patterns. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.required">required</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When `true`, telemetry without this tag is treated as a violation. Defaults to `false`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Human-readable name for the tag rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#name TagRule#name}

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.ruleType"></a>

- *Type:* java.lang.String

How the rule is enforced.

`surfacing` only highlights non-compliant telemetry, while `blocking` rejects telemetry that violates the rule. The API only accepts `surfacing` at creation time, so creating a rule directly as `blocking` requires `force_blocking_on_create` to be set to `true`. Using `blocking` at all requires blocking tag rules to be enabled for your organization; otherwise the API returns `403 permission denied`. Valid values are `blocking`, `surfacing`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#rule_type TagRule#rule_type}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.scope"></a>

- *Type:* java.lang.String

The scope the rule applies within.

Typically an environment, team, or organization-level identifier used to limit where the rule is enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#scope TagRule#scope}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.source"></a>

- *Type:* java.lang.String

The telemetry source that the tag rule applies to.

This field cannot be updated after creation; changing it forces a new resource. Valid values are `logs`, `spans`, `metrics`, `rum`, `feed`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#source TagRule#source}

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.tagKey"></a>

- *Type:* java.lang.String

The tag key that the rule governs (for example, `service`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#tag_key TagRule#tag_key}

---

##### `tagValuePatterns`<sup>Required</sup> <a name="tagValuePatterns" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.tagValuePatterns"></a>

- *Type:* java.util.List<java.lang.String>

One or more patterns that valid values for the tag key must match.

At least one pattern is required. These are not regular expressions: the API restricts pattern characters to `A-Za-z0-9_:-.,/*`, with `*` acting as a wildcard. A pattern made up only of wildcards (for example a bare `*`) is rejected by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#tag_value_patterns TagRule#tag_value_patterns}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the rule is currently enforced. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#enabled TagRule#enabled}

---

##### `forceBlockingOnCreate`<sup>Optional</sup> <a name="forceBlockingOnCreate" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.forceBlockingOnCreate"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set to `true` to allow creating a rule with `rule_type` set to `blocking`.

The Datadog API only accepts `surfacing` at creation time, so the provider creates the rule as `surfacing` and then immediately updates it to `blocking`, which makes the create non-atomic: if the update fails, a `surfacing` rule is left behind and the resource is marked tainted. This field is only read during creation and is not sent to the API; changing it afterwards produces a diff that has no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#force_blocking_on_create TagRule#force_blocking_on_create}

---

##### `hardDelete`<sup>Optional</sup> <a name="hardDelete" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.hardDelete"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether destroying this resource permanently deletes the tag rule.

When set to `false` the rule is soft-deleted instead, which keeps it recoverable and preserves its historical compliance score data. This field is only read during deletion and is not sent to the API on create or update. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#hard_delete TagRule#hard_delete}

---

##### `negated`<sup>Optional</sup> <a name="negated" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.negated"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When `true`, the rule matches tag values that do NOT match any of the supplied patterns. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#negated TagRule#negated}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.required"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When `true`, telemetry without this tag is treated as a violation. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#required TagRule#required}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.resetForceBlockingOnCreate">resetForceBlockingOnCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.resetHardDelete">resetHardDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.resetNegated">resetNegated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.resetRequired">resetRequired</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.tagRule.TagRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.tagRule.TagRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.tagRule.TagRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.tagRule.TagRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.tagRule.TagRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.tagRule.TagRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.tagRule.TagRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.tagRule.TagRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.tagRule.TagRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.tagRule.TagRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.tagRule.TagRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.tagRule.TagRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.tagRule.TagRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.tagRule.TagRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.tagRule.TagRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagRule.TagRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.tagRule.TagRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagRule.TagRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.tagRule.TagRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagRule.TagRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.tagRule.TagRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagRule.TagRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.tagRule.TagRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagRule.TagRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.tagRule.TagRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagRule.TagRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.tagRule.TagRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagRule.TagRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.tagRule.TagRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagRule.TagRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.tagRule.TagRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagRule.TagRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.tagRule.TagRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.tagRule.TagRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.tagRule.TagRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.tagRule.TagRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.tagRule.TagRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagRule.TagRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.tagRule.TagRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.tagRule.TagRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.tagRule.TagRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.tagRule.TagRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.tagRule.TagRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.tagRule.TagRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.tagRule.TagRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.tagRule.TagRule.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetForceBlockingOnCreate` <a name="resetForceBlockingOnCreate" id="@cdktn/provider-datadog.tagRule.TagRule.resetForceBlockingOnCreate"></a>

```java
public void resetForceBlockingOnCreate()
```

##### `resetHardDelete` <a name="resetHardDelete" id="@cdktn/provider-datadog.tagRule.TagRule.resetHardDelete"></a>

```java
public void resetHardDelete()
```

##### `resetNegated` <a name="resetNegated" id="@cdktn/provider-datadog.tagRule.TagRule.resetNegated"></a>

```java
public void resetNegated()
```

##### `resetRequired` <a name="resetRequired" id="@cdktn/provider-datadog.tagRule.TagRule.resetRequired"></a>

```java
public void resetRequired()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TagRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.tagRule.TagRule.isConstruct"></a>

```java
import io.cdktn.providers.datadog.tag_rule.TagRule;

TagRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.tagRule.TagRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.tagRule.TagRule.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.tag_rule.TagRule;

TagRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.tagRule.TagRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.tagRule.TagRule.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.tag_rule.TagRule;

TagRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.tagRule.TagRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.tagRule.TagRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.tag_rule.TagRule;

TagRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TagRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a TagRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.tagRule.TagRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.tagRule.TagRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TagRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.tagRule.TagRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TagRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.tagRule.TagRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the TagRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.modifiedBy">modifiedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.forceBlockingOnCreateInput">forceBlockingOnCreateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.hardDeleteInput">hardDeleteInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.negatedInput">negatedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.requiredInput">requiredInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.ruleTypeInput">ruleTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.tagValuePatternsInput">tagValuePatternsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.forceBlockingOnCreate">forceBlockingOnCreate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.hardDelete">hardDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.negated">negated</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.required">required</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.ruleType">ruleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.tagValuePatterns">tagValuePatterns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.tagRule.TagRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.tagRule.TagRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.tagRule.TagRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.tagRule.TagRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.tagRule.TagRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.tagRule.TagRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.tagRule.TagRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.tagRule.TagRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.tagRule.TagRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.tagRule.TagRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.tagRule.TagRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.tagRule.TagRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.tagRule.TagRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.tagRule.TagRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-datadog.tagRule.TagRule.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-datadog.tagRule.TagRule.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.tagRule.TagRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-datadog.tagRule.TagRule.property.modifiedAt"></a>

```java
public java.lang.String getModifiedAt();
```

- *Type:* java.lang.String

---

##### `modifiedBy`<sup>Required</sup> <a name="modifiedBy" id="@cdktn/provider-datadog.tagRule.TagRule.property.modifiedBy"></a>

```java
public java.lang.String getModifiedBy();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-datadog.tagRule.TagRule.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.tagRule.TagRule.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `forceBlockingOnCreateInput`<sup>Optional</sup> <a name="forceBlockingOnCreateInput" id="@cdktn/provider-datadog.tagRule.TagRule.property.forceBlockingOnCreateInput"></a>

```java
public java.lang.Boolean|IResolvable getForceBlockingOnCreateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `hardDeleteInput`<sup>Optional</sup> <a name="hardDeleteInput" id="@cdktn/provider-datadog.tagRule.TagRule.property.hardDeleteInput"></a>

```java
public java.lang.Boolean|IResolvable getHardDeleteInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.tagRule.TagRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `negatedInput`<sup>Optional</sup> <a name="negatedInput" id="@cdktn/provider-datadog.tagRule.TagRule.property.negatedInput"></a>

```java
public java.lang.Boolean|IResolvable getNegatedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktn/provider-datadog.tagRule.TagRule.property.requiredInput"></a>

```java
public java.lang.Boolean|IResolvable getRequiredInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ruleTypeInput`<sup>Optional</sup> <a name="ruleTypeInput" id="@cdktn/provider-datadog.tagRule.TagRule.property.ruleTypeInput"></a>

```java
public java.lang.String getRuleTypeInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-datadog.tagRule.TagRule.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-datadog.tagRule.TagRule.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-datadog.tagRule.TagRule.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagValuePatternsInput`<sup>Optional</sup> <a name="tagValuePatternsInput" id="@cdktn/provider-datadog.tagRule.TagRule.property.tagValuePatternsInput"></a>

```java
public java.util.List<java.lang.String> getTagValuePatternsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.tagRule.TagRule.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `forceBlockingOnCreate`<sup>Required</sup> <a name="forceBlockingOnCreate" id="@cdktn/provider-datadog.tagRule.TagRule.property.forceBlockingOnCreate"></a>

```java
public java.lang.Boolean|IResolvable getForceBlockingOnCreate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `hardDelete`<sup>Required</sup> <a name="hardDelete" id="@cdktn/provider-datadog.tagRule.TagRule.property.hardDelete"></a>

```java
public java.lang.Boolean|IResolvable getHardDelete();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.tagRule.TagRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `negated`<sup>Required</sup> <a name="negated" id="@cdktn/provider-datadog.tagRule.TagRule.property.negated"></a>

```java
public java.lang.Boolean|IResolvable getNegated();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-datadog.tagRule.TagRule.property.required"></a>

```java
public java.lang.Boolean|IResolvable getRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="@cdktn/provider-datadog.tagRule.TagRule.property.ruleType"></a>

```java
public java.lang.String getRuleType();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.tagRule.TagRule.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-datadog.tagRule.TagRule.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-datadog.tagRule.TagRule.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValuePatterns`<sup>Required</sup> <a name="tagValuePatterns" id="@cdktn/provider-datadog.tagRule.TagRule.property.tagValuePatterns"></a>

```java
public java.util.List<java.lang.String> getTagValuePatterns();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.tagRule.TagRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TagRuleConfig <a name="TagRuleConfig" id="@cdktn/provider-datadog.tagRule.TagRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.tag_rule.TagRuleConfig;

TagRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .ruleType(java.lang.String)
    .scope(java.lang.String)
    .source(java.lang.String)
    .tagKey(java.lang.String)
    .tagValuePatterns(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean|IResolvable)
//  .forceBlockingOnCreate(java.lang.Boolean|IResolvable)
//  .hardDelete(java.lang.Boolean|IResolvable)
//  .negated(java.lang.Boolean|IResolvable)
//  .required(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Human-readable name for the tag rule. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.ruleType">ruleType</a></code> | <code>java.lang.String</code> | How the rule is enforced. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | The scope the rule applies within. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.source">source</a></code> | <code>java.lang.String</code> | The telemetry source that the tag rule applies to. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | The tag key that the rule governs (for example, `service`). |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.tagValuePatterns">tagValuePatterns</a></code> | <code>java.util.List<java.lang.String></code> | One or more patterns that valid values for the tag key must match. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the rule is currently enforced. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.forceBlockingOnCreate">forceBlockingOnCreate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set to `true` to allow creating a rule with `rule_type` set to `blocking`. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.hardDelete">hardDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether destroying this resource permanently deletes the tag rule. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.negated">negated</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When `true`, the rule matches tag values that do NOT match any of the supplied patterns. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.required">required</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When `true`, telemetry without this tag is treated as a violation. Defaults to `false`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Human-readable name for the tag rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#name TagRule#name}

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.ruleType"></a>

```java
public java.lang.String getRuleType();
```

- *Type:* java.lang.String

How the rule is enforced.

`surfacing` only highlights non-compliant telemetry, while `blocking` rejects telemetry that violates the rule. The API only accepts `surfacing` at creation time, so creating a rule directly as `blocking` requires `force_blocking_on_create` to be set to `true`. Using `blocking` at all requires blocking tag rules to be enabled for your organization; otherwise the API returns `403 permission denied`. Valid values are `blocking`, `surfacing`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#rule_type TagRule#rule_type}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

The scope the rule applies within.

Typically an environment, team, or organization-level identifier used to limit where the rule is enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#scope TagRule#scope}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

The telemetry source that the tag rule applies to.

This field cannot be updated after creation; changing it forces a new resource. Valid values are `logs`, `spans`, `metrics`, `rum`, `feed`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#source TagRule#source}

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

The tag key that the rule governs (for example, `service`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#tag_key TagRule#tag_key}

---

##### `tagValuePatterns`<sup>Required</sup> <a name="tagValuePatterns" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.tagValuePatterns"></a>

```java
public java.util.List<java.lang.String> getTagValuePatterns();
```

- *Type:* java.util.List<java.lang.String>

One or more patterns that valid values for the tag key must match.

At least one pattern is required. These are not regular expressions: the API restricts pattern characters to `A-Za-z0-9_:-.,/*`, with `*` acting as a wildcard. A pattern made up only of wildcards (for example a bare `*`) is rejected by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#tag_value_patterns TagRule#tag_value_patterns}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the rule is currently enforced. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#enabled TagRule#enabled}

---

##### `forceBlockingOnCreate`<sup>Optional</sup> <a name="forceBlockingOnCreate" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.forceBlockingOnCreate"></a>

```java
public java.lang.Boolean|IResolvable getForceBlockingOnCreate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set to `true` to allow creating a rule with `rule_type` set to `blocking`.

The Datadog API only accepts `surfacing` at creation time, so the provider creates the rule as `surfacing` and then immediately updates it to `blocking`, which makes the create non-atomic: if the update fails, a `surfacing` rule is left behind and the resource is marked tainted. This field is only read during creation and is not sent to the API; changing it afterwards produces a diff that has no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#force_blocking_on_create TagRule#force_blocking_on_create}

---

##### `hardDelete`<sup>Optional</sup> <a name="hardDelete" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.hardDelete"></a>

```java
public java.lang.Boolean|IResolvable getHardDelete();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether destroying this resource permanently deletes the tag rule.

When set to `false` the rule is soft-deleted instead, which keeps it recoverable and preserves its historical compliance score data. This field is only read during deletion and is not sent to the API on create or update. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#hard_delete TagRule#hard_delete}

---

##### `negated`<sup>Optional</sup> <a name="negated" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.negated"></a>

```java
public java.lang.Boolean|IResolvable getNegated();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When `true`, the rule matches tag values that do NOT match any of the supplied patterns. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#negated TagRule#negated}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.required"></a>

```java
public java.lang.Boolean|IResolvable getRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When `true`, telemetry without this tag is treated as a violation. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#required TagRule#required}

---



