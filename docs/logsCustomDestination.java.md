# `logsCustomDestination` Submodule <a name="`logsCustomDestination` Submodule" id="@cdktn/provider-datadog.logsCustomDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsCustomDestination <a name="LogsCustomDestination" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination datadog_logs_custom_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_custom_destination.LogsCustomDestination;

LogsCustomDestination.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .elasticsearchDestination(IResolvable|java.util.List<LogsCustomDestinationElasticsearchDestination>)
//  .enabled(java.lang.Boolean|IResolvable)
//  .forwardTags(java.lang.Boolean|IResolvable)
//  .forwardTagsRestrictionList(java.util.List<java.lang.String>)
//  .forwardTagsRestrictionListType(java.lang.String)
//  .httpDestination(IResolvable|java.util.List<LogsCustomDestinationHttpDestination>)
//  .microsoftSentinelDestination(IResolvable|java.util.List<LogsCustomDestinationMicrosoftSentinelDestination>)
//  .query(java.lang.String)
//  .splunkDestination(IResolvable|java.util.List<LogsCustomDestinationSplunkDestination>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The custom destination name. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.elasticsearchDestination">elasticsearchDestination</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination">LogsCustomDestinationElasticsearchDestination</a>></code> | elasticsearch_destination block. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether logs matching this custom destination should be forwarded or not. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.forwardTags">forwardTags</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether tags from the forwarded logs should be forwarded or not. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.forwardTagsRestrictionList">forwardTagsRestrictionList</a></code> | <code>java.util.List<java.lang.String></code> | List of [tag keys](https://docs.datadoghq.com/getting_started/tagging/#define-tags) to be filtered. 				An empty list represents no restriction is in place and either all or no tags will be 				forwarded depending on `forward_tags_restriction_list_type` parameter. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.forwardTagsRestrictionListType">forwardTagsRestrictionListType</a></code> | <code>java.lang.String</code> | How the `forward_tags_restriction_list` parameter should be interpreted. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.httpDestination">httpDestination</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination">LogsCustomDestinationHttpDestination</a>></code> | http_destination block. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.microsoftSentinelDestination">microsoftSentinelDestination</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination">LogsCustomDestinationMicrosoftSentinelDestination</a>></code> | microsoft_sentinel_destination block. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.query">query</a></code> | <code>java.lang.String</code> | The custom destination query filter. Logs matching this query are forwarded to the destination. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.splunkDestination">splunkDestination</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination">LogsCustomDestinationSplunkDestination</a>></code> | splunk_destination block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The custom destination name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#name LogsCustomDestination#name}

---

##### `elasticsearchDestination`<sup>Optional</sup> <a name="elasticsearchDestination" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.elasticsearchDestination"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination">LogsCustomDestinationElasticsearchDestination</a>>

elasticsearch_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#elasticsearch_destination LogsCustomDestination#elasticsearch_destination}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether logs matching this custom destination should be forwarded or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#enabled LogsCustomDestination#enabled}

---

##### `forwardTags`<sup>Optional</sup> <a name="forwardTags" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.forwardTags"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether tags from the forwarded logs should be forwarded or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#forward_tags LogsCustomDestination#forward_tags}

---

##### `forwardTagsRestrictionList`<sup>Optional</sup> <a name="forwardTagsRestrictionList" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.forwardTagsRestrictionList"></a>

- *Type:* java.util.List<java.lang.String>

