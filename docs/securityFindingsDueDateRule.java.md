# `securityFindingsDueDateRule` Submodule <a name="`securityFindingsDueDateRule` Submodule" id="@cdktn/provider-datadog.securityFindingsDueDateRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityFindingsDueDateRule <a name="SecurityFindingsDueDateRule" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule datadog_security_findings_due_date_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer"></a>

```java
import io.cdktn.providers.datadog.security_findings_due_date_rule.SecurityFindingsDueDateRule;

SecurityFindingsDueDateRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .action(SecurityFindingsDueDateRuleAction)
    .name(java.lang.String)
    .rule(SecurityFindingsDueDateRuleRule)
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.action">action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction">SecurityFindingsDueDateRuleAction</a></code> | The action to take when the due date rule matches a finding. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the due date rule. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule">SecurityFindingsDueDateRuleRule</a></code> | Defines the scope of findings to which the automation rule applies. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the due date rule is enabled. Defaults to `true`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.action"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction">SecurityFindingsDueDateRuleAction</a>

The action to take when the due date rule matches a finding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#action SecurityFindingsDueDateRule#action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the due date rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#name SecurityFindingsDueDateRule#name}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.rule"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule">SecurityFindingsDueDateRuleRule</a>

Defines the scope of findings to which the automation rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#rule SecurityFindingsDueDateRule#rule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the due date rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#enabled SecurityFindingsDueDateRule#enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAction` <a name="putAction" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.putAction"></a>

