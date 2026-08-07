# `securityFindingsDueDateRule` Submodule <a name="`securityFindingsDueDateRule` Submodule" id="@cdktn/provider-datadog.securityFindingsDueDateRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityFindingsDueDateRule <a name="SecurityFindingsDueDateRule" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule datadog_security_findings_due_date_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer"></a>

```python
from cdktn_provider_datadog import security_findings_due_date_rule

securityFindingsDueDateRule.SecurityFindingsDueDateRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action: SecurityFindingsDueDateRuleAction,
  name: str,
  rule: SecurityFindingsDueDateRuleRule,
  enabled: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.action">action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction">SecurityFindingsDueDateRuleAction</a></code> | The action to take when the due date rule matches a finding. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the due date rule. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule">SecurityFindingsDueDateRuleRule</a></code> | Defines the scope of findings to which the automation rule applies. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the due date rule is enabled. Defaults to `true`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.action"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction">SecurityFindingsDueDateRuleAction</a>

The action to take when the due date rule matches a finding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#action SecurityFindingsDueDateRule#action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.name"></a>

- *Type:* str

The name of the due date rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#name SecurityFindingsDueDateRule#name}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.rule"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule">SecurityFindingsDueDateRuleRule</a>

Defines the scope of findings to which the automation rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#rule SecurityFindingsDueDateRule#rule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the due date rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#enabled SecurityFindingsDueDateRule#enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_action` <a name="put_action" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.putAction"></a>

```python
def put_action(
  due_days_per_severity: IResolvable | typing.List[SecurityFindingsDueDateRuleActionDueDaysPerSeverity],
  due_from: str,
  reason_description: str = None
) -> None
```

###### `due_days_per_severity`<sup>Required</sup> <a name="due_days_per_severity" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.putAction.parameter.dueDaysPerSeverity"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity">SecurityFindingsDueDateRuleActionDueDaysPerSeverity</a>]

A list of severity-to-due-date mappings. Each severity may appear at most once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#due_days_per_severity SecurityFindingsDueDateRule#due_days_per_severity}

---

###### `due_from`<sup>Required</sup> <a name="due_from" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.putAction.parameter.dueFrom"></a>

- *Type:* str

The reference point from which the due date is calculated.

When `fix_available` is selected but not applicable to the finding type, `first_seen` is used instead. Valid values are `first_seen`, `fix_available`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#due_from SecurityFindingsDueDateRule#due_from}

---

###### `reason_description`<sup>Optional</sup> <a name="reason_description" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.putAction.parameter.reasonDescription"></a>

- *Type:* str

An optional description providing more context for the due date assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#reason_description SecurityFindingsDueDateRule#reason_description}

---

##### `put_rule` <a name="put_rule" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.putRule"></a>

```python
def put_rule(
  finding_types: typing.List[str],
  query: str = None
) -> None
```

###### `finding_types`<sup>Required</sup> <a name="finding_types" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.putRule.parameter.findingTypes"></a>

- *Type:* typing.List[str]

The list of security finding types that the automation rule applies to.

Valid values are `api_security`, `attack_path`, `host_and_container_vulnerability`, `iac_misconfiguration`, `identity_risk`, `library_vulnerability`, `misconfiguration`, `runtime_code_vulnerability`, `secret`, `static_code_vulnerability`, `workload_activity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#finding_types SecurityFindingsDueDateRule#finding_types}

---

###### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.putRule.parameter.query"></a>

- *Type:* str

A search query to further filter the findings matched by this rule.

The `@workflow.*` namespace and `@status` fields are not permitted. For a reference of available fields, see the [Security Findings schema documentation](https://docs.datadoghq.com/security/guide/findings-schema/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#query SecurityFindingsDueDateRule#query}

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.resetEnabled"></a>

```python
def reset_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SecurityFindingsDueDateRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isConstruct"></a>

```python
from cdktn_provider_datadog import security_findings_due_date_rule

securityFindingsDueDateRule.SecurityFindingsDueDateRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isTerraformElement"></a>

```python
from cdktn_provider_datadog import security_findings_due_date_rule

