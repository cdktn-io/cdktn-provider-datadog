# `securityFindingsSeverityModifierRule` Submodule <a name="`securityFindingsSeverityModifierRule` Submodule" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityFindingsSeverityModifierRule <a name="SecurityFindingsSeverityModifierRule" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule datadog_security_findings_severity_modifier_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer"></a>

```python
from cdktn_provider_datadog import security_findings_severity_modifier_rule

securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action: SecurityFindingsSeverityModifierRuleAction,
  name: str,
  rule: SecurityFindingsSeverityModifierRuleRule,
  enabled: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.action">action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction">SecurityFindingsSeverityModifierRuleAction</a></code> | The action to take when a severity modifier rule matches a finding. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the severity modifier rule. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule">SecurityFindingsSeverityModifierRuleRule</a></code> | Defines the scope of findings to which the automation rule applies. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the severity modifier rule is enabled. Defaults to `true`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.action"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction">SecurityFindingsSeverityModifierRuleAction</a>

The action to take when a severity modifier rule matches a finding.

This is a discriminated union on `type`: `set` assigns a fixed severity, while `shift` moves the severity up or down by one severity rank. In this resource the union is expressed as the `set` and `shift` blocks; exactly one must be provided. A severity modifier rule's `rule.query` must not filter on `@severity` or on the `@severity_details.user_adjusted.*` namespace. Use `@severity_details.adjusted.value` instead, which reflects the severity before user-defined adjustments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#action SecurityFindingsSeverityModifierRule#action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.name"></a>

- *Type:* str

The name of the severity modifier rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#name SecurityFindingsSeverityModifierRule#name}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.rule"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule">SecurityFindingsSeverityModifierRuleRule</a>

Defines the scope of findings to which the automation rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#rule SecurityFindingsSeverityModifierRule#rule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the severity modifier rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#enabled SecurityFindingsSeverityModifierRule#enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_action` <a name="put_action" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.putAction"></a>

```python
def put_action(
  set: SecurityFindingsSeverityModifierRuleActionSet = None,
  shift: SecurityFindingsSeverityModifierRuleActionShift = None
) -> None
```

###### `set`<sup>Optional</sup> <a name="set" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.putAction.parameter.set"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet">SecurityFindingsSeverityModifierRuleActionSet</a>

Sets matched findings to a fixed severity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#set SecurityFindingsSeverityModifierRule#set}

---

###### `shift`<sup>Optional</sup> <a name="shift" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.putAction.parameter.shift"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift">SecurityFindingsSeverityModifierRuleActionShift</a>

Shifts matched findings up or down by one severity rank.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#shift SecurityFindingsSeverityModifierRule#shift}

---

##### `put_rule` <a name="put_rule" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.putRule"></a>

```python
def put_rule(
  finding_types: typing.List[str],
  query: str = None
) -> None
```

###### `finding_types`<sup>Required</sup> <a name="finding_types" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.putRule.parameter.findingTypes"></a>

- *Type:* typing.List[str]

The list of security finding types that the automation rule applies to.

Valid values are `api_security`, `attack_path`, `host_and_container_vulnerability`, `iac_misconfiguration`, `identity_risk`, `library_vulnerability`, `misconfiguration`, `runtime_code_vulnerability`, `secret`, `static_code_vulnerability`, `workload_activity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#finding_types SecurityFindingsSeverityModifierRule#finding_types}

---

###### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.putRule.parameter.query"></a>

- *Type:* str

A search query to further filter the findings matched by this rule.

The `@workflow.*` namespace and `@status` fields are not permitted. For a reference of available fields, see the [Security Findings schema documentation](https://docs.datadoghq.com/security/guide/findings-schema/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#query SecurityFindingsSeverityModifierRule#query}

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.resetEnabled"></a>

```python
def reset_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SecurityFindingsSeverityModifierRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isConstruct"></a>

```python
from cdktn_provider_datadog import security_findings_severity_modifier_rule

securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isTerraformElement"></a>

```python
from cdktn_provider_datadog import security_findings_severity_modifier_rule

securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isTerraformResource"></a>

