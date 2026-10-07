# `securityFindingsInboxRule` Submodule <a name="`securityFindingsInboxRule` Submodule" id="@cdktn/provider-datadog.securityFindingsInboxRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityFindingsInboxRule <a name="SecurityFindingsInboxRule" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_inbox_rule datadog_security_findings_inbox_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.Initializer"></a>

```python
from cdktn_provider_datadog import security_findings_inbox_rule

securityFindingsInboxRule.SecurityFindingsInboxRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action: SecurityFindingsInboxRuleAction,
  name: str,
  rule: SecurityFindingsInboxRuleRule,
  enabled: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.Initializer.parameter.action">action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleAction">SecurityFindingsInboxRuleAction</a></code> | The action to take when the inbox rule matches a finding. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the inbox rule. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.Initializer.parameter.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRule">SecurityFindingsInboxRuleRule</a></code> | Defines the scope of findings to which the automation rule applies. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the inbox rule is enabled. Defaults to `true`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.Initializer.parameter.action"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleAction">SecurityFindingsInboxRuleAction</a>

The action to take when the inbox rule matches a finding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_inbox_rule#action SecurityFindingsInboxRule#action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.Initializer.parameter.name"></a>

- *Type:* str

The name of the inbox rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_inbox_rule#name SecurityFindingsInboxRule#name}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.Initializer.parameter.rule"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRule">SecurityFindingsInboxRuleRule</a>

Defines the scope of findings to which the automation rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_inbox_rule#rule SecurityFindingsInboxRule#rule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the inbox rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_inbox_rule#enabled SecurityFindingsInboxRule#enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_action` <a name="put_action" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.putAction"></a>

```python
def put_action(
  description: str = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.putAction.parameter.description"></a>

- *Type:* str

An optional description providing more context for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_inbox_rule#description SecurityFindingsInboxRule#description}

---

##### `put_rule` <a name="put_rule" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.putRule"></a>

```python
def put_rule(
  finding_types: typing.List[str],
  query: str = None
) -> None
```

###### `finding_types`<sup>Required</sup> <a name="finding_types" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.putRule.parameter.findingTypes"></a>

- *Type:* typing.List[str]

The list of security finding types that the automation rule applies to.

Valid values are `api_security`, `attack_path`, `host_and_container_vulnerability`, `iac_misconfiguration`, `identity_risk`, `library_vulnerability`, `misconfiguration`, `runtime_code_vulnerability`, `secret`, `static_code_vulnerability`, `workload_activity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_inbox_rule#finding_types SecurityFindingsInboxRule#finding_types}

---

###### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.putRule.parameter.query"></a>

- *Type:* str

A search query to further filter the findings matched by this rule.

