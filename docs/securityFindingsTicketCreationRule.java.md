# `securityFindingsTicketCreationRule` Submodule <a name="`securityFindingsTicketCreationRule` Submodule" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityFindingsTicketCreationRule <a name="SecurityFindingsTicketCreationRule" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule datadog_security_findings_ticket_creation_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer"></a>

```java
import io.cdktn.providers.datadog.security_findings_ticket_creation_rule.SecurityFindingsTicketCreationRule;

SecurityFindingsTicketCreationRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .action(SecurityFindingsTicketCreationRuleAction)
    .name(java.lang.String)
    .rule(SecurityFindingsTicketCreationRuleRule)
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.action">action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction">SecurityFindingsTicketCreationRuleAction</a></code> | The action to take when the ticket creation rule matches a finding. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the ticket creation rule. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule">SecurityFindingsTicketCreationRuleRule</a></code> | Defines the scope of findings to which the automation rule applies. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the ticket creation rule is enabled. Defaults to `true`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.action"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction">SecurityFindingsTicketCreationRuleAction</a>

The action to take when the ticket creation rule matches a finding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#action SecurityFindingsTicketCreationRule#action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the ticket creation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#name SecurityFindingsTicketCreationRule#name}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.rule"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule">SecurityFindingsTicketCreationRuleRule</a>

Defines the scope of findings to which the automation rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#rule SecurityFindingsTicketCreationRule#rule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the ticket creation rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#enabled SecurityFindingsTicketCreationRule#enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAction` <a name="putAction" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.putAction"></a>

