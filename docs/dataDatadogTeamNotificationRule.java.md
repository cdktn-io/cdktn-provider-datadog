# `dataDatadogTeamNotificationRule` Submodule <a name="`dataDatadogTeamNotificationRule` Submodule" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogTeamNotificationRule <a name="DataDatadogTeamNotificationRule" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/data-sources/team_notification_rule datadog_team_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_team_notification_rule.DataDatadogTeamNotificationRule;

DataDatadogTeamNotificationRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .ruleId(java.lang.String)
    .teamId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer.parameter.ruleId">ruleId</a></code> | <code>java.lang.String</code> | The notification rule ID to fetch. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer.parameter.teamId">teamId</a></code> | <code>java.lang.String</code> | The team ID to fetch the notification rule for. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer.parameter.ruleId"></a>

- *Type:* java.lang.String

The notification rule ID to fetch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/data-sources/team_notification_rule#rule_id DataDatadogTeamNotificationRule#rule_id}

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.Initializer.parameter.teamId"></a>

- *Type:* java.lang.String

The team ID to fetch the notification rule for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/data-sources/team_notification_rule#team_id DataDatadogTeamNotificationRule#team_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogTeamNotificationRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.isConstruct"></a>

```java
import io.cdktn.providers.datadog.data_datadog_team_notification_rule.DataDatadogTeamNotificationRule;

DataDatadogTeamNotificationRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.data_datadog_team_notification_rule.DataDatadogTeamNotificationRule;

DataDatadogTeamNotificationRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.isTerraformDataSource"></a>

```java
import io.cdktn.providers.datadog.data_datadog_team_notification_rule.DataDatadogTeamNotificationRule;

DataDatadogTeamNotificationRule.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.data_datadog_team_notification_rule.DataDatadogTeamNotificationRule;

DataDatadogTeamNotificationRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatadogTeamNotificationRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatadogTeamNotificationRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatadogTeamNotificationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatadogTeamNotificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/data-sources/team_notification_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogTeamNotificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.email">email</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference">DataDatadogTeamNotificationRuleEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.msTeams">msTeams</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference">DataDatadogTeamNotificationRuleMsTeamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.pagerduty">pagerduty</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference">DataDatadogTeamNotificationRulePagerdutyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.slack">slack</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference">DataDatadogTeamNotificationRuleSlackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.ruleIdInput">ruleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.teamIdInput">teamIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.ruleId">ruleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.teamId">teamId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.email"></a>

```java
public DataDatadogTeamNotificationRuleEmailOutputReference getEmail();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference">DataDatadogTeamNotificationRuleEmailOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `msTeams`<sup>Required</sup> <a name="msTeams" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.msTeams"></a>

```java
public DataDatadogTeamNotificationRuleMsTeamsOutputReference getMsTeams();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference">DataDatadogTeamNotificationRuleMsTeamsOutputReference</a>

---

##### `pagerduty`<sup>Required</sup> <a name="pagerduty" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.pagerduty"></a>

```java
public DataDatadogTeamNotificationRulePagerdutyOutputReference getPagerduty();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference">DataDatadogTeamNotificationRulePagerdutyOutputReference</a>

---

##### `slack`<sup>Required</sup> <a name="slack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.slack"></a>

```java
public DataDatadogTeamNotificationRuleSlackOutputReference getSlack();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference">DataDatadogTeamNotificationRuleSlackOutputReference</a>

---

##### `ruleIdInput`<sup>Optional</sup> <a name="ruleIdInput" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.ruleIdInput"></a>

```java
public java.lang.String getRuleIdInput();
```

- *Type:* java.lang.String

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.teamIdInput"></a>

```java
public java.lang.String getTeamIdInput();
```

- *Type:* java.lang.String

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.ruleId"></a>

```java
public java.lang.String getRuleId();
```

- *Type:* java.lang.String

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogTeamNotificationRuleConfig <a name="DataDatadogTeamNotificationRuleConfig" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_team_notification_rule.DataDatadogTeamNotificationRuleConfig;

DataDatadogTeamNotificationRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .ruleId(java.lang.String)
    .teamId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.ruleId">ruleId</a></code> | <code>java.lang.String</code> | The notification rule ID to fetch. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.teamId">teamId</a></code> | <code>java.lang.String</code> | The team ID to fetch the notification rule for. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.ruleId"></a>

```java
public java.lang.String getRuleId();
```

- *Type:* java.lang.String

The notification rule ID to fetch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/data-sources/team_notification_rule#rule_id DataDatadogTeamNotificationRule#rule_id}

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleConfig.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

The team ID to fetch the notification rule for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/data-sources/team_notification_rule#team_id DataDatadogTeamNotificationRule#team_id}

---

### DataDatadogTeamNotificationRuleEmail <a name="DataDatadogTeamNotificationRuleEmail" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmail.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_team_notification_rule.DataDatadogTeamNotificationRuleEmail;

DataDatadogTeamNotificationRuleEmail.builder()
    .build();
```


### DataDatadogTeamNotificationRuleMsTeams <a name="DataDatadogTeamNotificationRuleMsTeams" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeams.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_team_notification_rule.DataDatadogTeamNotificationRuleMsTeams;

DataDatadogTeamNotificationRuleMsTeams.builder()
    .build();
```


### DataDatadogTeamNotificationRulePagerduty <a name="DataDatadogTeamNotificationRulePagerduty" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerduty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerduty.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_team_notification_rule.DataDatadogTeamNotificationRulePagerduty;

DataDatadogTeamNotificationRulePagerduty.builder()
    .build();
```


### DataDatadogTeamNotificationRuleSlack <a name="DataDatadogTeamNotificationRuleSlack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlack.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_team_notification_rule.DataDatadogTeamNotificationRuleSlack;

DataDatadogTeamNotificationRuleSlack.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogTeamNotificationRuleEmailOutputReference <a name="DataDatadogTeamNotificationRuleEmailOutputReference" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_team_notification_rule.DataDatadogTeamNotificationRuleEmailOutputReference;

new DataDatadogTeamNotificationRuleEmailOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmail">DataDatadogTeamNotificationRuleEmail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmailOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatadogTeamNotificationRuleEmail getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleEmail">DataDatadogTeamNotificationRuleEmail</a>

---


### DataDatadogTeamNotificationRuleMsTeamsOutputReference <a name="DataDatadogTeamNotificationRuleMsTeamsOutputReference" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_team_notification_rule.DataDatadogTeamNotificationRuleMsTeamsOutputReference;

new DataDatadogTeamNotificationRuleMsTeamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.property.connectorName">connectorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeams">DataDatadogTeamNotificationRuleMsTeams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectorName`<sup>Required</sup> <a name="connectorName" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.property.connectorName"></a>

```java
public java.lang.String getConnectorName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeamsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatadogTeamNotificationRuleMsTeams getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleMsTeams">DataDatadogTeamNotificationRuleMsTeams</a>

---


### DataDatadogTeamNotificationRulePagerdutyOutputReference <a name="DataDatadogTeamNotificationRulePagerdutyOutputReference" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_team_notification_rule.DataDatadogTeamNotificationRulePagerdutyOutputReference;

new DataDatadogTeamNotificationRulePagerdutyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerduty">DataDatadogTeamNotificationRulePagerduty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerdutyOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatadogTeamNotificationRulePagerduty getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRulePagerduty">DataDatadogTeamNotificationRulePagerduty</a>

---


### DataDatadogTeamNotificationRuleSlackOutputReference <a name="DataDatadogTeamNotificationRuleSlackOutputReference" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_team_notification_rule.DataDatadogTeamNotificationRuleSlackOutputReference;

new DataDatadogTeamNotificationRuleSlackOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.property.channel">channel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.property.workspace">workspace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlack">DataDatadogTeamNotificationRuleSlack</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.property.workspace"></a>

```java
public java.lang.String getWorkspace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlackOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatadogTeamNotificationRuleSlack getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRule.DataDatadogTeamNotificationRuleSlack">DataDatadogTeamNotificationRuleSlack</a>

---