```java
public void putAction(SecurityFindingsDueDateRuleAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction">SecurityFindingsDueDateRuleAction</a>

---

##### `putRule` <a name="putRule" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.putRule"></a>

```java
public void putRule(SecurityFindingsDueDateRuleRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule">SecurityFindingsDueDateRuleRule</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.resetEnabled"></a>

```java
public void resetEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityFindingsDueDateRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isConstruct"></a>

```java
import io.cdktn.providers.datadog.security_findings_due_date_rule.SecurityFindingsDueDateRule;

SecurityFindingsDueDateRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.security_findings_due_date_rule.SecurityFindingsDueDateRule;

SecurityFindingsDueDateRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.security_findings_due_date_rule.SecurityFindingsDueDateRule;

SecurityFindingsDueDateRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.security_findings_due_date_rule.SecurityFindingsDueDateRule;

SecurityFindingsDueDateRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecurityFindingsDueDateRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SecurityFindingsDueDateRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecurityFindingsDueDateRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecurityFindingsDueDateRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SecurityFindingsDueDateRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.action">action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference">SecurityFindingsDueDateRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference">SecurityFindingsDueDateRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.actionInput">actionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction">SecurityFindingsDueDateRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.ruleInput">ruleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule">SecurityFindingsDueDateRuleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.action"></a>

```java
public SecurityFindingsDueDateRuleActionOutputReference getAction();
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference">SecurityFindingsDueDateRuleActionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.rule"></a>

```java
public SecurityFindingsDueDateRuleRuleOutputReference getRule();
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference">SecurityFindingsDueDateRuleRuleOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.actionInput"></a>

```java
public IResolvable|SecurityFindingsDueDateRuleAction getActionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction">SecurityFindingsDueDateRuleAction</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.ruleInput"></a>

```java
public IResolvable|SecurityFindingsDueDateRuleRule getRuleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule">SecurityFindingsDueDateRuleRule</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityFindingsDueDateRuleAction <a name="SecurityFindingsDueDateRuleAction" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction.Initializer"></a>

```java
import io.cdktn.providers.datadog.security_findings_due_date_rule.SecurityFindingsDueDateRuleAction;

SecurityFindingsDueDateRuleAction.builder()
    .dueDaysPerSeverity(IResolvable|java.util.List<SecurityFindingsDueDateRuleActionDueDaysPerSeverity>)
    .dueFrom(java.lang.String)
//  .reasonDescription(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction.property.dueDaysPerSeverity">dueDaysPerSeverity</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity">SecurityFindingsDueDateRuleActionDueDaysPerSeverity</a>></code> | A list of severity-to-due-date mappings. Each severity may appear at most once. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction.property.dueFrom">dueFrom</a></code> | <code>java.lang.String</code> | The reference point from which the due date is calculated. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction.property.reasonDescription">reasonDescription</a></code> | <code>java.lang.String</code> | An optional description providing more context for the due date assignment. |

---

##### `dueDaysPerSeverity`<sup>Required</sup> <a name="dueDaysPerSeverity" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction.property.dueDaysPerSeverity"></a>

```java
public IResolvable|java.util.List<SecurityFindingsDueDateRuleActionDueDaysPerSeverity> getDueDaysPerSeverity();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity">SecurityFindingsDueDateRuleActionDueDaysPerSeverity</a>>

A list of severity-to-due-date mappings. Each severity may appear at most once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#due_days_per_severity SecurityFindingsDueDateRule#due_days_per_severity}

---

##### `dueFrom`<sup>Required</sup> <a name="dueFrom" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction.property.dueFrom"></a>

```java
public java.lang.String getDueFrom();
```

- *Type:* java.lang.String

The reference point from which the due date is calculated.

When `fix_available` is selected but not applicable to the finding type, `first_seen` is used instead. Valid values are `first_seen`, `fix_available`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#due_from SecurityFindingsDueDateRule#due_from}

---

##### `reasonDescription`<sup>Optional</sup> <a name="reasonDescription" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction.property.reasonDescription"></a>

```java
public java.lang.String getReasonDescription();
```

- *Type:* java.lang.String

An optional description providing more context for the due date assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#reason_description SecurityFindingsDueDateRule#reason_description}

---

### SecurityFindingsDueDateRuleActionDueDaysPerSeverity <a name="SecurityFindingsDueDateRuleActionDueDaysPerSeverity" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity.Initializer"></a>

```java
import io.cdktn.providers.datadog.security_findings_due_date_rule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity;

SecurityFindingsDueDateRuleActionDueDaysPerSeverity.builder()
    .dueInDays(java.lang.Number)
    .severity(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity.property.dueInDays">dueInDays</a></code> | <code>java.lang.Number</code> | The number of days from the reference point until the finding is due. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity.property.severity">severity</a></code> | <code>java.lang.String</code> | A severity level used to configure due date thresholds. Valid values are `critical`, `high`, `medium`, `low`, `info`, `none`, `unknown`. |

---

##### `dueInDays`<sup>Required</sup> <a name="dueInDays" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity.property.dueInDays"></a>

```java
public java.lang.Number getDueInDays();
```

- *Type:* java.lang.Number

The number of days from the reference point until the finding is due.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#due_in_days SecurityFindingsDueDateRule#due_in_days}

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

A severity level used to configure due date thresholds. Valid values are `critical`, `high`, `medium`, `low`, `info`, `none`, `unknown`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#severity SecurityFindingsDueDateRule#severity}

---

### SecurityFindingsDueDateRuleConfig <a name="SecurityFindingsDueDateRuleConfig" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.security_findings_due_date_rule.SecurityFindingsDueDateRuleConfig;

SecurityFindingsDueDateRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .action(SecurityFindingsDueDateRuleAction)
    .name(java.lang.String)
    .rule(SecurityFindingsDueDateRuleRule)
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.action">action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction">SecurityFindingsDueDateRuleAction</a></code> | The action to take when the due date rule matches a finding. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the due date rule. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule">SecurityFindingsDueDateRuleRule</a></code> | Defines the scope of findings to which the automation rule applies. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the due date rule is enabled. Defaults to `true`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.action"></a>

```java
public SecurityFindingsDueDateRuleAction getAction();
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction">SecurityFindingsDueDateRuleAction</a>

The action to take when the due date rule matches a finding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#action SecurityFindingsDueDateRule#action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the due date rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#name SecurityFindingsDueDateRule#name}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.rule"></a>

```java
public SecurityFindingsDueDateRuleRule getRule();
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule">SecurityFindingsDueDateRuleRule</a>

Defines the scope of findings to which the automation rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#rule SecurityFindingsDueDateRule#rule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the due date rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#enabled SecurityFindingsDueDateRule#enabled}

---

### SecurityFindingsDueDateRuleRule <a name="SecurityFindingsDueDateRuleRule" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule.Initializer"></a>

```java
import io.cdktn.providers.datadog.security_findings_due_date_rule.SecurityFindingsDueDateRuleRule;

SecurityFindingsDueDateRuleRule.builder()
    .findingTypes(java.util.List<java.lang.String>)
//  .query(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule.property.findingTypes">findingTypes</a></code> | <code>java.util.List<java.lang.String></code> | The list of security finding types that the automation rule applies to. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule.property.query">query</a></code> | <code>java.lang.String</code> | A search query to further filter the findings matched by this rule. |

---

##### `findingTypes`<sup>Required</sup> <a name="findingTypes" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule.property.findingTypes"></a>

```java
public java.util.List<java.lang.String> getFindingTypes();
```

- *Type:* java.util.List<java.lang.String>

The list of security finding types that the automation rule applies to.

Valid values are `api_security`, `attack_path`, `host_and_container_vulnerability`, `iac_misconfiguration`, `identity_risk`, `library_vulnerability`, `misconfiguration`, `runtime_code_vulnerability`, `secret`, `static_code_vulnerability`, `workload_activity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#finding_types SecurityFindingsDueDateRule#finding_types}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

A search query to further filter the findings matched by this rule.

The `@workflow.*` namespace and `@status` fields are not permitted. For a reference of available fields, see the [Security Findings schema documentation](https://docs.datadoghq.com/security/guide/findings-schema/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#query SecurityFindingsDueDateRule#query}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityFindingsDueDateRuleActionDueDaysPerSeverityList <a name="SecurityFindingsDueDateRuleActionDueDaysPerSeverityList" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.Initializer"></a>

```java
import io.cdktn.providers.datadog.security_findings_due_date_rule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList;

new SecurityFindingsDueDateRuleActionDueDaysPerSeverityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.get"></a>

```java
public SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity">SecurityFindingsDueDateRuleActionDueDaysPerSeverity</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SecurityFindingsDueDateRuleActionDueDaysPerSeverity> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity">SecurityFindingsDueDateRuleActionDueDaysPerSeverity</a>>

---


### SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference <a name="SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.security_findings_due_date_rule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference;

new SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.dueInDaysInput">dueInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.severityInput">severityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.dueInDays">dueInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity">SecurityFindingsDueDateRuleActionDueDaysPerSeverity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dueInDaysInput`<sup>Optional</sup> <a name="dueInDaysInput" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.dueInDaysInput"></a>

```java
public java.lang.Number getDueInDaysInput();
```

- *Type:* java.lang.Number

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.severityInput"></a>

```java
public java.lang.String getSeverityInput();
```

- *Type:* java.lang.String

---

##### `dueInDays`<sup>Required</sup> <a name="dueInDays" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.dueInDays"></a>

```java
public java.lang.Number getDueInDays();
```

- *Type:* java.lang.Number

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityFindingsDueDateRuleActionDueDaysPerSeverity getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity">SecurityFindingsDueDateRuleActionDueDaysPerSeverity</a>

---


### SecurityFindingsDueDateRuleActionOutputReference <a name="SecurityFindingsDueDateRuleActionOutputReference" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.security_findings_due_date_rule.SecurityFindingsDueDateRuleActionOutputReference;

new SecurityFindingsDueDateRuleActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.putDueDaysPerSeverity">putDueDaysPerSeverity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.resetReasonDescription">resetReasonDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDueDaysPerSeverity` <a name="putDueDaysPerSeverity" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.putDueDaysPerSeverity"></a>

```java
public void putDueDaysPerSeverity(IResolvable|java.util.List<SecurityFindingsDueDateRuleActionDueDaysPerSeverity> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.putDueDaysPerSeverity.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity">SecurityFindingsDueDateRuleActionDueDaysPerSeverity</a>>

---

##### `resetReasonDescription` <a name="resetReasonDescription" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.resetReasonDescription"></a>

```java
public void resetReasonDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.dueDaysPerSeverity">dueDaysPerSeverity</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList">SecurityFindingsDueDateRuleActionDueDaysPerSeverityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.dueDaysPerSeverityInput">dueDaysPerSeverityInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity">SecurityFindingsDueDateRuleActionDueDaysPerSeverity</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.dueFromInput">dueFromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.reasonDescriptionInput">reasonDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.dueFrom">dueFrom</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.reasonDescription">reasonDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction">SecurityFindingsDueDateRuleAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dueDaysPerSeverity`<sup>Required</sup> <a name="dueDaysPerSeverity" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.dueDaysPerSeverity"></a>

```java
public SecurityFindingsDueDateRuleActionDueDaysPerSeverityList getDueDaysPerSeverity();
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList">SecurityFindingsDueDateRuleActionDueDaysPerSeverityList</a>

---

##### `dueDaysPerSeverityInput`<sup>Optional</sup> <a name="dueDaysPerSeverityInput" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.dueDaysPerSeverityInput"></a>

```java
public IResolvable|java.util.List<SecurityFindingsDueDateRuleActionDueDaysPerSeverity> getDueDaysPerSeverityInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity">SecurityFindingsDueDateRuleActionDueDaysPerSeverity</a>>

---

##### `dueFromInput`<sup>Optional</sup> <a name="dueFromInput" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.dueFromInput"></a>

```java
public java.lang.String getDueFromInput();
```

- *Type:* java.lang.String

---

##### `reasonDescriptionInput`<sup>Optional</sup> <a name="reasonDescriptionInput" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.reasonDescriptionInput"></a>

```java
public java.lang.String getReasonDescriptionInput();
```

- *Type:* java.lang.String

---

##### `dueFrom`<sup>Required</sup> <a name="dueFrom" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.dueFrom"></a>

```java
public java.lang.String getDueFrom();
```

- *Type:* java.lang.String

---

##### `reasonDescription`<sup>Required</sup> <a name="reasonDescription" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.reasonDescription"></a>

```java
public java.lang.String getReasonDescription();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityFindingsDueDateRuleAction getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction">SecurityFindingsDueDateRuleAction</a>

---


### SecurityFindingsDueDateRuleRuleOutputReference <a name="SecurityFindingsDueDateRuleRuleOutputReference" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.security_findings_due_date_rule.SecurityFindingsDueDateRuleRuleOutputReference;

new SecurityFindingsDueDateRuleRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQuery` <a name="resetQuery" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.resetQuery"></a>

```java
public void resetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.findingTypesInput">findingTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.findingTypes">findingTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule">SecurityFindingsDueDateRuleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `findingTypesInput`<sup>Optional</sup> <a name="findingTypesInput" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.findingTypesInput"></a>

```java
public java.util.List<java.lang.String> getFindingTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `findingTypes`<sup>Required</sup> <a name="findingTypes" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.findingTypes"></a>

```java
public java.util.List<java.lang.String> getFindingTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityFindingsDueDateRuleRule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule">SecurityFindingsDueDateRuleRule</a>

---