The `@workflow.*` namespace and `@status` fields are not permitted. For a reference of available fields, see the [Security Findings schema documentation](https://docs.datadoghq.com/security/guide/findings-schema/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_inbox_rule#query SecurityFindingsInboxRule#query}

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.resetEnabled"></a>

```python
def reset_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SecurityFindingsInboxRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.isConstruct"></a>

```python
from cdktn_provider_datadog import security_findings_inbox_rule

securityFindingsInboxRule.SecurityFindingsInboxRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.isTerraformElement"></a>

```python
from cdktn_provider_datadog import security_findings_inbox_rule

securityFindingsInboxRule.SecurityFindingsInboxRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.isTerraformResource"></a>

```python
from cdktn_provider_datadog import security_findings_inbox_rule

securityFindingsInboxRule.SecurityFindingsInboxRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import security_findings_inbox_rule

securityFindingsInboxRule.SecurityFindingsInboxRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SecurityFindingsInboxRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecurityFindingsInboxRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecurityFindingsInboxRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_inbox_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecurityFindingsInboxRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.action">action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference">SecurityFindingsInboxRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference">SecurityFindingsInboxRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.actionInput">action_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleAction">SecurityFindingsInboxRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.ruleInput">rule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRule">SecurityFindingsInboxRuleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.action"></a>

```python
action: SecurityFindingsInboxRuleActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference">SecurityFindingsInboxRuleActionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.rule"></a>

```python
rule: SecurityFindingsInboxRuleRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference">SecurityFindingsInboxRuleRuleOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.actionInput"></a>

```python
action_input: IResolvable | SecurityFindingsInboxRuleAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleAction">SecurityFindingsInboxRuleAction</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.ruleInput"></a>

```python
rule_input: IResolvable | SecurityFindingsInboxRuleRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRule">SecurityFindingsInboxRuleRule</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityFindingsInboxRuleAction <a name="SecurityFindingsInboxRuleAction" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleAction.Initializer"></a>

```python
from cdktn_provider_datadog import security_findings_inbox_rule

securityFindingsInboxRule.SecurityFindingsInboxRuleAction(
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleAction.property.description">description</a></code> | <code>str</code> | An optional description providing more context for the rule. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleAction.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description providing more context for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_inbox_rule#description SecurityFindingsInboxRule#description}

---

### SecurityFindingsInboxRuleConfig <a name="SecurityFindingsInboxRuleConfig" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.Initializer"></a>

```python
from cdktn_provider_datadog import security_findings_inbox_rule

securityFindingsInboxRule.SecurityFindingsInboxRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action: SecurityFindingsInboxRuleAction,
  name: str,
  rule: SecurityFindingsInboxRuleRule,
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.action">action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleAction">SecurityFindingsInboxRuleAction</a></code> | The action to take when the inbox rule matches a finding. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.name">name</a></code> | <code>str</code> | The name of the inbox rule. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRule">SecurityFindingsInboxRuleRule</a></code> | Defines the scope of findings to which the automation rule applies. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the inbox rule is enabled. Defaults to `true`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.action"></a>

```python
action: SecurityFindingsInboxRuleAction
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleAction">SecurityFindingsInboxRuleAction</a>

The action to take when the inbox rule matches a finding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_inbox_rule#action SecurityFindingsInboxRule#action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the inbox rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_inbox_rule#name SecurityFindingsInboxRule#name}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.rule"></a>

```python
rule: SecurityFindingsInboxRuleRule
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRule">SecurityFindingsInboxRuleRule</a>

Defines the scope of findings to which the automation rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_inbox_rule#rule SecurityFindingsInboxRule#rule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the inbox rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_inbox_rule#enabled SecurityFindingsInboxRule#enabled}

---

### SecurityFindingsInboxRuleRule <a name="SecurityFindingsInboxRuleRule" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRule.Initializer"></a>

```python
from cdktn_provider_datadog import security_findings_inbox_rule

securityFindingsInboxRule.SecurityFindingsInboxRuleRule(
  finding_types: typing.List[str],
  query: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRule.property.findingTypes">finding_types</a></code> | <code>typing.List[str]</code> | The list of security finding types that the automation rule applies to. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRule.property.query">query</a></code> | <code>str</code> | A search query to further filter the findings matched by this rule. |

---

##### `finding_types`<sup>Required</sup> <a name="finding_types" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRule.property.findingTypes"></a>

```python
finding_types: typing.List[str]
```

- *Type:* typing.List[str]

The list of security finding types that the automation rule applies to.

Valid values are `api_security`, `attack_path`, `host_and_container_vulnerability`, `iac_misconfiguration`, `identity_risk`, `library_vulnerability`, `misconfiguration`, `runtime_code_vulnerability`, `secret`, `static_code_vulnerability`, `workload_activity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_inbox_rule#finding_types SecurityFindingsInboxRule#finding_types}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRule.property.query"></a>

```python
query: str
```

- *Type:* str

A search query to further filter the findings matched by this rule.

The `@workflow.*` namespace and `@status` fields are not permitted. For a reference of available fields, see the [Security Findings schema documentation](https://docs.datadoghq.com/security/guide/findings-schema/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/security_findings_inbox_rule#query SecurityFindingsInboxRule#query}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityFindingsInboxRuleActionOutputReference <a name="SecurityFindingsInboxRuleActionOutputReference" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import security_findings_inbox_rule

securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleAction">SecurityFindingsInboxRuleAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityFindingsInboxRuleAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleAction">SecurityFindingsInboxRuleAction</a>

---


### SecurityFindingsInboxRuleRuleOutputReference <a name="SecurityFindingsInboxRuleRuleOutputReference" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import security_findings_inbox_rule

securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.resetQuery">reset_query</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_query` <a name="reset_query" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.resetQuery"></a>

```python
def reset_query() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.property.findingTypesInput">finding_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.property.findingTypes">finding_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRule">SecurityFindingsInboxRuleRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `finding_types_input`<sup>Optional</sup> <a name="finding_types_input" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.property.findingTypesInput"></a>

```python
finding_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `finding_types`<sup>Required</sup> <a name="finding_types" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.property.findingTypes"></a>

```python
finding_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityFindingsInboxRuleRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRule">SecurityFindingsInboxRuleRule</a>

---



