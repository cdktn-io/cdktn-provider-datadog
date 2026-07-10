# `tagIndexingRule` Submodule <a name="`tagIndexingRule` Submodule" id="@cdktn/provider-datadog.tagIndexingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TagIndexingRule <a name="TagIndexingRule" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule datadog_tag_indexing_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer"></a>

```java
import io.cdktn.providers.datadog.tag_indexing_rule.TagIndexingRule;

TagIndexingRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .metricNameMatches(java.util.List<java.lang.String>)
    .name(java.lang.String)
//  .excludeTagsMode(java.lang.Boolean|IResolvable)
//  .ignoredMetricNameMatches(java.util.List<java.lang.String>)
//  .options(TagIndexingRuleOptions)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.metricNameMatches">metricNameMatches</a></code> | <code>java.util.List<java.lang.String></code> | Metric name prefixes (glob patterns) this rule applies to. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Human-readable name for the rule. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.excludeTagsMode">excludeTagsMode</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, the rule excludes the listed tags and indexes all others. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.ignoredMetricNameMatches">ignoredMetricNameMatches</a></code> | <code>java.util.List<java.lang.String></code> | Metric name prefixes excluded from the rule's scope. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.options">options</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions">TagIndexingRuleOptions</a></code> | Versioned configuration options for the rule. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Tag keys this rule includes or excludes, depending on exclude_tags_mode. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `metricNameMatches`<sup>Required</sup> <a name="metricNameMatches" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.metricNameMatches"></a>

- *Type:* java.util.List<java.lang.String>

Metric name prefixes (glob patterns) this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#metric_name_matches TagIndexingRule#metric_name_matches}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Human-readable name for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#name TagIndexingRule#name}

---

##### `excludeTagsMode`<sup>Optional</sup> <a name="excludeTagsMode" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.excludeTagsMode"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, the rule excludes the listed tags and indexes all others.

When false (default), the rule includes only the listed tags. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#exclude_tags_mode TagIndexingRule#exclude_tags_mode}

---

##### `ignoredMetricNameMatches`<sup>Optional</sup> <a name="ignoredMetricNameMatches" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.ignoredMetricNameMatches"></a>

- *Type:* java.util.List<java.lang.String>

Metric name prefixes excluded from the rule's scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#ignored_metric_name_matches TagIndexingRule#ignored_metric_name_matches}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.options"></a>

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions">TagIndexingRuleOptions</a>

Versioned configuration options for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#options TagIndexingRule#options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Tag keys this rule includes or excludes, depending on exclude_tags_mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#tags TagIndexingRule#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetExcludeTagsMode">resetExcludeTagsMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetIgnoredMetricNameMatches">resetIgnoredMetricNameMatches</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOptions` <a name="putOptions" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.putOptions"></a>

```java
public void putOptions(TagIndexingRuleOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions">TagIndexingRuleOptions</a>

---

##### `resetExcludeTagsMode` <a name="resetExcludeTagsMode" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetExcludeTagsMode"></a>

```java
public void resetExcludeTagsMode()
```

##### `resetIgnoredMetricNameMatches` <a name="resetIgnoredMetricNameMatches" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetIgnoredMetricNameMatches"></a>

```java
public void resetIgnoredMetricNameMatches()
```

##### `resetOptions` <a name="resetOptions" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetOptions"></a>

```java
public void resetOptions()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TagIndexingRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isConstruct"></a>

```java
import io.cdktn.providers.datadog.tag_indexing_rule.TagIndexingRule;

TagIndexingRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.tag_indexing_rule.TagIndexingRule;

TagIndexingRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.tag_indexing_rule.TagIndexingRule;

TagIndexingRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.tag_indexing_rule.TagIndexingRule;

TagIndexingRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TagIndexingRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a TagIndexingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TagIndexingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TagIndexingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the TagIndexingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.createdByHandle">createdByHandle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.modifiedByHandle">modifiedByHandle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.options">options</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference">TagIndexingRuleOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.ruleOrder">ruleOrder</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.excludeTagsModeInput">excludeTagsModeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.ignoredMetricNameMatchesInput">ignoredMetricNameMatchesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.metricNameMatchesInput">metricNameMatchesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.optionsInput">optionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions">TagIndexingRuleOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.excludeTagsMode">excludeTagsMode</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.ignoredMetricNameMatches">ignoredMetricNameMatches</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.metricNameMatches">metricNameMatches</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `createdByHandle`<sup>Required</sup> <a name="createdByHandle" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.createdByHandle"></a>

```java
public java.lang.String getCreatedByHandle();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.modifiedAt"></a>

