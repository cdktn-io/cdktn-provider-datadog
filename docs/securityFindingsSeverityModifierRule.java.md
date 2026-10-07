# `securityFindingsSeverityModifierRule` Submodule <a name="`securityFindingsSeverityModifierRule` Submodule" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityFindingsSeverityModifierRule <a name="SecurityFindingsSeverityModifierRule" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule datadog_security_findings_severity_modifier_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer"></a>

```java
import io.cdktn.providers.datadog.security_findings_severity_modifier_rule.SecurityFindingsSeverityModifierRule;

SecurityFindingsSeverityModifierRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .action(SecurityFindingsSeverityModifierRuleAction)
    .name(java.lang.String)
    .rule(SecurityFindingsSeverityModifierRuleRule)
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.action">action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction">SecurityFindingsSeverityModifierRuleAction</a></code> | The action to take when a severity modifier rule matches a finding. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the severity modifier rule. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule">SecurityFindingsSeverityModifierRuleRule</a></code> | Defines the scope of findings to which the automation rule applies. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the severity modifier rule is enabled. Defaults to `true`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.action"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction">SecurityFindingsSeverityModifierRuleAction</a>

The action to take when a severity modifier rule matches a finding.

This is a discriminated union on `type`: `set` assigns a fixed severity, while `shift` moves the severity up or down by one severity rank. In this resource the union is expressed as the `set` and `shift` blocks; exactly one must be provided. A severity modifier rule's `rule.query` must not filter on `@severity` or on the `@severity_details.user_adjusted.*` namespace. Use `@severity_details.adjusted.value` instead, which reflects the severity before user-defined adjustments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#action SecurityFindingsSeverityModifierRule#action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the severity modifier rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#name SecurityFindingsSeverityModifierRule#name}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.rule"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule">SecurityFindingsSeverityModifierRuleRule</a>

Defines the scope of findings to which the automation rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#rule SecurityFindingsSeverityModifierRule#rule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the severity modifier rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#enabled SecurityFindingsSeverityModifierRule#enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAction` <a name="putAction" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.putAction"></a>