List of [tag keys](https://docs.datadoghq.com/getting_started/tagging/#define-tags) to be filtered. 				An empty list represents no restriction is in place and either all or no tags will be 				forwarded depending on `forward_tags_restriction_list_type` parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#forward_tags_restriction_list LogsCustomDestination#forward_tags_restriction_list}

---

##### `forwardTagsRestrictionListType`<sup>Optional</sup> <a name="forwardTagsRestrictionListType" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.forwardTagsRestrictionListType"></a>

- *Type:* java.lang.String

How the `forward_tags_restriction_list` parameter should be interpreted.

If `ALLOW_LIST`, then only tags whose keys on the forwarded logs match the ones on the restriction list
are forwarded.
`BLOCK_LIST` works the opposite way. It does not forward the tags matching the ones on the list. Valid values are `ALLOW_LIST`, `BLOCK_LIST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#forward_tags_restriction_list_type LogsCustomDestination#forward_tags_restriction_list_type}

---

##### `httpDestination`<sup>Optional</sup> <a name="httpDestination" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.httpDestination"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination">LogsCustomDestinationHttpDestination</a>>

http_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#http_destination LogsCustomDestination#http_destination}

---

##### `microsoftSentinelDestination`<sup>Optional</sup> <a name="microsoftSentinelDestination" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.microsoftSentinelDestination"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination">LogsCustomDestinationMicrosoftSentinelDestination</a>>

microsoft_sentinel_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#microsoft_sentinel_destination LogsCustomDestination#microsoft_sentinel_destination}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.query"></a>

- *Type:* java.lang.String

The custom destination query filter. Logs matching this query are forwarded to the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#query LogsCustomDestination#query}

---

##### `splunkDestination`<sup>Optional</sup> <a name="splunkDestination" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.Initializer.parameter.splunkDestination"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination">LogsCustomDestinationSplunkDestination</a>>

splunk_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#splunk_destination LogsCustomDestination#splunk_destination}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.putElasticsearchDestination">putElasticsearchDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.putHttpDestination">putHttpDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.putMicrosoftSentinelDestination">putMicrosoftSentinelDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.putSplunkDestination">putSplunkDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.resetElasticsearchDestination">resetElasticsearchDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.resetForwardTags">resetForwardTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.resetForwardTagsRestrictionList">resetForwardTagsRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.resetForwardTagsRestrictionListType">resetForwardTagsRestrictionListType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.resetHttpDestination">resetHttpDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.resetMicrosoftSentinelDestination">resetMicrosoftSentinelDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.resetSplunkDestination">resetSplunkDestination</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putElasticsearchDestination` <a name="putElasticsearchDestination" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.putElasticsearchDestination"></a>

```java
public void putElasticsearchDestination(IResolvable|java.util.List<LogsCustomDestinationElasticsearchDestination> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.putElasticsearchDestination.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination">LogsCustomDestinationElasticsearchDestination</a>>

---

##### `putHttpDestination` <a name="putHttpDestination" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.putHttpDestination"></a>

```java
public void putHttpDestination(IResolvable|java.util.List<LogsCustomDestinationHttpDestination> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.putHttpDestination.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination">LogsCustomDestinationHttpDestination</a>>

---

##### `putMicrosoftSentinelDestination` <a name="putMicrosoftSentinelDestination" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.putMicrosoftSentinelDestination"></a>

```java
public void putMicrosoftSentinelDestination(IResolvable|java.util.List<LogsCustomDestinationMicrosoftSentinelDestination> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.putMicrosoftSentinelDestination.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination">LogsCustomDestinationMicrosoftSentinelDestination</a>>

---

##### `putSplunkDestination` <a name="putSplunkDestination" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.putSplunkDestination"></a>

```java
public void putSplunkDestination(IResolvable|java.util.List<LogsCustomDestinationSplunkDestination> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.putSplunkDestination.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination">LogsCustomDestinationSplunkDestination</a>>

---

##### `resetElasticsearchDestination` <a name="resetElasticsearchDestination" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.resetElasticsearchDestination"></a>

```java
public void resetElasticsearchDestination()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetForwardTags` <a name="resetForwardTags" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.resetForwardTags"></a>

```java
public void resetForwardTags()
```

##### `resetForwardTagsRestrictionList` <a name="resetForwardTagsRestrictionList" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.resetForwardTagsRestrictionList"></a>

```java
public void resetForwardTagsRestrictionList()
```

##### `resetForwardTagsRestrictionListType` <a name="resetForwardTagsRestrictionListType" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.resetForwardTagsRestrictionListType"></a>

```java
public void resetForwardTagsRestrictionListType()
```

##### `resetHttpDestination` <a name="resetHttpDestination" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.resetHttpDestination"></a>

```java
public void resetHttpDestination()
```

##### `resetMicrosoftSentinelDestination` <a name="resetMicrosoftSentinelDestination" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.resetMicrosoftSentinelDestination"></a>

```java
public void resetMicrosoftSentinelDestination()
```

##### `resetQuery` <a name="resetQuery" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.resetQuery"></a>

```java
public void resetQuery()
```

##### `resetSplunkDestination` <a name="resetSplunkDestination" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.resetSplunkDestination"></a>

```java
public void resetSplunkDestination()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LogsCustomDestination resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.isConstruct"></a>

```java
import io.cdktn.providers.datadog.logs_custom_destination.LogsCustomDestination;

LogsCustomDestination.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.logs_custom_destination.LogsCustomDestination;

LogsCustomDestination.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.logs_custom_destination.LogsCustomDestination;

LogsCustomDestination.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.logs_custom_destination.LogsCustomDestination;

LogsCustomDestination.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LogsCustomDestination.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LogsCustomDestination resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LogsCustomDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LogsCustomDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LogsCustomDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.elasticsearchDestination">elasticsearchDestination</a></code> | <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList">LogsCustomDestinationElasticsearchDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.httpDestination">httpDestination</a></code> | <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList">LogsCustomDestinationHttpDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.microsoftSentinelDestination">microsoftSentinelDestination</a></code> | <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList">LogsCustomDestinationMicrosoftSentinelDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.splunkDestination">splunkDestination</a></code> | <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList">LogsCustomDestinationSplunkDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.elasticsearchDestinationInput">elasticsearchDestinationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination">LogsCustomDestinationElasticsearchDestination</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsInput">forwardTagsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsRestrictionListInput">forwardTagsRestrictionListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsRestrictionListTypeInput">forwardTagsRestrictionListTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.httpDestinationInput">httpDestinationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination">LogsCustomDestinationHttpDestination</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.microsoftSentinelDestinationInput">microsoftSentinelDestinationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination">LogsCustomDestinationMicrosoftSentinelDestination</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.splunkDestinationInput">splunkDestinationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination">LogsCustomDestinationSplunkDestination</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTags">forwardTags</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsRestrictionList">forwardTagsRestrictionList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsRestrictionListType">forwardTagsRestrictionListType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `elasticsearchDestination`<sup>Required</sup> <a name="elasticsearchDestination" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.elasticsearchDestination"></a>

```java
public LogsCustomDestinationElasticsearchDestinationList getElasticsearchDestination();
```

- *Type:* <a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList">LogsCustomDestinationElasticsearchDestinationList</a>

---

##### `httpDestination`<sup>Required</sup> <a name="httpDestination" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.httpDestination"></a>

```java
public LogsCustomDestinationHttpDestinationList getHttpDestination();
```

- *Type:* <a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList">LogsCustomDestinationHttpDestinationList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `microsoftSentinelDestination`<sup>Required</sup> <a name="microsoftSentinelDestination" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.microsoftSentinelDestination"></a>

```java
public LogsCustomDestinationMicrosoftSentinelDestinationList getMicrosoftSentinelDestination();
```

- *Type:* <a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList">LogsCustomDestinationMicrosoftSentinelDestinationList</a>

---

##### `splunkDestination`<sup>Required</sup> <a name="splunkDestination" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.splunkDestination"></a>

```java
public LogsCustomDestinationSplunkDestinationList getSplunkDestination();
```

- *Type:* <a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList">LogsCustomDestinationSplunkDestinationList</a>

---

##### `elasticsearchDestinationInput`<sup>Optional</sup> <a name="elasticsearchDestinationInput" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.elasticsearchDestinationInput"></a>

```java
public IResolvable|java.util.List<LogsCustomDestinationElasticsearchDestination> getElasticsearchDestinationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination">LogsCustomDestinationElasticsearchDestination</a>>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `forwardTagsInput`<sup>Optional</sup> <a name="forwardTagsInput" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsInput"></a>

```java
public java.lang.Boolean|IResolvable getForwardTagsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `forwardTagsRestrictionListInput`<sup>Optional</sup> <a name="forwardTagsRestrictionListInput" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsRestrictionListInput"></a>

```java
public java.util.List<java.lang.String> getForwardTagsRestrictionListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forwardTagsRestrictionListTypeInput`<sup>Optional</sup> <a name="forwardTagsRestrictionListTypeInput" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsRestrictionListTypeInput"></a>

```java
public java.lang.String getForwardTagsRestrictionListTypeInput();
```

- *Type:* java.lang.String

---

##### `httpDestinationInput`<sup>Optional</sup> <a name="httpDestinationInput" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.httpDestinationInput"></a>

```java
public IResolvable|java.util.List<LogsCustomDestinationHttpDestination> getHttpDestinationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination">LogsCustomDestinationHttpDestination</a>>

---

##### `microsoftSentinelDestinationInput`<sup>Optional</sup> <a name="microsoftSentinelDestinationInput" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.microsoftSentinelDestinationInput"></a>

```java
public IResolvable|java.util.List<LogsCustomDestinationMicrosoftSentinelDestination> getMicrosoftSentinelDestinationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination">LogsCustomDestinationMicrosoftSentinelDestination</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `splunkDestinationInput`<sup>Optional</sup> <a name="splunkDestinationInput" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.splunkDestinationInput"></a>

```java
public IResolvable|java.util.List<LogsCustomDestinationSplunkDestination> getSplunkDestinationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination">LogsCustomDestinationSplunkDestination</a>>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `forwardTags`<sup>Required</sup> <a name="forwardTags" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTags"></a>

```java
public java.lang.Boolean|IResolvable getForwardTags();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `forwardTagsRestrictionList`<sup>Required</sup> <a name="forwardTagsRestrictionList" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsRestrictionList"></a>

```java
public java.util.List<java.lang.String> getForwardTagsRestrictionList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forwardTagsRestrictionListType`<sup>Required</sup> <a name="forwardTagsRestrictionListType" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.forwardTagsRestrictionListType"></a>

```java
public java.lang.String getForwardTagsRestrictionListType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestination.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LogsCustomDestinationConfig <a name="LogsCustomDestinationConfig" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_custom_destination.LogsCustomDestinationConfig;

LogsCustomDestinationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .elasticsearchDestination(IResolvable|java.util.List<LogsCustomDestinationElasticsearchDestination>)
//  .enabled(java.lang.Boolean|IResolvable)
//  .forwardTags(java.lang.Boolean|IResolvable)
//  .forwardTagsRestrictionList(java.util.List<java.lang.String>)
//  .forwardTagsRestrictionListType(java.lang.String)
//  .httpDestination(IResolvable|java.util.List<LogsCustomDestinationHttpDestination>)
//  .microsoftSentinelDestination(IResolvable|java.util.List<LogsCustomDestinationMicrosoftSentinelDestination>)
//  .query(java.lang.String)
//  .splunkDestination(IResolvable|java.util.List<LogsCustomDestinationSplunkDestination>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The custom destination name. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.elasticsearchDestination">elasticsearchDestination</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination">LogsCustomDestinationElasticsearchDestination</a>></code> | elasticsearch_destination block. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether logs matching this custom destination should be forwarded or not. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.forwardTags">forwardTags</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether tags from the forwarded logs should be forwarded or not. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.forwardTagsRestrictionList">forwardTagsRestrictionList</a></code> | <code>java.util.List<java.lang.String></code> | List of [tag keys](https://docs.datadoghq.com/getting_started/tagging/#define-tags) to be filtered. 				An empty list represents no restriction is in place and either all or no tags will be 				forwarded depending on `forward_tags_restriction_list_type` parameter. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.forwardTagsRestrictionListType">forwardTagsRestrictionListType</a></code> | <code>java.lang.String</code> | How the `forward_tags_restriction_list` parameter should be interpreted. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.httpDestination">httpDestination</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination">LogsCustomDestinationHttpDestination</a>></code> | http_destination block. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.microsoftSentinelDestination">microsoftSentinelDestination</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination">LogsCustomDestinationMicrosoftSentinelDestination</a>></code> | microsoft_sentinel_destination block. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.query">query</a></code> | <code>java.lang.String</code> | The custom destination query filter. Logs matching this query are forwarded to the destination. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.splunkDestination">splunkDestination</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination">LogsCustomDestinationSplunkDestination</a>></code> | splunk_destination block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The custom destination name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#name LogsCustomDestination#name}

---

##### `elasticsearchDestination`<sup>Optional</sup> <a name="elasticsearchDestination" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.elasticsearchDestination"></a>

```java
public IResolvable|java.util.List<LogsCustomDestinationElasticsearchDestination> getElasticsearchDestination();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination">LogsCustomDestinationElasticsearchDestination</a>>

elasticsearch_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#elasticsearch_destination LogsCustomDestination#elasticsearch_destination}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether logs matching this custom destination should be forwarded or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#enabled LogsCustomDestination#enabled}

---

##### `forwardTags`<sup>Optional</sup> <a name="forwardTags" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.forwardTags"></a>

```java
public java.lang.Boolean|IResolvable getForwardTags();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether tags from the forwarded logs should be forwarded or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#forward_tags LogsCustomDestination#forward_tags}

---

##### `forwardTagsRestrictionList`<sup>Optional</sup> <a name="forwardTagsRestrictionList" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.forwardTagsRestrictionList"></a>

```java
public java.util.List<java.lang.String> getForwardTagsRestrictionList();
```

- *Type:* java.util.List<java.lang.String>

List of [tag keys](https://docs.datadoghq.com/getting_started/tagging/#define-tags) to be filtered. 				An empty list represents no restriction is in place and either all or no tags will be 				forwarded depending on `forward_tags_restriction_list_type` parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#forward_tags_restriction_list LogsCustomDestination#forward_tags_restriction_list}

---

##### `forwardTagsRestrictionListType`<sup>Optional</sup> <a name="forwardTagsRestrictionListType" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.forwardTagsRestrictionListType"></a>

```java
public java.lang.String getForwardTagsRestrictionListType();
```

- *Type:* java.lang.String

How the `forward_tags_restriction_list` parameter should be interpreted.

If `ALLOW_LIST`, then only tags whose keys on the forwarded logs match the ones on the restriction list
are forwarded.
`BLOCK_LIST` works the opposite way. It does not forward the tags matching the ones on the list. Valid values are `ALLOW_LIST`, `BLOCK_LIST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#forward_tags_restriction_list_type LogsCustomDestination#forward_tags_restriction_list_type}

---

##### `httpDestination`<sup>Optional</sup> <a name="httpDestination" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.httpDestination"></a>

```java
public IResolvable|java.util.List<LogsCustomDestinationHttpDestination> getHttpDestination();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination">LogsCustomDestinationHttpDestination</a>>

http_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#http_destination LogsCustomDestination#http_destination}

---

##### `microsoftSentinelDestination`<sup>Optional</sup> <a name="microsoftSentinelDestination" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.microsoftSentinelDestination"></a>

```java
public IResolvable|java.util.List<LogsCustomDestinationMicrosoftSentinelDestination> getMicrosoftSentinelDestination();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination">LogsCustomDestinationMicrosoftSentinelDestination</a>>

microsoft_sentinel_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#microsoft_sentinel_destination LogsCustomDestination#microsoft_sentinel_destination}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

The custom destination query filter. Logs matching this query are forwarded to the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#query LogsCustomDestination#query}

---

##### `splunkDestination`<sup>Optional</sup> <a name="splunkDestination" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationConfig.property.splunkDestination"></a>

```java
public IResolvable|java.util.List<LogsCustomDestinationSplunkDestination> getSplunkDestination();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination">LogsCustomDestinationSplunkDestination</a>>

splunk_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#splunk_destination LogsCustomDestination#splunk_destination}

---

### LogsCustomDestinationElasticsearchDestination <a name="LogsCustomDestinationElasticsearchDestination" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_custom_destination.LogsCustomDestinationElasticsearchDestination;

LogsCustomDestinationElasticsearchDestination.builder()
    .endpoint(java.lang.String)
    .indexName(java.lang.String)
//  .basicAuth(IResolvable|java.util.List<LogsCustomDestinationElasticsearchDestinationBasicAuth>)
//  .indexRotation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | The destination for which logs will be forwarded to. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.property.indexName">indexName</a></code> | <code>java.lang.String</code> | Name of the Elasticsearch index (must follow [Elasticsearch's criteria](https://www.elastic.co/guide/en/elasticsearch/reference/8.11/indices-create-index.html#indices-create-api-path-params)). |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.property.basicAuth">basicAuth</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth">LogsCustomDestinationElasticsearchDestinationBasicAuth</a>></code> | basic_auth block. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.property.indexRotation">indexRotation</a></code> | <code>java.lang.String</code> | Date pattern with US locale and UTC timezone to be appended to the index name after adding '-' 							(that is, '${index_name}-${indexPattern}'). |

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

The destination for which logs will be forwarded to.

Must have HTTPS scheme. Forwarding back to Datadog is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#endpoint LogsCustomDestination#endpoint}

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.property.indexName"></a>

```java
public java.lang.String getIndexName();
```

- *Type:* java.lang.String

Name of the Elasticsearch index (must follow [Elasticsearch's criteria](https://www.elastic.co/guide/en/elasticsearch/reference/8.11/indices-create-index.html#indices-create-api-path-params)).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#index_name LogsCustomDestination#index_name}

---

##### `basicAuth`<sup>Optional</sup> <a name="basicAuth" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.property.basicAuth"></a>

```java
public IResolvable|java.util.List<LogsCustomDestinationElasticsearchDestinationBasicAuth> getBasicAuth();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth">LogsCustomDestinationElasticsearchDestinationBasicAuth</a>>

basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#basic_auth LogsCustomDestination#basic_auth}

---

##### `indexRotation`<sup>Optional</sup> <a name="indexRotation" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination.property.indexRotation"></a>

```java
public java.lang.String getIndexRotation();
```

- *Type:* java.lang.String

Date pattern with US locale and UTC timezone to be appended to the index name after adding '-' 							(that is, '${index_name}-${indexPattern}').

You can customize the index rotation naming pattern by choosing one of these options:
- Hourly: 'yyyy-MM-dd-HH' (as an example, it would render: '2022-10-19-09')
- Daily: 'yyyy-MM-dd' (as an example, it would render: '2022-10-19')
- Weekly: 'yyyy-'W'ww' (as an example, it would render: '2022-W42')
- Monthly: 'yyyy-MM' (as an example, it would render: '2022-10')
If this field is missing or is blank, it means that the index name will always be the same
(that is, no rotation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#index_rotation LogsCustomDestination#index_rotation}

---

### LogsCustomDestinationElasticsearchDestinationBasicAuth <a name="LogsCustomDestinationElasticsearchDestinationBasicAuth" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_custom_destination.LogsCustomDestinationElasticsearchDestinationBasicAuth;

LogsCustomDestinationElasticsearchDestinationBasicAuth.builder()
    .password(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth.property.password">password</a></code> | <code>java.lang.String</code> | The password of the authentication. This field is not returned by the API. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth.property.username">username</a></code> | <code>java.lang.String</code> | The username of the authentication. This field is not returned by the API. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The password of the authentication. This field is not returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#password LogsCustomDestination#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The username of the authentication. This field is not returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#username LogsCustomDestination#username}

---

### LogsCustomDestinationHttpDestination <a name="LogsCustomDestinationHttpDestination" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_custom_destination.LogsCustomDestinationHttpDestination;

LogsCustomDestinationHttpDestination.builder()
    .endpoint(java.lang.String)
//  .basicAuth(IResolvable|java.util.List<LogsCustomDestinationHttpDestinationBasicAuth>)
//  .customHeaderAuth(IResolvable|java.util.List<LogsCustomDestinationHttpDestinationCustomHeaderAuth>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | The destination for which logs will be forwarded to. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination.property.basicAuth">basicAuth</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth">LogsCustomDestinationHttpDestinationBasicAuth</a>></code> | basic_auth block. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination.property.customHeaderAuth">customHeaderAuth</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth">LogsCustomDestinationHttpDestinationCustomHeaderAuth</a>></code> | custom_header_auth block. |

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

The destination for which logs will be forwarded to.

Must have HTTPS scheme. Forwarding back to Datadog is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#endpoint LogsCustomDestination#endpoint}

---

##### `basicAuth`<sup>Optional</sup> <a name="basicAuth" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination.property.basicAuth"></a>

```java
public IResolvable|java.util.List<LogsCustomDestinationHttpDestinationBasicAuth> getBasicAuth();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth">LogsCustomDestinationHttpDestinationBasicAuth</a>>

basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#basic_auth LogsCustomDestination#basic_auth}

---

##### `customHeaderAuth`<sup>Optional</sup> <a name="customHeaderAuth" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination.property.customHeaderAuth"></a>

```java
public IResolvable|java.util.List<LogsCustomDestinationHttpDestinationCustomHeaderAuth> getCustomHeaderAuth();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth">LogsCustomDestinationHttpDestinationCustomHeaderAuth</a>>

custom_header_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#custom_header_auth LogsCustomDestination#custom_header_auth}

---

### LogsCustomDestinationHttpDestinationBasicAuth <a name="LogsCustomDestinationHttpDestinationBasicAuth" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_custom_destination.LogsCustomDestinationHttpDestinationBasicAuth;

LogsCustomDestinationHttpDestinationBasicAuth.builder()
    .password(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth.property.password">password</a></code> | <code>java.lang.String</code> | The password of the authentication. This field is not returned by the API. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth.property.username">username</a></code> | <code>java.lang.String</code> | The username of the authentication. This field is not returned by the API. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The password of the authentication. This field is not returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#password LogsCustomDestination#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The username of the authentication. This field is not returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#username LogsCustomDestination#username}

---

### LogsCustomDestinationHttpDestinationCustomHeaderAuth <a name="LogsCustomDestinationHttpDestinationCustomHeaderAuth" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_custom_destination.LogsCustomDestinationHttpDestinationCustomHeaderAuth;

LogsCustomDestinationHttpDestinationCustomHeaderAuth.builder()
    .headerName(java.lang.String)
    .headerValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth.property.headerName">headerName</a></code> | <code>java.lang.String</code> | The header name of the authentication. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth.property.headerValue">headerValue</a></code> | <code>java.lang.String</code> | The header value of the authentication. This field is not returned by the API. |

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

The header name of the authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#header_name LogsCustomDestination#header_name}

---

##### `headerValue`<sup>Required</sup> <a name="headerValue" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth.property.headerValue"></a>

```java
public java.lang.String getHeaderValue();
```

- *Type:* java.lang.String

The header value of the authentication. This field is not returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#header_value LogsCustomDestination#header_value}

---

### LogsCustomDestinationMicrosoftSentinelDestination <a name="LogsCustomDestinationMicrosoftSentinelDestination" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_custom_destination.LogsCustomDestinationMicrosoftSentinelDestination;

LogsCustomDestinationMicrosoftSentinelDestination.builder()
    .clientId(java.lang.String)
    .dataCollectionEndpoint(java.lang.String)
    .dataCollectionRuleId(java.lang.String)
    .streamName(java.lang.String)
    .tenantId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Client ID from the Datadog Azure Integration. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination.property.dataCollectionEndpoint">dataCollectionEndpoint</a></code> | <code>java.lang.String</code> | Azure Data Collection Endpoint. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination.property.dataCollectionRuleId">dataCollectionRuleId</a></code> | <code>java.lang.String</code> | Azure Data Collection Rule ID. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination.property.streamName">streamName</a></code> | <code>java.lang.String</code> | Azure stream name. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Tenant ID from the Datadog Azure Integration. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Client ID from the Datadog Azure Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#client_id LogsCustomDestination#client_id}

---

##### `dataCollectionEndpoint`<sup>Required</sup> <a name="dataCollectionEndpoint" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination.property.dataCollectionEndpoint"></a>

```java
public java.lang.String getDataCollectionEndpoint();
```

- *Type:* java.lang.String

Azure Data Collection Endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#data_collection_endpoint LogsCustomDestination#data_collection_endpoint}

---

##### `dataCollectionRuleId`<sup>Required</sup> <a name="dataCollectionRuleId" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination.property.dataCollectionRuleId"></a>

```java
public java.lang.String getDataCollectionRuleId();
```

- *Type:* java.lang.String

Azure Data Collection Rule ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#data_collection_rule_id LogsCustomDestination#data_collection_rule_id}

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination.property.streamName"></a>

```java
public java.lang.String getStreamName();
```

- *Type:* java.lang.String

Azure stream name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#stream_name LogsCustomDestination#stream_name}

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Tenant ID from the Datadog Azure Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#tenant_id LogsCustomDestination#tenant_id}

---

### LogsCustomDestinationSplunkDestination <a name="LogsCustomDestinationSplunkDestination" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_custom_destination.LogsCustomDestinationSplunkDestination;

LogsCustomDestinationSplunkDestination.builder()
    .accessToken(java.lang.String)
    .endpoint(java.lang.String)
//  .sourcetype(IResolvable|java.util.List<LogsCustomDestinationSplunkDestinationSourcetype>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination.property.accessToken">accessToken</a></code> | <code>java.lang.String</code> | Access token of the Splunk HTTP Event Collector. This field is not returned by the API. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | The destination for which logs will be forwarded to. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination.property.sourcetype">sourcetype</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetype">LogsCustomDestinationSplunkDestinationSourcetype</a>></code> | sourcetype block. |

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination.property.accessToken"></a>

```java
public java.lang.String getAccessToken();
```

- *Type:* java.lang.String

Access token of the Splunk HTTP Event Collector. This field is not returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#access_token LogsCustomDestination#access_token}

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

The destination for which logs will be forwarded to.

Must have HTTPS scheme. Forwarding back to Datadog is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#endpoint LogsCustomDestination#endpoint}

---

##### `sourcetype`<sup>Optional</sup> <a name="sourcetype" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination.property.sourcetype"></a>

```java
public IResolvable|java.util.List<LogsCustomDestinationSplunkDestinationSourcetype> getSourcetype();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetype">LogsCustomDestinationSplunkDestinationSourcetype</a>>

sourcetype block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#sourcetype LogsCustomDestination#sourcetype}

---

### LogsCustomDestinationSplunkDestinationSourcetype <a name="LogsCustomDestinationSplunkDestinationSourcetype" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetype"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetype.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_custom_destination.LogsCustomDestinationSplunkDestinationSourcetype;

LogsCustomDestinationSplunkDestinationSourcetype.builder()
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetype.property.value">value</a></code> | <code>java.lang.String</code> | The source type string. Set to `null` to omit the sourcetype from forwarded events. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetype.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The source type string. Set to `null` to omit the sourcetype from forwarded events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/logs_custom_destination#value LogsCustomDestination#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LogsCustomDestinationElasticsearchDestinationBasicAuthList <a name="LogsCustomDestinationElasticsearchDestinationBasicAuthList" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_custom_destination.LogsCustomDestinationElasticsearchDestinationBasicAuthList;

new LogsCustomDestinationElasticsearchDestinationBasicAuthList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.get"></a>

```java
public LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth">LogsCustomDestinationElasticsearchDestinationBasicAuth</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LogsCustomDestinationElasticsearchDestinationBasicAuth> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth">LogsCustomDestinationElasticsearchDestinationBasicAuth</a>>

---


### LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference <a name="LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_custom_destination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference;

new LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth">LogsCustomDestinationElasticsearchDestinationBasicAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference.property.internalValue"></a>

```java
public IResolvable|LogsCustomDestinationElasticsearchDestinationBasicAuth getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth">LogsCustomDestinationElasticsearchDestinationBasicAuth</a>

---


### LogsCustomDestinationElasticsearchDestinationList <a name="LogsCustomDestinationElasticsearchDestinationList" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_custom_destination.LogsCustomDestinationElasticsearchDestinationList;

new LogsCustomDestinationElasticsearchDestinationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.get"></a>

```java
public LogsCustomDestinationElasticsearchDestinationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination">LogsCustomDestinationElasticsearchDestination</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LogsCustomDestinationElasticsearchDestination> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination">LogsCustomDestinationElasticsearchDestination</a>>

---


### LogsCustomDestinationElasticsearchDestinationOutputReference <a name="LogsCustomDestinationElasticsearchDestinationOutputReference" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_custom_destination.LogsCustomDestinationElasticsearchDestinationOutputReference;

new LogsCustomDestinationElasticsearchDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.putBasicAuth">putBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.resetBasicAuth">resetBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.resetIndexRotation">resetIndexRotation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBasicAuth` <a name="putBasicAuth" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.putBasicAuth"></a>

```java
public void putBasicAuth(IResolvable|java.util.List<LogsCustomDestinationElasticsearchDestinationBasicAuth> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.putBasicAuth.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth">LogsCustomDestinationElasticsearchDestinationBasicAuth</a>>

---

##### `resetBasicAuth` <a name="resetBasicAuth" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.resetBasicAuth"></a>

```java
public void resetBasicAuth()
```

##### `resetIndexRotation` <a name="resetIndexRotation" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.resetIndexRotation"></a>

```java
public void resetIndexRotation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.basicAuth">basicAuth</a></code> | <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList">LogsCustomDestinationElasticsearchDestinationBasicAuthList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.basicAuthInput">basicAuthInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth">LogsCustomDestinationElasticsearchDestinationBasicAuth</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.indexNameInput">indexNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.indexRotationInput">indexRotationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.indexName">indexName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.indexRotation">indexRotation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination">LogsCustomDestinationElasticsearchDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `basicAuth`<sup>Required</sup> <a name="basicAuth" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.basicAuth"></a>

```java
public LogsCustomDestinationElasticsearchDestinationBasicAuthList getBasicAuth();
```

- *Type:* <a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuthList">LogsCustomDestinationElasticsearchDestinationBasicAuthList</a>

---

##### `basicAuthInput`<sup>Optional</sup> <a name="basicAuthInput" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.basicAuthInput"></a>

```java
public IResolvable|java.util.List<LogsCustomDestinationElasticsearchDestinationBasicAuth> getBasicAuthInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationBasicAuth">LogsCustomDestinationElasticsearchDestinationBasicAuth</a>>

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `indexNameInput`<sup>Optional</sup> <a name="indexNameInput" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.indexNameInput"></a>

```java
public java.lang.String getIndexNameInput();
```

- *Type:* java.lang.String

---

##### `indexRotationInput`<sup>Optional</sup> <a name="indexRotationInput" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.indexRotationInput"></a>

```java
public java.lang.String getIndexRotationInput();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.indexName"></a>

```java
public java.lang.String getIndexName();
```

- *Type:* java.lang.String

---

##### `indexRotation`<sup>Required</sup> <a name="indexRotation" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.indexRotation"></a>

```java
public java.lang.String getIndexRotation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|LogsCustomDestinationElasticsearchDestination getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationElasticsearchDestination">LogsCustomDestinationElasticsearchDestination</a>

---


### LogsCustomDestinationHttpDestinationBasicAuthList <a name="LogsCustomDestinationHttpDestinationBasicAuthList" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_custom_destination.LogsCustomDestinationHttpDestinationBasicAuthList;

new LogsCustomDestinationHttpDestinationBasicAuthList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.get"></a>

```java
public LogsCustomDestinationHttpDestinationBasicAuthOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth">LogsCustomDestinationHttpDestinationBasicAuth</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LogsCustomDestinationHttpDestinationBasicAuth> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth">LogsCustomDestinationHttpDestinationBasicAuth</a>>

---


### LogsCustomDestinationHttpDestinationBasicAuthOutputReference <a name="LogsCustomDestinationHttpDestinationBasicAuthOutputReference" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_custom_destination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference;

new LogsCustomDestinationHttpDestinationBasicAuthOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth">LogsCustomDestinationHttpDestinationBasicAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthOutputReference.property.internalValue"></a>

```java
public IResolvable|LogsCustomDestinationHttpDestinationBasicAuth getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth">LogsCustomDestinationHttpDestinationBasicAuth</a>

---


### LogsCustomDestinationHttpDestinationCustomHeaderAuthList <a name="LogsCustomDestinationHttpDestinationCustomHeaderAuthList" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_custom_destination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList;

new LogsCustomDestinationHttpDestinationCustomHeaderAuthList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.get"></a>

```java
public LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth">LogsCustomDestinationHttpDestinationCustomHeaderAuth</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LogsCustomDestinationHttpDestinationCustomHeaderAuth> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth">LogsCustomDestinationHttpDestinationCustomHeaderAuth</a>>

---


### LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference <a name="LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_custom_destination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference;

new LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.headerValueInput">headerValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.headerName">headerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.headerValue">headerValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth">LogsCustomDestinationHttpDestinationCustomHeaderAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.headerNameInput"></a>

```java
public java.lang.String getHeaderNameInput();
```

- *Type:* java.lang.String

---

##### `headerValueInput`<sup>Optional</sup> <a name="headerValueInput" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.headerValueInput"></a>

```java
public java.lang.String getHeaderValueInput();
```

- *Type:* java.lang.String

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

---

##### `headerValue`<sup>Required</sup> <a name="headerValue" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.headerValue"></a>

```java
public java.lang.String getHeaderValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference.property.internalValue"></a>

```java
public IResolvable|LogsCustomDestinationHttpDestinationCustomHeaderAuth getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth">LogsCustomDestinationHttpDestinationCustomHeaderAuth</a>

---


### LogsCustomDestinationHttpDestinationList <a name="LogsCustomDestinationHttpDestinationList" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_custom_destination.LogsCustomDestinationHttpDestinationList;

new LogsCustomDestinationHttpDestinationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.get"></a>

```java
public LogsCustomDestinationHttpDestinationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination">LogsCustomDestinationHttpDestination</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LogsCustomDestinationHttpDestination> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination">LogsCustomDestinationHttpDestination</a>>

---


### LogsCustomDestinationHttpDestinationOutputReference <a name="LogsCustomDestinationHttpDestinationOutputReference" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_custom_destination.LogsCustomDestinationHttpDestinationOutputReference;

new LogsCustomDestinationHttpDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.putBasicAuth">putBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.putCustomHeaderAuth">putCustomHeaderAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.resetBasicAuth">resetBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.resetCustomHeaderAuth">resetCustomHeaderAuth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBasicAuth` <a name="putBasicAuth" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.putBasicAuth"></a>

```java
public void putBasicAuth(IResolvable|java.util.List<LogsCustomDestinationHttpDestinationBasicAuth> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.putBasicAuth.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth">LogsCustomDestinationHttpDestinationBasicAuth</a>>

---

##### `putCustomHeaderAuth` <a name="putCustomHeaderAuth" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.putCustomHeaderAuth"></a>

```java
public void putCustomHeaderAuth(IResolvable|java.util.List<LogsCustomDestinationHttpDestinationCustomHeaderAuth> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.putCustomHeaderAuth.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth">LogsCustomDestinationHttpDestinationCustomHeaderAuth</a>>

---

##### `resetBasicAuth` <a name="resetBasicAuth" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.resetBasicAuth"></a>

```java
public void resetBasicAuth()
```

##### `resetCustomHeaderAuth` <a name="resetCustomHeaderAuth" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.resetCustomHeaderAuth"></a>

```java
public void resetCustomHeaderAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.basicAuth">basicAuth</a></code> | <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList">LogsCustomDestinationHttpDestinationBasicAuthList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.customHeaderAuth">customHeaderAuth</a></code> | <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList">LogsCustomDestinationHttpDestinationCustomHeaderAuthList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.basicAuthInput">basicAuthInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth">LogsCustomDestinationHttpDestinationBasicAuth</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.customHeaderAuthInput">customHeaderAuthInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth">LogsCustomDestinationHttpDestinationCustomHeaderAuth</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination">LogsCustomDestinationHttpDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `basicAuth`<sup>Required</sup> <a name="basicAuth" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.basicAuth"></a>

```java
public LogsCustomDestinationHttpDestinationBasicAuthList getBasicAuth();
```

- *Type:* <a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuthList">LogsCustomDestinationHttpDestinationBasicAuthList</a>

---

##### `customHeaderAuth`<sup>Required</sup> <a name="customHeaderAuth" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.customHeaderAuth"></a>

```java
public LogsCustomDestinationHttpDestinationCustomHeaderAuthList getCustomHeaderAuth();
```

- *Type:* <a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuthList">LogsCustomDestinationHttpDestinationCustomHeaderAuthList</a>

---

##### `basicAuthInput`<sup>Optional</sup> <a name="basicAuthInput" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.basicAuthInput"></a>

```java
public IResolvable|java.util.List<LogsCustomDestinationHttpDestinationBasicAuth> getBasicAuthInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationBasicAuth">LogsCustomDestinationHttpDestinationBasicAuth</a>>

---

##### `customHeaderAuthInput`<sup>Optional</sup> <a name="customHeaderAuthInput" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.customHeaderAuthInput"></a>

```java
public IResolvable|java.util.List<LogsCustomDestinationHttpDestinationCustomHeaderAuth> getCustomHeaderAuthInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationCustomHeaderAuth">LogsCustomDestinationHttpDestinationCustomHeaderAuth</a>>

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|LogsCustomDestinationHttpDestination getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationHttpDestination">LogsCustomDestinationHttpDestination</a>

---


### LogsCustomDestinationMicrosoftSentinelDestinationList <a name="LogsCustomDestinationMicrosoftSentinelDestinationList" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_custom_destination.LogsCustomDestinationMicrosoftSentinelDestinationList;

new LogsCustomDestinationMicrosoftSentinelDestinationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.get"></a>

```java
public LogsCustomDestinationMicrosoftSentinelDestinationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination">LogsCustomDestinationMicrosoftSentinelDestination</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LogsCustomDestinationMicrosoftSentinelDestination> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination">LogsCustomDestinationMicrosoftSentinelDestination</a>>

---


### LogsCustomDestinationMicrosoftSentinelDestinationOutputReference <a name="LogsCustomDestinationMicrosoftSentinelDestinationOutputReference" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_custom_destination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference;

new LogsCustomDestinationMicrosoftSentinelDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.dataCollectionEndpointInput">dataCollectionEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.dataCollectionRuleIdInput">dataCollectionRuleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.streamNameInput">streamNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.dataCollectionEndpoint">dataCollectionEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.dataCollectionRuleId">dataCollectionRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.streamName">streamName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination">LogsCustomDestinationMicrosoftSentinelDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `dataCollectionEndpointInput`<sup>Optional</sup> <a name="dataCollectionEndpointInput" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.dataCollectionEndpointInput"></a>

```java
public java.lang.String getDataCollectionEndpointInput();
```

- *Type:* java.lang.String

---

##### `dataCollectionRuleIdInput`<sup>Optional</sup> <a name="dataCollectionRuleIdInput" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.dataCollectionRuleIdInput"></a>

```java
public java.lang.String getDataCollectionRuleIdInput();
```

- *Type:* java.lang.String

---

##### `streamNameInput`<sup>Optional</sup> <a name="streamNameInput" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.streamNameInput"></a>

```java
public java.lang.String getStreamNameInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `dataCollectionEndpoint`<sup>Required</sup> <a name="dataCollectionEndpoint" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.dataCollectionEndpoint"></a>

```java
public java.lang.String getDataCollectionEndpoint();
```

- *Type:* java.lang.String

---

##### `dataCollectionRuleId`<sup>Required</sup> <a name="dataCollectionRuleId" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.dataCollectionRuleId"></a>

```java
public java.lang.String getDataCollectionRuleId();
```

- *Type:* java.lang.String

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.streamName"></a>

```java
public java.lang.String getStreamName();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|LogsCustomDestinationMicrosoftSentinelDestination getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationMicrosoftSentinelDestination">LogsCustomDestinationMicrosoftSentinelDestination</a>

---


### LogsCustomDestinationSplunkDestinationList <a name="LogsCustomDestinationSplunkDestinationList" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_custom_destination.LogsCustomDestinationSplunkDestinationList;

new LogsCustomDestinationSplunkDestinationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.get"></a>

```java
public LogsCustomDestinationSplunkDestinationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination">LogsCustomDestinationSplunkDestination</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LogsCustomDestinationSplunkDestination> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination">LogsCustomDestinationSplunkDestination</a>>

---


### LogsCustomDestinationSplunkDestinationOutputReference <a name="LogsCustomDestinationSplunkDestinationOutputReference" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_custom_destination.LogsCustomDestinationSplunkDestinationOutputReference;

new LogsCustomDestinationSplunkDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.putSourcetype">putSourcetype</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.resetSourcetype">resetSourcetype</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourcetype` <a name="putSourcetype" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.putSourcetype"></a>

```java
public void putSourcetype(IResolvable|java.util.List<LogsCustomDestinationSplunkDestinationSourcetype> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.putSourcetype.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetype">LogsCustomDestinationSplunkDestinationSourcetype</a>>

---

##### `resetSourcetype` <a name="resetSourcetype" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.resetSourcetype"></a>

```java
public void resetSourcetype()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.sourcetype">sourcetype</a></code> | <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeList">LogsCustomDestinationSplunkDestinationSourcetypeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.accessTokenInput">accessTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.sourcetypeInput">sourcetypeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetype">LogsCustomDestinationSplunkDestinationSourcetype</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.accessToken">accessToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination">LogsCustomDestinationSplunkDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourcetype`<sup>Required</sup> <a name="sourcetype" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.sourcetype"></a>

```java
public LogsCustomDestinationSplunkDestinationSourcetypeList getSourcetype();
```

- *Type:* <a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeList">LogsCustomDestinationSplunkDestinationSourcetypeList</a>

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.accessTokenInput"></a>

```java
public java.lang.String getAccessTokenInput();
```

- *Type:* java.lang.String

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `sourcetypeInput`<sup>Optional</sup> <a name="sourcetypeInput" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.sourcetypeInput"></a>

```java
public IResolvable|java.util.List<LogsCustomDestinationSplunkDestinationSourcetype> getSourcetypeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetype">LogsCustomDestinationSplunkDestinationSourcetype</a>>

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.accessToken"></a>

```java
public java.lang.String getAccessToken();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|LogsCustomDestinationSplunkDestination getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestination">LogsCustomDestinationSplunkDestination</a>

---


### LogsCustomDestinationSplunkDestinationSourcetypeList <a name="LogsCustomDestinationSplunkDestinationSourcetypeList" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeList.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_custom_destination.LogsCustomDestinationSplunkDestinationSourcetypeList;

new LogsCustomDestinationSplunkDestinationSourcetypeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeList.get"></a>

```java
public LogsCustomDestinationSplunkDestinationSourcetypeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetype">LogsCustomDestinationSplunkDestinationSourcetype</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LogsCustomDestinationSplunkDestinationSourcetype> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetype">LogsCustomDestinationSplunkDestinationSourcetype</a>>

---


### LogsCustomDestinationSplunkDestinationSourcetypeOutputReference <a name="LogsCustomDestinationSplunkDestinationSourcetypeOutputReference" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.logs_custom_destination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference;

new LogsCustomDestinationSplunkDestinationSourcetypeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetype">LogsCustomDestinationSplunkDestinationSourcetype</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetypeOutputReference.property.internalValue"></a>

```java
public IResolvable|LogsCustomDestinationSplunkDestinationSourcetype getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.logsCustomDestination.LogsCustomDestinationSplunkDestinationSourcetype">LogsCustomDestinationSplunkDestinationSourcetype</a>

---