```java
public java.lang.String getModifiedAt();
```

- *Type:* java.lang.String

---

##### `modifiedByHandle`<sup>Required</sup> <a name="modifiedByHandle" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.modifiedByHandle"></a>

```java
public java.lang.String getModifiedByHandle();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.options"></a>

```java
public TagIndexingRuleOptionsOutputReference getOptions();
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference">TagIndexingRuleOptionsOutputReference</a>

---

##### `ruleOrder`<sup>Required</sup> <a name="ruleOrder" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.ruleOrder"></a>

```java
public java.lang.Number getRuleOrder();
```

- *Type:* java.lang.Number

---

##### `excludeTagsModeInput`<sup>Optional</sup> <a name="excludeTagsModeInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.excludeTagsModeInput"></a>

```java
public java.lang.Boolean|IResolvable getExcludeTagsModeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ignoredMetricNameMatchesInput`<sup>Optional</sup> <a name="ignoredMetricNameMatchesInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.ignoredMetricNameMatchesInput"></a>

```java
public java.util.List<java.lang.String> getIgnoredMetricNameMatchesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricNameMatchesInput`<sup>Optional</sup> <a name="metricNameMatchesInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.metricNameMatchesInput"></a>

```java
public java.util.List<java.lang.String> getMetricNameMatchesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.optionsInput"></a>

```java
public IResolvable|TagIndexingRuleOptions getOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions">TagIndexingRuleOptions</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludeTagsMode`<sup>Required</sup> <a name="excludeTagsMode" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.excludeTagsMode"></a>

```java
public java.lang.Boolean|IResolvable getExcludeTagsMode();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ignoredMetricNameMatches`<sup>Required</sup> <a name="ignoredMetricNameMatches" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.ignoredMetricNameMatches"></a>

```java
public java.util.List<java.lang.String> getIgnoredMetricNameMatches();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricNameMatches`<sup>Required</sup> <a name="metricNameMatches" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.metricNameMatches"></a>

```java
public java.util.List<java.lang.String> getMetricNameMatches();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TagIndexingRuleConfig <a name="TagIndexingRuleConfig" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.tag_indexing_rule.TagIndexingRuleConfig;

TagIndexingRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .metricNameMatches(java.util.List<java.lang.String>)
    .name(java.lang.String)
//  .excludeTagsMode(java.lang.Boolean|IResolvable)
//  .ignoredMetricNameMatches(java.util.List<java.lang.String>)
//  .options(TagIndexingRuleOptions)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.metricNameMatches">metricNameMatches</a></code> | <code>java.util.List<java.lang.String></code> | Metric name prefixes (glob patterns) this rule applies to. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Human-readable name for the rule. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.excludeTagsMode">excludeTagsMode</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, the rule excludes the listed tags and indexes all others. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.ignoredMetricNameMatches">ignoredMetricNameMatches</a></code> | <code>java.util.List<java.lang.String></code> | Metric name prefixes excluded from the rule's scope. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.options">options</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions">TagIndexingRuleOptions</a></code> | Versioned configuration options for the rule. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Tag keys this rule includes or excludes, depending on exclude_tags_mode. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `metricNameMatches`<sup>Required</sup> <a name="metricNameMatches" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.metricNameMatches"></a>

```java
public java.util.List<java.lang.String> getMetricNameMatches();
```

- *Type:* java.util.List<java.lang.String>

Metric name prefixes (glob patterns) this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#metric_name_matches TagIndexingRule#metric_name_matches}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Human-readable name for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#name TagIndexingRule#name}

---

##### `excludeTagsMode`<sup>Optional</sup> <a name="excludeTagsMode" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.excludeTagsMode"></a>

```java
public java.lang.Boolean|IResolvable getExcludeTagsMode();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, the rule excludes the listed tags and indexes all others.