```python
from cdktn_provider_datadog import security_findings_severity_modifier_rule

securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import security_findings_severity_modifier_rule

securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SecurityFindingsSeverityModifierRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecurityFindingsSeverityModifierRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecurityFindingsSeverityModifierRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecurityFindingsSeverityModifierRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.action">action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference">SecurityFindingsSeverityModifierRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference">SecurityFindingsSeverityModifierRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.actionInput">action_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction">SecurityFindingsSeverityModifierRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.ruleInput">rule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule">SecurityFindingsSeverityModifierRuleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.action"></a>

```python
action: SecurityFindingsSeverityModifierRuleActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference">SecurityFindingsSeverityModifierRuleActionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.rule"></a>

```python
rule: SecurityFindingsSeverityModifierRuleRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference">SecurityFindingsSeverityModifierRuleRuleOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.actionInput"></a>

```python
action_input: IResolvable | SecurityFindingsSeverityModifierRuleAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction">SecurityFindingsSeverityModifierRuleAction</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.ruleInput"></a>

```python
rule_input: IResolvable | SecurityFindingsSeverityModifierRuleRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule">SecurityFindingsSeverityModifierRuleRule</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityFindingsSeverityModifierRuleAction <a name="SecurityFindingsSeverityModifierRuleAction" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction.Initializer"></a>

```python
from cdktn_provider_datadog import security_findings_severity_modifier_rule

securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction(
  set: SecurityFindingsSeverityModifierRuleActionSet = None,
  shift: SecurityFindingsSeverityModifierRuleActionShift = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction.property.set">set</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet">SecurityFindingsSeverityModifierRuleActionSet</a></code> | Sets matched findings to a fixed severity. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction.property.shift">shift</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift">SecurityFindingsSeverityModifierRuleActionShift</a></code> | Shifts matched findings up or down by one severity rank. |

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction.property.set"></a>

```python
set: SecurityFindingsSeverityModifierRuleActionSet
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet">SecurityFindingsSeverityModifierRuleActionSet</a>

Sets matched findings to a fixed severity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#set SecurityFindingsSeverityModifierRule#set}

---

##### `shift`<sup>Optional</sup> <a name="shift" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction.property.shift"></a>

```python
shift: SecurityFindingsSeverityModifierRuleActionShift
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift">SecurityFindingsSeverityModifierRuleActionShift</a>

Shifts matched findings up or down by one severity rank.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#shift SecurityFindingsSeverityModifierRule#shift}

---

### SecurityFindingsSeverityModifierRuleActionSet <a name="SecurityFindingsSeverityModifierRuleActionSet" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet.Initializer"></a>

```python
from cdktn_provider_datadog import security_findings_severity_modifier_rule

securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet(
  severity: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet.property.severity">severity</a></code> | <code>str</code> | The severity to assign to matched findings. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet.property.description">description</a></code> | <code>str</code> | An optional free-form explanation for the severity change. |

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet.property.severity"></a>

```python
severity: str
```

- *Type:* str

The severity to assign to matched findings.

`info_none` is not supported for the `iac_misconfiguration`, `runtime_code_vulnerability`, `secret`, or `static_code_vulnerability` finding types. Valid values are `info_none`, `low`, `medium`, `high`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#severity SecurityFindingsSeverityModifierRule#severity}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet.property.description"></a>

```python
description: str
```

- *Type:* str

An optional free-form explanation for the severity change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#description SecurityFindingsSeverityModifierRule#description}

---

### SecurityFindingsSeverityModifierRuleActionShift <a name="SecurityFindingsSeverityModifierRuleActionShift" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift.Initializer"></a>

```python
from cdktn_provider_datadog import security_findings_severity_modifier_rule

securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift(
  severity_delta: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift.property.severityDelta">severity_delta</a></code> | <code>str</code> | The direction in which to shift the severity of matched findings by one rank. Valid values are `up_one`, `down_one`. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift.property.description">description</a></code> | <code>str</code> | An optional free-form explanation for the severity change. |

---

##### `severity_delta`<sup>Required</sup> <a name="severity_delta" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift.property.severityDelta"></a>

```python
severity_delta: str
```

- *Type:* str

The direction in which to shift the severity of matched findings by one rank. Valid values are `up_one`, `down_one`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#severity_delta SecurityFindingsSeverityModifierRule#severity_delta}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift.property.description"></a>

```python
description: str
```

- *Type:* str

An optional free-form explanation for the severity change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#description SecurityFindingsSeverityModifierRule#description}

---

### SecurityFindingsSeverityModifierRuleConfig <a name="SecurityFindingsSeverityModifierRuleConfig" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.Initializer"></a>

```python
from cdktn_provider_datadog import security_findings_severity_modifier_rule

securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action: SecurityFindingsSeverityModifierRuleAction,
  name: str,
  rule: SecurityFindingsSeverityModifierRuleRule,
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.action">action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction">SecurityFindingsSeverityModifierRuleAction</a></code> | The action to take when a severity modifier rule matches a finding. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.name">name</a></code> | <code>str</code> | The name of the severity modifier rule. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule">SecurityFindingsSeverityModifierRuleRule</a></code> | Defines the scope of findings to which the automation rule applies. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the severity modifier rule is enabled. Defaults to `true`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.action"></a>

```python
action: SecurityFindingsSeverityModifierRuleAction
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction">SecurityFindingsSeverityModifierRuleAction</a>

The action to take when a severity modifier rule matches a finding.

This is a discriminated union on `type`: `set` assigns a fixed severity, while `shift` moves the severity up or down by one severity rank. In this resource the union is expressed as the `set` and `shift` blocks; exactly one must be provided. A severity modifier rule's `rule.query` must not filter on `@severity` or on the `@severity_details.user_adjusted.*` namespace. Use `@severity_details.adjusted.value` instead, which reflects the severity before user-defined adjustments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#action SecurityFindingsSeverityModifierRule#action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the severity modifier rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#name SecurityFindingsSeverityModifierRule#name}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.rule"></a>

```python
rule: SecurityFindingsSeverityModifierRuleRule
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule">SecurityFindingsSeverityModifierRuleRule</a>

Defines the scope of findings to which the automation rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#rule SecurityFindingsSeverityModifierRule#rule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the severity modifier rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#enabled SecurityFindingsSeverityModifierRule#enabled}

---

### SecurityFindingsSeverityModifierRuleRule <a name="SecurityFindingsSeverityModifierRuleRule" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule.Initializer"></a>

```python
from cdktn_provider_datadog import security_findings_severity_modifier_rule

securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule(
  finding_types: typing.List[str],
  query: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule.property.findingTypes">finding_types</a></code> | <code>typing.List[str]</code> | The list of security finding types that the automation rule applies to. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule.property.query">query</a></code> | <code>str</code> | A search query to further filter the findings matched by this rule. |

---

##### `finding_types`<sup>Required</sup> <a name="finding_types" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule.property.findingTypes"></a>

```python
finding_types: typing.List[str]
```

- *Type:* typing.List[str]

The list of security finding types that the automation rule applies to.

Valid values are `api_security`, `attack_path`, `host_and_container_vulnerability`, `iac_misconfiguration`, `identity_risk`, `library_vulnerability`, `misconfiguration`, `runtime_code_vulnerability`, `secret`, `static_code_vulnerability`, `workload_activity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#finding_types SecurityFindingsSeverityModifierRule#finding_types}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule.property.query"></a>

```python
query: str
```

- *Type:* str

A search query to further filter the findings matched by this rule.

The `@workflow.*` namespace and `@status` fields are not permitted. For a reference of available fields, see the [Security Findings schema documentation](https://docs.datadoghq.com/security/guide/findings-schema/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#query SecurityFindingsSeverityModifierRule#query}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityFindingsSeverityModifierRuleActionOutputReference <a name="SecurityFindingsSeverityModifierRuleActionOutputReference" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import security_findings_severity_modifier_rule

securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.putSet">put_set</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.putShift">put_shift</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.resetSet">reset_set</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.resetShift">reset_shift</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_set` <a name="put_set" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.putSet"></a>

```python
def put_set(
  severity: str,
  description: str = None
) -> None
```

###### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.putSet.parameter.severity"></a>

- *Type:* str

The severity to assign to matched findings.

`info_none` is not supported for the `iac_misconfiguration`, `runtime_code_vulnerability`, `secret`, or `static_code_vulnerability` finding types. Valid values are `info_none`, `low`, `medium`, `high`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#severity SecurityFindingsSeverityModifierRule#severity}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.putSet.parameter.description"></a>

- *Type:* str

An optional free-form explanation for the severity change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#description SecurityFindingsSeverityModifierRule#description}

---

##### `put_shift` <a name="put_shift" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.putShift"></a>

```python
def put_shift(
  severity_delta: str,
  description: str = None
) -> None
```

###### `severity_delta`<sup>Required</sup> <a name="severity_delta" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.putShift.parameter.severityDelta"></a>

- *Type:* str

The direction in which to shift the severity of matched findings by one rank. Valid values are `up_one`, `down_one`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#severity_delta SecurityFindingsSeverityModifierRule#severity_delta}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.putShift.parameter.description"></a>

- *Type:* str

An optional free-form explanation for the severity change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_severity_modifier_rule#description SecurityFindingsSeverityModifierRule#description}

---

##### `reset_set` <a name="reset_set" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.resetSet"></a>

```python
def reset_set() -> None
```

##### `reset_shift` <a name="reset_shift" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.resetShift"></a>

```python
def reset_shift() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.set">set</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference">SecurityFindingsSeverityModifierRuleActionSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.shift">shift</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference">SecurityFindingsSeverityModifierRuleActionShiftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.setInput">set_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet">SecurityFindingsSeverityModifierRuleActionSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.shiftInput">shift_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift">SecurityFindingsSeverityModifierRuleActionShift</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction">SecurityFindingsSeverityModifierRuleAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.set"></a>

```python
set: SecurityFindingsSeverityModifierRuleActionSetOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference">SecurityFindingsSeverityModifierRuleActionSetOutputReference</a>

---

##### `shift`<sup>Required</sup> <a name="shift" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.shift"></a>

```python
shift: SecurityFindingsSeverityModifierRuleActionShiftOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference">SecurityFindingsSeverityModifierRuleActionShiftOutputReference</a>

---

##### `set_input`<sup>Optional</sup> <a name="set_input" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.setInput"></a>

```python
set_input: IResolvable | SecurityFindingsSeverityModifierRuleActionSet
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet">SecurityFindingsSeverityModifierRuleActionSet</a>

---

##### `shift_input`<sup>Optional</sup> <a name="shift_input" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.shiftInput"></a>

```python
shift_input: IResolvable | SecurityFindingsSeverityModifierRuleActionShift
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift">SecurityFindingsSeverityModifierRuleActionShift</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityFindingsSeverityModifierRuleAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction">SecurityFindingsSeverityModifierRuleAction</a>

---


### SecurityFindingsSeverityModifierRuleActionSetOutputReference <a name="SecurityFindingsSeverityModifierRuleActionSetOutputReference" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import security_findings_severity_modifier_rule

securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.severityInput">severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet">SecurityFindingsSeverityModifierRuleActionSet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.severityInput"></a>

```python
severity_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityFindingsSeverityModifierRuleActionSet
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet">SecurityFindingsSeverityModifierRuleActionSet</a>

---


### SecurityFindingsSeverityModifierRuleActionShiftOutputReference <a name="SecurityFindingsSeverityModifierRuleActionShiftOutputReference" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import security_findings_severity_modifier_rule

securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.severityDeltaInput">severity_delta_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.severityDelta">severity_delta</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift">SecurityFindingsSeverityModifierRuleActionShift</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `severity_delta_input`<sup>Optional</sup> <a name="severity_delta_input" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.severityDeltaInput"></a>

```python
severity_delta_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `severity_delta`<sup>Required</sup> <a name="severity_delta" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.severityDelta"></a>

```python
severity_delta: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityFindingsSeverityModifierRuleActionShift
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift">SecurityFindingsSeverityModifierRuleActionShift</a>

---


### SecurityFindingsSeverityModifierRuleRuleOutputReference <a name="SecurityFindingsSeverityModifierRuleRuleOutputReference" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import security_findings_severity_modifier_rule

securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.resetQuery">reset_query</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_query` <a name="reset_query" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.resetQuery"></a>

```python
def reset_query() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.findingTypesInput">finding_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.findingTypes">finding_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule">SecurityFindingsSeverityModifierRuleRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `finding_types_input`<sup>Optional</sup> <a name="finding_types_input" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.findingTypesInput"></a>

```python
finding_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `finding_types`<sup>Required</sup> <a name="finding_types" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.findingTypes"></a>

```python
finding_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityFindingsSeverityModifierRuleRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule">SecurityFindingsSeverityModifierRuleRule</a>

---