```java
public void putAction(SecurityFindingsTicketCreationRuleAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction">SecurityFindingsTicketCreationRuleAction</a>

---

##### `putRule` <a name="putRule" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.putRule"></a>

```java
public void putRule(SecurityFindingsTicketCreationRuleRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule">SecurityFindingsTicketCreationRuleRule</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.resetEnabled"></a>

```java
public void resetEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityFindingsTicketCreationRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isConstruct"></a>

```java
import io.cdktn.providers.datadog.security_findings_ticket_creation_rule.SecurityFindingsTicketCreationRule;

SecurityFindingsTicketCreationRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.security_findings_ticket_creation_rule.SecurityFindingsTicketCreationRule;

SecurityFindingsTicketCreationRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.security_findings_ticket_creation_rule.SecurityFindingsTicketCreationRule;

SecurityFindingsTicketCreationRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.security_findings_ticket_creation_rule.SecurityFindingsTicketCreationRule;

SecurityFindingsTicketCreationRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecurityFindingsTicketCreationRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SecurityFindingsTicketCreationRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecurityFindingsTicketCreationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecurityFindingsTicketCreationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SecurityFindingsTicketCreationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.action">action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference">SecurityFindingsTicketCreationRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference">SecurityFindingsTicketCreationRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.actionInput">actionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction">SecurityFindingsTicketCreationRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.ruleInput">ruleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule">SecurityFindingsTicketCreationRuleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.action"></a>

```java
public SecurityFindingsTicketCreationRuleActionOutputReference getAction();
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference">SecurityFindingsTicketCreationRuleActionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.rule"></a>

```java
public SecurityFindingsTicketCreationRuleRuleOutputReference getRule();
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference">SecurityFindingsTicketCreationRuleRuleOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.actionInput"></a>

```java
public IResolvable|SecurityFindingsTicketCreationRuleAction getActionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction">SecurityFindingsTicketCreationRuleAction</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.ruleInput"></a>

```java
public IResolvable|SecurityFindingsTicketCreationRuleRule getRuleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule">SecurityFindingsTicketCreationRuleRule</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityFindingsTicketCreationRuleAction <a name="SecurityFindingsTicketCreationRuleAction" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.Initializer"></a>

```java
import io.cdktn.providers.datadog.security_findings_ticket_creation_rule.SecurityFindingsTicketCreationRuleAction;

SecurityFindingsTicketCreationRuleAction.builder()
    .maxTicketsPerDay(java.lang.Number)
    .projectId(java.lang.String)
    .target(java.lang.String)
//  .assigneeId(java.lang.String)
//  .fields(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.maxTicketsPerDay">maxTicketsPerDay</a></code> | <code>java.lang.Number</code> | The maximum number of tickets the rule may create per day. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The UUID of the Case Management project. Must be a valid UUID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.target">target</a></code> | <code>java.lang.String</code> | The ticketing system to create tickets in. Valid values are `jira`, `case_management`. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.assigneeId">assigneeId</a></code> | <code>java.lang.String</code> | The UUID of the default assignee for created tickets. Must be a valid UUID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.fields">fields</a></code> | <code>java.lang.String</code> | A JSON-encoded object of custom fields of the Jira issue to create. |

---

##### `maxTicketsPerDay`<sup>Required</sup> <a name="maxTicketsPerDay" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.maxTicketsPerDay"></a>

```java
public java.lang.Number getMaxTicketsPerDay();
```

- *Type:* java.lang.Number

The maximum number of tickets the rule may create per day.

If exceeded, one final ticket will be created, explaining the limit was hit and linking back to the responsible rule. Value must be between 1 and 500.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#max_tickets_per_day SecurityFindingsTicketCreationRule#max_tickets_per_day}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The UUID of the Case Management project. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#project_id SecurityFindingsTicketCreationRule#project_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

The ticketing system to create tickets in. Valid values are `jira`, `case_management`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#target SecurityFindingsTicketCreationRule#target}

---

##### `assigneeId`<sup>Optional</sup> <a name="assigneeId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.assigneeId"></a>

```java
public java.lang.String getAssigneeId();
```

- *Type:* java.lang.String

The UUID of the default assignee for created tickets. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#assignee_id SecurityFindingsTicketCreationRule#assignee_id}

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.fields"></a>

```java
public java.lang.String getFields();
```

- *Type:* java.lang.String

A JSON-encoded object of custom fields of the Jira issue to create.

For the list of available fields, see the [Jira documentation](https://developer.atlassian.com/cloud/jira/platform/rest/v2/api-group-issues/#api-rest-api-2-issue-createmeta-projectidorkey-issuetypes-issuetypeid-get).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#fields SecurityFindingsTicketCreationRule#fields}

---

### SecurityFindingsTicketCreationRuleConfig <a name="SecurityFindingsTicketCreationRuleConfig" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.security_findings_ticket_creation_rule.SecurityFindingsTicketCreationRuleConfig;

SecurityFindingsTicketCreationRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .action(SecurityFindingsTicketCreationRuleAction)
    .name(java.lang.String)
    .rule(SecurityFindingsTicketCreationRuleRule)
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.action">action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction">SecurityFindingsTicketCreationRuleAction</a></code> | The action to take when the ticket creation rule matches a finding. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the ticket creation rule. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule">SecurityFindingsTicketCreationRuleRule</a></code> | Defines the scope of findings to which the automation rule applies. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the ticket creation rule is enabled. Defaults to `true`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.action"></a>

```java
public SecurityFindingsTicketCreationRuleAction getAction();
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction">SecurityFindingsTicketCreationRuleAction</a>

The action to take when the ticket creation rule matches a finding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#action SecurityFindingsTicketCreationRule#action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the ticket creation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#name SecurityFindingsTicketCreationRule#name}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.rule"></a>

```java
public SecurityFindingsTicketCreationRuleRule getRule();
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule">SecurityFindingsTicketCreationRuleRule</a>

Defines the scope of findings to which the automation rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#rule SecurityFindingsTicketCreationRule#rule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the ticket creation rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#enabled SecurityFindingsTicketCreationRule#enabled}

---

### SecurityFindingsTicketCreationRuleRule <a name="SecurityFindingsTicketCreationRuleRule" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule.Initializer"></a>

```java
import io.cdktn.providers.datadog.security_findings_ticket_creation_rule.SecurityFindingsTicketCreationRuleRule;

SecurityFindingsTicketCreationRuleRule.builder()
    .findingTypes(java.util.List<java.lang.String>)
//  .query(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule.property.findingTypes">findingTypes</a></code> | <code>java.util.List<java.lang.String></code> | The list of security finding types that the automation rule applies to. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule.property.query">query</a></code> | <code>java.lang.String</code> | A search query to further filter the findings matched by this rule. |

---

##### `findingTypes`<sup>Required</sup> <a name="findingTypes" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule.property.findingTypes"></a>

```java
public java.util.List<java.lang.String> getFindingTypes();
```

- *Type:* java.util.List<java.lang.String>

The list of security finding types that the automation rule applies to.

Valid values are `api_security`, `attack_path`, `host_and_container_vulnerability`, `iac_misconfiguration`, `identity_risk`, `library_vulnerability`, `misconfiguration`, `runtime_code_vulnerability`, `secret`, `static_code_vulnerability`, `workload_activity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#finding_types SecurityFindingsTicketCreationRule#finding_types}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

A search query to further filter the findings matched by this rule.

The `@workflow.*` namespace and `@status` fields are not permitted. For a reference of available fields, see the [Security Findings schema documentation](https://docs.datadoghq.com/security/guide/findings-schema/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#query SecurityFindingsTicketCreationRule#query}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityFindingsTicketCreationRuleActionOutputReference <a name="SecurityFindingsTicketCreationRuleActionOutputReference" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.security_findings_ticket_creation_rule.SecurityFindingsTicketCreationRuleActionOutputReference;

new SecurityFindingsTicketCreationRuleActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.resetAssigneeId">resetAssigneeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.resetFields">resetFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAssigneeId` <a name="resetAssigneeId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.resetAssigneeId"></a>

```java
public void resetAssigneeId()
```

##### `resetFields` <a name="resetFields" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.resetFields"></a>

```java
public void resetFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.autoDisabledReason">autoDisabledReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.assigneeIdInput">assigneeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.maxTicketsPerDayInput">maxTicketsPerDayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.assigneeId">assigneeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.fields">fields</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.maxTicketsPerDay">maxTicketsPerDay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction">SecurityFindingsTicketCreationRuleAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoDisabledReason`<sup>Required</sup> <a name="autoDisabledReason" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.autoDisabledReason"></a>

```java
public java.lang.String getAutoDisabledReason();
```

- *Type:* java.lang.String

---

##### `assigneeIdInput`<sup>Optional</sup> <a name="assigneeIdInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.assigneeIdInput"></a>

```java
public java.lang.String getAssigneeIdInput();
```

- *Type:* java.lang.String

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.fieldsInput"></a>

```java
public java.lang.String getFieldsInput();
```

- *Type:* java.lang.String

---

##### `maxTicketsPerDayInput`<sup>Optional</sup> <a name="maxTicketsPerDayInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.maxTicketsPerDayInput"></a>

```java
public java.lang.Number getMaxTicketsPerDayInput();
```

- *Type:* java.lang.Number

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `assigneeId`<sup>Required</sup> <a name="assigneeId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.assigneeId"></a>

```java
public java.lang.String getAssigneeId();
```

- *Type:* java.lang.String

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.fields"></a>

```java
public java.lang.String getFields();
```

- *Type:* java.lang.String

---

##### `maxTicketsPerDay`<sup>Required</sup> <a name="maxTicketsPerDay" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.maxTicketsPerDay"></a>

```java
public java.lang.Number getMaxTicketsPerDay();
```

- *Type:* java.lang.Number

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityFindingsTicketCreationRuleAction getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction">SecurityFindingsTicketCreationRuleAction</a>

---


### SecurityFindingsTicketCreationRuleRuleOutputReference <a name="SecurityFindingsTicketCreationRuleRuleOutputReference" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.security_findings_ticket_creation_rule.SecurityFindingsTicketCreationRuleRuleOutputReference;

new SecurityFindingsTicketCreationRuleRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQuery` <a name="resetQuery" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.resetQuery"></a>

```java
public void resetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.findingTypesInput">findingTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.findingTypes">findingTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule">SecurityFindingsTicketCreationRuleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `findingTypesInput`<sup>Optional</sup> <a name="findingTypesInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.findingTypesInput"></a>

```java
public java.util.List<java.lang.String> getFindingTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `findingTypes`<sup>Required</sup> <a name="findingTypes" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.findingTypes"></a>

```java
public java.util.List<java.lang.String> getFindingTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityFindingsTicketCreationRuleRule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule">SecurityFindingsTicketCreationRuleRule</a>

---