When false (default), the rule includes only the listed tags. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#exclude_tags_mode TagIndexingRule#exclude_tags_mode}

---

##### `ignoredMetricNameMatches`<sup>Optional</sup> <a name="ignoredMetricNameMatches" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.ignoredMetricNameMatches"></a>

```java
public java.util.List<java.lang.String> getIgnoredMetricNameMatches();
```

- *Type:* java.util.List<java.lang.String>

Metric name prefixes excluded from the rule's scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#ignored_metric_name_matches TagIndexingRule#ignored_metric_name_matches}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.options"></a>

```java
public TagIndexingRuleOptions getOptions();
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions">TagIndexingRuleOptions</a>

Versioned configuration options for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#options TagIndexingRule#options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Tag keys this rule includes or excludes, depending on exclude_tags_mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#tags TagIndexingRule#tags}

---

### TagIndexingRuleOptions <a name="TagIndexingRuleOptions" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions.Initializer"></a>

```java
import io.cdktn.providers.datadog.tag_indexing_rule.TagIndexingRuleOptions;

TagIndexingRuleOptions.builder()
    .data(TagIndexingRuleOptionsData)
    .version(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions.property.data">data</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData">TagIndexingRuleOptionsData</a></code> | Behavioral options for how the rule applies to metrics, including backfill and override behavior. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions.property.version">version</a></code> | <code>java.lang.Number</code> | Options schema version. Only `1` is supported. |

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions.property.data"></a>

```java
public TagIndexingRuleOptionsData getData();
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData">TagIndexingRuleOptionsData</a>

Behavioral options for how the rule applies to metrics, including backfill and override behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#data TagIndexingRule#data}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

Options schema version. Only `1` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#version TagIndexingRule#version}

---

### TagIndexingRuleOptionsData <a name="TagIndexingRuleOptionsData" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.Initializer"></a>

```java
import io.cdktn.providers.datadog.tag_indexing_rule.TagIndexingRuleOptionsData;

TagIndexingRuleOptionsData.builder()
//  .dynamicTags(TagIndexingRuleOptionsDataDynamicTags)
//  .managePreexistingMetrics(java.lang.Boolean|IResolvable)
//  .metricMatch(TagIndexingRuleOptionsDataMetricMatch)
//  .overridePreviousRules(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.dynamicTags">dynamicTags</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags">TagIndexingRuleOptionsDataDynamicTags</a></code> | Configuration for including dynamically queried tags. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.managePreexistingMetrics">managePreexistingMetrics</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, the rule applies to metrics ingested before the rule was created. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.metricMatch">metricMatch</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch">TagIndexingRuleOptionsDataMetricMatch</a></code> | Criteria for matching metrics based on query state. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.overridePreviousRules">overridePreviousRules</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, this rule's tag list overrides tags configured by earlier rules for the same metric. Defaults to `false`. |

---

##### `dynamicTags`<sup>Optional</sup> <a name="dynamicTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.dynamicTags"></a>

```java
public TagIndexingRuleOptionsDataDynamicTags getDynamicTags();
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags">TagIndexingRuleOptionsDataDynamicTags</a>

Configuration for including dynamically queried tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#dynamic_tags TagIndexingRule#dynamic_tags}

---

##### `managePreexistingMetrics`<sup>Optional</sup> <a name="managePreexistingMetrics" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.managePreexistingMetrics"></a>

```java
public java.lang.Boolean|IResolvable getManagePreexistingMetrics();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, the rule applies to metrics ingested before the rule was created. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#manage_preexisting_metrics TagIndexingRule#manage_preexisting_metrics}

---

##### `metricMatch`<sup>Optional</sup> <a name="metricMatch" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.metricMatch"></a>

```java
public TagIndexingRuleOptionsDataMetricMatch getMetricMatch();
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch">TagIndexingRuleOptionsDataMetricMatch</a>

Criteria for matching metrics based on query state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#metric_match TagIndexingRule#metric_match}

---

##### `overridePreviousRules`<sup>Optional</sup> <a name="overridePreviousRules" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.overridePreviousRules"></a>

```java
public java.lang.Boolean|IResolvable getOverridePreviousRules();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, this rule's tag list overrides tags configured by earlier rules for the same metric. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#override_previous_rules TagIndexingRule#override_previous_rules}

---

### TagIndexingRuleOptionsDataDynamicTags <a name="TagIndexingRuleOptionsDataDynamicTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags.Initializer"></a>

```java
import io.cdktn.providers.datadog.tag_indexing_rule.TagIndexingRuleOptionsDataDynamicTags;

TagIndexingRuleOptionsDataDynamicTags.builder()
//  .queriedTagsWindowSeconds(java.lang.Number)
//  .relatedAssetTags(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags.property.queriedTagsWindowSeconds">queriedTagsWindowSeconds</a></code> | <code>java.lang.Number</code> | Lookback window for determining which tags were recently queried. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags.property.relatedAssetTags">relatedAssetTags</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, tags from related assets are included. |

---

##### `queriedTagsWindowSeconds`<sup>Optional</sup> <a name="queriedTagsWindowSeconds" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags.property.queriedTagsWindowSeconds"></a>

```java
public java.lang.Number getQueriedTagsWindowSeconds();
```

- *Type:* java.lang.Number

Lookback window for determining which tags were recently queried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#queried_tags_window_seconds TagIndexingRule#queried_tags_window_seconds}

---

##### `relatedAssetTags`<sup>Optional</sup> <a name="relatedAssetTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags.property.relatedAssetTags"></a>

```java
public java.lang.Boolean|IResolvable getRelatedAssetTags();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, tags from related assets are included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#related_asset_tags TagIndexingRule#related_asset_tags}

---

### TagIndexingRuleOptionsDataMetricMatch <a name="TagIndexingRuleOptionsDataMetricMatch" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.Initializer"></a>

```java
import io.cdktn.providers.datadog.tag_indexing_rule.TagIndexingRuleOptionsDataMetricMatch;

TagIndexingRuleOptionsDataMetricMatch.builder()
//  .isQueried(java.lang.Boolean|IResolvable)
//  .notQueried(java.lang.Boolean|IResolvable)
//  .notUsedInAssets(java.lang.Boolean|IResolvable)
//  .queriedWindowSeconds(java.lang.Number)
//  .usedInAssets(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.isQueried">isQueried</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Match metrics that are being queried. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.notQueried">notQueried</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Match metrics that are not being queried. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.notUsedInAssets">notUsedInAssets</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Match metrics not used in any dashboards or monitors. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.queriedWindowSeconds">queriedWindowSeconds</a></code> | <code>java.lang.Number</code> | Window in seconds for evaluating query state. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.usedInAssets">usedInAssets</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Match metrics used in dashboards or monitors. |

---

##### `isQueried`<sup>Optional</sup> <a name="isQueried" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.isQueried"></a>

```java
public java.lang.Boolean|IResolvable getIsQueried();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Match metrics that are being queried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#is_queried TagIndexingRule#is_queried}

---

##### `notQueried`<sup>Optional</sup> <a name="notQueried" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.notQueried"></a>

```java
public java.lang.Boolean|IResolvable getNotQueried();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Match metrics that are not being queried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#not_queried TagIndexingRule#not_queried}

---

##### `notUsedInAssets`<sup>Optional</sup> <a name="notUsedInAssets" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.notUsedInAssets"></a>

```java
public java.lang.Boolean|IResolvable getNotUsedInAssets();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Match metrics not used in any dashboards or monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#not_used_in_assets TagIndexingRule#not_used_in_assets}

---

##### `queriedWindowSeconds`<sup>Optional</sup> <a name="queriedWindowSeconds" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.queriedWindowSeconds"></a>

```java
public java.lang.Number getQueriedWindowSeconds();
```

- *Type:* java.lang.Number

Window in seconds for evaluating query state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#queried_window_seconds TagIndexingRule#queried_window_seconds}

---

##### `usedInAssets`<sup>Optional</sup> <a name="usedInAssets" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.usedInAssets"></a>

```java
public java.lang.Boolean|IResolvable getUsedInAssets();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Match metrics used in dashboards or monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule#used_in_assets TagIndexingRule#used_in_assets}

---

## Classes <a name="Classes" id="Classes"></a>

### TagIndexingRuleOptionsDataDynamicTagsOutputReference <a name="TagIndexingRuleOptionsDataDynamicTagsOutputReference" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.tag_indexing_rule.TagIndexingRuleOptionsDataDynamicTagsOutputReference;

new TagIndexingRuleOptionsDataDynamicTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.resetQueriedTagsWindowSeconds">resetQueriedTagsWindowSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.resetRelatedAssetTags">resetRelatedAssetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQueriedTagsWindowSeconds` <a name="resetQueriedTagsWindowSeconds" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.resetQueriedTagsWindowSeconds"></a>

```java
public void resetQueriedTagsWindowSeconds()
```

##### `resetRelatedAssetTags` <a name="resetRelatedAssetTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.resetRelatedAssetTags"></a>

```java
public void resetRelatedAssetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.queriedTagsWindowSecondsInput">queriedTagsWindowSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.relatedAssetTagsInput">relatedAssetTagsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.queriedTagsWindowSeconds">queriedTagsWindowSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.relatedAssetTags">relatedAssetTags</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags">TagIndexingRuleOptionsDataDynamicTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `queriedTagsWindowSecondsInput`<sup>Optional</sup> <a name="queriedTagsWindowSecondsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.queriedTagsWindowSecondsInput"></a>

```java
public java.lang.Number getQueriedTagsWindowSecondsInput();
```

- *Type:* java.lang.Number

---

##### `relatedAssetTagsInput`<sup>Optional</sup> <a name="relatedAssetTagsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.relatedAssetTagsInput"></a>

```java
public java.lang.Boolean|IResolvable getRelatedAssetTagsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `queriedTagsWindowSeconds`<sup>Required</sup> <a name="queriedTagsWindowSeconds" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.queriedTagsWindowSeconds"></a>

```java
public java.lang.Number getQueriedTagsWindowSeconds();
```

- *Type:* java.lang.Number

---

##### `relatedAssetTags`<sup>Required</sup> <a name="relatedAssetTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.relatedAssetTags"></a>

```java
public java.lang.Boolean|IResolvable getRelatedAssetTags();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|TagIndexingRuleOptionsDataDynamicTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags">TagIndexingRuleOptionsDataDynamicTags</a>

---


### TagIndexingRuleOptionsDataMetricMatchOutputReference <a name="TagIndexingRuleOptionsDataMetricMatchOutputReference" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.tag_indexing_rule.TagIndexingRuleOptionsDataMetricMatchOutputReference;

new TagIndexingRuleOptionsDataMetricMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetIsQueried">resetIsQueried</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetNotQueried">resetNotQueried</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetNotUsedInAssets">resetNotUsedInAssets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetQueriedWindowSeconds">resetQueriedWindowSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetUsedInAssets">resetUsedInAssets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsQueried` <a name="resetIsQueried" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetIsQueried"></a>

```java
public void resetIsQueried()
```

##### `resetNotQueried` <a name="resetNotQueried" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetNotQueried"></a>

```java
public void resetNotQueried()
```

##### `resetNotUsedInAssets` <a name="resetNotUsedInAssets" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetNotUsedInAssets"></a>

```java
public void resetNotUsedInAssets()
```

##### `resetQueriedWindowSeconds` <a name="resetQueriedWindowSeconds" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetQueriedWindowSeconds"></a>

```java
public void resetQueriedWindowSeconds()
```

##### `resetUsedInAssets` <a name="resetUsedInAssets" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetUsedInAssets"></a>

```java
public void resetUsedInAssets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.isQueriedInput">isQueriedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.notQueriedInput">notQueriedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.notUsedInAssetsInput">notUsedInAssetsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.queriedWindowSecondsInput">queriedWindowSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.usedInAssetsInput">usedInAssetsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.isQueried">isQueried</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.notQueried">notQueried</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.notUsedInAssets">notUsedInAssets</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.queriedWindowSeconds">queriedWindowSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.usedInAssets">usedInAssets</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch">TagIndexingRuleOptionsDataMetricMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isQueriedInput`<sup>Optional</sup> <a name="isQueriedInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.isQueriedInput"></a>

```java
public java.lang.Boolean|IResolvable getIsQueriedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `notQueriedInput`<sup>Optional</sup> <a name="notQueriedInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.notQueriedInput"></a>

```java
public java.lang.Boolean|IResolvable getNotQueriedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `notUsedInAssetsInput`<sup>Optional</sup> <a name="notUsedInAssetsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.notUsedInAssetsInput"></a>

```java
public java.lang.Boolean|IResolvable getNotUsedInAssetsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `queriedWindowSecondsInput`<sup>Optional</sup> <a name="queriedWindowSecondsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.queriedWindowSecondsInput"></a>

```java
public java.lang.Number getQueriedWindowSecondsInput();
```

- *Type:* java.lang.Number

---

##### `usedInAssetsInput`<sup>Optional</sup> <a name="usedInAssetsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.usedInAssetsInput"></a>

```java
public java.lang.Boolean|IResolvable getUsedInAssetsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isQueried`<sup>Required</sup> <a name="isQueried" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.isQueried"></a>

```java
public java.lang.Boolean|IResolvable getIsQueried();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `notQueried`<sup>Required</sup> <a name="notQueried" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.notQueried"></a>

```java
public java.lang.Boolean|IResolvable getNotQueried();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `notUsedInAssets`<sup>Required</sup> <a name="notUsedInAssets" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.notUsedInAssets"></a>

```java
public java.lang.Boolean|IResolvable getNotUsedInAssets();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `queriedWindowSeconds`<sup>Required</sup> <a name="queriedWindowSeconds" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.queriedWindowSeconds"></a>

```java
public java.lang.Number getQueriedWindowSeconds();
```

- *Type:* java.lang.Number

---

##### `usedInAssets`<sup>Required</sup> <a name="usedInAssets" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.usedInAssets"></a>

```java
public java.lang.Boolean|IResolvable getUsedInAssets();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.internalValue"></a>

```java
public IResolvable|TagIndexingRuleOptionsDataMetricMatch getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch">TagIndexingRuleOptionsDataMetricMatch</a>

---


### TagIndexingRuleOptionsDataOutputReference <a name="TagIndexingRuleOptionsDataOutputReference" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.tag_indexing_rule.TagIndexingRuleOptionsDataOutputReference;

new TagIndexingRuleOptionsDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.putDynamicTags">putDynamicTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.putMetricMatch">putMetricMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetDynamicTags">resetDynamicTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetManagePreexistingMetrics">resetManagePreexistingMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetMetricMatch">resetMetricMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetOverridePreviousRules">resetOverridePreviousRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDynamicTags` <a name="putDynamicTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.putDynamicTags"></a>

```java
public void putDynamicTags(TagIndexingRuleOptionsDataDynamicTags value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.putDynamicTags.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags">TagIndexingRuleOptionsDataDynamicTags</a>

---

##### `putMetricMatch` <a name="putMetricMatch" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.putMetricMatch"></a>

```java
public void putMetricMatch(TagIndexingRuleOptionsDataMetricMatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.putMetricMatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch">TagIndexingRuleOptionsDataMetricMatch</a>

---

##### `resetDynamicTags` <a name="resetDynamicTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetDynamicTags"></a>

```java
public void resetDynamicTags()
```

##### `resetManagePreexistingMetrics` <a name="resetManagePreexistingMetrics" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetManagePreexistingMetrics"></a>

```java
public void resetManagePreexistingMetrics()
```

##### `resetMetricMatch` <a name="resetMetricMatch" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetMetricMatch"></a>

```java
public void resetMetricMatch()
```

##### `resetOverridePreviousRules` <a name="resetOverridePreviousRules" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetOverridePreviousRules"></a>

```java
public void resetOverridePreviousRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.dynamicTags">dynamicTags</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference">TagIndexingRuleOptionsDataDynamicTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.metricMatch">metricMatch</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference">TagIndexingRuleOptionsDataMetricMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.dynamicTagsInput">dynamicTagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags">TagIndexingRuleOptionsDataDynamicTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.managePreexistingMetricsInput">managePreexistingMetricsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.metricMatchInput">metricMatchInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch">TagIndexingRuleOptionsDataMetricMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.overridePreviousRulesInput">overridePreviousRulesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.managePreexistingMetrics">managePreexistingMetrics</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.overridePreviousRules">overridePreviousRules</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData">TagIndexingRuleOptionsData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dynamicTags`<sup>Required</sup> <a name="dynamicTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.dynamicTags"></a>

```java
public TagIndexingRuleOptionsDataDynamicTagsOutputReference getDynamicTags();
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference">TagIndexingRuleOptionsDataDynamicTagsOutputReference</a>

---

##### `metricMatch`<sup>Required</sup> <a name="metricMatch" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.metricMatch"></a>

```java
public TagIndexingRuleOptionsDataMetricMatchOutputReference getMetricMatch();
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference">TagIndexingRuleOptionsDataMetricMatchOutputReference</a>

---

##### `dynamicTagsInput`<sup>Optional</sup> <a name="dynamicTagsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.dynamicTagsInput"></a>

```java
public IResolvable|TagIndexingRuleOptionsDataDynamicTags getDynamicTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags">TagIndexingRuleOptionsDataDynamicTags</a>

---

##### `managePreexistingMetricsInput`<sup>Optional</sup> <a name="managePreexistingMetricsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.managePreexistingMetricsInput"></a>

```java
public java.lang.Boolean|IResolvable getManagePreexistingMetricsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `metricMatchInput`<sup>Optional</sup> <a name="metricMatchInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.metricMatchInput"></a>

```java
public IResolvable|TagIndexingRuleOptionsDataMetricMatch getMetricMatchInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch">TagIndexingRuleOptionsDataMetricMatch</a>

---

##### `overridePreviousRulesInput`<sup>Optional</sup> <a name="overridePreviousRulesInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.overridePreviousRulesInput"></a>

```java
public java.lang.Boolean|IResolvable getOverridePreviousRulesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `managePreexistingMetrics`<sup>Required</sup> <a name="managePreexistingMetrics" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.managePreexistingMetrics"></a>

```java
public java.lang.Boolean|IResolvable getManagePreexistingMetrics();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `overridePreviousRules`<sup>Required</sup> <a name="overridePreviousRules" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.overridePreviousRules"></a>

```java
public java.lang.Boolean|IResolvable getOverridePreviousRules();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.internalValue"></a>

```java
public IResolvable|TagIndexingRuleOptionsData getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData">TagIndexingRuleOptionsData</a>

---


### TagIndexingRuleOptionsOutputReference <a name="TagIndexingRuleOptionsOutputReference" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.tag_indexing_rule.TagIndexingRuleOptionsOutputReference;

new TagIndexingRuleOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.putData">putData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putData` <a name="putData" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.putData"></a>

```java
public void putData(TagIndexingRuleOptionsData value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.putData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData">TagIndexingRuleOptionsData</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.data">data</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference">TagIndexingRuleOptionsDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.dataInput">dataInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData">TagIndexingRuleOptionsData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions">TagIndexingRuleOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.data"></a>

```java
public TagIndexingRuleOptionsDataOutputReference getData();
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference">TagIndexingRuleOptionsDataOutputReference</a>

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.dataInput"></a>

```java
public IResolvable|TagIndexingRuleOptionsData getDataInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData">TagIndexingRuleOptionsData</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.versionInput"></a>

```java
public java.lang.Number getVersionInput();
```

- *Type:* java.lang.Number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|TagIndexingRuleOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions">TagIndexingRuleOptions</a>

---