securityFindingsDueDateRule.SecurityFindingsDueDateRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isTerraformResource"></a>

```python
from cdktn_provider_datadog import security_findings_due_date_rule

securityFindingsDueDateRule.SecurityFindingsDueDateRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import security_findings_due_date_rule

securityFindingsDueDateRule.SecurityFindingsDueDateRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SecurityFindingsDueDateRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecurityFindingsDueDateRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecurityFindingsDueDateRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecurityFindingsDueDateRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.action">action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference">SecurityFindingsDueDateRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference">SecurityFindingsDueDateRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.actionInput">action_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction">SecurityFindingsDueDateRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.ruleInput">rule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule">SecurityFindingsDueDateRuleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.action"></a>

```python
action: SecurityFindingsDueDateRuleActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference">SecurityFindingsDueDateRuleActionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.rule"></a>

```python
rule: SecurityFindingsDueDateRuleRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference">SecurityFindingsDueDateRuleRuleOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.actionInput"></a>

```python
action_input: IResolvable | SecurityFindingsDueDateRuleAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction">SecurityFindingsDueDateRuleAction</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.ruleInput"></a>

```python
rule_input: IResolvable | SecurityFindingsDueDateRuleRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule">SecurityFindingsDueDateRuleRule</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityFindingsDueDateRuleAction <a name="SecurityFindingsDueDateRuleAction" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction.Initializer"></a>

```python
from cdktn_provider_datadog import security_findings_due_date_rule

securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction(
  due_days_per_severity: IResolvable | typing.List[SecurityFindingsDueDateRuleActionDueDaysPerSeverity],
  due_from: str,
  reason_description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction.property.dueDaysPerSeverity">due_days_per_severity</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity">SecurityFindingsDueDateRuleActionDueDaysPerSeverity</a>]</code> | A list of severity-to-due-date mappings. Each severity may appear at most once. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction.property.dueFrom">due_from</a></code> | <code>str</code> | The reference point from which the due date is calculated. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction.property.reasonDescription">reason_description</a></code> | <code>str</code> | An optional description providing more context for the due date assignment. |

---

##### `due_days_per_severity`<sup>Required</sup> <a name="due_days_per_severity" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction.property.dueDaysPerSeverity"></a>

```python
due_days_per_severity: IResolvable | typing.List[SecurityFindingsDueDateRuleActionDueDaysPerSeverity]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity">SecurityFindingsDueDateRuleActionDueDaysPerSeverity</a>]

A list of severity-to-due-date mappings. Each severity may appear at most once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#due_days_per_severity SecurityFindingsDueDateRule#due_days_per_severity}

---

##### `due_from`<sup>Required</sup> <a name="due_from" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction.property.dueFrom"></a>

```python
due_from: str
```

- *Type:* str

The reference point from which the due date is calculated.

When `fix_available` is selected but not applicable to the finding type, `first_seen` is used instead. Valid values are `first_seen`, `fix_available`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#due_from SecurityFindingsDueDateRule#due_from}

---

##### `reason_description`<sup>Optional</sup> <a name="reason_description" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction.property.reasonDescription"></a>

```python
reason_description: str
```

- *Type:* str

An optional description providing more context for the due date assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#reason_description SecurityFindingsDueDateRule#reason_description}

---

### SecurityFindingsDueDateRuleActionDueDaysPerSeverity <a name="SecurityFindingsDueDateRuleActionDueDaysPerSeverity" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity.Initializer"></a>

```python
from cdktn_provider_datadog import security_findings_due_date_rule

securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity(
  due_in_days: typing.Union[int, float],
  severity: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity.property.dueInDays">due_in_days</a></code> | <code>typing.Union[int, float]</code> | The number of days from the reference point until the finding is due. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity.property.severity">severity</a></code> | <code>str</code> | A severity level used to configure due date thresholds. Valid values are `critical`, `high`, `medium`, `low`, `info`, `none`, `unknown`. |

---

##### `due_in_days`<sup>Required</sup> <a name="due_in_days" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity.property.dueInDays"></a>

```python
due_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of days from the reference point until the finding is due.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#due_in_days SecurityFindingsDueDateRule#due_in_days}

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity.property.severity"></a>

```python
severity: str
```

- *Type:* str

A severity level used to configure due date thresholds. Valid values are `critical`, `high`, `medium`, `low`, `info`, `none`, `unknown`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#severity SecurityFindingsDueDateRule#severity}

---

### SecurityFindingsDueDateRuleConfig <a name="SecurityFindingsDueDateRuleConfig" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.Initializer"></a>

```python
from cdktn_provider_datadog import security_findings_due_date_rule

securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action: SecurityFindingsDueDateRuleAction,
  name: str,
  rule: SecurityFindingsDueDateRuleRule,
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.action">action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction">SecurityFindingsDueDateRuleAction</a></code> | The action to take when the due date rule matches a finding. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.name">name</a></code> | <code>str</code> | The name of the due date rule. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule">SecurityFindingsDueDateRuleRule</a></code> | Defines the scope of findings to which the automation rule applies. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the due date rule is enabled. Defaults to `true`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.action"></a>

```python
action: SecurityFindingsDueDateRuleAction
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction">SecurityFindingsDueDateRuleAction</a>

The action to take when the due date rule matches a finding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#action SecurityFindingsDueDateRule#action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the due date rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#name SecurityFindingsDueDateRule#name}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.rule"></a>

```python
rule: SecurityFindingsDueDateRuleRule
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule">SecurityFindingsDueDateRuleRule</a>

Defines the scope of findings to which the automation rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#rule SecurityFindingsDueDateRule#rule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the due date rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#enabled SecurityFindingsDueDateRule#enabled}

---

### SecurityFindingsDueDateRuleRule <a name="SecurityFindingsDueDateRuleRule" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule.Initializer"></a>

```python
from cdktn_provider_datadog import security_findings_due_date_rule

securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule(
  finding_types: typing.List[str],
  query: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule.property.findingTypes">finding_types</a></code> | <code>typing.List[str]</code> | The list of security finding types that the automation rule applies to. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule.property.query">query</a></code> | <code>str</code> | A search query to further filter the findings matched by this rule. |

---

##### `finding_types`<sup>Required</sup> <a name="finding_types" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule.property.findingTypes"></a>

```python
finding_types: typing.List[str]
```

- *Type:* typing.List[str]

The list of security finding types that the automation rule applies to.

Valid values are `api_security`, `attack_path`, `host_and_container_vulnerability`, `iac_misconfiguration`, `identity_risk`, `library_vulnerability`, `misconfiguration`, `runtime_code_vulnerability`, `secret`, `static_code_vulnerability`, `workload_activity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#finding_types SecurityFindingsDueDateRule#finding_types}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule.property.query"></a>

```python
query: str
```

- *Type:* str

A search query to further filter the findings matched by this rule.

The `@workflow.*` namespace and `@status` fields are not permitted. For a reference of available fields, see the [Security Findings schema documentation](https://docs.datadoghq.com/security/guide/findings-schema/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rule#query SecurityFindingsDueDateRule#query}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityFindingsDueDateRuleActionDueDaysPerSeverityList <a name="SecurityFindingsDueDateRuleActionDueDaysPerSeverityList" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.Initializer"></a>

```python
from cdktn_provider_datadog import security_findings_due_date_rule

securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity">SecurityFindingsDueDateRuleActionDueDaysPerSeverity</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityFindingsDueDateRuleActionDueDaysPerSeverity]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity">SecurityFindingsDueDateRuleActionDueDaysPerSeverity</a>]

---


### SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference <a name="SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import security_findings_due_date_rule

securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.dueInDaysInput">due_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.severityInput">severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.dueInDays">due_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity">SecurityFindingsDueDateRuleActionDueDaysPerSeverity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `due_in_days_input`<sup>Optional</sup> <a name="due_in_days_input" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.dueInDaysInput"></a>

```python
due_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.severityInput"></a>

```python
severity_input: str
```

- *Type:* str

---

##### `due_in_days`<sup>Required</sup> <a name="due_in_days" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.dueInDays"></a>

```python
due_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityFindingsDueDateRuleActionDueDaysPerSeverity
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity">SecurityFindingsDueDateRuleActionDueDaysPerSeverity</a>

---


### SecurityFindingsDueDateRuleActionOutputReference <a name="SecurityFindingsDueDateRuleActionOutputReference" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import security_findings_due_date_rule

securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.putDueDaysPerSeverity">put_due_days_per_severity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.resetReasonDescription">reset_reason_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_due_days_per_severity` <a name="put_due_days_per_severity" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.putDueDaysPerSeverity"></a>

```python
def put_due_days_per_severity(
  value: IResolvable | typing.List[SecurityFindingsDueDateRuleActionDueDaysPerSeverity]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.putDueDaysPerSeverity.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity">SecurityFindingsDueDateRuleActionDueDaysPerSeverity</a>]

---

##### `reset_reason_description` <a name="reset_reason_description" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.resetReasonDescription"></a>

```python
def reset_reason_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.dueDaysPerSeverity">due_days_per_severity</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList">SecurityFindingsDueDateRuleActionDueDaysPerSeverityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.dueDaysPerSeverityInput">due_days_per_severity_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity">SecurityFindingsDueDateRuleActionDueDaysPerSeverity</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.dueFromInput">due_from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.reasonDescriptionInput">reason_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.dueFrom">due_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.reasonDescription">reason_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction">SecurityFindingsDueDateRuleAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `due_days_per_severity`<sup>Required</sup> <a name="due_days_per_severity" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.dueDaysPerSeverity"></a>

```python
due_days_per_severity: SecurityFindingsDueDateRuleActionDueDaysPerSeverityList
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverityList">SecurityFindingsDueDateRuleActionDueDaysPerSeverityList</a>

---

##### `due_days_per_severity_input`<sup>Optional</sup> <a name="due_days_per_severity_input" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.dueDaysPerSeverityInput"></a>

```python
due_days_per_severity_input: IResolvable | typing.List[SecurityFindingsDueDateRuleActionDueDaysPerSeverity]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionDueDaysPerSeverity">SecurityFindingsDueDateRuleActionDueDaysPerSeverity</a>]

---

##### `due_from_input`<sup>Optional</sup> <a name="due_from_input" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.dueFromInput"></a>

```python
due_from_input: str
```

- *Type:* str

---

##### `reason_description_input`<sup>Optional</sup> <a name="reason_description_input" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.reasonDescriptionInput"></a>

```python
reason_description_input: str
```

- *Type:* str

---

##### `due_from`<sup>Required</sup> <a name="due_from" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.dueFrom"></a>

```python
due_from: str
```

- *Type:* str

---

##### `reason_description`<sup>Required</sup> <a name="reason_description" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.reasonDescription"></a>

```python
reason_description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleActionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityFindingsDueDateRuleAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleAction">SecurityFindingsDueDateRuleAction</a>

---


### SecurityFindingsDueDateRuleRuleOutputReference <a name="SecurityFindingsDueDateRuleRuleOutputReference" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import security_findings_due_date_rule

securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.resetQuery">reset_query</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_query` <a name="reset_query" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.resetQuery"></a>

```python
def reset_query() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.findingTypesInput">finding_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.findingTypes">finding_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule">SecurityFindingsDueDateRuleRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `finding_types_input`<sup>Optional</sup> <a name="finding_types_input" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.findingTypesInput"></a>

```python
finding_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `finding_types`<sup>Required</sup> <a name="finding_types" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.findingTypes"></a>

```python
finding_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityFindingsDueDateRuleRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsDueDateRule.SecurityFindingsDueDateRuleRule">SecurityFindingsDueDateRuleRule</a>

---