```java
public void putAction(SecurityFindingsSeverityModifierRuleAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction">SecurityFindingsSeverityModifierRuleAction</a>

---

##### `putRule` <a name="putRule" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.putRule"></a>

```java
public void putRule(SecurityFindingsSeverityModifierRuleRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule">SecurityFindingsSeverityModifierRuleRule</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.resetEnabled"></a>

```java
public void resetEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityFindingsSeverityModifierRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isConstruct"></a>

```java
import io.cdktn.providers.datadog.security_findings_severity_modifier_rule.SecurityFindingsSeverityModifierRule;

SecurityFindingsSeverityModifierRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.security_findings_severity_modifier_rule.SecurityFindingsSeverityModifierRule;

SecurityFindingsSeverityModifierRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.security_findings_severity_modifier_rule.SecurityFindingsSeverityModifierRule;

SecurityFindingsSeverityModifierRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.security_findings_severity_modifier_rule.SecurityFindingsSeverityModifierRule;

SecurityFindingsSeverityModifierRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecurityFindingsSeverityModifierRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SecurityFindingsSeverityModifierRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecurityFindingsSeverityModifierRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecurityFindingsSeverityModifierRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SecurityFindingsSeverityModifierRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.action">action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference">SecurityFindingsSeverityModifierRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference">SecurityFindingsSeverityModifierRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.actionInput">actionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction">SecurityFindingsSeverityModifierRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.ruleInput">ruleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule">SecurityFindingsSeverityModifierRuleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.action"></a>

```java
public SecurityFindingsSeverityModifierRuleActionOutputReference getAction();
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference">SecurityFindingsSeverityModifierRuleActionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.rule"></a>

```java
public SecurityFindingsSeverityModifierRuleRuleOutputReference getRule();
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference">SecurityFindingsSeverityModifierRuleRuleOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.actionInput"></a>

```java
public IResolvable|SecurityFindingsSeverityModifierRuleAction getActionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction">SecurityFindingsSeverityModifierRuleAction</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.ruleInput"></a>

```java
public IResolvable|SecurityFindingsSeverityModifierRuleRule getRuleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule">SecurityFindingsSeverityModifierRuleRule</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityFindingsSeverityModifierRuleAction <a name="SecurityFindingsSeverityModifierRuleAction" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction.Initializer"></a>

```java
import io.cdktn.providers.datadog.security_findings_severity_modifier_rule.SecurityFindingsSeverityModifierRuleAction;

SecurityFindingsSeverityModifierRuleAction.builder()
//  .set(SecurityFindingsSeverityModifierRuleActionSet)
//  .shift(SecurityFindingsSeverityModifierRuleActionShift)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction.property.set">set</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet">SecurityFindingsSeverityModifierRuleActionSet</a></code> | Sets matched findings to a fixed severity. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction.property.shift">shift</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift">SecurityFindingsSeverityModifierRuleActionShift</a></code> | Shifts matched findings up or down by one severity rank. |

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction.property.set"></a>

```java
public SecurityFindingsSeverityModifierRuleActionSet getSet();
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet">SecurityFindingsSeverityModifierRuleActionSet</a>

Sets matched findings to a fixed severity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#set SecurityFindingsSeverityModifierRule#set}

---

##### `shift`<sup>Optional</sup> <a name="shift" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction.property.shift"></a>

```java
public SecurityFindingsSeverityModifierRuleActionShift getShift();
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift">SecurityFindingsSeverityModifierRuleActionShift</a>

Shifts matched findings up or down by one severity rank.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#shift SecurityFindingsSeverityModifierRule#shift}

---

### SecurityFindingsSeverityModifierRuleActionSet <a name="SecurityFindingsSeverityModifierRuleActionSet" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet.Initializer"></a>

```java
import io.cdktn.providers.datadog.security_findings_severity_modifier_rule.SecurityFindingsSeverityModifierRuleActionSet;

SecurityFindingsSeverityModifierRuleActionSet.builder()
    .severity(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet.property.severity">severity</a></code> | <code>java.lang.String</code> | The severity to assign to matched findings. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet.property.description">description</a></code> | <code>java.lang.String</code> | An optional free-form explanation for the severity change. |

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

The severity to assign to matched findings.

`info_none` is not supported for the `iac_misconfiguration`, `runtime_code_vulnerability`, `secret`, or `static_code_vulnerability` finding types. Valid values are `info_none`, `low`, `medium`, `high`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#severity SecurityFindingsSeverityModifierRule#severity}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional free-form explanation for the severity change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#description SecurityFindingsSeverityModifierRule#description}

---

### SecurityFindingsSeverityModifierRuleActionShift <a name="SecurityFindingsSeverityModifierRuleActionShift" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift.Initializer"></a>

```java
import io.cdktn.providers.datadog.security_findings_severity_modifier_rule.SecurityFindingsSeverityModifierRuleActionShift;

SecurityFindingsSeverityModifierRuleActionShift.builder()
    .severityDelta(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift.property.severityDelta">severityDelta</a></code> | <code>java.lang.String</code> | The direction in which to shift the severity of matched findings by one rank. Valid values are `up_one`, `down_one`. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift.property.description">description</a></code> | <code>java.lang.String</code> | An optional free-form explanation for the severity change. |

---

##### `severityDelta`<sup>Required</sup> <a name="severityDelta" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift.property.severityDelta"></a>

```java
public java.lang.String getSeverityDelta();
```

- *Type:* java.lang.String

The direction in which to shift the severity of matched findings by one rank. Valid values are `up_one`, `down_one`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#severity_delta SecurityFindingsSeverityModifierRule#severity_delta}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional free-form explanation for the severity change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#description SecurityFindingsSeverityModifierRule#description}

---

### SecurityFindingsSeverityModifierRuleConfig <a name="SecurityFindingsSeverityModifierRuleConfig" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.security_findings_severity_modifier_rule.SecurityFindingsSeverityModifierRuleConfig;

SecurityFindingsSeverityModifierRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .action(SecurityFindingsSeverityModifierRuleAction)
    .name(java.lang.String)
    .rule(SecurityFindingsSeverityModifierRuleRule)
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.action">action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction">SecurityFindingsSeverityModifierRuleAction</a></code> | The action to take when a severity modifier rule matches a finding. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the severity modifier rule. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule">SecurityFindingsSeverityModifierRuleRule</a></code> | Defines the scope of findings to which the automation rule applies. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the severity modifier rule is enabled. Defaults to `true`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.action"></a>

```java
public SecurityFindingsSeverityModifierRuleAction getAction();
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction">SecurityFindingsSeverityModifierRuleAction</a>

The action to take when a severity modifier rule matches a finding.

This is a discriminated union on `type`: `set` assigns a fixed severity, while `shift` moves the severity up or down by one severity rank. In this resource the union is expressed as the `set` and `shift` blocks; exactly one must be provided. A severity modifier rule's `rule.query` must not filter on `@severity` or on the `@severity_details.user_adjusted.*` namespace. Use `@severity_details.adjusted.value` instead, which reflects the severity before user-defined adjustments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#action SecurityFindingsSeverityModifierRule#action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the severity modifier rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#name SecurityFindingsSeverityModifierRule#name}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.rule"></a>

```java
public SecurityFindingsSeverityModifierRuleRule getRule();
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule">SecurityFindingsSeverityModifierRuleRule</a>

Defines the scope of findings to which the automation rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#rule SecurityFindingsSeverityModifierRule#rule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the severity modifier rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#enabled SecurityFindingsSeverityModifierRule#enabled}

---

### SecurityFindingsSeverityModifierRuleRule <a name="SecurityFindingsSeverityModifierRuleRule" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule.Initializer"></a>

```java
import io.cdktn.providers.datadog.security_findings_severity_modifier_rule.SecurityFindingsSeverityModifierRuleRule;

SecurityFindingsSeverityModifierRuleRule.builder()
    .findingTypes(java.util.List<java.lang.String>)
//  .query(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule.property.findingTypes">findingTypes</a></code> | <code>java.util.List<java.lang.String></code> | The list of security finding types that the automation rule applies to. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule.property.query">query</a></code> | <code>java.lang.String</code> | A search query to further filter the findings matched by this rule. |

---

##### `findingTypes`<sup>Required</sup> <a name="findingTypes" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule.property.findingTypes"></a>

```java
public java.util.List<java.lang.String> getFindingTypes();
```

- *Type:* java.util.List<java.lang.String>

The list of security finding types that the automation rule applies to.

Valid values are `api_security`, `attack_path`, `host_and_container_vulnerability`, `iac_misconfiguration`, `identity_risk`, `library_vulnerability`, `misconfiguration`, `runtime_code_vulnerability`, `secret`, `static_code_vulnerability`, `workload_activity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#finding_types SecurityFindingsSeverityModifierRule#finding_types}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

A search query to further filter the findings matched by this rule.

The `@workflow.*` namespace and `@status` fields are not permitted. For a reference of available fields, see the [Security Findings schema documentation](https://docs.datadoghq.com/security/guide/findings-schema/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#query SecurityFindingsSeverityModifierRule#query}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityFindingsSeverityModifierRuleActionOutputReference <a name="SecurityFindingsSeverityModifierRuleActionOutputReference" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.security_findings_severity_modifier_rule.SecurityFindingsSeverityModifierRuleActionOutputReference;

new SecurityFindingsSeverityModifierRuleActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.putSet">putSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.putShift">putShift</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.resetSet">resetSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.resetShift">resetShift</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSet` <a name="putSet" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.putSet"></a>

```java
public void putSet(SecurityFindingsSeverityModifierRuleActionSet value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.putSet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet">SecurityFindingsSeverityModifierRuleActionSet</a>

---

##### `putShift` <a name="putShift" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.putShift"></a>

```java
public void putShift(SecurityFindingsSeverityModifierRuleActionShift value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.putShift.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift">SecurityFindingsSeverityModifierRuleActionShift</a>

---

##### `resetSet` <a name="resetSet" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.resetSet"></a>

```java
public void resetSet()
```

##### `resetShift` <a name="resetShift" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.resetShift"></a>

```java
public void resetShift()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.set">set</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference">SecurityFindingsSeverityModifierRuleActionSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.shift">shift</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference">SecurityFindingsSeverityModifierRuleActionShiftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.setInput">setInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet">SecurityFindingsSeverityModifierRuleActionSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.shiftInput">shiftInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift">SecurityFindingsSeverityModifierRuleActionShift</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction">SecurityFindingsSeverityModifierRuleAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.set"></a>

```java
public SecurityFindingsSeverityModifierRuleActionSetOutputReference getSet();
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference">SecurityFindingsSeverityModifierRuleActionSetOutputReference</a>

---

##### `shift`<sup>Required</sup> <a name="shift" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.shift"></a>

```java
public SecurityFindingsSeverityModifierRuleActionShiftOutputReference getShift();
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference">SecurityFindingsSeverityModifierRuleActionShiftOutputReference</a>

---

##### `setInput`<sup>Optional</sup> <a name="setInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.setInput"></a>

```java
public IResolvable|SecurityFindingsSeverityModifierRuleActionSet getSetInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet">SecurityFindingsSeverityModifierRuleActionSet</a>

---

##### `shiftInput`<sup>Optional</sup> <a name="shiftInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.shiftInput"></a>

```java
public IResolvable|SecurityFindingsSeverityModifierRuleActionShift getShiftInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift">SecurityFindingsSeverityModifierRuleActionShift</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityFindingsSeverityModifierRuleAction getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction">SecurityFindingsSeverityModifierRuleAction</a>

---


### SecurityFindingsSeverityModifierRuleActionSetOutputReference <a name="SecurityFindingsSeverityModifierRuleActionSetOutputReference" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.security_findings_severity_modifier_rule.SecurityFindingsSeverityModifierRuleActionSetOutputReference;

new SecurityFindingsSeverityModifierRuleActionSetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.severityInput">severityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet">SecurityFindingsSeverityModifierRuleActionSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.severityInput"></a>

```java
public java.lang.String getSeverityInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityFindingsSeverityModifierRuleActionSet getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet">SecurityFindingsSeverityModifierRuleActionSet</a>

---


### SecurityFindingsSeverityModifierRuleActionShiftOutputReference <a name="SecurityFindingsSeverityModifierRuleActionShiftOutputReference" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.security_findings_severity_modifier_rule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference;

new SecurityFindingsSeverityModifierRuleActionShiftOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.severityDeltaInput">severityDeltaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.severityDelta">severityDelta</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift">SecurityFindingsSeverityModifierRuleActionShift</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `severityDeltaInput`<sup>Optional</sup> <a name="severityDeltaInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.severityDeltaInput"></a>

```java
public java.lang.String getSeverityDeltaInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `severityDelta`<sup>Required</sup> <a name="severityDelta" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.severityDelta"></a>

```java
public java.lang.String getSeverityDelta();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityFindingsSeverityModifierRuleActionShift getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift">SecurityFindingsSeverityModifierRuleActionShift</a>

---


### SecurityFindingsSeverityModifierRuleRuleOutputReference <a name="SecurityFindingsSeverityModifierRuleRuleOutputReference" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.security_findings_severity_modifier_rule.SecurityFindingsSeverityModifierRuleRuleOutputReference;

new SecurityFindingsSeverityModifierRuleRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQuery` <a name="resetQuery" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.resetQuery"></a>

```java
public void resetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.findingTypesInput">findingTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.findingTypes">findingTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule">SecurityFindingsSeverityModifierRuleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `findingTypesInput`<sup>Optional</sup> <a name="findingTypesInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.findingTypesInput"></a>

```java
public java.util.List<java.lang.String> getFindingTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `findingTypes`<sup>Required</sup> <a name="findingTypes" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.findingTypes"></a>

```java
public java.util.List<java.lang.String> getFindingTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityFindingsSeverityModifierRuleRule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule">SecurityFindingsSeverityModifierRuleRule</a>

---



